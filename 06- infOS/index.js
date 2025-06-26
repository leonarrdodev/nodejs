const os = require('node:os')

const plataform = os.platform()

console.log(plataform);

const arch = os.arch()
console.log(arch);

const cpus = os.cpus()
console.log(cpus.length);

const memoria = os.totalmem()
console.log(memoria / 1024 / 1024 / 1024);
