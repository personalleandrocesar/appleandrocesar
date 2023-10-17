<script setup>
import { ref } from 'vue';
const route = useRoute()
const { data, error, refresh } = await useFetch(`/api/${route.params.id}`)

const notification = ref(false)



</script>

<template>
          <NuxtLoadingIndicator color='repeating-linear-gradient(to right,#00dc82 0%,#34cdfe 50%,#fadb41 100%)'/> <!-- here -->
          <div>

            <div class="div-one">
              
            </div>
          </div>
      <slot />
</template>
<style scoped>
.div-one {
  position: fixed;
  top: 0;

  height: 80px;
  width: 100%;
  background-color: #095d62;

}
</style>
