<script setup>
import { ref } from "vue-demi";
import users from '@/fakeDB/users'

let props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  // Base see in @/fakeDB/posts.js
});

let current_time = Date.now();
let post_time = props.post.date;
let delta = current_time - post_time

function getPostDate() {
  let options = {
    month: "long",
    day: "numeric",
  }

  if ((new Date(current_time)).getFullYear() != (new Date(post_time)).getFullYear()) {
    options.year = "numeric"
  }

  return (new Date(post_time)).toLocaleString("ru", options)
}

let user = users.find(user => user.id === props.post.author)

let view_more = ref(false)
</script>

<template>
  <v-card class="h-100">
    <v-card-item>

      <div class="mb-3 d-flex align-center cursor-pointer">
        <v-avatar :image="user.avatar" />
        
        <!-- FUTURE: заменить div на router-link -->
        <div class="ml-3">
          <span class="font-weight-black">{{ user.firstName + ' ' + user.lastName }}</span>
          <span class="text-caption ml-2">{{ '@' + user.nickname }}</span>
          <span class="text-caption ml-2">*</span>
          <span class="text-caption ml-2">{{ getPostDate() }}</span>
        </div>
      </div>

      <!-- Tags -->
      <div class="mt-1 flex-wrap">
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
      <Transition name="slide-fade">
        <div v-if="view_more">
          {{ props.post.description }}
        </div>
      </Transition>
      <Transition name="slide-fade">
        <div v-if="!view_more">
          {{
            props.post.description.length > 50
              ? props.post.description.slice(0, 50) + "..."
              : props.post.description
          }}
        </div>
      </Transition>
      <div class="d-flex justify-end">
        <v-icon
          :icon="
            view_more ? 'mdi-chevron-double-up' : 'mdi-chevron-double-down'
          "
          class="w-100 pt-1 pb-1 justify-end"
          color="primary"
          style="cursor: pointer"
          v-if="props.post.description.length >= 50"
          @click="view_more = !view_more"
        />
      </div>

      <!-- Photos -->
      <v-carousel :class="view_more ? '' : 'mt-4'" :show-arrows="false" height="auto">
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
