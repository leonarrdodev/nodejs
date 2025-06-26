const path = require('node:path');

const caminhoRelativo = './documentos/projetos/relatorio-final.txt';

const caminhoAbsoluto = path.resolve(caminhoRelativo);
const diretorio = path.dirname(caminhoRelativo);
const nomeArquivo = path.basename(caminhoRelativo);
const extArquivo = path.extname(caminhoRelativo);
const caminhoBackup = path.join(diretorio, 'arquivo-backup.txt')

console.log(caminhoAbsoluto);
console.log(diretorio);
console.log(nomeArquivo);
console.log(extArquivo);
console.log(caminhoBackup);