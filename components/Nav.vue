<script>
export default {
  data() {
    return {
      navbarOpen: false // Inicialmente, a barra de navegação está fechada
    };
  },
  methods: {
    openNavbar() {
      this.navbarOpen = !this.navbarOpen; // Define navbarOpen como true para abrir a barra de navegação
    }
  }
};
</script>

<template>
    <div class='nav'>
        <div>
          
            <div>
            <a @click="openNavbar"><Icon name="heroicons:bars-3-bottom-left-20-solid" />
            </a>
            <span>
            {{ $route.name }}  

          </span>
          </div>
          
        </div>
        <nav v-if="navbarOpen" class="navbar">
      <!-- Conteúdo da barra de navegação -->
    </nav>
    </div>

</template>
<style scoped>


/* Estilos da barra de navegação (exemplo) */
.navbar {
    display: flex;
    flex-direction: column;
    height: 100%;
     background: #fff;

}

.nav
{
  height: 50px;
  position: sticky;
  top: -1px;
  background-color: var(--color-background);    
  z-index: 10;
  box-shadow: 0px .5px 5px #fadb4140;
}

span {
  margin: 10px 15px;
  text-transform: capitalize;
  font-weight: bold;
  color: var(--yellow);
  font-size: 1.3rem;
}

.nav
 div{
  display: flex;
  justify-content: flex-start;
  flex-direction: row;

}

.nav
 a{
  cursor: pointer;
  text-decoration: none;
  margin: 8px 0px 0 20px;
  font-size: 1.4em;
}

.nav a:hover {
  background-color: transparent;
  color: #fadb41;
}
.nav
 .svg-inline--fa {
  color: #aaa;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}

.nav
 .svg-inline--fa:hover {
  color: #fadb41;
  margin-top: 8px;
  display: flex;
  justify-content: flex-end;
}
</style>
