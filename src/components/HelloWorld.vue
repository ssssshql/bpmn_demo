<template>
  <div class="container">
    <div class="canvas" ref="canvas"></div>
    <div id="js-properties-panel" class="panel"></div>
  </div>
</template>
<script setup>
// 汉化
import customTranslate from './customTranslate'

// 引入相关依赖
import propertiesPanelModule from "bpmn-js-properties-panel";
import propertiesProviderModule from "bpmn-js-properties-panel/lib/provider/camunda";
import bpmnModdleDescriptor from 'bpmn-moddle/resources/bpmn/json/bpmn.json'

import camundaModdleDescriptor from "camunda-bpmn-moddle/resources/camunda";
import BpmnModeler from "bpmn-js/lib/Modeler";
import { xmlStr,xmlStr2 } from "./xmlStr.js"; // 直接引用 xml格式 内容为一个圆形节点
import {ref,onMounted,useTemplateRef} from 'vue';

let bpmnModeler = ref(null);
let canvasRef = useTemplateRef('canvas');

async function init() {
  // 获取canvas的dom节点
  const canvas = canvasRef.value;
  // 建模
  bpmnModeler.value = new BpmnModeler({
    container: canvas,
    propertiesPanel: {
      parent: "#js-properties-panel", // 对应div添加的id
    },
    additionalModules: [
      // 右边的属性栏
      propertiesProviderModule,
      propertiesPanelModule,
      {
        translate: [
          "value",
          customTranslate
        ]
      }
    ],
    moddleExtensions: {
      // bpmn: bpmnModdleDescriptor,
      camunda: camundaModdleDescriptor,
    },
  });
  
    //将xmlStr中的内容显示在容器中
  const result =  await bpmnModeler.value.importXML(xmlStr2);
  console.log(result);
}


onMounted(()=>{
  init();
})
</script>
<style scoped>
.container {
  width: 100%;
  height: 100%;
  position: relative;
  border: 1px solid #ccc;
}
.canvas {
  width: 100%;
  height: 100%;
  background: white;
}
.panel {
  position: absolute;
  top: 0;
  right: 0;
  width: 300px;
  height: 100%;
  overflow-y: scroll;
  zoom: .8;
}

</style>