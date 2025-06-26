const path = require('node:path');

const caminho = '/user/leonardo/docs/arquivo.txt';

//basename() - retorna somente o nome do arquivo (com sua extensão)
console.log(path.basename(caminho)); //arquivo.txt

//dirname() - retorna o diretorio pai do caminho
console.log(path.dirname(caminho)); ///user/leonardo/docs

//extname() - retorna a extensão do arquivo
console.log(path.extname(caminho)); //.txt

//join() - junta caminhos automaticamente
const caminhoCompleto = path.join('user', 'leonardo', 'docs', 'index.js')
console.log(caminhoCompleto); //Windows: user\leonardo\docs\index.js - Linux/macOS: user/leonardo/projetos/index.js

//resolve() - Converte as partes em um caminho absoluto, baseado na raiz do sistema 
const caminhoAbsoluto = path.resolve('user', 'leonardo', 'docs', 'index.js')
console.log(caminhoAbsoluto); //c:\Users\Leonardo\Desktop\backendJs\00- Testes\path\user\leonardo\docs\index.js

