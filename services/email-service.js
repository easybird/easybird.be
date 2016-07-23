import postmark from 'postmark';

export function sendEmail(emailObject) {

    const client = new postmark.Client('d1876a2b-1f60-424f-b84a-75dc9b46f478');


    return new Promise(function (resolve, reject) {

        var callbackFunction = function (err) {
            if (err) return reject(new Error("Problem sending reset password email: " + err.status + '-' + err.message));
        };
        return client.sendEmailWithTemplate(emailObject, callbackFunction);
    });
};
