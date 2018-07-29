<template>
  <div>
    <img src="~/assets/pickles.svg" class="logo">
    <h1 class="title">
      The Big Dill
    </h1>
    <h2 class="subtitle">
      A Tasty, Punny JAMStack demo
    </h2>
    <div class="links">
      <nuxt-link to="/menu" class="button--green">Peruse our Menu</nuxt-link>
    </div>
  </div>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  }
}
</script>

<style lang="scss" scoped>
.logo {
  max-width: 40%;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>

