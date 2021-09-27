<template>
<div class="flex row">
    <div v-for="launch in launchesPast" :key="launch.mission_name" class="card mb-4">
    <img class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ launch.mission_name }}</h5>
      <p class="card-text">
        la missione {{ launch.mission_name }}
        è iniziata {{ launch.launch_success }}
        alle {{ launch.launch_date_local }}
        dalla base di lancio {{ launch.launch_site.site_name_long }}
      </p>
      <a href="#" class="btn btn-primary">DETTAGLI</a>
    </div>
  </div>
</div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'HelloWorld',
  apollo:{
    launchesPast: gql`query{    
  launchesPast(limit: 10){
  mission_name
  launch_success
  launch_date_local
    launch_site {
      site_name_long
    }
            links {
      article_link
      video_link
      flickr_images
    }
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
  width: calc(100% / 4)
}
</style>
