<template>
  <div class="home container">
    <div class="title">
      <h1>SPACEX LAUNCHES</h1>
    </div>
    <div class="row">
      <div v-for="launch in launchesPast" :key="launch.mission_name" class="col-sm-6 col-md-3">
        <div class="card">
          <img class="card-img-top" v-bind:src="launch.links.flickr_images" height="300">
        <div class="card-body">
      <h5 class="card-title">{{ launch.mission_name }}</h5>
      <p class="card-text">
        la missione {{ launch.mission_name }}
        è iniziata {{ launch.launch_success }}
        alle {{ launch.launch_date_local }}
        dalla base di lancio {{ launch.launch_site.site_name_long }}
      </p>
      <button type="button" class="btn"><router-link to="/launch">DETTAGLI</router-link></button>
      </div>
    </div>
  </div>
</div>
  </div>
</template>

<script>
// @ is an alias to /src

import gql from 'graphql-tag';

export default {
  name: 'Home',
  components: {
  },
  apollo:{
    launchesPast: gql`query{    
  launchesPast(limit: 10){
  mission_name
  id
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
  }
}
</script>

<style>
  .title{
    margin: 20px
  }
  .card {
    margin-bottom:30px
  }
</style>
