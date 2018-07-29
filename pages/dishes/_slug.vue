<template>
  <article>
    <nuxt-link class="back" to="/menu">&larr; Menu</nuxt-link>

    <img :src="thumbnail && thumbnail.replace('static/', '')" alt="" class="featured-image">
    <h1 class="title">{{ title }}</h1>
    <p class="description">{{ description }}</p>
  </article>
</template>

<script>
  export default {
    async asyncData({ params })
    {
      let dish = await
      import('~/content/dishes/' + params.slug + '.json');
      return dish;
    }
  }
</script>

<style lang="scss" scoped>
  .featured-image {
    margin-top: 2rem;
    width: 100%;
  }

  .title {
    margin-top: 2rem;
    font-size: 25px;
  }

  .description {
    margin-top: 1rem;
  }

  .back {
    display: inline-block;
    border-bottom: 1px solid currentColor;
    padding-bottom: 5px;
    color: black;
    text-decoration: none;
    font-weight: bold;
  }
</style>
