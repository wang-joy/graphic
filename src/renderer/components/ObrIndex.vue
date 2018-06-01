<template>
  <div class="obr-index">
    <obr-tools-bar></obr-tools-bar>
    <div class="obr-main">
      <obr-left class="obr-left"></obr-left>
    </div>
  </div>
</template>

<script>
import ObrToolsBar from './ToolsBar'
import ObrLeft from './ObrLeft'
export default {
  data () {
    return {
      value: 1
    }
  },
  components: {ObrToolsBar, ObrLeft}
}
</script>

<style>
  .obr-index{
    height: 100%;
    width: 100%;
    min-width: 1200px;
    min-height: 800px;
  }
  .obr-main{
    width: 100%
  }
  .obr-left{
    width: 200px;
    background-color: #eee;
  }
</style>
