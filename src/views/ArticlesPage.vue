<script setup>
import BackButton from "../components/BackButton.vue";
import Article from "@/components/Article.vue";
import articles from "@/fakeDB/articles";
</script>

<template>
  <v-container>
    <BackButton text="назад" />
    <v-row>
			<v-col v-for="article in articles" :key="article" cols="12" sm="6" md="4">
				<Article 
					:article="article"
				/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
</style>