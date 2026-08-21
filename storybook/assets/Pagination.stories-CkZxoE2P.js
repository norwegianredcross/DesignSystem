import{r as m,j as e}from"./iframe-DOuYXn54.js";import{a0 as Y,a1 as G,a2 as J,a3 as Q,a4 as X}from"./tooltip-ByhArDbt.js";import{L as B}from"./index-BjSklAlW.js";const Z=({currentPage:n=1,setCurrentPage:a,onChange:l,totalPages:i=1,showPages:c=7})=>m.useMemo(()=>{const{next:d,prev:o,pages:s}=Y({current:n,total:i,show:c}),r=u=>p=>{if(u<1||u>i)return p.preventDefault();l==null||l(p,u),p.defaultPrevented||a==null||a(u)};return{pages:s.map(({page:u,current:p},S)=>({page:u||"ellipsis",itemKey:u?`page-${u}`:`ellipsis-${S}`,buttonProps:u?{"aria-current":p?"true":void 0,onClick:r(u)}:null})),prevButtonProps:{"aria-hidden":!o,onClick:r(o),variant:"tertiary"},nextButtonProps:{"aria-hidden":!d,onClick:r(d),variant:"tertiary"},hasPrev:!!o,hasNext:!!d}},[n,i,c]),t=G,_=J,k=Q,L=X,x=Z;t.displayName="Pagination";try{t.displayName="Pagination",t.__docgenInfo={description:"",displayName:"Pagination",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:{value:"'Bla i sider'"},description:"Sets the screen reader label for the Pagination area",name:"aria-label",required:!1,type:{name:"string"}},"data-current":{defaultValue:null,description:"Current page number",name:"data-current",required:!1,type:{name:"string"}},"data-total":{defaultValue:null,description:"Total number of pages",name:"data-total",required:!1,type:{name:"string"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.\n@deprecated This is not supported anymore, as the element needs to be `ds-pagination`",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="PaginationList",_.__docgenInfo={description:"",displayName:"PaginationList",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{k.displayName="PaginationItem",k.__docgenInfo={description:"",displayName:"PaginationItem",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{L.displayName="PaginationButton",L.__docgenInfo={description:"",displayName:"PaginationButton",props:{"aria-current":{defaultValue:{value:"false"},description:`Toggle button as active
Indicates the element that represents the current item within a container or set of related elements.`,name:"aria-current",required:!1,type:{name:'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"'}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:"Change the color scheme of the button",name:"data-color",required:!1,type:{name:"any"}},command:{defaultValue:null,description:`Native invoker commands. Specifies actions to perform on an element specified by commandfor. Polyfilled by designsystemet-web and includes a custom --show-non-modal command.
"show-modal", "close", "request-close", "show-popover", "hide-popover", "toggle-popover", "--show-non-modal"`,name:"command",required:!1,type:{name:"string"}},commandfor:{defaultValue:null,description:`Specifies the target element for "command".
value is ID of target`,name:"commandfor",required:!1,type:{name:"string"}},commandFor:{defaultValue:null,description:"",name:"commandFor",required:!1,type:{name:"string"}},type:{defaultValue:{value:"'button'"},description:"Specify the type of button. Unset when `asChild` is true",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:"'primary'"},description:"Specify which variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const{expect:g,within:C,userEvent:I,waitFor:j}=__STORYBOOK_MODULE_TEST__,ee={title:"Components/Pagination",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},P={render:n=>{const[a,l]=m.useState(4),i=10,{pages:c,prevButtonProps:d,nextButtonProps:o}=x({currentPage:a,totalPages:i,onChange:(s,r)=>l(r)});return e.jsx(t,{...n,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Forrige side",children:"Forrige"})}),c.map(({page:s,itemKey:r,buttonProps:u})=>e.jsx(t.Item,{children:typeof s=="number"?e.jsx(t.Button,{...u,"aria-label":`Side ${s}`,children:s}):e.jsx("span",{children:"..."})},r)),e.jsx(t.Item,{children:e.jsx(t.Button,{...o,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},h={render:n=>{const[a]=m.useState(4),l=10,{pages:i,prevButtonProps:c,nextButtonProps:d}=x({currentPage:a,totalPages:l}),o=s=>typeof s=="number"?`#/page-${s}`:"#";return e.jsx(t,{...n,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...c,asChild:!0,"aria-label":"Forrige side",children:e.jsx(B,{href:o(a-1),children:"Forrige"})})}),i.map(({page:s,itemKey:r,buttonProps:u})=>e.jsx(t.Item,{children:typeof s=="number"?e.jsx(t.Button,{...u,asChild:!0,"aria-label":`Side ${s}`,children:e.jsx(B,{href:o(s),children:s})}):e.jsx("span",{children:"..."})},r)),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,asChild:!0,"aria-label":"Neste side",children:e.jsx(B,{href:o(a+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"primary-color-red","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"},b={render:n=>{const[a,l]=m.useState(6),i=12,{pages:c,prevButtonProps:d,nextButtonProps:o}=x({currentPage:a,totalPages:i,onChange:(r,u)=>l(u)}),s=new Set([a-1,a,a+1]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(t,{...n,"aria-label":"Sidenavigering (mobil)",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Forrige side",children:"Forrige"})}),c.map(({page:r,itemKey:u,buttonProps:p},S)=>typeof r=="number"?s.has(r)?e.jsx(t.Item,{children:e.jsx(t.Button,{...p,"aria-label":`Side ${r}`,children:r})},u):r===1||r===i?e.jsx(t.Item,{children:e.jsx(t.Button,{...p,"aria-label":`Side ${r}`,children:r})},u):r<a-1&&S===1||r>a+1&&S>c.length-3?e.jsx(t.Item,{children:e.jsx("span",{children:"…"})},u):null:null),e.jsx(t.Item,{children:e.jsx(t.Button,{...o,"aria-label":"Neste side",children:"Neste"})})]})})})},args:{"data-size":"md","data-color":"neutral"},name:"Mobile (Truncated)"},f={name:"Test: Interaction",render:()=>{const[n,a]=m.useState(1),l=5,{pages:i,prevButtonProps:c,nextButtonProps:d}=x({currentPage:n,totalPages:l,onChange:(o,s)=>a(s)});return e.jsx(t,{"aria-label":"Sidenavigering",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...c,"aria-label":"Forrige side",children:"Forrige"})}),i.map(({page:o,itemKey:s,buttonProps:r})=>e.jsx(t.Item,{children:typeof o=="number"?e.jsx(t.Button,{...r,"aria-label":`Side ${o}`,children:o}):e.jsx("span",{children:"..."})},s)),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})},play:async({canvasElement:n})=>{const a=C(n),l=a.getByRole("button",{name:/side 1/i});g(l).toHaveAttribute("aria-current","true");const i=n.querySelector('button[aria-label="Forrige side"]');g(i).toHaveAttribute("aria-hidden","true");const c=a.getByRole("button",{name:/neste/i});await I.click(c),await j(()=>{const o=a.getByRole("button",{name:/side 2/i});g(o).toHaveAttribute("aria-current","true")}),g(i).toHaveAttribute("aria-hidden","false");const d=a.getByRole("button",{name:/side 4/i});await I.click(d),await j(()=>{g(d).toHaveAttribute("aria-current","true")})}},v={name:"Test: Boundary Navigation",render:()=>{const[n,a]=m.useState(1),{pages:l,prevButtonProps:i,nextButtonProps:c}=x({currentPage:n,totalPages:5,onChange:(d,o)=>a(o)});return e.jsx(t,{"aria-label":"Resultatsider",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...i,"aria-label":"Forrige side",children:"Forrige"})}),l.map(({page:d,itemKey:o,buttonProps:s})=>e.jsx(t.Item,{children:typeof d=="number"?e.jsx(t.Button,{...s,"aria-label":`Side ${d}`,children:d}):e.jsx("span",{"aria-hidden":!0,children:"…"})},o)),e.jsx(t.Item,{children:e.jsx(t.Button,{...c,"aria-label":"Neste side",children:"Neste"})})]})})},play:async({canvasElement:n})=>{const a=C(n);g(a.getByRole("navigation",{name:"Resultatsider"})).toBeInTheDocument();const l=n.querySelector('button[aria-label="Forrige side"]'),i=a.getByRole("button",{name:"Neste side"});g(l).toHaveAttribute("aria-hidden","true"),await I.click(a.getByRole("button",{name:"Side 5"})),await j(()=>{g(a.getByRole("button",{name:"Side 5"})).toHaveAttribute("aria-current","true"),g(i).toHaveAttribute("aria-hidden","true")});const c=a.getByRole("button",{name:"Forrige side"});await I.click(c),await j(()=>g(a.getByRole("button",{name:"Side 4"})).toHaveAttribute("aria-current","true")),g(i).toHaveAttribute("aria-hidden","false")}},y={name:"Test: Link Rendering Contract",render:()=>e.jsx(t,{"aria-label":"Lenkebaserte sider",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{asChild:!0,"aria-current":"page",children:e.jsx(B,{href:"#side-2",children:"Side 2"})})}),e.jsx(t.Item,{children:e.jsx(t.Button,{asChild:!0,children:e.jsx(B,{href:"#side-3",children:"Side 3"})})})]})}),play:async({canvasElement:n})=>{const a=C(n),l=a.getByRole("link",{name:"Side 2"}),i=a.getByRole("link",{name:"Side 3"});g(l).toHaveAttribute("href","#side-2"),g(l).toHaveAttribute("aria-current","page"),g(i).toHaveAttribute("href","#side-3"),g(i).not.toHaveAttribute("aria-current")}};var w,N,R;P.parameters={...P.parameters,docs:{...(w=P.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(4);
    const totalPages = 10;
    const {
      pages,
      prevButtonProps,
      nextButtonProps
    } = usePagination({
      currentPage,
      totalPages,
      onChange: (_e, page) => setCurrentPage(page)
    });
    return <Pagination {...args}>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button {...prevButtonProps} aria-label="Forrige side">
              Forrige
            </Pagination.Button>
          </Pagination.Item>

          {pages.map(({
          page,
          itemKey,
          buttonProps
        }) => <Pagination.Item key={itemKey}>
              {typeof page === 'number' ? <Pagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>
                  {page}
                </Pagination.Button> : <span>...</span>}
            </Pagination.Item>)}

          <Pagination.Item>
            <Pagination.Button {...nextButtonProps} aria-label="Neste side">
              Neste
            </Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral',
    'aria-label': 'Sidenavigering'
  }
}`,...(R=(N=P.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var H,F,A;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => {
    const [currentPage] = useState(4);
    const totalPages = 10;
    const {
      pages,
      prevButtonProps,
      nextButtonProps
    } = usePagination({
      currentPage,
      totalPages
    });
    const generateHref = (page: number | string | undefined) => {
      if (typeof page === 'number') return \`#/page-\${page}\`;
      return '#';
    };
    return <Pagination {...args}>
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button {...prevButtonProps} asChild aria-label="Forrige side">
              <Link href={generateHref(currentPage - 1)}>Forrige</Link>
            </Pagination.Button>
          </Pagination.Item>

          {pages.map(({
          page,
          itemKey,
          buttonProps
        }) => <Pagination.Item key={itemKey}>
              {typeof page === 'number' ? <Pagination.Button {...buttonProps} asChild aria-label={\`Side \${page}\`}>
                  <Link href={generateHref(page)}>{page}</Link>
                </Pagination.Button> : <span>...</span>}
            </Pagination.Item>)}

          <Pagination.Item>
            <Pagination.Button {...nextButtonProps} asChild aria-label="Neste side">
              <Link href={generateHref(currentPage + 1)}>Neste</Link>
            </Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'primary-color-red',
    'aria-label': 'Sidenavigering (lenker)'
  },
  name: 'With Links (asChild)'
}`,...(A=(F=h.parameters)==null?void 0:F.docs)==null?void 0:A.source}}};var T,q,V;b.parameters={...b.parameters,docs:{...(T=b.parameters)==null?void 0:T.docs,source:{originalSource:`{
  render: args => {
    const [currentPage, setCurrentPage] = useState(6);
    const totalPages = 12;
    const {
      pages,
      prevButtonProps,
      nextButtonProps
    } = usePagination({
      currentPage,
      totalPages,
      onChange: (_e, page) => setCurrentPage(page)
    });

    // Show only current and ±1, keep ellipsis at ends
    const visibleSet = new Set([currentPage - 1, currentPage, currentPage + 1]);
    return <div style={{
      maxWidth: 320
    }}>
        <Pagination {...args} aria-label="Sidenavigering (mobil)">
          <Pagination.List>
            <Pagination.Item>
              <Pagination.Button {...prevButtonProps} aria-label="Forrige side">
                Forrige
              </Pagination.Button>
            </Pagination.Item>

            {pages.map(({
            page,
            itemKey,
            buttonProps
          }, idx) => {
            if (typeof page === 'number') {
              if (!visibleSet.has(page)) {
                // Show first and last pages as anchors
                if (page === 1 || page === totalPages) {
                  return <Pagination.Item key={itemKey}>
                        <Pagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>
                          {page}
                        </Pagination.Button>
                      </Pagination.Item>;
                }
                // Replace hidden ranges by sparse ellipsis
                if (page < currentPage - 1 && idx === 1 || page > currentPage + 1 && idx > pages.length - 3) {
                  return <Pagination.Item key={itemKey}>
                        <span>…</span>
                      </Pagination.Item>;
                }
                return null;
              }
              return <Pagination.Item key={itemKey}>
                    <Pagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>
                      {page}
                    </Pagination.Button>
                  </Pagination.Item>;
            }
            // Condense generic ellipsis in mobile
            return null;
          })}

            <Pagination.Item>
              <Pagination.Button {...nextButtonProps} aria-label="Neste side">
                Neste
              </Pagination.Button>
            </Pagination.Item>
          </Pagination.List>
        </Pagination>
      </div>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Mobile (Truncated)'
}`,...(V=(q=b.parameters)==null?void 0:q.docs)==null?void 0:V.source}}};var $,z,E;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
  name: 'Test: Interaction',
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 5;
    const {
      pages,
      prevButtonProps,
      nextButtonProps
    } = usePagination({
      currentPage,
      totalPages,
      onChange: (_e, page) => setCurrentPage(page)
    });
    return <Pagination aria-label="Sidenavigering">
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button {...prevButtonProps} aria-label="Forrige side">
              Forrige
            </Pagination.Button>
          </Pagination.Item>
          {pages.map(({
          page,
          itemKey,
          buttonProps
        }) => <Pagination.Item key={itemKey}>
              {typeof page === 'number' ? <Pagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>
                  {page}
                </Pagination.Button> : <span>...</span>}
            </Pagination.Item>)}
          <Pagination.Item>
            <Pagination.Button {...nextButtonProps} aria-label="Neste side">
              Neste
            </Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Page 1 should be current
    const page1 = canvas.getByRole('button', {
      name: /side 1/i
    });
    expect(page1).toHaveAttribute('aria-current', 'true');

    // Previous button is aria-hidden on first page
    const prevButton = canvasElement.querySelector('button[aria-label="Forrige side"]') as HTMLButtonElement;
    expect(prevButton).toHaveAttribute('aria-hidden', 'true');

    // Click next
    const nextButton = canvas.getByRole('button', {
      name: /neste/i
    });
    await userEvent.click(nextButton);

    // Page 2 should now be current
    await waitFor(() => {
      const page2 = canvas.getByRole('button', {
        name: /side 2/i
      });
      expect(page2).toHaveAttribute('aria-current', 'true');
    });

    // Previous should now be visible (not aria-hidden)
    expect(prevButton).toHaveAttribute('aria-hidden', 'false');

    // Click a specific page
    const page4 = canvas.getByRole('button', {
      name: /side 4/i
    });
    await userEvent.click(page4);
    await waitFor(() => {
      expect(page4).toHaveAttribute('aria-current', 'true');
    });
  }
}`,...(E=(z=f.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var D,K,M;v.parameters={...v.parameters,docs:{...(D=v.parameters)==null?void 0:D.docs,source:{originalSource:`{
  name: 'Test: Boundary Navigation',
  render: () => {
    const [currentPage, setCurrentPage] = useState(1);
    const {
      pages,
      prevButtonProps,
      nextButtonProps
    } = usePagination({
      currentPage,
      totalPages: 5,
      onChange: (_event, page) => setCurrentPage(page)
    });
    return <Pagination aria-label="Resultatsider">
        <Pagination.List>
          <Pagination.Item>
            <Pagination.Button {...prevButtonProps} aria-label="Forrige side">
              Forrige
            </Pagination.Button>
          </Pagination.Item>
          {pages.map(({
          page,
          itemKey,
          buttonProps
        }) => <Pagination.Item key={itemKey}>
              {typeof page === 'number' ? <Pagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>
                  {page}
                </Pagination.Button> : <span aria-hidden>…</span>}
            </Pagination.Item>)}
          <Pagination.Item>
            <Pagination.Button {...nextButtonProps} aria-label="Neste side">
              Neste
            </Pagination.Button>
          </Pagination.Item>
        </Pagination.List>
      </Pagination>;
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByRole('navigation', {
      name: 'Resultatsider'
    })).toBeInTheDocument();
    const previous = canvasElement.querySelector('button[aria-label="Forrige side"]') as HTMLButtonElement;
    const next = canvas.getByRole('button', {
      name: 'Neste side'
    });
    expect(previous).toHaveAttribute('aria-hidden', 'true');
    await userEvent.click(canvas.getByRole('button', {
      name: 'Side 5'
    }));
    await waitFor(() => {
      expect(canvas.getByRole('button', {
        name: 'Side 5'
      })).toHaveAttribute('aria-current', 'true');
      expect(next).toHaveAttribute('aria-hidden', 'true');
    });
    const visiblePrevious = canvas.getByRole('button', {
      name: 'Forrige side'
    });
    await userEvent.click(visiblePrevious);
    await waitFor(() => expect(canvas.getByRole('button', {
      name: 'Side 4'
    })).toHaveAttribute('aria-current', 'true'));
    expect(next).toHaveAttribute('aria-hidden', 'false');
  }
}`,...(M=(K=v.parameters)==null?void 0:K.docs)==null?void 0:M.source}}};var O,W,U;y.parameters={...y.parameters,docs:{...(O=y.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: 'Test: Link Rendering Contract',
  render: () => <Pagination aria-label="Lenkebaserte sider">
      <Pagination.List>
        <Pagination.Item>
          <Pagination.Button asChild aria-current="page">
            <Link href="#side-2">Side 2</Link>
          </Pagination.Button>
        </Pagination.Item>
        <Pagination.Item>
          <Pagination.Button asChild>
            <Link href="#side-3">Side 3</Link>
          </Pagination.Button>
        </Pagination.Item>
      </Pagination.List>
    </Pagination>,
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const current = canvas.getByRole('link', {
      name: 'Side 2'
    });
    const next = canvas.getByRole('link', {
      name: 'Side 3'
    });
    expect(current).toHaveAttribute('href', '#side-2');
    expect(current).toHaveAttribute('aria-current', 'page');
    expect(next).toHaveAttribute('href', '#side-3');
    expect(next).not.toHaveAttribute('aria-current');
  }
}`,...(U=(W=y.parameters)==null?void 0:W.docs)==null?void 0:U.source}}};const te=["Default","WithLinks","Mobile","TestInteraction","TestBoundaryNavigation","TestLinkRenderingContract"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:P,Mobile:b,TestBoundaryNavigation:v,TestInteraction:f,TestLinkRenderingContract:y,WithLinks:h,__namedExportsOrder:te,default:ee},Symbol.toStringTag,{value:"Module"}));export{P as D,re as P,h as W};
