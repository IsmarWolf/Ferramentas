<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nome = htmlspecialchars(trim($_POST["nome"]));
    $email = htmlspecialchars(trim($_POST["email"]));
    $telefone = htmlspecialchars(trim($_POST["telefone"]));
    $mensagem = htmlspecialchars(trim($_POST["mensagem"]));

    // Expressão regular para validar e-mail
    if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
        exit;
    }

    echo "<h2>Dados Recebidos:</h2>";
    echo "<p><strong>Nome:</strong> $nome</p>";
    echo "<p><strong>E-mail:</strong> $email</p>";
    echo "<p><strong>Telefone:</strong> $telefone</p>";
    echo "<p><strong>Mensagem:</strong> $mensagem</p>";
} else {
    echo "<p style='color:red; text-align:center;'>Método de envio inválido!</p>";
}
?>
