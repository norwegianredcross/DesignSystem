import{j as e}from"./jsx-runtime-D_zvdyIk.js";import{r as s}from"./index-D4lIrffr.js";import{c as I}from"./lite-DaUVFjkg.js";import{C as W}from"./Checkbox-Ea4y-weY.js";import{T as V}from"./Textfield-BbSKMBlZ.js";import"./index-CMMlhluM.js";import"./floating-ui.react-VFS6-CKd.js";import"./index-BQQLSK9g.js";import"./index-DsJinFGm.js";import"./index-Cb-ENzfG.js";import"./Paragraph-CJciD5B6.js";import"./Input-FgPaU4ty.js";import"./Label-DnboOLtM.js";import"./Textarea-ik62Jeuf.js";const Z=s.forwardRef(function({zebra:r=!1,stickyHeader:a=!1,border:b=!1,hover:d=!1,className:n,children:i,...u},p){return e.jsx("table",{className:I("ds-table",n),"data-border":b||void 0,"data-hover":d||void 0,"data-sticky-header":a||void 0,"data-zebra":r||void 0,ref:p,...u,children:i})}),A=s.forwardRef(function(r,a){return e.jsx("tbody",{ref:a,...r})}),K=s.forwardRef(function(r,a){return e.jsx("td",{ref:a,...r})}),O=s.forwardRef(function(r,a){return e.jsx("tfoot",{ref:a,...r})}),M=s.forwardRef(function(r,a){return e.jsx("thead",{ref:a,...r})}),Y=s.forwardRef(function({sort:r,children:a,...b},d){return e.jsx("th",{"aria-sort":r,ref:d,...b,children:r?e.jsx("button",{type:"button",children:a}):a})}),_=s.forwardRef(function(r,a){return e.jsx("tr",{ref:a,...r})}),t=Object.assign(Z,{Head:M,Body:A,Row:_,Cell:K,HeaderCell:Y,Foot:O});t.displayName="Table";t.Head.displayName="Table.Head";t.Body.displayName="Table.Body";t.Row.displayName="Table.Row";t.Cell.displayName="Table.Cell";t.HeaderCell.displayName="Table.HeaderCell";t.Foot.displayName="Table.Foot";const l=t,se={title:"Components/Table",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Table organizes and displays data in rows and columns for easy scanning and comparison."}},layout:"padded"},argTypes:{zebra:{control:"boolean",description:"Will give the table zebra striping",defaultValue:!1},stickyHeader:{control:"boolean",description:"Will make the table header sticky",defaultValue:!1},border:{control:"boolean",description:"Will give the table a rounded border",defaultValue:!1},hover:{control:"boolean",description:"Will give the table a hover effect on rows",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},caption:{table:{disable:!0}}}},c=[{id:1,col1:"Cell 1",col2:"Cell 2",col3:"Cell 3"},{id:2,col1:"Cell 4",col2:"Cell 5",col3:"Cell 6"},{id:3,col1:"Cell 7",col2:"Cell 8",col3:"Cell 9"}],y=[{id:1,name:"Lise Nordmann",email:"lise@nordmann.no",phone:"22345678"},{id:2,name:"Kari Nordmann",email:"kari@nordmann.no",phone:"87654321"},{id:3,name:"Ola Nordmann",email:"ola@nordmann.no",phone:"32345678"},{id:4,name:"Per Nordmann",email:"per@nordmann.no",phone:"12345678"}],C={render:o=>e.jsxs(l,{...o,children:[e.jsx("caption",{children:"Table caption"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:c.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:r.col1}),e.jsx(l.Cell,{children:r.col2}),e.jsx(l.Cell,{children:r.col3})]},r.id))}),e.jsx(l.Foot,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Footer 1"}),e.jsx(l.Cell,{children:"Footer 2"}),e.jsx(l.Cell,{children:"Footer 3"})]})})]}),args:{"data-size":"md","data-color":"neutral"}},T={render:o=>e.jsxs(l,{...o,children:[e.jsx("caption",{children:"Zebra Striped Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"})]})}),e.jsxs(l.Body,{children:[c.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:r.col1}),e.jsx(l.Cell,{children:r.col2})]},r.id)),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cell 10"}),e.jsx(l.Cell,{children:"Cell 11"})]})]})]}),args:{zebra:!0,"data-size":"md"},name:"Zebra Striping"},m={render:o=>e.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",border:"1px solid #ccc"},children:e.jsxs(l,{...o,children:[e.jsx("caption",{children:"Sticky Header Table (Scroll Down)"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:[...c,...c,...c,...c].map((r,a)=>e.jsxs(l.Row,{children:[e.jsxs(l.Cell,{children:["Cell ",a*3+1]}),e.jsxs(l.Cell,{children:["Cell ",a*3+2]}),e.jsxs(l.Cell,{children:["Cell ",a*3+3]})]},`${r.id}-${a}`))})]})}),args:{stickyHeader:!0,"data-size":"md"},name:"Sticky Header"},h={render:o=>e.jsxs(l,{...o,children:[e.jsx("caption",{children:"Table with Form Elements"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Select"}),e.jsx(l.HeaderCell,{scope:"col",children:"Name"}),e.jsx(l.HeaderCell,{scope:"col",children:"Input"})]})}),e.jsx(l.Body,{children:c.map(r=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:e.jsx(W,{"aria-label":`Select row ${r.id}`})}),e.jsx(l.Cell,{children:r.col1}),e.jsx(l.Cell,{children:e.jsx(V,{"aria-label":`Input for ${r.col1}`,size:10})})]},r.id))})]}),args:{"data-size":"sm"},name:"With Form Elements"},f={render:o=>{const[r,a]=s.useState({key:"name",direction:"ascending"}),b=s.useMemo(()=>{let n=[...y];return r.key!==null&&r.direction!=="none"&&n.sort((i,u)=>{const p=i[r.key],x=u[r.key];return p<x?r.direction==="ascending"?-1:1:p>x?r.direction==="ascending"?1:-1:0}),n},[y,r]),d=n=>{let i="ascending";r.key===n&&r.direction==="ascending"?i="descending":r.key===n&&r.direction==="descending"&&(i="none",n=null),a({key:n,direction:i})};return e.jsxs(l,{...o,children:[e.jsx("caption",{children:"Sortable Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{sort:r.key==="name"?r.direction:"none",onClick:()=>d("name"),scope:"col",style:{cursor:"pointer"},children:"Navn"}),e.jsx(l.HeaderCell,{sort:r.key==="email"?r.direction:"none",onClick:()=>d("email"),scope:"col",style:{cursor:"pointer"},children:"Epost"}),e.jsx(l.HeaderCell,{sort:r.key==="phone"?r.direction:"none",onClick:()=>d("phone"),scope:"col",style:{cursor:"pointer"},children:"Telefon"})]})}),e.jsx(l.Body,{children:b.map(n=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:n.name}),e.jsx(l.Cell,{children:n.email}),e.jsx(l.Cell,{children:n.phone})]},n.id))})]})},args:{"data-size":"md",hover:!0}};var H,g,j;C.parameters={...C.parameters,docs:{...(H=C.parameters)==null?void 0:H.docs,source:{originalSource:`{
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
}`,...(j=(g=C.parameters)==null?void 0:g.docs)==null?void 0:j.source}}};var w,k,R;T.parameters={...T.parameters,docs:{...(w=T.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(k=T.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,B,D;m.parameters={...m.parameters,docs:{...(S=m.parameters)==null?void 0:S.docs,source:{originalSource:`{
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
}`,...(D=(B=m.parameters)==null?void 0:B.docs)==null?void 0:D.source}}};var v,z,F;h.parameters={...h.parameters,docs:{...(v=h.parameters)==null?void 0:v.docs,source:{originalSource:`{
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
}`,...(F=(z=h.parameters)==null?void 0:z.docs)==null?void 0:F.source}}};var N,E,$;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`{
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
}`,...($=(E=f.parameters)==null?void 0:E.docs)==null?void 0:$.source}}};const te=["Default","ZebraStriped","StickyHeader","WithFormElements","Sortable"];export{C as Default,f as Sortable,m as StickyHeader,h as WithFormElements,T as ZebraStriped,te as __namedExportsOrder,se as default};
