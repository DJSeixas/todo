import axios from 'axios'

const apiCLient = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json'
    }
})

export default{
    getTarefas(){
        return apiCLient.get('/tarefas')
    },
    postTarefa(tarefa){
        return apiCLient.post('/tarefas', tarefa)
    },
    putTarefa(tarefa){
        return apiCLient.put(`/tarefas/${tarefa.id}`, tarefa)
    },
    deleteTarefa(id){
        return apiCLient.delete(`/tarefas/${id}`)
    }
}