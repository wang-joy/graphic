<template>
  <div :id="id">

  </div>
</template>

<script>
export default {
  props: ['id'],
  mounted () {
    var id = this.id
    this.$svg.createSvg(id, 1200, 1200)
  }
}
</script>

<style>

</style>
