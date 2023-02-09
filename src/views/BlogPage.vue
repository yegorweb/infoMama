<script setup>
import posts from '@/fakeDB/posts';
</script>

<template>
	<v-container>
		<v-row>
			<v-col 
				v-for="post in posts" 
				:key="post"
				lg="6"
			>
				<v-card 
					:title="post.title"
					:text="post.description"
				>
					<v-carousel>
						<v-carousel-item 
							v-for="url in post.photos" 
							:key="url"
							:src="url"
						/>
					</v-carousel>
				</v-card>
			</v-col>
		</v-row>
	</v-container>
</template>

<style lang="scss" scoped>

</style>