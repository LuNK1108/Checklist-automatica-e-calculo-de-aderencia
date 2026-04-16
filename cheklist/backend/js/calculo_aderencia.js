function calcularAderencia(dados) {

    let baixa = 0;
    let media = 0;
    let alta = 0;

    dados.forEach(item => {
        if (item.classificacao_nc === "baixa") baixa++;
        if (item.classificacao_nc === "media") media++;
        if (item.classificacao_nc === "alta") alta++;
    });

    let totalNCF = baixa + media + alta;
    let totalItens = dados.length;

    let aderencia = ((totalItens - totalNCF) / totalItens) * 100;

    document.getElementById("baixa").textContent = baixa;
    document.getElementById("media").textContent = media;
    document.getElementById("alta").textContent = alta;
    document.getElementById("totalNCF").textContent = totalNCF;

    let faixa = document.getElementById("faixa");
    faixa.textContent = aderencia.toFixed(2) + "%";

    faixa.className = "";

    if (aderencia <= 60) {
        faixa.classList.add("vermelho");
    } else if (aderencia <= 90) {
        faixa.classList.add("amarelo");
    } else {
        faixa.classList.add("verde");
    }
}


fetch("backend/app/listar.php")
.then(res => res.json())
.then(dados => {
    calcularAderencia(dados);
});

fetch("backend/app/pontos.php")
.then(res => res.json())
.then(dado => {
    let total = dado.total;

    document.getElementById("totalItens").textContent = total;
});