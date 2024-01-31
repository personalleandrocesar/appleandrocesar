<template>

  <div class="body-date">
    <span>
      03/01
    </span>
  </div>
  <div class="body">
      <div class='main-logo ' >
          <img src="~/assets/feedTwo.jpg" alt="Foto da logo do Personal Leandro Cesar.">
      </div>
        <div class="main-text">
            
            <p>
              Bora fazer uma avaliação?
            </p>
            <p>
                A avaliação física é importante pra ver como está sua composição
                corporal atual (percentual de gordura, massa magra).
                <br>
                <br>
                O ideal é fazer de 3 em 3 meses, para ver se você está
                progredindo nos treinos!
                <br>
                <br>
                Marque agora mesmo, clicando no botão abaixo!
                <br>
                <br>
            </p>
            <a href="https://cal.com/leandrocesar/personal" target="_blank">
                 Agendar <Icon name="ic:baseline-keyboard-arrow-right" />
            </a>
          <div>
      </div>
    </div>
        
  </div>
    
</template>
<style scoped>

.body-date{
  color: var(--color-text);
  text-align: left;
  margin: 2rem 2rem -30px 2rem;
  display: flex;
  justify-content: flex-end;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
}
span {
font-weight: bold;
}

.body{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  margin: 0rem 1.5rem -.5rem 1.5rem;
  border: #095D6220 2px solid;
  border-radius: 8px;
}

.main-logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  background-color: #edf2f7;
  height: 100px;
  color: #718096;
  box-shadow: 1px 7px 20px #095D62;
  margin: 3rem 0rem;
  border-radius: 7px;
}

.main-logo img {
  height: 100px;
  border-radius: 7px;
  border: #095D62 2px solid;
  opacity: 1;
  
}
.body p{
  text-align: left;
  margin: 0 10px 20px 20px;
  color: var(--color-text);
}

.main-text {
  display: flex;
  justify-content: flex-start;
  flex-direction: column;
  align-items: flex-start;
  flex-wrap: wrap;
}



a {
    transition: all .4s linear;
    border: solid 1px #095D6210;
    box-shadow: 0 0px 5px #095D6210;
    border-radius: 8px;
    cursor: pointer;
    width: 120px;
    text-align: center;
    color: var(--color-text);
    line-height: 4px;
    border-radius: 8px;
    font-weight: 600;
    transition: all 0.2s ease-in-out 0s;
    height: 34px;
    font-size: 16px;
    padding-inline: 8px;
    padding-top: 7px;
    padding-bottom: 8px;
    backdrop-filter: blur(15px);
    background-color: #ffffff90;
    margin: -2rem auto 1rem auto;
  }

  a .icon {
    margin-top: -1px;
    margin-left: -4px;
    transition: all 0.2s ease-in-out 0s;
    margin-right: -2px;
  }
  
  a:hover {
    background-color: #095D6210;
}
  a:hover .icon {
  transform:translateX(4px)
}

.nav:hover a {
    color: #095D6280;

}
</style>