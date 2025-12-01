import{r as c,j as e}from"./iframe-CzoOjVIP.js";import{S as x}from"./index--B4R9RuM.js";import{c as M}from"./lite-DaUVFjkg.js";import{B as z}from"./button-FsYbpJld.js";import{L as b}from"./index-scSKfjr8.js";const $=(i,a,r)=>{const o=(r-1)/2,s=Math.max(1,Math.min(Math.max(i-Math.floor(o),1),a-r+1)),u=Math.min(Math.max(i+Math.ceil(o),r),a),d=Array.from({length:u+1-s},(l,n)=>n+s);return r>4&&s>1&&d.splice(0,2,1,0),r>3&&u<a&&d.splice(-2,2,0,a),d},V=({currentPage:i=1,setCurrentPage:a,onChange:r,totalPages:o=1,showPages:s=7})=>c.useMemo(()=>{const u=i<o,d=i!==1,l=n=>g=>{if(n<1||n>o)return g.preventDefault();r==null||r(g,n),g.defaultPrevented||a==null||a(n)};return{pages:$(i,o,s).map((n,g)=>({page:n||"ellipsis",itemKey:n?`page-${n}`:`ellipsis-${g}`,buttonProps:n?{"aria-current":n===i?"page":void 0,onClick:l(n),variant:n===i?"primary":"tertiary"}:null})),prevButtonProps:{"aria-hidden":!d,onClick:l(i-1),variant:"tertiary"},nextButtonProps:{"aria-hidden":!u,onClick:l(i+1),variant:"tertiary"},hasPrev:d,hasNext:u}},[i,o,s]),F=c.forwardRef(function({"aria-label":a="Sidenavigering",asChild:r,className:o,...s},u){const d=r?x:"nav";return e.jsx(d,{"aria-label":a,className:M("ds-pagination",o),ref:u,...s})}),q=c.forwardRef(function(a,r){return e.jsx(z,{ref:r,...a})}),D=c.forwardRef(function({asChild:a,className:r,...o},s){const u=a?x:"li";return e.jsx(u,{ref:s,...o})}),T=c.forwardRef(function({asChild:a,...r},o){const s=a?x:"ul";return e.jsx(s,{ref:o,...r})}),h=Object.assign(F,{List:T,Item:D,Button:q});h.List.displayName="Pagination.List";h.Item.displayName="Pagination.Item";h.Button.displayName="Pagination.Button";const t=h,f=V;try{t.displayName="Pagination",t.__docgenInfo={description:"",displayName:"Pagination",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:{value:"Sidenavigering"},description:"Sets the screen reader label for the Pagination area",name:"aria-label",required:!1,type:{name:"string"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="usePagination",f.__docgenInfo={description:"",displayName:"usePagination",props:{currentPage:{defaultValue:{value:"1"},description:"The current page number",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:{value:"1"},description:"The total number of pages",name:"totalPages",required:!0,type:{name:"number"}},showPages:{defaultValue:{value:"7"},description:"The maximum number of pages to show",name:"showPages",required:!1,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"Callback to set the current page",name:"setCurrentPage",required:!1,type:{name:"(page: number) => void"}},onChange:{defaultValue:null,description:"Callback when the page changes",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, page: number) => void"}}}}}catch{}const w={title:"Components/Pagination",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},p={render:i=>{const[a,r]=c.useState(4),o=10,{pages:s,prevButtonProps:u,nextButtonProps:d}=f({currentPage:a,totalPages:o,onChange:(l,n)=>r(n)});return e.jsx(t,{...i,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:l,itemKey:n,buttonProps:g})=>e.jsx(t.Item,{children:typeof l=="number"?e.jsx(t.Button,{...g,"aria-label":`Side ${l}`,children:l}):e.jsx("span",{children:"..."})},n)),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},m={render:i=>{const[a]=c.useState(4),r=10,{pages:o,prevButtonProps:s,nextButtonProps:u}=f({currentPage:a,totalPages:r}),d=l=>typeof l=="number"?`#/page-${l}`:"#";return e.jsx(t,{...i,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...s,asChild:!0,"aria-label":"Forrige side",children:e.jsx(b,{href:d(a-1),children:"Forrige"})})}),o.map(({page:l,itemKey:n,buttonProps:g})=>e.jsx(t.Item,{children:typeof l=="number"?e.jsx(t.Button,{...g,asChild:!0,"aria-label":`Side ${l}`,children:e.jsx(b,{href:d(l),children:l})}):e.jsx("span",{children:"..."})},n)),e.jsx(t.Item,{children:e.jsx(t.Button,{...u,asChild:!0,"aria-label":"Neste side",children:e.jsx(b,{href:d(a+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"accent","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"},P={render:i=>{const[a,r]=c.useState(6),o=12,{pages:s,prevButtonProps:u,nextButtonProps:d}=f({currentPage:a,totalPages:o,onChange:(n,g)=>r(g)}),l=new Set([a-1,a,a+1]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(t,{...i,"aria-label":"Sidenavigering (mobil)",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:n,itemKey:g,buttonProps:y},B)=>typeof n=="number"?l.has(n)?e.jsx(t.Item,{children:e.jsx(t.Button,{...y,"aria-label":`Side ${n}`,children:n})},g):n===1||n===o?e.jsx(t.Item,{children:e.jsx(t.Button,{...y,"aria-label":`Side ${n}`,children:n})},g):n<a-1&&B===1||n>a+1&&B>s.length-3?e.jsx(t.Item,{children:e.jsx("span",{children:"…"})},g):null:null),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})})},args:{"data-size":"md","data-color":"neutral"},name:"Mobile (Truncated)"};var v,S,j;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(S=p.parameters)==null?void 0:S.docs)==null?void 0:j.source}}};var I,C,L;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var _,k,N;P.parameters={...P.parameters,docs:{...(_=P.parameters)==null?void 0:_.docs,source:{originalSource:`{
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
}`,...(N=(k=P.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const K=["Default","WithLinks","Mobile"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Mobile:P,WithLinks:m,__namedExportsOrder:K,default:w},Symbol.toStringTag,{value:"Module"}));export{p as D,A as P,m as W};
