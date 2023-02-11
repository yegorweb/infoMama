<script setup>
import { ref } from "vue-demi"

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

let view_more = ref(false)
</script>

<template>
  <v-card>
    <v-card-item>
      <v-card-title>{{ props.title }}</v-card-title>
      <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
      
      <v-row no-gutters class="mt-2">
        <div v-for="tag in props.tags" :key="tag" class="topic">{{ tag }}</div>
      </v-row>

      <div class="mt-6">
        {{ props.description.length < 50 || view_more ? props.description : props.description.slice(0, 50)+'...' }}
      </div>
      <div 
        class="p-1 text-secondary"
        style="cursor: pointer" 
        v-if="props.description.length >= 50 && !view_more" @click="view_more = true"
      >
        Показать больше
      </div>

      <v-carousel hide-delimiters>
        <v-carousel-item v-for="url in props.photos" :key="url" :src="url" />
      </v-carousel>
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
</style>