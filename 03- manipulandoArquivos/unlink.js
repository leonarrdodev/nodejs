    
    // Importa o módulo nativa do Node.js "fs" (file system) para trabalhar com o sistema de arquivos
    const fs = require('node:fs');

    // Remove (exclui) o arquivo de forma assíncrona
    // - Primeiro parâmetro: caminho do arquivo que será removido
    // - Segundo parâmetro: um callback que é chamado depois que o arquivo é removido ou se ocorre um erro
    fs.unlink("./arquivo.csv", (err) => {
        if (err) {
            // Se houve um erro ao excluir o arquivo, ele é exibido no console
            console.log('Ocorreu um erro!', err.message);
            return;
        }
        // Se deu tudo certo, exibe uma confirmação
        console.log('Arquivo excluído com sucesso');
    });
