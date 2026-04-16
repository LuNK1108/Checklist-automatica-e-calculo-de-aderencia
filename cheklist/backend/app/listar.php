<?php
include("C:/xampp/htdocs/cheklist/backend/conexao.php");

$sql = "SELECT * FROM nao_conformidades";
$result = mysqli_query($conn, $sql);

$dados = [];

while ($linha = mysqli_fetch_assoc($result)) {
    $dados[] = $linha;
}

header("Content-Type: application/json");
echo json_encode($dados);
?>