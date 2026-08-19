import{j as e}from"./iframe-By4i38YK.js";import{K as D,b as g}from"./tooltip-66EuXpS-.js";const r=D;try{r.displayName="ErrorSummary",r.__docgenInfo={description:"",displayName:"ErrorSummary",props:{asChild:{defaultValue:null,description:"@deprecated This is not supported anymore, as the element needs to be `ds-error-summary`",name:"asChild",required:!1,type:{name:"ReactNode"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}}}}}catch{}const{expect:a,within:y,userEvent:M,waitFor:p}=__STORYBOOK_MODULE_TEST__,O={title:"Components/ErrorSummary",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"ErrorSummary provides an overview of errors or omissions that need correction on a page or step."}}},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1,description:"Must contain ErrorSummary.Heading and ErrorSummary.List with Items/Links"},heading:{table:{disable:!0}}}},d={render:t=>e.jsxs(r,{...t,children:[e.jsx(r.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#textfield-error-1",children:"Fødselsdato kan ikke være etter år 2005"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#textfield-error-3",children:"E-post må være gyldig"})})]})]}),args:{"data-size":"md"}},c={render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx(g,{id:"textfield-error-1",label:"Fornavn",error:"Fornavn må være minst 2 tegn","aria-describedby":"errorsummary-heading"}),e.jsx(g,{id:"textfield-error-2",label:"Telefon",error:"Telefonnummer kan kun inneholde siffer","aria-describedby":"errorsummary-heading"}),e.jsxs(r,{...t,children:[e.jsx(r.Heading,{id:"errorsummary-heading",children:"For å gå videre må du rette opp følgende feil:"}),e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#textfield-error-1",children:"Fornavn må være minst 2 tegn"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#textfield-error-2",children:"Telefonnummer kan kun inneholde siffer"})})]})]})]}),args:{"data-size":"md"}},i={name:"Test: Mount Focus And Heading Association",render:t=>e.jsxs(r,{...t,children:[e.jsx(r.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#felt-fodselsdato",children:"Fødselsdato kan ikke være etter år 2005"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#felt-telefon",children:"Telefonnummer kan kun inneholde siffer"})})]})]}),args:{"data-size":"md"},play:async({canvasElement:t})=>{const o=y(t),n=t.querySelector(".ds-error-summary");await p(()=>{a(n).toHaveAttribute("tabindex","-1"),a(n).toHaveFocus()});const u=o.getByRole("heading",{level:2,name:"For å gå videre må du rette opp følgende feil:"});await p(()=>{a(u).toHaveAttribute("id"),a(n).toHaveAttribute("aria-labelledby",u.id)}),a(y(n).getByRole("list")).toBeInTheDocument();const s=y(n).getAllByRole("link");a(s).toHaveLength(2),a(s[0]).toHaveAttribute("href","#felt-fodselsdato"),a(s[1]).toHaveAttribute("href","#felt-telefon")}},m={name:"Test: Links Move Focus To Fields",render:t=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:"2rem"},children:[e.jsx("style",{children:".ds-error-summary { animation: none !important; }"}),e.jsx(g,{id:"test-felt-fornavn",label:"Fornavn",error:"Fornavn må være minst 2 tegn"}),e.jsx(g,{id:"test-felt-epost",label:"E-post",error:"E-post må være gyldig"}),e.jsxs(r,{...t,children:[e.jsx(r.Heading,{children:"For å gå videre må du rette opp følgende feil:"}),e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#test-felt-fornavn",children:"Fornavn må være minst 2 tegn"})}),e.jsx(r.Item,{children:e.jsx(r.Link,{href:"#test-felt-epost",children:"E-post må være gyldig"})})]})]})]}),args:{"data-size":"md"},play:async({canvasElement:t})=>{const o=y(t),n=o.getByRole("textbox",{name:"Fornavn"}),u=o.getByRole("textbox",{name:"E-post"});for(const h of o.getAllByRole("link")){const l=(h.getAttribute("href")??"").slice(1),f=document.getElementById(l);a(f).toBeInstanceOf(HTMLInputElement)}const s=async h=>{const l=o.getByRole("link",{name:h});l.addEventListener("click",f=>{var v;a(f.defaultPrevented).toBe(!1),f.preventDefault();const z=(l.getAttribute("href")??"").slice(1);(v=document.getElementById(z))==null||v.focus()},{once:!0}),await M.click(l)};await s("Fornavn må være minst 2 tegn"),await p(()=>a(n).toHaveFocus()),await s("E-post må være gyldig"),await p(()=>a(u).toHaveFocus())}};var E,x,k;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => <ErrorSummary {...args}>
      <ErrorSummary.Heading>
        For å gå videre må du rette opp følgende feil:
      </ErrorSummary.Heading>
      <ErrorSummary.List>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#textfield-error-1">
            Fødselsdato kan ikke være etter år 2005
          </ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#textfield-error-2">
            Telefonnummer kan kun inneholde siffer
          </ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#textfield-error-3">
            E-post må være gyldig
          </ErrorSummary.Link>
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary>,
  args: {
    'data-size': 'md'
  }
}`,...(k=(x=d.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};var S,b,L;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      <Textfield id="textfield-error-1" label="Fornavn" error="Fornavn må være minst 2 tegn" aria-describedby="errorsummary-heading" />
      <Textfield id="textfield-error-2" label="Telefon" error="Telefonnummer kan kun inneholde siffer" aria-describedby="errorsummary-heading" />
      <ErrorSummary {...args}>
        <ErrorSummary.Heading id="errorsummary-heading">
          For å gå videre må du rette opp følgende feil:
        </ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#textfield-error-1">
              Fornavn må være minst 2 tegn
            </ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#textfield-error-2">
              Telefonnummer kan kun inneholde siffer
            </ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary>
    </div>,
  args: {
    'data-size': 'md'
  }
}`,...(L=(b=c.parameters)==null?void 0:b.docs)==null?void 0:L.source}}};var F,I,T,j,w;i.parameters={...i.parameters,docs:{...(F=i.parameters)==null?void 0:F.docs,source:{originalSource:`{
  name: 'Test: Mount Focus And Heading Association',
  render: args => <ErrorSummary {...args}>
      <ErrorSummary.Heading>
        For å gå videre må du rette opp følgende feil:
      </ErrorSummary.Heading>
      <ErrorSummary.List>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#felt-fodselsdato">
            Fødselsdato kan ikke være etter år 2005
          </ErrorSummary.Link>
        </ErrorSummary.Item>
        <ErrorSummary.Item>
          <ErrorSummary.Link href="#felt-telefon">
            Telefonnummer kan kun inneholde siffer
          </ErrorSummary.Link>
        </ErrorSummary.Item>
      </ErrorSummary.List>
    </ErrorSummary>,
  args: {
    'data-size': 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const summary = canvasElement.querySelector('.ds-error-summary') as HTMLElement;

    // The web component makes itself programmatically focusable and moves
    // focus to the summary when it appears
    await waitFor(() => {
      expect(summary).toHaveAttribute('tabindex', '-1');
      expect(summary).toHaveFocus();
    });

    // The summary is labelled by its own heading
    const heading = canvas.getByRole('heading', {
      level: 2,
      name: 'For å gå videre må du rette opp følgende feil:'
    });
    await waitFor(() => {
      expect(heading).toHaveAttribute('id');
      expect(summary).toHaveAttribute('aria-labelledby', heading.id);
    });

    // Errors are a list of two links
    expect(within(summary).getByRole('list')).toBeInTheDocument();
    const links = within(summary).getAllByRole('link');
    expect(links).toHaveLength(2);
    expect(links[0]).toHaveAttribute('href', '#felt-fodselsdato');
    expect(links[1]).toHaveAttribute('href', '#felt-telefon');
  }
}`,...(T=(I=i.parameters)==null?void 0:I.docs)==null?void 0:T.source},description:{story:`Tests the semantics the ErrorSummary web component sets up on mount: it
receives focus (tabindex="-1" + programmatic focus) so screen readers
announce it, and it is labelled by its own heading via aria-labelledby.
The errors are exposed as a list of links.`,...(w=(j=i.parameters)==null?void 0:j.docs)==null?void 0:w.description}}};var H,A,B,_,R;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  name: 'Test: Links Move Focus To Fields',
  render: args => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: '2rem'
  }}>
      {/* The ds-error-summary element re-focuses itself when its CSS
          entry animation ends, which races with this test's focus
          assertions. Disable the (0s, visual no-op) animation so focus
          movement is deterministic; mount focus still applies. */}
      <style>{'.ds-error-summary { animation: none !important; }'}</style>
      <Textfield id="test-felt-fornavn" label="Fornavn" error="Fornavn må være minst 2 tegn" />
      <Textfield id="test-felt-epost" label="E-post" error="E-post må være gyldig" />
      <ErrorSummary {...args}>
        <ErrorSummary.Heading>
          For å gå videre må du rette opp følgende feil:
        </ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#test-felt-fornavn">
              Fornavn må være minst 2 tegn
            </ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#test-felt-epost">
              E-post må være gyldig
            </ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </ErrorSummary>
    </div>,
  args: {
    'data-size': 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const firstNameInput = canvas.getByRole('textbox', {
      name: 'Fornavn'
    });
    const emailInput = canvas.getByRole('textbox', {
      name: 'E-post'
    });

    // Every summary link resolves to an existing form field in the document
    for (const link of canvas.getAllByRole('link')) {
      const targetId = (link.getAttribute('href') ?? '').slice(1);
      const target = document.getElementById(targetId);
      expect(target).toBeInstanceOf(HTMLInputElement);
    }

    // Activating a link moves focus to the referenced field. Real fragment
    // navigation tears down the vitest browser page, so the click is
    // intercepted and the browser's behavior (focusing the focusable
    // fragment target) is reproduced. The component must not prevent the
    // default itself.
    const activateLink = async (name: string) => {
      const link = canvas.getByRole('link', {
        name
      });
      link.addEventListener('click', event => {
        expect(event.defaultPrevented).toBe(false);
        event.preventDefault();
        const targetId = (link.getAttribute('href') ?? '').slice(1);
        document.getElementById(targetId)?.focus();
      }, {
        once: true
      });
      await userEvent.click(link);
    };
    await activateLink('Fornavn må være minst 2 tegn');
    await waitFor(() => expect(firstNameInput).toHaveFocus());

    // And the other link focuses the other field
    await activateLink('E-post må være gyldig');
    await waitFor(() => expect(emailInput).toHaveFocus());
  }
}`,...(B=(A=m.parameters)==null?void 0:A.docs)==null?void 0:B.source},description:{story:`Tests the error-correction flow: each summary link points at the id of an
actual form field, and activating a link moves focus to that field so the
user can fix the error immediately.`,...(R=(_=m.parameters)==null?void 0:_.docs)==null?void 0:R.description}}};const C=["Default","WithTextFields","TestMountFocusAndSemantics","TestLinksMoveFocusToFields"],V=Object.freeze(Object.defineProperty({__proto__:null,Default:d,TestLinksMoveFocusToFields:m,TestMountFocusAndSemantics:i,WithTextFields:c,__namedExportsOrder:C,default:O},Symbol.toStringTag,{value:"Module"}));export{d as D,V as E,c as W,r as a};
