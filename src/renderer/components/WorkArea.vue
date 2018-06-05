<template>
  <div>
    <div :id="id" :style="workAreaStyle" class="work-area"></div>
  </div>
</template>

<script>
export default {
  props: ['id'],
  mounted () {
    var id = this.id
    this.$svg.createSvg(id, 12000, 12000)
  },
  computed: {
    workAreaStyle () {
      return {
        height: `${this.$store.state.ObrWin.height - 131}px`
      }
    }
  }
}
</script>

<style scoped>
  .work-area{
    overflow: auto;
  }
</style>
