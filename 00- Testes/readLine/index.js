const readline = require('node:readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function perguntar(texto){
    return new Promise((resolve) => {
        rl.question(texto, resolve)
    })
}

async function main(){
    const nome = await perguntar('Qual seu nome?\n');
    const idade = await perguntar('Qual sua idade?\n')
    console.log(`Nome: ${nome}\nIdade: ${idade}`);
}

main()