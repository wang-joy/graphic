<template>
  <div class="obr-left">
    <Collapse v-model="value">
        <Panel name="1">
          基本图形
          <ButtonGroup size="small" slot="content">
            <Button @click="arrangeSignal('horizontalFlip')" title="水平翻转" class="ivew-btn">
              <ObrIcon type="shuipingfanzhuan"></ObrIcon>
            </Button>
            <Button @click="arrangeSignal('verticalFlip')" title="垂直翻转" class="ivew-btn">
              <ObrIcon type="chuizhifanzhuan"></ObrIcon>
            </Button>
            <Button @click="arrangeSignal('rightRotate')" title="顺时针旋转90度" class="ivew-btn">
              <ObrIcon type="shunshizhen"></ObrIcon>
            </Button>
            <Button @click="arrangeSignal('leftRotate')" title="逆时针旋转90度" class="ivew-btn">
              <ObrIcon type="nishizhen"></ObrIcon>
            </Button>
            <Button @click="arrangeSignal('horizontalFlip')" title="水平翻转" class="ivew-btn">
              <ObrIcon type="shuipingfanzhuan"></ObrIcon>
            </Button>
            <Button @click="arrangeSignal('verticalFlip')" title="垂直翻转" class="ivew-btn">
              <ObrIcon type="chuizhifanzhuan"></ObrIcon>
            </Button>
            <Button @click="arrangeSignal('rightRotate')" title="顺时针旋转90度" class="ivew-btn">
              <ObrIcon type="shunshizhen"></ObrIcon>
            </Button>
            <Button @click="arrangeSignal('leftRotate')" title="逆时针旋转90度" class="ivew-btn">
              <ObrIcon type="nishizhen"></ObrIcon>
            </Button>
          </ButtonGroup>
        </Panel>
    </Collapse>
  </div>
</template>

<script>
import ObrIcon from './commons/ObrIcon'
export default {
  data () {
    return {
      value: '1'
    }
  },
  components: { ObrIcon }
}
</script>
<style scoped>
  .ivew-btn{
    background-color: #fff;
    margin-right:10px;
    margin-bottom:5px;
    border: none
  }
</style>
