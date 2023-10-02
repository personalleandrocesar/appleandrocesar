<script setup>

const route = useRoute();

console.log(route.params.id);
</script>
<template>
    <div>
        Você está em: {{ $route.params.id }}
    </div>
</template>