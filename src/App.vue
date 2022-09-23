<template>
  <div id="app">

    <div class="app-content" :class="{darkBg: dark}">

      <TheHeader />
  
        <Lista />
  

    </div>



  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import Lista from './components/Lista.vue';
import { mapState } from 'vuex';

export default {
  name: 'App',
  components: {
    TheHeader,
    Lista
},
computed: {
  ...mapState([
    'dark'
  ])
}
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped>

</style>
