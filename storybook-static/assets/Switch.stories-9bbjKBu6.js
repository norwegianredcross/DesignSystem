import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as F}from"./index-D4lIrffr.js";import{F as L}from"./index-CMMlhluM.js";import{I as G}from"./Input-FgPaU4ty.js";import{L as K}from"./Label-DnboOLtM.js";import{F as M}from"./index-DkoJrbVQ.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./lite-DaUVFjkg.js";import"./index-Cb-ENzfG.js";import"./Paragraph-CJciD5B6.js";const U=F.forwardRef(function({"data-size":t,children:s,className:a,description:u,label:p,position:P,style:B,...T},E){return e.jsxs(L,{className:a,"data-position":P,"data-size":t,style:B,children:[e.jsx(G,{type:"checkbox",role:"switch",ref:E,...T}),!!p&&e.jsx(K,{weight:"regular",children:p}),!!u&&e.jsx("div",{"data-field":"description",children:u})]})}),n=U,V=M,te={title:"Components/Switch",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Switch allows users to toggle between two states, typically on or off."}}},argTypes:{label:{control:"text",description:"Switch label (use this OR aria-label, not both)",defaultValue:"Switch Label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},position:{control:"select",options:["start","end"],description:"Position of switch relative to label",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},value:{control:"text",description:"Value of the input element"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},name:{control:"text"}}},i={args:{label:"Mørk modus",value:"dark_mode_toggle",name:"theme-toggle",defaultChecked:!1}},r={render:o=>{const{"data-size":t,"data-color":s,position:a}=o;return e.jsxs(V,{children:[e.jsx(n,{"data-size":t,"data-color":s,position:a,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1",name:"settings-group",defaultChecked:!0}),e.jsx(n,{"data-size":t,"data-color":s,position:a,label:"Innstilling 2",value:"setting2",name:"settings-group"}),e.jsx(n,{"data-size":t,"data-color":s,position:a,label:"Innstilling 3",value:"setting3",name:"settings-group",defaultChecked:!0}),e.jsx(n,{"data-size":t,"data-color":s,position:a,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4",name:"settings-group",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"start"}},l={render:o=>{const{"data-size":t,"data-color":s,position:a}=o;return e.jsxs(V,{children:[e.jsx(n,{"data-size":t,"data-color":s,position:a,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1-right",name:"settings-group-right",defaultChecked:!0}),e.jsx(n,{"data-size":t,"data-color":s,position:a,label:"Innstilling 2",value:"setting2-right",name:"settings-group-right"}),e.jsx(n,{"data-size":t,"data-color":s,position:a,label:"Innstilling 3",value:"setting3-right",name:"settings-group-right",defaultChecked:!0}),e.jsx(n,{"data-size":t,"data-color":s,position:a,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4-right",name:"settings-group-right",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"end"},name:"Right Positioned"},d={args:{label:"Disabled Switch",value:"disabled_toggle",name:"disabled-state",disabled:!0,checked:!0}},c={args:{label:"Read Only Switch",value:"readonly_toggle",name:"readonly-state",readOnly:!0,checked:!0}},g={render:o=>{const[t,s]=F.useState(!1);return e.jsxs("div",{children:[e.jsx(n,{...o,checked:t,onChange:a=>s(a.target.checked)}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.9em"},children:["Current state: ",t?"Checked (On)":"Unchecked (Off)"]})]})},args:{label:"Kontrollert Switch",value:"controlled_toggle",name:"controlled-switch"}};var m,h,b;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Mørk modus',
    value: 'dark_mode_toggle',
    name: 'theme-toggle',
    defaultChecked: false
  }
}`,...(b=(h=i.parameters)==null?void 0:h.docs)==null?void 0:b.source}}};var f,S,z;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: args => {
    const {
      'data-size': dataSize,
      'data-color': dataColor,
      position
    } = args;
    return <Fieldset>\r
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 1" description="Beskrivelse av innstilling" value="setting1" name="settings-group" defaultChecked />\r
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 2" value="setting2" name="settings-group" />\r
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 3" value="setting3" name="settings-group" defaultChecked />\r
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 4" description="Du mangler rettigheter for denne instillingen" value="setting4" name="settings-group" disabled />\r
      </Fieldset>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
    position: 'start'
  }
}`,...(z=(S=r.parameters)==null?void 0:S.docs)==null?void 0:z.source}}};var C,k,v;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: args => {
    const {
      'data-size': dataSize,
      'data-color': dataColor,
      position
    } = args;
    return <Fieldset>\r
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 1" description="Beskrivelse av innstilling" value="setting1-right" name="settings-group-right" defaultChecked />\r
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 2" value="setting2-right" name="settings-group-right" />\r
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 3" value="setting3-right" name="settings-group-right" defaultChecked />\r
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 4" description="Du mangler rettigheter for denne instillingen" value="setting4-right" name="settings-group-right" disabled />\r
      </Fieldset>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
    position: 'end'
  },
  name: 'Right Positioned'
}`,...(v=(k=l.parameters)==null?void 0:k.docs)==null?void 0:v.source}}};var w,x,y;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    value: 'disabled_toggle',
    name: 'disabled-state',
    disabled: true,
    checked: true
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var I,j,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Switch',
    value: 'readonly_toggle',
    name: 'readonly-state',
    readOnly: true,
    checked: true
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var O,_,R;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`{
  render: args => {
    const [isChecked, setIsChecked] = useState(false);
    return <div>\r
        <Switch {...args} checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />\r
        <p style={{
        marginTop: '8px',
        fontSize: '0.9em'
      }}>\r
          Current state: {isChecked ? 'Checked (On)' : 'Unchecked (Off)'}\r
        </p>\r
      </div>;
  },
  args: {
    label: 'Kontrollert Switch',
    value: 'controlled_toggle',
    name: 'controlled-switch'
  }
}`,...(R=(_=g.parameters)==null?void 0:_.docs)==null?void 0:R.source}}};const ae=["Default","Grouped","RightPositioned","Disabled","ReadOnly","Controlled"];export{g as Controlled,i as Default,d as Disabled,r as Grouped,c as ReadOnly,l as RightPositioned,ae as __namedExportsOrder,te as default};
