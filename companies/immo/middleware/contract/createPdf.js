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

    pdf.create(html, { format: 'Letter' })
        .toStream(function (err, pdfStream) {
        res.attachment(`${contractForm.guestName}-rentalAggreement.pdf`);
        res.setHeader('content-type', 'application/pdf');
            // http://tomassetti.me/google-drive-automation-with-google-execution-api-filling-templates-programmatically-and-download-pdf-version/
        pdfStream.pipe(res);
            console.log(`yes worked nottt...`);
    });
};