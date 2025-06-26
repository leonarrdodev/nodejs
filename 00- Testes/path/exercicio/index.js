const path = require('node:path');
const fs = require('node:fs');

const caminhoArquivos = path.resolve(__dirname, 'arquivos')



verificarPastas(caminhoArquivos, ['textos', 'imagens', 'planilhas', 'outros'])

function verificarPastas(caminhoArquivos, nomesPastas){
    const arquivos = fs.readdirSync(caminhoArquivos).filter(nome => {
      const caminhoCompleto = path.join(caminhoArquivos, nome);
      return fs.statSync(caminhoCompleto).isFile();
    });

    nomesPastas.forEach((nome) => {
        const caminhoCompleto = path.join(caminhoArquivos, nome)
        if (!fs.existsSync(caminhoCompleto)) {
            fs.mkdirSync(caminhoCompleto, { recursive: true });
        }
    });

    moverArquivos(arquivos)
}



function moverArquivos(arq){
    arq.forEach(i => {
    const ext = path.extname(i)
    const categorias = {
        '.txt': 'textos',
        '.png': 'imagens',
        '.csv': 'planilhas'
    }
    const pasta = categorias[ext] || 'outros'
    let destino = path.join(caminhoArquivos, pasta, i)
    let origem = path.join(caminhoArquivos, i)
   
    fs.renameSync(origem, destino)
        

})
}

