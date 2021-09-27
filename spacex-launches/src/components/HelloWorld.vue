<template>
<div class="flex row">
  <div v-for="ship in ships" :key="ship.name">
      {{ ship.name }}
  </div>
</div>
</template>

<script>
import gql from 'graphql-tag';
export default {
  name: 'HelloWorld',
  apollo:{
    ships: gql`
      query {
      ships {
        name
        homeport
        image
        }
      }`
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.card{
  width: calc(100% / 5)
}
</style>
