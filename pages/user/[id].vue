<script setup lang="ts">
const route = useRoute()
const { data } = await useFetch(`/api.nuxtjs.dev/mountains/${route.params.slug}`)

</script>
<template>
  <div>
    <h1>{{ $route.params.id }}</h1>
    <NuxtLink @click="$router.push(`/user/${(Math.random() * 100).toFixed()}`)">Ramdom</NuxtLink>
    <br>
  <NuxtLink :to="`/user/${nome}/treino`">Fixo</NuxtLink>
    </div>
</template>