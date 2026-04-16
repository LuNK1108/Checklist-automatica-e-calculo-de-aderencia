<?php
include("C:/xampp/htdocs/cheklist/backend/conexao.php");

$sql = "SELECT COUNT(*) as total FROM nao_conformidades";
$result = mysqli_query($conn, $sql);

$row = mysqli_fetch_assoc($result);

echo json_encode($row);
?>