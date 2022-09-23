<template>

    <div class="input" :class="{darkMode: dark}">
        <form @submit.prevent class="input__form" :class="{darkMode: dark}">
                    <button class="input__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" d="M1 4.304L3.696 7l6-6"/></svg>
                    </button>
                    <input type="text" 
                           class="input__input" 
                           placeholder="Create a new Todo..."
                           :class="{darkMode: dark}"
                           @keyup.enter="salvar()"
                           v-model="tarefa.title"
                           >
                </form>
    </div>
  
</template>

<script>
import { mapState } from 'vuex'

export default {
    data(){
        return {
            tarefa: Object.assign({title: '', concluido: false})
            
        }
    },
    computed: {
        ...mapState([
            'dark'
        ])
    },  
    methods: {
        salvar(){
            if(this.tarefa.title !== ''){
                this.$emit('salvar', { tarefa: this.tarefa })
                this.tarefa = Object.assign({},  {title: '', concluido: false})
            }
        }
    }
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped></style>