<template>
  <section class="container">
    <div class="menu">
      <nuxt-link class="back" to="/">&larr; Back</nuxt-link>
      <h2 class="menu__title">Dishes that are sure to pickle your fancy:</h2>
    </div>
  </section>
</template>

<script>
</script>

<style lang="scss">
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

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
</style>

