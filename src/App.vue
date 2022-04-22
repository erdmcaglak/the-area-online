<template>
    <Main msg="Welcome to Your Vue.js App"/>
</template>

<script>
import Main from './components/Main.vue'

export default {
  name: 'App',
  components: {
    Main
  }
}
</script>

<style lang="scss">
@import "@/scss/mixins.scss";
@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Jost:wght@500&display=swap');
*{
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
}
html,body{
  width: 100%;
  font-size: 10px;
}

</style>
