const readline = require('node:readline');
const fs = require('node:fs')
const path = require('node:path')
rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

showMenu()

//exibir menu 
function showMenu(){

        rl.question('Escolha uma opção:\n1- Criar anotação\n2- Listar todas as anotações\n3- Ler anotação\n4- Excluir anotação\n5- Sair\n', (option) => {
            switch(option){
            case '1':     
                createNewNote();
                break
            case '2':
                listNotes()
                break
            case '5':
                console.log('Encerrando programa...');
                rl.close()
                return
            default: 
                console.log('\nValor invalido!!!\nEscolha uma opção valida:\n');
            }
            showMenu()
    })
   
}

//função para perguntar 
function ask(questionText) {
  return new Promise((resolve) => {
    rl.question(questionText, resolve);
  });
}

//criar nova nota
async function createNewNote() {
    const name = await ask('Digite o nome da nova nota: ');
    const content = await ask('Digite o conteúdo da nota: ');

    try {
        await fs.promises.writeFile(`./${name}.txt`, content, 'utf-8');
        console.log('\n\nNota criada com sucesso!\n');
    } catch (error) {
        console.log('Erro ao criar a nota:\n', error.message);
    }
    showMenu()
}

//listar notas


