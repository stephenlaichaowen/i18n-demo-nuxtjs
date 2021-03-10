<template>
  <div class="home-page">
    <h1>{{ $t('homepage') }}</h1>
  </div>
</template>

<script>
export default {
  created() {
    this.$store.commit('showHomePage', true)
  },
}
</script>

<style scoped>
</style>
