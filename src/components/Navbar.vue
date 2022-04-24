<template>
  <div id="navbar-main" class="navbar-main">
      <template v-if="!isSmalled">
        <div @click="setSelectedPage(item)" v-for="(item,i) in navbarItems" :key="'navbarItem'+i" class="navbar-items">
            {{item.title}}
        </div>
        <!-- <div class="navbar-items">
            Connect Wallet
        </div> -->
      </template>
      <template v-else>
          <transition name="slide" mode="out-in">
                <div key="smalled-menu" v-if="isOpenSmalledMenu" class="opened-smalled-menu">
                    <div @click="setSelectedPage(item)" v-for="(item,i) in navbarItems" :key="'navbarItem'+i" class="navbar-items">
                        {{item.title}}
                    </div>
                    <!-- <div class="navbar-items">
                        Connect Wallet
                    </div> -->
                    <div @click="closeMenu" class="close-menu-icon">
                        <img src="@/assets/icons/close-menu.svg" alt="" class="icon">
                    </div>
                </div>
                <div key="close-menu-icon" v-else class="menu-icon">
                    <img @click="openMenu" src="@/assets/icons/menu.svg" alt="" class="icon">
                </div>
          </transition>
      </template>
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
            isSmalled:false,
            isOpenSmalledMenu:false,
        }
    },
    methods:{
        ...mapMutations([
            "setIsDown",
            "setPageRoute"
        ]),
        setSelectedPage(item){
            this.isOpenSmalledMenu = false;
            this.setPageRoute({})
            this.setPageRoute(item)
        },
        openMenu(){
            this.isOpenSmalledMenu = true;
        },
        closeMenu(){
            this.isOpenSmalledMenu = false;
        }
    },
    mounted(){
        if(window.innerWidth<768 && !this.isSmalled){
            this.isSmalled = true;
        }
        else if(window.innerWidth>=768 && this.isSmalled){
            this.isSmalled = false;
        }
        window.addEventListener('scroll',e=>{
            if(window.pageYOffset>=150){
                this.setIsDown(true);
            }
            else if(window.pageYOffset<150){
                this.setIsDown(false);
            }
            if(window.pageYOffset>=150 && !this.isColored && !this.isSmalled){
                let navbar = document.getElementById('navbar-main').style
                navbar.background="rgba(134, 134, 134, 0.5);"
                navbar.backdropFilter = "blur(20px)"
                this.isColored = true;
                this.setIsDown(true);
            }
            else if(window.pageYOffset<150 && this.isColored && !this.isSmalled){
                let navbar = document.getElementById('navbar-main').style
                navbar.background="transparent"
                navbar.backdropFilter = "blur(0px)"
                this.isColored = false;
                this.setIsDown(false);
            }
        })
        window.addEventListener('resize',e=>{
            if(window.innerWidth<768 && !this.isSmalled){
                this.isSmalled = true;
            }
            else if(window.innerWidth>=768 && this.isSmalled){
                this.isSmalled = false;
                this.isOpenSmalledMenu = false;
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
    z-index: 9999;
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
    @media (min-width: 1025px) and (max-width: 1440px){
        gap: 40px;
    }
    @media (min-width: 768px) and (max-width: 1024px){
        gap: 30px;
    }
    @media (min-width: 481px) and (max-width: 767px) {
        padding: 0;
        gap: 20px;
    }
    @media (max-width: 480px) {
        padding: 0;
        gap: 20px;
    }
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
    .opened-smalled-menu{
        width: 100%;
        @include d-flex(column,flex-start,center);
        background-color: rgb(31, 22, 22);
        gap: 12px;
        font-size: 3.5rem;
        padding: 20px 0 0 0;
        .close-menu-icon{
            width: 100%;
            @include d-flex-center;
            cursor: pointer;
            padding: 20px;
            .icon{
                width: 25px;
            }
        }
    }
    .menu-icon{
        width: 100%;
        @include d-flex(row,flex-end,center);
        padding: 20px;
        .icon{
            width: 35px;
            cursor: pointer;
        }
    }
    
}

.slide-enter{

}
.slide-enter-active{
    animation: slide-down .2s linear;
}
.slide-leave{
    position: absolute;
}
.slide-leave-active{
    position: absolute;
    animation: slide-up .2s linear;
}

@keyframes slide-down {
    from{
        transform: translateY(-100%);
    }
    to{
        transform: translateY(0);
    }
}
@keyframes slide-up {
    from{
        transform: translateY(0);
    }
    to{
        transform: translateY(-100%);
    }
}
</style>