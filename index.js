//index.js  
// send email - enter emailJS ServiceCode and TemplateCode 
    function sendmail(filtered) {
    //let fullName = document.getElementById("name").value;
    let userEmail = document.getElementById("email").value;
    let userMessage = filtered;

        var contactParams = {
            from_name: userEmail,
            //from_email: userEmail,
            message: filtered
        };

        emailjs.send('emailJS_ServiceCode', 'emailJS_TemplateCode', contactParams).then(function (res) {});
};
