const fs = require("node:fs");               // Módulo para manipular sistema de arquivos
const path = require("node:path");           // Módulo para manipulação de caminhos de arquivos e pastas
const readline = require("node:readline");   // Módulo para ler entrada do usuário no terminal

// Define o caminho da pasta "notes" dentro do diretório atual (__dirname)
const notesDirectory = path.join(__dirname, "notes");

// Cria a interface para entrada e saída padrão no terminal
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Função para garantir que a pasta de notas exista antes de usar
function initializeNotesDirectory() {
  // Verifica se a pasta "notes" já existe
  if (!fs.existsSync(notesDirectory)) {
    // Se não existir, cria a pasta
    fs.mkdirSync(notesDirectory);
  }
}

// Função para listar todas as notas presentes na pasta "notes"
function listNotes() {
  // Lê os nomes dos arquivos dentro da pasta "notes"
  const notes = fs.readdirSync(notesDirectory);

  // Se não tiver nenhuma nota, informa o usuário
  if (notes.length === 0) {
    console.log("Nenhuma nota encontrada.");
  } else {
    console.log("Notas salvas:");
    // Para cada arquivo, imprime seu índice + 1 e o nome da nota
    notes.forEach((note, index) => {
      console.log(`${index + 1}. ${note}`);
    });
  }
}

// Função para ler e mostrar o conteúdo de uma nota selecionada pelo usuário
function readNote() {
  // Primeiro, lista as notas para o usuário escolher
  listNotes();

  // Pergunta qual nota o usuário quer ler (pelo número da lista)
  rl.question("Digite o número da nota que deseja ler:", (index) => {
    // Lê novamente a lista para garantir que está atualizada
    const notes = fs.readdirSync(notesDirectory);
    // Seleciona a nota baseada no índice fornecido (ajustando para índice zero)
    const selectedNote = notes[index - 1];

    // Verifica se o índice é válido (se a nota existe)
    if (!selectedNote) {
      console.log("Número da nota inválido!");
    } else {
      // Cria o caminho completo para o arquivo da nota
      const notePath = path.join(notesDirectory, selectedNote);
      // Lê o conteúdo do arquivo em formato texto
      const content = fs.readFileSync(notePath, "utf-8");
      // Exibe o conteúdo da nota para o usuário
      console.log(`Conteúdo da nota "${selectedNote}":\n\n${content}`);
    }

    // Após mostrar a nota, pergunta o que o usuário deseja fazer a seguir
    askForNextAction();
  });
}

// Função para criar uma nova nota
function createNote() {
  // Pergunta o nome da nota que o usuário quer criar
  rl.question("Digite o nome da nota: ", (noteName) => {
    // Cria o caminho completo do arquivo que será salvo
    const notePath = path.join(notesDirectory, noteName);

    // Pergunta o conteúdo da nota
    rl.question("Digite o conteúdo da nota:\n", (content) => {
      // Escreve o conteúdo no arquivo, adicionando a extensão ".txt"
      fs.writeFileSync(notePath + ".txt", content, "utf-8");
      // Confirma para o usuário que a nota foi criada
      console.log(`Nota ${noteName} foi criada com sucesso!`);

      // Pergunta o que o usuário quer fazer depois
      askForNextAction();
    });
  });
}

// Função para excluir uma nota
function deleteNote() {
  // Lista as notas para o usuário escolher qual excluir
  listNotes();

  // Pergunta o número da nota que o usuário deseja apagar
  rl.question("Digite o número da nota que deseja excluir: ", (index) => {
    // Lê a lista atualizada de notas
    const notes = fs.readdirSync(notesDirectory);
    // Seleciona a nota com base no índice fornecido
    const selectedNote = notes[index - 1];

    // Valida o índice da nota
    if (!selectedNote) {
      console.log("Número da nota inválido!");
    } else {
      // Cria o caminho completo para o arquivo da nota
      const notePath = path.join(notesDirectory, selectedNote);
      // Apaga o arquivo do sistema
      fs.unlinkSync(notePath);
      // Confirma para o usuário que a nota foi excluída
      console.log(`Nota "${selectedNote}" excluída com sucesso.`);
    }

    // Pergunta o que o usuário quer fazer depois
    askForNextAction();
  });
}

// Função para perguntar se o usuário deseja realizar outra ação ou encerrar o programa
function askForNextAction() {
  rl.question("\nDeseja realizar outra ação? (s/n): ", (answer) => {
    if (answer.toLowerCase() === "s") {
      // Se sim, chama a função principal (que deve ser criada para controlar o menu)
      main();
    } else {
      // Se não, encerra a interface de leitura e o programa
      console.log("Encerrando...");
      rl.close();
      process.exit(0);
    }
  });
}