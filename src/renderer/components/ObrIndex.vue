<template>
  <div :style="obrIndexStyle" class="obr-index">
    <obr-header class="obr-header"></obr-header>
    <div  :style="obrMainStyle" class="obr-main">
      <obr-left class="obr-left"></obr-left>
      <obr-tabs :style="obrTabsStyle" class="obr-tabs"></obr-tabs>
    </div>
  </div>
</template>

<script>
import ObrHeader from './ObrHeader'
import ObrLeft from './ObrLeft'
import ObrTabs from './ObrTabs'
import ObrRight from './ObrRight'
import { mapState } from 'vuex'
export default {
  data () {
    return {
      value: 1
    }
  },
  components: {ObrTabs, ObrHeader, ObrLeft, ObrRight},
  computed: {
    ...mapState({
      height: state => state.ObrWin.height,
      width: state => state.ObrWin.width
    }),
    obrIndexStyle () {
      return {
        height: `${this.$store.state.ObrWin.height}px`,
        width: `${this.$store.state.ObrWin.width}px`
      }
    },
    obrMainStyle () {
      return {
        height: `${this.$store.state.ObrWin.height - 90}px`,
        width: `${this.$store.state.ObrWin.width}px`
      }
    },
    obrTabsStyle () {
      return {
        height: `${this.$store.state.ObrWin.height - 90}px`,
        width: `${this.$store.state.ObrWin.width - 400}px`
      }
    }
  }
}
</script>

<style>
  .obr-header{
    width: 100%;
    height: 70px;
    background: #eee;
  }
  .obr-main{
    background: #eee;
  }
  .obr-left{
    height: 100%;
    width: 200px;
    background: #eee;
    float: left;
  }
  .obr-tabs{
    float: left;
    background: #fff;
  }
</style>
