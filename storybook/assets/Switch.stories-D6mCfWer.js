import{r as V,j as a}from"./iframe-BPCLwZzO.js";import{S as i,F as G}from"./index-C3zyKqjR.js";const{expect:p,within:N,userEvent:h}=__STORYBOOK_MODULE_TEST__,P={title:"Components/Switch",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Switch allows users to toggle between two states, typically on or off."}}},argTypes:{label:{control:"text",description:"Switch label (use this OR aria-label, not both)",defaultValue:"Switch Label"},description:{control:"text",description:"Description for field"},disabled:{control:"boolean",description:"Disables element",defaultValue:!1},readOnly:{control:"boolean",description:"Toggle readOnly",defaultValue:!1},position:{control:"select",options:["start","end"],description:"Position of switch relative to label",defaultValue:"start"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"primary-color-red"},value:{control:"text",description:"Value of the input element"},checked:{control:"boolean"},defaultChecked:{control:"boolean"},name:{control:"text"}}},n={args:{label:"Mørk modus",value:"dark_mode_toggle",name:"theme-toggle",defaultChecked:!1}},r={parameters:{a11y:{config:{rules:[{id:"aria-allowed-role",enabled:!1},{id:"color-contrast",selector:'*:not([data-field="description"])'}]}}},render:o=>{const{"data-size":t,"data-color":e,position:s}=o;return a.jsxs(G,{children:[a.jsx(i,{"data-size":t,"data-color":e,position:s,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1",name:"settings-group",defaultChecked:!0}),a.jsx(i,{"data-size":t,"data-color":e,position:s,label:"Innstilling 2",value:"setting2",name:"settings-group"}),a.jsx(i,{"data-size":t,"data-color":e,position:s,label:"Innstilling 3",value:"setting3",name:"settings-group",defaultChecked:!0}),a.jsx(i,{"data-size":t,"data-color":e,position:s,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4",name:"settings-group",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"start"}},l={parameters:{a11y:{config:{rules:[{id:"aria-allowed-role",enabled:!1},{id:"color-contrast",selector:'*:not([data-field="description"])'}]}}},render:o=>{const{"data-size":t,"data-color":e,position:s}=o;return a.jsxs(G,{children:[a.jsx(i,{"data-size":t,"data-color":e,position:s,label:"Innstilling 1",description:"Beskrivelse av innstilling",value:"setting1-right",name:"settings-group-right",defaultChecked:!0}),a.jsx(i,{"data-size":t,"data-color":e,position:s,label:"Innstilling 2",value:"setting2-right",name:"settings-group-right"}),a.jsx(i,{"data-size":t,"data-color":e,position:s,label:"Innstilling 3",value:"setting3-right",name:"settings-group-right",defaultChecked:!0}),a.jsx(i,{"data-size":t,"data-color":e,position:s,label:"Innstilling 4",description:"Du mangler rettigheter for denne instillingen",value:"setting4-right",name:"settings-group-right",disabled:!0})]})},args:{"data-size":"md","data-color":"neutral",position:"end"},name:"Right Positioned"},d={args:{label:"Disabled Switch",value:"disabled_toggle",name:"disabled-state",disabled:!0,checked:!0}},c={args:{label:"Read Only Switch",value:"readonly_toggle",name:"readonly-state",readOnly:!0,checked:!0}},g={render:o=>{const[t,e]=V.useState(!1);return a.jsxs("div",{children:[a.jsx(i,{...o,checked:t,onChange:s=>e(s.target.checked)}),a.jsxs("p",{style:{marginTop:"8px",fontSize:"0.9em"},children:["Current state: ",t?"Checked (On)":"Unchecked (Off)"]})]})},args:{label:"Kontrollert Switch",value:"controlled_toggle",name:"controlled-switch"}},u={name:"Test: Interaction",args:{label:"Test Switch",value:"test_toggle",name:"test-switch",defaultChecked:!1},play:async({canvasElement:o})=>{const e=N(o).getByRole("switch",{name:/test switch/i});p(e).toBeInTheDocument(),p(e).not.toBeChecked(),await h.click(e),p(e).toBeChecked(),await h.click(e),p(e).not.toBeChecked()}};var m,f,b;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    label: 'Mørk modus',
    value: 'dark_mode_toggle',
    name: 'theme-toggle',
    defaultChecked: false
  }
}`,...(b=(f=n.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};var w,k,S;r.parameters={...r.parameters,docs:{...(w=r.parameters)==null?void 0:w.docs,source:{originalSource:`{
  // The gate is ON with two rule-precise exemptions for upstream Digdir
  // markup/styling (see TESTING.md):
  // 1. aria-allowed-role: Digdir's Fieldset sets a redundant role="group"
  //    on <fieldset> (a fieldset already IS a group).
  // 2. color-contrast, ONLY on [data-field="description"]: the disabled
  //    switch's description is styled faded by Digdir (#cecece, 1.57:1).
  //    WCAG 1.4.3 exempts text in inactive controls, but axe cannot
  //    associate the description div with the disabled input, so it
  //    flags it anyway. Everything else is still contrast-checked.
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'aria-allowed-role',
          enabled: false
        }, {
          id: 'color-contrast',
          selector: '*:not([data-field="description"])'
        }]
      }
    }
  },
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
}`,...(S=(k=r.parameters)==null?void 0:k.docs)==null?void 0:S.source}}};var v,C,y;l.parameters={...l.parameters,docs:{...(v=l.parameters)==null?void 0:v.docs,source:{originalSource:`{
  // The gate is ON with two rule-precise exemptions for upstream Digdir
  // markup/styling (see TESTING.md):
  // 1. aria-allowed-role: Digdir's Fieldset sets a redundant role="group"
  //    on <fieldset> (a fieldset already IS a group).
  // 2. color-contrast, ONLY on [data-field="description"]: the disabled
  //    switch's description is styled faded by Digdir (#cecece, 1.57:1).
  //    WCAG 1.4.3 exempts text in inactive controls, but axe cannot
  //    associate the description div with the disabled input, so it
  //    flags it anyway. Everything else is still contrast-checked.
  parameters: {
    a11y: {
      config: {
        rules: [{
          id: 'aria-allowed-role',
          enabled: false
        }, {
          id: 'color-contrast',
          selector: '*:not([data-field="description"])'
        }]
      }
    }
  },
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
}`,...(y=(C=l.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};var z,x,I;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    label: 'Disabled Switch',
    value: 'disabled_toggle',
    name: 'disabled-state',
    disabled: true,
    checked: true
  }
}`,...(I=(x=d.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var D,O,_;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`{
  args: {
    label: 'Read Only Switch',
    value: 'readonly_toggle',
    name: 'readonly-state',
    readOnly: true,
    checked: true
  }
}`,...(_=(O=c.parameters)==null?void 0:O.docs)==null?void 0:_.source}}};var T,j,B;g.parameters={...g.parameters,docs:{...(T=g.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(B=(j=g.parameters)==null?void 0:j.docs)==null?void 0:B.source}}};var E,R,F;u.parameters={...u.parameters,docs:{...(E=u.parameters)==null?void 0:E.docs,source:{originalSource:`{
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
}`,...(F=(R=u.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};const L=["Default","Grouped","RightPositioned","Disabled","ReadOnly","Controlled","TestInteraction"],U=Object.freeze(Object.defineProperty({__proto__:null,Controlled:g,Default:n,Disabled:d,Grouped:r,ReadOnly:c,RightPositioned:l,TestInteraction:u,__namedExportsOrder:L,default:P},Symbol.toStringTag,{value:"Module"}));export{g as C,d as D,r as G,l as R,U as S,c as a};
