<template>
  <div class="detail-main">
    <div class="coming-soon">
      Details take time.
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {

    }
  },
  methods:{
  }
}
</script>

<style lang="scss">
.detail-main{
  height: 100%;
  background: url('../assets/images/coming_soon.jpg');
  background-position: center center;
  background-size: cover;
  background-repeat: no-repeat;
  .coming-soon{
    text-align: center;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 96px;
    width: 100%;
    height: 100%;
    color: #fff;
    font-weight: 600;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    user-select: none;
  }
}
*{
  margin: 0;
  padding: 0;
  list-style-type: none;
  text-decoration: none;
  box-sizing: border-box;
}
html,body{
  height: 100%;
}
</style>