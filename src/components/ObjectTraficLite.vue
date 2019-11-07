<template>
  <custom-widget
    :model="model"
    :data="data"
    :labels="labels"
    :label="label"
    :interval="interval"
  >
  </custom-widget>
</template>

<script>
  import makeApi from '../api/index'
  import  CustomWidget from './CustomObjectTraficLite'
  export default {
    name: 'ObjectTraficLite' ,
    components: {
      CustomWidget
    },
    data(){
      return {
        data: [],
        labels: []
      }
    },
    props:{
      model: {
        type: String,
        default: null
      },
      label: {
        type: String,
        default: 'object'
      },
      interval: {
        type: String,
        default: 'week'
      }
    },
    created(){
      this.api = makeApi({
        baseUrl: this.$otBaseUrl,
        headers: this.$otHeaders
      })
    },
    mounted() {
      this.api.get(`lot/${this.model}?interval=${this.interval}`).then(resp =>{
        this.data = resp.data.data
        this.labels = resp.data.labels
      })
    }
  }
</script>
