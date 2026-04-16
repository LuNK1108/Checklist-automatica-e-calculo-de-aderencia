function listarChecklist() {
    console.log("listagem carregou");

    fetch("backend/app/listar.php")
    .then(res => res.text())
    .then(texto => {
        console.log("Resposta bruta:", texto);

    
        let dados = JSON.parse(texto);
        let tabela = document.getElementById("tabelaDados");

        tabela.innerHTML = "";

        dados.forEach(item => {
            
        tabela.innerHTML += `
    <tr>
        <td>${item.id}</td>
        <td>${item.secao_documento ?? ""}</td>
        <td>${item.descricao ?? ""}</td>
        <td>${item.resultado ?? ""}</td>
        <td>${item.data_hora_identificacao ?? ""}</td>
        <td>${item.classificacao_nc ?? ""}</td>
        <td>${item.prazo_resolucao ?? ""}</td>
        <td>${item.responsavel_resolucao ?? ""}</td>
        <td>${item.acao_corretiva ?? ""}</td>
        <td>${item.foi_resolvido ?? ""}</td>
        <td>${item.data_hora_escalonamento ?? ""}</td>
        <td>${item.data_hora_conclusao ?? ""}</td>
        <td>${item.status ?? ""}</td>
        <td>
            <button class="btnEditar" data-id="${item.id}">Editar</button>
            <button class="btnExcluir" data-id="${item.id}">Excluir</button>
        </td>
    </tr>
`;
        });
    })
    .catch(error => {
        console.log("Erro ao listar:", error);
    });

    
}

function formatarDateTimeLocal(valor) {
    if (!valor || valor === "0000-00-00 00:00:00") return "";
    return valor.replace(" ", "T").slice(0, 16);
}

function formatarDate(valor) {
    if (!valor || valor === "0000-00-00") return "";
    return valor.slice(0, 10);
}

document.addEventListener("click", function(e) {
    if (e.target.classList.contains("btnEditar")) {
        let linha = e.target.closest("tr");
        let colunas = linha.querySelectorAll("td");

        document.getElementById("id").value = colunas[0].textContent;

        document.querySelector('[name="secao_documento"]').value = colunas[1].textContent;
        document.querySelector('[name="descricao"]').value = colunas[2].textContent;
        document.querySelector('[name="resultado"]').value = colunas[3].textContent;

        document.querySelector('[name="data_hora_identificacao"]').value =
            formatarDateTimeLocal(colunas[4].textContent);

        document.querySelector('[name="classificacao_nc"]').value = colunas[5].textContent;

        document.querySelector('[name="prazo_resolucao"]').value =
            formatarDate(colunas[6].textContent);

        document.querySelector('[name="responsavel_resolucao"]').value = colunas[7].textContent;
        document.querySelector('[name="acao_corretiva"]').value = colunas[8].textContent;
        document.querySelector('[name="foi_resolvido"]').value = colunas[9].textContent;

        document.querySelector('[name="data_hora_escalonamento"]').value =
            formatarDateTimeLocal(colunas[10].textContent);

        document.querySelector('[name="data_hora_conclusao"]').value =
            formatarDateTimeLocal(colunas[11].textContent);

        document.querySelector('[name="status"]').value = colunas[12].textContent;
    }
});

listarChecklist();