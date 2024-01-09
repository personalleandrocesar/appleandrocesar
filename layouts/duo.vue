<script setup>
const route = useRoute()

const reg = route.params.id
const logon = useCookie('logon')
// const logon = useCookie('logon', { maxAge: 4800})
logon.value = reg

const dataConf = await useFetch(`/api/${route.params.id}`)
const status = dataConf.data.value?.status
const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}

// talvez não precise do código abaixo
const logOff = () => {
  logon.value = null
}

const tag = useCookie('tag')
tag.value = tag.value


const bodyOne = ref(true)
function menu() {
  bodyOne.value = !bodyOne.value

}

</script>
<template>
  <NuxtLoadingIndicator color='repeating-linear-gradient(to right,#00dc82 0%,#fadb41 50%,#00dc82 100%)' /> <!-- here -->

  <div v-if="bodyOne">

    <div class="head-logo" id="sobre">
      <NuxtLink @click="menu()" class="button-client">
        <Icon name="heroicons:bars-3-16-solid" />
      </NuxtLink>
      <div class='logo'>
        <img @click="openPhoto()" :src="dataConf.data.value?.foto" >
      </div>
    </div>
    <div v-if="photoOpen" class="nav-bar">
      <div class='logo-nav-bar'>
        <img @click="openPhoto" :src="dataConf.data.value?.foto">
      </div>
    </div>
    <div v-if="route.path === `/user/${logon}`" class="head-name">
      <div class="name">
        Olá, {{ dataConf.data.value?.nome }}
      </div>
    </div>


    <a class="whats"
      href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20">
      <Icon name="ic:outline-whatsapp" />
    </a>
    <NavBottomTwo />
    <slot />
  </div>



  <div v-else>
    <div class="head-logo" id="sobre">
      <NuxtLink @click="menu()" class="button-client">
        <Icon name="heroicons:bars-3-bottom-right-16-solid" />
      </NuxtLink>
      <div class='logo'>
        <img @click="openPhoto()" :src="dataConf.data.value?.foto" >
      </div>
      <div v-if="photoOpen" class="nav-bar">
        <div class='logo-nav-bar'>
          <img @click="openPhoto" :src="dataConf.data.value?.foto" >
        </div>
      </div>
    </div>
    <div class="head-name">
      <div class="name">
        {{ dataConf.data.value?.nomeCompleto }}
      </div>
      <div class="email">{{ dataConf.data.value?.email }}</div>
    </div>
    <div>
      <p class="section-title">Ciclos</p>
      <p class="section-subtitle">Contrato atual: {{ dataConf.data.value?.periodo }}</p>
      <p v-if="dataConf.data.value?.servico" class="section-subtitle-two">Serviço: {{ dataConf.data.value?.servico }}</p>


      <p v-if="status === 1" class="section-option pending">
        <Icon name="solar:danger-square-outline" /> Pendente!
      </p>
      <p v-else-if="status === 0" class="section-option bloqued">
        <Icon name="solar:close-square-outline" /> Bloqueado!
      </p>
      <p v-else class="section-option verified">
        <Icon name="solar:check-square-outline" /> Verificado!
      </p>
      <div class="conf">
        <NuxtLink class="menu-square">
          <div>
            <div>
              <p>
                <Icon name="material-symbols:exercise" />
                Treino
              </p>
            </div>
            <div>
              Atual: {{ dataConf.data.value?.treinoActual }}
            </div>
            <div>
              Próximo: {{ dataConf.data.value?.treinoNext }}
            </div>
          </div>
        </NuxtLink>
        <NuxtLink v-if="dataConf.data.value?.valuationActual" class="menu-square">
          <div>
            <div>
              <p>
                <Icon name="jam:medical" />
                Avaliação
              </p>
            </div>
            <div>
              Atual: {{ dataConf.data.value?.valuationActual }}
            </div>
            <div>
              Próxima: {{ dataConf.data.value?.valuationNext }}
            </div>
          </div>
        </NuxtLink>
      </div>
      <!-- Hístórico -->
      <NuxtLink class="menu-button">
        <div>
          <Icon name="solar:history-outline" />
          <p>
            Histórico
          </p>
        </div>
        <Icon name="ic:baseline-keyboard-arrow-right" />
      </NuxtLink>
      <!-- Histórico fim -->

      <!-- Documentos -->
      <p class="section-title">Documentos</p>
      <NuxtLink :to="`/user/${route.params.id}/contratos`" class="menu-button">
        <div>
          <Icon name="solar:document-add-linear" />
          <p>
            Contratos
          </p>
        </div>
        <Icon name="ic:baseline-keyboard-arrow-right" />
      </NuxtLink>
      <NuxtLink :to="`/user/${route.params.id}/termos-de-uso`" class="menu-button">
        <div>
          <Icon name="solar:document-text-linear" />
          <p>
            Termos de uso
          </p>
        </div>
        <Icon name="ic:baseline-keyboard-arrow-right" />
      </NuxtLink>
      <!-- Documentos fim -->

      <!-- ícones de rede sociais -->

      <!--  -->

      <!-- Botão Logout -->
      <NuxtLink to="/" class="logout" @click="logOff()">
        LOUGOUT
        <Icon name="solar:logout-3-bold" />
      </NuxtLink>
    </div>
  </div>
</template>
<style scoped>
.head-logo {
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: flex-start;
  z-index: 1;
  flex-wrap: wrap;

}

.logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #edf2f7;
  height: 60px;
  width: 60px;
  color: #718096;
  box-shadow: 1px 7px 20px #095D62;
  margin: 1.5rem;
  border-radius: 7px;
  z-index: 10;
}

.logo img {
  height: 60px;
  width: 60px;
  border-radius: 7px;
  border: #095D62 2px solid;
  z-index: 100;
  opacity: 1;

}

.nav-bar {
  z-index: 200;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.logo-nav-bar {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  z-index: 100;
  transform: translateX(0%);
  position: fixed;
  height: calc(100% - 0px);
  bottom: 0px;
  width: 100%;
  backdrop-filter: blur(5px);
  background-color: #ffffff50;

}

.logo-nav-bar img {
  box-shadow: 1px 7px 20px #095D62;
  height: 300px;
  width: 300px;
  border-radius: 7px;
  border: #095D62 2px solid;
  z-index: 100;
  opacity: 1;

}

.button-client {
  margin: 1.2rem 1.5rem;
  transition: all .4s linear;
  border-radius: 8px;
  cursor: pointer;
  color: var(--color-text);
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  zoom: 1.3;
}

.button-client:hover {
  color: #095D6280;
}

.button-client .icon {
  margin-top: -5px;
  margin-right: 5px;
  color: var(--color-text);
  transition: all 0.2s ease-in-out 0s;
}

.button-client:hover .icon {
  color: #095D6280;
}

.head-name {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
}


.name {
  font-size: 1.6rem;
  line-height: 1.5rem;
  margin: .2rem 1.5rem;
  font-weight: 700;
  letter-spacing: 1.5px;
  color: #095D62;

}

.email {
  font-size: .8rem;
  line-height: 1.5rem;
  margin: .2rem 1.6rem;
  font-weight: 700;
  letter-spacing: 1.1px;
  color: var(--color-text);

}

.whats {
  position: fixed;
  bottom: 4.5rem;
  right: .1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  /* background-color: #edf2f7; */
  height: 40px;
  width: 40px;
  color: #718096;
  box-shadow: 1px 1px 15px #095D6250;
  transition: all 0.2s ease-in-out 0s;
  margin: 0rem 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
background-color: #edf2f7;
   backdrop-filter: blur(15px);
}

.whats:hover {
  color: #095D6280;
  box-shadow: 1px 1px 15px #095D6280;
  z-index: 100;
}

.body-timeline {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  margin: 2rem 10px 120px 10px;
}

.main-logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #edf2f7;
  height: 100px;
  width: 100px;
  color: #718096;
  box-shadow: 1px 7px 20px #095D62;
  margin: 1.5rem;
  border-radius: 7px;
}

.main-logo img {
  height: 100px;
  width: 100px;
  border-radius: 7px;
  border: #095D62 2px solid;
  opacity: 1;

}

.body-timeline p {
  text-align: left;
  margin: 0 10px 20px 20px;
  color: var(--color-text);
}

.link {
  text-decoration: underline;
}

.link:hover {
  color: #095D62;
}

.section-title {
  color: var(--color-text);
  text-align: left;
  margin: 10px 1.5rem;
  font-weight: 800;
}

.section-subtitle {
  color: #095D62;
  text-align: left;
  margin: -10px 1.5rem 15px;
  font-weight: 800;
  font-size: .9em;
}

.section-subtitle-two {
    color: #095D62;
    text-align: left;
    margin: -23px 1.5rem 15px;
    font-weight: 800;
    font-size: .9em;
}

.section-option {
  text-align: left;
  margin: -10px 1.5rem 15px;
  font-size: .8em;
  font-weight: 800;
}

.section-option .icon {
  zoom: .8;
  margin-top: -3px;
}

.verified {
  color: green;
}

.pending {
  color: #e1a918;
}

.bloqued {
  color: #b30000;
}


.conf {
  display: flex;
  flex-direction: row;
  justify-content: center;

}

.menu-square {
  display: flex;
  flex-direction: row;
  justify-content: center;
  font-weight: 800;
  width: 49.6%;
  padding: 5px;
  border-radius: 8px;
  margin: 1px auto;
  color: #095D62;
  background-color: #095D6210;
  border: solid .2px #095D6210;
}

.menu-square div .icon {
  margin: 3px 0px;
  transition: transform .3s linear;
  transform: translateX(-10px);
}

.menu-square div {
  display: flex;
  flex-direction: column;
  font-size: 1em;
  justify-content: center;
  margin: 2px auto;
}

.menu-square div:nth-child(2) {
  display: flex;
  flex-direction: column;
  font-size: .7em;
  justify-content: center;
  margin: 2px auto;
  color: var(--color-text);
}

.menu-square div:nth-child(3) {
  display: flex;
  flex-direction: column;
  font-size: .7em;
  justify-content: center;
  margin: 2px auto;
  color: #002aff;
}

.menu-button {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-weight: 800;
  width: 100%;
  padding: 5px;
  margin: 1px auto;
  border: solid 1px #095D6210;
  color: var(--color-text);
  background-color: #fff;
  border-bottom: solid .2px #095D6230;
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
  background-color: #095D6210;
  color: #095D6280;
  cursor: pointer;
  border-bottom: solid .2px #095D6250;
}


.menu-button:hover .icon:nth-child(2) {
  transform: translateX(-15px);
}

.logout {
  position: fixed;
  bottom: 15px;
  left: 50%;
  width: 250px;
  margin-left: -125px;
  transition: all .4s linear;
  border: solid 1px #095D6210;
  color: var(--color-text);
  box-shadow: 0 0px 5px #095D6210;
  border-radius: 8px;
  cursor: pointer;
  text-align: center;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 6px;
  padding-bottom: 8px;
}

.logout .icon {
  margin: 1px 0px 0px 6px;
  transition: transform .3s linear;
  transform: translateX(8px);
}

.logout:hover {
  background-color: #095D6210;
  color: #095D6280;
  cursor: pointer;
}

.logout:hover .icon {
  margin: 1px 0px 0px 6px;
  transform: translateX(0px);
}




@media only screen and (max-width: 370px) {
  .head-logo {
    display: flex;
    justify-content: center;
    flex-direction: row-reverse;
    align-items: center;
    flex-wrap: wrap;
  }

  .logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }

  .logo img {
    height: 100px;
    width: 100px;
    border-radius: 7px;
    border: #095D62 2px solid;

  }

  .button-client {
    margin: 2rem 1.5rem 1rem 1.5rem;
  }

  .head-name {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  }


  .name {
    font-size: 1.6rem;
    line-height: 1.5rem;
    margin: .2rem 1.5rem;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-align: center;
  }

  .whats {
    margin: 1rem 1.5rem;
  }

  .category {
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
  }

  .category-plus {
    display: flex;
    flex-direction: column-reverse;
  }

  .button-plus a {
    margin: 1.5rem auto;
    cursor: pointer;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #fff;
    cursor: pointer;
    text-align: center;
    color: var(--color-text);
    line-height: 18px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    font-size: 14px;
    padding: 8px 20px;
    text-align: center;
  }

  .button-plus a .icon {
    margin: 0 -8px 0 -5px;
  }

  .button-plus a:hover {
    margin: 0rem auto;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    background-color: #edf2f7;
    cursor: pointer;
    width: 100px;
    text-align: center;
    color: #095D6280;
    line-height: 18px;
    border-radius: 8px;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    padding-top: 8px;
    padding-bottom: 8px;
  }

}
</style>