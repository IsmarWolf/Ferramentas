document.addEventListener("DOMContentLoaded", function () {
    // Aplica máscara de telefone
    $("#telefone").inputmask("(99) 99999-9999");

    document.getElementById("contactForm").addEventListener("submit", function (event) {
        let nome = document.getElementById("nome").value.trim();
        let email = document.getElementById("email").value.trim();
        let telefone = document.getElementById("telefone").value.trim();
        let mensagem = document.getElementById("mensagem").value.trim();
        let erroMsg = document.getElementById("mensagemErro");

        // Expressão regular para validar email
        let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (nome === "" || email === "" || telefone === "" || mensagem === "") {
            erroMsg.textContent = "Todos os campos são obrigatórios!";
            event.preventDefault();
            return;
        }

        if (!emailRegex.test(email)) {
            erroMsg.textContent = "Por favor, insira um e-mail válido!";
            event.preventDefault();
            return;
        }

        erroMsg.textContent = "";
    });
});