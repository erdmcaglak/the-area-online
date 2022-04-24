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
  @media (min-width: 1025px) and (max-width: 1440px){
      font-size: 9px;
  }
  @media (min-width: 769px) and (max-width: 1024px){
      font-size: 8px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
      font-size: 7px;
  }
  @media (max-width: 480px) {
      font-size: 6px;
  }
}

</style>
