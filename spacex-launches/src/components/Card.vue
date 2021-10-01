<template>
  <b-col>
    <b-card
      v-bind:title="launch.mission_name"
      v-bind:img-src="launch.links.flickr_images"
      img-height="300px"
    >
      <b-card-text>
        la missione {{ launch.mission_name }}
        è iniziata
        <span v-if="launch.launch_success">CON SUCCESSO</span>
        <span v-else>SENZA SUCCESSO</span>
        alle {{ launch.launch_date_local }} dalla base di lancio
        {{ launch.launch_site.site_name_long }}
      </b-card-text>

      <b-button type="button" class="btn">
        <router-link :to="{ name: 'Launch', params: { id: launch.id } }"
          >DETTAGLI</router-link
        >
      </b-button>
    </b-card>
  </b-col>
</template>

<script>
export default {
  name: "Card",
  props: {
    launch: {},
  },
};
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
  width: 18rem;
}
</style>

