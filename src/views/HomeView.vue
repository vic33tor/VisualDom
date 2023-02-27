<script setup>
import { ref } from "vue";
import { onGet } from "@/API/firebase";
import { useRouter } from "vue-router";
const router = useRouter();
const dispositivos = ref([]);
onGet("Dispositivo", (docs) => {
  dispositivos.value = [];
  docs.forEach((doc) => {
    dispositivos.value.push({ id: doc.id, ...doc.data() });
  });
});
const irDispositivo = (id) => {
  router.push({
    name: "dispositivo",
    params: { id: id },
  });
};
</script>

<template>
  <div class="flex justify-center">
    <ul>
      <li class="mt-2" v-for="(el, idx) in dispositivos" :key="idx">
        <div @click="irDispositivo(el.id)">{{ el.Nombre }} {{ el.Sala }}</div>
      </li>
    </ul>
  </div>
</template>
