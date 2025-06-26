import fs from 'node:fs'

export function showFile(){
    return new Promise((resolve, reject) => {
            fs.readFile('meuarquivo.txt', 'utf-8', (err, data) => {
                if(err){
                    reject('Ocorreu um erro', err.message);
                }
                console.log(data);  
                resolve()    
            })
        })
    
}