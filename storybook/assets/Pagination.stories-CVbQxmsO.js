import{r as b,j as e}from"./iframe-Ddg3SACN.js";import{$ as R,a0 as D,a1 as E,a2 as A,a3 as K}from"./tooltip-D-Mh9bHZ.js";import{L as B}from"./index-C37P7QHE.js";const M=({currentPage:s=1,setCurrentPage:n,onChange:u,totalPages:l=1,showPages:c=7})=>b.useMemo(()=>{const{next:d,prev:o,pages:i}=R({current:s,total:l,show:c}),a=r=>g=>{if(r<1||r>l)return g.preventDefault();u==null||u(g,r),g.defaultPrevented||n==null||n(r)};return{pages:i.map(({page:r,current:g},y)=>({page:r||"ellipsis",itemKey:r?`page-${r}`:`ellipsis-${y}`,buttonProps:r?{"aria-current":g?"true":void 0,onClick:a(r)}:null})),prevButtonProps:{"aria-hidden":!o,onClick:a(o),variant:"tertiary"},nextButtonProps:{"aria-hidden":!d,onClick:a(d),variant:"tertiary"},hasPrev:!!o,hasNext:!!d}},[s,l,c]),t=D,x=E,I=A,S=K,v=M;t.displayName="Pagination";try{t.displayName="Pagination",t.__docgenInfo={description:"",displayName:"Pagination",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"aria-label":{defaultValue:{value:"'Bla i sider'"},description:"Sets the screen reader label for the Pagination area",name:"aria-label",required:!1,type:{name:"string"}},"data-current":{defaultValue:null,description:"Current page number",name:"data-current",required:!1,type:{name:"string"}},"data-total":{defaultValue:null,description:"Total number of pages",name:"data-total",required:!1,type:{name:"string"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.\n@deprecated This is not supported anymore, as the element needs to be `ds-pagination`",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{x.displayName="PaginationList",x.__docgenInfo={description:"",displayName:"PaginationList",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{I.displayName="PaginationItem",I.__docgenInfo={description:"",displayName:"PaginationItem",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="PaginationButton",S.__docgenInfo={description:"",displayName:"PaginationButton",props:{"aria-current":{defaultValue:{value:"false"},description:`Toggle button as active
Indicates the element that represents the current item within a container or set of related elements.`,name:"aria-current",required:!1,type:{name:'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"'}},"data-color":{defaultValue:null,description:"Change the color scheme of the button",name:"data-color",required:!1,type:{name:"any"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"'button'"},description:"Specify the type of button. Unset when `asChild` is true",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},command:{defaultValue:null,description:`Native invoker commands. Specifies actions to perform on an element specified by commandfor. Polyfilled by designsystemet-web and includes a custom --show-non-modal command.
"show-modal", "close", "request-close", "show-popover", "hide-popover", "toggle-popover", "--show-non-modal"`,name:"command",required:!1,type:{name:"string"}},commandfor:{defaultValue:null,description:`Specifies the target element for "command".
value is ID of target`,name:"commandfor",required:!1,type:{name:"string"}},commandFor:{defaultValue:null,description:"",name:"commandFor",required:!1,type:{name:"string"}},variant:{defaultValue:{value:"'primary'"},description:"Specify which variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const{expect:p,within:O,userEvent:_,waitFor:j}=__STORYBOOK_MODULE_TEST__,W={title:"Components/Pagination",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},m={render:s=>{const[n,u]=b.useState(4),l=10,{pages:c,prevButtonProps:d,nextButtonProps:o}=v({currentPage:n,totalPages:l,onChange:(i,a)=>u(a)});return e.jsx(t,{...s,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Forrige side",children:"Forrige"})}),c.map(({page:i,itemKey:a,buttonProps:r})=>e.jsx(t.Item,{children:typeof i=="number"?e.jsx(t.Button,{...r,"aria-label":`Side ${i}`,children:i}):e.jsx("span",{children:"..."})},a)),e.jsx(t.Item,{children:e.jsx(t.Button,{...o,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},P={render:s=>{const[n]=b.useState(4),u=10,{pages:l,prevButtonProps:c,nextButtonProps:d}=v({currentPage:n,totalPages:u}),o=i=>typeof i=="number"?`#/page-${i}`:"#";return e.jsx(t,{...s,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...c,asChild:!0,"aria-label":"Forrige side",children:e.jsx(B,{href:o(n-1),children:"Forrige"})})}),l.map(({page:i,itemKey:a,buttonProps:r})=>e.jsx(t.Item,{children:typeof i=="number"?e.jsx(t.Button,{...r,asChild:!0,"aria-label":`Side ${i}`,children:e.jsx(B,{href:o(i),children:i})}):e.jsx("span",{children:"..."})},a)),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,asChild:!0,"aria-label":"Neste side",children:e.jsx(B,{href:o(n+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"accent","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"},h={render:s=>{const[n,u]=b.useState(6),l=12,{pages:c,prevButtonProps:d,nextButtonProps:o}=v({currentPage:n,totalPages:l,onChange:(a,r)=>u(r)}),i=new Set([n-1,n,n+1]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(t,{...s,"aria-label":"Sidenavigering (mobil)",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Forrige side",children:"Forrige"})}),c.map(({page:a,itemKey:r,buttonProps:g},y)=>typeof a=="number"?i.has(a)?e.jsx(t.Item,{children:e.jsx(t.Button,{...g,"aria-label":`Side ${a}`,children:a})},r):a===1||a===l?e.jsx(t.Item,{children:e.jsx(t.Button,{...g,"aria-label":`Side ${a}`,children:a})},r):a<n-1&&y===1||a>n+1&&y>c.length-3?e.jsx(t.Item,{children:e.jsx("span",{children:"…"})},r):null:null),e.jsx(t.Item,{children:e.jsx(t.Button,{...o,"aria-label":"Neste side",children:"Neste"})})]})})})},args:{"data-size":"md","data-color":"neutral"},name:"Mobile (Truncated)"},f={name:"Test: Interaction",render:()=>{const[s,n]=b.useState(1),u=5,{pages:l,prevButtonProps:c,nextButtonProps:d}=v({currentPage:s,totalPages:u,onChange:(o,i)=>n(i)});return e.jsx(t,{"aria-label":"Sidenavigering",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...c,"aria-label":"Forrige side",children:"Forrige"})}),l.map(({page:o,itemKey:i,buttonProps:a})=>e.jsx(t.Item,{children:typeof o=="number"?e.jsx(t.Button,{...a,"aria-label":`Side ${o}`,children:o}):e.jsx("span",{children:"..."})},i)),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})},play:async({canvasElement:s})=>{const n=O(s),u=n.getByRole("button",{name:/side 1/i});p(u).toHaveAttribute("aria-current","true");const l=s.querySelector('button[aria-label="Forrige side"]');p(l).toHaveAttribute("aria-hidden","true");const c=n.getByRole("button",{name:/neste/i});await _.click(c),await j(()=>{const o=n.getByRole("button",{name:/side 2/i});p(o).toHaveAttribute("aria-current","true")}),p(l).toHaveAttribute("aria-hidden","false");const d=n.getByRole("button",{name:/side 4/i});await _.click(d),await j(()=>{p(d).toHaveAttribute("aria-current","true")})}};var C,k,L;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(L=(k=m.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var w,N,F;P.parameters={...P.parameters,docs:{...(w=P.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
    'data-color': 'accent',
    'aria-label': 'Sidenavigering (lenker)'
  },
  name: 'With Links (asChild)'
}`,...(F=(N=P.parameters)==null?void 0:N.docs)==null?void 0:F.source}}};var V,q,z;h.parameters={...h.parameters,docs:{...(V=h.parameters)==null?void 0:V.docs,source:{originalSource:`{
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
}`,...(z=(q=h.parameters)==null?void 0:q.docs)==null?void 0:z.source}}};var $,H,T;f.parameters={...f.parameters,docs:{...($=f.parameters)==null?void 0:$.docs,source:{originalSource:`{
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
}`,...(T=(H=f.parameters)==null?void 0:H.docs)==null?void 0:T.source}}};const U=["Default","WithLinks","Mobile","TestInteraction"],Q=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Mobile:h,TestInteraction:f,WithLinks:P,__namedExportsOrder:U,default:W},Symbol.toStringTag,{value:"Module"}));export{m as D,Q as P,P as W};
