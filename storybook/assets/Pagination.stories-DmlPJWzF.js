import{r as g,j as e}from"./iframe-Bp0vmf9v.js";import{S as v}from"./index-KYxKNRDd.js";import{c as K}from"./lite-DaUVFjkg.js";import{B as O}from"./button-DASMQkNv.js";import{L as B}from"./index-Cqplwdwc.js";const W=(i,n,r)=>{const o=(r-1)/2,s=Math.max(1,Math.min(Math.max(i-Math.floor(o),1),n-r+1)),u=Math.min(Math.max(i+Math.ceil(o),r),n),l=Array.from({length:u+1-s},(d,a)=>a+s);return r>4&&s>1&&l.splice(0,2,1,0),r>3&&u<n&&l.splice(-2,2,0,n),l},U=({currentPage:i=1,setCurrentPage:n,onChange:r,totalPages:o=1,showPages:s=7})=>g.useMemo(()=>{const u=i<o,l=i!==1,d=a=>c=>{if(a<1||a>o)return c.preventDefault();r==null||r(c,a),c.defaultPrevented||n==null||n(a)};return{pages:W(i,o,s).map((a,c)=>({page:a||"ellipsis",itemKey:a?`page-${a}`:`ellipsis-${c}`,buttonProps:a?{"aria-current":a===i?"page":void 0,onClick:d(a),variant:a===i?"primary":"tertiary"}:null})),prevButtonProps:{"aria-hidden":!l,onClick:d(i-1),variant:"tertiary"},nextButtonProps:{"aria-hidden":!u,onClick:d(i+1),variant:"tertiary"},hasPrev:l,hasNext:u}},[i,o,s]),Y=g.forwardRef(function({"aria-label":n="Sidenavigering",asChild:r,className:o,...s},u){const l=r?v:"nav";return e.jsx(l,{"aria-label":n,className:K("ds-pagination",o),ref:u,...s})}),A=g.forwardRef(function(n,r){return e.jsx(O,{ref:r,...n})}),E=g.forwardRef(function({asChild:n,className:r,...o},s){const u=n?v:"li";return e.jsx(u,{ref:s,...o})}),D=g.forwardRef(function({asChild:n,...r},o){const s=n?v:"ul";return e.jsx(s,{ref:o,...r})}),b=Object.assign(Y,{List:D,Item:E,Button:A});b.List.displayName="Pagination.List";b.Item.displayName="Pagination.Item";b.Button.displayName="Pagination.Button";const t=b,S=D,j=E,_=A,y=U;t.displayName="Pagination";try{t.displayName="Pagination",t.__docgenInfo={description:"",displayName:"Pagination",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"aria-label":{defaultValue:{value:"Sidenavigering"},description:"Sets the screen reader label for the Pagination area",name:"aria-label",required:!1,type:{name:"string"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="PaginationList",S.__docgenInfo={description:"",displayName:"PaginationList",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{j.displayName="PaginationItem",j.__docgenInfo={description:"",displayName:"PaginationItem",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{_.displayName="PaginationButton",_.__docgenInfo={description:"",displayName:"PaginationButton",props:{"aria-current":{defaultValue:{value:"false"},description:`Toggle button as active
Indicates the element that represents the current item within a container or set of related elements.`,name:"aria-current",required:!1,type:{name:'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"'}},"data-color":{defaultValue:null,description:"Change the color scheme of the button",name:"data-color",required:!1,type:{name:"any"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"'button'"},description:"Specify the type of button. Unset when `asChild` is true",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}},variant:{defaultValue:{value:"'primary'"},description:"Specify which variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}}}}}catch{}const{expect:p,within:G,userEvent:C,waitFor:L}=__STORYBOOK_MODULE_TEST__,J={title:"Components/Pagination",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},m={render:i=>{const[n,r]=g.useState(4),o=10,{pages:s,prevButtonProps:u,nextButtonProps:l}=y({currentPage:n,totalPages:o,onChange:(d,a)=>r(a)});return e.jsx(t,{...i,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:d,itemKey:a,buttonProps:c})=>e.jsx(t.Item,{children:typeof d=="number"?e.jsx(t.Button,{...c,"aria-label":`Side ${d}`,children:d}):e.jsx("span",{children:"..."})},a)),e.jsx(t.Item,{children:e.jsx(t.Button,{...l,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},P={render:i=>{const[n]=g.useState(4),r=10,{pages:o,prevButtonProps:s,nextButtonProps:u}=y({currentPage:n,totalPages:r}),l=d=>typeof d=="number"?`#/page-${d}`:"#";return e.jsx(t,{...i,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...s,asChild:!0,"aria-label":"Forrige side",children:e.jsx(B,{href:l(n-1),children:"Forrige"})})}),o.map(({page:d,itemKey:a,buttonProps:c})=>e.jsx(t.Item,{children:typeof d=="number"?e.jsx(t.Button,{...c,asChild:!0,"aria-label":`Side ${d}`,children:e.jsx(B,{href:l(d),children:d})}):e.jsx("span",{children:"..."})},a)),e.jsx(t.Item,{children:e.jsx(t.Button,{...u,asChild:!0,"aria-label":"Neste side",children:e.jsx(B,{href:l(n+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"accent","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"},h={render:i=>{const[n,r]=g.useState(6),o=12,{pages:s,prevButtonProps:u,nextButtonProps:l}=y({currentPage:n,totalPages:o,onChange:(a,c)=>r(c)}),d=new Set([n-1,n,n+1]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(t,{...i,"aria-label":"Sidenavigering (mobil)",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:a,itemKey:c,buttonProps:x},I)=>typeof a=="number"?d.has(a)?e.jsx(t.Item,{children:e.jsx(t.Button,{...x,"aria-label":`Side ${a}`,children:a})},c):a===1||a===o?e.jsx(t.Item,{children:e.jsx(t.Button,{...x,"aria-label":`Side ${a}`,children:a})},c):a<n-1&&I===1||a>n+1&&I>s.length-3?e.jsx(t.Item,{children:e.jsx("span",{children:"…"})},c):null:null),e.jsx(t.Item,{children:e.jsx(t.Button,{...l,"aria-label":"Neste side",children:"Neste"})})]})})})},args:{"data-size":"md","data-color":"neutral"},name:"Mobile (Truncated)"},f={name:"Test: Interaction",render:()=>{const[i,n]=g.useState(1),r=5,{pages:o,prevButtonProps:s,nextButtonProps:u}=y({currentPage:i,totalPages:r,onChange:(l,d)=>n(d)});return e.jsx(t,{"aria-label":"Sidenavigering",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...s,"aria-label":"Forrige side",children:"Forrige"})}),o.map(({page:l,itemKey:d,buttonProps:a})=>e.jsx(t.Item,{children:typeof l=="number"?e.jsx(t.Button,{...a,"aria-label":`Side ${l}`,children:l}):e.jsx("span",{children:"..."})},d)),e.jsx(t.Item,{children:e.jsx(t.Button,{...u,"aria-label":"Neste side",children:"Neste"})})]})})},play:async({canvasElement:i})=>{const n=G(i),r=n.getByRole("button",{name:/side 1/i});p(r).toHaveAttribute("aria-current","page");const o=i.querySelector('button[aria-label="Forrige side"]');p(o).toHaveAttribute("aria-hidden","true");const s=n.getByRole("button",{name:/neste/i});await C.click(s),await L(()=>{const l=n.getByRole("button",{name:/side 2/i});p(l).toHaveAttribute("aria-current","page")}),p(o).toHaveAttribute("aria-hidden","false");const u=n.getByRole("button",{name:/side 4/i});await C.click(u),await L(()=>{p(u).toHaveAttribute("aria-current","page")})}};var N,k,w;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...(w=(k=m.parameters)==null?void 0:k.docs)==null?void 0:w.source}}};var F,z,$;P.parameters={...P.parameters,docs:{...(F=P.parameters)==null?void 0:F.docs,source:{originalSource:`{
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
}`,...($=(z=P.parameters)==null?void 0:z.docs)==null?void 0:$.source}}};var H,R,V;h.parameters={...h.parameters,docs:{...(H=h.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(V=(R=h.parameters)==null?void 0:R.docs)==null?void 0:V.source}}};var M,q,T;f.parameters={...f.parameters,docs:{...(M=f.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
    expect(page1).toHaveAttribute('aria-current', 'page');

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
      expect(page2).toHaveAttribute('aria-current', 'page');
    });

    // Previous should now be visible (not aria-hidden)
    expect(prevButton).toHaveAttribute('aria-hidden', 'false');

    // Click a specific page
    const page4 = canvas.getByRole('button', {
      name: /side 4/i
    });
    await userEvent.click(page4);
    await waitFor(() => {
      expect(page4).toHaveAttribute('aria-current', 'page');
    });
  }
}`,...(T=(q=f.parameters)==null?void 0:q.docs)==null?void 0:T.source}}};const Q=["Default","WithLinks","Mobile","TestInteraction"],ae=Object.freeze(Object.defineProperty({__proto__:null,Default:m,Mobile:h,TestInteraction:f,WithLinks:P,__namedExportsOrder:Q,default:J},Symbol.toStringTag,{value:"Module"}));export{m as D,ae as P,P as W};
