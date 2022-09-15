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
    }
}