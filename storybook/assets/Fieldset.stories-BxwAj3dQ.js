import{j as e}from"./iframe-Fz2sQ5_F.js";import{s as te,i as y,b as F,M as p,R as C,j as ae}from"./tooltip-CQU5KlGv.js";import{F as v}from"./index-ByxiD8uO.js";const s=te;try{s.displayName="Fieldset",s.__docgenInfo={description:"",displayName:"Fieldset",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const{expect:t,within:f,userEvent:i,waitFor:x,fn:B}=__STORYBOOK_MODULE_TEST__,se={title:"Components/Fieldset",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Fieldset groups related form controls, often with a legend."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1,description:"Fieldset content, typically Fieldset.Legend, Fieldset.Description, and form controls."},legend:{table:{disable:!0}},description:{table:{disable:!0}},error:{table:{disable:!0}}}},h={render:a=>e.jsx("form",{children:e.jsxs(s,{...a,children:[e.jsx(s.Legend,{children:"Skriv inn dine svar"}),e.jsx(s.Description,{children:"Gi en kort beskrivelse i begge feltene"}),e.jsxs(v,{children:[e.jsx(y,{id:"short-desc-label",htmlFor:"short-desc",children:"Kort beskrivelse"}),e.jsx(F,{id:"short-desc","aria-labelledby":"short-desc-label"})]}),e.jsxs(v,{children:[e.jsx(y,{id:"long-desc-label",htmlFor:"long-desc",children:"Lang beskrivelse"}),e.jsx(ae,{id:"long-desc","aria-labelledby":"long-desc-label"})]})]})}),args:{"data-size":"md","data-color":"brand1"},name:"With Textfields"},k={render:a=>e.jsx("form",{children:e.jsxs(s,{...a,children:[e.jsx(s.Legend,{children:"Hvilke nyhetsbrev ønsker du?"}),e.jsx(s.Description,{children:"Velg ett eller flere alternativer"}),e.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"checkbox"})," Produktnyheter"]}),e.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"checkbox"})," Blogginnlegg"]}),e.jsxs("label",{style:{display:"flex",gap:"8px",alignItems:"center"},children:[e.jsx("input",{type:"checkbox"})," Invitasjoner til webinar"]})]})}),args:{"data-size":"md","data-color":"neutral"},name:"With Checkbox"},u={render:a=>e.jsx("form",{children:e.jsxs(s,{...a,children:[e.jsx(s.Legend,{asChild:!0,children:e.jsx("h3",{style:{margin:0},children:"Hvor bor du nå?"})}),e.jsxs(v,{children:[e.jsx(y,{id:"address-line1-label",htmlFor:"address-line1",children:"Adresse"}),e.jsx(F,{id:"address-line1","aria-labelledby":"address-line1-label"})]}),e.jsxs(v,{children:[e.jsx(y,{id:"zip-label",htmlFor:"zip",children:"Postnummer"}),e.jsx(F,{id:"zip","aria-labelledby":"zip-label",size:6})]})]})}),args:{"data-size":"md"},name:"Legend as Heading"},d={name:"Test: Legend And Group Semantics",render:a=>e.jsx("form",{children:e.jsxs(s,{...a,children:[e.jsx(s.Legend,{children:"Kontaktinformasjon"}),e.jsx(s.Description,{children:"Vi bruker dette til å kontakte deg om medlemskapet"}),e.jsx(p,{label:"E-post",value:"epost",name:"kontakt-kanal"}),e.jsx(p,{label:"Post",value:"post",name:"kontakt-kanal"})]})}),args:{"data-size":"md"},play:async({canvasElement:a})=>{const l=f(a),r=l.getByRole("group",{name:/Kontaktinformasjon/}),o=l.getByText("Kontaktinformasjon"),n=l.getByText("Vi bruker dette til å kontakte deg om medlemskapet");await x(()=>{t(o).toHaveAttribute("id"),t(n).toHaveAttribute("id");const j=r.getAttribute("aria-labelledby")??"";t(j).toContain(o.id),t(j).toContain(n.id)});const b=await x(()=>l.getByRole("checkbox",{name:"E-post"}));t(r).toContainElement(b)}},c={name:"Test: Disabled Propagates To Children",render:a=>e.jsx("form",{children:e.jsxs(s,{...a,children:[e.jsx(s.Legend,{children:"Samtykker"}),e.jsx(p,{label:"Nyhetsbrev",value:"nyhetsbrev",name:"samtykke"}),e.jsx(p,{label:"SMS-varsler",value:"sms",name:"samtykke"})]})}),args:{"data-size":"md",disabled:!0,onChange:B()},play:async({canvasElement:a,args:l})=>{const r=f(a),o=await x(()=>r.getByRole("checkbox",{name:"Nyhetsbrev"})),n=r.getByRole("checkbox",{name:"SMS-varsler"});t(o).toBeDisabled(),t(n).toBeDisabled(),await i.click(o),t(o).not.toBeChecked(),t(l.onChange).not.toHaveBeenCalled()}},m={name:"Test: Checkbox Operability Within Fieldset",render:a=>e.jsx("form",{children:e.jsxs(s,{...a,children:[e.jsx(s.Legend,{children:"Hvilke nyhetsbrev ønsker du?"}),e.jsx(s.Description,{children:"Velg ett eller flere alternativer"}),e.jsx(p,{label:"Produktnyheter",value:"produkt",name:"nyhetsbrev"}),e.jsx(p,{label:"Blogginnlegg",value:"blogg",name:"nyhetsbrev"})]})}),args:{"data-size":"md",onChange:B()},play:async({canvasElement:a,args:l})=>{const r=f(a),o=await x(()=>r.getByRole("checkbox",{name:"Produktnyheter"})),n=r.getByRole("checkbox",{name:"Blogginnlegg"});await i.click(o),t(o).toBeChecked(),t(l.onChange).toHaveBeenCalledTimes(1),n.focus(),await i.keyboard(" "),t(n).toBeChecked(),t(l.onChange).toHaveBeenCalledTimes(2),await i.click(o),t(o).not.toBeChecked(),t(n).toBeChecked(),t(l.onChange).toHaveBeenCalledTimes(3)}},g={name:"Test: Radio Group Within Fieldset",render:a=>e.jsx("form",{children:e.jsxs(s,{...a,children:[e.jsx(s.Legend,{children:"Foretrukket kontaktmåte"}),e.jsx(C,{label:"E-post",value:"epost",name:"kontaktmaate"}),e.jsx(C,{label:"Telefon",value:"telefon",name:"kontaktmaate"}),e.jsx(C,{label:"SMS",value:"sms",name:"kontaktmaate"})]})}),args:{"data-size":"md",onChange:B()},play:async({canvasElement:a,args:l})=>{const r=f(a),o=await x(()=>r.getByRole("radio",{name:"E-post"})),n=r.getByRole("radio",{name:"Telefon"}),b=r.getByRole("radio",{name:"SMS"});await i.click(n),t(n).toBeChecked(),t(l.onChange).toHaveBeenCalledTimes(1),await i.click(b),t(b).toBeChecked(),t(n).not.toBeChecked(),await i.keyboard("{ArrowUp}"),t(n).toBeChecked(),t(n).toHaveFocus(),t(b).not.toBeChecked(),t(o).not.toBeChecked()}};var T,w,S;h.parameters={...h.parameters,docs:{...(T=h.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Skriv inn dine svar</Fieldset.Legend>
        <Fieldset.Description>
          Gi en kort beskrivelse i begge feltene
        </Fieldset.Description>

        <Field>
          <Label id="short-desc-label" htmlFor="short-desc">
            Kort beskrivelse
          </Label>
          <Textfield id="short-desc" aria-labelledby="short-desc-label" />
        </Field>

        <Field>
          <Label id="long-desc-label" htmlFor="long-desc">
            Lang beskrivelse
          </Label>
          <Textarea id="long-desc" aria-labelledby="long-desc-label" />
        </Field>
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md',
    'data-color': 'brand1'
  },
  name: 'With Textfields'
}`,...(S=(w=h.parameters)==null?void 0:w.docs)==null?void 0:S.source}}};var L,z,E;k.parameters={...k.parameters,docs:{...(L=k.parameters)==null?void 0:L.docs,source:{originalSource:`{
  render: args => <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Hvilke nyhetsbrev ønsker du?</Fieldset.Legend>
        <Fieldset.Description>Velg ett eller flere alternativer</Fieldset.Description>
        <label style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
          <input type="checkbox" /> Produktnyheter
        </label>
        <label style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
          <input type="checkbox" /> Blogginnlegg
        </label>
        <label style={{
        display: 'flex',
        gap: '8px',
        alignItems: 'center'
      }}>
          <input type="checkbox" /> Invitasjoner til webinar
        </label>
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'With Checkbox'
}`,...(E=(z=k.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var R,D,H;u.parameters={...u.parameters,docs:{...(R=u.parameters)==null?void 0:R.docs,source:{originalSource:`{
  render: args => <form>
      <Fieldset {...args}>
        {/* @ts-expect-error asChild not in Fieldset.Legend types but supported at runtime */}
        <Fieldset.Legend asChild>
          <h3 style={{
          margin: 0
        }}>Hvor bor du nå?</h3>
        </Fieldset.Legend>
        <Field>
          <Label id="address-line1-label" htmlFor="address-line1">Adresse</Label>
          <Textfield id="address-line1" aria-labelledby="address-line1-label" />
        </Field>
        <Field>
          <Label id="zip-label" htmlFor="zip">Postnummer</Label>
          <Textfield id="zip" aria-labelledby="zip-label" size={6} />
        </Field>
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md'
  },
  name: 'Legend as Heading'
}`,...(H=(D=u.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var _,A,P,W,M;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Test: Legend And Group Semantics',
  render: args => <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Kontaktinformasjon</Fieldset.Legend>
        <Fieldset.Description>
          Vi bruker dette til å kontakte deg om medlemskapet
        </Fieldset.Description>
        <Checkbox label="E-post" value="epost" name="kontakt-kanal" />
        <Checkbox label="Post" value="post" name="kontakt-kanal" />
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The fieldset is exposed as a group named by its legend
    const group = canvas.getByRole('group', {
      name: /Kontaktinformasjon/
    });
    const legend = canvas.getByText('Kontaktinformasjon');
    const description = canvas.getByText('Vi bruker dette til å kontakte deg om medlemskapet');

    // designsystemet-web links legend + description via aria-labelledby
    await waitFor(() => {
      expect(legend).toHaveAttribute('id');
      expect(description).toHaveAttribute('id');
      const labelledBy = group.getAttribute('aria-labelledby') ?? '';
      expect(labelledBy).toContain(legend.id);
      expect(labelledBy).toContain(description.id);
    });

    // The checkboxes belong to the named group
    const checkbox = await waitFor(() => canvas.getByRole('checkbox', {
      name: 'E-post'
    }));
    expect(group).toContainElement(checkbox);
  }
}`,...(P=(A=d.parameters)==null?void 0:A.docs)==null?void 0:P.source},description:{story:`Tests fieldset semantics: the legend gives the fieldset its group role and
accessible name, and the description is included in the group's
aria-labelledby wiring (handled asynchronously by designsystemet-web).`,...(M=(W=d.parameters)==null?void 0:W.docs)==null?void 0:M.description}}};var V,O,G,K,I;c.parameters={...c.parameters,docs:{...(V=c.parameters)==null?void 0:V.docs,source:{originalSource:`{
  name: 'Test: Disabled Propagates To Children',
  render: args => <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Samtykker</Fieldset.Legend>
        <Checkbox label="Nyhetsbrev" value="nyhetsbrev" name="samtykke" />
        <Checkbox label="SMS-varsler" value="sms" name="samtykke" />
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md',
    disabled: true,
    // Change events from child inputs bubble up to the fieldset
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const newsletter = await waitFor(() => canvas.getByRole('checkbox', {
      name: 'Nyhetsbrev'
    }));
    const sms = canvas.getByRole('checkbox', {
      name: 'SMS-varsler'
    });

    // Disabled state propagates from the fieldset to every child input
    expect(newsletter).toBeDisabled();
    expect(sms).toBeDisabled();

    // Clicking a disabled checkbox must be a no-op
    await userEvent.click(newsletter);
    expect(newsletter).not.toBeChecked();
    expect(args.onChange).not.toHaveBeenCalled();
  }
}`,...(G=(O=c.parameters)==null?void 0:O.docs)==null?void 0:G.source},description:{story:`Tests that disabling the fieldset propagates to all child inputs
(native fieldset behavior): they are disabled, cannot be toggled,
and no change events fire.`,...(I=(K=c.parameters)==null?void 0:K.docs)==null?void 0:I.description}}};var N,U,q,Y,J;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Test: Checkbox Operability Within Fieldset',
  render: args => <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Hvilke nyhetsbrev ønsker du?</Fieldset.Legend>
        <Fieldset.Description>Velg ett eller flere alternativer</Fieldset.Description>
        <Checkbox label="Produktnyheter" value="produkt" name="nyhetsbrev" />
        <Checkbox label="Blogginnlegg" value="blogg" name="nyhetsbrev" />
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md',
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const product = await waitFor(() => canvas.getByRole('checkbox', {
      name: 'Produktnyheter'
    }));
    const blog = canvas.getByRole('checkbox', {
      name: 'Blogginnlegg'
    });

    // Mouse: toggle on
    await userEvent.click(product);
    expect(product).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(1);

    // Keyboard: focus + Space toggles the other checkbox
    blog.focus();
    await userEvent.keyboard(' ');
    expect(blog).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(2);

    // Selections are independent; unchecking works too
    await userEvent.click(product);
    expect(product).not.toBeChecked();
    expect(blog).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(3);
  }
}`,...(q=(U=m.parameters)==null?void 0:U.docs)==null?void 0:q.source},description:{story:`Tests that checkboxes remain fully operable inside an (enabled) fieldset:
toggling by mouse, toggling by keyboard (Space), and unchecking again.`,...(J=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:J.description}}};var Q,X,Z,$,ee;g.parameters={...g.parameters,docs:{...(Q=g.parameters)==null?void 0:Q.docs,source:{originalSource:`{
  name: 'Test: Radio Group Within Fieldset',
  render: args => <form>
      <Fieldset {...args}>
        <Fieldset.Legend>Foretrukket kontaktmåte</Fieldset.Legend>
        <Radio label="E-post" value="epost" name="kontaktmaate" />
        <Radio label="Telefon" value="telefon" name="kontaktmaate" />
        <Radio label="SMS" value="sms" name="kontaktmaate" />
      </Fieldset>
    </form>,
  args: {
    'data-size': 'md',
    onChange: fn()
  },
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const email = await waitFor(() => canvas.getByRole('radio', {
      name: 'E-post'
    }));
    const phone = canvas.getByRole('radio', {
      name: 'Telefon'
    });
    const sms = canvas.getByRole('radio', {
      name: 'SMS'
    });

    // Selecting one radio...
    await userEvent.click(phone);
    expect(phone).toBeChecked();
    expect(args.onChange).toHaveBeenCalledTimes(1);

    // ...and then another deselects the first (single-selection semantics)
    await userEvent.click(sms);
    expect(sms).toBeChecked();
    expect(phone).not.toBeChecked();

    // Arrow keys move selection within the radio group
    await userEvent.keyboard('{ArrowUp}');
    expect(phone).toBeChecked();
    expect(phone).toHaveFocus();
    expect(sms).not.toBeChecked();
    expect(email).not.toBeChecked();
  }
}`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source},description:{story:`Tests radio buttons grouped by a fieldset: single-selection semantics,
and native arrow-key navigation between radios in the same group.`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.description}}};const ne=["WithTextfields","WithCheckbox","LegendAsHeading","TestGroupSemantics","TestDisabledPropagates","TestCheckboxOperability","TestRadioGroup"],ie=Object.freeze(Object.defineProperty({__proto__:null,LegendAsHeading:u,TestCheckboxOperability:m,TestDisabledPropagates:c,TestGroupSemantics:d,TestRadioGroup:g,WithCheckbox:k,WithTextfields:h,__namedExportsOrder:ne,default:se},Symbol.toStringTag,{value:"Module"}));export{ie as F,h as W};
