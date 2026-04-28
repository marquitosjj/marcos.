const fs = require('fs');

const dados = fs.readFileSync('alunos.txt', 'utf-8');
const linhas = dados.split('\n');

linhas.forEach(linha => {
  if (!linha.trim()) return; // ignora linha vazia

  const nomeMatch = linha.match(/nome:\s*([^|]+)/i);
  const notasMatch = linha.match(/nota\d:\s*([\d.]+)/gi);

  if (!nomeMatch || !notasMatch) {
    console.log('Linha inválida:', linha);
    return;
  }

  const nome = nomeMatch[1].trim();

  const notas = notasMatch.map(n => {
    return Number(n.split(':')[1]);
  });

  const soma = notas.reduce((acc, n) => acc + n, 0);
  const media = soma / notas.length;

  const status = media >= 6 ? 'Aprovado' : 'Reprovado';

  console.log(`${nome} - Média: ${media.toFixed(2)} - ${status}`);
});