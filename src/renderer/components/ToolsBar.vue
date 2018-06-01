<template>
  <div class="tools-bar">
    <ButtonGroup size="small">
				<Button @click="fileSignal('new')" title="新建文件 Ctrl+N">
					<ObrIcon type="xinjian"></ObrIcon>
				</Button>
				<Button @click="fileSignal('open')" title="打开文件 Ctrl+O">
					<ObrIcon type="dakai"></ObrIcon>
				</Button>
				<Button @click="fileSignal('save')" title="保存文件 Ctrl+N">
					<ObrIcon type="baocun"></ObrIcon>
				</Button>
			</ButtonGroup>
      <ButtonGroup size="small">
				<Button @click="editSignal('undo')" title="取消上次操作 Ctrl+Z">
					<ObrIcon type="quxiaoshangcicaozuo"></ObrIcon>
				</Button>
				<Button @click="editSignal('redo')" title="恢复上次操作 Ctrl+Y">
					<ObrIcon type="huifushangcicaozuo"></ObrIcon>
				</Button>
				<Button @click="editSignal('cut')" title="剪切 Ctrl+X">
					<ObrIcon type="jianqie"></ObrIcon>
				</Button>
				<Button @click="editSignal('copy')" title="复制 Ctrl+C">
					<ObrIcon type="kaobei"></ObrIcon>
				</Button>
				<Button @click="editSignal('paste')" title="粘贴 Ctrl+V">
					<ObrIcon type="niantie"></ObrIcon>
				</Button>
				<Button @click="editSignal('delete')" title="删除 Delete">
					<ObrIcon type="shanchu"></ObrIcon>
				</Button>
			</ButtonGroup>
      <ButtonGroup size="small">
				<Button @click="arrangeSignal('leftAlign')" title="左对齐">
					<ObrIcon type="zuoduiqi"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('horizontalAlign')" title="水平居中">
					<ObrIcon type="shuipingjuzhong"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('rightAlign')" title="右对齐">
					<ObrIcon type="youduiqi"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('topAlign')" title="上对齐">
					<ObrIcon type="shangduiqi"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('verticalAlign')" title="垂直居中">
					<ObrIcon type="chuizhijuzhong"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('bottomAlign')" title="下对齐">
					<ObrIcon type="xiaduiqi"></ObrIcon>
				</Button>

				<!-- TODO -->
				<Button  title="等宽">
					<ObrIcon type="dengkuan"></ObrIcon>
				</Button>
				<!-- TODO -->
				<Button  title="等高">
					<ObrIcon type="denggao"></ObrIcon>
				</Button>
			</ButtonGroup>
      	<ButtonGroup size="small">
				<Button @click="arrangeSignal('toFront')" title="移到最上">
					<ObrIcon type="yidaozuishang"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('moveUp')" title="上移一层">
					<ObrIcon type="shangyiyiceng2"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('moveDown')" title="下移一层">
					<ObrIcon type="xiayiyiceng2"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('toBottom')" title="移到最下">
					<ObrIcon type="yidaozuixia1"></ObrIcon>
				</Button>
			</ButtonGroup>
			<ButtonGroup size="small">
				<Button @click="arrangeSignal('horizontalFlip')" title="水平翻转">
					<ObrIcon type="shuipingfanzhuan"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('verticalFlip')" title="垂直翻转">
					<ObrIcon type="chuizhifanzhuan"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('rightRotate')" title="顺时针旋转90度">
					<ObrIcon type="shunshizhen"></ObrIcon>
				</Button>
				<Button @click="arrangeSignal('leftRotate')" title="逆时针旋转90度">
					<ObrIcon type="nishizhen"></ObrIcon>
				</Button>
			</ButtonGroup>
      <ButtonGroup size="small">
				<!-- TODO -->
				<Button @click="sceneSignal('zoomOri')" title="恢复原始尺寸">
					<ObrIcon type="huifuyuanshichicun"></ObrIcon>
				</Button>

				<Button @click="sceneSignal('zoomIn')" title="放大">
					<ObrIcon type="fangda"></ObrIcon>
				</Button>
				<Button @click="sceneSignal('zoomOut')" title="缩小">
					<ObrIcon type="suoxiao"></ObrIcon>
				</Button>
			</ButtonGroup>
  </div>
</template>

<script>
import ObrIcon from './commons/ObrIcon'
export default {
  components: {ObrIcon}
}
</script>

<style scoped>
.tools-bar {
  height: 70px;
  width: 100%;
  background-color: #eee;
}
</style>
