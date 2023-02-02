<template>
  <v-row @click="router.back()" class="back-button">
    <v-icon icon="mdi-arrow-left"></v-icon>
    <div>{{ props.text }}</div>
  </v-row>
</template>

<script setup>
import router from "@/router"

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
  gap: 6px;
  cursor: pointer;
}
</style>
