import{r as g,j as e}from"./iframe--UosHCS2.js";import{S as b}from"./index-BytejBBX.js";import{c as D}from"./lite-DaUVFjkg.js";import{B as K}from"./button-BHfitTNM.js";import{L as h}from"./index-N2w_Y2YN.js";const R=(i,t,r)=>{const o=(r-1)/2,s=Math.max(1,Math.min(Math.max(i-Math.floor(o),1),t-r+1)),u=Math.min(Math.max(i+Math.ceil(o),r),t),d=Array.from({length:u+1-s},(l,n)=>n+s);return r>4&&s>1&&d.splice(0,2,1,0),r>3&&u<t&&d.splice(-2,2,0,t),d},W=({currentPage:i=1,setCurrentPage:t,onChange:r,totalPages:o=1,showPages:s=7})=>g.useMemo(()=>{const u=i<o,d=i!==1,l=n=>c=>{if(n<1||n>o)return c.preventDefault();r==null||r(c,n),c.defaultPrevented||t==null||t(n)};return{pages:R(i,o,s).map((n,c)=>({page:n||"ellipsis",itemKey:n?`page-${n}`:`ellipsis-${c}`,buttonProps:n?{"aria-current":n===i?"page":void 0,onClick:l(n),variant:n===i?"primary":"tertiary"}:null})),prevButtonProps:{"aria-hidden":!d,onClick:l(i-1),variant:"tertiary"},nextButtonProps:{"aria-hidden":!u,onClick:l(i+1),variant:"tertiary"},hasPrev:d,hasNext:u}},[i,o,s]),w=g.forwardRef(function({"aria-label":t="Sidenavigering",asChild:r,className:o,...s},u){const d=r?b:"nav";return e.jsx(d,{"aria-label":t,className:D("ds-pagination",o),ref:u,...s})}),M=g.forwardRef(function(t,r){return e.jsx(K,{ref:r,...t})}),q=g.forwardRef(function({asChild:t,className:r,...o},s){const u=t?b:"li";return e.jsx(u,{ref:s,...o})}),F=g.forwardRef(function({asChild:t,...r},o){const s=t?b:"ul";return e.jsx(s,{ref:o,...r})}),f=Object.assign(w,{List:F,Item:q,Button:M});f.List.displayName="Pagination.List";f.Item.displayName="Pagination.Item";f.Button.displayName="Pagination.Button";const a=f,v=F,S=q,I=M,y=W;a.displayName="Pagination";try{a.displayName="Pagination",a.__docgenInfo={description:"",displayName:"Pagination",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:{value:"Sidenavigering"},description:"Sets the screen reader label for the Pagination area",name:"aria-label",required:!1,type:{name:"string"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{v.displayName="PaginationList",v.__docgenInfo={description:"",displayName:"PaginationList",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{S.displayName="PaginationItem",S.__docgenInfo={description:"",displayName:"PaginationItem",props:{asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{I.displayName="PaginationButton",I.__docgenInfo={description:"",displayName:"PaginationButton",props:{"aria-current":{defaultValue:{value:"false"},description:`Toggle button as active
Indicates the element that represents the current item within a container or set of related elements.`,name:"aria-current",required:!1,type:{name:'boolean | "true" | "false" | "page" | "step" | "location" | "date" | "time"'}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:"Change the color scheme of the button",name:"data-color",required:!1,type:{name:"any"}},variant:{defaultValue:{value:"'primary'"},description:"Specify which variant to use",name:"variant",required:!1,type:{name:"enum",value:[{value:'"primary"'},{value:'"secondary"'},{value:'"tertiary"'}]}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}},type:{defaultValue:{value:"'button'"},description:"Specify the type of button. Unset when `asChild` is true",name:"type",required:!1,type:{name:"enum",value:[{value:'"button"'},{value:'"submit"'},{value:'"reset"'}]}}}}}catch{}const H={title:"Components/Pagination",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},p={render:i=>{const[t,r]=g.useState(4),o=10,{pages:s,prevButtonProps:u,nextButtonProps:d}=y({currentPage:t,totalPages:o,onChange:(l,n)=>r(n)});return e.jsx(a,{...i,children:e.jsxs(a.List,{children:[e.jsx(a.Item,{children:e.jsx(a.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:l,itemKey:n,buttonProps:c})=>e.jsx(a.Item,{children:typeof l=="number"?e.jsx(a.Button,{...c,"aria-label":`Side ${l}`,children:l}):e.jsx("span",{children:"..."})},n)),e.jsx(a.Item,{children:e.jsx(a.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},m={render:i=>{const[t]=g.useState(4),r=10,{pages:o,prevButtonProps:s,nextButtonProps:u}=y({currentPage:t,totalPages:r}),d=l=>typeof l=="number"?`#/page-${l}`:"#";return e.jsx(a,{...i,children:e.jsxs(a.List,{children:[e.jsx(a.Item,{children:e.jsx(a.Button,{...s,asChild:!0,"aria-label":"Forrige side",children:e.jsx(h,{href:d(t-1),children:"Forrige"})})}),o.map(({page:l,itemKey:n,buttonProps:c})=>e.jsx(a.Item,{children:typeof l=="number"?e.jsx(a.Button,{...c,asChild:!0,"aria-label":`Side ${l}`,children:e.jsx(h,{href:d(l),children:l})}):e.jsx("span",{children:"..."})},n)),e.jsx(a.Item,{children:e.jsx(a.Button,{...u,asChild:!0,"aria-label":"Neste side",children:e.jsx(h,{href:d(t+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"accent","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"},P={render:i=>{const[t,r]=g.useState(6),o=12,{pages:s,prevButtonProps:u,nextButtonProps:d}=y({currentPage:t,totalPages:o,onChange:(n,c)=>r(c)}),l=new Set([t-1,t,t+1]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(a,{...i,"aria-label":"Sidenavigering (mobil)",children:e.jsxs(a.List,{children:[e.jsx(a.Item,{children:e.jsx(a.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:n,itemKey:c,buttonProps:x},B)=>typeof n=="number"?l.has(n)?e.jsx(a.Item,{children:e.jsx(a.Button,{...x,"aria-label":`Side ${n}`,children:n})},c):n===1||n===o?e.jsx(a.Item,{children:e.jsx(a.Button,{...x,"aria-label":`Side ${n}`,children:n})},c):n<t-1&&B===1||n>t+1&&B>s.length-3?e.jsx(a.Item,{children:e.jsx("span",{children:"…"})},c):null:null),e.jsx(a.Item,{children:e.jsx(a.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})})},args:{"data-size":"md","data-color":"neutral"},name:"Mobile (Truncated)"};var j,_,C;p.parameters={...p.parameters,docs:{...(j=p.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(C=(_=p.parameters)==null?void 0:_.docs)==null?void 0:C.source}}};var L,N,k;m.parameters={...m.parameters,docs:{...(L=m.parameters)==null?void 0:L.docs,source:{originalSource:`{
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
}`,...(k=(N=m.parameters)==null?void 0:N.docs)==null?void 0:k.source}}};var z,$,V;P.parameters={...P.parameters,docs:{...(z=P.parameters)==null?void 0:z.docs,source:{originalSource:`{
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
}`,...(V=($=P.parameters)==null?void 0:$.docs)==null?void 0:V.source}}};const T=["Default","WithLinks","Mobile"],J=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Mobile:P,WithLinks:m,__namedExportsOrder:T,default:H},Symbol.toStringTag,{value:"Module"}));export{p as D,J as P,m as W};
