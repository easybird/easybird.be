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
    // const html = fs.readFileSync('./companies/immo/data/fr/rentalAgreement.html', 'utf8');
    const html = fs.readFileSync('./companies/immo/data/fr/RentalAgreement-FR.html', 'utf8');

    pdf.create(contractForm.transform(html), {
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
                default: '<div style="color: #444; text-align:right"><i>CONTRAT DE LOCATION</i></div>'
            }
        },
        "footer": {
            "contents": {
                default: '<div style="color: #444; text-align: right"><i>{{page}}</i></div>'
            }
        }
    })
        .toStream(function (err, pdfStream) {
            res.attachment(`${contractForm.guestName}-rentalAggreement.pdf`);
            res.setHeader('content-type', 'application/pdf');
            pdfStream.pipe(res);
            console.log(`yes worked nottt...`);
        });
};