function adicionarDespesa() {
  const descricao = document.getElementById("descricao").value;
  const tipoCalculo = document.getElementById("tipoCalculo").value;
  const valor = document.getElementById("valor").value;

  if (!descricao || !valor) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const tabela = document.getElementById("listaDespesas");
  const linha = document.createElement("div");

  linha.innerHTML = `
    <div>${descricao}</div>
    <div>${
      tipoCalculo === "%" ? valor + "%" : "R$ " + parseFloat(valor).toFixed(2)
    }</div>
    <button class="btn" onclick="removerDespesa(this)">Excluir</button>
  `;

  linha.className = "form-inline";
  tabela.appendChild(linha);

  document.getElementById("descricao").value = "";
  document.getElementById("tipoCalculo").value = "%";
  document.getElementById("valor").value = "";
}

function removerDespesa(botao) {
  const linha = botao.parentElement;
  linha.remove();
}
