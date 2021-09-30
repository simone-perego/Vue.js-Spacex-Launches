<template>
  <div class="about container">
    <div class="title">
      <h1>LAUNCH DETAIL</h1>
      <h2>{{ launch.mission_name }}</h2>
    </div>
    <div class="detail">
      <div v-if="launch">
        <table class="table">
          <thead>
          <tr>
          <th scope="col">NAME</th>
          <th scope="col">MODEL</th>
          <th scope="col">WEIGHT</th>
          <th scope="col">YEAR BUILT</th>
          </tr>
        </thead> 
        <tbody>  
        <tr v-for="ship in launch.ships" :key="ship.name">
          <td>{{ ship.name }}</td>
          <td>{{ ship.model }}</td>
          <td>{{ ship.weight_kg }}</td>
          <td>{{ ship.year_built }}</td>
        </tr>
        </tbody>
        </table>
      </div>
    </div> 
  </div>
</template>

<script>

import gql from 'graphql-tag';

export default {
    name: 'Launch',
    data(){
        return{
          launch: null,
          id: this.$route.params.id,
        }
    },
    apollo: {
      launch: {
        query: gql`
        query Mylaunch($id : ID!) {   
        launch(id: $id){
          mission_name
          ships {
            weight_kg
            year_built
            name
            model
            }
          }
        }`,
        variables() {
          return {
            id:  this.$route.params.id
          }
        }
      }
    }
  }
</script>