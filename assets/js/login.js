const validCredentials = {
    username: 'solvecolab', // Usuário fictício
    password: 'c0l4bs0lv3' // Senha fictícia
};

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica as credenciais
    if (username === validCredentials.username && password === validCredentials.password) {
        // Redireciona para a página de login do Trello
        window.location.href = "intranet.html"; // A página onde inicia o login com o Trello
    } else {
        // Exibe uma mensagem de erro se as credenciais forem inválidas
        document.getElementById("errorMessage").style.display = "block";
    }
});