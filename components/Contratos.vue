<script setup>
const route = useRoute()

const reg = route.params.id
const logon = useCookie('logon')
// const logon = useCookie('logon', { maxAge: 4800})
logon.value = reg
const data = await useFetch(`/api/${route.params.id}`)
// const { data, pending, error, refresh } = await useFetch(`https://professorleandrocesar.com/usuarios/`, {})

const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}

const bodyOne = ref(true)
function menu() {
  bodyOne.value = !bodyOne.value

}


</script>
<template>
  <NuxtLoadingIndicator color='repeating-linear-gradient(to right,#00dc82 0%,#fadb41 50%,#00dc82 100%)' /> <!-- here -->
  <NavTree/>
  
  <div v-if="bodyOne">
    
    <div class="head-logo">
      <div class='logo'>
        <img @click="openPhoto()" :src="data.data.value?.foto" alt="Foto de perfil do Personal Leandro Cesar.">
      </div>
    </div>
    <div v-if="photoOpen" class="nav-bar">
      <div class='logo-nav-bar'>
        <img @click="openPhoto" :src="data.data.value?.foto" alt="Foto de perfil do perfil do usuário.">
      </div>
    </div>
    <div class="head-name">
      <div class="name">
        Contratos
      </div>
    </div>


    <a class="whats"
      href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20">
      <Icon name="ic:outline-whatsapp" />
    </a>

    <div class="body-timeline">
      <div>

        <h3>Contratos em construção!</h3>
        
      </div>

    </div>
  </div>

</template>
<style scoped>
.head-logo {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
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
  z-index: 1004;
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
  z-index: 1004;
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
  background-color: #edf2f7;
  height: 40px;
  width: 40px;
  color: #718096;
  box-shadow: 1px 1px 15px #095D6250;
  transition: all 0.2s ease-in-out 0s;
  margin: 0rem 1.5rem;
  border-radius: 50%;
  cursor: pointer;
}

.whats:hover {
  background-color: #095D6210;
  color: #095D6280;
  box-shadow: 1px 1px 15px #095D6280;
}

.body-timeline {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  margin: 2rem 10px 120px 10px;
  color: var(--color-text);
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

}</style>