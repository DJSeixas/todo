import * as types from './mutation-types'
import services from '@/services/services'

export default {
    getTarefas: async({ commit }) => {
        const response = await services.getTarefas()
        commit( types.GET_TAREFAS , { tarefas: response.data })
    },

    postTarefa: async({ commit }, { tarefa }) => {
            const response = await services.postTarefa(tarefa)
            commit(types.POST_TAREFA, { tarefa: response.data })
    },

    concludeTarefa: async({ commit }, { tarefa }) => {
        tarefa.concluido = !tarefa.concluido
        const response = await services.putTarefa(tarefa)
        commit(types.CONCLUDE_TAREFA, { tarefa: response.data })
    },

    deleteTarefa: async({ commit }, { tarefa }) => {
        await services.deleteTarefa(tarefa.id)
        commit(types.DELETE_TAREFA, { tarefa })
    },

    deleteTarefas: async({ commit, dispatch, state }) => {
        let tcId = state.tarefas.filter(t => t.concluido)
        await tcId.forEach(tarefa => {
            services.deleteTarefa(tarefa.id)
            commit(types.DELETE_TAREFA, { tarefa })
            dispatch('getTarefas')
        });
    }
}