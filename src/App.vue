<template>
  <div id="app">
    <TheHeader />

    <div class="content">
  
      <TheInput />

      <Lista />

      <p id="text-app">Drag and drop to reorder list</p>
      
    </div>


  </div>
</template>

<script>
import TheHeader from './components/TheHeader.vue'
import TheInput from './components/TheInput.vue';
import Lista from './components/Lista.vue';

export default {
  name: 'App',
  components: {
    TheHeader,
    TheInput,
    Lista
}
}
</script>

<style src="@/sass/main.scss" lang="scss" scoped>

</style>
