<template>
  <h2 class="paginationWrapper">
    <NuxtLink v-for="(paginationLink, index) in paginationLinks" :to="paginationLink" :key="index">
      {{ index + 1 }}
    </NuxtLink>
  </h2>
</template>

<script setup>
const props = defineProps({
  numberPages: {
    type: Number,
    required: true
  }
})

const paginationLinks = [...Array(props.numberPages).keys()].map((index) => {
  return `/blog/page/${index + 1}`
})
</script>