<template>
  <div class="obr-left">
    <Collapse v-model="value">
        <Panel name="1">
          基本图形
          <ButtonGroup size="small" slot="content">
            <Button @click="addShape('rect')" title="正方形" class="ivew-btn">
              <ObrIcon type="zhengfangxing"></ObrIcon>
            </Button>
            <Button @click="addShape('line')" title="直线" class="ivew-btn">
              <ObrIcon type="zhixian"></ObrIcon>
            </Button>
            <Button @click="addShape('triangle')" title="三角形" class="ivew-btn">
              <ObrIcon type="sanjiaoxing"></ObrIcon>
            </Button>
            <Button @click="addShape('circle')" title="圆形" class="ivew-btn">
              <ObrIcon type="yuanxing"></ObrIcon>
            </Button>
            <Button @click="addShape('ellipse')" title="椭圆" class="ivew-btn">
              <ObrIcon type="tuoyuan"></ObrIcon>
            </Button>
            <Button @click="addShape('text')" title="文字" class="ivew-btn">
              <ObrIcon type="wenben"></ObrIcon>
            </Button>
            <Button @click="addShape('polygon')" title="多边形" class="ivew-btn">
              <ObrIcon type="duobianxing"></ObrIcon>
            </Button>
            <Button @click="addShape('polyline')" title="折线" class="ivew-btn">
              <ObrIcon type="zhexian"></ObrIcon>
            </Button>
            <Button @click="addShape('curve')" title="曲线" class="ivew-btn">
              <ObrIcon type="quxian"></ObrIcon>
            </Button>
            <Button @click="addShape('sector')" title="扇形" class="ivew-btn">
              <ObrIcon type="shanxing"></ObrIcon>
            </Button>
            <Button @click="addShape('image')" title="图片" class="ivew-btn">
              <ObrIcon type="图片"></ObrIcon>
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
  components: { ObrIcon },
  methods: {
    addTab () {
    },
    addShape (type) {
      this.$svg.draw(type)
    }
  }
}
</script>
<style scoped>
  .ivew-btn{
    background-color: #fff;
    margin-right:5px;
    margin-bottom:5px;
    border: none
  }
</style>
