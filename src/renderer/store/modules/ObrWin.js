const win = require('electron').remote.getCurrentWindow()
const size = win.getContentSize()

const state = {
  minHeight: 800,
  minWidth: 1200,
  height: Math.max(size[1], 800),
  width: Math.max(size[0], 1200)
}

const mutations = {
  WIN_RESIZE (state, width, height) {
    state.height = Math.max(height, state.height)
    state.width = Math.max(height, state.width)
  }
}

const actions = {
  winResize ({commit}, width, height) {
    commit('WIN_RESIZE', width, height)
  }
}

export default {
  state,
  mutations,
  actions
}
