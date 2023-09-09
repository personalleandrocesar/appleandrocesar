<script setup>
const layout = "hello"
</script>

<template>
    <NuxtLayout :name="layout">
        <div>

            <div class="main-div-one">

                <div class="conf">
                    <Icon name="fluent:target-arrow-16-filled" />
                    <h3>
                        Definição
                    </h3>

                </div>
                <div class="conf">
                    <Icon name="mdi:calendar-weekend" />
                    <h3>
                        6 dias
                    </h3>

                </div>
                <div class="conf">
                    <Icon name="material-symbols:timer-rounded" />
                    <h3>
                        60 minutos
                    </h3>

                </div>


            </div>
            
            <div class="main-div-two">

                <h3>
                    <Icon name='material-symbols:cardiology' /> Cardio
                </h3>
            </div>
            <div class="main-div-two">
                <nuxt-link class="square" to="/camilla-figueiredo/treino/a">



                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-a' />
                        </h4>
                    </div>

                    <div>
                        <h3>
                        </h3>

                        <h4>
                            <Icon name="game-icons:leg" />
                        </h4>
                        <h4>
                            Quadríceps
                        </h4>

                    </div>
                </nuxt-link>
                <nuxt-link class="square" to="/camilla-figueiredo/treino/b">
                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-b' />
                        </h4>
                    </div>

                    <div>
                        <h3>
                        </h3>

                        <h4>
                            <Icon name="solar:body-shape-bold" />
                        </h4>
                        <h4>
                            Glúteo
                        </h4>

                    </div>
                </nuxt-link>

                <nuxt-link class="square" to="/camilla-figueiredo/treino/c">
                    <div>
                        <h4>
                            TREINO
                            <Icon name='mdi:alpha-c' />
                        </h4>
                    </div>

                    <div>
                        <h3>
                        </h3>

                        <h4>
                            <Icon name="mingcute:fitness-fill" />
                        </h4>
                        <h4>
                            Braço
                        </h4>

                    </div>
                </nuxt-link>

            </div>
            <br>
            <br>
            <br>
        </div>




    </NuxtLayout>
</template>

    



<style scoped>
body {
    background: #fff;
    color: #616161;

}

.main {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    justify-items: center;
}

.conf {
    color: #fff;
    height: 80px;
    background-color: #095D62;
    backdrop-filter: blur(15px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    backdrop-filter: blur(5px);
    width: 100%;
    margin: 20px 10px;
    border-radius: 20px;
    border: 2px solid #44acb1;
    margin-top: 110px;
}

.main-div-one {
overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    text-align: center;
}

.main-div-two:nth-child(2) {
overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-end;
    text-align: left;
}

.main-div-two {
    overflow-x: hidden;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: left;
}

.main-div-two .icon {
    color: #095D62;
}

.square {
    color: #555;
    background-color: #095D6210;
    backdrop-filter: blur(5px);
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    width: 32.5%;
    height: 300px;
    margin: 5px auto;
    border-radius: 20px;
    border: 2px solid #05959c20;
    overflow-x: hidden;
}

.square div:nth-child(1) {
    height: 60px;
}

.square div:nth-child(2),
.square div:nth-child(3) {
    margin: auto;
    border: none;
}

.main-div-two H3 {
    margin-left: 20px;

}

.main-div-two h4 {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-div-two h4:nth-child(1){
}

.main-div-two a div {
    border-bottom: 2px solid #05959c20;
    width: 90%;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-div-two h4 .icon {
    margin-left: -3px;
}

.main-div-two div .icon {
    margin-top: -1px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.icon {
    zoom: 1.4;
    color: #fadb41;
    margin-top: -2.5px;
}</style>