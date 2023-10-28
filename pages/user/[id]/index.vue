<script setup>
const layout = "users"


</script>

<template>
    <NuxtLayout :name="layout">
        <TimeLine/>
        <NuxtPage />
    </NuxtLayout>
</template>

<style>
body {
    background: #fff;
    color: #616161;
}
</style>