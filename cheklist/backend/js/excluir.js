document.addEventListener("click", function(e) {
    if (e.target.classList.contains("btnExcluir")) {

        let id = e.target.dataset.id;

        if (confirm("Deseja excluir?")) {
            let dados = new FormData();
            dados.append("id", id);

            fetch("backend/app/excluir.php", {
                method: "POST",
                body: dados
            })
            .then(res => res.text())
            .then(data => {
                alert(data);

                
                listarChecklist();
            })
            .catch(error => {
                console.log("Erro:", error);
            });
        }
    }
});