    
    // Importa o módulo nativa do Node.js "fs" (file system) para trabalhar com o sistema de arquivos
    const fs = require('node:fs');

    // Verifica de forma sincrona se o arquivo "arquivo.txt" existe no diretório atual
    const exists = fs.existsSync('arquivo.txt');;

    // Se o arquivo existe...
    if (exists) {
        // Lê o arquivo de forma assíncrona
        // - Primeiro parâmetro: nome (e caminho) do arquivo a ser lido
        // - Segundo parâmetro: a codificação de caractere ('utf-8') para que o resultado seja uma string
        // - Terceiro parâmetro: um callback que recebe o erro (se houve) e o conteúdo do arquivo
        fs.readFile('arquivo.txt', 'utf-8', (error, data) => {
            if (error) {
                // Se houve um erro ao fazer a leitura, ele é exibido no console
                console.log(`Ocorreu um erro ${error.message}`);
                return;
            }
            // Se deu tudo certo, exibe o conteúdo do arquivo no console
            console.log(data);
        })
    } else {
        // Se o arquivo não existe, exibe uma mensagem no console
        console.log('O arquivo não existe');
    }
