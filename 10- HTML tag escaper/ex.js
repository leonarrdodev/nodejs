// Importa o módulo 'fs' para manipulação de arquivos (leitura e escrita)
const fs = require('node:fs');

// Importa o módulo 'path' para resolver caminhos de arquivos de forma segura
const path = require('node:path');

// Importa o módulo 'readline' para capturar entrada do usuário via terminal
const readline = require('node:readline');

// Inicia a execução do programa
run();

/**
 * Substitui caracteres especiais (<, >, &) por entidades HTML
 * @param {string} text - Texto a ser escapado
 * @returns {string} - Texto com caracteres escapados
 */
function escapeHtmlSpecialCharacters(text) {
    return text.replace(/[<>&]/g, (match) => {
        switch (match) {
            case '<': return '&lt;';
            case '>': return '&gt;';
            case '&': return '&amp;';
            default: return match;
        }
    });
}

/**
 * Lê o conteúdo de um arquivo, escapa caracteres HTML e salva em outro arquivo
 * @param {string} inputFilePath - Caminho do arquivo de entrada
 * @param {string} outputFilePath - Caminho do arquivo de saída
 */
function escapeHtmlFile(inputFilePath, outputFilePath) {
    try {
        const fileContent = fs.readFileSync(inputFilePath, 'utf-8');
        const escapedContent = escapeHtmlSpecialCharacters(fileContent);
        fs.writeFileSync(outputFilePath, escapedContent, 'utf-8');
        console.log('Arquivo escapado com sucesso');
    } catch (error) {
        console.log('Erro:', error.message);
        process.exit(1);
    }
}

/**
 * Pergunta um valor ao usuário via terminal (entrada padrão)
 * @param {string} question - Texto da pergunta
 * @returns {Promise<string>} - Resposta do usuário
 */
function askFilePath(question) {
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    return new Promise((resolve) => {
        rl.question(question, (answer) => {
            rl.close();
            resolve(answer);
        });
    });
}

/**
 * Modo interativo: solicita caminhos ao usuário se não forem passados por argumentos
 */
async function userInteraction() {
    let inputPath = process.argv[2];

    // Se não foi passado como argumento, perguntar
    if (!inputPath) {
        inputPath = await askFilePath('Informe o caminho do arquivo de entrada: ');
    }

    // Resolve o caminho absoluto do arquivo de entrada
    inputPath = path.resolve(inputPath);

    // Nome padrão para o arquivo de saída
    const defaultName = `escaped_${path.basename(inputPath)}.txt`;

    // Pergunta o caminho do arquivo de saída
    const answer = await askFilePath(`Informe o caminho do arquivo de saída (padrão: ${defaultName}): `);
    let outputPath = answer.length > 0 ? answer : defaultName;

    // Resolve o caminho absoluto do arquivo de saída
    outputPath = path.resolve(outputPath);

    // Realiza o processamento
    escapeHtmlFile(inputPath, outputPath);
}

/**
 * Função principal: decide se executa via argumentos ou modo interativo
 */
function run() {
    if (process.argv.length >= 4) {
        // Se dois argumentos forem passados (entrada e saída), processa direto
        escapeHtmlFile(path.resolve(process.argv[2]), path.resolve(process.argv[3]));
    } else {
        // Se não, entra no modo interativo
        console.log('--------------');
        console.log('HTML tag Escaper v1.0');
        console.log('--------------');
        console.log('Argumentos não informados!\nPor favor, informe os caminhos dos arquivos para realizar o escape:\n');
        userInteraction();
    }
}
