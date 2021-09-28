<template>
<div class="row">
  <div v-for="launch in launchesPast" :key="launch.mission_name" class="col-sm-6 col-md-3">
    <div class="card">
    <img class="card-img-top">
    <div class="card-body">
      <h5 class="card-title">{{ launch.mission_name }}</h5>
      <p class="card-text">
        la missione {{ launch.mission_name }}
        è iniziata {{ launch.launch_success }}
        alle {{ launch.launch_date_local }}
        dalla base di lancio {{ launch.launch_site.site_name_long }}
      </p>
      
      <button @click="showModal = true">Show Modal</button>
        <Modal
      v-show="isModalVisible"
      @close="closeModal">
        </Modal>
      
    </div>
    </div>
  </div>
</div>
</template>

<script>
import gql from 'graphql-tag';

import Modal from './components/LaunchDetail.vue';

export default {
  name: 'HelloWorld',
  components: {
      Modal,
  },
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
  },
  data() {
      return {
        isModalVisible: false,
      };
    },
    methods: {
      showModal() {
        this.isModalVisible = true;
      },
      closeModal() {
        this.isModalVisible = false;
      }
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
  margin-bottom:30px
}
</style>
