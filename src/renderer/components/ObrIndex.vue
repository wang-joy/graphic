<template>
  <div class="obr-index">
    <obr-header class="obr-header"></obr-header>
    <div class="obr-main">
      <obr-left class="obr-left"></obr-left>
      <obr-tabs class="obr-tabs"></obr-tabs>
    </div>
  </div>
</template>

<script>
import ObrHeader from './ObrHeader'
import ObrLeft from './ObrLeft'
import ObrTabs from './ObrTabs'
export default {
  data () {
    return {
      value: 1
    }
  },
  components: {ObrTabs, ObrHeader, ObrLeft}
}
</script>

<style>
  .obr-index{
    height: 100%;
    width: 100%;
    min-width: 1200px;
    min-height: 800px;
  }
  .obr-header{
    width: 100%;
    height: 70px;
    background: #eee;
  }
  .obr-main{
    width: 100%
  }
  .obr-left{
    width: 200px;
    background-color: #eee;
  }
</style>
