import{j as e}from"./iframe-CL6Wazc_.js";import{U as x}from"./tooltip-sJPwWG0G.js";const r=x;try{r.displayName="SkipLink",r.__docgenInfo={description:"",displayName:"SkipLink",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},children:{defaultValue:null,description:"The content to display inside the skiplink.",name:"children",required:!0,type:{name:"ReactNode"}},href:{defaultValue:null,description:"Href of an element in the DOM the skiplink should skip to. E.g #main-content",name:"href",required:!0,type:{name:"string"}}}}}catch{}const{expect:t,within:T,userEvent:l,waitFor:p}=__STORYBOOK_MODULE_TEST__,L={title:"Components/SkipLink",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"SkipLink allows keyboard users to bypass navigation and jump directly to the main content."}},notes:"To see the SkipLink, click inside the Story canvas and press the Tab key.",layout:"padded"},argTypes:{children:{control:"text",description:"The content to display inside the skiplink.",defaultValue:"Hopp til hovedinnhold"},href:{control:"text",description:"Href of the element ID to skip to (e.g., #main-content).",defaultValue:"#main-content-story"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"}}},o={render:i=>{var s;return e.jsxs(e.Fragment,{children:[e.jsx(r,{...i}),e.jsxs("main",{id:(s=i.href)==null?void 0:s.substring(1),tabIndex:-1,style:{padding:"2rem",marginTop:"1rem",border:"1px dashed #ccc",outline:"none"},children:["Region som kan motta fokus fra skiplink. (ID: ",i.href,")",e.jsx("br",{}),"(Click here and press Tab to see the SkipLink)"]})]})},args:{children:"Hopp til hovedinnhold",href:"#main-content-story","data-size":"md","data-color":"accent"}},a={name:"Test: Focus Reveal And Activation",render:i=>e.jsxs(e.Fragment,{children:[e.jsx(r,{...i}),e.jsxs("nav",{"aria-label":"Hovedmeny",children:[e.jsx("a",{href:"#unused-1",children:"Aktiviteter"})," ",e.jsx("a",{href:"#unused-2",children:"Om oss"})]}),e.jsx("main",{id:"test-hovedinnhold",tabIndex:-1,style:{padding:"2rem",border:"1px dashed #ccc",outline:"none"},children:"Hovedinnholdet på siden."})]}),args:{children:"Hopp til hovedinnhold",href:"#test-hovedinnhold"},play:async({canvasElement:i})=>{const s=T(i),n=s.getByRole("link",{name:"Hopp til hovedinnhold"});t(n).toHaveAttribute("href","#test-hovedinnhold"),t(n.offsetWidth).toBeLessThanOrEqual(1),t(n.offsetHeight).toBeLessThanOrEqual(1),await l.tab(),t(n).toHaveFocus(),await p(()=>t(n.offsetWidth).toBeGreaterThan(1)),t(n.offsetHeight).toBeGreaterThan(1);const d=s.getByText("Hovedinnholdet på siden."),b=document.getElementById((n.getAttribute("href")??"").slice(1));t(b).toBe(d),t(d.tabIndex).toBe(-1),n.addEventListener("click",c=>{t(c.defaultPrevented).toBe(!1),c.preventDefault(),d.focus()},{once:!0}),await l.keyboard("{Enter}"),await p(()=>t(d).toHaveFocus()),t(n.offsetWidth).toBeLessThanOrEqual(1)}};var h,u,m;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: args => <>
      <SkipLink {...args} />
      <main id={args.href?.substring(1)} tabIndex={-1} style={{
      padding: '2rem',
      marginTop: '1rem',
      border: '1px dashed #ccc',
      outline: 'none'
    }}>
        Region som kan motta fokus fra skiplink. (ID: {args.href})
        <br />
        (Click here and press Tab to see the SkipLink)
      </main>
    </>,
  args: {
    children: 'Hopp til hovedinnhold',
    href: '#main-content-story',
    'data-size': 'md',
    'data-color': 'accent'
  }
}`,...(m=(u=o.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var f,k,v,g,y;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`{
  name: 'Test: Focus Reveal And Activation',
  render: args => <>
      <SkipLink {...args} />
      <nav aria-label="Hovedmeny">
        <a href="#unused-1">Aktiviteter</a> <a href="#unused-2">Om oss</a>
      </nav>
      <main id="test-hovedinnhold" tabIndex={-1} style={{
      padding: '2rem',
      border: '1px dashed #ccc',
      outline: 'none'
    }}>
        Hovedinnholdet på siden.
      </main>
    </>,
  args: {
    children: 'Hopp til hovedinnhold',
    href: '#test-hovedinnhold'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The link is in the accessibility tree with its accessible name and
    // points at the main-content target, even while visually hidden
    const skipLink = canvas.getByRole('link', {
      name: 'Hopp til hovedinnhold'
    });
    expect(skipLink).toHaveAttribute('href', '#test-hovedinnhold');

    // Visually hidden until focused: clipped to a 1px box
    expect(skipLink.offsetWidth).toBeLessThanOrEqual(1);
    expect(skipLink.offsetHeight).toBeLessThanOrEqual(1);

    // First Tab press lands on the skip link, before the nav links
    await userEvent.tab();
    expect(skipLink).toHaveFocus();

    // Once focused it is revealed
    await waitFor(() => expect(skipLink.offsetWidth).toBeGreaterThan(1));
    expect(skipLink.offsetHeight).toBeGreaterThan(1);

    // The link resolves to an existing, programmatically focusable target
    const main = canvas.getByText('Hovedinnholdet på siden.');
    const target = document.getElementById((skipLink.getAttribute('href') ?? '').slice(1));
    expect(target).toBe(main);
    expect(main.tabIndex).toBe(-1);

    // Activating the link moves focus to the main-content target.
    // Real fragment navigation tears down the vitest browser page, so the
    // click is intercepted and the browser's behavior (focusing the fragment
    // target) is reproduced. The component must not prevent the default.
    skipLink.addEventListener('click', event => {
      expect(event.defaultPrevented).toBe(false);
      event.preventDefault();
      main.focus();
    }, {
      once: true
    });
    await userEvent.keyboard('{Enter}');
    await waitFor(() => expect(main).toHaveFocus());

    // When focus leaves the link it collapses back to visually hidden
    expect(skipLink.offsetWidth).toBeLessThanOrEqual(1);
  }
}`,...(v=(k=a.parameters)==null?void 0:k.docs)==null?void 0:v.source},description:{story:`Tests the whole purpose of the SkipLink: it is visually hidden (clipped to
1x1 px) but still first in the tab order, it becomes visible when it
receives keyboard focus, and activating it moves focus to the main-content
target so keyboard users can bypass the navigation.`,...(y=(g=a.parameters)==null?void 0:g.docs)==null?void 0:y.description}}};const H=["Default","TestFocusAndActivation"],E=Object.freeze(Object.defineProperty({__proto__:null,Default:o,TestFocusAndActivation:a,__namedExportsOrder:H,default:L},Symbol.toStringTag,{value:"Module"}));export{E as S};
