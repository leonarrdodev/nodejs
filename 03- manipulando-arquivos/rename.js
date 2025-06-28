    
    // Importa o módulo nativa do Node.js "fs" (file system) para trabalhar com o sistema de arquivos
    const fs = require('node:fs');

    // Renomeia o arquivo de forma assíncrona
    // - Primeiro parâmetro: nome (e caminho) atual do arquivo
    // - Segundo parâmetro: nome (e caminho) para o qual ele deve ser renomeado
    // - Terceiro parâmetro: um callback que é chamado depois que o nome é alterado ou se ocorre um erro
    fs.rename('arquivo.txt', 'arquivo.csv', (err) => {
        if (err) {
            // Se houve um erro, ele é exibido no console
            console.log(`Erro ao renomear o arquivo: ${err.message}`);
            return;
        }
        // Se deu tudo certo, exibe uma confirmação
        console.log('Arquivo renomeado');
    });
