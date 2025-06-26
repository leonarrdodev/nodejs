const readLine = require('node:readline');

const rl = readLine.createInterface({input: process.stdin, output: process.stdout})

// rl.on('line', (input) => {
//     rl.write(`Você digitou: ${input}`)
// })

rl.question('Qual seu nome?', (answer) => {
    rl.write(`Olá, ${answer}\n`)
    rl.close()
})

rl.once('close', () => {
    rl.write('Saindo...')
    process.exit(1)
})