<template>
  <div class="logoAnimationNav">
    <div class="nav-bottom"> 
      <NuxtLink to="/">
        <Icon name="material-symbols:home" />
        <h5>INÍCIO</h5>
      </NuxtLink>
      <NuxtLink to="/servicos">
        <Icon name="material-symbols:person-play" />
          <h5>SERVIÇOS</h5> 
       </NuxtLink>
          <NuxtLink to="/blog">
            <Icon name="material-symbols:article" />
            <h5>BLOG</h5>
          </NuxtLink>
          <NuxtLink to="/sobre">
             <Icon name="material-symbols:person" />
            <h5>SOBRE</h5>
           </NuxtLink>
    </div>
  </div>
</template>

<style scoped>
h5 {
  margin: 9px 0 13px 0;
  font-size: .6em;
}
.svg-inline--fa{
  font-size: 1.1em;
}
.nav-bottom {
  position: fixed;
  bottom: .1px;
  width: 100%;
  background-color: var(--color-background);
  color: var(--color-text);
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  justify-content: space-around;
  align-self: center;
  line-height: 0;
  background-color: var(--color-background);    
  border-radius: 0% 0% 10% 10%;
  z-index: 10;
  box-shadow: 0px .5px 5px #fadb4140;
  z-index: 20;
}

.nav-bottom div {
  cursor: pointer;
}

.nav-bottom div h5 {
  margin: 0;
  padding:0;
  font-size: 1em;
}

.nav-bottom a {
  text-decoration: none;
  cursor: pointer;
  display: flex;
  flex-flow: column wrap;
  align-items: center;
  justify-content: center;
  align-self: center;
  color: var(--color-text);
  font-size: .9em;
  margin: 10px 0 0px 0;
}

.nav-bottom a:hover {
  text-shadow: 0px 0px .5px #ffffff10;
}

.nav-bottom a.router-link-exact-active {
  color: #fadb41;
}
</style>