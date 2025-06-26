import fs from 'node:fs'

export function createFile(content){
    return new Promise((resolve, reject) => {
        fs.writeFile('./meuarquivo.txt', content, 'utf-8', (err) => {
        if(err){
            reject('Ocorreu um erro:', err.message)
        }else{
            resolve()
        }
    })
    })
    
}