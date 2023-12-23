<template>
  <div class="wrapper">
    <div class="container">
      <h1>Blog</h1>
      <p>エンジニアの日常生活をお届けします</p>
      <div v-for="blog in data" :key="blog.id" class="blogCard">
        <div class="textContainer">
          <h3>{{ blog.title }}</h3>
          <p>{{ blog.excerpt }}</p>
          <p>{{ blog.date  }}</p>
          <NuxtLink :to="blog._path">ReadMore</NuxtLink>
        </div>
        <div class="blogImg">
          <nuxt-img :src="blog.image" alt="blog-image" format="webp" />
        </div>
      </div>
      <Pagination :numberPages="numberPages" />
    </div>
  </div>
</template>

<script setup>
const blogPerPage = 5

const currentPage = Number(useRoute().params.pagination)

const { data } = await useAsyncData("blogQuery", () => {
  return queryContent("/blog").sort({ id: -1 }).limit(blogPerPage).skip((currentPage - 1) * blogPerPage).find()
})

const allBlogs = await queryContent("/blog").find()
const numberPages = Math.ceil(allBlogs.length / blogPerPage)

</script>
