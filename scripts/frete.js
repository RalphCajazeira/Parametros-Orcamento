function adicionarFrete() {
  const nomeFrete = document.getElementById("nomeFrete").value;
  const quantidadeKm = document.getElementById("quantidadeKm").value;
  const valorPorKm = document.getElementById("valorPorKm").value;

  if (!nomeFrete || !quantidadeKm || !valorPorKm) {
    alert("Por favor, preencha todos os campos.");
    return;
  }

  const tabela = document.getElementById("listaFretes");
  const linha = document.createElement("tr");

  linha.innerHTML = `
    <td><input type="radio" name="fretePadrao"></td>
    <td>${nomeFrete}</td>
    <td>${quantidadeKm}</td>
    <td>R$ ${parseFloat(valorPorKm).toFixed(2)}</td>
  `;

  tabela.appendChild(linha);

  document.getElementById("nomeFrete").value = "";
  document.getElementById("quantidadeKm").value = "";
  document.getElementById("valorPorKm").value = "";
}
