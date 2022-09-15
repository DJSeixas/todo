import * as types from './mutation-types'
import services from '@/services/services'

export default {
    getTarefas: async({ commit }) => {
        const response = await services.getTarefas()
        commit( types.GET_TAREFAS , { tarefas: response.data })
    }
}