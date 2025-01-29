function adicionarFrete() {
  const nomeFrete = document.getElementById("nomeFrete").value;
  const quantidadeKm = document.getElementById("quantidadeKm").value;
  const valorPorKm = document.getElementById("valorPorKm").value;

  if (!nomeFrete || !quantidadeKm || !valorPorKm) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const tabela = document.getElementById("listaFretes");
  const linha = document.createElement("div");

  linha.innerHTML = `
    <div>${nomeFrete}</div>
    <div>${quantidadeKm} km</div>
    <div>R$ ${parseFloat(valorPorKm).toFixed(2)}</div>
    <button class="btn" onclick="removerFrete(this)">Excluir</button>
  `;

  linha.className = "form-inline";
  tabela.appendChild(linha);

  document.getElementById("nomeFrete").value = "";
  document.getElementById("quantidadeKm").value = "";
  document.getElementById("valorPorKm").value = "";
}

function removerFrete(botao) {
  const linha = botao.parentElement;
  linha.remove();
}
