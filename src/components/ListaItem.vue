<template>
    
    <div class="item" draggable="true" :class="{darkMode: dark}">
        <button class="item__button--concluir" :class="{concluido: this.tarefa.concluido}" @click="$emit('concluir', tarefa)">
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" d="M1 4.304L3.696 7l6-6"/></svg>
        </button>
        <p class="item__title" :class="{titleConcluido: this.tarefa.concluido}">{{ tarefa.title }}</p>
        <button class="item__button--delete" :class="{darkMode: dark}" @click="$emit('deletar', tarefa)">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18"><path fill="#494C6B" fill-rule="evenodd" d="M16.97 0l.708.707L9.546 8.84l8.132 8.132-.707.707-8.132-8.132-8.132 8.132L0 16.97l8.132-8.132L0 .707.707 0 8.84 8.132 16.971 0z"/></svg>
        </button>
    </div>

</template>

<script>
import { mapState } from 'vuex'
export default {
    props: {
        tarefa: {
            type: Object
        }
    },
    computed: {
        ...mapState([
            'dark'
        ])
    }
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped></style>