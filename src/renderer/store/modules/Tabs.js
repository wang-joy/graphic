const state = {
  tabs: [{name: '1', title: 'file 1'}],
  tabIndex: 1
}

const mutations = {
  ADD_TAB (state) {
    let newTabName = ++state.tabIndex + ''
    let tab = {
      name: newTabName,
      title: 'file ' + newTabName
    }
    state.tabs.push(tab)
  },
  REMOVE_TAB (state, name) {
    state.tabs = state.tabs.filter(tab => tab.name !== name)
  }
}

export default {
  state,
  mutations
}
