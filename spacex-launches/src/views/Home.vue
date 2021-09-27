<template>
  <div class="home container" style="text-align:center">
    <h3>SPACEX LAUNCHES</h3>
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
