<template>
<div class="modal fade show" id="myModal" style="display: block;">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h4 class="modal-title">{{ mission_name }}</h4>
                <button type="button" class="close" @click="$emit('close')" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true" >×</span>
                </button>
            </div>
            <div class="modal-body">
                <slot name="modal-text"></slot>
            </div>
            <div class="modal-footer">
                <slot name="modal-footer"></slot>
                <button type="button" class="btn btn-danger" @click="$emit('close')" data-dismiss="modal">Close</button>
            </div>
        </div>
    </div>
</div>
</template>

<script>
import gql from 'graphql-tag';

export default {
  name: 'LaunchDetail',
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
  methods: {
    showModal() {
      this.$refs['my-modal'].show()
    },
    hideModal() {
      this.$refs['my-modal'].hide()
    }
  }
}
</script>