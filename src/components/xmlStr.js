export var xmlStr = `
<?xml version="1.0" encoding="UTF-8"?>
<bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:camunda="http://camunda.org/schema/1.0/bpmn" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:modeler="http://camunda.org/schema/modeler/1.0" id="Definitions_1dx22kd" targetNamespace="http://bpmn.io/schema/bpmn" exporter="Camunda Modeler" exporterVersion="5.37.0" modeler:executionPlatform="Camunda Platform" modeler:executionPlatformVersion="7.23.0">
  <bpmn:process id="Process_1l274v6" name="请假流程" isExecutable="true" camunda:versionTag="1">
    <bpmn:startEvent id="StartEvent_1" name="开始请假" camunda:initiator="jklove">
      <bpmn:extensionElements>
        <camunda:formData>
          <camunda:formField id="count" label="请假天数" type="long" />
          <camunda:formField id="user_id" label="请假人id" type="string" />
          <camunda:formField id="reason" label="请假原因" type="string" />
        </camunda:formData>
      </bpmn:extensionElements>
      <bpmn:outgoing>Flow_0yzde3t</bpmn:outgoing>
    </bpmn:startEvent>
    <bpmn:sequenceFlow id="Flow_0yzde3t" sourceRef="StartEvent_1" targetRef="Activity_1c83kvg" />
    <bpmn:userTask id="Activity_1c83kvg" name="人事审核" camunda:assignee="admin">
      <bpmn:extensionElements>
        <camunda:formData>
          <camunda:formField id="agree" label="是否同意" type="boolean" defaultValue="" />
        </camunda:formData>
      </bpmn:extensionElements>
      <bpmn:incoming>Flow_0yzde3t</bpmn:incoming>
      <bpmn:outgoing>Flow_0rduq39</bpmn:outgoing>
    </bpmn:userTask>
    <bpmn:exclusiveGateway id="Gateway_1fflyk6">
      <bpmn:incoming>Flow_0rduq39</bpmn:incoming>
      <bpmn:outgoing>Flow_0jg7l1a</bpmn:outgoing>
      <bpmn:outgoing>Flow_1gcrlmq</bpmn:outgoing>
    </bpmn:exclusiveGateway>
    <bpmn:sequenceFlow id="Flow_0rduq39" sourceRef="Activity_1c83kvg" targetRef="Gateway_1fflyk6" />
    <bpmn:sequenceFlow id="Flow_0jg7l1a" name="审批成功" sourceRef="Gateway_1fflyk6" targetRef="Activity_0i0emcq">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">\${agree==true}</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:serviceTask id="Activity_0i0emcq" name="请假成功" camunda:delegateExpression="\${LoanGrantService}">
      <bpmn:incoming>Flow_0jg7l1a</bpmn:incoming>
      <bpmn:outgoing>Flow_07wb3ru</bpmn:outgoing>
    </bpmn:serviceTask>
    <bpmn:endEvent id="Event_1uj31pm">
      <bpmn:incoming>Flow_1gcrlmq</bpmn:incoming>
      <bpmn:incoming>Flow_07wb3ru</bpmn:incoming>
    </bpmn:endEvent>
    <bpmn:sequenceFlow id="Flow_1gcrlmq" name="审批不成功" sourceRef="Gateway_1fflyk6" targetRef="Event_1uj31pm">
      <bpmn:conditionExpression xsi:type="bpmn:tFormalExpression">\${agree==false}</bpmn:conditionExpression>
    </bpmn:sequenceFlow>
    <bpmn:sequenceFlow id="Flow_07wb3ru" sourceRef="Activity_0i0emcq" targetRef="Event_1uj31pm" />
  </bpmn:process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1l274v6">
      <bpmndi:BPMNShape id="StartEvent_1_di" bpmnElement="StartEvent_1">
        <dc:Bounds x="162" y="102" width="36" height="36" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="158" y="145" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_1p7hf4l_di" bpmnElement="Activity_1c83kvg">
        <dc:Bounds x="250" y="80" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Gateway_1fflyk6_di" bpmnElement="Gateway_1fflyk6" isMarkerVisible="true">
        <dc:Bounds x="405" y="95" width="50" height="50" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Activity_0eaawwu_di" bpmnElement="Activity_0i0emcq">
        <dc:Bounds x="580" y="80" width="100" height="80" />
        <bpmndi:BPMNLabel />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNShape id="Event_1uj31pm_di" bpmnElement="Event_1uj31pm">
        <dc:Bounds x="612" y="212" width="36" height="36" />
      </bpmndi:BPMNShape>
      <bpmndi:BPMNEdge id="Flow_0yzde3t_di" bpmnElement="Flow_0yzde3t">
        <di:waypoint x="198" y="120" />
        <di:waypoint x="250" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0rduq39_di" bpmnElement="Flow_0rduq39">
        <di:waypoint x="350" y="120" />
        <di:waypoint x="405" y="120" />
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_0jg7l1a_di" bpmnElement="Flow_0jg7l1a">
        <di:waypoint x="455" y="120" />
        <di:waypoint x="580" y="120" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="497" y="102" width="44" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_1gcrlmq_di" bpmnElement="Flow_1gcrlmq">
        <di:waypoint x="430" y="145" />
        <di:waypoint x="430" y="230" />
        <di:waypoint x="612" y="230" />
        <bpmndi:BPMNLabel>
          <dc:Bounds x="491" y="213" width="55" height="14" />
        </bpmndi:BPMNLabel>
      </bpmndi:BPMNEdge>
      <bpmndi:BPMNEdge id="Flow_07wb3ru_di" bpmnElement="Flow_07wb3ru">
        <di:waypoint x="630" y="160" />
        <di:waypoint x="630" y="212" />
      </bpmndi:BPMNEdge>
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</bpmn:definitions>`

export var xmlStr2 = `<?xml version="1.0" encoding="UTF-8"?>
<definitions xmlns="http://www.omg.org/spec/BPMN/20100524/MODEL" 
             xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" 
             xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" 
             id="Definitions_1" 
             targetNamespace="http://bpmn.io/schema/bpmn">
  <process id="Process_1" isExecutable="false">
    <!-- 这是一个空的流程，可以开始添加节点 -->
  </process>
  <bpmndi:BPMNDiagram id="BPMNDiagram_1">
    <bpmndi:BPMNPlane id="BPMNPlane_1" bpmnElement="Process_1">
    </bpmndi:BPMNPlane>
  </bpmndi:BPMNDiagram>
</definitions>`