import {
    GET_TAREFAS
} from './mutation-types'

export default {
    [GET_TAREFAS]: (state, { tarefas }) => {
        state.tarefas = tarefas
    }
}