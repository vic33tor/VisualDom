<template>
  <div class="text-center">
    <h1 class="text-xl font-bold mb-3">Nombre</h1>
    <p class="mb-6">{{ Nombre }}</p>
    <h1 class="text-xl font-bold mb-3">Sala</h1>
    <p class="mb-6">{{ Sala }}</p>
    <h1 class="text-xl font-bold mb-3">Tipo</h1>
    <p class="mb-6">{{ Tipo }}</p>
    <div v-if="Tipo == 'ejecutor'">
      <h1 class="text-xl font-bold mb-3">Estado</h1>
      <div v-if="Estado">
        <p class="mb-6">On</p>
      </div>
      <div v-else>
        <p class="mb-6">Off</p>
      </div>
    </div>
    <div v-else>
      <h1 class="text-xl font-bold mb-3">Temperatura</h1>
      <input
        v-model="temperatura"
        class="bg-[#F0EBCE] w-64 h-8 border-2 border-[#AA8B56]"
      /><br />
      <button
        class="w-24 h-8 bg-white border-2 border-black mt-6"
        @click="editarDispositivo(route.params.id, temperatura)"
      >
        Cambiar
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { onGet, editar } from "@/API/firebase";
import { useRoute } from "vue-router";
import { useRouter } from "vue-router";
const router = useRouter();
const route = useRoute();
const Nombre = ref("");
const Sala = ref("");
const Tipo = ref("");
const Estado = ref(false);
const Temperatura = ref("");
const temperatura = ref("");
onMounted(async () => {
  onGet("Dispositivo", (docs) => {
    docs.forEach((doc) => {
      if (doc.id == route.params.id) {
        Nombre.value = doc.data().Nombre;
        Sala.value = doc.data().Sala;
        Tipo.value = doc.data().Tipo;
        Tipo.value == "sensor"
          ? (Temperatura.value = doc.data().Temperatura)
          : (Estado.value = doc.data().Estado);
      }
    });
    Nombre.value == "" ? router.push({ name: "home" }) : "";
  });
});
const editarDispositivo = (idDispositivo, temp) => {
  editar("Dispositivo", idDispositivo, {
    Temperatura: temp,
  });
  temperatura.value = "";
};
</script>

<style lang="scss" scoped></style>
