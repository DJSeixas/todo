import {
    GET_TAREFAS,
    POST_TAREFA,
    DELETE_TAREFA,
    CONCLUDE_TAREFA,
    CHANGE_VALUE,
    DARK_MODE
} from './mutation-types'

export default {
    [GET_TAREFAS]: (state, { tarefas }) => {
        state.tarefas = tarefas
    },

    [POST_TAREFA]: (state, { tarefa }) => {
        state.tarefas.push(tarefa)
    },

    [CONCLUDE_TAREFA]: (state, { tarefa }) => {
        const indice = state.tarefas.findIndex(t => t.id === tarefa.id)
        state.tarefas.splice(indice, 1, tarefa)    
    },

    [DELETE_TAREFA]: (state, { tarefa }) => {
        const indice = state.tarefas.findIndex(t => t.id === tarefa.id)
        state.tarefas.splice(indice, 1)
    },

    [CHANGE_VALUE]: (state, payload) => {
        state.value = payload
    },
    [DARK_MODE]: (state, payload) => {
        state.dark = payload
    }
}