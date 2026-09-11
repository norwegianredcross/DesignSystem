import{r as P,j as n}from"./iframe--tL_cLjH.js";import{W as q,X as V}from"./tooltip-IPEz1hAh.js";import{L as y}from"./index-CGQK2XIk.js";const U=({currentPage:s=1,setCurrentPage:t,onChange:u,totalPages:a=1,showPages:g=7})=>P.useMemo(()=>{const{next:c,prev:r,pages:o}=q({current:s,total:a,show:g}),i=l=>p=>{if(l<1||l>a)return p.preventDefault();u==null||u(p,l),p.defaultPrevented||t==null||t(l)};return{pages:o.map(({page:l,current:p},S)=>({page:l||"ellipsis",itemKey:l?`page-${l}`:`ellipsis-${S}`,buttonProps:l?{"aria-current":p?"true":void 0,onClick:i(l)}:null})),prevButtonProps:{"aria-hidden":!r,onClick:i(r)},nextButtonProps:{"aria-hidden":!c,onClick:i(c)},hasPrev:!!r,hasNext:!!c}},[s,a,g]),e=V,f=U;e.displayName="Pagination";const{expect:d,within:k,userEvent:j,waitFor:I}=__STORYBOOK_MODULE_TEST__,X={title:"Components/Pagination",component:e,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},m={render:s=>{const[t,u]=P.useState(4),a=10,{pages:g,prevButtonProps:c,nextButtonProps:r}=f({currentPage:t,totalPages:a,onChange:(o,i)=>u(i)});return n.jsx(e,{...s,children:n.jsxs(e.List,{children:[n.jsx(e.Item,{children:n.jsx(e.Button,{...c,"aria-label":"Forrige side",children:"Forrige"})}),g.map(({page:o,itemKey:i,buttonProps:l})=>n.jsx(e.Item,{children:typeof o=="number"?n.jsx(e.Button,{...l,"aria-label":`Side ${o}`,children:o}):n.jsx("span",{children:"..."})},i)),n.jsx(e.Item,{children:n.jsx(e.Button,{...r,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},b={render:s=>{const[t]=P.useState(4),u=10,{pages:a,prevButtonProps:g,nextButtonProps:c}=f({currentPage:t,totalPages:u}),r=o=>typeof o=="number"?`#/page-${o}`:"#";return n.jsx(e,{...s,children:n.jsxs(e.List,{children:[n.jsx(e.Item,{children:n.jsx(e.Button,{...g,asChild:!0,"aria-label":"Forrige side",children:n.jsx(y,{href:r(t-1),children:"Forrige"})})}),a.map(({page:o,itemKey:i,buttonProps:l})=>n.jsx(e.Item,{children:typeof o=="number"?n.jsx(e.Button,{...l,asChild:!0,"aria-label":`Side ${o}`,children:n.jsx(y,{href:r(o),children:o})}):n.jsx("span",{children:"..."})},i)),n.jsx(e.Item,{children:n.jsx(e.Button,{...c,asChild:!0,"aria-label":"Neste side",children:n.jsx(y,{href:r(t+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"primary-color-red","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"},h={render:s=>{const[t,u]=P.useState(6),a=12,{pages:g,prevButtonProps:c,nextButtonProps:r}=f({currentPage:t,totalPages:a,onChange:(i,l)=>u(l)}),o=new Set([t-1,t,t+1]);return n.jsx("div",{style:{maxWidth:320},children:n.jsx(e,{...s,"aria-label":"Sidenavigering (mobil)",children:n.jsxs(e.List,{children:[n.jsx(e.Item,{children:n.jsx(e.Button,{...c,"aria-label":"Forrige side",children:"Forrige"})}),g.map(({page:i,itemKey:l,buttonProps:p},S)=>typeof i=="number"?o.has(i)?n.jsx(e.Item,{children:n.jsx(e.Button,{...p,"aria-label":`Side ${i}`,children:i})},l):i===1||i===a?n.jsx(e.Item,{children:n.jsx(e.Button,{...p,"aria-label":`Side ${i}`,children:i})},l):i<t-1&&S===1||i>t+1&&S>g.length-3?n.jsx(e.Item,{children:n.jsx("span",{children:"…"})},l):null:null),n.jsx(e.Item,{children:n.jsx(e.Button,{...r,"aria-label":"Neste side",children:"Neste"})})]})})})},args:{"data-size":"md","data-color":"neutral"},name:"Mobile (Truncated)"},B={name:"Test: Interaction",render:()=>{const[s,t]=P.useState(1),u=5,{pages:a,prevButtonProps:g,nextButtonProps:c}=f({currentPage:s,totalPages:u,onChange:(r,o)=>t(o)});return n.jsx(e,{"aria-label":"Sidenavigering",children:n.jsxs(e.List,{children:[n.jsx(e.Item,{children:n.jsx(e.Button,{...g,"aria-label":"Forrige side",children:"Forrige"})}),a.map(({page:r,itemKey:o,buttonProps:i})=>n.jsx(e.Item,{children:typeof r=="number"?n.jsx(e.Button,{...i,"aria-label":`Side ${r}`,children:r}):n.jsx("span",{children:"..."})},o)),n.jsx(e.Item,{children:n.jsx(e.Button,{...c,"aria-label":"Neste side",children:"Neste"})})]})})},play:async({canvasElement:s})=>{const t=k(s),u=t.getByRole("button",{name:/side 1/i});d(u).toHaveAttribute("aria-current","true");const a=s.querySelector('button[aria-label="Forrige side"]');d(a).toHaveAttribute("aria-hidden","true");const g=t.getByRole("button",{name:/neste/i});await j.click(g),await I(()=>{const r=t.getByRole("button",{name:/side 2/i});d(r).toHaveAttribute("aria-current","true")}),d(a).toHaveAttribute("aria-hidden","false");const c=t.getByRole("button",{name:/side 4/i});await j.click(c),await I(()=>{d(c).toHaveAttribute("aria-current","true")})}},v={name:"Test: Boundary Navigation",render:()=>{const[s,t]=P.useState(1),{pages:u,prevButtonProps:a,nextButtonProps:g}=f({currentPage:s,totalPages:5,onChange:(c,r)=>t(r)});return n.jsx(e,{"aria-label":"Resultatsider",children:n.jsxs(e.List,{children:[n.jsx(e.Item,{children:n.jsx(e.Button,{...a,"aria-label":"Forrige side",children:"Forrige"})}),u.map(({page:c,itemKey:r,buttonProps:o})=>n.jsx(e.Item,{children:typeof c=="number"?n.jsx(e.Button,{...o,"aria-label":`Side ${c}`,children:c}):n.jsx("span",{"aria-hidden":!0,children:"…"})},r)),n.jsx(e.Item,{children:n.jsx(e.Button,{...g,"aria-label":"Neste side",children:"Neste"})})]})})},play:async({canvasElement:s})=>{const t=k(s);d(t.getByRole("navigation",{name:"Resultatsider"})).toBeInTheDocument();const u=s.querySelector('button[aria-label="Forrige side"]'),a=t.getByRole("button",{name:"Neste side"});d(u).toHaveAttribute("aria-hidden","true"),await j.click(t.getByRole("button",{name:"Side 5"})),await I(()=>{d(t.getByRole("button",{name:"Side 5"})).toHaveAttribute("aria-current","true"),d(a).toHaveAttribute("aria-hidden","true")});const g=t.getByRole("button",{name:"Forrige side"});await j.click(g),await I(()=>d(t.getByRole("button",{name:"Side 4"})).toHaveAttribute("aria-current","true")),d(a).toHaveAttribute("aria-hidden","false")}},x={name:"Test: Link Rendering Contract",render:()=>n.jsx(e,{"aria-label":"Lenkebaserte sider",children:n.jsxs(e.List,{children:[n.jsx(e.Item,{children:n.jsx(e.Button,{asChild:!0,"aria-current":"page",children:n.jsx(y,{href:"#side-2",children:"Side 2"})})}),n.jsx(e.Item,{children:n.jsx(e.Button,{asChild:!0,children:n.jsx(y,{href:"#side-3",children:"Side 3"})})})]})}),play:async({canvasElement:s})=>{const t=k(s),u=t.getByRole("link",{name:"Side 2"}),a=t.getByRole("link",{name:"Side 3"});d(u).toHaveAttribute("href","#side-2"),d(u).toHaveAttribute("aria-current","page"),d(a).toHaveAttribute("href","#side-3"),d(a).not.toHaveAttribute("aria-current")}},Y=["Default","WithLinks","Mobile","TestInteraction","TestBoundaryNavigation","TestLinkRenderingContract"];var L,C,R;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(R=(C=m.parameters)==null?void 0:C.docs)==null?void 0:R.source}}};var H,w,F;b.parameters={...b.parameters,docs:{...(H=b.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(F=(w=b.parameters)==null?void 0:w.docs)==null?void 0:F.source}}};var A,N,T;h.parameters={...h.parameters,docs:{...(A=h.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
}`,...(T=(N=h.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var _,E,$;B.parameters={...B.parameters,docs:{...(_=B.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...($=(E=B.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};var K,z,D;v.parameters={...v.parameters,docs:{...(K=v.parameters)==null?void 0:K.docs,source:{originalSource:`{
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
}`,...(D=(z=v.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};var M,W,O;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...(O=(W=x.parameters)==null?void 0:W.docs)==null?void 0:O.source}}};const Z=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Mobile:h,TestBoundaryNavigation:v,TestInteraction:B,TestLinkRenderingContract:x,WithLinks:b,__namedExportsOrder:Y,default:X},Symbol.toStringTag,{value:"Module"}));export{m as D,Z as P,b as W};
