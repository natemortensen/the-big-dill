<template>
  <div class="menu">
    <nuxt-link class="back" to="/">&larr; Back</nuxt-link>

    <h1 class="title">Our Menu</h1>
    <h2 class="subtitle">Dishes that are sure to pickle your fancy:</h2>

    <ul class="dishes">
      <li v-for="dish in dishes" :key="dish.title" class="dish">
        <h3 class="dish__title">
          <nuxt-link :to="'dishes' + dish._path">{{ dish.title }}</nuxt-link>
        </h3>

        <p class="dish__description">{{dish.description}}</p>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      // Using webpacks context to gather all files from a folder
      const context = require.context('~/content/dishes/', false, /\.json$/);
      const dishes = context.keys().map(key => ({
        ...context(key),
        _path: `/${key.replace('.json', '').replace('./', '')}`
    }));
      return { dishes };
    }
  };
</script>

<style lang="scss" scoped>

.menu {
  position: relative;
  display: block;
  text-align: left;
  background: antiquewhite;
  width: 80%;
  min-height: 50vh;
  padding: 2rem;
}

.back {
  position: absolute;
  top: 0;
  left: 0;
  transform: translateY(-115%);
  display: inline-block;
  border-bottom: 1px solid currentColor;
  padding-bottom: 5px;
  color: black;
  text-decoration: none;
  font-weight: bold;
}

.title {
  font-size: 40px;
}

.subtitle {
  margin-top: 1rem;
}

.dishes {
  margin-top: 5rem;
  list-style: none;
}

.dish {

  padding: 0 1rem;
  border-bottom: 1px solid lightgray;

  &__title {
    font-size: 20px;

    > a {
      color: #000;
    }
  }

  &__description {
    padding: 1rem 0;
  }
}
</style>

