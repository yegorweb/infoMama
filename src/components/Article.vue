<script setup>
import { ref } from "vue-demi";
import users from '@/fakeDB/users'

let props = defineProps({
  article: {
    type: Object,
    required: true,
  },
  // Base of post see in @/fakeDB/posts.js
});

let current_time = new Date(Date.now())
let post_time = new Date(props.article.date)
let delta = current_time - post_time
let days_ago = Math.floor(delta/1000/60/60/24)

function getPostDate() {
  let options = {
    month: "long",
    day: "numeric",
  }
  if (current_time.getFullYear() != post_time.getFullYear()) {
    options.year = "numeric"
  }

  if (delta <= 86400000) return 'сегодня'
  if (delta > 86400000 && delta <= 172800000) return 'вчера'
  if (delta > 172800000 && delta <= 2678400000) return days_ago + ' дн' + getEnding(days_ago) + ' назад'

  return post_time.toLocaleString("ru", options)
}
function getEnding(number) {
    let lastDigit = number % 10
    if (lastDigit >= 5 && lastDigit <= 9) return 'ей'
    if (lastDigit >= 2 && lastDigit <= 4) return 'я'
}

let user = users.find(user => user.id === props.article.author)
</script>

<template>
  <v-card class="h-100">
    <v-card-item>

      <div class="d-flex flex-row justify-start align-center">
        <v-avatar class="cursor-pointer" :image="user.avatar" />
        
        <!-- FUTURE: заменить div на router-link -->
        <div class="ml-3">
          <div class="d-flex flex-row justify-start lh-1 align-center cursor-pointer">
            <span class="font-weight-black">{{ user.firstName + ' ' + user.lastName }}</span>
            <span class="text-caption ml-2">{{ '@' + user.nickname }}</span>
          </div>
          <span class="text-caption lh-1">{{ getPostDate() }}</span>
        </div>
      </div>

      <div class="mt-2 font-weight-medium text-h6">{{ props.article.title }}</div>

      <!-- Tags -->
      <div class="flex-wrap">
        <v-chip
          v-for="tag in props.article.tags"
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
      <div v-html="props.article.text" class="mt-4"></div>

      <!-- Photos -->
      <v-carousel class="mt-4" :show-arrows="false" height="auto">
        <v-carousel-item
          v-for="url in props.article.photos"
          :key="url"
          :src="url"
        />
      </v-carousel>

      <!-- Promo indicator -->
      <div v-if="props.article.promo" class="text-caption text-right">реклама</div>

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
