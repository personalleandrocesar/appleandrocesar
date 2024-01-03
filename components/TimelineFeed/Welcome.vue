<template>

  <div class="body-date">
    <Icon name="material-symbols:event-rounded" />
    <span>
      01/01/2024
    </span>
  </div>
    <div class="body">
        <div class='main-logo ' >
            <img src="~/assets/logo.png" alt="Foto da logo do Personal Leandro Cesar.">
        </div>
        <div>
            
            <p>🎉 Feliz 2024!! 🍾</p>
            <p>
                
                Que este novo ano seja de muita saúde, foco, força e muito treino pesado pra você meu/minha querido(a) cliente/aluno(a)!!
                <br>
                <br>
                Estamos de visual novo! 🤩 
                <br>
                Mais clean e mais simples! 
                <br>
                Direto ao ponto! 💪
                <br>
                <br>
                Sobre o capô estou deixando os códigos mais automatizados e com menos bugs!

                <br>
                Em breve mais novidades e dicas!
                
                <br>
                <br>
                Dúvidas? Entre em contato comigo!! 
                <br>
                <br>
                
            </p>
            <p>
                BOM TREINO! 😉💪
                
            </p>
            
            <p>        
                Atenciosamente, 
                <br>
                Personal Leandro Cesar 
                <br>
                CREF1: 029260-G/RJ 
                <br>
            </p>
            <p>
                <a class="link" href="https://personal.leandrocesar.com" target="_blank">personal.leandrocesar.com</a>
            </p>
        </div>
        
    </div>
    
</template>
<style scoped>

.body-date{
  color: var(--color-text);
  text-align: left;
  margin: 2rem 1.5rem -30px 2rem;
  display: flex;
  justify-content: flex-start;
  flex-direction: row;
  align-items: flex-start;
  flex-wrap: wrap;
}
.body{
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  text-align: left;
  margin: 0rem 1.5rem 7rem 1.5rem;
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
  width: 100px;
  color: #718096;
  box-shadow: 1px 7px 20px #095D62;
  margin: 3rem 1.5rem;
  border-radius: 7px;
}

.main-logo img {
  height: 100px;
  width: 100px;
  border-radius: 7px;
  border: #095D62 2px solid;
  opacity: 1;

}
.body p{
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