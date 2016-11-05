import pdf from 'html-pdf';
import fs from 'fs';
// import file from '../../data/fr/rentalAgreement.html';
/**
 *
 * @param req.contractForm
 * @return req.pdf
 */
export default function createPdf(req, res) {
    if (!req.contractForm) {
        throw new Error('ContractForm is mandatory to create a PDF');
    }
    const contractForm = req.contractForm;

    
    let header = getHeader(contractForm);
    
    const fileName = `./companies/immo/data/${contractForm.language}/${contractForm.contractType}.html`;
    const html = fs.readFileSync(fileName, 'utf8');

    var options = {
        format: 'Letter',
        "border": {
            "top": "1cm",            // default is 0, units: mm, cm, in, px
            "right": "2cm",
            "bottom": "1cm",
            "left": "2cm"
        },
        "header": {
            "height": "15mm",
            "contents": {
                default: `<div style="color: #444; text-align:right"><i>${header}</i></div>`
            }
        },
        "footer": {
            "contents": {
                default: '<div style="color: #444; text-align: right"><i>{{page}}</i></div>'
            }
        }
    };
    return pdf.create(contractForm.transform(html), options)
        .toStream(function (err, pdfStream) {
            const pdfName = contractForm.getFileName();
            console.log(`pdfName:${pdfName}`);
            res.attachment(`${pdfName}.pdf`);
            res.setHeader('content-type', 'application/pdf');
            pdfStream.pipe(res);
        });


    function getHeader(contractForm) {
        if (contractForm.language === 'fr') {
            if (contractForm.contractType === 'exampleAgreement') {
                return 'CONTRAT DE LOCATION - EXAMPLE';
            } else if (contractForm.contractType === 'welcome') {
                return 'BIENVENUE';
            }
            return 'CONTRAT DE LOCATION';
        } else if (contractForm.language === 'en') {
            if (contractForm.contractType === 'exampleAgreement') {
                return 'RENTAL AGREEMENT - EXAMPLE';
            } else if (contractForm.contractType === 'welcome') {
                return 'WELCOME';
            }
            return 'RENTAL AGREEMENT';
        } else {
            if (contractForm.contractType === 'exampleAgreement') {
                return 'HUUR CONTRACT - VOORBEELD';
            } else if (contractForm.contractType === 'welcome') {
                return 'WELKOM';
            }
            return 'HUUR CONTRACT';
        }
    }
    
};