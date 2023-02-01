<!-- Форма создания всего -->
<template>	
	<v-container style="margin-top: 20px;">

		<BackButton />

		<!-- Заголовок -->
		<h2 style="margin-top: 24px">Тут вы можете создать что-нибудь</h2>

		<!-- Вкладки -->
		<v-tabs 
			v-model="number_of_tab" 
			show-arrows
		>
			<v-tab :value="1">Шаг 1</v-tab>
			<v-tab :value="2" :disabled="number_of_tab < 2">Шаг 2</v-tab>
		</v-tabs>

		<!-- Окна вкладок -->
		<v-window v-model="number_of_tab">
			<v-window-item :value="1">
				<v-select
					style="margin-top: 10px"
					label="Что вы хотите создать?"
					v-model="selected_item"
					:items="items"
				/>
			</v-window-item>
			<v-window-item :value="2">
				<div>sss</div>
			</v-window-item>
		</v-window>
		
		<!-- Навигация -->
		<v-btn 
			@click="number_of_tab++"
			:disabled="selected_item.length==0" variant="text"
		>Далее
		</v-btn>
		<v-btn 
			@click="number_of_tab--"
			v-if="number_of_tab > 1"
			variant="text"
		>
			Назад
		</v-btn>
	</v-container>
</template>

<script setup>
import router from "@/router";
import { ref } from "vue-demi";
import BackButton from "./BackButton.vue";

/** Выбранный вариант */
let selected_item = ref('')

/** Варианты для создания чего-либо */
let items = ['Пост', 'Статью', 'Учреждение']

let number_of_tab = ref(1)
</script>

<style lang="scss" scoped>

</style>