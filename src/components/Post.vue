<script setup>
import { ref, useSlots } from "vue-demi";

let props = defineProps({
  post: {
    type: Object,
    required: true,
  },
  // Base see in @/fakeDB/posts.js
});

let current_time = new Date(Date.now());
let post_time = new Date(Date.parse(props.post.date));

function getPostDate() {
  let options = {
    month: "long",
    day: "numeric",
  };
  current_time.getFullYear() == post_time.getFullYear()
    ? null
    : (options.year = "numeric");

  return post_time.toLocaleString("ru", options);
}

let view_more = ref(false);
</script>

<template>
  <v-card style="height: 100%; position: relative">
    <v-card-item>
      <v-card-title>{{ props.post.title }}</v-card-title>
      <v-card-subtitle>{{ props.post.subtitle }}</v-card-subtitle>

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
      <!-- Time -->
      <div class="text-caption text-right">
        <div class="ml-3">{{ getPostDate() }}</div>
      </div>

      <!-- Description -->
      <div>
        {{
          props.post.description.length < 50 || view_more
            ? props.post.description
            : props.post.description.slice(0, 50) + "..."
        }}
      </div>
      <div class="d-flex justify-end">
        <v-icon
          :icon="
            view_more ? 'mdi-chevron-double-up' : 'mdi-chevron-double-down'
          "
          color="primary"
          style="cursor: pointer"
          v-if="props.post.description.length >= 50"
          @click="view_more = !view_more"
        />
      </div>

      <!-- Photos -->
      <v-carousel :show-arrows="false"  height="auto">
        <v-carousel-item
          v-for="url in props.post.photos"
          :key="url"
          :src="url"
        />
      </v-carousel>

      <!-- Promo indicator -->
      <div v-if="props.post.promo" class="text-caption text-right">реклама</div>
    </v-card-item>
  </v-card>
</template>

<style lang="scss" scoped>
// .view-more {
//   border-radius: 3px;
//   padding: 1px;

//   &:hover {
//     background: rgba($color: #000000, $alpha: 0.1);
//   }
// }

</style>