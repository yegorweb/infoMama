<template>
	<div @click="router.back()">
		<v-icon icon="mdi-arrow-left"></v-icon>
		Назад
	</div>
	<div>Тут вы можете создать что-нибудь</div>

	<v-main>
		<v-container>
			
		</v-container>
	</v-main>
</template>

<script setup>
import router from "@/router";
</script>

<style lang="scss" scoped>
.form-container {
}
</style>