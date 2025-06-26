import fs from 'node:fs';

export function deleteFile(){
    return new Promise((resolve, reject) => {
        fs.unlink('./meuarquivo.txt', (err) => {
        if(err){
            reject('Ocorreu um err', err.message);
               
        }
        console.log('Arquivo deletado');
        resolve()
    })
    
})
}
