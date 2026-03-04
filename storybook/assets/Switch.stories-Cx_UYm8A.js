import{j as a,r as P}from"./iframe-BcmQD90_.js";import{S as n,F}from"./index-DerbD7YY.js";const{expect:p,within:M,userEvent:h}=__STORYBOOK_MODULE_TEST__,G={title:"Components/Switch",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Switch allows users to toggle between two states, typically on or off."}}},argTypes:{label:{control:"text",description:"Switch label (use this OR aria-label, not both)",defaultValue:"Switch Label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},position:{control:"select",options:["start","end"],description:"Position of switch relative to label",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},value:{control:"text",description:"Value of the input element"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},name:{control:"text"}}},i={args:{label:"Mørk modus",value:"dark_mode_toggle",name:"theme-toggle",defaultChecked:!1}},l={render:o=>{const{"data-size":t,"data-color":e,position:s}=o;return a.jsxs(F,{children:[a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1",name:"settings-group",defaultChecked:!0}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 2",value:"setting2",name:"settings-group"}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 3",value:"setting3",name:"settings-group",defaultChecked:!0}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4",name:"settings-group",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"start"}},r={render:o=>{const{"data-size":t,"data-color":e,position:s}=o;return a.jsxs(F,{children:[a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1-right",name:"settings-group-right",defaultChecked:!0}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 2",value:"setting2-right",name:"settings-group-right"}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 3",value:"setting3-right",name:"settings-group-right",defaultChecked:!0}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4-right",name:"settings-group-right",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"end"},name:"Right Positioned"},d={args:{label:"Disabled Switch",value:"disabled_toggle",name:"disabled-state",disabled:!0,checked:!0}},c={args:{label:"Read Only Switch",value:"readonly_toggle",name:"readonly-state",readOnly:!0,checked:!0}},g={render:o=>{const[t,e]=P.useState(!1);return a.jsxs("div",{children:[a.jsx(n,{...o,checked:t,onChange:s=>e(s.target.checked)}),a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.9em"},children:["Current state: ",t?"Checked (On)":"Unchecked (Off)"]})]})},args:{label:"Kontrollert Switch",value:"controlled_toggle",name:"controlled-switch"}},u={name:"Test: Interaction",args:{label:"Test Switch",value:"test_toggle",name:"test-switch",defaultChecked:!1},play:async({canvasElement:o})=>{const e=M(o).getByRole("switch",{name:/test switch/i});p(e).toBeInTheDocument(),p(e).not.toBeChecked(),await h.click(e),p(e).toBeChecked(),await h.click(e),p(e).not.toBeChecked()}};var m,b,k;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Mørk modus',
    value: 'dark_mode_toggle',
    name: 'theme-toggle',
    defaultChecked: false
  }
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,f,w;l.parameters={...l.parameters,docs:{...(S=l.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(w=(f=l.parameters)==null?void 0:f.docs)==null?void 0:w.source}}};var C,v,z;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(z=(v=r.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var I,x,y;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    value: 'disabled_toggle',
    name: 'disabled-state',
    disabled: true,
    checked: true
  }
}`,...(y=(x=d.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var _,O,D;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Switch',
    value: 'readonly_toggle',
    name: 'readonly-state',
    readOnly: true,
    checked: true
  }
}`,...(D=(O=c.parameters)==null?void 0:O.docs)==null?void 0:D.source}}};var j,T,B;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(T=g.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var R,E,V;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  args: {
    label: 'Test Switch',
    value: 'test_toggle',
    name: 'test-switch',
    defaultChecked: false
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Switch renders with role="switch"
    const switchInput = canvas.getByRole('switch', {
      name: /test switch/i
    });
    expect(switchInput).toBeInTheDocument();
    expect(switchInput).not.toBeChecked();

    // Click should toggle state
    await userEvent.click(switchInput);
    expect(switchInput).toBeChecked();

    // Click again should uncheck
    await userEvent.click(switchInput);
    expect(switchInput).not.toBeChecked();
  }
}`,...(V=(E=u.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const K=["Default","Grouped","RightPositioned","Disabled","ReadOnly","Controlled","TestInteraction"],Y=Object.freeze(Object.defineProperty({__proto__:null,Controlled:g,Default:i,Disabled:d,Grouped:l,ReadOnly:c,RightPositioned:r,TestInteraction:u,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{g as C,d as D,l as G,r as R,Y as S,c as a};
