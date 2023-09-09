<script setup>
import { ref } from 'vue';

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

    <div>

        <div class="nav-bottom">
                        <nuxt-link to="/camilla-figueiredo/treino">
                    <Icon name='material-symbols:exercise' />
                </nuxt-link>
            <nuxt-link to="/camilla-figueiredo/treino/a">
                <Icon name='mdi:alpha-a' />
            </nuxt-link>
            <nuxt-link to="/camilla-figueiredo/treino/b">
                <Icon name='mdi:alpha-b' />
            </nuxt-link>
            <nuxt-link to="/camilla-figueiredo/treino/c">
                <Icon name='mdi:alpha-c' />
            </nuxt-link>
            <nuxt-link to="/camilla-figueiredo/cardio">
                <Icon name='material-symbols:cardiology' />
            </nuxt-link>

        </div>

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
    color: #ffffff90;
    margin: 10px 15px 30px 10px;
}

.button .icon {
    cursor: pointer;
    zoom: 1.4;
    position: fixed;
    right: 12px;
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
    margin: 0 30px 0 0;
}

.div-img {
    height: 50px;
    width: 50px;
    border-radius: 50%;
    margin: 10px 10px 30px 10px;
    border: solid 2px #fadb41;
    background-color: #fadb41;
    z-index: 3;

}

.div-img img {
    height: 46px;
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
    margin: 10px 10px 30px 10px;
    border: solid 2px #fadb41;
    background-color: #fadb41;
    z-index: 3;

}

.div-img-full img {
    height: 180px;
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
    z-index: 800;
    border-radius: 30px;
     position: fixed;
  bottom:10px;
  width: 305px;
  left:50%;
  margin-left: -152.5px;
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
    padding: 15px;
    border-radius: 30px;
    color: #e1a918;
    background-color: #fadb4150;
}</style>
