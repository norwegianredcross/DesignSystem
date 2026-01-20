import{r as u,j as e}from"./iframe-D3UXmMk6.js";import{S as b}from"./index-D-IJNEei.js";import{c as z}from"./lite-DaUVFjkg.js";import{B as $}from"./button-MHLHE1tc.js";import{L as h}from"./index-Bw84QQIw.js";const M=(i,a,r)=>{const o=(r-1)/2,s=Math.max(1,Math.min(Math.max(i-Math.floor(o),1),a-r+1)),g=Math.min(Math.max(i+Math.ceil(o),r),a),d=Array.from({length:g+1-s},(l,n)=>n+s);return r>4&&s>1&&d.splice(0,2,1,0),r>3&&g<a&&d.splice(-2,2,0,a),d},F=({currentPage:i=1,setCurrentPage:a,onChange:r,totalPages:o=1,showPages:s=7})=>u.useMemo(()=>{const g=i<o,d=i!==1,l=n=>c=>{if(n<1||n>o)return c.preventDefault();r==null||r(c,n),c.defaultPrevented||a==null||a(n)};return{pages:M(i,o,s).map((n,c)=>({page:n||"ellipsis",itemKey:n?`page-${n}`:`ellipsis-${c}`,buttonProps:n?{"aria-current":n===i?"page":void 0,onClick:l(n),variant:n===i?"primary":"tertiary"}:null})),prevButtonProps:{"aria-hidden":!d,onClick:l(i-1),variant:"tertiary"},nextButtonProps:{"aria-hidden":!g,onClick:l(i+1),variant:"tertiary"},hasPrev:d,hasNext:g}},[i,o,s]),D=u.forwardRef(function({"aria-label":a="Sidenavigering",asChild:r,className:o,...s},g){const d=r?b:"nav";return e.jsx(d,{"aria-label":a,className:z("ds-pagination",o),ref:g,...s})}),V=u.forwardRef(function(a,r){return e.jsx($,{ref:r,...a})}),K=u.forwardRef(function({asChild:a,className:r,...o},s){const g=a?b:"li";return e.jsx(g,{ref:s,...o})}),R=u.forwardRef(function({asChild:a,...r},o){const s=a?b:"ul";return e.jsx(s,{ref:o,...r})}),f=Object.assign(D,{List:R,Item:K,Button:V});f.List.displayName="Pagination.List";f.Item.displayName="Pagination.Item";f.Button.displayName="Pagination.Button";const t=f,x=F;t.displayName="Pagination";try{t.displayName="Pagination",t.__docgenInfo={description:"",displayName:"Pagination",props:{"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"aria-label":{defaultValue:{value:"Sidenavigering"},description:"Sets the screen reader label for the Pagination area",name:"aria-label",required:!1,type:{name:"string"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}const W={title:"Components/Pagination",component:t,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},p={render:i=>{const[a,r]=u.useState(4),o=10,{pages:s,prevButtonProps:g,nextButtonProps:d}=x({currentPage:a,totalPages:o,onChange:(l,n)=>r(n)});return e.jsx(t,{...i,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...g,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:l,itemKey:n,buttonProps:c})=>e.jsx(t.Item,{children:typeof l=="number"?e.jsx(t.Button,{...c,"aria-label":`Side ${l}`,children:l}):e.jsx("span",{children:"..."})},n)),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},m={render:i=>{const[a]=u.useState(4),r=10,{pages:o,prevButtonProps:s,nextButtonProps:g}=x({currentPage:a,totalPages:r}),d=l=>typeof l=="number"?`#/page-${l}`:"#";return e.jsx(t,{...i,children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...s,asChild:!0,"aria-label":"Forrige side",children:e.jsx(h,{href:d(a-1),children:"Forrige"})})}),o.map(({page:l,itemKey:n,buttonProps:c})=>e.jsx(t.Item,{children:typeof l=="number"?e.jsx(t.Button,{...c,asChild:!0,"aria-label":`Side ${l}`,children:e.jsx(h,{href:d(l),children:l})}):e.jsx("span",{children:"..."})},n)),e.jsx(t.Item,{children:e.jsx(t.Button,{...g,asChild:!0,"aria-label":"Neste side",children:e.jsx(h,{href:d(a+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"accent","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"},P={render:i=>{const[a,r]=u.useState(6),o=12,{pages:s,prevButtonProps:g,nextButtonProps:d}=x({currentPage:a,totalPages:o,onChange:(n,c)=>r(c)}),l=new Set([a-1,a,a+1]);return e.jsx("div",{style:{maxWidth:320},children:e.jsx(t,{...i,"aria-label":"Sidenavigering (mobil)",children:e.jsxs(t.List,{children:[e.jsx(t.Item,{children:e.jsx(t.Button,{...g,"aria-label":"Forrige side",children:"Forrige"})}),s.map(({page:n,itemKey:c,buttonProps:B},y)=>typeof n=="number"?l.has(n)?e.jsx(t.Item,{children:e.jsx(t.Button,{...B,"aria-label":`Side ${n}`,children:n})},c):n===1||n===o?e.jsx(t.Item,{children:e.jsx(t.Button,{...B,"aria-label":`Side ${n}`,children:n})},c):n<a-1&&y===1||n>a+1&&y>s.length-3?e.jsx(t.Item,{children:e.jsx("span",{children:"…"})},c):null:null),e.jsx(t.Item,{children:e.jsx(t.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})})},args:{"data-size":"md","data-color":"neutral"},name:"Mobile (Truncated)"};var S,j,I;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(I=(j=p.parameters)==null?void 0:j.docs)==null?void 0:I.source}}};var v,C,L;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(L=(C=m.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var k,N,_;P.parameters={...P.parameters,docs:{...(k=P.parameters)==null?void 0:k.docs,source:{originalSource:`{
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
}`,...(_=(N=P.parameters)==null?void 0:N.docs)==null?void 0:_.source}}};const H=["Default","WithLinks","Mobile"],A=Object.freeze(Object.defineProperty({__proto__:null,Default:p,Mobile:P,WithLinks:m,__namedExportsOrder:H,default:W},Symbol.toStringTag,{value:"Module"}));export{p as D,A as P,m as W};
