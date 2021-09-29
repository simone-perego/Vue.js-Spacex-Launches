<template>
  <div class="about container">
    <div class="title">
      <h1>LAUNCH DETAIL</h1>
      <p>id: {{ id }} </p>
      <p>id: {{ launch_year }} </p>
      <div v-for="launch in launch" :key="launch.id">
        <p>mission: {{ launch.id }}</p>
      </div>
    </div>
    <table class="table">
  <tbody>
  </tbody>
</table>
  </div>
</template>

<script>
import gql from 'graphql-tag';

export default {
    name: 'Launch',
    data(){
        return{
          launch: '',
          id: this.$route.params.id,
        }
    },
    apollo: {
      launch: gql`query Mylaunch($id : ID!) {   
        launch(id: $id){
          details
          launch_year
        }
      }`,
      variables: {
        id: '109',
      }
    }
  }
</script>