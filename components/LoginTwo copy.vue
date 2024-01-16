<script setup>
import { ref } from 'vue';
const user = ref('')
const senha = ref('')

const client = await useFetch('http://191.101.70.209:3000/users')

console.log(client.data.value[0]);


const enterClicked = () => {
  if (user.value === client.data.value[user.value].usuario && senha.value === client.data.value[user.value].sennha) {
    return navigateTo(`/user/${client.data.value[user.value].usuario}`)
  } return navigateTo("/")

}

const trigger = () => {
  enterClicked()
}

const pop = useCookie('pop', { maxAge: 7889400 })
pop.value = pop.value

const popOk = () => {
  return pop.value = "ok"
}

const popView = () => {
  if (pop.value === 'ok') {
    return false
  } return true
}




const photoOpen = ref(false);
function openPhoto() {
  photoOpen.value = !photoOpen.value;
}


</script>
<template>
  <header>
    <div class="head-logo" id="sobre">
      <div class='logo'>
        <img @click="openPhoto()" src="~/assets/logo.png">
      </div>
    </div>
    <div class="head-name">
      <div class="name">
        app.leandrocesar.com
      </div>
      <h3>Área do cliente</h3>
    </div>
    <div class="inputs">
      <div>
        <h4>Usuário</h4>
        <input type="email" @keyup.enter="trigger" name="" id="usuario" placeholder="Digite seu usuário" autofocus
          v-model="user" required>
      </div>
      <div>
        <h4>Senha</h4>
        <input type="password" @keyup.enter="trigger" name="" id="senha" placeholder="Digite sua senha" v-model="senha">
      </div>
      <div>
        <NuxtLink class='login' @click="enterClicked">
          LOGIN
          <Icon name="solar:login-3-bold" />
        </NuxtLink>
      </div>
      <div class="lost">
        <a href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20professor!%20Esqueci%20o%20meu%20email%20e%20minha%20senha!"
          target="_blank">
          <h5>Esqueci minha senha</h5>
        </a>
      </div>
    </div>


  </header>
  <footer>

    <div v-if="popView()" class="pop-up">
      <p>
        Neste app, usamos cookies e outras tecnológicas semelhantes para melhorar sua
        experiência de navegação e facilitar certos tipos de vantagens de navegação. Ao clicar no botão abaixo, você está ciente e concordando com estas funcionalidades.
      </p>
      <div class="button-pop" @click="popOk()">PROSSEGUIR!</div>
    </div>
    <a class="whats"
      href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20Leandro%20Cesar,%20fiquei%20interessado(a)%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20">
      <Icon name="ic:outline-whatsapp" />
    </a>
  </footer>
</template>
<script>
export default {
  methods: {
    scrollToTop() {
      window.scrollTo(0, 0);
    }
  },
}

</script>

<style scoped>
.head-logo {
  display: flex;
  justify-content: center;
  flex-direction: row-reverse;
  align-items: center;
  z-index: 1;
  flex-wrap: wrap;
}

.logo {
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  background-color: #edf2f7;
  height: 100px;
  width: 100px;
  color: #718096;
  box-shadow: 0px 7px 20px #00dc82;
  margin: 6.5rem 0 1.5rem 0;
  border-radius: 8px;
  z-index: 10;
}

.logo img {
  height: 100px;
  width: 100px;
  border-radius: 8px;
  border: #00dc82 2px solid;
  z-index: 100;
  opacity: 1;

}


.button-client {
  margin: 2rem 1.5rem;
  transition: all .4s linear;
  border: solid 1px #095D6210;
  box-shadow: 0 0px 5px #095D6210;
  border-radius: 8px;
  cursor: pointer;
  width: 160px;
  text-align: center;
  color: #718096;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 8px;
  padding-bottom: 8px;
}

.button-client:hover {
  background-color: #095D6210;
  color: #095D6280;
}

.button-client .icon {
  margin-top: -5px;
  margin-right: 5px;
  color: #718096;
  transition: all 0.2s ease-in-out 0s;
}

.button-client:hover .icon {
  color: #095D6280;
}

.head-name {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
}

.head-name h3 {
  color: #718096;
}


.name {
  font-size: 1.6rem;
  line-height: 1.5rem;
  margin: .2rem 1.5rem;
  font-weight: 700;
  color: #095D62;
}


.whats {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  position: fixed;
  background-color: #edf2f7;
  height: 40px;
  width: 40px;
  color: #718096;
  box-shadow: 1px 1px 15px #095D6250;
  transition: all 0.2s ease-in-out 0s;
  bottom: 3.5rem;
  right: 1.5rem;
  border-radius: 50%;
  cursor: pointer;
  z-index: 100;
}

.whats:hover {
  background-color: #095D6210;
  color: #095D6280;
  box-shadow: 1px 1px 15px #095D6280;
  z-index: 100;
}

.inputs {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: center;
}

.inputs div {
  display: flex;
  justify-content: center;
  flex-direction: column;
  flex-wrap: wrap;
  align-items: flex-start;
}


input {
  margin: .5rem auto;
  transition: all .4s linear;
  border: solid 1px #095D6210;
  box-shadow: 0 0px 5px #095D6210;
  border-radius: 8px;
  text-align: left;
  color: #718096;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 8px;
  padding-bottom: 8px;

}

input::placeholder {
  color: #71809690;
}

.inputs div h4 {
  text-align: left;
}

input:focus {
  background-color: #095D6210;
  border-color: #095D6280;
  color: #718096;
}

input:focus-visible {
  background-color: #095D6210;
  border: solid 1px #095D62;
  color: #718096;
}

input:active {
  background-color: #095D6210;
  border-color: #095D6280;
  color: #718096;
}

input:hover {
  background-color: #095D6210;
}

h4 {
  color: #718096;
  transition: all .3s linear;
  margin: 0 0 0 10px;
  text-align: left;
}

h4:nth-child(1) {
  color: #718096;
  transition: all .3s linear;
  margin: 20px 0 0 10px;
}

a {
  text-decoration: none;
  color: #718096;
  transition: all .4s linear;
  margin-top: -5px;
}

a:hover {
  color: #095D62;
}

.login {
  transition: all .4s linear;
  border: solid 1px #095D6210;
  box-shadow: 0 0px 5px #095D6210;
  border-radius: 8px;
  cursor: pointer;
  width: 160px;
  text-align: center;
  color: #718096;
  line-height: 18px;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.2s ease-in-out 0s;
  height: 34px;
  font-size: 14px;
  padding-inline: 16px;
  padding-top: 7px;
  padding-bottom: 8px;
  margin: 1rem 1.5rem;
}

.login .icon {
  margin: -2px 0px 2px 4px;
  transition: transform .3s linear;
}

.login:hover {
  cursor: pointer;
  background-color: #095D6210;
  color: #095D6280;

  padding-inline: 16px;
  padding-top: 7px;
  padding-bottom: 8px;
  margin: 1rem 1.5rem;
}

.login:hover .icon {
  margin: -2px 0px 2px 4px;
  transform: translateX(6px);
}

.pop-up {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px 20px 20px 20px;
  background-color: #095D62;
  color: #fff;
  padding: 15px;
  border-radius: 8px;
  position: fixed;
  bottom: 10px;
  width: 80%;
  left: 50%;
  margin-left: -40%;
  font-weight: 900;
  border: solid 1px #095D6210;
  z-index: 10000;
}

.pop-up p {
  font-weight: 700;
  font-weight: 900;
  font-size: 13px;
}

.button-pop {
  margin: 7px auto 0 auto;
  transition: all .4s linear;
  border: solid 1px #095D62;
  box-shadow: 0 0px 5px #095D6210;
  border-radius: 8px;
  cursor: pointer;
  width: 50%;
  text-align: center;
  background-color: #095D62;
  color: #fff;
  border: solid 1px #fff;
}

.button-pop:hover {
  background-color: #fff;
  border: solid 1px #095D6210;
  color: #095D62;
}</style>