<script setup>
const route = useRoute()

const reg = route.params.id
const logon = useCookie('logon', { maxAge: 4800 })
logon.value = reg
// logon.value = reg + route.params.id.length + (Math.round(Math.random() * 1000)) 
console.log(logon.value);

console.log(reg);


</script>

<template>
  <div class="body-timeline">
      <img
        height="250"
        src="~/assets/personal.svg"
      />
      <p>No WebApp, a experiência será melhor:</p>
      <p>
        
        ✅ Controlando e efetuando os treinos;
        <br>
        ✅ Visualizando o histórico de treinos;
        <br>
        ✅ Vê e compara as avaliações físicas;
        <br>
        ✅ Visualiza outras notícias como está e promoções… 
        <br>
        <br>
        Alunos de personal e consultoria tem direitos à descontos em outros serviços (em breve + informações); 
        <br>
        <br>
        
        Dúvidas? Entre em contato comigo!! 
        <br>
        <br>
        
      </p>
      <p>
        BOM TREINO! 😉💪
        
      </p>
      <br>
      
      
      <p>
        
        Atenciosamente, 
        <br>
        Personal Leandro Cesar 
        <br>
        CREF1: 029260-G/RJ 
        <br>
      </p>
      <p>
        <a class="color-link" href="https://personal.leandrocesar.com" target="_blank">personal.leandrocesar.com</a>
      </p>
      
      <br>
      <br>
      <br>
      <br>
      <br>
    </div>
</template>

<style>

.body-timeline img{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-self: center;
  text-align: center;
  margin-top: 120px;
}

.body-timeline{
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: left;
  margin: 0 10px 20px 20px;
}

.phi{
  font-family: "Philosopher";
}
.color-link{
  color: #095D62;
  text-decoration: underline;
}




</style>