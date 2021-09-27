<template>
  <div class="home container">
    <h1>SPACEX LAUNCHES</h1>
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
