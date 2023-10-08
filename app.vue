<script setup>

useHead({
  titleTemplate: 'App Leandro Cesar',  
})

const counter = useCookie('counter')
counter.value = counter.value || Math.round(Math.random() * 1000)

const ste =  useState( 'se', () => 2)


console.log(counter.value);
console.log(ste.value);

</script>

<template>
          <NuxtLoadingIndicator color='repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#fadb41 100%)'/> <!-- here -->
          <NuxtPage />
</template>

<style scoped>

.count {
  position: fixed;
  top: 20px;
  left: 100px;
  color: #fadb41;
  font-weight: 800;
  z-index: 100000;
}
.logo {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  flex-wrap: wrap;
  margin-top: 2rem;
}


h1 {
  margin-top: -4rem;
  font-size: 1.8rem;
}

h3 {
  color: var(--color-text);
  margin-top: -2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin: 2rem 0;
}

nav a {
  color: var(--color-text);
  font-weight: bold;
  font-size: .9rem;
}

nav a.router-link-exact-active {
  color: #fadb41;
}

nav a.router-link-exact-active:hover {
  background-color: #fadb4180;
  color: var(--color-text);
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}
</style>