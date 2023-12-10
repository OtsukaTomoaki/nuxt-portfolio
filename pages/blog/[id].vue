<template>
  <div>
    <div>
      <nuxt-img :src="data.image" alt="blog-image" format="webp" />
    </div>
    <div>
      <div>
        <h1>{{ data.title }}</h1>
        <p>{{ data.date }}</p>
        <ContentDoc />
      </div>
    </div>
  </div>
</template>

<script setup>
const path = useRoute().path
const { data } = await useAsyncData(path, () => {
  return queryContent(path).findOne()
})

</script>