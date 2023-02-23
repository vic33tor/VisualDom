<script setup>
import { ref } from "vue";
import { onGetDispositivos } from "@/API/firebase";
const dispositivos = ref([]);
onGetDispositivos("Dispositivo", (docs) => {
  dispositivos.value = [];
  docs.forEach((doc) => {
    dispositivos.value.push({ id: doc.id, ...doc.data() });
  });
});
</script>

<template>
  <div>
    <ul>
      <li v-for="(el, idx) in dispositivos" :key="idx">
        {{ el.Nombre }} {{ el.Sala }}
      </li>
    </ul>
  </div>
</template>
