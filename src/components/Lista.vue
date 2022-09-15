<template>
    
    <div class="lista">

        <ListaItem 
        v-for="(tarefa,id) in tarefas" 
        :key="id" 
        :tarefa="tarefa"
        />

        <div class="lista__info">
            <p>{{ tarefas.length }} items left</p>

            <div class="lista__filtro">
                <span>All</span>
                <span>Active</span>
                <span>Completed</span>
            </div>

            <p>Clear Completed</p>
        </div>
    
    </div>
    


</template>

<script>

import { mapActions, mapState } from 'vuex';
import ListaItem from './ListaItem.vue';

export default {
    components: { ListaItem },
    data(){
        return {
        }
    },
    computed: {
        ...mapState([
            'tarefas'
        ])
    },
    methods: {
        ...mapActions([
            'getTarefas'
        ])
    },
    created(){
        this.getTarefas()
    }
}

</script>

<style src="@/sass/main.scss" lang="scss" scoped></style>