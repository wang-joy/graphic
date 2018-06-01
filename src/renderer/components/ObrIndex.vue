<template>
  <div class="obr-index">
    <obr-tools-bar></obr-tools-bar>
  </div>
</template>

<script>
import ObrToolsBar from './ToolsBar'
export default {
  data () {
    return {
      value: 1
    }
  },
  components: {ObrToolsBar}
}
</script>

<style>
  .obr-index{
    height: 100%;
    width: 100%;
    min-width: 1200px;
    min-height: 800px;
  }
</style>
