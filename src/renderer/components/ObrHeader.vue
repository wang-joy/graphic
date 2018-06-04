<template>
  <div class="obr-header">
    <obr-menu></obr-menu>
    <obr-tools-bar class="tools-bar"></obr-tools-bar>
  </div>
</template>

<script>
import ObrMenu from './header/ObrMenu'
import ObrToolsBar from './header/ToolsBar'
export default {
  components: {ObrMenu, ObrToolsBar}
}
</script>

<style scoped>
</style>
