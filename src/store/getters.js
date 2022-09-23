export default {
    tarefasFiltradas: state => {
        if(state.value === 'All'){
            return state.tarefas
        }else if(state.value === 'Active'){
            state.tarefasFiltradas = state.tarefas.filter( t => !t.concluido )
            return state.tarefasFiltradas
        }else if(state.value === 'Completed'){
            state.tarefasFiltradas = state.tarefas.filter( t => t.concluido )
            return state.tarefasFiltradas
        }
    }
}