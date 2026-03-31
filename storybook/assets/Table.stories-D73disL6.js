import{j as e,r as H}from"./iframe-BbkjnMVD.js";import{U as M,W as U,b as X}from"./tooltip-BCPcpl7m.js";const l=M;try{l.displayName="Table",l.__docgenInfo={description:"",displayName:"Table",props:{zebra:{defaultValue:{value:"false"},description:"Will give the table zebra striping",name:"zebra",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:"Will make the table header sticky",name:"stickyHeader",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"Will give the table a rounded border",name:"border",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"false"},description:"Will give the table a hover effect on rows",name:"hover",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const Y={title:"Components/Table",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Table organizes and displays data in rows and columns for easy scanning and comparison."}},layout:"padded"},argTypes:{zebra:{control:"boolean",description:"Will give the table zebra striping",defaultValue:!1},stickyHeader:{control:"boolean",description:"Will make the table header sticky",defaultValue:!1},border:{control:"boolean",description:"Will give the table a rounded border",defaultValue:!1},hover:{control:"boolean",description:"Will give the table a hover effect on rows",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["accent","brand1","brand2","brand3","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},caption:{table:{disable:!0}}}},s=[{id:1,col1:"Cell 1",col2:"Cell 2",col3:"Cell 3"},{id:2,col1:"Cell 4",col2:"Cell 5",col3:"Cell 6"},{id:3,col1:"Cell 7",col2:"Cell 8",col3:"Cell 9"}],u=[{id:1,name:"Lise Nordmann",email:"lise@nordmann.no",phone:"22345678"},{id:2,name:"Kari Nordmann",email:"kari@nordmann.no",phone:"87654321"},{id:3,name:"Ola Nordmann",email:"ola@nordmann.no",phone:"32345678"},{id:4,name:"Per Nordmann",email:"per@nordmann.no",phone:"12345678"}],t={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Table caption"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:s.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2}),e.jsx(l.Cell,{children:a.col3})]},a.id))}),e.jsx(l.Foot,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Footer 1"}),e.jsx(l.Cell,{children:"Footer 2"}),e.jsx(l.Cell,{children:"Footer 3"})]})})]}),args:{"data-size":"md","data-color":"neutral"}},i={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Zebra Striped Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"})]})}),e.jsxs(l.Body,{children:[s.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2})]},a.id)),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cell 10"}),e.jsx(l.Cell,{children:"Cell 11"})]})]})]}),args:{zebra:!0,"data-size":"md"},name:"Zebra Striping"},c={parameters:{a11y:{test:"todo"}},render:r=>e.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",border:"1px solid #ccc"},children:e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Sticky Header Table (Scroll Down)"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:[...s,...s,...s,...s].map((a,n)=>e.jsxs(l.Row,{children:[e.jsxs(l.Cell,{children:["Cell ",n*3+1]}),e.jsxs(l.Cell,{children:["Cell ",n*3+2]}),e.jsxs(l.Cell,{children:["Cell ",n*3+3]})]},`${a.id}-${n}`))})]})}),args:{stickyHeader:!0,"data-size":"md"},name:"Sticky Header"},b={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Table with Form Elements"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Select"}),e.jsx(l.HeaderCell,{scope:"col",children:"Name"}),e.jsx(l.HeaderCell,{scope:"col",children:"Input"})]})}),e.jsx(l.Body,{children:s.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:e.jsx(U,{"aria-label":`Select row ${a.id}`})}),e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:e.jsx(X,{"aria-label":`Input for ${a.col1}`,size:10})})]},a.id))})]}),args:{"data-size":"sm"},name:"With Form Elements"},p={render:r=>{const[a,n]=H.useState({key:"name",direction:"ascending"}),O=H.useMemo(()=>{const o=[...u];return a.key!==null&&a.direction!=="none"&&o.sort((d,P)=>{const x=d[a.key],g=P[a.key];return x<g?a.direction==="ascending"?-1:1:x>g?a.direction==="ascending"?1:-1:0}),o},[u,a]),h=o=>{let d="ascending";a.key===o&&a.direction==="ascending"?d="descending":a.key===o&&a.direction==="descending"&&(d="none",o=null),n({key:o,direction:d})};return e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Sortable Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{sort:a.key==="name"?a.direction:"none",onClick:()=>h("name"),scope:"col",style:{cursor:"pointer"},children:"Navn"}),e.jsx(l.HeaderCell,{sort:a.key==="email"?a.direction:"none",onClick:()=>h("email"),scope:"col",style:{cursor:"pointer"},children:"Epost"}),e.jsx(l.HeaderCell,{sort:a.key==="phone"?a.direction:"none",onClick:()=>h("phone"),scope:"col",style:{cursor:"pointer"},children:"Telefon"})]})}),e.jsx(l.Body,{children:O.map(o=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:o.name}),e.jsx(l.Cell,{children:o.email}),e.jsx(l.Cell,{children:o.phone})]},o.id))})]})},args:{"data-size":"md",hover:!0}},T={render:r=>e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs(l,{...r,style:{tableLayout:"fixed",width:600},children:[e.jsx("caption",{children:"Fixed Layout Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:s.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2}),e.jsx(l.Cell,{children:a.col3})]},a.id))})]})}),args:{"data-size":"md"},name:"Fixed Layout"},C={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Table with Border"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:s.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2}),e.jsx(l.Cell,{children:a.col3})]},a.id))})]}),args:{border:!0,"data-size":"md"},name:"With Border"},m={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Numeric Alignment"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Produkt"}),e.jsx(l.HeaderCell,{scope:"col",style:{textAlign:"right"},children:"Antall"}),e.jsx(l.HeaderCell,{scope:"col",style:{textAlign:"right"},children:"Sum"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Epler"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"12"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"120,00"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bananer"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"3"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"42,00"})]})]})]}),args:{"data-size":"md"}};var y,j,f;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(f=(j=t.parameters)==null?void 0:j.docs)==null?void 0:f.source}}};var w,k,R;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`{
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
}`,...(R=(k=i.parameters)==null?void 0:k.docs)==null?void 0:R.source}}};var S,v,z;c.parameters={...c.parameters,docs:{...(S=c.parameters)==null?void 0:S.docs,source:{originalSource:`{
  parameters: {
    a11y: {
      test: 'todo'
    }
  },
  // scrollable-region-focusable: scroll container needs keyboard access
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
}`,...(z=(v=c.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};var B,D,F;b.parameters={...b.parameters,docs:{...(B=b.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(F=(D=b.parameters)==null?void 0:D.docs)==null?void 0:F.source}}};var A,W,E;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
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
      const sortableItems = [...sortableData];
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
}`,...(E=(W=p.parameters)==null?void 0:W.docs)==null?void 0:E.source}}};var N,_,V;T.parameters={...T.parameters,docs:{...(N=T.parameters)==null?void 0:N.docs,source:{originalSource:`{
  render: args => <div style={{
    overflowX: 'auto'
  }}>
      <Table {...args} style={{
      tableLayout: 'fixed',
      width: 600
    }}>
        <caption>Fixed Layout Table</caption>
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
      </Table>
    </div>,
  args: {
    'data-size': 'md'
  },
  name: 'Fixed Layout'
}`,...(V=(_=T.parameters)==null?void 0:_.docs)==null?void 0:V.source}}};var I,$,L;C.parameters={...C.parameters,docs:{...(I=C.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <caption>Table with Border</caption>
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
    </Table>,
  args: {
    border: true,
    'data-size': 'md'
  },
  name: 'With Border'
}`,...(L=($=C.parameters)==null?void 0:$.docs)==null?void 0:L.source}}};var Z,q,K;m.parameters={...m.parameters,docs:{...(Z=m.parameters)==null?void 0:Z.docs,source:{originalSource:`{
  render: args => <Table {...args}>
      <caption>Numeric Alignment</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Produkt</Table.HeaderCell>
          <Table.HeaderCell scope="col" style={{
          textAlign: 'right'
        }}>Antall</Table.HeaderCell>
          <Table.HeaderCell scope="col" style={{
          textAlign: 'right'
        }}>Sum</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Epler</Table.Cell>
          <Table.Cell style={{
          textAlign: 'right'
        }}>12</Table.Cell>
          <Table.Cell style={{
          textAlign: 'right'
        }}>120,00</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Bananer</Table.Cell>
          <Table.Cell style={{
          textAlign: 'right'
        }}>3</Table.Cell>
          <Table.Cell style={{
          textAlign: 'right'
        }}>42,00</Table.Cell>
        </Table.Row>
      </Table.Body>
    </Table>,
  args: {
    'data-size': 'md'
  }
}`,...(K=(q=m.parameters)==null?void 0:q.docs)==null?void 0:K.source}}};const G=["Default","ZebraStriped","StickyHeader","WithFormElements","Sortable","FixedTable","WithBorder","Numbers"],ee=Object.freeze(Object.defineProperty({__proto__:null,Default:t,FixedTable:T,Numbers:m,Sortable:p,StickyHeader:c,WithBorder:C,WithFormElements:b,ZebraStriped:i,__namedExportsOrder:G,default:Y},Symbol.toStringTag,{value:"Module"}));export{t as D,c as S,ee as T,b as W,i as Z,p as a};
