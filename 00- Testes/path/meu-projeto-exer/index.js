const path = require('node:path');
const fs = require('node:fs');

const caminhoArquivos = path.resolve(__dirname, 'documentos')

const arquivos = fs.readdirSync(caminhoArquivos)

arquivos.forEach(i => {
    const caminho = path.resolve(__dirname, 'documentos', i)
    const basename = path.basename(i)
    const extname = path.extname(i)
    const dirname = path.dirname(caminho)
    const parse = path.parse(i)
    console.log(`Caminho: ${caminho}\nbasename: ${basename}\nextname: ${extname}\ndirname: ${dirname}\nparse: ${JSON.stringify(parse, null, 2)}`);
    console.log('\n-----------------\n\n');
    
})