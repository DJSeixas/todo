<template>

    <div class="input">
        <form action="#" class="input__form">
                    <button class="input__button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="9"><path fill="none" stroke="#000" stroke-width="2" d="M1 4.304L3.696 7l6-6"/></svg>
                    </button>
                    <input type="text" 
                           class="input__input" 
                           placeholder="Create a new Todo..."
                           v-model="input"
                           >
                </form>
    </div>
  
</template>

<script>
export default {

}
</script>

<style src="@/sass/main.scss" lang="scss" scoped></style>