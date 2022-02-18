<?php

$from = "contato@luanpereira.com";

// Destinatário
$to = "contato@luanpereira.com";

// Assunto do e-mail
$assunto = "Contato do através do site ...";

// Campos do formulário de contato
$nome = $_POST['name'];
$email = $_POST['email'];
$telefone = $_POST['phone'];
$mensagem = $_POST['content'];

// Monta o corpo da mensagem com os campos
$corpo = "<html><body>";
$corpo .= "Nome: $nome <br/>";
$corpo .= "Email: $email <br/>Telefone: $telefone <p>Mensagem: $mensagem</p>";
$corpo .= "</body></html>";

// Cabeçalho do e-mail
$email_headers = implode("\n", array("From: $nome", "Reply-To: $email", "Subject: $assunto", "Return-Path: $email", "MIME-Version: 1.0", "X-Priority: 3", "Content-Type: text/html; charset=UTF-8"));

$answer_subject = "Contato resposta";

$answer_body = "<html><body>";
$answer_body .= "testando resposta";
$answer_body .= "</html></body>";

// Cabeçalho do e-mail de resposta
$answer_header = implode("\n", array("From: $to", "Reply-To: $email", "Subject: $answer_subject", "Return-Path: $email", "MIME-Version: 1.0", "X-Priority: 3", "Content-Type: text/html; charset=UTF-8"));

//Verifica se os campos estão preenchidos para enviar então o email
if (!empty($nome) && !empty($email) && !empty($mensagem)) {
    mail($to, $assunto, $corpo, $email_headers);
    mail($email, $answer_subject, $answer_body, $answer_header);
    $msg = "Sua mensagem foi enviada com sucesso.";
    echo "<script>alert('$msg');window.location.assign('https://www.luanpereira.com');</script>";
} else {
    $msg = "Erro ao enviar a mensagem.";
    echo "<script>alert('$msg');window.location.assign('https://www.luanpereira.com');</script>";
}
?>
