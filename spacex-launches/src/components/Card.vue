<template>
 <div class="col-sm-6 col-md-3">
  <div class="card">
    <img class="card-img-top" v-bind:src="launch.links.flickr_images" height="300">
    <div class="card-body">
      <h5 class="card-title">{{ launch.mission_name }}</h5>
        <p class="card-text">
        la missione {{ launch.mission_name }}
        è iniziata 
        <a v-if= launch.launch_success >CON SUCCESSO</a>
        <a v-else>SENZA SUCCESSO</a>
        <p>
        alle {{ launch.launch_date_local }}
        <p>
        dalla base di lancio {{ launch.launch_site.site_name_long }}
        </p>
      <button type="button" class="btn"><router-link :to="{name:'Launch', params: { id: launch.id }}">DETTAGLI</router-link></button>
    </div>
  </div>
 </div>
</template>

<script>

export default {
  name: "Card",
  props: {
    launch: {}
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
.card {
  margin-bottom: 30px;
}
</style>
