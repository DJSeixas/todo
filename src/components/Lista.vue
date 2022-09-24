<template>
    <div class="content">

        <TheInput
        @salvar="salvarTarefa"
        />
        
        <div class="lista">

            
                <ul v-if="tarefasFiltradas.length > 0">
                    <draggable>
                        <ListaItem
                        v-for="(tarefa,id) in tarefasFiltradas" 
                        :key="id" 
                        :tarefa="tarefa"
                        @deletar="deletarTarefa"
                        @concluir="concluirTarefa"
                        />
                    </draggable>
                </ul>

                <p v-else class="empty">Nenhuma tarefa a fazer</p>

    
            <div class="lista__info" :class="{darkMode2: dark}">
                <p>{{ tarefasFiltradas.length }} items left</p>
    
                <div class="lista__filtro">
                    <span class="lista__filtro--active" :class="{selected: select1}" @click="filtrarTarefas(filtros[0])">{{ filtros[0] }}</span>
                    <span class="lista__filtro--active" :class="{selected: select2}" @click="filtrarTarefas(filtros[1])">{{ filtros[1] }}</span>
                    <span class="lista__filtro--active" :class="{selected: select3}" @click="filtrarTarefas(filtros[2])">{{ filtros[2] }}</span>
                </div>
    
                <p class="lista__info--active" @click="deletarTarefas">Clear Completed</p>
            </div>
        
        </div>

        <p id="text-app" :class="{darkColor2: dark}">Drag and drop to reorder list</p>
        

    </div>



</template>

<script>

import { mapActions, mapGetters, mapState } from 'vuex';
import draggable from 'vuedraggable'
import ListaItem from './ListaItem.vue';
import TheInput from './TheInput.vue';

export default {
    components: { ListaItem, TheInput, draggable },
    data(){
        return {
            filtros: [
                'All',
                'Active',
                'Completed'
            ],
            select1: true,
            select2: false,
            select3: false,
        }
    },
    computed: {
        ...mapState([
            'tarefas',
            'value',
            'dark'
        ]),
        ...mapGetters([
            'tarefasFiltradas'
        ])
    },
    methods: {
        ...mapActions([
            'getTarefas',
            'postTarefa',
            'deleteTarefa',
            'concludeTarefa',
            'deleteTarefas'
        ]),
            salvarTarefa(event){
                this.postTarefa({ tarefa: event.tarefa })
        },
            deletarTarefa(tarefa){
                this.deleteTarefa({ tarefa })
        },
            concluirTarefa(tarefa){
                this.concludeTarefa({ tarefa })
        },
            filtrarTarefas(filtro){
                this.$store.commit('CHANGE_VALUE', filtro)
                if(filtro === 'All'){
                    this.select2 = false
                    this.select3 = false
                    return this.select1 = true
                }
                else if(filtro === 'Active'){
                    this.select1 = false
                    this.select3 = false
                    return this.select2 = true
                }
                else if(filtro === 'Completed'){
                    this.select1 = false
                    this.select2 = false
                    return this.select3 = true
                }
        },
            deletarTarefas(tarefas){
                this.deleteTarefas({ tarefas })
            },
            changeItem(e){
                console.log(e)
            }
    },
    created(){
        this.getTarefas()
    }
}

</script>

<style src="@/sass/main.scss" lang="scss" scoped></style>