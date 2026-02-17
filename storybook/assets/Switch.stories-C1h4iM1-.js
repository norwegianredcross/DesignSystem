import{j as e,r as R}from"./iframe-hwVlxbHl.js";import{S as s,F as D}from"./index-Clq-qzle.js";const V={title:"Components/Switch",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Switch allows users to toggle between two states, typically on or off."}}},argTypes:{label:{control:"text",description:"Switch label (use this OR aria-label, not both)",defaultValue:"Switch Label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},position:{control:"select",options:["start","end"],description:"Position of switch relative to label",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},value:{control:"text",description:"Value of the input element"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},name:{control:"text"}}},i={args:{label:"Mørk modus",value:"dark_mode_toggle",name:"theme-toggle",defaultChecked:!1}},r={render:o=>{const{"data-size":t,"data-color":a,position:n}=o;return e.jsxs(D,{children:[e.jsx(s,{"data-size":t,"data-color":a,position:n,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1",name:"settings-group",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":a,position:n,label:"Innstilling 2",value:"setting2",name:"settings-group"}),e.jsx(s,{"data-size":t,"data-color":a,position:n,label:"Innstilling 3",value:"setting3",name:"settings-group",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":a,position:n,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4",name:"settings-group",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"start"}},l={render:o=>{const{"data-size":t,"data-color":a,position:n}=o;return e.jsxs(D,{children:[e.jsx(s,{"data-size":t,"data-color":a,position:n,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1-right",name:"settings-group-right",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":a,position:n,label:"Innstilling 2",value:"setting2-right",name:"settings-group-right"}),e.jsx(s,{"data-size":t,"data-color":a,position:n,label:"Innstilling 3",value:"setting3-right",name:"settings-group-right",defaultChecked:!0}),e.jsx(s,{"data-size":t,"data-color":a,position:n,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4-right",name:"settings-group-right",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"end"},name:"Right Positioned"},d={args:{label:"Disabled Switch",value:"disabled_toggle",name:"disabled-state",disabled:!0,checked:!0}},c={args:{label:"Read Only Switch",value:"readonly_toggle",name:"readonly-state",readOnly:!0,checked:!0}},g={render:o=>{const[t,a]=R.useState(!1);return e.jsxs("div",{children:[e.jsx(s,{...o,checked:t,onChange:n=>a(n.target.checked)}),e.jsxs("p",{style:{marginTop:"8px",fontSize:"0.9em"},children:["Current state: ",t?"Checked (On)":"Unchecked (Off)"]})]})},args:{label:"Kontrollert Switch",value:"controlled_toggle",name:"controlled-switch"}};var u,p,h;i.parameters={...i.parameters,docs:{...(u=i.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    label: 'Mørk modus',
    value: 'dark_mode_toggle',
    name: 'theme-toggle',
    defaultChecked: false
  }
}`,...(h=(p=i.parameters)==null?void 0:p.docs)==null?void 0:h.source}}};var m,b,f;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
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
}`,...(f=(b=r.parameters)==null?void 0:b.docs)==null?void 0:f.source}}};var S,C,z;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(z=(C=l.parameters)==null?void 0:C.docs)==null?void 0:z.source}}};var k,v,w;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    value: 'disabled_toggle',
    name: 'disabled-state',
    disabled: true,
    checked: true
  }
}`,...(w=(v=d.parameters)==null?void 0:v.docs)==null?void 0:w.source}}};var x,y,I;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Switch',
    value: 'readonly_toggle',
    name: 'readonly-state',
    readOnly: true,
    checked: true
  }
}`,...(I=(y=c.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};var j,O,_;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(_=(O=g.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};const F=["Default","Grouped","RightPositioned","Disabled","ReadOnly","Controlled"],B=Object.freeze(Object.defineProperty({__proto__:null,Controlled:g,Default:i,Disabled:d,Grouped:r,ReadOnly:c,RightPositioned:l,__namedExportsOrder:F,default:V},Symbol.toStringTag,{value:"Module"}));export{g as C,d as D,r as G,l as R,B as S,c as a};
