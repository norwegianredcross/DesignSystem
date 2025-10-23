import{r as F,j as e}from"./iframe-CliXIuPX.js";import{F as T}from"./index-EK9ubzNb.js";import{I as E}from"./input-EgltYjqx.js";import{L}from"./label-DtrN4ur6.js";import{F as G}from"./index-DDs8rCho.js";import"./preload-helper-Dp1pzeXC.js";import"./index-D12A7wYx.js";import"./lite-DaUVFjkg.js";import"./use-merge-refs-BvVliphZ.js";import"./paragraph-BCAN1PaO.js";const K=F.forwardRef(function({"data-size":t,children:n,className:a,description:p,label:m,position:q,style:N,...P},B){return e.jsxs(T,{className:a,"data-position":q,"data-size":t,style:N,children:[e.jsx(E,{type:"checkbox",role:"switch",ref:B,...P}),!!m&&e.jsx(L,{weight:"regular",children:m}),!!p&&e.jsx("div",{"data-field":"description",children:p})]})}),s=K,u=G;try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:null,description:"Optional aria-label",name:"aria-label",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Switch label",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description for field",name:"description",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"Value of the `input` element",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},position:{defaultValue:{value:"start"},description:"Position of switch",name:"position",required:!1,type:{name:"enum",value:[{value:'"start"'},{value:'"end"'}]}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}}}}}catch{}try{u.displayName="Fieldset",u.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const Z={title:"Components/Switch",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Switch allows users to toggle between two states, typically on or off."}}},argTypes:{label:{control:"text",description:"Switch label (use this OR aria-label, not both)",defaultValue:"Switch Label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},position:{control:"select",options:["start","end"],description:"Position of switch relative to label",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},value:{control:"text",description:"Value of the input element"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},name:{control:"text"}}},o={args:{label:"Mørk modus",value:"dark_mode_toggle",name:"theme-toggle",defaultChecked:!1}},r={render:i=>{const{"data-size":t,"data-color":n,position:a}=i;return e.jsxs(u,{children:[e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1",name:"settings-group",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 2",value:"setting2",name:"settings-group"}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 3",value:"setting3",name:"settings-group",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4",name:"settings-group",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"start"}},l={render:i=>{const{"data-size":t,"data-color":n,position:a}=i;return e.jsxs(u,{children:[e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1-right",name:"settings-group-right",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 2",value:"setting2-right",name:"settings-group-right"}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 3",value:"setting3-right",name:"settings-group-right",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4-right",name:"settings-group-right",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"end"},name:"Right Positioned"},d={args:{label:"Disabled Switch",value:"disabled_toggle",name:"disabled-state",disabled:!0,checked:!0}},c={args:{label:"Read Only Switch",value:"readonly_toggle",name:"readonly-state",readOnly:!0,checked:!0}},g={render:i=>{const[t,n]=F.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{...i,checked:t,onChange:a=>n(a.target.checked)}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.9em"},children:["Current state: ",t?"Checked (On)":"Unchecked (Off)"]})]})},args:{label:"Kontrollert Switch",value:"controlled_toggle",name:"controlled-switch"}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Mørk modus',
    value: 'dark_mode_toggle',
    name: 'theme-toggle',
    defaultChecked: false
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,z,C;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => {
    const {
      'data-size': dataSize,
      'data-color': dataColor,
      position
    } = args;
    return <Fieldset>
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 1" description="Beskrivelse av innstilling" value="setting1" name="settings-group" defaultChecked />
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 2" value="setting2" name="settings-group" />
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 3" value="setting3" name="settings-group" defaultChecked />
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 4" description="Du mangler rettigheter for denne instillingen" value="setting4" name="settings-group" disabled />
      </Fieldset>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
    position: 'start'
  }
}`,...(C=(z=r.parameters)==null?void 0:z.docs)==null?void 0:C.source}}};var y,v,k;l.parameters={...l.parameters,docs:{...(y=l.parameters)==null?void 0:y.docs,source:{originalSource:`{
  render: args => {
    const {
      'data-size': dataSize,
      'data-color': dataColor,
      position
    } = args;
    return <Fieldset>
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 1" description="Beskrivelse av innstilling" value="setting1-right" name="settings-group-right" defaultChecked />
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 2" value="setting2-right" name="settings-group-right" />
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 3" value="setting3-right" name="settings-group-right" defaultChecked />
        <Switch data-size={dataSize} data-color={dataColor} position={position} label="Innstilling 4" description="Du mangler rettigheter for denne instillingen" value="setting4-right" name="settings-group-right" disabled />
      </Fieldset>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
    position: 'end'
  },
  name: 'Right Positioned'
}`,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,x,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    value: 'disabled_toggle',
    name: 'disabled-state',
    disabled: true,
    checked: true
  }
}`,...(_=(x=d.parameters)==null?void 0:x.docs)==null?void 0:_.source}}};var I,j,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Switch',
    value: 'readonly_toggle',
    name: 'readonly-state',
    readOnly: true,
    checked: true
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var V,O,R;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`{
  render: args => {
    const [isChecked, setIsChecked] = useState(false);
    return <div>
        <Switch {...args} checked={isChecked} onChange={e => setIsChecked(e.target.checked)} />
        <p style={{
        marginTop: '8px',
        fontSize: '0.9em'
      }}>
          Current state: {isChecked ? 'Checked (On)' : 'Unchecked (Off)'}
        </p>
      </div>;
  },
  args: {
    label: 'Kontrollert Switch',
    value: 'controlled_toggle',
    name: 'controlled-switch'
  }
}`,...(R=(O=g.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const ee=["Default","Grouped","RightPositioned","Disabled","ReadOnly","Controlled"];export{g as Controlled,o as Default,d as Disabled,r as Grouped,c as ReadOnly,l as RightPositioned,ee as __namedExportsOrder,Z as default};
