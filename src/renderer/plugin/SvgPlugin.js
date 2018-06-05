import * as SVG from 'svg.js'
import 'svg.draw.js'
import 'svg.select.js'
import 'svg.resize.js'
import 'svg.draggable.js'
export const SvgPlugin = {
  install: function (Vue, store, options) {
    const _defaultOpts = {
      fill: '#eee',
      stroke: '#000',
      strokeWidth: 1
    }
    const _selectCancel = function (draw) {
      draw.each(function () {
        this.selectize(false, {deepSelect: true})
      })
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
        /* draw.click(function () {
          _selectCancel(this)
        }) */
      },
      draw (type, options) {
        options = Object.assign({}, _defaultOpts, options)
        var svg = this.currentSvg
        var shape = null
        var that = this
        that.mode = 'draw'
        switch (type) {
          case 'rect':
            shape = svg.rect().attr(options).draw()
            break
          case 'circle':
            shape = svg.circle().attr(options).draw()
            break
          case 'line':
            shape = svg.line().attr(options).draw()
            break
          case 'ellipse':
            shape = svg.ellipse().attr(options).draw()
            break
          case 'polygon':
            shape = svg.polygon().attr(options).draw()
            break
          case 'polyline':
            shape = svg.polyline().attr(options).fill('none').draw()
            break
          default:
            break
        }
        this.currentDrawShape = shape
        shape.on('drawstart', function () {
          _selectCancel(svg)
        })
        shape.on('drawstop', function () {
          this.style('cursor', 'move')
          if (type === 'line' || type === 'polygon' || type === 'polyline') {
            shape.draggable().selectize({deepSelect: true}).resize()
          } else {
            shape.draggable().selectize().resize()
          }
          shape.click(function (e) {
            _selectCancel(svg)
            if (type === 'line' || type === 'polygon' || type === 'polyline') {
              shape.selectize({deepSelect: true})
            } else {
              shape.selectize()
            }
            e.stopPropagation()
          })
        })
        window.addEventListener('keyup', function (e) {
          if (e.code === 'Enter') {
            shape.draw('done')
          }
        })
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
