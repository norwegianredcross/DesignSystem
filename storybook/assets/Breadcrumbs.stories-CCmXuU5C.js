import{j as e}from"./iframe--tL_cLjH.js";import{q as G,r as J,s as Q,t as X}from"./tooltip-IPEz1hAh.js";const c=G,p=Q,n=X,t=J,{expect:a,within:B,waitFor:v}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Breadcrumbs",component:c,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"Sets the screen reader label for the Breadcrumbs area",defaultValue:"Du er her"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"primary-color-red"}}},u={name:"Example Only Back Button",render:r=>e.jsx(c,{...r,children:e.jsx(t,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"})}),args:{"aria-label":"Du er her:"}},b={name:"Example Only Path",render:r=>e.jsx(c,{...r,children:e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(t,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(n,{children:e.jsx(t,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(n,{children:e.jsx(t,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(n,{children:e.jsx(t,{href:"#",children:"Nivå 4"})})]})}),args:{"aria-label":"Du er her:"}},h={name:"Example Back Button and Path",render:r=>e.jsxs(c,{...r,children:[e.jsx(t,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"}),e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(t,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(n,{children:e.jsx(t,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(n,{children:e.jsx(t,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(n,{children:e.jsx(t,{href:"#",children:"Nivå 4"})})]})]}),args:{"aria-label":"Du er her:"}},k={name:"Example Custom Size and Color",render:r=>e.jsx(c,{...r,children:e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(t,{href:"#",children:"Nivå 1"})}),e.jsx(n,{children:e.jsx(t,{href:"#",children:"Nivå 2"})}),e.jsx(n,{children:e.jsx(t,{href:"#",children:"Nivå 3"})})]})}),args:{"aria-label":"Du er her:","data-size":"lg","data-color":"additional-color-ocean"}},l={name:"Test: Path Semantics And Current Page",render:r=>e.jsx(c,{...r,children:e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(t,{href:"/",children:"Forsiden"})}),e.jsx(n,{children:e.jsx(t,{href:"/aktiviteter",children:"Aktiviteter"})}),e.jsx(n,{children:e.jsx(t,{href:"/aktiviteter/besokstjenesten",children:"Besøkstjenesten"})})]})}),args:{"aria-label":"Du er her:"},play:async({canvasElement:r})=>{const s=B(r),i=await v(()=>s.getByRole("navigation",{name:"Du er her:"})),o=B(i).getByRole("list");a(o.tagName).toBe("OL"),a(B(o).getAllByRole("listitem")).toHaveLength(3);const g=s.getByRole("link",{name:"Forsiden"}),x=s.getByRole("link",{name:"Aktiviteter"}),y=s.getByRole("link",{name:"Besøkstjenesten"});a(g).toHaveAttribute("href","/"),a(x).toHaveAttribute("href","/aktiviteter"),a(y).toHaveAttribute("href","/aktiviteter/besokstjenesten"),await v(()=>a(y).toHaveAttribute("aria-current","page")),a(g).not.toHaveAttribute("aria-current"),a(x).not.toHaveAttribute("aria-current")}},d={name:"Test: Back Button And Path",render:r=>e.jsxs(c,{...r,children:[e.jsx(t,{"aria-label":"Tilbake til aktiviteter",href:"/aktiviteter",children:"Aktiviteter"}),e.jsxs(p,{children:[e.jsx(n,{children:e.jsx(t,{href:"/",children:"Forsiden"})}),e.jsx(n,{children:e.jsx(t,{href:"/aktiviteter",children:"Aktiviteter"})}),e.jsx(n,{children:e.jsx(t,{href:"/aktiviteter/leksehjelp",children:"Leksehjelp"})})]})]}),args:{"aria-label":"Du er her:"},play:async({canvasElement:r})=>{const s=B(r);await v(()=>a(s.getByRole("navigation",{name:"Du er her:"})).toBeInTheDocument());const i=r.querySelector(".ds-breadcrumbs > a");a(i).toHaveAttribute("aria-label","Tilbake til aktiviteter"),a(i).toHaveAttribute("href","/aktiviteter"),a(i).not.toBeVisible();const o=s.getByRole("link",{name:"Leksehjelp"});await v(()=>a(o).toHaveAttribute("aria-current","page")),a(i).not.toHaveAttribute("aria-current")}},m={name:"Test: Back Button Only Variant",render:r=>e.jsx(c,{...r,children:e.jsx(t,{"aria-label":"Tilbake til aktiviteter",href:"/aktiviteter",children:"Aktiviteter"})}),args:{"aria-label":"Du er her:"},play:async({canvasElement:r})=>{const s=B(r),i=s.getByRole("link",{name:"Tilbake til aktiviteter"});a(i).toHaveAttribute("href","/aktiviteter"),a(i).not.toHaveAttribute("aria-current");const o=r.querySelector(".ds-breadcrumbs");await v(()=>a(o).not.toHaveAttribute("role")),a(s.queryByRole("navigation")).not.toBeInTheDocument()}},ee=["OnlyBackButton","OnlyPath","BackAndPath","LargeBrand2","TestPathSemantics","TestBackButtonAndPath","TestBackButtonOnly"];var L,f,j;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: 'Example Only Back Button',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">
        Nivå 3
      </BreadcrumbsLink>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(j=(f=u.parameters)==null?void 0:f.docs)==null?void 0:j.source}}};var A,T,w;b.parameters={...b.parameters,docs:{...(A=b.parameters)==null?void 0:A.docs,source:{originalSource:`{
  name: 'Example Only Path',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/">Nivå 1</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-2/">Nivå 2</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-3/">Nivå 3</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 4</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(w=(T=b.parameters)==null?void 0:T.docs)==null?void 0:w.source}}};var I,E,H;h.parameters={...h.parameters,docs:{...(I=h.parameters)==null?void 0:I.docs,source:{originalSource:`{
  name: 'Example Back Button and Path',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">
        Nivå 3
      </BreadcrumbsLink>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/">Nivå 1</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-2/">Nivå 2</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="https://designsystemet.no/niva-3/">Nivå 3</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 4</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(H=(E=h.parameters)==null?void 0:E.docs)==null?void 0:H.source}}};var N,D,S;k.parameters={...k.parameters,docs:{...(N=k.parameters)==null?void 0:N.docs,source:{originalSource:`{
  name: 'Example Custom Size and Color',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 1</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 2</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="#">Nivå 3</BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:',
    'data-size': 'lg',
    'data-color': 'additional-color-ocean'
  }
}`,...(S=(D=k.parameters)==null?void 0:D.docs)==null?void 0:S.source}}};var O,R,P,F,C;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Test: Path Semantics And Current Page',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/">Forsiden</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/aktiviteter">Aktiviteter</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/aktiviteter/besokstjenesten">
            Besøkstjenesten
          </BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The custom element upgrades itself to a named navigation landmark
    const nav = await waitFor(() => canvas.getByRole('navigation', {
      name: 'Du er her:'
    }));

    // The trail is an ordered list of three items
    const list = within(nav).getByRole('list');
    expect(list.tagName).toBe('OL');
    expect(within(list).getAllByRole('listitem')).toHaveLength(3);

    // Each crumb is a real link with its href
    const home = canvas.getByRole('link', {
      name: 'Forsiden'
    });
    const activities = canvas.getByRole('link', {
      name: 'Aktiviteter'
    });
    const current = canvas.getByRole('link', {
      name: 'Besøkstjenesten'
    });
    expect(home).toHaveAttribute('href', '/');
    expect(activities).toHaveAttribute('href', '/aktiviteter');
    expect(current).toHaveAttribute('href', '/aktiviteter/besokstjenesten');

    // Only the last link is marked as the current page
    await waitFor(() => expect(current).toHaveAttribute('aria-current', 'page'));
    expect(home).not.toHaveAttribute('aria-current');
    expect(activities).not.toHaveAttribute('aria-current');
  }
}`,...(P=(R=l.parameters)==null?void 0:R.docs)==null?void 0:P.source},description:{story:`Tests the breadcrumb trail semantics set up by the ds-breadcrumbs element:
it becomes a navigation landmark named by aria-label, the trail is an
ordered list of links with real hrefs, and only the last (current) link is
marked with aria-current="page".`,...(C=(F=l.parameters)==null?void 0:F.docs)==null?void 0:C.description}}};var _,q,z,V,M;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`{
  name: 'Test: Back Button And Path',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til aktiviteter" href="/aktiviteter">
        Aktiviteter
      </BreadcrumbsLink>
      <BreadcrumbsList>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/">Forsiden</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/aktiviteter">Aktiviteter</BreadcrumbsLink>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <BreadcrumbsLink href="/aktiviteter/leksehjelp">
            Leksehjelp
          </BreadcrumbsLink>
        </BreadcrumbsItem>
      </BreadcrumbsList>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Landmark is present since the trail list is rendered
    await waitFor(() => expect(canvas.getByRole('navigation', {
      name: 'Du er her:'
    })).toBeInTheDocument());

    // The back link keeps its aria-label and href, but is CSS-hidden on
    // desktop viewports where the full trail is shown instead
    const backLink = canvasElement.querySelector('.ds-breadcrumbs > a') as HTMLAnchorElement;
    expect(backLink).toHaveAttribute('aria-label', 'Tilbake til aktiviteter');
    expect(backLink).toHaveAttribute('href', '/aktiviteter');
    expect(backLink).not.toBeVisible();

    // aria-current lands on the last trail link, never on the back link
    const current = canvas.getByRole('link', {
      name: 'Leksehjelp'
    });
    await waitFor(() => expect(current).toHaveAttribute('aria-current', 'page'));
    expect(backLink).not.toHaveAttribute('aria-current');
  }
}`,...(z=(q=d.parameters)==null?void 0:q.docs)==null?void 0:z.source},description:{story:`Tests the combined variant with a back button in front of the trail. The
design is responsive: on viewports >= 650px the trail list is shown and the
back link is hidden with CSS; below 650px it is the other way around. The
tests run on a desktop viewport, so the back link is present in the DOM
(with aria-label and href intact) but not visible, and aria-current lands
on the last trail link - never on the back link.`,...(M=(V=d.parameters)==null?void 0:V.docs)==null?void 0:M.description}}};var $,K,U,W,Y;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Test: Back Button Only Variant',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til aktiviteter" href="/aktiviteter">
        Aktiviteter
      </BreadcrumbsLink>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // The back link is accessible with name and href
    const backLink = canvas.getByRole('link', {
      name: 'Tilbake til aktiviteter'
    });
    expect(backLink).toHaveAttribute('href', '/aktiviteter');
    expect(backLink).not.toHaveAttribute('aria-current');

    // Without a trail list, ds-breadcrumbs removes the navigation role and
    // aria-label from the wrapper (upstream designsystemet-web behavior:
    // a lone back button is not announced as a nav landmark)
    const wrapper = canvasElement.querySelector('.ds-breadcrumbs') as HTMLElement;
    await waitFor(() => expect(wrapper).not.toHaveAttribute('role'));
    expect(canvas.queryByRole('navigation')).not.toBeInTheDocument();
  }
}`,...(U=(K=m.parameters)==null?void 0:K.docs)==null?void 0:U.source},description:{story:`Tests the back-button-only variant: with no trail list, the ds-breadcrumbs
element intentionally does NOT expose a navigation landmark (upstream
behavior in designsystemet-web) - only the named back link itself remains.`,...(Y=(W=m.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};const ae=Object.freeze(Object.defineProperty({__proto__:null,BackAndPath:h,LargeBrand2:k,OnlyBackButton:u,OnlyPath:b,TestBackButtonAndPath:d,TestBackButtonOnly:m,TestPathSemantics:l,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{ae as B,k as L,b as O,u as a,h as b};
