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

    <div class="body-timeline">
      <div class="head-logo" id="sobre">
        <div class='logo-isa'>
            <img @click="openPhoto()" src="~/assets/isa-arquitetura.png" alt="Foto de perfil do Personal Leandro Cesar.">
        </div>
        <div class='logo-deep'>
              <img @click="openPhoto()" src="~/assets/MyLogoBold.jpg" alt="Foto de perfil do Personal Leandro Cesar.">
          </div>
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

.logo-deep {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: #edf2f7;
    height: 80px;
    width: 80px;
    color: #718096;
    box-shadow: 1px 7px 20px #ff1900;
    margin: 1.5rem;
    border-radius: 7px;
    z-index: 10;
}

.logo-deep img {
    height: 80px;
    width: 80px;
    border-radius: 7px;
    border: #860d0d 2px solid;
    z-index: 100;
    opacity: 1;

}
.logo-isa {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    background-color: #edf2f7;
    height: 80px;
    width: 80px;
    color: #718096;
    box-shadow: 1px 7px 20px #99bca6;
    margin: 1.5rem;
    border-radius: 7px;
    z-index: 10;
}

.logo-isa img {
    height: 80px;
    width: 80px;
    border-radius: 7px;
    border: #99bca6 2px solid;
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



.body-timeline{
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

.body-timeline p{
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

</style>