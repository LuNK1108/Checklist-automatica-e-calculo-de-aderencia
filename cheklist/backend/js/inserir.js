function inserir_checklist() {
    document.getElementById("formNC").addEventListener("submit", function(e) {
        e.preventDefault();

        let form = document.getElementById("formNC");
        let dados = new FormData(form);

        let id = document.getElementById("id").value;
        let url = "backend/app/inserir.php";

        if (id !== "") {
            url = "backend/app/editar.php";
        }

        fetch(url, {
            method: "POST",
            body: dados
        })
        .then(res => res.text())
        .then(data => {
            alert(data);
            form.reset();
            document.getElementById("id").value = "";
            listarChecklist();
        })
        .catch(error => {
            console.log("Erro:", error);
        });
    });
}

inserir_checklist();