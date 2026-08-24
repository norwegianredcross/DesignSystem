import{j as e,r as R}from"./iframe-D80Xa7M6.js";import{X as ie,M as de,b as ce}from"./tooltip-Doz1AgRB.js";const l=ie;try{l.displayName="Table",l.__docgenInfo={description:"",displayName:"Table",props:{zebra:{defaultValue:{value:"false"},description:"Will give the table zebra striping",name:"zebra",required:!1,type:{name:"boolean"}},stickyHeader:{defaultValue:{value:"false"},description:"Will make the table header sticky",name:"stickyHeader",required:!1,type:{name:"boolean"}},border:{defaultValue:{value:"false"},description:"Will give the table a rounded border",name:"border",required:!1,type:{name:"boolean"}},hover:{defaultValue:{value:"false"},description:"Will give the table a hover effect on rows",name:"hover",required:!1,type:{name:"boolean"}},"data-size":{defaultValue:null,description:"Changes size for descendant Designsystemet components. Select from predefined sizes.",name:"data-size",required:!1,type:{name:"Size"}},"data-color":{defaultValue:null,description:`Changes color for descendant Designsystemet components.
Select from predefined colors and colors defined using theme.designsystemet.no.`,name:"data-color",required:!1,type:{name:"Color"}}}}}catch{}const{expect:t,within:s,userEvent:j}=__STORYBOOK_MODULE_TEST__,be={title:"Components/Table",component:l,tags:["autodocs"],parameters:{docs:{description:{component:"Table organizes and displays data in rows and columns for easy scanning and comparison."}},layout:"padded"},argTypes:{zebra:{control:"boolean",description:"Will give the table zebra striping",defaultValue:!1},stickyHeader:{control:"boolean",description:"Will make the table header sticky",defaultValue:!1},border:{control:"boolean",description:"Will give the table a rounded border",defaultValue:!1},hover:{control:"boolean",description:"Will give the table a hover effect on rows",defaultValue:!1},"data-size":{control:"select",options:["sm","md","lg"],description:"Changes size for descendant Designsystemet components.",defaultValue:"md"},"data-color":{control:"select",options:["primary-color-red","secondary-color-orange","secondary-color-rust","secondary-color-pink","additional-color-ocean","additional-color-jungle","neutral"],description:"Changes color for descendant Designsystemet components.",defaultValue:"neutral"},children:{control:!1},caption:{table:{disable:!0}}}},T=[{id:1,col1:"Cell 1",col2:"Cell 2",col3:"Cell 3"},{id:2,col1:"Cell 4",col2:"Cell 5",col3:"Cell 6"},{id:3,col1:"Cell 7",col2:"Cell 8",col3:"Cell 9"}],k=[{id:1,name:"Lise Nordmann",email:"lise@nordmann.no",phone:"22345678"},{id:2,name:"Kari Nordmann",email:"kari@nordmann.no",phone:"87654321"},{id:3,name:"Ola Nordmann",email:"ola@nordmann.no",phone:"32345678"},{id:4,name:"Per Nordmann",email:"per@nordmann.no",phone:"12345678"}],g={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Table caption"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:T.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2}),e.jsx(l.Cell,{children:a.col3})]},a.id))}),e.jsx(l.Foot,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Footer 1"}),e.jsx(l.Cell,{children:"Footer 2"}),e.jsx(l.Cell,{children:"Footer 3"})]})})]}),args:{"data-size":"md","data-color":"neutral"}},u={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Zebra Striped Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"})]})}),e.jsxs(l.Body,{children:[T.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2})]},a.id)),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Cell 10"}),e.jsx(l.Cell,{children:"Cell 11"})]})]})]}),args:{zebra:!0,"data-size":"md"},name:"Zebra Striping"},y={render:r=>e.jsx("div",{style:{maxHeight:"200px",overflowY:"auto",border:"1px solid var(--ds-color-neutral-border-subtle)"},tabIndex:0,role:"region","aria-label":"Tabell med rullbart innhold",children:e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Sticky Header Table (Scroll Down)"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:[...T,...T,...T,...T].map((a,n)=>e.jsxs(l.Row,{children:[e.jsxs(l.Cell,{children:["Cell ",n*3+1]}),e.jsxs(l.Cell,{children:["Cell ",n*3+2]}),e.jsxs(l.Cell,{children:["Cell ",n*3+3]})]},`${a.id}-${n}`))})]})}),args:{stickyHeader:!0,"data-size":"md"},name:"Sticky Header"},x={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Table with Form Elements"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Select"}),e.jsx(l.HeaderCell,{scope:"col",children:"Name"}),e.jsx(l.HeaderCell,{scope:"col",children:"Input"})]})}),e.jsx(l.Body,{children:T.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:e.jsx(de,{"aria-label":`Select row ${a.id}`})}),e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:e.jsx(ce,{"aria-label":`Input for ${a.col1}`,size:10})})]},a.id))})]}),args:{"data-size":"sm"},name:"With Form Elements"},H={render:r=>{const[a,n]=R.useState({key:"name",direction:"ascending"}),i=R.useMemo(()=>{const o=[...k];return a.key!==null&&a.direction!=="none"&&o.sort((c,b)=>{const p=c[a.key],C=b[a.key];return p<C?a.direction==="ascending"?-1:1:p>C?a.direction==="ascending"?1:-1:0}),o},[k,a]),d=o=>{let c="ascending";a.key===o&&a.direction==="ascending"?c="descending":a.key===o&&a.direction==="descending"&&(c="none",o=null),n({key:o,direction:c})};return e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Sortable Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{sort:a.key==="name"?a.direction:"none",onClick:()=>d("name"),scope:"col",style:{cursor:"pointer"},children:"Navn"}),e.jsx(l.HeaderCell,{sort:a.key==="email"?a.direction:"none",onClick:()=>d("email"),scope:"col",style:{cursor:"pointer"},children:"Epost"}),e.jsx(l.HeaderCell,{sort:a.key==="phone"?a.direction:"none",onClick:()=>d("phone"),scope:"col",style:{cursor:"pointer"},children:"Telefon"})]})}),e.jsx(l.Body,{children:i.map(o=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:o.name}),e.jsx(l.Cell,{children:o.email}),e.jsx(l.Cell,{children:o.phone})]},o.id))})]})},args:{"data-size":"md",hover:!0}},w={render:r=>e.jsx("div",{style:{overflowX:"auto"},children:e.jsxs(l,{...r,style:{tableLayout:"fixed",width:600},children:[e.jsx("caption",{children:"Fixed Layout Table"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:T.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2}),e.jsx(l.Cell,{children:a.col3})]},a.id))})]})}),args:{"data-size":"md"},name:"Fixed Layout"},f={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Table with Border"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Header 1"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 2"}),e.jsx(l.HeaderCell,{scope:"col",children:"Header 3"})]})}),e.jsx(l.Body,{children:T.map(a=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:a.col1}),e.jsx(l.Cell,{children:a.col2}),e.jsx(l.Cell,{children:a.col3})]},a.id))})]}),args:{border:!0,"data-size":"md"},name:"With Border"},v={render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Numeric Alignment"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Produkt"}),e.jsx(l.HeaderCell,{scope:"col",style:{textAlign:"right"},children:"Antall"}),e.jsx(l.HeaderCell,{scope:"col",style:{textAlign:"right"},children:"Sum"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Epler"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"12"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"120,00"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Bananer"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"3"}),e.jsx(l.Cell,{style:{textAlign:"right"},children:"42,00"})]})]})]}),args:{"data-size":"md"}},pe=[{id:1,aktivitet:"Leksehjelp",by:"Oslo",frivillige:12},{id:2,aktivitet:"Besøkstjeneste",by:"Tromsø",frivillige:24},{id:3,aktivitet:"Hjelpekorps",by:"Bergen",frivillige:31}],h={name:"Test: Sortable Columns",render:r=>{const[a,n]=R.useState(null),i=o=>n(c=>c&&c.key===o?{key:o,direction:c.direction==="ascending"?"descending":"ascending"}:{key:o,direction:"ascending"}),d=[...pe];return a&&d.sort((o,c)=>{const b=o[a.key],p=c[a.key],C=typeof b=="number"&&typeof p=="number"?b-p:String(b).localeCompare(String(p),"no");return a.direction==="ascending"?C:-C}),e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Aktiviteter i Røde Kors"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",sort:(a==null?void 0:a.key)==="aktivitet"?a.direction:"none",onClick:()=>i("aktivitet"),children:"Aktivitet"}),e.jsx(l.HeaderCell,{scope:"col",children:"By"}),e.jsx(l.HeaderCell,{scope:"col",sort:(a==null?void 0:a.key)==="frivillige"?a.direction:"none",onClick:()=>i("frivillige"),children:"Frivillige"})]})}),e.jsx(l.Body,{children:d.map(o=>e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:o.aktivitet}),e.jsx(l.Cell,{children:o.by}),e.jsx(l.Cell,{children:o.frivillige})]},o.id))})]})},args:{"data-size":"md"},play:async({canvasElement:r})=>{const n=s(r).getByRole("table",{name:"Aktiviteter i Røde Kors"}),i=s(n).getByRole("columnheader",{name:"Aktivitet"}),d=s(n).getByRole("columnheader",{name:"By"}),o=s(n).getByRole("columnheader",{name:"Frivillige"}),c=()=>{const[,p]=s(n).getAllByRole("rowgroup");return s(p).getAllByRole("row")},b=p=>s(c()[0]).getAllByRole("cell")[p].textContent;t(i).toHaveAttribute("aria-sort","none"),t(o).toHaveAttribute("aria-sort","none"),t(d).not.toHaveAttribute("aria-sort"),t(s(d).queryByRole("button")).not.toBeInTheDocument(),t(b(0)).toBe("Leksehjelp"),await j.click(s(i).getByRole("button")),t(i).toHaveAttribute("aria-sort","ascending"),t(b(0)).toBe("Besøkstjeneste"),await j.click(s(i).getByRole("button")),t(i).toHaveAttribute("aria-sort","descending"),t(b(0)).toBe("Leksehjelp"),t(d).not.toHaveAttribute("aria-sort"),await j.click(s(o).getByRole("button")),t(o).toHaveAttribute("aria-sort","ascending"),t(i).toHaveAttribute("aria-sort","none"),t(b(2)).toBe("12"),s(o).getByRole("button").focus(),await j.keyboard("{Enter}"),t(o).toHaveAttribute("aria-sort","descending"),t(b(2)).toBe("31"),t(b(0)).toBe("Hjelpekorps")}},m={name:"Test: Table Semantics",render:r=>e.jsxs(l,{...r,children:[e.jsx("caption",{children:"Medlemsoversikt"}),e.jsx(l.Head,{children:e.jsxs(l.Row,{children:[e.jsx(l.HeaderCell,{scope:"col",children:"Navn"}),e.jsx(l.HeaderCell,{scope:"col",children:"Lokalforening"})]})}),e.jsxs(l.Body,{children:[e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Kari Nordmann"}),e.jsx(l.Cell,{children:"Oslo Røde Kors"})]}),e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Ola Nordmann"}),e.jsx(l.Cell,{children:"Bergen Røde Kors"})]})]}),e.jsx(l.Foot,{children:e.jsxs(l.Row,{children:[e.jsx(l.Cell,{children:"Totalt"}),e.jsx(l.Cell,{children:"2 medlemmer"})]})})]}),args:{"data-size":"md"},play:async({canvasElement:r})=>{const n=s(r).getByRole("table",{name:"Medlemsoversikt"}),i=s(n).getAllByRole("rowgroup");t(i).toHaveLength(3);const d=s(n).getAllByRole("columnheader");t(d).toHaveLength(2);for(const o of d)t(o).toHaveAttribute("scope","col");t(s(n).getAllByRole("row")).toHaveLength(4),t(s(n).getByRole("cell",{name:"Kari Nordmann"})).toBeInTheDocument(),t(s(n).getByRole("cell",{name:"Bergen Røde Kors"})).toBeInTheDocument()}};var B,S,A;g.parameters={...g.parameters,docs:{...(B=g.parameters)==null?void 0:B.docs,source:{originalSource:`{
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
}`,...(A=(S=g.parameters)==null?void 0:S.docs)==null?void 0:A.source}}};var D,z,E;u.parameters={...u.parameters,docs:{...(D=u.parameters)==null?void 0:D.docs,source:{originalSource:`{
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
}`,...(E=(z=u.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var F,K,N;y.parameters={...y.parameters,docs:{...(F=y.parameters)==null?void 0:F.docs,source:{originalSource:`{
  render: args =>
  // A scrollable region must be reachable by keyboard: without
  // tabIndex={0} only mouse/touch users can scroll it, and keyboard
  // users can never see the rows below the fold (axe rule
  // "scrollable-region-focusable"). role="region" + aria-label give
  // the focus stop an announced name instead of a silent tab stop.
  <div style={{
    maxHeight: '200px',
    overflowY: 'auto',
    border: '1px solid var(--ds-color-neutral-border-subtle)'
  }} tabIndex={0} role="region" aria-label="Tabell med rullbart innhold">
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
}`,...(N=(K=y.parameters)==null?void 0:K.docs)==null?void 0:N.source}}};var I,L,_;x.parameters={...x.parameters,docs:{...(I=x.parameters)==null?void 0:I.docs,source:{originalSource:`{
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
}`,...(_=(L=x.parameters)==null?void 0:L.docs)==null?void 0:_.source}}};var W,O,V;H.parameters={...H.parameters,docs:{...(W=H.parameters)==null?void 0:W.docs,source:{originalSource:`{
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
}`,...(V=(O=H.parameters)==null?void 0:O.docs)==null?void 0:V.source}}};var M,q,$;w.parameters={...w.parameters,docs:{...(M=w.parameters)==null?void 0:M.docs,source:{originalSource:`{
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
}`,...($=(q=w.parameters)==null?void 0:q.docs)==null?void 0:$.source}}};var Z,P,G;f.parameters={...f.parameters,docs:{...(Z=f.parameters)==null?void 0:Z.docs,source:{originalSource:`{
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
}`,...(G=(P=f.parameters)==null?void 0:P.docs)==null?void 0:G.source}}};var U,X,Y;v.parameters={...v.parameters,docs:{...(U=v.parameters)==null?void 0:U.docs,source:{originalSource:`{
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
}`,...(Y=(X=v.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var J,Q,ee,le,ae;h.parameters={...h.parameters,docs:{...(J=h.parameters)==null?void 0:J.docs,source:{originalSource:`{
  name: 'Test: Sortable Columns',
  render: args => {
    type SortKey = 'aktivitet' | 'frivillige';
    type SortDirection = 'ascending' | 'descending';
    const [sortConfig, setSortConfig] = useState<{
      key: SortKey;
      direction: SortDirection;
    } | null>(null);
    const handleSort = (key: SortKey) => setSortConfig(prev => prev && prev.key === key ? {
      key,
      direction: prev.direction === 'ascending' ? 'descending' : 'ascending'
    } : {
      key,
      direction: 'ascending'
    });
    const sortedData = [...testActivityData];
    if (sortConfig) {
      sortedData.sort((a, b) => {
        const valA = a[sortConfig.key];
        const valB = b[sortConfig.key];
        const compared = typeof valA === 'number' && typeof valB === 'number' ? valA - valB : String(valA).localeCompare(String(valB), 'no');
        return sortConfig.direction === 'ascending' ? compared : -compared;
      });
    }
    return <Table {...args}>
        <caption>Aktiviteter i Røde Kors</caption>
        <Table.Head>
          <Table.Row>
            <Table.HeaderCell scope="col" sort={sortConfig?.key === 'aktivitet' ? sortConfig.direction : 'none'} onClick={() => handleSort('aktivitet')}>
              Aktivitet
            </Table.HeaderCell>
            <Table.HeaderCell scope="col">By</Table.HeaderCell>
            <Table.HeaderCell scope="col" sort={sortConfig?.key === 'frivillige' ? sortConfig.direction : 'none'} onClick={() => handleSort('frivillige')}>
              Frivillige
            </Table.HeaderCell>
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {sortedData.map(row => <Table.Row key={row.id}>
              <Table.Cell>{row.aktivitet}</Table.Cell>
              <Table.Cell>{row.by}</Table.Cell>
              <Table.Cell>{row.frivillige}</Table.Cell>
            </Table.Row>)}
        </Table.Body>
      </Table>;
  },
  args: {
    'data-size': 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const table = canvas.getByRole('table', {
      name: 'Aktiviteter i Røde Kors'
    });
    const activityHeader = within(table).getByRole('columnheader', {
      name: 'Aktivitet'
    });
    const cityHeader = within(table).getByRole('columnheader', {
      name: 'By'
    });
    const volunteersHeader = within(table).getByRole('columnheader', {
      name: 'Frivillige'
    });
    const getBodyRows = () => {
      const [, tbody] = within(table).getAllByRole('rowgroup');
      return within(tbody).getAllByRole('row');
    };
    const firstRowText = (cellIndex: number) => within(getBodyRows()[0]).getAllByRole('cell')[cellIndex].textContent;

    // Initial state: sortable columns expose aria-sort="none", the
    // non-sortable column has no aria-sort and no sort button
    expect(activityHeader).toHaveAttribute('aria-sort', 'none');
    expect(volunteersHeader).toHaveAttribute('aria-sort', 'none');
    expect(cityHeader).not.toHaveAttribute('aria-sort');
    expect(within(cityHeader).queryByRole('button')).not.toBeInTheDocument();

    // Unsorted: rows in data order
    expect(firstRowText(0)).toBe('Leksehjelp');

    // Click "Aktivitet" -> ascending, rows reorder alphabetically
    await userEvent.click(within(activityHeader).getByRole('button'));
    expect(activityHeader).toHaveAttribute('aria-sort', 'ascending');
    expect(firstRowText(0)).toBe('Besøkstjeneste');

    // Click again -> descending, first row changes
    await userEvent.click(within(activityHeader).getByRole('button'));
    expect(activityHeader).toHaveAttribute('aria-sort', 'descending');
    expect(firstRowText(0)).toBe('Leksehjelp');

    // The non-sortable column is unaffected by sorting
    expect(cityHeader).not.toHaveAttribute('aria-sort');

    // Click "Frivillige" -> numeric ascending sort, "Aktivitet" resets
    await userEvent.click(within(volunteersHeader).getByRole('button'));
    expect(volunteersHeader).toHaveAttribute('aria-sort', 'ascending');
    expect(activityHeader).toHaveAttribute('aria-sort', 'none');
    expect(firstRowText(2)).toBe('12');

    // Keyboard: Enter on the focused header button toggles to descending
    within(volunteersHeader).getByRole('button').focus();
    await userEvent.keyboard('{Enter}');
    expect(volunteersHeader).toHaveAttribute('aria-sort', 'descending');
    expect(firstRowText(2)).toBe('31');
    expect(firstRowText(0)).toBe('Hjelpekorps');
  }
}`,...(ee=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:ee.source},description:{story:`Tests sortable headers: clicking a sortable column header toggles aria-sort
between ascending and descending and actually reorders the rows. Switching
to another sortable column resets the first one, the non-sortable column is
unaffected, and sorting is keyboard-operable via the header button.`,...(ae=(le=h.parameters)==null?void 0:le.docs)==null?void 0:ae.description}}};var oe,re,te,ne,se;m.parameters={...m.parameters,docs:{...(oe=m.parameters)==null?void 0:oe.docs,source:{originalSource:`{
  name: 'Test: Table Semantics',
  render: args => <Table {...args}>
      <caption>Medlemsoversikt</caption>
      <Table.Head>
        <Table.Row>
          <Table.HeaderCell scope="col">Navn</Table.HeaderCell>
          <Table.HeaderCell scope="col">Lokalforening</Table.HeaderCell>
        </Table.Row>
      </Table.Head>
      <Table.Body>
        <Table.Row>
          <Table.Cell>Kari Nordmann</Table.Cell>
          <Table.Cell>Oslo Røde Kors</Table.Cell>
        </Table.Row>
        <Table.Row>
          <Table.Cell>Ola Nordmann</Table.Cell>
          <Table.Cell>Bergen Røde Kors</Table.Cell>
        </Table.Row>
      </Table.Body>
      <Table.Foot>
        <Table.Row>
          <Table.Cell>Totalt</Table.Cell>
          <Table.Cell>2 medlemmer</Table.Cell>
        </Table.Row>
      </Table.Foot>
    </Table>,
  args: {
    'data-size': 'md'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);

    // Caption gives the table its accessible name
    const table = canvas.getByRole('table', {
      name: 'Medlemsoversikt'
    });

    // thead, tbody and tfoot are all exposed as rowgroups
    const rowGroups = within(table).getAllByRole('rowgroup');
    expect(rowGroups).toHaveLength(3);

    // Column headers with scope="col"
    const headers = within(table).getAllByRole('columnheader');
    expect(headers).toHaveLength(2);
    for (const header of headers) {
      expect(header).toHaveAttribute('scope', 'col');
    }

    // 1 header row + 2 body rows + 1 footer row
    expect(within(table).getAllByRole('row')).toHaveLength(4);

    // Body cells are exposed as cells with their content
    expect(within(table).getByRole('cell', {
      name: 'Kari Nordmann'
    })).toBeInTheDocument();
    expect(within(table).getByRole('cell', {
      name: 'Bergen Røde Kors'
    })).toBeInTheDocument();
  }
}`,...(te=(re=m.parameters)==null?void 0:re.docs)==null?void 0:te.source},description:{story:`Tests structural table semantics: the caption names the table, header cells
are exposed as columnheaders with scope="col", head/body/foot are rowgroups,
and rows/cells are exposed with the expected roles and content.`,...(se=(ne=m.parameters)==null?void 0:ne.docs)==null?void 0:se.description}}};const Te=["Default","ZebraStriped","StickyHeader","WithFormElements","Sortable","FixedTable","WithBorder","Numbers","TestSortableColumns","TestTableSemantics"],Ce=Object.freeze(Object.defineProperty({__proto__:null,Default:g,FixedTable:w,Numbers:v,Sortable:H,StickyHeader:y,TestSortableColumns:h,TestTableSemantics:m,WithBorder:f,WithFormElements:x,ZebraStriped:u,__namedExportsOrder:Te,default:be},Symbol.toStringTag,{value:"Module"}));export{g as D,y as S,Ce as T,x as W,u as Z,H as a};
