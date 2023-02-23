<template>
  <div class="p-6">
    <h1 class="text-center text-3xl font-bold">
      {{ props.titulo }}
    </h1>
  </div>
</template>

<script setup>
const props = defineProps({
  titulo: String,
  imagen: String,
});
</script>

<style scoped></style>
