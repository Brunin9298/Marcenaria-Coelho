function sendMessageWhatsapp(event) {
    event.preventDefault();

    const nome = document.getElementById("nameUserZap").value;
    const mensagem = document.getElementById("messageUserZap").value;
    
    const texto = `Olá! Meu nome é ${nome}\n\n${encodeURIComponent(mensagem)}`;
    
    const numero = "5553991743422"; 
    
    const appURL = `whatsapp://send?phone=${numero}&text=${texto}`;
    const webURL = `https://wa.me/${numero}?text=${texto}`;

    window.location.href = appURL;

    setTimeout(() => {  
        window.location.href = webURL;
    }, 500);
}   