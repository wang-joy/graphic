<template>
  <div class="work-area">
    <el-tabs v-model="editableTabsValue" type="card" closable>
        <template v-for="item in tabs">
          <el-tab-pane   class="obr-tab" :key="item.name" :label="item.title" :name="item.name">
              <work-area :id="'svg_'+item.name"></work-area>
          </el-tab-pane>
        </template>
      </el-tabs>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import WorkArea from './WorkArea'
export default {
  data () {
    return {
      editableTabsValue: '1'
    }
  },
  components: {WorkArea},
  computed: {
    ...mapState({
      tabs: state => state.Tabs.tabs
    })
  }
}
</script>

<style>

</style>
