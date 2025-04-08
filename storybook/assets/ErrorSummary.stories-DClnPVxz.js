import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{S as h}from"./index-C4xiViop.js";import{c as H}from"./lite-DaUVFjkg.js";import{r as s}from"./index-BKyFwriW.js";import{H as T}from"./Heading-DL3E0Np1.js";import{L as U}from"./Link-CSqylbm3.js";import"./_commonjsHelpers-CqkleIqs.js";const v=s.forwardRef(function({asChild:n,...a},i){const m=n?h:"li";return r.jsx(m,{...a,ref:i})}),w=(t,{asChild:n,className:a,...i},m)=>{const o=n?h:t;return r.jsx(o,{className:H("ds-list",a),ref:m,...i})},b=s.forwardRef(function(n,a){return w("ul",n,a)}),q=s.forwardRef(function(n,a){return w("ol",n,a)}),f={Item:v,Ordered:q,Unordered:b};f.Item.displayName="List.Item";f.Ordered.displayName="List.Ordered";f.Unordered.displayName="List.Unordered";const N=s.createContext({headingId:"heading",setHeadingId:()=>{}}),W=s.forwardRef(function({asChild:n,role:a="alert","aria-live":i="polite","aria-relevant":m="all",className:o,...d},R){const F=s.useId(),[E,C]=s.useState(F),O=n?h:"div";return r.jsx(N.Provider,{value:{headingId:E,setHeadingId:C},children:r.jsx(O,{"aria-labelledby":E,"aria-live":i,"aria-relevant":m,className:H("ds-error-summary",o),ref:R,role:a,...d})})}),P=s.forwardRef(function({className:n,id:a,...i},m){const{headingId:o,setHeadingId:d}=s.useContext(N);return s.useEffect(()=>{a&&o!==a&&d(a)},[o,a,d]),r.jsx(T,{id:o,ref:m,...i})}),D=s.forwardRef(function({...n},a){return r.jsx(v,{ref:a,...n})}),M=s.forwardRef(function({...n},a){return r.jsx(U,{ref:a,"data-color":"neutral",...n})}),_=s.forwardRef(function({...n},a){return r.jsx(f.Unordered,{...n,ref:a})}),e=Object.assign(W,{Heading:P,Item:D,List:_,Link:M});e.Item.displayName="ErrorSummary.Item";e.Heading.displayName="ErrorSummary.Heading";e.List.displayName="ErrorSummary.List";e.Link.displayName="ErrorSummary.Link";const Q={title:"Components/ErrorSummary",component:e,tags:["autodocs"],args:{children:r.jsxs(r.Fragment,{children:[r.jsx(e.Heading,{children:"There are 2 errors in the form"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#error1",children:"First name is required"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#error2",children:"Email is invalid"})})]})]})},argTypes:{children:{control:!1}}},c={},u={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(e.Heading,{children:"There are 3 errors in the form"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#error1",children:"First name is required"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#error2",children:"Email is invalid"})}),r.jsx(e.Item,{children:r.jsx(e.Link,{href:"#error3",children:"Password must be at least 8 characters"})})]})]})}},l={args:{children:r.jsxs(r.Fragment,{children:[r.jsx(e.Heading,{children:"There are 2 errors in the form"}),r.jsxs(e.List,{children:[r.jsx(e.Item,{children:"First name is required"}),r.jsx(e.Item,{children:"Email is invalid"})]})]})}};var y,S,L;c.parameters={...c.parameters,docs:{...(y=c.parameters)==null?void 0:y.docs,source:{originalSource:"{}",...(L=(S=c.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var p,x,I;u.parameters={...u.parameters,docs:{...(p=u.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: <>
        <ErrorSummary.Heading>There are 3 errors in the form</ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#error1">First name is required</ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#error2">Email is invalid</ErrorSummary.Link>
          </ErrorSummary.Item>
          <ErrorSummary.Item>
            <ErrorSummary.Link href="#error3">Password must be at least 8 characters</ErrorSummary.Link>
          </ErrorSummary.Item>
        </ErrorSummary.List>
      </>
  }
}`,...(I=(x=u.parameters)==null?void 0:x.docs)==null?void 0:I.source}}};var g,j,k;l.parameters={...l.parameters,docs:{...(g=l.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: <>
        <ErrorSummary.Heading>There are 2 errors in the form</ErrorSummary.Heading>
        <ErrorSummary.List>
          <ErrorSummary.Item>First name is required</ErrorSummary.Item>
          <ErrorSummary.Item>Email is invalid</ErrorSummary.Item>
        </ErrorSummary.List>
      </>
  }
}`,...(k=(j=l.parameters)==null?void 0:j.docs)==null?void 0:k.source}}};const V=["Default","WithMultipleErrors","WithoutLinks"];export{c as Default,u as WithMultipleErrors,l as WithoutLinks,V as __namedExportsOrder,Q as default};
