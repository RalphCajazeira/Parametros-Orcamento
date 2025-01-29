function adicionarDespesa() {
  const descricao = document.getElementById("descricao").value;
  const tipoCalculo = document.getElementById("tipoCalculo").value;
  const valor = document.getElementById("valor").value;

  if (!descricao || !valor) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const tabela = document.getElementById("listaDespesas");
  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td>${descricao}</td>
    <td>${tipoCalculo}</td>
    <td>${
      tipoCalculo === "%" ? valor + "%" : "R$ " + parseFloat(valor).toFixed(2)
    }</td>
    <td>
      <button class="delete-btn" onclick="removerDespesa(this)">Excluir</button>
    </td>
  `;

  tabela.appendChild(linha);

  document.getElementById("descricao").value = "";
  document.getElementById("tipoCalculo").value = "%";
  document.getElementById("valor").value = "";
}

function removerDespesa(botao) {
  const linha = botao.parentElement.parentElement;
  linha.remove();
}
