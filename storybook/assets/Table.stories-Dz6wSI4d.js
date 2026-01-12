import{r as d,j as e}from"./iframe-yuJj-q-m.js";import{c as X}from"./lite-DaUVFjkg.js";import{C as Y}from"./checkbox-DFRo8Eee.js";import{T as U}from"./textfield-Dk_pirts.js";const G=d.forwardRef(function({zebra:r=!1,stickyHeader:o=!1,border:b=!1,hover:i=!1,className:s,children:c,...f},H){return e.jsx("table",{className:X("ds-table",s),"data-border":b||void 0,"data-hover":i||void 0,"data-sticky-header":o||void 0,"data-zebra":r||void 0,ref:H,...f,children:c})}),J=d.forwardRef(function(r,o){return e.jsx("tbody",{ref:o,...r})}),Q=d.forwardRef(function(r,o){return e.jsx("td",{ref:o,...r})}),ee=d.forwardRef(function(r,o){return e.jsx("tfoot",{ref:o,...r})}),le=d.forwardRef(function(r,o){return e.jsx("thead",{ref:o,...r})}),re=d.forwardRef(function({sort:r,children:o,...b},i){return e.jsx("th",{"aria-sort":r,ref:i,...b,children:r?e.jsx("button",{type:"button",children:o}):o})}),ae=d.forwardRef(function(r,o){return e.jsx("tr",{ref:o,...r})}),t=Object.assign(G,{Head:le,Body:J,Row:ae,Cell:Q,HeaderCell:re,Foot:ee});t.displayName="Table";t.Head.displayName="Table.Head";t.Body.displayName="Table.Body";t.Row.displayName="Table.Row";t.Cell.displayName="Table.Cell";t.HeaderCell.displayName="Table.HeaderCell";t.Foot.displayName="Table.Foot";const l=t;try{l.displayName="Table",l.__docgenInfo={description:"",displayName:"Table",props:{zebra:{defaultValue:{value:"false"},description:"Will give the table zebra striping",name:"zebra",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:"Will make the table header sticky",name:"stickyHeader",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"Will give the table a rounded border",name:"border",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"false"},description:"Will give the table a hover effect on rows",name:"hover",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const oe={title:"Components/Table",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Table organizes and displays data in rows and columns for easy scanning and comparison."}},layout:"padded"},argTypes:{zebra:{control:"boolean",description:"Will give the table zebra striping",defaultValue:!1},stickyHeader:{control:"boolean",description:"Will make the table header sticky",defaultValue:!1},border:{control:"boolean",description:"Will give the table a rounded border",defaultValue:!1},hover:{control:"boolean",description:"Will give the table a hover effect on rows",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},caption:{table:{disable:!0}}}},n=[{id:1,col1:"Cell 1",col2:"Cell 2",col3:"Cell 3"},{id:2,col1:"Cell 4",col2:"Cell 5",col3:"Cell 6"},{id:3,col1:"Cell 7",col2:"Cell 8",col3:"Cell 9"}],j=[{id:1,name:"Lise Nordmann",email:"lise@nordmann.no",phone:"22345678"},{id:2,name:"Kari Nordmann",email:"kari@nordmann.no",phone:"87654321"},{id:3,name:"Ola Nordmann",email:"ola@nordmann.no",phone:"32345678"},{id:4,name:"Per Nordmann",email:"per@nordmann.no",phone:"12345678"}],T={render:a=>e.jsxs(l,{...a,children:[e.jsx("caption",{children:"Table caption"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:r.col1}),e.jsx(l.Cell,{children:r.col2}),e.jsx(l.Cell,{children:r.col3})]},r.id))}),e.jsx(l.Foot,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Footer 1"}),e.jsx(l.Cell,{children:"Footer 2"}),e.jsx(l.Cell,{children:"Footer 3"})]})})]}),args:{"data-size":"md","data-color":"neutral"}},p={render:a=>e.jsxs(l,{...a,children:[e.jsx("caption",{children:"Zebra Striped Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"})]})}),e.jsxs(l.Body,{children:[n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:r.col1}),e.jsx(l.Cell,{children:r.col2})]},r.id)),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cell 10"}),e.jsx(l.Cell,{children:"Cell 11"})]})]})]}),args:{zebra:!0,"data-size":"md"},name:"Zebra Striping"},C={render:a=>e.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",border:"1px solid #ccc"},children:e.jsxs(l,{...a,children:[e.jsx("caption",{children:"Sticky Header Table (Scroll Down)"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:[...n,...n,...n,...n].map((r,o)=>e.jsxs(l.Row,{children:[e.jsxs(l.Cell,{children:["Cell ",o*3+1]}),e.jsxs(l.Cell,{children:["Cell ",o*3+2]}),e.jsxs(l.Cell,{children:["Cell ",o*3+3]})]},`${r.id}-${o}`))})]})}),args:{stickyHeader:!0,"data-size":"md"},name:"Sticky Header"},m={render:a=>e.jsxs(l,{...a,children:[e.jsx("caption",{children:"Table with Form Elements"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Select"}),e.jsx(l.HeaderCell,{scope:"col",children:"Name"}),e.jsx(l.HeaderCell,{scope:"col",children:"Input"})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:e.jsx(Y,{"aria-label":`Select row ${r.id}`})}),e.jsx(l.Cell,{children:r.col1}),e.jsx(l.Cell,{children:e.jsx(U,{"aria-label":`Input for ${r.col1}`,size:10})})]},r.id))})]}),args:{"data-size":"sm"},name:"With Form Elements"},h={render:a=>{const[r,o]=d.useState({key:"name",direction:"ascending"}),b=d.useMemo(()=>{let s=[...j];return r.key!==null&&r.direction!=="none"&&s.sort((c,f)=>{const H=c[r.key],g=f[r.key];return H<g?r.direction==="ascending"?-1:1:H>g?r.direction==="ascending"?1:-1:0}),s},[j,r]),i=s=>{let c="ascending";r.key===s&&r.direction==="ascending"?c="descending":r.key===s&&r.direction==="descending"&&(c="none",s=null),o({key:s,direction:c})};return e.jsxs(l,{...a,children:[e.jsx("caption",{children:"Sortable Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{sort:r.key==="name"?r.direction:"none",onClick:()=>i("name"),scope:"col",style:{cursor:"pointer"},children:"Navn"}),e.jsx(l.HeaderCell,{sort:r.key==="email"?r.direction:"none",onClick:()=>i("email"),scope:"col",style:{cursor:"pointer"},children:"Epost"}),e.jsx(l.HeaderCell,{sort:r.key==="phone"?r.direction:"none",onClick:()=>i("phone"),scope:"col",style:{cursor:"pointer"},children:"Telefon"})]})}),e.jsx(l.Body,{children:b.map(s=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:s.name}),e.jsx(l.Cell,{children:s.email}),e.jsx(l.Cell,{children:s.phone})]},s.id))})]})},args:{"data-size":"md",hover:!0}},x={render:a=>e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs(l,{...a,style:{tableLayout:"fixed",width:600},children:[e.jsx("caption",{children:"Fixed Layout Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:r.col1}),e.jsx(l.Cell,{children:r.col2}),e.jsx(l.Cell,{children:r.col3})]},r.id))})]})}),args:{"data-size":"md"},name:"Fixed Layout"},u={render:a=>e.jsxs(l,{...a,children:[e.jsx("caption",{children:"Table with Border"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:n.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:r.col1}),e.jsx(l.Cell,{children:r.col2}),e.jsx(l.Cell,{children:r.col3})]},r.id))})]}),args:{border:!0,"data-size":"md"},name:"With Border"},y={render:a=>e.jsxs(l,{...a,children:[e.jsx("caption",{children:"Numeric Alignment"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Produkt"}),e.jsx(l.HeaderCell,{scope:"col",style:{textAlign:"right"},children:"Antall"}),e.jsx(l.HeaderCell,{scope:"col",style:{textAlign:"right"},children:"Sum"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Epler"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"12"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"120,00"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bananer"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"3"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"42,00"})]})]})]}),args:{"data-size":"md"}};var w,R,k;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Table {...args}>\r
      <caption>Table caption</caption>\r
      <Table.Head>\r
        <Table.Row>\r
          <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>\r
          <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>\r
          <Table.HeaderCell scope="col">Header 3</Table.HeaderCell>\r
        </Table.Row>\r
      </Table.Head>\r
      <Table.Body>\r
        {simpleData.map(row => <Table.Row key={row.id}>\r
            <Table.Cell>{row.col1}</Table.Cell>\r
            <Table.Cell>{row.col2}</Table.Cell>\r
            <Table.Cell>{row.col3}</Table.Cell>\r
          </Table.Row>)}\r
      </Table.Body>\r
      <Table.Foot>\r
        <Table.Row>\r
          <Table.Cell>Footer 1</Table.Cell>\r
          <Table.Cell>Footer 2</Table.Cell>\r
          <Table.Cell>Footer 3</Table.Cell>\r
        </Table.Row>\r
      </Table.Foot>\r
    </Table>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(k=(R=T.parameters)==null?void 0:R.docs)==null?void 0:k.source}}};var S,B,v;p.parameters={...p.parameters,docs:{...(S=p.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args => <Table {...args}>\r
      <caption>Zebra Striped Table</caption>\r
      <Table.Head>\r
        <Table.Row>\r
          <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>\r
          <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>\r
        </Table.Row>\r
      </Table.Head>\r
      <Table.Body>\r
        {simpleData.map(row => <Table.Row key={row.id}>\r
            <Table.Cell>{row.col1}</Table.Cell>\r
            <Table.Cell>{row.col2}</Table.Cell>\r
          </Table.Row>)}\r
         <Table.Row>\r
            <Table.Cell>Cell 10</Table.Cell>\r
            <Table.Cell>Cell 11</Table.Cell>\r
          </Table.Row>\r
      </Table.Body>\r
    </Table>,
  args: {
    zebra: true,
    // Enable zebra striping
    'data-size': 'md'
  },
  name: 'Zebra Striping'
}`,...(v=(B=p.parameters)==null?void 0:B.docs)==null?void 0:v.source}}};var z,D,F;C.parameters={...C.parameters,docs:{...(z=C.parameters)==null?void 0:z.docs,source:{originalSource:`{
  render: args =>
  // Need a container with fixed height to demonstrate sticky
  <div style={{
    maxHeight: '200px',
    overflowY: 'auto',
    border: '1px solid #ccc'
  }}>\r
      <Table {...args}>\r
        <caption>Sticky Header Table (Scroll Down)</caption>\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>\r
            <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>\r
            <Table.HeaderCell scope="col">Header 3</Table.HeaderCell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          {/* Repeat data for scrolling */}\r
          {[...simpleData, ...simpleData, ...simpleData, ...simpleData].map((row, index) => <Table.Row key={\`\${row.id}-\${index}\`}>\r
              <Table.Cell>Cell {index * 3 + 1}</Table.Cell>\r
              <Table.Cell>Cell {index * 3 + 2}</Table.Cell>\r
              <Table.Cell>Cell {index * 3 + 3}</Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
      </Table>\r
    </div>,
  args: {
    stickyHeader: true,
    // Enable sticky header
    'data-size': 'md'
  },
  name: 'Sticky Header'
}`,...(F=(D=C.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var N,A,W;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <Table {...args}>\r
       <caption>Table with Form Elements</caption>\r
      <Table.Head>\r
        <Table.Row>\r
          <Table.HeaderCell scope="col">Select</Table.HeaderCell>\r
          <Table.HeaderCell scope="col">Name</Table.HeaderCell>\r
          <Table.HeaderCell scope="col">Input</Table.HeaderCell>\r
        </Table.Row>\r
      </Table.Head>\r
      <Table.Body>\r
        {simpleData.map(row => <Table.Row key={row.id}>\r
            <Table.Cell>\r
              <Checkbox aria-label={\`Select row \${row.id}\`} />\r
            </Table.Cell>\r
            <Table.Cell>{row.col1}</Table.Cell>\r
            <Table.Cell>\r
              <Textfield aria-label={\`Input for \${row.col1}\`} size={10} />\r
            </Table.Cell>\r
          </Table.Row>)}\r
      </Table.Body>\r
    </Table>,
  args: {
    'data-size': 'sm' // Smaller size often better with form elements
  },
  name: 'With Form Elements'
}`,...(W=(A=m.parameters)==null?void 0:A.docs)==null?void 0:W.source}}};var E,_,V;h.parameters={...h.parameters,docs:{...(E=h.parameters)==null?void 0:E.docs,source:{originalSource:`{
  render: args => {
    type SortDirection = 'ascending' | 'descending' | 'none';
    type SortKey = keyof typeof sortableData[0] | null | string;
    const [sortConfig, setSortConfig] = useState<{
      key: SortKey;
      direction: SortDirection;
    }>({
      key: 'name',
      direction: 'ascending'
    });
    const sortedData = useMemo(() => {
      let sortableItems = [...sortableData];
      if (sortConfig.key !== null && sortConfig.direction !== 'none') {
        sortableItems.sort((a, b) => {
          const valA = a[sortConfig.key as keyof typeof a];
          const valB = b[sortConfig.key as keyof typeof b];
          if (valA < valB) {
            return sortConfig.direction === 'ascending' ? -1 : 1;
          }
          if (valA > valB) {
            return sortConfig.direction === 'ascending' ? 1 : -1;
          }
          return 0;
        });
      }
      return sortableItems;
    }, [sortableData, sortConfig]); // Corrected dependency

    const handleSort = (key: SortKey) => {
      let direction: SortDirection = 'ascending';
      if (sortConfig.key === key && sortConfig.direction === 'ascending') {
        direction = 'descending';
      } else if (sortConfig.key === key && sortConfig.direction === 'descending') {
        direction = 'none';
        key = null;
      }
      setSortConfig({
        key,
        direction
      });
    };
    return <Table {...args}>\r
        <caption>Sortable Table</caption>\r
        <Table.Head>\r
          <Table.Row>\r
            {/* Use onClick directly on HeaderCell */}\r
            <Table.HeaderCell sort={sortConfig.key === 'name' ? sortConfig.direction : 'none'} onClick={() => handleSort('name')} scope="col" style={{
            cursor: 'pointer'
          }}>\r
              Navn\r
            </Table.HeaderCell>\r
            <Table.HeaderCell sort={sortConfig.key === 'email' ? sortConfig.direction : 'none'} onClick={() => handleSort('email')} scope="col" style={{
            cursor: 'pointer'
          }}>\r
              Epost\r
            </Table.HeaderCell>\r
            <Table.HeaderCell sort={sortConfig.key === 'phone' ? sortConfig.direction : 'none'} onClick={() => handleSort('phone')} scope="col" style={{
            cursor: 'pointer'
          }}>\r
              Telefon\r
            </Table.HeaderCell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          {sortedData.map(row => <Table.Row key={row.id}>\r
              <Table.Cell>{row.name}</Table.Cell>\r
              <Table.Cell>{row.email}</Table.Cell>\r
              <Table.Cell>{row.phone}</Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
      </Table>;
  },
  args: {
    'data-size': 'md',
    hover: true
  }
}`,...(V=(_=h.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var I,$,L;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <div style={{
    overflowX: 'auto'
  }}>\r
      <Table {...args} style={{
      tableLayout: 'fixed',
      width: 600
    }}>\r
        <caption>Fixed Layout Table</caption>\r
        <Table.Head>\r
          <Table.Row>\r
            <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>\r
            <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>\r
            <Table.HeaderCell scope="col">Header 3</Table.HeaderCell>\r
          </Table.Row>\r
        </Table.Head>\r
        <Table.Body>\r
          {simpleData.map(row => <Table.Row key={row.id}>\r
              <Table.Cell>{row.col1}</Table.Cell>\r
              <Table.Cell>{row.col2}</Table.Cell>\r
              <Table.Cell>{row.col3}</Table.Cell>\r
            </Table.Row>)}\r
        </Table.Body>\r
      </Table>\r
    </div>,
  args: {
    'data-size': 'md'
  },
  name: 'Fixed Layout'
}`,...(L=($=x.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var Z,q,O;u.parameters={...u.parameters,docs:{...(Z=u.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <Table {...args}>\r
      <caption>Table with Border</caption>\r
      <Table.Head>\r
        <Table.Row>\r
          <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>\r
          <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>\r
          <Table.HeaderCell scope="col">Header 3</Table.HeaderCell>\r
        </Table.Row>\r
      </Table.Head>\r
      <Table.Body>\r
        {simpleData.map(row => <Table.Row key={row.id}>\r
            <Table.Cell>{row.col1}</Table.Cell>\r
            <Table.Cell>{row.col2}</Table.Cell>\r
            <Table.Cell>{row.col3}</Table.Cell>\r
          </Table.Row>)}\r
      </Table.Body>\r
    </Table>,
  args: {
    border: true,
    'data-size': 'md'
  },
  name: 'With Border'
}`,...(O=(q=u.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var K,P,M;y.parameters={...y.parameters,docs:{...(K=y.parameters)==null?void 0:K.docs,source:{originalSource:`{
  render: args => <Table {...args}>\r
      <caption>Numeric Alignment</caption>\r
      <Table.Head>\r
        <Table.Row>\r
          <Table.HeaderCell scope="col">Produkt</Table.HeaderCell>\r
          <Table.HeaderCell scope="col" style={{
          textAlign: 'right'
        }}>Antall</Table.HeaderCell>\r
          <Table.HeaderCell scope="col" style={{
          textAlign: 'right'
        }}>Sum</Table.HeaderCell>\r
        </Table.Row>\r
      </Table.Head>\r
      <Table.Body>\r
        <Table.Row>\r
          <Table.Cell>Epler</Table.Cell>\r
          <Table.Cell style={{
          textAlign: 'right'
        }}>12</Table.Cell>\r
          <Table.Cell style={{
          textAlign: 'right'
        }}>120,00</Table.Cell>\r
        </Table.Row>\r
        <Table.Row>\r
          <Table.Cell>Bananer</Table.Cell>\r
          <Table.Cell style={{
          textAlign: 'right'
        }}>3</Table.Cell>\r
          <Table.Cell style={{
          textAlign: 'right'
        }}>42,00</Table.Cell>\r
        </Table.Row>\r
      </Table.Body>\r
    </Table>,
  args: {
    'data-size': 'md'
  }
}`,...(M=(P=y.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};const se=["Default","ZebraStriped","StickyHeader","WithFormElements","Sortable","FixedTable","WithBorder","Numbers"],ce=Object.freeze(Object.defineProperty({__proto__:null,Default:T,FixedTable:x,Numbers:y,Sortable:h,StickyHeader:C,WithBorder:u,WithFormElements:m,ZebraStriped:p,__namedExportsOrder:se,default:oe},Symbol.toStringTag,{value:"Module"}));export{T as D,C as S,ce as T,m as W,p as Z,h as a};
