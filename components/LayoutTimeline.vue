<script setup>
import { ref } from 'vue';
const route = useRoute()

const { data, error, refresh } = await useFetch(`/api/${route.params.id}`)
// const { data, pending, error, refresh } = await useFetch(`https://professorleandrocesar.com/usuarios/`, {})

const notification = ref(false)
const status = data.value.status

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
      <div >
      
            <div class='bar-top-top'>
              <div class="div-img">
                <img :src="data.foto" @click="openNavbar"/>
              </div>
              <div class="mZero">

                <nuxt-link v-if="notification" ><Icon name='ic:baseline-notifications-active'/></nuxt-link>
                <nuxt-link v-else ><Icon name='ic:round-notifications-none'/></nuxt-link>
              </div>

            </div>
          
              <span class="name-user">
                Olá, {{ data.nome }}
              </span>
         
          </div>

          <div v-if="navbarOpen" class="nav-bar">
            <div>
              <nuxt-link @click="openNavbar" class="button-cancel"><Icon name='material-symbols:cancel-rounded'/></nuxt-link>
              <nuxt-link class="old-msg"><Icon name='mdi:email-multiple-outline'/></nuxt-link>
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
                    <p v-if="data.email">
                      {{ data.email }}
                    </p>
                </div>
              </div>
              <p class="section-title">Ciclos</p>
              <p class="section-subtitle">Contrato atual: {{ data.periodo }}</p>

              <p v-if="status == 2" class="section-option pending"><Icon name="solar:danger-square-outline"/> Pendente!</p>
              <p v-if="status == 1" class="section-option bloqued"><Icon name="solar:close-square-outline"/> Bloqueado!</p>
              <!-- 2 é bloqueado-->
              <p v-if="status == 3" class="section-option verified"><Icon name="solar:check-square-outline"/> Verificado!</p>
              <div class="menu-div-one">
                <NuxtLink class="menu-square">
                  <div>
               
                    <div>

                      <p>
                      <Icon name="material-symbols:exercise"/>
                        Treino
                      </p>
                    </div>
                    <div>
                      Atual: {{ data.treinoActual }}
                    </div>
                    <div>
                      Próximo: {{ data.treinoNext }}
                    </div>

                  <div>
                </div>
                  </div>
                </NuxtLink>
                <NuxtLink class="menu-square">
                  <div>
               
                    <div>

                      <p>
                      <Icon name="jam:medical"/>
                        Avaliação
                      </p>
                    </div>
                    <div>
                      Atual: {{ data.valuationActual }}
                    </div>
                    <div>
                      Próxima: {{ data.valuationNext }}
                    </div>

                  <div>
                </div>
                  </div>
                </NuxtLink>
              </div>
            </div>
              <br>
              <!-- Hístórico -->
              <NuxtLink class="menu-button">
                <div>
                  <Icon name="solar:history-outline"/>
                  <p>
                    Histórico
                  </p>
                </div>
                <Icon name="ic:baseline-keyboard-arrow-right"/>
              </NuxtLink>
              <!-- Histórico fim -->

              <!-- Documentos -->
              <p class="section-title">Documentos</p>
              <NuxtLink class="menu-button">
                <div>
                  <Icon name="solar:document-add-linear"/>
                  <p>
                    Contratos
                  </p>
                </div>
                <Icon name="ic:baseline-keyboard-arrow-right"/>
              </NuxtLink>
              <NuxtLink class="menu-button">
                <div>
                  <Icon name="solar:document-text-linear"/>
                  <p>
                    Termos de uso
                  </p>
                </div>
                <Icon name="ic:baseline-keyboard-arrow-right"/>
              </NuxtLink>
              <!-- Documentos fim -->
              </div>
              <!-- ícones de rede sociais -->
              <div class="icons">
    
                <NuxtLink to="https://personal.leandrocesar.com/blog" target="_blank">
                  <div>
                    <Icon name="solar:documents-line-duotone"/>
                  </div>
                </NuxtLink>     
                <NuxtLink to="https://instagram.com/personalleandrocesar" target="_blank">
                  <div>
                    <Icon name="fa6-brands:instagram"/>
                  </div>
                </NuxtLink>     
                <NuxtLink to="https://threads.net/personalleandrocesar" target="_blank">
                  <div>
                    <Icon name="fa6-brands:threads"/>
                  </div>
                </NuxtLink>    
            
              </div>
              <!--  -->

              <!-- Botão Logout -->
              <NuxtLink to="/" class="logout" >
                LOUGOUT <Icon name="solar:logout-3-bold"/>
              </NuxtLink>
              <!--  -->
            </div>


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
            <!-- Fim do Nav-flow -->




          </div>


</template>
<style scoped>
.name-user {
    color: #fadb41;
    font-size: 1.4em;
    text-transform: capitalize;
    margin: 10px 10px;
    font-weight: bold;
}

/* Estilos da barra de navegação (exemplo) */
.bar-top {
    height: 140px;
    background-color: #095d62;
    position: fixed;
    top: 0px;
    width: 100%;
    margin-bottom: 140px;
    z-index: 1006;

}

.mZero {
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

.button-cancel .icon {
    cursor: pointer;
    zoom: 1.4;
    position: fixed;
    left: 15px;
    top: 12px;
    color: #fff;
    border-radius: 50%;
    transition: all .4s linear;
}

.button-cancel .icon:hover {
    cursor: pointer;
    border-radius: 50%;
    background-color: #fadb4190;
}

.old-msg .icon {
    cursor: pointer;
    zoom: 1.4;
    position: fixed;
    right: 15px;
    top: 16px;
    color: #ddd;
    transition: all .4s linear;
    zoom: 1.2
}

.old-msg .icon:hover {
    cursor: pointer;
    color: #fff;
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
    font-size: 12px;
    position: fixed;
    text-align: center;
    z-index: 8;
    border-radius: 30px;
}

.nav-bottom a {
    transition: all .3s linear;
    zoom: 1.2;
    padding: 15px;
    border-radius: 50%;
    color: #095D6260;
}

.nav-bottom a:hover {
    padding: 15px;
    border-radius: 30px;
    background-color: #095D6220;
}

.nav-bottom a.router-link-exact-active {
    z-index: 8;
    padding: 15px;
    border-radius: 30px;
    color: #e1a918;
    background-color: #fadb4150;
}


.main-div-one {
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 90px;
    width: 100%;
}

.main-div-one .icon {
    zoom: 1.4;
    color: #095D62;
    margin-top: -2.5px;
}

.conf {
    color: #555;
    height: 80px;
    backdrop-filter: blur(15px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 32.5%;
    margin: 0px auto 20px auto;
    border-radius: 0 0 20px 20px;
    background-color: #095D6210;
    border: 2px solid #05959c20;
    border-top: 3px solid #05959c40;
}

.icons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    font-weight: 800;
    position: fixed;
    bottom: 70px;
    width: 100%;
    padding: 5px;
    color: #fadb41;
}

.icons a {
    zoom: 1.2;
    display: flex;
    flex-direction: row;
}

.icons a:hover {
    zoom: 1.2;
    display: flex;
    flex-direction: row;
    color: #fff;
}

.logout {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 800;
    position: fixed;
    bottom: 15px;
    left: 50%;
    width: 250px;
    margin-left: -125px;
    border: solid .2px #fadb4150;
    border-radius: 20px;
    background-color: #05959c40;
    padding: 5px;
    color: white;
}

.logout .icon {
    margin: 1px 0px 0px 6px;
    transition: transform .3s linear;
    transform: translateX(8px);
}

.logout:hover {
    color: #fadb41;
    background-color: #05959c60;
    cursor: pointer;
}

.logout:hover .icon {
    margin: 1px 0px 0px 6px;
    transform: translateX(0px);
}

.section-title {
    color: #ccc;
    text-align: left;
    margin: 10px 16px;
    font-weight: 800;
}

.section-subtitle {
    color: #fadb41;
    text-align: left;
    margin: -10px 16px 15px;
    font-weight: 800;
    font-size: .9em;
}

.section-option {
    text-align: left;
    margin: -10px 16px 15px;
    font-size: .8em;
    font-weight: 800;
}

.section-option .icon {
    zoom: .8;
    margin-top: -3px;
}

.verified {
    color: rgb(0, 255, 0);
}

.pending {
    color: yellow;
}

.bloqued {
    color: rgb(250, 96, 96);
}

.menu-button {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    font-weight: 800;
    width: 100%;
    padding: 5px;
    margin: 1px auto;
    color: white;
    background-color: #05959c10;
    border-bottom: solid .2px #fadb4130;
    border-top: solid .2px transparent;
}

.menu-button div {
    display: flex;
    flex-direction: row;
    font-size: .8em;
    justify-content: space-between;
    margin-top: 2px;
}

.menu-button .icon {
    margin: 2px 0px 0px 26px;
    transition: transform .3s linear;
    transform: translateX(-15px);
}

.menu-button .icon:nth-child(2) {
    margin: 5px 0px 0px 26px;
    transition: transform .3s linear;
    transform: translateX(-25px);
}

.menu-button:hover {
    color: #fadb41;
    background-color: #05959c60;
    cursor: pointer;
    border-bottom: solid .2px #fadb4160;
}


.menu-button:hover .icon:nth-child(2) {
    transform: translateX(-15px);
}

.menu-div-one {
    display: flex;
    flex-direction: row;
    justify-content: center;

}

.menu-square {
    display: flex;
    flex-direction: row;
    justify-content: center;
    font-weight: 800;
    width: 49%;
    padding: 5px;
    border-radius: 20px;
    margin: 1px auto;
    color: white;
    background-color: #05959c10;
    border: solid .2px #fadb4130;
}

.menu-square div .icon {
    margin: 3px 0px;
    transition: transform .3s linear;
    transform: translateX(-10px);
}

.menu-square div {
    display: flex;
    flex-direction: column;
    font-size: .9em;
    justify-content: space-between;
    margin: 2px 0 0 5px;
}

.menu-square div:nth-child(2) {
    display: flex;
    flex-direction: column;
    font-size: .6em;
    justify-content: space-between;
    margin: 2px 0 0 5px;
    color: #ddd;
}

.menu-square div:nth-child(3) {
    display: flex;
    flex-direction: column;
    font-size: .6em;
    justify-content: space-between;
    margin: 2px 0 0 5px;
    color: #00f2ff;
}


/* .menu-square:hover{
    color:#fadb41;
    background-color: #05959c60;
    cursor: pointer;
    border-bottom: solid .2px #fadb4160;
} */</style>
