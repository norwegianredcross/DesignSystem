import{r as t,j as e}from"./iframe-BOPNQRcS.js";import{c as W}from"./lite-DaUVFjkg.js";import{C as _}from"./checkbox-CDP8q2DU.js";import{T as I}from"./textfield-BAN1lXJG.js";import"./preload-helper-Dp1pzeXC.js";import"./index-BRMaQx2L.js";import"./index-6VuQ_pOC.js";import"./use-merge-refs-C-_QIizQ.js";import"./paragraph-BvS0rGNr.js";import"./input-DdoI0z8I.js";import"./label-CTFrPS6l.js";import"./textarea-Doxmu_Yw.js";const $=t.forwardRef(function({zebra:a=!1,stickyHeader:o=!1,border:b=!1,hover:d=!1,className:n,children:i,...u},p){return e.jsx("table",{className:W("ds-table",n),"data-border":b||void 0,"data-hover":d||void 0,"data-sticky-header":o||void 0,"data-zebra":a||void 0,ref:p,...u,children:i})}),q=t.forwardRef(function(a,o){return e.jsx("tbody",{ref:o,...a})}),Z=t.forwardRef(function(a,o){return e.jsx("td",{ref:o,...a})}),A=t.forwardRef(function(a,o){return e.jsx("tfoot",{ref:o,...a})}),K=t.forwardRef(function(a,o){return e.jsx("thead",{ref:o,...a})}),O=t.forwardRef(function({sort:a,children:o,...b},d){return e.jsx("th",{"aria-sort":a,ref:d,...b,children:a?e.jsx("button",{type:"button",children:o}):o})}),M=t.forwardRef(function(a,o){return e.jsx("tr",{ref:o,...a})}),s=Object.assign($,{Head:K,Body:q,Row:M,Cell:Z,HeaderCell:O,Foot:A});s.displayName="Table";s.Head.displayName="Table.Head";s.Body.displayName="Table.Body";s.Row.displayName="Table.Row";s.Cell.displayName="Table.Cell";s.HeaderCell.displayName="Table.HeaderCell";s.Foot.displayName="Table.Foot";const l=s;try{l.displayName="Table",l.__docgenInfo={description:"",displayName:"Table",props:{zebra:{defaultValue:{value:"false"},description:"Will give the table zebra striping",name:"zebra",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:"Will make the table header sticky",name:"stickyHeader",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"Will give the table a rounded border",name:"border",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"false"},description:"Will give the table a hover effect on rows",name:"hover",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const re={title:"Components/Table",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Table organizes and displays data in rows and columns for easy scanning and comparison."}},layout:"padded"},argTypes:{zebra:{control:"boolean",description:"Will give the table zebra striping",defaultValue:!1},stickyHeader:{control:"boolean",description:"Will make the table header sticky",defaultValue:!1},border:{control:"boolean",description:"Will give the table a rounded border",defaultValue:!1},hover:{control:"boolean",description:"Will give the table a hover effect on rows",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},caption:{table:{disable:!0}}}},c=[{id:1,col1:"Cell 1",col2:"Cell 2",col3:"Cell 3"},{id:2,col1:"Cell 4",col2:"Cell 5",col3:"Cell 6"},{id:3,col1:"Cell 7",col2:"Cell 8",col3:"Cell 9"}],g=[{id:1,name:"Lise Nordmann",email:"lise@nordmann.no",phone:"22345678"},{id:2,name:"Kari Nordmann",email:"kari@nordmann.no",phone:"87654321"},{id:3,name:"Ola Nordmann",email:"ola@nordmann.no",phone:"32345678"},{id:4,name:"Per Nordmann",email:"per@nordmann.no",phone:"12345678"}],m={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Table caption"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:c.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2}),e.jsx(l.Cell,{children:a.col3})]},a.id))}),e.jsx(l.Foot,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Footer 1"}),e.jsx(l.Cell,{children:"Footer 2"}),e.jsx(l.Cell,{children:"Footer 3"})]})})]}),args:{"data-size":"md","data-color":"neutral"}},C={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Zebra Striped Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"})]})}),e.jsxs(l.Body,{children:[c.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2})]},a.id)),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cell 10"}),e.jsx(l.Cell,{children:"Cell 11"})]})]})]}),args:{zebra:!0,"data-size":"md"},name:"Zebra Striping"},T={render:r=>e.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",border:"1px solid #ccc"},children:e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Sticky Header Table (Scroll Down)"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:[...c,...c,...c,...c].map((a,o)=>e.jsxs(l.Row,{children:[e.jsxs(l.Cell,{children:["Cell ",o*3+1]}),e.jsxs(l.Cell,{children:["Cell ",o*3+2]}),e.jsxs(l.Cell,{children:["Cell ",o*3+3]})]},`${a.id}-${o}`))})]})}),args:{stickyHeader:!0,"data-size":"md"},name:"Sticky Header"},f={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Table with Form Elements"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Select"}),e.jsx(l.HeaderCell,{scope:"col",children:"Name"}),e.jsx(l.HeaderCell,{scope:"col",children:"Input"})]})}),e.jsx(l.Body,{children:c.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:e.jsx(_,{"aria-label":`Select row ${a.id}`})}),e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:e.jsx(I,{"aria-label":`Input for ${a.col1}`,size:10})})]},a.id))})]}),args:{"data-size":"sm"},name:"With Form Elements"},h={render:r=>{const[a,o]=t.useState({key:"name",direction:"ascending"}),b=t.useMemo(()=>{let n=[...g];return a.key!==null&&a.direction!=="none"&&n.sort((i,u)=>{const p=i[a.key],y=u[a.key];return p<y?a.direction==="ascending"?-1:1:p>y?a.direction==="ascending"?1:-1:0}),n},[g,a]),d=n=>{let i="ascending";a.key===n&&a.direction==="ascending"?i="descending":a.key===n&&a.direction==="descending"&&(i="none",n=null),o({key:n,direction:i})};return e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Sortable Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{sort:a.key==="name"?a.direction:"none",onClick:()=>d("name"),scope:"col",style:{cursor:"pointer"},children:"Navn"}),e.jsx(l.HeaderCell,{sort:a.key==="email"?a.direction:"none",onClick:()=>d("email"),scope:"col",style:{cursor:"pointer"},children:"Epost"}),e.jsx(l.HeaderCell,{sort:a.key==="phone"?a.direction:"none",onClick:()=>d("phone"),scope:"col",style:{cursor:"pointer"},children:"Telefon"})]})}),e.jsx(l.Body,{children:b.map(n=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:n.name}),e.jsx(l.Cell,{children:n.email}),e.jsx(l.Cell,{children:n.phone})]},n.id))})]})},args:{"data-size":"md",hover:!0}};var H,x,j;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <caption>Table caption</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>
          <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>
          <Table.HeaderCell scope="col">Header 3</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {simpleData.map(row => <Table.Row key={row.id}>
            <Table.Cell>{row.col1}</Table.Cell>
            <Table.Cell>{row.col2}</Table.Cell>
            <Table.Cell>{row.col3}</Table.Cell>
          </Table.Row>)}
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell>Footer 1</Table.Cell>
          <Table.Cell>Footer 2</Table.Cell>
          <Table.Cell>Footer 3</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>,
  args: {
    'data-size': 'md',
    'data-color': 'neutral'
  }
}`,...(j=(x=m.parameters)==null?void 0:x.docs)==null?void 0:j.source}}};var w,k,R;C.parameters={...C.parameters,docs:{...(w=C.parameters)==null?void 0:w.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <caption>Zebra Striped Table</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>
          <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {simpleData.map(row => <Table.Row key={row.id}>
            <Table.Cell>{row.col1}</Table.Cell>
            <Table.Cell>{row.col2}</Table.Cell>
          </Table.Row>)}
         <Table.Row>
            <Table.Cell>Cell 10</Table.Cell>
            <Table.Cell>Cell 11</Table.Cell>
          </Table.Row>
      </Table.Body>
    </Table>,
  args: {
    zebra: true,
    // Enable zebra striping
    'data-size': 'md'
  },
  name: 'Zebra Striping'
}`,...(R=(k=C.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,v,z;T.parameters={...T.parameters,docs:{...(S=T.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: args =>
  // Need a container with fixed height to demonstrate sticky
  <div style={{
    maxHeight: '200px',
    overflowY: 'auto',
    border: '1px solid #ccc'
  }}>
      <Table {...args}>
        <caption>Sticky Header Table (Scroll Down)</caption>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell scope="col">Header 1</Table.HeaderCell>
            <Table.HeaderCell scope="col">Header 2</Table.HeaderCell>
            <Table.HeaderCell scope="col">Header 3</Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {/* Repeat data for scrolling */}
          {[...simpleData, ...simpleData, ...simpleData, ...simpleData].map((row, index) => <Table.Row key={\`\${row.id}-\${index}\`}>
              <Table.Cell>Cell {index * 3 + 1}</Table.Cell>
              <Table.Cell>Cell {index * 3 + 2}</Table.Cell>
              <Table.Cell>Cell {index * 3 + 3}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>,
  args: {
    stickyHeader: true,
    // Enable sticky header
    'data-size': 'md'
  },
  name: 'Sticky Header'
}`,...(z=(v=T.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var D,B,F;f.parameters={...f.parameters,docs:{...(D=f.parameters)==null?void 0:D.docs,source:{originalSource:`{
  render: args => <Table {...args}>
       <caption>Table with Form Elements</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Select</Table.HeaderCell>
          <Table.HeaderCell scope="col">Name</Table.HeaderCell>
          <Table.HeaderCell scope="col">Input</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        {simpleData.map(row => <Table.Row key={row.id}>
            <Table.Cell>
              <Checkbox aria-label={\`Select row \${row.id}\`} />
            </Table.Cell>
            <Table.Cell>{row.col1}</Table.Cell>
            <Table.Cell>
              <Textfield aria-label={\`Input for \${row.col1}\`} size={10} />
            </Table.Cell>
          </Table.Row>)}
      </Table.Body>
    </Table>,
  args: {
    'data-size': 'sm' // Smaller size often better with form elements
  },
  name: 'With Form Elements'
}`,...(F=(B=f.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var N,E,V;h.parameters={...h.parameters,docs:{...(N=h.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
    return <Table {...args}>
        <caption>Sortable Table</caption>
        <Table.Head>
          <Table.Row>
            {/* Use onClick directly on HeaderCell */}
            <Table.HeaderCell sort={sortConfig.key === 'name' ? sortConfig.direction : 'none'} onClick={() => handleSort('name')} scope="col" style={{
            cursor: 'pointer'
          }}>
              Navn
            </Table.HeaderCell>
            <Table.HeaderCell sort={sortConfig.key === 'email' ? sortConfig.direction : 'none'} onClick={() => handleSort('email')} scope="col" style={{
            cursor: 'pointer'
          }}>
              Epost
            </Table.HeaderCell>
            <Table.HeaderCell sort={sortConfig.key === 'phone' ? sortConfig.direction : 'none'} onClick={() => handleSort('phone')} scope="col" style={{
            cursor: 'pointer'
          }}>
              Telefon
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sortedData.map(row => <Table.Row key={row.id}>
              <Table.Cell>{row.name}</Table.Cell>
              <Table.Cell>{row.email}</Table.Cell>
              <Table.Cell>{row.phone}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  },
  args: {
    'data-size': 'md',
    hover: true
  }
}`,...(V=(E=h.parameters)==null?void 0:E.docs)==null?void 0:V.source}}};const ne=["Default","ZebraStriped","StickyHeader","WithFormElements","Sortable"];export{m as Default,h as Sortable,T as StickyHeader,f as WithFormElements,C as ZebraStriped,ne as __namedExportsOrder,re as default};
