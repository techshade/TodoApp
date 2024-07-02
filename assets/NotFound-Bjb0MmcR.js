import{c as e,j as t,b as s,r,b1 as i,P as c,n as o,ak as p}from"./index-DHRrVd1t.js";const x=e(t.jsx("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew"),g=({message:n})=>{const a=s();return r.useEffect(()=>{document.title="Todo App - Page Not Found"},[]),t.jsxs(d,{children:[t.jsx(l,{children:"404"}),t.jsx(i,{scale:.9}),t.jsx(h,{children:n||t.jsxs("div",{children:["Page"," ",t.jsx(c,{children:location.pathname.length>32?location.pathname.substring(0,29)+"...":location.pathname})," ","was not found."]})}),t.jsxs(m,{variant:"outlined",onClick:()=>a("/"),children:[t.jsx(x,{}),"   Go back to tasks"]})]})},d=o.div`
  text-align: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  min-width: 100vw;
  line-height: 2em;
`,l=o.h1`
  font-size: 128px;
  color: ${({theme:n})=>n.primary};
  text-shadow: 0 0 32px ${({theme:n})=>n.primary+"a9"};
  margin: 48px 0;
`,h=o.p`
  font-size: 22px;
  line-height: 1.8em;
  margin: 32px;
`,m=o(p)`
  padding: 12px 20px;
  font-size: 18px;
  border-radius: 16px;
  margin: 16px;
`;export{g as default};
