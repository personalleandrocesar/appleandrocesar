<script setup>
import { ref, computed } from 'vue'
const layout = "admin"
const route = useRoute()

const { data, error, refresh } = await useFetch(`/api/users`)
</script>

<template>
    <NuxtLayout :name="layout">
        <div class="div-one">
            {{ data }}
        </div>
    </NuxtLayout>
</template>

    



<style scoped>
.div-one {
  margin-top: 90px;
  width: 100%;

}
</style>