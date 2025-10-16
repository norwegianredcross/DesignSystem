import{r as g,j as e}from"./iframe-NSlXxCFF.js";import{S as b}from"./index-fxYSzXt9.js";import{c as I}from"./lite-DaUVFjkg.js";import{B as S}from"./button-B40UWaKO.js";import{L as h}from"./index-MgFQy3kW.js";import"./preload-helper-Dp1pzeXC.js";import"./spinner-D40xMekF.js";import"./use-merge-refs-tYagDv3b.js";import"./link-CSDpQUt2.js";const L=(t,n,a)=>{const o=(a-1)/2,l=Math.max(1,Math.min(Math.max(t-Math.floor(o),1),n-a+1)),u=Math.min(Math.max(t+Math.ceil(o),a),n),d=Array.from({length:u+1-l},(s,i)=>i+l);return a>4&&l>1&&d.splice(0,2,1,0),a>3&&u<n&&d.splice(-2,2,0,n),d},k=({currentPage:t=1,setCurrentPage:n,onChange:a,totalPages:o=1,showPages:l=7})=>g.useMemo(()=>{const u=t<o,d=t!==1,s=i=>c=>{if(i<1||i>o)return c.preventDefault();a==null||a(c,i),c.defaultPrevented||n==null||n(i)};return{pages:L(t,o,l).map((i,c)=>({page:i||"ellipsis",itemKey:i?`page-${i}`:`ellipsis-${c}`,buttonProps:i?{"aria-current":i===t?"page":void 0,onClick:s(i),variant:i===t?"primary":"tertiary"}:null})),prevButtonProps:{"aria-disabled":!d,onClick:s(t-1),variant:"tertiary"},nextButtonProps:{"aria-disabled":!u,onClick:s(t+1),variant:"tertiary"},hasPrev:d,hasNext:u}},[t,o,l]),_=g.forwardRef(function({"aria-label":n="Sidenavigering",asChild:a,className:o,...l},u){const d=a?b:"nav";return e.jsx(d,{"aria-label":n,className:I("ds-pagination",o),ref:u,...l})}),N=g.forwardRef(function(n,a){return e.jsx(S,{ref:a,...n})}),V=g.forwardRef(function({asChild:n,className:a,...o},l){const u=n?b:"li";return e.jsx(u,{ref:l,...o})}),z=g.forwardRef(function({asChild:n,...a},o){const l=n?b:"ul";return e.jsx(l,{ref:o,...a})}),P=Object.assign(_,{List:z,Item:V,Button:N});P.List.displayName="Pagination.List";P.Item.displayName="Pagination.Item";P.Button.displayName="Pagination.Button";const r=P,f=k;try{r.displayName="Pagination",r.__docgenInfo={description:"",displayName:"Pagination",props:{"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}},"aria-label":{defaultValue:{value:"Sidenavigering"},description:"Sets the screen reader label for the Pagination area",name:"aria-label",required:!1,type:{name:"string"}},asChild:{defaultValue:{value:"false"},description:"Change the default rendered element for the one passed as a child, merging their props and behavior.",name:"asChild",required:!1,type:{name:"boolean"}}}}}catch{}try{f.displayName="usePagination",f.__docgenInfo={description:"",displayName:"usePagination",props:{currentPage:{defaultValue:{value:"1"},description:"The current page number",name:"currentPage",required:!0,type:{name:"number"}},totalPages:{defaultValue:{value:"1"},description:"The total number of pages",name:"totalPages",required:!0,type:{name:"number"}},showPages:{defaultValue:{value:"7"},description:"The maximum number of pages to show",name:"showPages",required:!1,type:{name:"number"}},setCurrentPage:{defaultValue:null,description:"Callback to set the current page",name:"setCurrentPage",required:!1,type:{name:"(page: number) => void"}},onChange:{defaultValue:null,description:"Callback when the page changes",name:"onChange",required:!1,type:{name:"(event: MouseEvent<HTMLElement, MouseEvent>, page: number) => void"}}}}}catch{}const T={title:"Components/Pagination",component:r,tags:["autodocs"],parameters:{docs:{description:{component:"Pagination provides navigation between pages of information."}},layout:"centered"},argTypes:{"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},"aria-label":{control:"text",description:"Sets the screen reader label for the Pagination area",defaultValue:"Sidenavigering"},asChild:{control:"boolean",description:"Render as child element",defaultValue:!1},children:{control:!1},currentPage:{table:{disable:!0}},totalPages:{table:{disable:!0}},onChange:{table:{disable:!0}}}},p={render:t=>{const[n,a]=g.useState(4),o=10,{pages:l,prevButtonProps:u,nextButtonProps:d}=f({currentPage:n,totalPages:o,onChange:(s,i)=>a(i)});return e.jsx(r,{...t,children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Button,{...u,"aria-label":"Forrige side",children:"Forrige"})}),l.map(({page:s,itemKey:i,buttonProps:c})=>e.jsx(r.Item,{children:typeof s=="number"?e.jsx(r.Button,{...c,"aria-label":`Side ${s}`,children:s}):e.jsx("span",{children:"..."})},i)),e.jsx(r.Item,{children:e.jsx(r.Button,{...d,"aria-label":"Neste side",children:"Neste"})})]})})},args:{"data-size":"md","data-color":"neutral","aria-label":"Sidenavigering"}},m={render:t=>{const[n]=g.useState(4),a=10,{pages:o,prevButtonProps:l,nextButtonProps:u}=f({currentPage:n,totalPages:a}),d=s=>typeof s=="number"?`#/page-${s}`:"#";return e.jsx(r,{...t,children:e.jsxs(r.List,{children:[e.jsx(r.Item,{children:e.jsx(r.Button,{...l,asChild:!0,"aria-label":"Forrige side",children:e.jsx(h,{href:d(n-1),children:"Forrige"})})}),o.map(({page:s,itemKey:i,buttonProps:c})=>e.jsx(r.Item,{children:typeof s=="number"?e.jsx(r.Button,{...c,asChild:!0,"aria-label":`Side ${s}`,children:e.jsx(h,{href:d(s),children:s})}):e.jsx("span",{children:"..."})},i)),e.jsx(r.Item,{children:e.jsx(r.Button,{...u,asChild:!0,"aria-label":"Neste side",children:e.jsx(h,{href:d(n+1),children:"Neste"})})})]})})},args:{"data-size":"md","data-color":"accent","aria-label":"Sidenavigering (lenker)"},name:"With Links (asChild)"};var y,x,B;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(B=(x=p.parameters)==null?void 0:x.docs)==null?void 0:B.source}}};var v,C,j;m.parameters={...m.parameters,docs:{...(v=m.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(j=(C=m.parameters)==null?void 0:C.docs)==null?void 0:j.source}}};const W=["Default","WithLinks"];export{p as Default,m as WithLinks,W as __namedExportsOrder,T as default};
