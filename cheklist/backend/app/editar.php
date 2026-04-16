<?php
include("C:/xampp/htdocs/cheklist/backend/conexao.php");

$id = $_POST["id"] ?? null;
$secao_documento = $_POST["secao_documento"] ?? null;
$descricao = $_POST["descricao"] ?? null;
$resultado = $_POST["resultado"] ?? null;
$data_hora_identificacao = $_POST["data_hora_identificacao"] ?? null;
$classificacao_nc = $_POST["classificacao_nc"] ?? null;
$prazo_resolucao = $_POST["prazo_resolucao"] ?? null;
$responsavel_resolucao = $_POST["responsavel_resolucao"] ?? null;
$acao_corretiva = $_POST["acao_corretiva"] ?? null;
$foi_resolvido = $_POST["foi_resolvido"] ?? null;
$data_hora_escalonamento = $_POST["data_hora_escalonamento"] ?? null;
$data_hora_conclusao = $_POST["data_hora_conclusao"] ?? null;
$status = $_POST["status"] ?? null;

$sql = $conn->prepare("UPDATE nao_conformidades SET
    secao_documento = ?,
    descricao = ?,
    resultado = ?,
    data_hora_identificacao = ?,
    classificacao_nc = ?,
    prazo_resolucao = ?,
    responsavel_resolucao = ?,
    acao_corretiva = ?,
    foi_resolvido = ?,
    data_hora_escalonamento = ?,
    data_hora_conclusao = ?,
    status = ?
    WHERE id = ?");

$sql->bind_param(
    "ssssssssssssi",
    $secao_documento,
    $descricao,
    $resultado,
    $data_hora_identificacao,
    $classificacao_nc,
    $prazo_resolucao,
    $responsavel_resolucao,
    $acao_corretiva,
    $foi_resolvido,
    $data_hora_escalonamento,
    $data_hora_conclusao,
    $status,
    $id
);

if ($sql->execute()) {
    echo "Editado com sucesso!";
} else {
    echo "Erro ao editar: " . $sql->error;
}
?>