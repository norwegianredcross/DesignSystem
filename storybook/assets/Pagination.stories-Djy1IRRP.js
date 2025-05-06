import{j as n}from"./jsx-runtime-D_zvdyIk.js";import{r as u}from"./index-D4lIrffr.js";import{S as h}from"./index-Cb-ENzfG.js";import{c as v}from"./lite-DaUVFjkg.js";import{B as S}from"./Button-_80U_wOV.js";import{L as f}from"./index-CwJ0UUmb.js";import"./Spinner-Dj2HLJn9.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./Link-0v2GXfqz.js";const k=u.forwardRef(function({"aria-label":t="Sidenavigering",asChild:e,className:i,...l},d){const c=e?h:"nav";return n.jsx(c,{"aria-label":t,className:v("ds-pagination",i),ref:d,...l})}),C=u.forwardRef(function(t,e){return n.jsx(S,{ref:e,...t})}),N=u.forwardRef(function({asChild:t,className:e,...i},l){const d=t?h:"li";return n.jsx(d,{ref:l,...i})}),$=u.forwardRef(function({asChild:t,...e},i){const l=t?h:"ul";return n.jsx(l,{ref:i,...e})}),P=Object.assign(k,{List:$,Item:N,Button:C});P.List.displayName="Pagination.List";P.Item.displayName="Pagination.Item";P.Button.displayName="Pagination.Button";const F=(r,t,e)=>{const i=(e-1)/2,l=Math.min(Math.max(r-Math.floor(i),1),t-e+1),d=Math.min(Math.max(r+Math.ceil(i),e),t),c=Array.from({length:d+1-l},(o,a)=>a+l);return e>4&&l>1&&c.splice(0,2,1,0),e>3&&d<t&&c.splice(-2,2,0,t),c},M=({currentPage:r=1,setCurrentPage:t,onChange:e,totalPages:i=1,showPages:l=7})=>u.useMemo(()=>{const d=r<i,c=r!==1,o=a=>g=>{if(a<1||a>i)return g.preventDefault();e==null||e(g,a),g.defaultPrevented||t==null||t(a)};return{pages:F(r,i,l).map((a,g)=>({page:a||"ellipsis",itemKey:a?`page-${a}`:`ellipsis-${g}`,buttonProps:a?{"aria-current":a===r?"page":void 0,onClick:o(a),variant:a===r?"primary":"tertiary"}:null})),prevButtonProps:{"aria-disabled":!c,onClick:o(r-1),variant:"tertiary"},nextButtonProps:{"aria-disabled":!d,onClick:o(r+1),variant:"tertiary"},hasPrev:c,hasNext:d}},[r,i,l]),s=P,L=M,T={title:"Components/Pagination",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},p={render:r=>{const[t,e]=u.useState(4),i=10,{pages:l,prevButtonProps:d,nextButtonProps:c}=L({currentPage:t,totalPages:i,onChange:(o,a)=>e(a)});return n.jsx(s,{...r,children:n.jsxs(s.List,{children:[n.jsx(s.Item,{children:n.jsx(s.Button,{...d,"aria-label":"Forrige side",children:"Forrige"})}),l.map(({page:o,itemKey:a,buttonProps:g})=>n.jsx(s.Item,{children:typeof o=="number"?n.jsx(s.Button,{...g,"aria-label":`Side ${o}`,children:o}):n.jsx("span",{children:"..."})},a)),n.jsx(s.Item,{children:n.jsx(s.Button,{...c,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},m={render:r=>{const[t]=u.useState(4),e=10,{pages:i,prevButtonProps:l,nextButtonProps:d}=L({currentPage:t,totalPages:e}),c=o=>typeof o=="number"?`#/page-${o}`:"#";return n.jsx(s,{...r,children:n.jsxs(s.List,{children:[n.jsx(s.Item,{children:n.jsx(s.Button,{...l,asChild:!0,"aria-label":"Forrige side",children:n.jsx(f,{href:c(t-1),children:"Forrige"})})}),i.map(({page:o,itemKey:a,buttonProps:g})=>n.jsx(s.Item,{children:typeof o=="number"?n.jsx(s.Button,{...g,asChild:!0,"aria-label":`Side ${o}`,children:n.jsx(f,{href:c(o),children:o})}):n.jsx("span",{children:"..."})},a)),n.jsx(s.Item,{children:n.jsx(s.Button,{...d,asChild:!0,"aria-label":"Neste side",children:n.jsx(f,{href:c(t+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"accent","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"};var b,x,B;p.parameters={...p.parameters,docs:{...(b=p.parameters)==null?void 0:b.docs,source:{originalSource:`{
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
}`,...(B=(x=p.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var j,y,I;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
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
}`,...(I=(y=m.parameters)==null?void 0:y.docs)==null?void 0:I.source}}};const q=["Default","WithLinks"];export{p as Default,m as WithLinks,q as __namedExportsOrder,T as default};
