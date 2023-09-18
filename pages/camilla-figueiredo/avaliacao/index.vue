<script setup>
const { data } = await useFetch('/api/camillaFigueiredo')
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
                    <Icon name='jam:medical' /> AVALIAÇÕES
                </h3>
                <nuxt-link class="square" to="/camilla-figueiredo/avaliacao/1">



                    <div>
                        <h4>
                            <Icon name='material-symbols:event' />
                        </h4>
                        <h4>
                            13/09/2023
                        </h4>
                    </div>

                    <div>
                        <h3>
                        </h3>

                        <h4>
                            <Icon name="fa6-solid:weight-scale" />
                        </h4>
                        <h4>
                               {{ data.avaliacao.massa }} kg
                            </h4>

                    </div>
                    <div>
                        <h3>
                        </h3>

                        <h4>
                            <Icon name="material-symbols:body-fat-rounded" />
                        </h4>
                        <h4>
                               {{ data.avaliacao.altura }} %
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
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    backdrop-filter: blur(5px);
    width: 100%;
    margin: 20px 10px;
    border-radius: 20px;
    border: 2px solid #44acb1;
    margin-top: 110px;
}

.main-div-one {
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
}

.main-div-two {
    overflow-x: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: left;
}

.main-div-two .icon {
    color: #095D62;
}

.square {
    color: #555;
    background-color: #095D6220;
    backdrop-filter: blur(5px);
    overflow-x: auto;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: 99%;
    margin: 5px auto;
    border-radius: 20px;
    border: .1px solid #05959c20;
    border-right: 6px solid #05959c80;
    line-height: 1.4;
    transition: all .4s;
}

.square:hover {
    background-color: #095D6230;
    border-right: 6px solid #05959c;

}

.square div:nth-child(1) {
    padding-right: 20px;

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
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.main-div-two a div {
    border-right: 2px solid #05959c20;
    margin-left: 15px;
    height: 100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.main-div-two h4 .icon {
    margin-left: 1px;
}

.main-div-two div .icon {
    margin-top: 0px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
}

.icon {
    zoom: 1.4;
    color: #fadb41;
}</style>