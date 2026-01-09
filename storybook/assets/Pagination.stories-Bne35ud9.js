import{r as c,j as e}from"./iframe-QIw9idPG.js";import{S as x}from"./index-TTr_bWQu.js";import{c as M}from"./lite-DaUVFjkg.js";import{B as z}from"./button-DxjhSa1L.js";import{L as b}from"./index-C5IjyXkH.js";const $=(r,a,i)=>{const o=(i-1)/2,s=Math.max(1,Math.min(Math.max(r-Math.floor(o),1),a-i+1)),u=Math.min(Math.max(r+Math.ceil(o),i),a),d=Array.from({length:u+1-s},(l,n)=>n+s);return i>4&&s>1&&d.splice(0,2,1,0),i>3&&u<a&&d.splice(-2,2,0,a),d},V=({currentPage:r=1,setCurrentPage:a,onChange:i,totalPages:o=1,showPages:s=7})=>c.useMemo(()=>{const u=r<o,d=r!==1,l=n=>g=>{if(n<1||n>o)return g.preventDefault();i==null||i(g,n),g.defaultPrevented||a==null||a(n)};return{pages:$(r,o,s).map((n,g)=>({page:n||"ellipsis",itemKey:n?`page-${n}`:`ellipsis-${g}`,buttonProps:n?{"aria-current":n===r?"page":void 0,onClick:l(n),variant:n===r?"primary":"tertiary"}:null})),prevButtonProps:{"aria-hidden":!d,onClick:l(r-1),variant:"tertiary"},nextButtonProps:{"aria-hidden":!u,onClick:l(r+1),variant:"tertiary"},hasPrev:d,hasNext:u}},[r,o,s]),F=c.forwardRef(function({"aria-label":a="Sidenavigering",asChild:i,className:o,...s},u){const d=i?x:"nav";return e.jsx(d,{"aria-label":a,className:M("ds-pagination",o),ref:u,...s})}),q=c.forwardRef(function(a,i){return e.jsx(z,{ref:i,...a})}),D=c.forwardRef(function({asChild:a,className:i,...o},s){const u=a?x:"li";return e.jsx(u,{ref:s,...o})}),T=c.forwardRef(function({asChild:a,...i},o){const s=a?x:"ul";return e.jsx(s,{ref:o,...i})}),h=Object.assign(F,{List:T,Item:D,Button:q});h.List.displayName="Pagination.List";h.Item.displayName="Pagination.Item";h.Button.displayName="Pagination.Button";const t=h,f=V;try{t.displayName="Pagination",t.__docgenInfo={description:"",displayName:"Pagination",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:{value:"Sidenavigering"},description:"Sets the screen reader label for the Pagination area",name:"aria-label",required:!1,type:{name:"string"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="usePagination",f.__docgenInfo={description:"",displayName:"usePagination",props:{currentPage:{defaultValue:{value:"1"},description:"The current page number",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:{value:"1"},description:"The total number of pages",name:"totalPages",required:!0,type:{name:"number"}},showPages:{defaultValue:{value:"7"},description:"The maximum number of pages to show",name:"showPages",required:!1,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"Callback to set the current page",name:"setCurrentPage",required:!1,type:{name:"(page: number) => void"}},onChange:{defaultValue:null,description:"Callback when the page changes",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, page: number) => void"}}}}}catch{}const w={title:"Components/Pagination",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},p={render:r=>{const[a,i]=c.useState(4),o=10,{pages:s,prevButtonProps:u,nextButtonProps:d}=f({currentPage:a,totalPages:o,onChange:(l,n)=>i(n)});return e.jsx(t,{...r,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:l,itemKey:n,buttonProps:g})=>e.jsx(t.Item,{children:typeof l=="number"?e.jsx(t.Button,{...g,"aria-label":`Side ${l}`,children:l}):e.jsx("span",{children:"..."})},n)),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},m={render:r=>{const[a]=c.useState(4),i=10,{pages:o,prevButtonProps:s,nextButtonProps:u}=f({currentPage:a,totalPages:i}),d=l=>typeof l=="number"?`#/page-${l}`:"#";return e.jsx(t,{...r,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...s,asChild:!0,"aria-label":"Forrige side",children:e.jsx(b,{href:d(a-1),children:"Forrige"})})}),o.map(({page:l,itemKey:n,buttonProps:g})=>e.jsx(t.Item,{children:typeof l=="number"?e.jsx(t.Button,{...g,asChild:!0,"aria-label":`Side ${l}`,children:e.jsx(b,{href:d(l),children:l})}):e.jsx("span",{children:"..."})},n)),e.jsx(t.Item,{children:e.jsx(t.Button,{...u,asChild:!0,"aria-label":"Neste side",children:e.jsx(b,{href:d(a+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"accent","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"},P={render:r=>{const[a,i]=c.useState(6),o=12,{pages:s,prevButtonProps:u,nextButtonProps:d}=f({currentPage:a,totalPages:o,onChange:(n,g)=>i(g)}),l=new Set([a-1,a,a+1]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(t,{...r,"aria-label":"Sidenavigering (mobil)",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:n,itemKey:g,buttonProps:y},B)=>typeof n=="number"?l.has(n)?e.jsx(t.Item,{children:e.jsx(t.Button,{...y,"aria-label":`Side ${n}`,children:n})},g):n===1||n===o?e.jsx(t.Item,{children:e.jsx(t.Button,{...y,"aria-label":`Side ${n}`,children:n})},g):n<a-1&&B===1||n>a+1&&B>s.length-3?e.jsx(t.Item,{children:e.jsx("span",{children:"…"})},g):null:null),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})})},args:{"data-size":"md","data-color":"neutral"},name:"Mobile (Truncated)"};var v,S,j;p.parameters={...p.parameters,docs:{...(v=p.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
    return <Pagination {...args}>\r
        <Pagination.List>\r
          <Pagination.Item>\r
            <Pagination.Button {...prevButtonProps} aria-label="Forrige side">\r
              Forrige\r
            </Pagination.Button>\r
          </Pagination.Item>\r
\r
          {pages.map(({
          page,
          itemKey,
          buttonProps
        }) => <Pagination.Item key={itemKey}>\r
              {typeof page === 'number' ? <Pagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>\r
                  {page}\r
                </Pagination.Button> : <span>...</span>}\r
            </Pagination.Item>)}\r
\r
          <Pagination.Item>\r
            <Pagination.Button {...nextButtonProps} aria-label="Neste side">\r
              Neste\r
            </Pagination.Button>\r
          </Pagination.Item>\r
        </Pagination.List>\r
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
    return <Pagination {...args}>\r
        <Pagination.List>\r
          <Pagination.Item>\r
            <Pagination.Button {...prevButtonProps} asChild aria-label="Forrige side">\r
              <Link href={generateHref(currentPage - 1)}>Forrige</Link>\r
            </Pagination.Button>\r
          </Pagination.Item>\r
\r
          {pages.map(({
          page,
          itemKey,
          buttonProps
        }) => <Pagination.Item key={itemKey}>\r
              {typeof page === 'number' ? <Pagination.Button {...buttonProps} asChild aria-label={\`Side \${page}\`}>\r
                  <Link href={generateHref(page)}>{page}</Link>\r
                </Pagination.Button> : <span>...</span>}\r
            </Pagination.Item>)}\r
\r
          <Pagination.Item>\r
            <Pagination.Button {...nextButtonProps} asChild aria-label="Neste side">\r
              <Link href={generateHref(currentPage + 1)}>Neste</Link>\r
            </Pagination.Button>\r
          </Pagination.Item>\r
        </Pagination.List>\r
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
    }}>\r
        <Pagination {...args} aria-label="Sidenavigering (mobil)">\r
          <Pagination.List>\r
            <Pagination.Item>\r
              <Pagination.Button {...prevButtonProps} aria-label="Forrige side">\r
                Forrige\r
              </Pagination.Button>\r
            </Pagination.Item>\r
\r
            {pages.map(({
            page,
            itemKey,
            buttonProps
          }, idx) => {
            if (typeof page === 'number') {
              if (!visibleSet.has(page)) {
                // Show first and last pages as anchors
                if (page === 1 || page === totalPages) {
                  return <Pagination.Item key={itemKey}>\r
                        <Pagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>\r
                          {page}\r
                        </Pagination.Button>\r
                      </Pagination.Item>;
                }
                // Replace hidden ranges by sparse ellipsis
                if (page < currentPage - 1 && idx === 1 || page > currentPage + 1 && idx > pages.length - 3) {
                  return <Pagination.Item key={itemKey}>\r
                        <span>…</span>\r
                      </Pagination.Item>;
                }
                return null;
              }
              return <Pagination.Item key={itemKey}>\r
                    <Pagination.Button {...buttonProps} aria-label={\`Side \${page}\`}>\r
                      {page}\r
                    </Pagination.Button>\r
                  </Pagination.Item>;
            }
            // Condense generic ellipsis in mobile
            return null;
          })}\r
\r
            <Pagination.Item>\r
              <Pagination.Button {...nextButtonProps} aria-label="Neste side">\r
                Neste\r
              </Pagination.Button>\r
            </Pagination.Item>\r
          </Pagination.List>\r
        </Pagination>\r
      </div>;
  },
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  },
  name: 'Mobile (Truncated)'
}`,...(N=(k=P.parameters)==null?void 0:k.docs)==null?void 0:N.source}}};const K=["Default","WithLinks","Mobile"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Mobile:P,WithLinks:m,__namedExportsOrder:K,default:w},Symbol.toStringTag,{value:"Module"}));export{p as D,A as P,m as W};
