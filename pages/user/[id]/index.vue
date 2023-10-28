<script setup>
const layout = "users"
const route = useRoute()

const local = route.params.id

const ck = useCookie(local)

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