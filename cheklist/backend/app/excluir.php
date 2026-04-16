<?php
include("C:/xampp/htdocs/cheklist/backend/conexao.php");

$id = $_POST["id"] ?? null;

if ($id) {
    $sql = $conn->prepare("DELETE FROM nao_conformidades WHERE id = ?");
    $sql->bind_param("i", $id);

    if ($sql->execute()) {
        echo "Excluído com sucesso!";
    } else {
        echo "Erro ao excluir: " . $sql->error;
    }
} else {
    echo "ID inválido";
}
?>