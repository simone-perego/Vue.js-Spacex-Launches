<template>
  <div class="about container">
    <div class="title">
      <h1>LAUNCH DETAIL</h1>
    </div>
  </div>
</template>

<script>


export default {
    data(){
        return{
            id: this.$route.params.slug,
            launch: {}
        }
    },
    created(){
        this.id=this.$route.params.slug
    },
    name: 'launch',
    components: {
    }
}
</script>