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
              <img class="elf" src="@/assets/images/area-logo.png" alt="">
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
          <img :src="require('@/assets/images/'+item.value+'.png')" :style="{'width':item.characterWidth+'px'}" class="character-image" alt="">
        </div>
        
      </div>
    </div>
    <div id="roadmap" class="road-map">
      <div class="road-map-text">
        Roadmap
      </div>
      <div class="road-map-content">
        <img src="@/assets/images/road-map.png" alt="" class="road-map-image">
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
    }
  },
  computed:{
    ...mapGetters([
      "getIsDown",
      "getPageRoute"
    ])
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
  .key{
    position: absolute;
    top: 0;
    left: 0;
    width: 500px;
  }
  .the-area{
    height: 100vh;
    background-image: url('@/assets/images/the_area_background.svg');
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-size: cover;
    @include d-flex-center;
    .the-area-content-wrapper{
      width: 100%;
      @include d-flex(column,flex-start,center);
      .the-area-text{
        @include d-flex-center;
        font-size: 4rem;
        color: #fff;
        font-family: 'Julius Sans One', sans-serif;
      }
      .the-area-content-and-image{
        height: 500px;
        width: 80%;
        @include d-flex(row,flex-start,center);
        .content{
          height: 80%; 
          background: linear-gradient(255.97deg, #371913 0%, rgba(38, 17, 13, 0.05) 100%);
          border-radius: 10px 0 0 10px;
          flex: 1 0 1px;
          color: #C9C9C9;
          @include d-flex(column,flex-start,stretch);
          gap: 30px;
          padding: 20px;
          .header{
            font-size: 4rem;
            font-weight: 500;
            text-align: center;
          }
          .text{
            font-size: 2.2rem;
            font-weight: 300;
            padding: 20px;
            @include d-flex-center
          }
        }
        .image{
          height: 100%;
          width: 400px;
          flex: 0 0 auto;
          background: linear-gradient(209.67deg, rgba(111, 50, 37, 0.6) 1.1%, rgba(58, 25, 19, 0.6) 96.96%);
          backdrop-filter: blur(15px);
          border-radius: 20px;
          position: relative;
          
          @include d-flex(column,flex-end,center);
          .image-border{
            width: 100%;
            height: 100%;
            border: 10px solid #884D32;
            top: 30px;
            left: -30px;
            border-radius: 20px;
            @include d-flex-center;
            perspective: 1000px;
            .elf{
              width: 80%;
              animation: rotateLogo 12s linear infinite;
            }
          }
          
        }
      }
    }
  }
  .characters{
    @include d-flex(column,flex-start,stretch);
    gap: 100px;
    .characters-image-and-text{
      padding: 30px;
      @include d-flex(column,flex-start,center);
      gap: 20px;
      .characters-image{
        width: 500px;
      }
      .characters-text{
        color:#874B31;
        font-size: 4rem;
      }
    }
    .characters-wrapper{
      @include d-flex(row,flex-start,stretch);
      gap: 5px;
      padding: 5px;
      .characters-content-wrapper{
        flex: 1 0 1px;
        position: relative;
        .characters-content{
          height: 550px;
          padding: 70px;
          @include d-flex(column,center,center);
          gap: 15px;
          position: relative;
          background: rgba(135, 75, 49, 0.3);
          color: #fff;
          clip-path: polygon(0 25%, 50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%);
          user-select: none;
          .character-name{
            font-weight: 700;
            font-size: 3.2rem;
            text-align: center;
            position: relative;
            z-index: 3;
          }
          .character-story{
            font-weight: normal;
            font-size: 2.4rem;
            text-align: center;
            position: relative;
            z-index: 3;
          }
        }
        .character-image{
          position: absolute;
          top: -40%;
          left: 50%;
          transform: translate(-50%,40%);
        }
      }
    }
  }
  .road-map{
    @include d-flex(column,flex-start,stretch);
    gap: 50px;
    .road-map-text{
      @include d-flex-center;
      font-size: 4rem;
      color: #874B31;
    }
    .road-map-content{
      padding: 0 50px;
      @include d-flex-center;
      .road-map-image{
        width: 100%;
      }
    }
  }
  .nft{
    @include d-flex(column,flex-start,stretch);
    height:70vh;
    .nft-text{
      @include d-flex-center;
      font-size: 4rem;
      color: #874B31;
      flex: 0 0 auto;
    }
    .nft-wrapper{
      flex: 1 0 1px;
      @include d-flex-center;
      .rotate-nft-wrapper{
        transform-style: preserve-3d;
        position: relative;
        width: 210px;
        position: relative;
        perspective: 1000px;
        .carousel{
          width: 100%;
          height: 100%;
          transform-style: preserve-3d;
          animation: rotation 50s infinite linear;
          .nft-items{
            width: 270px;
            position: absolute;
            &:nth-child(1){
              transform: rotateY(0deg) translateZ(275px) translateY(-50%);
              animation: nft1 50s infinite linear;
            }
            &:nth-child(2){
              transform: rotateY(90deg) translateZ(275px) translateY(-50%);
              animation: nft2 50s infinite linear;
            }
            &:nth-child(3){
              transform: rotateY(180deg) translateZ(275px) translateY(-50%);
              animation: nft3 50s infinite linear;
            }
            &:nth-child(4){
              transform: rotateY(270deg) translateZ(275px) translateY(-50%);
              animation: nft4 50s infinite linear;
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
    gap: 50px;
    padding: 20px;
    .team-text{
      @include d-flex-center;
      font-size: 4rem;
      color: #874B31;
    }
    .team-members{
      @include d-flex(row,flex-start,flex-start);
      flex-wrap: wrap;
      row-gap: 50px;
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
    .faq-text{
      @include d-flex-center;
      font-size: 4rem;
      color: #874B31;
    }
    .faq-content{
      @include d-flex(row,flex-start,stretch);
      .area-icon{
        @include d-flex(column,center,center);
        flex: 1 0 1px;
        .icon{
          width: 450px;
        }
      }
      .questions{
        @include d-flex(column,flex-start,center);
        flex: 1 0 1px;
        gap: 20px;
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
          .header{
            cursor: pointer;
            @include d-flex(row,space-between,center);
            gap: 20px;
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
      .community-text{
        font-size: 4rem;
        @include d-flex-center;
      }
      .buttons{
        width: 100%;
        @include d-flex(row,space-evenly,center);
        color: #fff;
        .twitter{
          &:link, &:visited,&:link:active, &:visited:active{
            color:#fff;
          }
          border-radius: 10px;
          background: linear-gradient(262.68deg, #81482F 0.96%, #19110E 100%);
          cursor: pointer;
          font-size: 2.2rem;
          padding: 15px 25px;
          @include d-flex(row,flex-start,center);
          gap: 20px;
          .icon{
            width: 25px;
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
    cursor: pointer;
    background-color: #4e2e27;
    @include d-flex-center;
    padding: 5px;
    .icon{
      width: 50px;
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