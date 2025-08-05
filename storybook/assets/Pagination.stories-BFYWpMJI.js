import{r as g,j as e}from"./iframe-BgQDqsRD.js";import{S as b}from"./index-CZKmP7yi.js";import{c as I}from"./lite-DaUVFjkg.js";import{B as L}from"./Button-BlzxS4St.js";import{L as h}from"./index-BrGZx-w-.js";import"./preload-helper-C1FmrZbK.js";import"./Spinner-hp7OaP2G.js";import"./floating-ui.react-CwLPqv5Y.js";import"./index-BpTns393.js";import"./index-BW23gSyK.js";import"./Link-B2mX9ext.js";const S=g.forwardRef(function({"aria-label":n="Sidenavigering",asChild:a,className:o,...l},u){const d=a?b:"nav";return e.jsx(d,{"aria-label":n,className:I("ds-pagination",o),ref:u,...l})}),k=g.forwardRef(function(n,a){return e.jsx(L,{ref:a,...n})}),_=g.forwardRef(function({asChild:n,className:a,...o},l){const u=n?b:"li";return e.jsx(u,{ref:l,...o})}),N=g.forwardRef(function({asChild:n,...a},o){const l=n?b:"ul";return e.jsx(l,{ref:o,...a})}),P=Object.assign(S,{List:N,Item:_,Button:k});P.List.displayName="Pagination.List";P.Item.displayName="Pagination.Item";P.Button.displayName="Pagination.Button";const V=(t,n,a)=>{const o=(a-1)/2,l=Math.min(Math.max(t-Math.floor(o),1),n-a+1),u=Math.min(Math.max(t+Math.ceil(o),a),n),d=Array.from({length:u+1-l},(s,r)=>r+l);return a>4&&l>1&&d.splice(0,2,1,0),a>3&&u<n&&d.splice(-2,2,0,n),d},$=({currentPage:t=1,setCurrentPage:n,onChange:a,totalPages:o=1,showPages:l=7})=>g.useMemo(()=>{const u=t<o,d=t!==1,s=r=>c=>{if(r<1||r>o)return c.preventDefault();a==null||a(c,r),c.defaultPrevented||n==null||n(r)};return{pages:V(t,o,l).map((r,c)=>({page:r||"ellipsis",itemKey:r?`page-${r}`:`ellipsis-${c}`,buttonProps:r?{"aria-current":r===t?"page":void 0,onClick:s(r),variant:r===t?"primary":"tertiary"}:null})),prevButtonProps:{"aria-disabled":!d,onClick:s(t-1),variant:"tertiary"},nextButtonProps:{"aria-disabled":!u,onClick:s(t+1),variant:"tertiary"},hasPrev:d,hasNext:u}},[t,o,l]),i=P,f=$;try{i.displayName="Pagination",i.__docgenInfo={description:"",displayName:"Pagination",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"enum",value:[{value:'"sm"'},{value:'"md"'},{value:'"lg"'}]}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"string"}},"aria-label":{defaultValue:null,description:"",name:"aria-label",required:!1,type:{name:"string"}},asChild:{defaultValue:null,description:"",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="usePagination",f.__docgenInfo={description:"",displayName:"usePagination",props:{currentPage:{defaultValue:{value:"1"},description:"The current page number",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:{value:"1"},description:"The total number of pages",name:"totalPages",required:!0,type:{name:"number"}},showPages:{defaultValue:{value:"7"},description:"The maximum number of pages to show",name:"showPages",required:!1,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"Callback to set the current page",name:"setCurrentPage",required:!1,type:{name:"(page: number) => void"}},onChange:{defaultValue:null,description:"Callback when the page changes",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, page: number) => void"}}}}}catch{}const w={title:"Components/Pagination",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},p={render:t=>{const[n,a]=g.useState(4),o=10,{pages:l,prevButtonProps:u,nextButtonProps:d}=f({currentPage:n,totalPages:o,onChange:(s,r)=>a(r)});return e.jsx(i,{...t,children:e.jsxs(i.List,{children:[e.jsx(i.Item,{children:e.jsx(i.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),l.map(({page:s,itemKey:r,buttonProps:c})=>e.jsx(i.Item,{children:typeof s=="number"?e.jsx(i.Button,{...c,"aria-label":`Side ${s}`,children:s}):e.jsx("span",{children:"..."})},r)),e.jsx(i.Item,{children:e.jsx(i.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},m={render:t=>{const[n]=g.useState(4),a=10,{pages:o,prevButtonProps:l,nextButtonProps:u}=f({currentPage:n,totalPages:a}),d=s=>typeof s=="number"?`#/page-${s}`:"#";return e.jsx(i,{...t,children:e.jsxs(i.List,{children:[e.jsx(i.Item,{children:e.jsx(i.Button,{...l,asChild:!0,"aria-label":"Forrige side",children:e.jsx(h,{href:d(n-1),children:"Forrige"})})}),o.map(({page:s,itemKey:r,buttonProps:c})=>e.jsx(i.Item,{children:typeof s=="number"?e.jsx(i.Button,{...c,asChild:!0,"aria-label":`Side ${s}`,children:e.jsx(h,{href:d(s),children:s})}):e.jsx("span",{children:"..."})},r)),e.jsx(i.Item,{children:e.jsx(i.Button,{...u,asChild:!0,"aria-label":"Neste side",children:e.jsx(h,{href:d(n+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"accent","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"};var y,x,B;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(x=p.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var v,j,C;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(C=(j=m.parameters)==null?void 0:j.docs)==null?void 0:C.source}}};const O=["Default","WithLinks"];export{p as Default,m as WithLinks,O as __namedExportsOrder,w as default};
