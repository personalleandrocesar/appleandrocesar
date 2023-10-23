<script setup>
import { ref } from 'vue';
const route = useRoute()
const { data, error, refresh } = await useFetch(`/api/${route.params.id}`)

const notification = ref(false)

const navbarOpen = ref(false);
function openNavbar() {
  navbarOpen.value = !navbarOpen.value;
}
const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}

</script>

<template>
          <NuxtLoadingIndicator color='repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#fadb41 100%)'/> <!-- here -->

          <div class="bar-top">
  <div>

        <div class='bar-top-top'>
          <div class="div-img">
            <img :src="data.foto" @click="openNavbar"/>
          </div>
                  <div class="mZero">

            <nuxt-link v-if="notification" ><Icon name='ic:baseline-notifications-active'/></nuxt-link>
            <nuxt-link v-else ><Icon name='ic:round-notifications-none'/></nuxt-link>
          </div>

        </div>

        <div class="main-div-one">


              <div class="conf">
                <Icon name="fluent:target-arrow-16-filled" />
                <h3>
                  {{ data.objetivo }}
                </h3>

              </div>
              <div class="conf">
                <Icon name='mdi:calendar-weekend' />
                <h3>
                  {{ data.dias }}
                </h3>

              </div>
              <div class="conf">
                <Icon name="material-symbols:timer-rounded" />
                <h3>
                {{ data.tempo }}
                </h3>

              </div>
              </div>

      </div>

      <div v-if="navbarOpen" class="nav-bar">
        <div>
          <nuxt-link @click="openNavbar" class="button"><Icon name='material-symbols:cancel-rounded'/></nuxt-link>
        </div>


        <div class="nav-top">

          <div>

            <!-- Início do Nav-flow -->
            <div class="nav-flow">
              <div  class="div-img">
                <img :src="data.foto" @click="openPhoto"/>
              </div>
              <div>
                <h2>
                  {{ data.nomeCompleto }}
                </h2>
                <p>
                  {{ data.email }}
                </p>
            </div>
          </div>

          </div>
            <!-- <nuxt-link to="/home">Home</nuxt-link>
            <nuxt-link to="/home">Home</nuxt-link>
            <nuxt-link to="/home">Home</nuxt-link> -->
          </div>
        </div>

        <!-- Photo clicavel -->
      <div v-if="photoOpen" class="nav-bar-photo" @click="openPhoto">

        <div class="nav-top">

            <!-- Início do Nav-flow -->
            <div class="nav-flow-photo">
              <div  class="div-img-full">
                <img :src="data.foto"/>
              </div>
          </div>

          </div>
        </div>



      </div>
      <slot />
      <NavBottomTwo />
</template>
<style scoped>
.name-user {
  color: #fadb41;
  font-size: 1.4em;
  text-transform: capitalize;
  margin: 10px 10px;
  font-weight: bold;
}

.bar-top {
  background-color: #095d62;
  position: fixed;
  top: 0px;
  width: 100%;
  z-index: 1400;

}


.mZero{
  margin-top: -30px;
  padding: 0;
}



.bar-top-top {
  background-color: #095d62;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  text-align: left;
}

.bar-top-top a {
  cursor: pointer;
  zoom: 1.2;
  color: #ffffff;
  margin: 5px 15px 30px 10px;
}

.button .icon {
  cursor: pointer;
  zoom: 1.4;
  position: fixed;
  left: 15px;
  top: 12px;
  color: #fff;
}

.button .icon:hover {
  cursor: pointer;
  border-radius: 50%;
  background-color: #ffffff50;
}

.nav-top {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
}

.nav-top a {
  font-size: 1.4em;
}


.nav-bar {
  bottom: 0px;
  z-index: 1004;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  background-color: #095D62;
}

.nav-flow { 
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: left;
  color: var(--color-text);
  font-size: .8em;
  line-height: 1.4;
  font-weight: bold;
  margin: 60px 30px 0 0;
}

.div-img {
  height: 50px;
  border-radius: 50%;
  margin: 10px 10px 30px 10px;
  border: solid 2px #fadb41;
  background-color: #fadb41;
  z-index: 3;
  width: 50px;
}

.div-img img {
  height: 46px;
  width: 46px;
  border-radius: 50%;
}

.nav-flow h2 {
  color: #fadb41;
  text-transform: capitalize;
  line-height: 1;
  margin-right: 10px;
}

.nav-flow div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  text-align: left;
  margin: 10px;
}

.nav-bar-photo {
  z-index: 1004;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  backdrop-filter: blur(5px);
  background-color: #ffffff50;
}

.nav-flow-photo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: left;
  margin-top: 50%;
  color: var(--color-text);
  font-size: .8em;
  font-weight: bold;
}

.div-img-full {
  border-radius: 50%;
  z-index: 3;

}

.div-img-full img {
  height: 180px;
  border: solid 5px #fadb41;
  border-radius: 50%;
}

.nav-bottom {
  display: flex;
  flex-direction: row;
  position: fixed;
  bottom: 10px;
  left: 18%;
  background-color: #095D6220;
  backdrop-filter: blur(15px);
  padding: 3px;
  font-size: 12px;
  position: fixed;
  text-align: center;
  z-index: 800;
  border-radius: 30px;
}

.nav-bottom a {
  zoom: 1.2;
  padding: 15px;
  border-radius: 20%;
  color: #095D6260;
}

.nav-bottom a:hover {
  padding: 15px;
  border-radius: 40%;
  background-color: #095D6220;
}

.nav-bottom a.router-link-exact-active {
  padding: 15px;
  border-radius: 40%;
  color: #e1a918;
  background-color: #fadb4150;
}

.main-div-one {
  overflow-x: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  
}
.main-div-one .icon{
   zoom: 1.4;
  color: #fff;
  margin-top: 2px;
}

.conf {  
    color:#ffffff;
  overflow-x: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 32.5%;
  margin: 0px auto 0px auto;
  padding: 5px 0;
  border-radius: 10px 10px 0 0;
      background-color: #ffffff30;
}

</style>
