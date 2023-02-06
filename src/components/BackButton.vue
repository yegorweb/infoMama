<!-- Кнопка назад -->

<template>
    <v-row @click="router.back()" class="back-button">
			<v-icon icon="mdi-arrow-left" />
			<div>Назад</div>
		</v-row>
</template>

<script setup>
import router from '@/router'
</script>

<style lang="scss" scoped>
.back-button {
  display: flex;
  align-items: center;
  gap: '6px';
  padding: '10px'; 
  cursor: 'pointer';
}
</style>