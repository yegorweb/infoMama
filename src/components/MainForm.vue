<!-- Форма создания всего -->
<template>	
	<v-container style="margin-top: 24px;">

		<BackButton text="На предыдущую страницу" />

		<!-- Заголовок -->
		<h2 style="margin-top: 26px">Тут вы можете создать что-нибудь</h2>

		<!-- Вкладки шагов-->
		<v-tabs
      style="margin-top: 6px;"
			v-model="number_of_tab" 
			show-arrows
		>
			<v-tab :value="1">Шаг 1</v-tab>
			<v-tab :value="2" :disabled="last_tab_number < 2 && selected_item.length==0">Шаг 2</v-tab>
			<v-tab :value="3" :disabled="last_tab_number < 3">Шаг 3</v-tab>
		</v-tabs>

		<!-- Окна вкладок -->
		<v-window 
      style="padding: 16px 0 24px 0;"
      v-model="number_of_tab"
    >
			<!-- Шаг 1 -->
			<v-window-item :value="1">
				<v-select
					hide-details
					label="Что вы хотите создать?"
					v-model="selected_item"
					:items="items"
				/>
			</v-window-item>

			<!-- Шаг 2 -->
			<v-window-item :value="2">
				<PostCreation v-if="selected_item=='Пост'" />
				<ArticleCreation v-if="selected_item=='Статью'" />
				<InstitutionCreation v-if="selected_item=='Учреждение'" />
				<ShopCreation v-if="selected_item=='Магазин'" />
			</v-window-item>
			
			<!-- Шаг 3 -->
			<v-window-item :value="3">
				<div>step 3</div>
			</v-window-item>

		</v-window>
		
		<!-- Навигация по шагам -->
		<v-btn
      color="accent"
			@click="number_of_tab < max_amount_of_tabs ? number_of_tab++ : null /* FUTURE: submit() */;
							last_tab_number = number_of_tab"
			:disabled="selected_item.length==0" 
		>
			Далее
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
import PostCreation from "@/components/CreationForms/PostCreation.vue"
import ArticleCreation from "@/components/CreationForms/ArticleCreation.vue"
import InstitutionCreation from "./CreationForms/InstitutionCreation.vue";
import ShopCreation from "./CreationForms/ShopCreation.vue";

/** Выбранный вариант */
let selected_item = ref('')

/** Варианты для создания чего-либо */
let items = ['Пост', 'Статью', 'Учреждение', 'Магазин']

/** Номер текущего шага */
let number_of_tab = ref(1)

/** Номер последнего шага (должен обновляться, если один из предыдущих шагов изменен) */
let last_tab_number = ref(1)

/** Максимальное количество шагов */
let max_amount_of_tabs = 3

// ==== Посты ====
let post_title = ref('')
let post_text = ref('')
let post_images  // FUTURE: допилить

// ==== Статьи ====
let article_title = ref('')
let article_topics = ref([])
let article_text = ref('')

// ==== Учреждения ====
let institution_type = ref('')
let institution_name = ref('')
</script>

<style lang="scss" scoped>

</style>
