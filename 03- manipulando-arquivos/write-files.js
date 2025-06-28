    
    // Importa o módulo nativa do Node.js "fs" (file system) para trabalhar com o sistema de arquivos
    const fs = require("node:fs");

    // Define o conteúdo que será gravado no arquivo
    const content = 'Conteudo do novo arquivo assincrono';

    /*
    Usamos fs.writeFile para escrever o conteúdo no arquivo de forma assíncrona.
    - Primeiro parâmetro: o nome (e caminho) do arquivo a ser criado.
    - Segundo parâmetro: o conteúdo que será gravado no arquivo.
    - Terceiro parâmetro: a codificação de caracteres, neste caso 'utf-8'.
    - Quarto parâmetro: um callback que é executado depois que a gravação é finalizada.
    */
    fs.writeFile("./arquivo.txt", content, "utf-8", (error) => {
        // Se houve um erro ao gravar o arquivo, ele é exibido no console
        if (error) {
            console.log(`Erro ao escrever o arquivo: ${error.message}`);
            return;
        }
        // Se deu tudo certo, exibe uma mensagem de confirmação
        console.log("Arquivo criado com sucesso"); 
    });
