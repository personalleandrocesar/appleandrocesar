<script setup>
import { ref } from 'vue';
const route = useRoute()

function scrollToTop() {
    window.scrollTo(0, 0);
}

const dataConf = await useFetch(`/api/${route.params.id}`)

const state = useCookie('state')
state.value = state.value



const navA = ref(state.value === 1)
const navB = ref(state.value === 2)
const navC = ref(state.value === 3)
const navD = ref(state.value === 4)




</script>

<template>
    <div v-if="navA">
        <div class="nav-bottom">
            <NuxtLink :to="`/user/${route.params.id}`"  @click.native="scrollToTop()">
                <Icon name='mdi:home' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/treino`" @click.native="scrollToTop()">
                <Icon name='material-symbols:exercise' />
            </NuxtLink>
            <NuxtLink v-if="dataConf.data.value?.treinoA" :to="`/user/${route.params.id}/treino/a`"
                @click.native="scrollToTop()">
                <Icon name='mdi:alpha-a' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/avaliacao`" @click.native="scrollToTop()">
                    <Icon name='jam:medical' />
                </NuxtLink>
        </div>
    </div>

    <div v-else-if="navB">
        <div class="nav-bottom">
            <NuxtLink :to="`/user/${route.params.id}`"  @click.native="scrollToTop()">
                <Icon name='mdi:home' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/treino`" @click.native="scrollToTop()">
                <Icon name='material-symbols:exercise' />
            </NuxtLink>
            <NuxtLink v-if="dataConf.data.value?.treinoB" :to="`/user/${route.params.id}/treino/b`"
                @click.native="scrollToTop()">
                <Icon name='mdi:alpha-b' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/avaliacao`" @click.native="scrollToTop()">
                    <Icon name='jam:medical' />
                </NuxtLink>
        </div>
    </div>
    <div v-else-if="navC">
        <div class="nav-bottom">
            <NuxtLink :to="`/user/${route.params.id}`"  @click.native="scrollToTop()">
                <Icon name='mdi:home' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/treino`" @click.native="scrollToTop()">
                <Icon name='material-symbols:exercise' />
            </NuxtLink>
            <NuxtLink v-if="dataConf.data.value?.treinoC" :to="`/user/${route.params.id}/treino/c`"
                @click.native="scrollToTop()">
                <Icon name='mdi:alpha-c' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/avaliacao`" @click.native="scrollToTop()">
                    <Icon name='jam:medical' />
                </NuxtLink>
        </div>
    </div>
    <div v-else-if="navD">
        <div class="nav-bottom">
            <NuxtLink :to="`/user/${route.params.id}`"  @click.native="scrollToTop()">
                <Icon name='mdi:home' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/treino`" @click.native="scrollToTop()">
                <Icon name='material-symbols:exercise' />
            </NuxtLink>
            <NuxtLink v-if="dataConf.data.value?.treinoD" :to="`/user/${route.params.id}/treino/d`"
                @click.native="scrollToTop()">
                <Icon name='mdi:alpha-d' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/avaliacao`" @click.native="scrollToTop()">
                    <Icon name='jam:medical' />
                </NuxtLink>
        </div>
    </div>
    <div v-else>
        <div class="nav-bottom">
            <NuxtLink :to="`/user/${route.params.id}`"  @click.native="scrollToTop()">
                <Icon name='mdi:home' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/treino`" @click.native="scrollToTop()">
                <Icon name='material-symbols:exercise' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/cardio`" @click.native="scrollToTop()">
                <Icon name='material-symbols:cardiology' />
            </NuxtLink>
            <NuxtLink :to="`/user/${route.params.id}/avaliacao`" @click.native="scrollToTop()">
                <Icon name='jam:medical' />
            </NuxtLink>
        </div>
    </div>
</template>
<style scoped>
.name-user {
    color: #095D62;
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
    border-radius: 18px;
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
    z-index: 50;
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
    border-radius: 18px;
    margin: 10px 10px 30px 10px;
    border: solid 2px #095D62;
    background-color: #095D62;
    z-index: 3;

}

.div-img img {
    height: 46px;
    border-radius: 18px;
}

.nav-flow h2 {
    color: #095D62;
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
    z-index: 200;
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
    border-radius: 18px;
    margin: 10px 10px 30px 10px;
    border: solid 2px #095D62;
    background-color: #095D62;
    z-index: 100;

}

.div-img-full img {
    height: 180px;
    border-radius: 18px;
}

.nav-bottom {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    position: fixed;
    bottom: 10px;
    left: 18%;
    background-color: #edf2f7;
    border-bottom: solid .2px #095D6230;
    font-size: 12px;
    z-index: 100;
    border-radius: 20px;
    position: fixed;
    bottom: 10px;
    width: 244px;
    left: 50%;
    margin-left: -121px;
    box-shadow: 1px 1px 15px #095D6250;
}

.nav-bottom a {
    transition: all .3s linear;
    zoom: 1.1;
    padding: 15px 18px;
    border-radius: 18px;
    color: #095D6260;
}

.nav-bottom a:hover {
    border-radius: 18px;
    background-color: #095D6220;
}

.nav-bottom a.router-link-exact-active {
    padding: 15px;
    border-radius: 18px;
    color: #095D62;
    background-color: #05959c20;
}

.active {
    border-radius: 18px;
    padding: 15px;
    color: #095D62;
    background-color: #095D6220;
}

.active .icon {
    color: #095D62;
}
</style>
