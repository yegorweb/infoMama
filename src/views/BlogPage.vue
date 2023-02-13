<script setup>
import Post from "@/components/Post.vue";
import posts from "@/fakeDB/posts";
</script>

<template>
  <v-container>
    <v-row>
			<v-col v-for="post in posts" :key="post" cols="12" sm="6" md="4">
				<Post 
					:post="post"
				/>
      </v-col>
    </v-row>
  </v-container>
</template>

<style lang="scss" scoped>
</style>