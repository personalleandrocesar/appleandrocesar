<template>
    <h2>
        Isadora Pecanha - Arquitetura
    </h2>
    <h5>
        Arquitetura e interiores
    </h5>
    <div class="services">
        <a href="https://isadorapecanha.com" target="_blank">
            <h5><Icon name="ph:link-bold" /> www.isadorapecanha.com</h5>
        </a>
        <br>
        <div>
            <h5><Icon name="material-symbols-light:design-services-sharp" /> Serviços</h5>
        </div>
        <div class='terapias'>
                <span>Projetos</span>
                <span>Consultoria</span>
        </div>
    </div>

        <NuxtLink to='https://api.whatsapp.com/send?phone=5521936184024%20&text=Ol%C3%A1,%20fiquei%20interessado(a)%20nos%20seus%20Servi%C3%A7os,%20me%20chamo%20' class="button-client">
            <Icon name="ic:outline-whatsapp"/>Marcar uma sessão
        </NuxtLink>

        <div class="local">
            <div>
                <h5><Icon name="ic:baseline-access-time-filled" /> Horário de funcionamento</h5>
                <p class='main-four-card'>
                    Segunda à sexta: 09:00 às 19:00
                </p>
            </div>
        
            <!-- <div>
                <h5><Icon name="mdi:map-marker-radius" /> Localização</h5>
            </div>
            <div class='main-four-card'>
                <p>
                    Rua da Conceição, 125 - sala: 1005 - Center Offices - Centro - Niterói -Rio de Janeiro - CEP: 24020-085
                </p>
            </div>
            <iframe class='body-map'
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3675.5096784506004!2d-43.12292232898354!3d-22.89456440314661!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9983b5d0974f89%3A0xd5dcb4494da04cac!2sDeep%20Acupuntura!5e0!3m2!1spt-BR!2sbr!4v1647055905172!5m2!1spt-BR!2sbr"
            style='border: solid 2px #d8d8d840;' margin="auto;" allowfullscreen="true" loading="lazy">
        </iframe> -->


        </div>
</template>

<style scoped>
.services {

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 1.5rem 1rem -2rem 0;
}

.local {

    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-direction: column;
    margin: 1.5rem 1.5rem 6.5rem 1.5rem;
}

.terapias span {
    margin: 3px 8px;
}

.terapias {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
    flex-direction: row;
    margin-bottom: 10px;
    font-weight: 900;
}

.button-client {
    margin-top: 2.5rem;
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    border-radius: 8px;
    cursor: pointer;
    width: 160px;
    text-align: center;
    color: var(--color-text);
    line-height: 14px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 30px;
    font-size: 12px;
    padding-inline: 9px;
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
    color: var(--color-text);
    transition: all 0.2s ease-in-out 0s;
}

.button-client:hover .icon {
    color: #095D6280;
}

.center {

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
}

i {
    color: #fff;
    font-size: .9em;
    margin: auto;
}


.main-four-card {
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    margin: 0 0 1rem 10px;
}

.main-four-card p {
    margin: 0 0 1rem 10px;
    font-size: .9em;
}

iframe {
    width: auto;
    height: 270px;
    margin: -1.3rem auto 1.5rem auto;
    border-radius: 8px;

}


@media only screen and (max-width: 369px) {}</style>
