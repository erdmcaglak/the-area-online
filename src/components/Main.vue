<template>
  <div class="main">
    <app-navbar></app-navbar>
    <img class="key" src="@/assets/images/key.png" alt="">
    <div class="the-area">
      <div class="the-area-content-wrapper">
        <div class="the-area-text">
          The Area
        </div>
        <div class="the-area-content-and-image">
          <div class="content">
            <div class="header">
              STORY
            </div>
            <div class="text">
              Middle-earth is ruled by 4 different races, wizards, humans, elves and dwarves. There was a great war between the races which is caused by the ambitious and rebellious people. Each race thought that control of the world should be in their hands alone. However, they were unaware that they were starting a huge collapse. The world has not seen peace there since then. As a result of the wars, the world was divided into 5 different continents. Each race lives on a different continent. Now the war was going on to ensure the domination of the 5th Continent. The fate of The Area would be in the hands of the strongest race.
            </div>
          </div>
          <div class="image">
            <div class="image-border">
              <img class="elf" src="@/assets/icons/area-icon.svg" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="characters" class="characters">
      <div class="characters-image-and-text">
        <img src="@/assets/icons/characters_icon.svg" alt="" class="characters-image">
        <div class="characters-text">
          Characters
        </div>
      </div>
      <div class="characters-wrapper">
        <div v-for="(item,i) in characters" :key="'charactersContent'+i" class="characters-content-wrapper">
          <div class="characters-content">
            <div class="character-name">
              {{item.title}}
            </div>
            <div class="character-story">
              {{item.story}}
            </div>
          </div>
          <img :src="require('@/assets/images/'+item.value+'.png')" class="character-image" alt="">
        </div>
        
      </div>
    </div>
    <div id="roadmap" class="road-map">
      <div class="road-map-text">
        Roadmap
      </div>
      <div class="road-map-content">
        <img v-if="!isResponsive" src="@/assets/images/road-map.png" alt="" class="road-map-image">
        <img v-else src="@/assets/images/mini-roadmap.svg" alt="" class="road-map-image">
      </div>
    </div>
    <div id="nft" class="nft">
      <div class="nft-text">
        NFT
      </div>
      <div class="nft-wrapper">
          <div class="rotate-nft-wrapper">
            <div class="carousel">
              <img class="nft-items" src="@/assets/images/nft1.png" alt="">
              <img class="nft-items" src="@/assets/images/nft2.png" alt="">
              <img class="nft-items" src="@/assets/images/nft3.png" alt="">
              <img class="nft-items" src="@/assets/images/nft4.png" alt="">
            </div>
            
          </div>
      </div>
    </div>
    <div id="team" class="team">
      <!-- <img src="@/assets/images/team-members.png" class="team-background" alt=""> -->
      <div class="team-text">
        Our Team Members
      </div>
      <div class="team-members">
        <div v-for="(member,i) in teamMembers" :key="'members'+i" class="members">
          <div class="member-card">
            <img :src="require('@/assets/images/'+member.img)" alt="" class="member-image">
            <div class="member-info">
              <div class="member-name">{{member.name}}</div>
              <div class="member-job">{{member.job}}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div id="faq" class="faq">
      <div class="faq-text">
        FAQ
      </div>
      <div class="faq-content">
        <div class="area-icon">
          <img src="@/assets/icons/area-icon.svg" alt="" class="icon">
        </div>
        <div class="questions">
          <div v-for="(faq,i) in faq" :key="'faq'+i" class="faq-question">
            <div @click="showAnswer(faq.value)" class="header">
              <div class="header-text">   
                {{faq.question}}
              </div>
              <img v-if="selectedFaq != faq.value" class="icon" src="@/assets/icons/arrow-down.svg" alt="">
              <img v-else class="icon" src="@/assets/icons/arrow-up.svg" alt="">
            </div>
            <div v-if="selectedFaq === faq.value" class="question-answer">
              <template v-if="typeof faq.answer === 'string'">
                {{faq.answer}}
              </template>
              <template v-else>
                <div v-for="(answer,k) in faq.answer" :key="'answer'+k">
                  {{answer}}
                </div>
              </template>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="join-community">
      <div class="join-community-wrapper">
        <div class="community-text">
          Join the community
        </div>
        <div class="buttons">
          <a href="https://twitter.com/thearea_online" target="_blank" class="twitter">
          <img class="icon" src="@/assets/icons/twitter.svg" alt="">
          Follow Twitter
          </a>
          <a href="https://discord.gg/Ty82tGm3" target="_blank" class="discord">
          <img class="icon" src="@/assets/icons/discord.svg" alt="">
          Join Discord
          </a>
          <a href="https://medium.com/@areaonline/the-area-online-mmorpg-gaming-platform-424ec4fc31ba" target="_blank" class="medium">
          <img class="icon" src="@/assets/icons/medium.svg" alt="">
          Medium
          </a>
        </div>
      </div>
    </div>
    <div v-if="getIsDown" @click="routeTop" class="up">
      <img src="@/assets/icons/up.svg" class="icon" alt="">
    </div>
  </div>
</template>

<script>
import {characters,teamMembers,faq} from "@/enum/enum.js"
import Navbar from "@/components/Navbar.vue"
import {mapGetters} from "vuex"
export default {
  data(){
    return{
      characters,
      teamMembers,
      faq,
      selectedFaq:"",
      isResponsive:false,
    }
  },
  computed:{
    ...mapGetters([
      "getIsDown",
      "getPageRoute"
    ])
  },
  mounted(){
    if(window.innerWidth<=768 && !this.isResponsive){
        this.isResponsive = true
      }
      else if(window.innerWidth>768 && this.isResponsive){
        this.isResponsive = false
      }
    window.addEventListener('resize',e=>{
      if(window.innerWidth<=768 && !this.isResponsive){
        this.isResponsive = true
      }
      else if(window.innerWidth>768 && this.isResponsive){
        this.isResponsive = false
      }
    })
  },
  methods:{
    routeTop(){
      window.scrollTo({
        top:0,
        behavior: 'smooth'
      })
    },
    showAnswer(val){
      if(this.selectedFaq === val)
        this.selectedFaq = ""
      else
        this.selectedFaq = val
    }
  },
  components:{
    appNavbar:Navbar
  },
  watch:{
    getPageRoute:{
      handler(){
        if(this.getPageRoute != ''){
          window.scrollTo({
            top:document.getElementById(`${this.getPageRoute.value}`).offsetTop - 100,
            behavior:'smooth'
          })
        }
      }
    }
  }
}
</script>

<style lang="scss">
@import "@/scss/mixins.scss";
.main{
  @include d-flex(column,flex-start,stretch);
  position: relative;
  gap: 50px;
  font-family: 'Jost', sans-serif;
  background-color: #000;
  @media (min-width: 1025px) and (max-width: 1440px){
    gap: 45px;
  }
  @media (min-width: 769px) and (max-width: 1024px){
    gap: 40px;
  }
  @media (min-width: 481px) and (max-width: 768px) {
    gap: 35px;
  }
  @media (max-width: 480px) {
    gap: 30px;
  }
  .key{
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
    @media (min-width: 1025px) and (max-width: 1440px){
      width: 400px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
      display: none;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      display: none;
    }
    @media (max-width: 480px) {
      display: none;
    }
  }
  .the-area{
    height: 100vh;
    background-image: url('@/assets/images/the_area_background.svg');
    -webkit-background-image: url('@/assets/images/the_area_background.svg');
    -moz-background-image: url('@/assets/images/the_area_background.svg');
    -o-background-image: url('@/assets/images/the_area_background.svg');
    background-repeat: no-repeat;
    -webkit-background-repeat: no-repeat;
    -moz-background-repeat: no-repeat;
    -o-background-repeat: no-repeat;
    background-attachment: fixed;
    -webkit-background-attachment: fixed;
    -moz-background-attachment: fixed;
    -o-background-attachment: fixed;
    background-size: cover;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    @include d-flex-center;
    @media (min-width: 481px) and (max-width: 768px) and (min-height: 450px) {
      height: 75vh;
    }
    @media (min-width: 481px) and (max-width: 768px) and (max-height: 449px) {
      height: 150vh;
    }
    @media (max-width: 480px) and (min-height: 450px) {
      height: 85vh;
    }
    @media (max-width: 480px) and (max-height: 449px) {
      height: 150vh;
    }
    .the-area-content-wrapper{
      width: 100%;
      height: 100%;
      @include d-flex(column,center,center);
      gap: 30px;
      .the-area-text{
        @include d-flex-center;
        font-size: 5rem;
        color: #fff;
        font-family: 'Julius Sans One', sans-serif;
      }
      .the-area-content-and-image{
        @include d-flex(row,flex-start,center);
        height: 500px;
        width: 80%;
        position: relative;
        @media (min-width: 1025px) and (max-width: 1440px){
          width: 95%;
          height: 450px;
        }
        @media (min-width: 769px) and (max-width: 1024px){
          width: 95%;
          height: 400px;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          width: 95%;
          height: fit-content;
          @include d-flex(column,flex-start,stretch);
        }
        @media (max-width: 480px) {
          width: 95%;
          height: fit-content;
          @include d-flex(column,flex-start,stretch);
        }
        .content{
          height: 90%; 
          background: linear-gradient(255.97deg, #371913 0%, rgba(38, 17, 13, 0.05) 100%);
          border-radius: 10px 0 0 10px;
          flex: 1 0 1px;
          -webkit-flex: 1 0 1px;
          -moz-flex: 1 0 1px;
          -o-flex: 1 0 1px;
          color: #C9C9C9;
          @include d-flex(column,flex-start,center);
          gap: 10px;
          padding: 20px;
          @media (min-width: 1025px) and (max-width: 1440px){
            padding: 15px;
            gap: 5px;
          }
          @media (min-width: 769px) and (max-width: 1024px){
            padding: 0px;
            gap: 0px;
            height: 100%;
          }
          @media (min-width: 481px) and (max-width: 768px) {
            padding: 20px;
            gap: 0px;
            width: 100%;
            text-align: center;
          }
          @media (max-width: 480px) {
            padding: 10px;
            gap: 0px;
            width: 100%;
            text-align: center;
          }
          .header{
            font-size: 3.5rem;
            font-weight: 500;
            text-align: center;
            padding: 10px;
          }
          .text{
            font-size: 2.2rem;
            font-weight: 300;
            padding: 10px;
            @include d-flex-center;
            @media screen and (max-width: 1024px){
              text-align: center;
            }
          }
        }
        .image{
          height: 100%;
          width: 400px;
          flex: 0 0 auto;
          -webkit-flex: 0 0 auto;
          -moz-flex: 0 0 auto;
          -o-flex: 0 0 auto;
          background: linear-gradient(209.67deg, rgba(111, 50, 37, 0.6) 1.1%, rgba(58, 25, 19, 0.6) 96.96%);
          background: -webkit-linear-gradient(209.67deg, rgba(111, 50, 37, 0.6) 1.1%, rgba(58, 25, 19, 0.6) 96.96%);
          background: -moz-linear-gradient(209.67deg, rgba(111, 50, 37, 0.6) 1.1%, rgba(58, 25, 19, 0.6) 96.96%);
          background: -o-linear-gradient(209.67deg, rgba(111, 50, 37, 0.6) 1.1%, rgba(58, 25, 19, 0.6) 96.96%);
          backdrop-filter: blur(15px);
          -webkit-backdrop-filter: blur(15px);
          -moz-backdrop-filter: blur(15px);
          -o-backdrop-filter: blur(15px);
          border-radius: 20px;
          position: relative;
          z-index: 99;
          @include d-flex(column,flex-end,center);
          @media (min-width: 1025px) and (max-width: 1440px){
            width: 350px;
          }
          @media (min-width: 769px) and (max-width: 1024px){
            width: 250px;
          }
          @media (min-width: 481px) and (max-width: 768px) {
            position: absolute;
            top: -50px;
            right: 0;
            width: 120px;
            height: fit-content;
            padding: 5px;
            border-radius: 5px;
            background: transparent;
            backdrop-filter: blur(0px);
          }
          @media (max-width: 480px) {
            position: absolute;
            top: -50px;
            right: 0;
            width: 110px;
            height: fit-content;
            padding: 5px;
            border-radius: 5px;
            background: transparent;
            backdrop-filter: blur(0px);
          }
          .image-border{
            width: 100%;
            height: 100%;
            border: 10px solid #884D32;
            border-radius: 20px;
            @include d-flex-center;
            perspective: 1000px;
            @media (min-width: 1025px) and (max-width: 1440px){
              border: 8px solid #884D32;
            }
            @media (min-width: 769px) and (max-width: 1024px){
              border: 5px solid #884D32;
              border-radius: 0;
            }
            @media (min-width: 481px) and (max-width: 768px) {
              border: 0px solid #884D32;
              border-radius: 0;
            }
            @media (max-width: 480px) {
              border: 0px solid #884D32;
              border-radius: 0;
            }
            .elf{
              width: 80%;
              animation: rotateLogo 12s linear infinite;
              @media (min-width: 481px) and (max-width: 768px) {
                width: 100%;
              }
              @media (max-width: 480px) {
                width: 100%;
              }
            }
          }
          
        }
      }
    }
  }
  .characters{
    @include d-flex(column,flex-start,stretch);
    gap: 100px;
    @media (min-width: 1025px) and (max-width: 1440px){
    }
    @media (min-width: 769px) and (max-width: 1024px){
    }
    @media (min-width: 481px) and (max-width: 768px) {
      gap: 20px;
    }
    @media (max-width: 480px) {
      gap: 40px;
    }
    .characters-image-and-text{
      padding: 30px;
      @include d-flex(column,flex-start,center);
      gap: 10px;
      .characters-image{
        width: 500px;
        @media (min-width: 1025px) and (max-width: 1440px){
          width: 425px;
        }
        @media (min-width: 769px) and (max-width: 1024px){
          width: 350px;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          width: 275px;
        }
        @media (max-width: 480px) {
          width: 225px;
        }
      }
      .characters-text{
        color:#874B31;
        font-size: 5rem;
      }
    }
    .characters-wrapper{
      @include d-flex(row,flex-start,stretch);
      gap: 5px;
      row-gap: 100px;
      flex-wrap: wrap;
      @media (min-width: 1025px) and (max-width: 1440px){
      }
      @media (min-width: 769px) and (max-width: 1024px){
      }
      @media (min-width: 481px) and (max-width: 768px) {
        row-gap: 50px;
      }
      @media (max-width: 480px) {
        row-gap: 70px;
      }
      .characters-content-wrapper{
        flex: 1 0 1px;
        -webkit-flex: 1 0 1px;
          -moz-flex: 1 0 1px;
          -o-flex: 1 0 1px;
        position: relative;
        @include d-flex-center;
        @media (min-width: 769px) and (max-width: 1024px){
          flex: 1 0 49%;
          -webkit-flex: 1 0 49%;
          -moz-flex: 1 0 49%;
          -o-flex: 1 0 49%;
          width: 50%;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          flex: 1 0 100%;
          -webkit-flex: 1 0 100%;
          -moz-flex: 1 0 100%;
          -o-flex: 1 0 100%;
          @include d-flex(row-reverse,center,center);
          background: rgba(135, 75, 49, 0.3);
          padding: 20px 20px 20px 0;
          &:nth-child(2n){
            @include d-flex(row,center,center);
          }
        }
        @media (max-width: 480px) {
          flex: 1 0 100%;
          -webkit-flex: 1 0 100%;
          -moz-flex: 1 0 100%;
          -o-flex: 1 0 100%;
          @include d-flex(row-reverse,center,center);
          background: rgba(135, 75, 49, 0.3);
        }
        .characters-content{
          height: 550px;
          padding: 50px;
          @include d-flex(column,center,center);
          gap: 15px;
          position: relative;
          background: rgba(135, 75, 49, 0.3);
          color: #fff;
          clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
          user-select: none;
          @media (min-width: 1025px) and (max-width: 1440px){
            height: 450px;
            gap: 5px;
            padding: 20px;
          }
          @media (min-width: 769px) and (max-width: 1024px){
            height: 500px;
            gap: 5px;
            padding: 20px;
          }
          @media (min-width: 481px) and (max-width: 768px) {
            clip-path: none;
            background: transparent;
            height: fit-content;
            padding: 10px;
            flex: 1 0 1px;
            -webkit-flex: 1 0 1px;
          -moz-flex: 1 0 1px;
          -o-flex: 1 0 1px;
          }
          @media (max-width: 480px) {
            clip-path: none;
            background: transparent;
            height: fit-content;
            padding: 10px;
            flex: 1 0 1px;
            -webkit-flex: 1 0 1px;
          -moz-flex: 1 0 1px;
          -o-flex: 1 0 1px;
          }
          .character-name{
            font-weight: 700;
            font-size: 3.2rem;
            text-align: center;
            position: relative;
            z-index: 3;
            @media (min-width: 1025px) and (max-width: 1440px){
              
            }
            @media (min-width: 769px) and (max-width: 1024px){
              font-size: 3.5rem;
            }
            @media (min-width: 481px) and (max-width: 768px) {
            }
            @media (max-width: 480px) {
              font-size: 4rem;
            }
          }
          .character-story{
            font-weight: normal;
            font-size: 2rem;
            text-align: center;
            position: relative;
            z-index: 3;
            @media (min-width: 1025px) and (max-width: 1440px){
              
            }
            @media (min-width: 769px) and (max-width: 1024px){
              font-size: 2.5rem;
            }
            @media (min-width: 481px) and (max-width: 768px) {
              font-size: 3rem;
            }
            @media (max-width: 480px) {
              font-size: 3rem;
            }
          }
        }
        .character-image{
          width: 270px;
          @media (min-width: 1441px){
            position: absolute;
            top: -200px;
            left: 50%;
            transform: translate(-50%,40%);
          }
          @media (min-width: 1025px) and (max-width: 1440px){
            width: 200px;
            top: -180px;
            left: 50%;
            position: absolute;
            transform: translate(-50%,40%);
          }
          @media (min-width: 769px) and (max-width: 1024px){
            position: absolute;
            width: 270px;
            top: -180px;
            left: 50%;
            transform: translate(-50%,40%);
          }
          @media (min-width: 481px) and (max-width: 768px) {
            position: relative;
            width: 200px;
            flex: 0 0 auto;
            -webkit-flex: 0 0 auto;
          -moz-flex: 0 0 auto;
          -o-flex: 0 0 auto;
          }
          @media (max-width: 480px) {
            position: absolute;
            width: 120px;
            top: -60px;
            left: 0px;
            
          }
        }
      }
    }
  }
  .road-map{
    @include d-flex(column,flex-start,stretch);
    gap: 30px;
    .road-map-text{
      @include d-flex-center;
      font-size: 5rem;
      color: #874B31;
    }
    .road-map-content{
      padding: 0 50px;
      @media (min-width: 481px) and (max-width: 768px)  {
        padding: 0 10px;
      }
      @media (max-width: 480px) {
        padding: 0 5px;
      }
      @include d-flex-center;
      .road-map-image{
        width: 100%;
      }
    }
  }
  .nft{
    @include d-flex(column,flex-start,stretch);
    height:70vh;
    @media (min-width: 481px) and (max-width: 768px) and (min-height: 450px) {
      height:50vh;
    }
    @media (min-width: 481px) and (max-width: 768px) and (max-height: 449px) {
      height:100vh;
    }
    @media (max-width: 480px) and (min-height: 450px) {
      height:45vh;
    }
    @media (max-width: 480px) and (max-height: 449px) {
      height:100vh;
    }
    .nft-text{
      @include d-flex-center;
      font-size: 5rem;
      color: #874B31;
      flex: 0 0 auto;
      -webkit-flex: 0 0 auto;
          -moz-flex: 0 0 auto;
          -o-flex: 0 0 auto;
    }
    .nft-wrapper{
      flex: 1 0 1px;
      -webkit-flex: 1 0 1px;
          -moz-flex: 1 0 1px;
          -o-flex: 1 0 1px;
      @include d-flex-center;
      .rotate-nft-wrapper{
        position: relative;
        width: 210px;
        perspective: 1000px;
        -webkit-perspective: 1000px;
        -moz-perspective: 1000px;
        -o-perspective: 1000px;
        @media (min-width: 1025px) and (max-width: 1440px){
          width: 160px;
        }
        @media (min-width: 769px) and (max-width: 1024px){
          width: 120px;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          width: 80px;
        }
        @media (max-width: 480px) {
          width: 40px;
        }
        .carousel{
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          -webkit-transform-style: preserve-3d;
          -moz-transform-style: preserve-3d;
          -o-transform-style: preserve-3d;
          animation: rotation 50s infinite linear;
          -webkit-animation: rotation 50s infinite linear;
          -moz-animation: rotation 50s infinite linear;
          -o-animation: rotation 50s infinite linear;
          .nft-items{
            width: 270px;
            position: absolute;
            @media (min-width: 1025px) and (max-width: 1440px){
              width: 220px;
            }
            @media (min-width: 769px) and (max-width: 1024px){
              width: 180px;
            }
            @media (min-width: 481px) and (max-width: 768px) {
              width: 140px;
            }
            @media (max-width: 480px) {
              width: 100px;
            }
            &:nth-child(1){
              transform: rotateY(0deg) translateZ(275px) translateY(-50%);
              animation: nft1 50s infinite linear;
              -webkit-animation: nft1 50s infinite linear;
              -moz-animation: nft1 50s infinite linear;
              -o-animation: nft1 50s infinite linear;
              @media (min-width: 1025px) and (max-width: 1440px){
                transform: rotateY(0deg) translateZ(225px) translateY(-50%);
              }
              @media (min-width: 769px) and (max-width: 1024px){
                transform: rotateY(0deg) translateZ(185px) translateY(-50%);
              }
              @media (min-width: 481px) and (max-width: 768px) {
                transform: rotateY(0deg) translateZ(145px) translateY(-50%);
              }
              @media (max-width: 480px) {
                transform: rotateY(0deg) translateZ(105px) translateY(-50%);
              }
            }
            &:nth-child(2){
              transform: rotateY(90deg) translateZ(275px) translateY(-50%);
              animation: nft2 50s infinite linear;
              -webkit-animation: nft2 50s infinite linear;
              -moz-animation: nft2 50s infinite linear;
              -o-animation: nft2 50s infinite linear;
              @media (min-width: 1025px) and (max-width: 1440px){
                transform: rotateY(90deg) translateZ(225px) translateY(-50%);
              }
              @media (min-width: 769px) and (max-width: 1024px){
                transform: rotateY(90deg) translateZ(185px) translateY(-50%);
              }
              @media (min-width: 481px) and (max-width: 768px) {
                transform: rotateY(90deg) translateZ(125px) translateY(-50%);
              }
              @media (max-width: 480px) {
                transform: rotateY(90deg) translateZ(105px) translateY(-50%);
              }
            }
            &:nth-child(3){
              transform: rotateY(180deg) translateZ(275px) translateY(-50%);
              animation: nft3 50s infinite linear;
              -webkit-animation: nft3 50s infinite linear;
              -moz-animation: nft3 50s infinite linear;
              -o-animation: nft3 50s infinite linear;
              @media (min-width: 1025px) and (max-width: 1440px){
                transform: rotateY(180deg) translateZ(225px) translateY(-50%);
              }
              @media (min-width: 769px) and (max-width: 1024px){
                transform: rotateY(180deg) translateZ(185px) translateY(-50%);
              }
              @media (min-width: 481px) and (max-width: 768px) {
                transform: rotateY(180deg) translateZ(145px) translateY(-50%);
              }
              @media (max-width: 480px) {
                transform: rotateY(180deg) translateZ(105px) translateY(-50%);
              }
            }
            &:nth-child(4){
              transform: rotateY(270deg) translateZ(275px) translateY(-50%);
              animation: nft4 50s infinite linear;
              -webkit-animation: nft4 50s infinite linear;
              -moz-animation: nft4 50s infinite linear;
              -o-animation: nft4 50s infinite linear;
              @media (min-width: 1025px) and (max-width: 1440px){
                transform: rotateY(270deg) translateZ(225px) translateY(-50%);
              }
              @media (min-width: 769px) and (max-width: 1024px){
                transform: rotateY(270deg) translateZ(185px) translateY(-50%);
              }
              @media (min-width: 481px) and (max-width: 768px) {
                transform: rotateY(270deg) translateZ(145px) translateY(-50%);
              }
              @media (max-width: 480px) {
                transform: rotateY(270deg) translateZ(105px) translateY(-50%);
              }
            }
          }
        }
      }
    }
  }
  .team{
    @include d-flex(column,flex-start,stretch);
    position: relative;
    background: linear-gradient(255.97deg, #371913 0%, rgba(38, 17, 13, 0.05) 100%);
    background: -webkit-linear-gradient(255.97deg, #371913 0%, rgba(38, 17, 13, 0.05) 100%);
    background: -moz-linear-gradient(255.97deg, #371913 0%, rgba(38, 17, 13, 0.05) 100%);
    background: -o-linear-gradient(255.97deg, #371913 0%, rgba(38, 17, 13, 0.05) 100%);
    gap: 50px;
    padding: 20px;
    @media (min-width: 1025px) and (max-width: 1440px){
      padding: 16px;
      gap: 45px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
      padding: 12px;
      gap: 40px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      padding: 8px;
      gap: 35px;
    }
    @media (max-width: 480px) {
      padding: 4px;
      gap: 30px;
    }
    .team-text{
      @include d-flex-center;
      font-size: 5rem;
      color: #874B31;
    }
    .team-members{
      @include d-flex(row,flex-start,flex-start);
      flex-wrap: wrap;
      row-gap: 50px;
      @media (min-width: 1025px) and (max-width: 1440px){
        row-gap: 45px;
      }
      @media (min-width: 769px) and (max-width: 1024px){
        row-gap: 40px;
      }
      @media (min-width: 481px) and (max-width: 768px) {
        row-gap: 35px;
      }
      @media (max-width: 480px) {
        row-gap: 30px;
      }
      .members{
        flex: 1 0 20%;
        @include d-flex-center;
        .member-card{
          width: 250px;
          height: 100%;
          position: relative;
          @include d-flex(column,flex-end,stretch);
          .member-image{
            width: 100%;
          }
          .member-info{
            width: 100%;
            z-index: 3;
            background: linear-gradient(180deg, rgba(129, 72, 47, 0.6) 0%, rgba(66, 48, 42, 0.6) 100%);
            background: -webkit-linear-gradient(180deg, rgba(129, 72, 47, 0.6) 0%, rgba(66, 48, 42, 0.6) 100%);
            background: -moz-linear-gradient(180deg, rgba(129, 72, 47, 0.6) 0%, rgba(66, 48, 42, 0.6) 100%);
            background: -o-linear-gradient(180deg, rgba(129, 72, 47, 0.6) 0%, rgba(66, 48, 42, 0.6) 100%);
            @include d-flex(column,center,center);
            .member-name{
              font-size: 2.6rem;
              font-weight: 500;
              color: #fff;
            }
            .member-job{
              font-size: 2.2rem;
              font-weight: normal;
              color: rgb(168, 168, 168);
            }
          }
        }
      }
    }
    .team-background{
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
    }
  }
  .faq{
    @include d-flex(column,flex-start,stretch);
    gap: 50px;
    padding: 20px;
    @media (min-width: 1025px) and (max-width: 1440px){
      padding: 16px;
      gap: 45px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
      padding: 12px;
      gap: 40px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      padding: 8px;
      gap: 35px;
    }
    @media (max-width: 480px) {
      padding: 4px;
      gap: 30px;
    }
    .faq-text{
      @include d-flex-center;
      font-size: 5rem;
      color: #874B31;
    }
    .faq-content{
      @include d-flex(row,flex-start,stretch);
      .area-icon{
        @include d-flex(column,center,center);
        flex: 1 0 1px;
        -webkit-flex: 1 0 1px;
          -moz-flex: 1 0 1px;
          -o-flex: 1 0 1px;
        @media (min-width: 1025px) and (max-width: 1440px){
          padding: 16px;
          gap: 45px;
          flex: 0 0 auto;
          -webkit-flex: 0 0 auto;
          -moz-flex: 0 0 auto;
          -o-flex: 0 0 auto;
        }
        @media (min-width: 769px) and (max-width: 1024px){
          padding: 12px;
          gap: 40px;
          flex: 0 0 auto;
          -webkit-flex: 0 0 auto;
          -moz-flex: 0 0 auto;
          -o-flex: 0 0 auto;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          display: none;
        }
        @media (max-width: 480px) {
          display: none;
        }
        .icon{
          width: 450px;
          @media (min-width: 1025px) and (max-width: 1440px){
            width: 350px;
          }
          @media (min-width: 769px) and (max-width: 1024px){
            width: 250px;
          }
          @media (min-width: 481px) and (max-width: 768px) {
            display: none;
          }
          @media (max-width: 480px) {
            display: none;
          }
        }
      }
      .questions{
        @include d-flex(column,flex-start,center);
        flex: 1 0 1px;
        -webkit-flex: 1 0 1px;
        -moz-flex: 1 0 1px;
        -o-flex: 1 0 1px;
        gap: 20px;
        @media (min-width: 1025px) and (max-width: 1440px){
          gap: 18px;
        }
        @media (min-width: 769px) and (max-width: 1024px){
          gap: 16px;
        }
        @media (min-width: 481px) and (max-width: 768px) {
          gap: 14px;
        }
        @media (max-width: 480px) {
          gap: 12px;
        }
        .faq-question{
          @include d-flex(column,flex-start,stretch);
          gap: 35px;
          user-select: none;
          border-radius: 10px;
          width: 90%;
          padding: 30px;
          background: rgba(67, 39, 28, 0.5);
          border-bottom: 1px solid rgba(255, 255, 255, 0.25);
          color: #fff;
          @media (min-width: 1025px) and (max-width: 1440px){
            gap: 30px;
            padding: 25px;
          }
          @media (min-width: 769px) and (max-width: 1024px){
            gap: 25px;
            padding: 20px;
          }
          @media (min-width: 481px) and (max-width: 768px) {
            padding: 15px;
            gap: 20px;
          }
          @media (max-width: 480px) {
            padding: 10px;
            gap: 15px;
          }
          .header{
            cursor: pointer;
            @include d-flex(row,space-between,center);
            gap: 20px;
            @media (min-width: 1025px) and (max-width: 1440px){
              gap: 18px;
            }
            @media (min-width: 769px) and (max-width: 1024px){
              gap: 16px;
            }
            @media (min-width: 481px) and (max-width: 768px) {
              gap: 14px;
            }
            @media (max-width: 480px) {
              gap: 12px;
            }
            .header-text{
              font-size: 2.8rem;
            }
            .icon{
              width: 25px;
            }
          }
          .question-answer{
            font-weight: 300;
            font-size: 2.2rem;
            color: rgb(224, 223, 223);
          }
        }
      }
    }
  }
  .join-community{
    @include d-flex-center;
    margin-bottom: 50px;
    color: #fff;
    .join-community-wrapper{
      border-radius: 30px;
      width: 50%;
      padding: 30px;
      background: rgba(55, 25, 19, 0.5);
      border: 1px solid #7B452E;
      @include d-flex(column,center,center);
      gap: 40px;
      @media (min-width: 1025px) and (max-width: 1440px){
        width: 70%;
        gap: 35px;
        padding: 25px;
      }
      @media (min-width: 769px) and (max-width: 1024px){
        width: 80%;
        gap: 30px;
        padding: 20px;
      }
      @media (min-width: 481px) and (max-width: 768px) {
        width: 90%;
        gap: 25px;
        padding: 15px;
      }
      @media (max-width: 480px) {
        width: 100%;
        gap: 20px;
        padding: 10px;
      }
      .community-text{
        font-size: 4rem;
        @include d-flex-center;
      }
      .buttons{
        width: 100%;
        text-align: center;
        @include d-flex(row,space-evenly,stretch);
        color: #fff;
        .twitter{
          &:link, &:visited,&:link:active, &:visited:active{
            color:#fff;
          }
          border-radius: 10px;
          background: linear-gradient(262.68deg, #81482F 0.96%, #19110E 100%);
          cursor: pointer;
          font-size: 2rem;
          padding: 15px 25px;
          @include d-flex(row,flex-start,center);
          gap: 20px;
          @media (min-width: 1025px) and (max-width: 1440px){
            padding: 12px 21px;
            gap: 17px;
          }
          @media (min-width: 769px) and (max-width: 1024px){
            padding: 10px 17px;
            gap: 14px;
          }
          @media (min-width: 481px) and (max-width: 768px) {
            padding: 6px 13px;
            gap: 11px;
          }
          @media (max-width: 480px) {
            padding: 6px 9px;
            gap: 8px;
          }
          .icon{
            width: 25px;
            @media (min-width: 1025px) and (max-width: 1440px){
              width: 23px;
            }
            @media (min-width: 769px) and (max-width: 1024px){
              width: 21px;
            }
            @media (min-width: 481px) and (max-width: 768px) {
              width: 19px;
            }
            @media (max-width: 480px) {
              width: 17px;
            }
          }
        }
        .discord{
          @extend .twitter;
        }
        .medium{
          @extend .twitter;
        }
      }
    }
  }
  .up{
    position: fixed;
    bottom: 50px;
    right: 50px;
    border-radius: 999px;
    z-index: 999;
    cursor: pointer;
    background-color: #4e2e27;
    @include d-flex-center;
    padding: 5px;
    user-select: none;
    @media (min-width: 1025px) and (max-width: 1440px){
      bottom: 45px;
      right: 45px;
    }
    @media (min-width: 769px) and (max-width: 1024px){
      bottom: 40px;
      right: 40px;
    }
    @media (min-width: 481px) and (max-width: 768px) {
      bottom: 35px;
      right: 35px;
    }
    @media (max-width: 480px) {
      bottom: 20px;
      right: 20px;
    }
    .icon{
      width: 50px;
      @media (min-width: 1025px) and (max-width: 1440px){
        width: 45px;
      }
      @media (min-width: 769px) and (max-width: 1024px){
        width: 40px;
      }
      @media (min-width: 481px) and (max-width: 768px) {
        width: 35px;
      }
      @media (max-width: 480px) {
        width: 30px;
      }
    }
  }
}

@keyframes rotateLogo {
  from{
    transform: rotateY(0deg);
  }
  to{
    transform: rotateY(-360deg);
  }
}
@keyframes rotation{
	from{
		transform: rotateY(0);
	}
	to{
		transform: rotateY(360deg);
	}
}

@keyframes nft1 {
  0%{
    filter: blur(0px);
  } 
  25%{
    filter: blur(1px);
  } 
  50%{
    filter: blur(2px);
  }
  75%{
    filter: blur(1px);
  }
  100%{
    filter: blur(0px);
  }
}
@keyframes nft2 {
  0%{
    filter: blur(1px);
  } 
  25%{
    filter: blur(2px);
  } 
  50%{
    filter: blur(1px);
  }
  75%{
    filter: blur(0px);
  }
  100%{
    filter: blur(1px);
  }
}
@keyframes nft3 {
  0%{
    filter: blur(2px);
  } 
  25%{
    filter: blur(1px);
  } 
  50%{
    filter: blur(0px);
  }
  75%{
    filter: blur(1px);
  }
  100%{
    filter: blur(2px);
  }
}
@keyframes nft4 {
  0%{
    filter: blur(1px);
  } 
  25%{
    filter: blur(0px);
  } 
  50%{
    filter: blur(1px);
  }
  75%{
    filter: blur(2px);
  }
  100%{
    filter: blur(1px);
  }
}
</style>