<script setup>
useHead({
  titleTemplate: 'Home',
})
definePageMeta({
  layout: "home",
});
</script>

<template>
  <NuxtLayout :name="layout">
    <Admin/>
  </NuxtLayout>
</template>
