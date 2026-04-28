const fs = require('fs');

const dados = fs.readFileSync('estoque.txt', 'utf-8');
const linhas = dados.split('\n');

const produtos = linhas
  .filter(linha => linha.trim() !== '')
  .map(linha => {
    const nomeMatch = linha.match(/nome:\s*"([^"]+)"/i);
    const estoqueMatch = linha.match(/estoque:\s*(\d+)/i);

    return {
      nome: nomeMatch ? nomeMatch[1] : '',
      estoque: estoqueMatch ? Number(estoqueMatch[1]) : 0
    };
  });

for (let produto of produtos) {
  if (produto.estoque > 0) {
    console.log(`${produto.nome} - Estoque: ${produto.estoque}`);
  }
}