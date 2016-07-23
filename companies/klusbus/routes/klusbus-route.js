var express = require('express');
import { sendEmail } from '../../../services/email-service';
var router = express.Router();

/* GET home page. */
router.post('/', function (req, res) {
    const data = req.body;

    if (!Array.isArray(data.klusjes)) {
        data.klusjes = [data.klusjes]
    }
    if (!Array.isArray(data.formule)) {
        data.formule = [data.formule]
    }

    var emailObject = {
        "From": "Klusbus opdracht <info@deklusbus.org>",
        "To": 'gijs@deklusbus.org',
        "TemplateId": 798022,
        "TemplateModel": {
            "email": data.email,
            "phone": data.phone,
            "contactPreference": data.contactPreference,
            "klusjes": data.klusjes,
            "formule": data.formule,
            "freeText": data.freeText
        }
    };

    console.log("emailObject: " + JSON.stringify(emailObject));
    sendEmail(emailObject);

    return res.redirect('http://www.deklusbus.org/boeked-de-bus');
    // return res.redirect('http://localhost:8080/boeked-de-bus.html');
});

module.exports = router;
