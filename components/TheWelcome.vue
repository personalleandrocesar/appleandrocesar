<script setup>
import LCLogoTree from '../components/LCLogoTree.vue'
</script>


<template>
    <div id="login">
        <div>
            <div class='logo'>
                <LCLogoTree />
                <h1>app.leandrocesar.com</h1>
                <h3>Acesse sua conta</h3>
                <div>
                    <div>
                        <h4>Usuário</h4>
                        <input type="user" name="" id="usuario" placeholder="Digite seu usuário" autofocus v-model="user">
                        <br>
                        <h4>Senha</h4>
                        <input type="password" @keyup.enter="trigger" name="" id="senha" placeholder="Digite sua senha"
                            v-model="senha">
                        <br>
                        <div>
                            <input class='button-call' type="submit" value="ENTRAR" id="btn" @click="enterClicked"
                                ref="sendReply">
                            <a href="https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1%20professor!%20Esqueci%20o%20meu%20user%20e%20minha%20senha!"
                                target="_blank">
                                <h5>Esqueci minha senha</h5>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            user: '',
            senha: '',
        }
    },
    methods: {
        enterClicked() {
            if (this.user === 'admin' & this.senha === '1234') {
                this.$router.replace('/home')
            } if (this.user === 'camillafigueiredo' & this.senha === 'figueiredo@Ca') {
                this.$router.replace('/camilla-figueiredo')
            } if (this.user === 'juliobizzo@gmail.com' & this.senha === 'bizzo@julio') {
                this.$router.replace('/julio-bizzo')
            } if (this.user === 'amandagoncalves@gmail.com' & this.senha === 'goncalves@amanda') {
                this.$router.replace('/amanda-goncalves')
            } if (this.user === 'camilladimas@gmail.com' & this.senha === 'dimas@camilla') {
                this.$router.replace('/camilla-dimas')
            } if (this.user === 'rosanaassis@gmail.com' & this.senha === 'assis@rosana') {
                this.$router.replace('/rosana-assis')
            } if (this.user === 'isadorasantesso@gmail.com' & this.senha === 'santesso@isadora') {
                this.$router.replace('/isadora-santesso')
            } if (this.user === 'gustavorj@gmail.com' & this.senha === 'rj@gustavo') {
                this.$router.replace('/gustavo-rj')
            } if (this.user === 'haroldocabussu@gmail.com' & this.senha === 'cabussu@haroldo') {
                this.$router.replace('/haroldo-cabussu')
            } if (this.user === 'sergioluiz@gmail.com' & this.senha === 'luiz@sergio') {
                this.$router.replace('/sergio-luiz')
            } if (this.user === 'fabiocruz@gmail.com' & this.senha === 'cruz@fabio') {
                this.$router.replace('/fabio-cruz')
            } if (this.user === 'biabarcelos@gmail.com' & this.senha === 'barcelos@bia') {
                this.$router.replace('/bianca-barcelos')
            } if (this.user === 'lauriogarcia@gmail.com' & this.senha === 'garcia@laurio') {
                this.$router.replace('/laurio-garcia')
            } if (this.user === 'ygorpaixao@gmail.com' & this.senha === 'paixao@ygor') {
                this.$router.replace('/ygor-paixao')
            } if (this.user === 'root@gmail.com' & this.senha === '12345') {
                this.$router.replace('/home')
            } if (this.user === 'priscillamello@gmail.com' & this.senha === 'mello@priscilla') {
                this.$router.replace('/priscilla-mello')
            } if (this.user === 'karolaraujo@gmail.com' & this.senha === 'araujo@karol') {
                this.$router.replace('/karolline-araujo')
            } if (this.user === 'kiviatenorio@gmail.com' & this.senha === 'tenorio@kivia') {
                this.$router.replace('/kivia-tenorio')
            } if (this.user === 'joaocesar@gmail.com' & this.senha === 'cesar@joao') {
                this.$router.replace('/joao-cesar')
            } if (this.user === 'vivianemarques@gmail.com' & this.senha === 'marques@viviane') {
                this.$router.replace('/viviane-marques')
            } if (this.user === 'manuelaalbertino@gmail.com' & this.senha === 'albertino@manuela') {
                this.$router.replace('/manuela-albertino')
            } if (this.user === 'blendagruber@gmail.com' & this.senha === 'gruber@blenda') {
                this.$router.replace('/blenda-gruber')
            }




        },
        trigger() {
            this.$refs.sendReply.click()
        }
    },

    scrollToTop() {
        window.scrollTo(0, 0);
    },
    created() {
        console.log(`the component is now mounted.`)
    }
}
</script>
<style scoped>
#login {
    font-family: "Philosopher";
}



.logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin: 20px 0 0px 0;
}

.logo h1 {
    margin: 80px 0 0px 0;
    color: #fadb41;
}

.logo h5 {
    margin-top: 20px;
    text-align: center;
}

input {
    height: 2em;
    text-decoration: none;
    transition: all .4s linear;
    color: #777;
    text-indent: 0;
    background: #fff;
    width: 100%;
    border-radius: 8px 8px 8px 8px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    border: solid 2px #eee;
    padding-left: 20px;
}

input:focus {
    background-color: #fffde1;
    border-color: #fadb41;
}

input:hover {
    background-color: #fffde1;
}


body {
    font-family: 'Philosopher', sans-serif;
    color: var(--color-text);
    line-height: 1.6;
}

iframe {
    margin-left: 10px;
}

h1 {
    color: var(--color-text);
    transition: all .3s linear;
    cursor: pointer;
    font-size: 1.5em;
}

h3 {
    color: var(--color-text);
    transition: all .3s linear;
}

h4 {
    color: var(--color-text);
    transition: all .3s linear;
    margin: 0 0 0 10px;
}

h4:nth-child(1) {
    color: var(--color-text);
    transition: all .3s linear;
    margin: 20px 0 0 10px;
}

h1:hover {
    color: #fadb41;

}

a {
    text-decoration: none;
    color: var(--color-text);
    transition: all .4s linear;
}

a:hover {
    color: #fadb41;
}

svg a {
    text-decoration: none;
    color: var(--color-text);
    transition: all .4s linear;
}

svg a:hover {
    color: #fadb41;
}

i {
    color: var(--color-text);
    font-size: .9em;
    margin: auto;
}

code {
    font-size: 0.6em;
    margin-left: 15px;
    padding-left: 10px;
    border-left: solid 5px #eee;
    color: #888;
}

.divider {
    height: 15px;
    background-color: #dddddd54;
}


.button-call {
    margin: auto;
    transition: all .4s linear;
    background-color: var(--color-background);
    border: solid 1px #fadb4170;
    box-shadow: 0 0px 5px #fadb4170;
    border-radius: 8px;
    cursor: pointer;
    width: 50%;
    text-align: center;
    padding-left: 10.5%;
    color: var(--color-text);
}

.button-call:hover {
    background-color: #fadb4120;
}

style {
    background-color: black;
}


@media only screen and (max-width: 369px) {}</style>