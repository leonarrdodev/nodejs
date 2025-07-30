let lembretes = [
    { id: 1, titulo: 'Comprar pão', concluido: false },
    { id: 2, titulo: 'Estudar MVC', concluido: true }
];
let proximoId = 3;

module.exports = {
    findAll: () => {
        return lembretes;
    },

    // Corrigido o nome da função e adicionado parseInt
    findById: (id) => {
        return lembretes.find(lembrete => lembrete.id === +id);
    },

    // Função create totalmente corrigida
    create: (dadosDoLembrete) => {
        const novoLembrete = {
            id: proximoId,
            titulo: dadosDoLembrete.titulo,
            concluido: dadosDoLembrete.concluido || false // Garante um valor padrão
        };
        lembretes.push(novoLembrete);
        proximoId++;
        return novoLembrete;
    },

    // Sugestão de implementação para o update, baseada na sua primeira versão
    update: (id, dadosParaAtualizar) => {
        const idNumerico = parseInt(id);
        const index = lembretes.findIndex(lembrete => lembrete.id === idNumerico);

        if (index !== -1) { // Se encontrou o lembrete
            lembretes[index] = { ...lembretes[index], ...dadosParaAtualizar };
            return lembretes[index]; // Retorna o lembrete atualizado
        }
        return null; // Retorna null se não encontrou
    },

    // Sugestão de implementação para o remove
    remove: (id) => {
        const idNumerico = parseInt(id);
        const index = lembretes.findIndex(lembrete => lembrete.id === idNumerico);

        if (index !== -1) {
            lembretes.splice(index, 1); // Remove o item do array
            return true; // Sucesso
        }
        return false; // Falha (não encontrou)
    }
};