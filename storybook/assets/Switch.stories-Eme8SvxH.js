import{r as F,j as e}from"./iframe-BdlBVaMh.js";import{F as B}from"./index-DFE7n1CE.js";import{I as E}from"./input-JUpqDO89.js";import{L as G}from"./label-mrELLPrt.js";import{F as L}from"./index-BSLJRSl9.js";const M=F.forwardRef(function({"data-size":t,children:n,className:a,description:p,label:m,position:q,style:N,...P},T){return e.jsxs(B,{className:a,"data-position":q,"data-size":t,style:N,children:[e.jsx(E,{type:"checkbox",role:"switch",ref:T,...P}),!!m&&e.jsx(G,{weight:"regular",children:m}),!!p&&e.jsx("div",{"data-field":"description",children:p})]})}),s=M,g=L;try{s.displayName="Switch",s.__docgenInfo={description:"",displayName:"Switch",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:null,description:"Optional aria-label",name:"aria-label",required:!1,type:{name:"string"}},label:{defaultValue:null,description:"Switch label",name:"label",required:!1,type:{name:"ReactNode"}},description:{defaultValue:null,description:"Description for field",name:"description",required:!1,type:{name:"ReactNode"}},value:{defaultValue:null,description:"Value of the `input` element",name:"value",required:!1,type:{name:"string | number | readonly string[]"}},position:{defaultValue:{value:"start"},description:"Position of switch",name:"position",required:!1,type:{name:"enum",value:[{value:'"end"'},{value:'"start"'}]}},"aria-labelledby":{defaultValue:null,description:"",name:"aria-labelledby",required:!1,type:{name:"string"}}}}}catch{}try{g.displayName="Fieldset",g.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const K={title:"Components/Switch",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Switch allows users to toggle between two states, typically on or off."}}},argTypes:{label:{control:"text",description:"Switch label (use this OR aria-label, not both)",defaultValue:"Switch Label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},position:{control:"select",options:["start","end"],description:"Position of switch relative to label",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},value:{control:"text",description:"Value of the input element"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},name:{control:"text"}}},o={args:{label:"Mørk modus",value:"dark_mode_toggle",name:"theme-toggle",defaultChecked:!1}},r={render:i=>{const{"data-size":t,"data-color":n,position:a}=i;return e.jsxs(g,{children:[e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1",name:"settings-group",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 2",value:"setting2",name:"settings-group"}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 3",value:"setting3",name:"settings-group",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4",name:"settings-group",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"start"}},l={render:i=>{const{"data-size":t,"data-color":n,position:a}=i;return e.jsxs(g,{children:[e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1-right",name:"settings-group-right",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 2",value:"setting2-right",name:"settings-group-right"}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 3",value:"setting3-right",name:"settings-group-right",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":n,position:a,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4-right",name:"settings-group-right",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"end"},name:"Right Positioned"},d={args:{label:"Disabled Switch",value:"disabled_toggle",name:"disabled-state",disabled:!0,checked:!0}},c={args:{label:"Read Only Switch",value:"readonly_toggle",name:"readonly-state",readOnly:!0,checked:!0}},u={render:i=>{const[t,n]=F.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{...i,checked:t,onChange:a=>n(a.target.checked)}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.9em"},children:["Current state: ",t?"Checked (On)":"Unchecked (Off)"]})]})},args:{label:"Kontrollert Switch",value:"controlled_toggle",name:"controlled-switch"}};var h,f,b;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    label: 'Mørk modus',
    value: 'dark_mode_toggle',
    name: 'theme-toggle',
    defaultChecked: false
  }
}`,...(b=(f=o.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var S,z,y;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(y=(z=r.parameters)==null?void 0:z.docs)==null?void 0:y.source}}};var C,v,k;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(k=(v=l.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var w,_,x;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    value: 'disabled_toggle',
    name: 'disabled-state',
    disabled: true,
    checked: true
  }
}`,...(x=(_=d.parameters)==null?void 0:_.docs)==null?void 0:x.source}}};var I,j,D;c.parameters={...c.parameters,docs:{...(I=c.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Switch',
    value: 'readonly_toggle',
    name: 'readonly-state',
    readOnly: true,
    checked: true
  }
}`,...(D=(j=c.parameters)==null?void 0:j.docs)==null?void 0:D.source}}};var V,O,R;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(R=(O=u.parameters)==null?void 0:O.docs)==null?void 0:R.source}}};const U=["Default","Grouped","RightPositioned","Disabled","ReadOnly","Controlled"],W=Object.freeze(Object.defineProperty({__proto__:null,Controlled:u,Default:o,Disabled:d,Grouped:r,ReadOnly:c,RightPositioned:l,__namedExportsOrder:U,default:K},Symbol.toStringTag,{value:"Module"}));export{u as C,d as D,r as G,l as R,W as S,c as a};
