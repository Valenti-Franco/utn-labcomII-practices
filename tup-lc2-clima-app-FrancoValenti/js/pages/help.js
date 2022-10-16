const btn = document.getElementById('button');
const errormail = document.getElementById("errormail")
const mailcorrecto = document.getElementById("mailcorrecto")
const mail = document.getElementById("mail")
var form = document.getElementById('form')



function condicionMail(){
    
    var expresionRegular=/^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/
    var validar = expresionRegular.test(mail.value)
    if (validar){
        errormail.classList.add("display")
        const serviceID = 'default_service';
        const templateID = 'template_up9sl0u';

        emailjs.sendForm(serviceID, templateID, form)
            .then(() => {
            mailcorrecto.classList.remove("display")
            setTimeout(() => {
                mailcorrecto.classList.add("display")
            }, 2000);
            
            console.log('Enviado!');
            }, (err) => {
           
            alert(JSON.stringify(err));
            });
      
    }else{
        errormail.classList.remove("display")
    }
}