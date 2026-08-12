import{j as e}from"./iframe-CNNBmUgz.js";import{w as G,x as J,y as Q,z as X}from"./tooltip-CVfOwc-y.js";const i=G,o=Q,a=X,t=J;try{i.displayName="Breadcrumbs",i.__docgenInfo={description:"",displayName:"Breadcrumbs",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:{value:"'Du er her'"},description:"Sets the screen reader label for the Breadcrumbs area",name:"aria-label",required:!1,type:{name:"string"}}}}}catch{}try{o.displayName="BreadcrumbsList",o.__docgenInfo={description:"",displayName:"BreadcrumbsList",props:{}}}catch{}try{a.displayName="BreadcrumbsItem",a.__docgenInfo={description:"",displayName:"BreadcrumbsItem",props:{}}}catch{}try{t.displayName="BreadcrumbsLink",t.__docgenInfo={description:"",displayName:"BreadcrumbsLink",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const{expect:s,within:p,waitFor:v}=__STORYBOOK_MODULE_TEST__,Z={title:"Components/Breadcrumbs",component:i,tags:["autodocs"],argTypes:{"aria-label":{control:"text",description:"Sets the screen reader label for the Breadcrumbs area",defaultValue:"Du er her"},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"accent"}}},b={name:"Example Only Back Button",render:r=>e.jsx(i,{...r,children:e.jsx(t,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"})}),args:{"aria-label":"Du er her:"}},h={name:"Example Only Path",render:r=>e.jsx(i,{...r,children:e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(t,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(a,{children:e.jsx(t,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(a,{children:e.jsx(t,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(a,{children:e.jsx(t,{href:"#",children:"Nivå 4"})})]})}),args:{"aria-label":"Du er her:"}},k={name:"Example Back Button and Path",render:r=>e.jsxs(i,{...r,children:[e.jsx(t,{"aria-label":"Tilbake til nivå 3",href:"/niva-3",children:"Nivå 3"}),e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(t,{href:"https://designsystemet.no/",children:"Nivå 1"})}),e.jsx(a,{children:e.jsx(t,{href:"https://designsystemet.no/niva-2/",children:"Nivå 2"})}),e.jsx(a,{children:e.jsx(t,{href:"https://designsystemet.no/niva-3/",children:"Nivå 3"})}),e.jsx(a,{children:e.jsx(t,{href:"#",children:"Nivå 4"})})]})]}),args:{"aria-label":"Du er her:"}},B={name:"Example Custom Size and Color",render:r=>e.jsx(i,{...r,children:e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(t,{href:"#",children:"Nivå 1"})}),e.jsx(a,{children:e.jsx(t,{href:"#",children:"Nivå 2"})}),e.jsx(a,{children:e.jsx(t,{href:"#",children:"Nivå 3"})})]})}),args:{"aria-label":"Du er her:","data-size":"lg","data-color":"brand2"}},l={name:"Test: Path Semantics And Current Page",render:r=>e.jsx(i,{...r,children:e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(t,{href:"/",children:"Forsiden"})}),e.jsx(a,{children:e.jsx(t,{href:"/aktiviteter",children:"Aktiviteter"})}),e.jsx(a,{children:e.jsx(t,{href:"/aktiviteter/besokstjenesten",children:"Besøkstjenesten"})})]})}),args:{"aria-label":"Du er her:"},play:async({canvasElement:r})=>{const n=p(r),c=await v(()=>n.getByRole("navigation",{name:"Du er her:"})),d=p(c).getByRole("list");s(d.tagName).toBe("OL"),s(p(d).getAllByRole("listitem")).toHaveLength(3);const g=n.getByRole("link",{name:"Forsiden"}),y=n.getByRole("link",{name:"Aktiviteter"}),f=n.getByRole("link",{name:"Besøkstjenesten"});s(g).toHaveAttribute("href","/"),s(y).toHaveAttribute("href","/aktiviteter"),s(f).toHaveAttribute("href","/aktiviteter/besokstjenesten"),await v(()=>s(f).toHaveAttribute("aria-current","page")),s(g).not.toHaveAttribute("aria-current"),s(y).not.toHaveAttribute("aria-current")}},m={name:"Test: Back Button And Path",render:r=>e.jsxs(i,{...r,children:[e.jsx(t,{"aria-label":"Tilbake til aktiviteter",href:"/aktiviteter",children:"Aktiviteter"}),e.jsxs(o,{children:[e.jsx(a,{children:e.jsx(t,{href:"/",children:"Forsiden"})}),e.jsx(a,{children:e.jsx(t,{href:"/aktiviteter",children:"Aktiviteter"})}),e.jsx(a,{children:e.jsx(t,{href:"/aktiviteter/leksehjelp",children:"Leksehjelp"})})]})]}),args:{"aria-label":"Du er her:"},play:async({canvasElement:r})=>{const n=p(r);await v(()=>s(n.getByRole("navigation",{name:"Du er her:"})).toBeInTheDocument());const c=r.querySelector(".ds-breadcrumbs > a");s(c).toHaveAttribute("aria-label","Tilbake til aktiviteter"),s(c).toHaveAttribute("href","/aktiviteter"),s(c).not.toBeVisible();const d=n.getByRole("link",{name:"Leksehjelp"});await v(()=>s(d).toHaveAttribute("aria-current","page")),s(c).not.toHaveAttribute("aria-current")}},u={name:"Test: Back Button Only Variant",render:r=>e.jsx(i,{...r,children:e.jsx(t,{"aria-label":"Tilbake til aktiviteter",href:"/aktiviteter",children:"Aktiviteter"})}),args:{"aria-label":"Du er her:"},play:async({canvasElement:r})=>{const n=p(r),c=n.getByRole("link",{name:"Tilbake til aktiviteter"});s(c).toHaveAttribute("href","/aktiviteter"),s(c).not.toHaveAttribute("aria-current");const d=r.querySelector(".ds-breadcrumbs");await v(()=>s(d).not.toHaveAttribute("role")),s(n.queryByRole("navigation")).not.toBeInTheDocument()}};var x,L,j;b.parameters={...b.parameters,docs:{...(x=b.parameters)==null?void 0:x.docs,source:{originalSource:`{
  name: 'Example Only Back Button',
  render: args => <Breadcrumbs {...args}>
      <BreadcrumbsLink aria-label="Tilbake til nivå 3" href="/niva-3">
        Nivå 3
      </BreadcrumbsLink>
    </Breadcrumbs>,
  args: {
    'aria-label': 'Du er her:'
  }
}`,...(j=(L=b.parameters)==null?void 0:L.docs)==null?void 0:j.source}}};var A,I,w;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(w=(I=h.parameters)==null?void 0:I.docs)==null?void 0:w.source}}};var T,_,N;k.parameters={...k.parameters,docs:{...(T=k.parameters)==null?void 0:T.docs,source:{originalSource:`{
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
}`,...(N=(_=k.parameters)==null?void 0:_.docs)==null?void 0:N.source}}};var S,D,H;B.parameters={...B.parameters,docs:{...(S=B.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
    'data-color': 'brand2'
  }
}`,...(H=(D=B.parameters)==null?void 0:D.docs)==null?void 0:H.source}}};var O,R,E,C,P;l.parameters={...l.parameters,docs:{...(O=l.parameters)==null?void 0:O.docs,source:{originalSource:`{
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
}`,...(E=(R=l.parameters)==null?void 0:R.docs)==null?void 0:E.source},description:{story:`Tests the breadcrumb trail semantics set up by the ds-breadcrumbs element:
it becomes a navigation landmark named by aria-label, the trail is an
ordered list of links with real hrefs, and only the last (current) link is
marked with aria-current="page".`,...(P=(C=l.parameters)==null?void 0:C.docs)==null?void 0:P.description}}};var z,V,q,F,M;m.parameters={...m.parameters,docs:{...(z=m.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(q=(V=m.parameters)==null?void 0:V.docs)==null?void 0:q.source},description:{story:`Tests the combined variant with a back button in front of the trail. The
design is responsive: on viewports >= 650px the trail list is shown and the
back link is hidden with CSS; below 650px it is the other way around. The
tests run on a desktop viewport, so the back link is present in the DOM
(with aria-label and href intact) but not visible, and aria-current lands
on the last trail link - never on the back link.`,...(M=(F=m.parameters)==null?void 0:F.docs)==null?void 0:M.description}}};var $,K,U,W,Y;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(U=(K=u.parameters)==null?void 0:K.docs)==null?void 0:U.source},description:{story:`Tests the back-button-only variant: with no trail list, the ds-breadcrumbs
element intentionally does NOT expose a navigation landmark (upstream
behavior in designsystemet-web) - only the named back link itself remains.`,...(Y=(W=u.parameters)==null?void 0:W.docs)==null?void 0:Y.description}}};const ee=["OnlyBackButton","OnlyPath","BackAndPath","LargeBrand2","TestPathSemantics","TestBackButtonAndPath","TestBackButtonOnly"],ae=Object.freeze(Object.defineProperty({__proto__:null,BackAndPath:k,LargeBrand2:B,OnlyBackButton:b,OnlyPath:h,TestBackButtonAndPath:m,TestBackButtonOnly:u,TestPathSemantics:l,__namedExportsOrder:ee,default:Z},Symbol.toStringTag,{value:"Module"}));export{ae as B,B as L,h as O,b as a,k as b};
