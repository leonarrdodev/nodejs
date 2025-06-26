const path = require('path');
const fs = require('fs');

const arquivo = path.resolve(__dirname, 'arquivos', 'texto.txt');

console.log('Caminho gerado:', arquivo);

if (fs.existsSync(arquivo)) {
  console.log('✅ Arquivo encontrado!');
} else {
  console.log('❌ Arquivo não existe.');
}
