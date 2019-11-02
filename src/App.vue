<template>
  <div id="app">
    <graph-widget-simple :zoom-label="true" :data="data"></graph-widget-simple>
  </div>
</template>

<script>



export default {
  name: 'app',
  data(){
    return {
      data: [12,24,56]
    }
  }
}
</script>
