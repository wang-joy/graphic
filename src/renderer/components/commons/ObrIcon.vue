<template>
  <svg aria-hidden="true" :style='styles'>
		<use :xlink:href="href"></use>
	</svg>
</template>

<script>
import '../../assets/js/iconfont'
export default {
  props: {
    type: String,
    size: [Number, String]
  },
  data: function () {
    return {}
  },
  computed: {
    href () {
      return `#icon-pro-${this.type}`
    },
    styles () {
      let style = {}
      if (this.size !== undefined) {
        style['width'] = `${this.size}px`
        style['height'] = `${this.size}px`
      }
      return style
    }
  }
}
</script>

<style scoped>
	svg {
	   width: 1.3em;
	   height: 1.3em;
	   vertical-align: -0.15em;
	   fill: currentColor;
	   overflow: hidden;
	}
</style>
