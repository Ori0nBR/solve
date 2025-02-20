<?php
// Acessando as variáveis de ambiente definidas no .htaccess
$validUsername = getenv('USERNAME');
$validPassword = getenv('PASSWORD');

// Validando o login
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if ($username === $validUsername && $password === $validPassword) {
        echo "Login bem-sucedido!";
        // Redirecionar para a página interna
        header('Location: intranet.html');
    } else {
        echo "Credenciais inválidas.";
    }
}
?>