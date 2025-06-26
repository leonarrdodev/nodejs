const http = require('node:http');

const server = http.createServer((request, response) => {
    const path = request.url
    
    switch(path){
        case '/':
            response.writeHead(200)
            response.write('Pagina inicial')
            break
        case '/artigos':
            response.writeHead(200)
            response.write('Pagina de artigos')
            break
        default:
            response.writeHead(404)
            response.write('Pagina não encontrada')
            break
    }
    response.end()
})

const PORT = 3000

server.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
    
})