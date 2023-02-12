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
  <v-card 
    style="height: 100%; position: relative;" 
    :class="props.promo ? 'bg-lime-lighten-3': ''"
  >
    <v-card-item>
      <v-card-title>{{ props.title }}</v-card-title>
      <v-card-subtitle>{{ props.subtitle }}</v-card-subtitle>
      
      <v-row no-gutters class="mt-2 d-flex flex-wrap">
        <div v-for="tag in props.tags" :key="tag" class="topic mr-1">{{ tag }}</div>
      </v-row>

      <v-row no-gutters>
        <v-col>
          <v-icon icon="mdi-clock"></v-icon>
        </v-col>
        <v-col>{{ Date(props.date) }}</v-col>
      </v-row>

      <div class="mt-6">
        {{ props.description.length < 50 || view_more ? props.description : props.description.slice(0, 50)+'...' }}
      </div>
      <div 
        class="text-blue-grey-darken-3 view-more"
        style="cursor: pointer"
        v-if="props.description.length >= 50 && !view_more" @click="view_more = true"
      >
        Показать больше
      </div>

      <v-carousel
        hide-delimiters
        class="mt-6"
        height="300px"
      >
        <v-carousel-item v-for="url in props.photos" :key="url" :src="url" />
      </v-carousel>

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