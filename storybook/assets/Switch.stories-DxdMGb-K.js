import{j as a,r as P}from"./iframe-BbkjnMVD.js";import{S as n,F as V}from"./index-Cw5ldbhs.js";const{expect:p,within:M,userEvent:h}=__STORYBOOK_MODULE_TEST__,G={title:"Components/Switch",component:n,tags:["autodocs"],parameters:{docs:{description:{component:"Switch allows users to toggle between two states, typically on or off."}}},argTypes:{label:{control:"text",description:"Switch label (use this OR aria-label, not both)",defaultValue:"Switch Label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},position:{control:"select",options:["start","end"],description:"Position of switch relative to label",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"},value:{control:"text",description:"Value of the input element"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},name:{control:"text"}}},i={args:{label:"Mørk modus",value:"dark_mode_toggle",name:"theme-toggle",defaultChecked:!1}},r={parameters:{a11y:{test:"todo"}},render:o=>{const{"data-size":t,"data-color":e,position:s}=o;return a.jsxs(V,{children:[a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1",name:"settings-group",defaultChecked:!0}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 2",value:"setting2",name:"settings-group"}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 3",value:"setting3",name:"settings-group",defaultChecked:!0}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4",name:"settings-group",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"start"}},l={parameters:{a11y:{test:"todo"}},render:o=>{const{"data-size":t,"data-color":e,position:s}=o;return a.jsxs(V,{children:[a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1-right",name:"settings-group-right",defaultChecked:!0}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 2",value:"setting2-right",name:"settings-group-right"}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 3",value:"setting3-right",name:"settings-group-right",defaultChecked:!0}),a.jsx(n,{"data-size":t,"data-color":e,position:s,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4-right",name:"settings-group-right",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"end"},name:"Right Positioned"},d={args:{label:"Disabled Switch",value:"disabled_toggle",name:"disabled-state",disabled:!0,checked:!0}},c={args:{label:"Read Only Switch",value:"readonly_toggle",name:"readonly-state",readOnly:!0,checked:!0}},g={render:o=>{const[t,e]=P.useState(!1);return a.jsxs("div",{children:[a.jsx(n,{...o,checked:t,onChange:s=>e(s.target.checked)}),a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.9em"},children:["Current state: ",t?"Checked (On)":"Unchecked (Off)"]})]})},args:{label:"Kontrollert Switch",value:"controlled_toggle",name:"controlled-switch"}},u={name:"Test: Interaction",args:{label:"Test Switch",value:"test_toggle",name:"test-switch",defaultChecked:!1},play:async({canvasElement:o})=>{const e=M(o).getByRole("switch",{name:/test switch/i});p(e).toBeInTheDocument(),p(e).not.toBeChecked(),await h.click(e),p(e).toBeChecked(),await h.click(e),p(e).not.toBeChecked()}};var m,b,k;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Mørk modus',
    value: 'dark_mode_toggle',
    name: 'theme-toggle',
    defaultChecked: false
  }
}`,...(k=(b=i.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var w,S,f;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'todo'
    }
  },
  // aria-allowed-role: DigDir Fieldset component issue
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
}`,...(f=(S=r.parameters)==null?void 0:S.docs)==null?void 0:f.source}}};var C,v,z;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'todo'
    }
  },
  // aria-allowed-role: DigDir Fieldset component issue
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
}`,...(z=(v=l.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var I,y,x;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    value: 'disabled_toggle',
    name: 'disabled-state',
    disabled: true,
    checked: true
  }
}`,...(x=(y=d.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var _,D,O;c.parameters={...c.parameters,docs:{...(_=c.parameters)==null?void 0:_.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Switch',
    value: 'readonly_toggle',
    name: 'readonly-state',
    readOnly: true,
    checked: true
  }
}`,...(O=(D=c.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var j,T,B;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(B=(T=g.parameters)==null?void 0:T.docs)==null?void 0:B.source}}};var R,E,F;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
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
}`,...(F=(E=u.parameters)==null?void 0:E.docs)==null?void 0:F.source}}};const K=["Default","Grouped","RightPositioned","Disabled","ReadOnly","Controlled","TestInteraction"],Y=Object.freeze(Object.defineProperty({__proto__:null,Controlled:g,Default:i,Disabled:d,Grouped:r,ReadOnly:c,RightPositioned:l,TestInteraction:u,__namedExportsOrder:K,default:G},Symbol.toStringTag,{value:"Module"}));export{g as C,d as D,r as G,l as R,Y as S,c as a};
