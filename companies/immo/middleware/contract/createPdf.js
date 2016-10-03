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
    
    let header = 'CONTRAT DE LOCATION'; 
    if (contractForm.contractType === 'exampleAgreement') {
        header = 'CONTRAT DE LOCATION - EXAMPLE'
    } else if (contractForm.contractType === 'welcome') {
        header = 'WELCOME BUNDLE'
    }
    
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
    pdf.create(contractForm.transform(html), options)
        .toStream(function (err, pdfStream) {
            const pdfName = contractForm.getFileName();
            console.log(`pdfName:${pdfName}`);
            res.attachment(`${pdfName}.pdf`);
            res.setHeader('content-type', 'application/pdf');
            pdfStream.pipe(res);
        });
};