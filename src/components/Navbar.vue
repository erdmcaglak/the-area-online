<template>
  <div id="navbar-main" class="navbar-main">
      <div @click="setSelectedPage(item)" v-for="(item,i) in navbarItems" :key="'navbarItem'+i" class="navbar-items">
          {{item.title}}
      </div>
      <!-- <div class="navbar-items">
          Connect Wallet
      </div> -->
  </div>
</template>

<script>
import {navbarItems} from "@/enum/enum.js"
import {mapMutations} from "vuex";
export default {
    data(){
        return{
            navbarItems,
            isColored:false,
        }
    },
    methods:{
        ...mapMutations([
            "setIsDown",
            "setPageRoute"
        ]),
        setSelectedPage(item){
            this.setPageRoute({})
            this.setPageRoute(item)
        }
    },
    mounted(){
        window.addEventListener('scroll',e=>{
            if(window.pageYOffset>=150 && !this.isColored){
                let navbar = document.getElementById('navbar-main').style
                navbar.background="rgba(134, 134, 134, 0.5);"
                navbar.backdropFilter = "blur(20px)"
                this.isColored = true;
                this.setIsDown(true);
            }
            else if(window.pageYOffset<150 && this.isColored){
                let navbar = document.getElementById('navbar-main').style
                navbar.background="transparent"
                navbar.backdropFilter = "blur(0px)"
                this.isColored = false;
                this.setIsDown(false);
            }
        })
    }
}
</script>

<style lang="scss">
@import "@/scss/mixins.scss";

.navbar-main{
    transition: all .1s ease-in;
    position: fixed;
    z-index: 99;
    top: 0;
    left: 0;
    width: 100%;
    color: #fff;
    font-family: 'Julius Sans One', sans-serif;
    font-size: 2.5rem;
    @include d-flex(row,flex-end,center);
    gap: 50px;
    padding: 25px 50px;
    font-weight: normal;
    .navbar-items{
        user-select: none;
        cursor: pointer;
        position: relative;
        display: block;
        transition: 0.3s;

        &::after {
            position: absolute;
            content: "";
            top: 110%;
            left: 0;
            width: 100%;
            height: 3px;
            background: #95a5a6;
            transform: scaleX(0);
            transform-origin: right;
            transition: transform 0.3s;
        }

        &:hover {
            color: #95a5a6;
        }

        &:hover::after {
            transform: scaleX(1);
            transform-origin: left;
        }
    }
}
</style>