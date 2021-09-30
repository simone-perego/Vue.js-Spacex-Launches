<template>
  <div class="home container">
    <div class="title">
      <h1>SPACEX LAUNCHES</h1>
    </div>
    <div class="row">
      <Card v-for="launch in launchesPast" :key="launch.id" :launch="launch"/>
    </div>
  </div>
</template>

<script>
import gql from 'graphql-tag';

import Card from '../components/Card.vue'

export default {
  name: 'Home',
  components: {
    Card
  },
  apollo:{
  launchesPast: gql`
  query{ launchesPast(limit: 10){
  id
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
  }`,
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
  .btn {
    background-color: blue !important;
  }
</style>
