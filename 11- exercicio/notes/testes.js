const fs = require('node:fs')
const path = require('node:path')
function listNotes(){
    //const absolutePath = path.resolve();

    fs.readdir('./', (err, files) => {
  if (err) {
    console.error('Erro ao ler a pasta:', err);
    return;
  }
  console.log(files); // array com nomes de arquivos e pastas dentro de "minha-pasta"
});
}

listNotes()