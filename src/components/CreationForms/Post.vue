<script setup>
import { ref, useSlots } from "vue-demi"

let props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    required: true
  },
  tags: {
    type: Array,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  author: {
    type: String,
    required: true
  },
  promo: {
    type: Boolean,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  photos: {
    type: Array,
    required: true
  },
})

let current_time = new Date(Date.now())
let post_time = new Date(Date.parse(props.date))

function getPostDate() {
  let options = {
    month: 'long',
    day: 'numeric',
  }
  current_time.getFullYear() == post_time.getFullYear() ? null : options.year = 'numeric'

  return post_time.toLocaleString('ru', options)
}

let view_more = ref(false)
</script>

<template>
  <v-card style="height: 100%; position: relative;">
    <v-card-item>
      <v-card-title>{{ props.title }}</v-card-title>
      <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
      
      <!-- Time -->
      <div class="d-flex mt-2">
        <v-icon icon="mdi-clock-outline"></v-icon>
        <div class="ml-3">{{ getPostDate() }}</div>
      </div>

      <!-- Tags -->
      <v-row no-gutters class="mt-3 d-flex flex-wrap">
        <div v-for="tag in props.tags" :key="tag" class="topic mr-1">{{ tag }}</div>
      </v-row>

      <!-- Description -->
      <div class="mt-6">
        {{ props.description.length < 50 || view_more ? props.description : props.description.slice(0, 50)+'...' }}
      </div>
      <div 
        class="text-blue-grey-darken-3 view-more"
        style="cursor: pointer"
        v-if="props.description.length >= 50" @click="view_more = !view_more"
      >
        {{ view_more ? 'Скрыть' : 'Показать больше' }}
      </div>

      <!-- Photos -->
      <v-carousel
        hide-delimiters
        class="mt-6 pb-4"
        height="auto"
      >
        <template v-slot:prev="{ props }">
          <v-icon class="pa-4" color="cyan-lighten-4" icon="mdi-arrow-left" @click="props.onClick()"></v-icon>
        </template>

        <v-carousel-item v-for="url in props.photos" :key="url" :src="url" />

        <template v-slot:next="{ props }">
          <v-icon class="pa-4" color="cyan-lighten-4" icon="mdi-arrow-right" @click="props.onClick()"></v-icon>
        </template>
      </v-carousel>

      <!-- Promo indicator -->
      <div v-if="props.promo" class="ads">реклама</div>
    </v-card-item>
  </v-card>
</template>

<style lang="scss" scoped>
.topic {
  padding: 3px 10px;
  font-size: 14px;
  border: 1px solid rgb(var(--v-theme-accent));
  border-radius: 99px;
}
// .view-more {
//   border-radius: 3px;
//   padding: 1px;

//   &:hover {
//     background: rgba($color: #000000, $alpha: 0.1);
//   }
// }
.ads {
  position: absolute;
  bottom: 2px;
  right: 14px;
  color: rgba($color: #000000, $alpha: 0.4);
}
</style>