<template>
  <div id="app">
    <obr-index></obr-index>
  </div>
</template>

<script>
  import ObrIndex from '@/components/ObrIndex'
  export default {
    name: 'graphic',
    components: {
      ObrIndex
    },
    mounted () {
      let that = this
      window.onresize = function () {
        let size = that.$electron.remote.getCurrentWindow().getContentSize()
        console.log(size)
        that.$store.dispatch('winResize', size[0], size[1])
      }
    }
  }
</script>

<style>
  /* CSS */
</style>
