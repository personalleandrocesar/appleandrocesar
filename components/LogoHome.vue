<script setup>
useHead({
    titleTemplate: 'Home',
})
</script>
<template>
    <div>
        <h1>Welcome to the home</h1>
    </div>
</template>

<style scoped>
.logo {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    flex-wrap: wrap;
    margin-top: 1rem;
}


h1 {
    margin-top: 2.5rem;
    font-size: 1.6rem;
    color: #fadb41;
    text-shadow: 4px 4px 10px #095D62, -4px 4px 10px #095D62, 4px -4px 10px #095D62, -4px -4px 10px #095D62, 5px 5px 10px #095D62, -5px 5px 10px #095D62, 5px -5px 10px #095D62, -5px -5px 10px #095D62 ;
}

h3 {
    color: var(--color-text);
  transition: all .3s linear;
  cursor: pointer;
  margin:-15px 0 50px 0;
  text-align: center;
    font-size: 1rem;
}

h3:nth-child(2) {
  margin-top: -60px;
}

</style>