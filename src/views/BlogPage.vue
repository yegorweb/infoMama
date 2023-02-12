<script setup>
import Post from "@/components/CreationForms/Post.vue";
import posts from "@/fakeDB/posts";
</script>

<template>
  <v-container>
    <v-row>
			<v-col v-for="post in posts" :key="post" cols="12" sm="6" md="4">
				<Post 
					:title="post.title"
					:subtitle="post.subtitle"
					:tags="post.tags"
					:date="post.date"
					:author="post.author"
					:promo="post.promo"
					:description="post.description"
					:photos="post.photos"
				/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
</style>