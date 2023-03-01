<script setup>
import { ref } from "vue-demi";
import users from '@/fakeDB/users'

let props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  // Base of post see in @/fakeDB/posts.js
});

let current_time = new Date(Date.now())
let post_time = new Date(props.post.date)
let delta = current_time - post_time

function getPostDate() {
  let options = {
    month: "long",
    day: "numeric",
  }

  if (current_time.getFullYear() != post_time.getFullYear()) {
    options.year = "numeric"
  }

  return post_time.toLocaleString("ru", options)
}

let user = users.find(user => user.id === props.post.author)
</script>

<template>
  <v-card class="h-100">
    <v-card-item>

      <div class="d-flex flex-row justify-start align-center cursor-pointer">
        <v-avatar :image="user.avatar" />
        
        <!-- FUTURE: заменить div на router-link -->
        <div class="ml-3">
          <div class="d-flex flex-row justify-start lh-1 align-center">
            <span class="font-weight-black">{{ user.firstName + ' ' + user.lastName }}</span>
            <span class="text-caption ml-2">{{ '@' + user.nickname }}</span>
          </div>
          <span class="text-caption lh-1">{{ getPostDate() }}</span>
        </div>
      </div>

      <!-- Tags -->
      <div class="mt-2 flex-wrap">
        <v-chip
          v-for="tag in props.post.tags"
          :key="tag"
          variant="outlined"
          class="mr-1"
          color="primary"
          size="x-small"
        >
          {{ tag }}
        </v-chip>
      </div>

      <!-- Description -->
      <div class="mt-4">
        {{ props.post.description }}
      </div>

      <!-- Photos -->
      <v-carousel class="mt-4" :show-arrows="false" height="auto">
        <v-carousel-item
          v-for="url in props.post.photos"
          :key="url"
          :src="url"
        />
      </v-carousel>

      <!-- Promo indicator -->
      <div v-if="props.post.promo" class="text-caption text-right">реклама</div>

      <!--<v-card-actions class="align-self-end">
        <v-btn>
          mdi-heart - активная иконка лайка
          <v-icon icon="mdi-heart-outline"></v-icon> 
        </v-btn>
      </v-card-actions> -->
    </v-card-item>
  </v-card>
</template>

<style lang="scss" scoped>
</style>
