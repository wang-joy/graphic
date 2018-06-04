import * as SVG from 'svg.js'
import 'svg.draw.js'
export const SvgPlugin = {
  install: function (Vue, store, options) {
    const _defaultOpts = {
      fill: '#fff',
      stroke: '#000',
      strokeWidth: 1
    }
    Vue.prototype.$svg = {
      svgs: {},
      currentSvg: null,
      currentDrawShape: null,
      mode: 'draw',
      createSvg (id, width, height) {
        let draw = SVG(id).size(width, height)
        this.svgs[id] = draw
        this.currentSvg = draw
      },
      draw (type, options) {
        options = Object.assign({}, _defaultOpts, options)
        var svg = this.currentSvg
        var shape = null
        if (this.currentDrawShape) {
          this.currentDrawShape.draw('stop')
        }
        switch (type) {
          case 'rect':
            shape = svg.rect(options).draw()
            break
          case 'circle':
            shape = svg.circle(options).draw()
            break
          default:
            break
        }
        this.currentDrawShape = shape
        return shape
      },
      drawCancel (shape) {
        shape = shape || this.currentDrawShape
        if (shape) {
          shape.draw('cancel')
        }
      },
      drawDone (shape) {
        shape = shape || this.currentDrawShape
        if (shape) {
          shape.draw('done')
        }
      },
      drawStop (shape) {
        shape = shape || this.currentDrawShape
        if (shape) {
          shape.draw('stop')
        }
      }
    }
  }
}
