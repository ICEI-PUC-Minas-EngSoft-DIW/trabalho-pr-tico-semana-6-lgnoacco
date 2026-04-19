// Coletando os dados do cliente

let nome = prompt("Bem-vindo(a) à NOACCO!\n\nQual é o seu nome?");

let orcamento = prompt("Olá, " + nome + "! Qual é o seu orçamento disponível para a coleção? (R$)");

while (isNaN(orcamento) || orcamento === "" || orcamento === null) {
  orcamento = prompt("Valor inválido. Digite apenas números para o orçamento (R$):");
}

orcamento = parseFloat(orcamento);

let qtdPecas = prompt("Quantas peças deseja avaliar? (mínimo 1, máximo 5)");

while (isNaN(qtdPecas) || qtdPecas === "" || qtdPecas === null || qtdPecas < 1 || qtdPecas > 5) {
  qtdPecas = prompt("Valor inválido. Digite um número entre 1 e 5:");
}

qtdPecas = parseInt(qtdPecas);

let totalPecas = 0;

for (let i = 1; i <= qtdPecas; i++) {
  let precoPeca = prompt("Digite o valor da Peça Autoral " + i + " (R$):");

  while (isNaN(precoPeca) || precoPeca === "" || precoPeca === null) {
    precoPeca = prompt("Valor inválido. Digite novamente o valor da Peça " + i + " (R$):");
  }

  totalPecas = totalPecas + parseFloat(precoPeca);
}

let saldo = orcamento - totalPecas;
let margemAcessorios = orcamento * 0.30;

// Exibindo o resultado

let mensagem = "=== Resumo NOACCO ===\n";
mensagem = mensagem + "Cliente: " + nome + "\n";
mensagem = mensagem + "Orçamento: R$ " + orcamento.toFixed(2) + "\n";
mensagem = mensagem + "Total das peças: R$ " + totalPecas.toFixed(2) + "\n";
mensagem = mensagem + "Saldo: R$ " + saldo.toFixed(2) + "\n\n";

if (totalPecas > orcamento) {
  mensagem = mensagem + " O valor das peças excede seu planejamento.\nConsidere revisar a seleção.";
} else if (saldo >= margemAcessorios) {
  mensagem = mensagem + " Ótimo: você ainda tem margem para acessórios!";
} else {
  mensagem = mensagem + " Ok: Compra realizada com sucesso!";
}

alert(mensagem);

console.log("=== Relatório Final NOACCO ===");
console.log("Cliente: " + nome);
console.log("Orçamento disponível: R$ " + orcamento.toFixed(2));
console.log("Total das peças: R$ " + totalPecas.toFixed(2));
console.log("Saldo restante: R$ " + saldo.toFixed(2));
console.log("Margem para acessórios (30%): R$ " + margemAcessorios.toFixed(2));

if (totalPecas > orcamento) {
  console.log("Status: EXCEDEU o orçamento");
} else if (saldo >= margemAcessorios) {
  console.log("Status: MARGEM DISPONÍVEL para acessórios");
} else {
  console.log("Status: COMPRA OK, sem margem extra");
}