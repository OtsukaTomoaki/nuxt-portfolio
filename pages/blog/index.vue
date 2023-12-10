<template>
  <div>
    <div>
      <h1>Blog</h1>
      <p>エンジニアの日常生活をお届けします</p>
      <div v-for="blog in data" :key="blog.id">
        <div>
          <h3>{{ blog.title }}</h3>
          <p>{{ blog.excerpt }}</p>
          <p>{{ blog.date  }}</p>
          <NuxtLink :to="blog._path">ReadMore</NuxtLink>
        </div>
        <div>
          <nuxt-img :src="blog.image" alt="blog-image" format="webp" />
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const { data } = await useAsyncData("blogQuery", () => {
  return queryContent("/blog").sort({ id: -1 }).find()
})

</script>
