<template>
  <v-row @click="router.back()" class="back-button">
    <v-icon icon="mdi-arrow-left"></v-icon>
    <div>{{ props.text }}</div>
  </v-row>
</template>

<script setup>
import { useRouter } from "vue-router";

let router = useRouter()
let props = defineProps({
  text: {
    type: String,
    required: false,
    default: 'Назад'
  }
})
</script>

<style lang="scss" scoped>
.back-button {
  display: flex;
  align-items: center;
  gap: '6px';
  padding: '10px'; 
  cursor: pointer;
}
</style>