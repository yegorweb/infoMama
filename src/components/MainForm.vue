<!-- Форма создания всего -->
<template>	
	<v-container style="margin-top: 20px;">

		<!-- Кнопка назад -->
		<v-row @click="router.back()" align="center" :style="{gap: '6px', padding: '10px', cursor: 'pointer'}">
			<v-icon icon="mdi-arrow-left" />
			<div>Назад</div>
		</v-row>

		<!-- Заголовок -->
		<h2 style="margin-top: 24px">Тут вы можете создать что-нибудь</h2>

		<!-- Выпадающий список -->
		<v-select
			style="margin-top: 10px"
			label="Что вы хотите создать?"
			v-model="selected_item"
			:items="items"
			variant="solo"
		/>
		
		<v-btn :disabled="selected_item.length==0">Далее</v-btn>
	</v-container>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue-demi";

/** Выбранный вариант */
let selected_item = ref('')

/** Варианты для создания чего-либо */
let items = ['Пост', 'Статью', 'Учреждение']
</script>

<style lang="scss" scoped>

</style>