<template>
  <div class="home container">
    <div class="title">
      <h1>SPACEX LAUNCHES</h1>
    </div>
    <Cards />
  </div>
</template>

<script>
// @ is an alias to /src
import Cards from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Cards
  }
}
</script>

<style>
  .title{
    margin: 20px
  }
</style>
