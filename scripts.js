// Adicione seus scripts JavaScript aqui

// Cria o formulário de contato
const contactForm = document.createElement('div');
contactForm.innerHTML = `
    <div id="contactForm" style="display:none; position:fixed; bottom:10px; right:10px; background:white; padding:20px; box-shadow:0 0 10px rgba(0,0,0,0.1);">
        <h2>Precisa de ajuda?</h2>
        <form>
            <label for="name">Nome:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="email">Email:</label><br>
            <input type="email" id="email" name="email"><br>
            <label for="message">Mensagem:</label><br>
            <textarea id="message" name="message"></textarea><br>
            <input type="submit" value="Enviar">
        </form>
    </div>
`;
document.body.appendChild(contactForm);

// Mostra o formulário quando a página é rolada
window.addEventListener('scroll', function() {
    const contactForm = document.getElementById('contactForm');
    if (window.scrollY > 100) {
        contactForm.style.display = 'block';
    } else {
        contactForm.style.display = 'none';
    }
});
