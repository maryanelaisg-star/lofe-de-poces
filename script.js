const btnFinalizar = document.getElementById("btnfinalizar")
const inp1 = document.getElementById("inp1");
const inp2 = document.getElementById("inp2");
const inp3 = document.getElementById("inp3");
const inp4 = document.getElementById("inp4");

let brigadeiro = 5;
let beijinho = 6;
let bolo = 15;
let pudim = 25;

function somarPreco() {
    valor_total = (Number(inp1.value)) + (Number(inp2.value)) + (Number(inp3.value)) + (Number(inp4.value));
    total.innerHTML = "QTD:" + valor_total;
    valor_reais = ((Number(inp1.value)) * brigadeiro) + ((Number(inp2.value)) * beijinho) + ((Number(inp3.value)) * bolo)  + ((Number(inp4.value)) * pudim)
    total1.innerHTML = "R$" + valor_reais;
}
document.getElementById("btnFinalizar").addEventListener("click", somarPreco);


