import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';

function generateDetails() {
    const platform = os.platform();
    const arch = os.arch();
    const cpu = os.cpus()[0].model;
    const totalMem = os.totalmem() / 1024 / 1024 / 1024;
    const seconds = Math.floor(os.uptime()) % 60;
    const minutes = Math.floor(os.uptime() / 60) % 60;
    const timeActive = Math.floor(os.uptime() / 3600);
    const freeMem = os.freemem() / 1024 / 1024 / 1024;
    const usedMemPerc = (100 - (freeMem / totalMem) * 100).toFixed(2);
    
    return `Plataforma: ${platform}
Arquitetura: ${arch}
CPU: ${cpu}
Tempo de atividade: ${timeActive}h ${minutes}min ${seconds}s
Memoria total: ${totalMem.toFixed(2)} Gb
Memoria Livre: ${freeMem.toFixed(2)} Gb
Porcentagem utilizada: ${usedMemPerc}%
-----------
\n\n`;
}

function showDetails() {
    setInterval(() => {
        console.clear();
        console.log(generateDetails());
    }, 1000);
}

function createNewFolder(directoryPath) {
    try {
        fs.mkdirSync(directoryPath, { recursive: true });
        console.log('Pasta "log" criada com sucesso!');
    } catch (err) {
        console.error('Erro ao criar a pasta!', err);
    }
}

function saveDetails() {
    const directoryPath = path.resolve('log');
    const filePath = path.join(directoryPath, 'log.txt');

    if (!fs.existsSync(directoryPath)) {
        createNewFolder(directoryPath);
    }

    setInterval(() => {
        fs.appendFile(filePath, generateDetails(), 'utf-8', (error) => {
            if (error) {
                console.log('Erro ao salvar log:', error.message);
            } else {
                console.log('Log salvo com sucesso!');
            }
        });
    }, 1000);
}

showDetails();
saveDetails();
