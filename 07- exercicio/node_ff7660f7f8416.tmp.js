import fs from 'node:fs';
import os from 'node:os';

const platform = os.platform()
const arch = os.arch()
const cpu = os.cpus()[0].model
const totalMem = os.totalmem() / 1024 / 1024 / 1024
let timeActive, freeMem, usedMemPerc, content

function updateDetails(){
    return content = setInterval(()=> {
        timeActive = Math.floor(os.uptime()/ 3600)
        freeMem = os.freemem() / 1024 / 1024 / 1024
        usedMemPerc = (100 - (freeMem/totalMem) * 100).toFixed(2)
        console.log(`Plataforma: ${platform}\nArquitetura: ${arch}\nCPU: ${cpu}\nTempo de atividade: ${timeActive}\nMemoria utilizada: ${usedMemPerc}\n-----------\n\n`);
        
    },1000)
}

function showDetails(content){
    console.log(content);
}


showDetails(updateDetails())


function saveDetails(content){
    fs.writeFile('log.txt', content, 'utf-8', (error) => {
        if(error){
            console.log('Ocorreu um erro ao criar o arquivo de log', error.message);
        }
    })
}