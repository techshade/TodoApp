import{c as f,j as e,r as h,U as u,u as w,P as b,T as y,E as T,a as C,D as j,C as D,n as d}from"./index-DHRrVd1t.js";import S from"./NotFound-Bjb0MmcR.js";const p=f(e.jsx("path",{d:"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"}),"Clear"),N=()=>{var c;const{user:t}=h.useContext(u),{tasks:m,emojisStyle:g}=t,{id:o}=w(),x=o==null?void 0:o.replace(".",""),n=m.find(a=>a.id.toString().replace(".","")===x);if(h.useEffect(()=>{document.title=`Todo App - ${(n==null?void 0:n.name)||"Task Details"}`},[n==null?void 0:n.name]),!n)return e.jsx(S,{message:e.jsxs("div",{children:["Task with id ",e.jsx(b,{children:x})," was not found."]})});const l=new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"short"});return e.jsxs(e.Fragment,{children:[e.jsx(y,{title:"Task Details"}),e.jsxs(v,{children:[e.jsxs(z,{children:["Task: ",e.jsx("span",{translate:"no",children:n.name})]}),e.jsx(E,{children:e.jsxs("tbody",{children:[e.jsxs(i,{children:[e.jsx(s,{children:"Emoji:"}),e.jsx(r,{children:n.emoji?e.jsxs(e.Fragment,{children:[e.jsx(T,{unified:(n==null?void 0:n.emoji)||"",size:32,emojiStyle:g})," (",n.emoji,")"]}):e.jsx("i",{children:"none"})})]}),e.jsxs(i,{children:[e.jsx(s,{children:"ID:"}),e.jsx(r,{children:n==null?void 0:n.id})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Description:"}),e.jsx(r,{translate:"no",children:n==null?void 0:n.description})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Color:"}),e.jsxs(r,{children:[e.jsx(F,{clr:n.color}),C(n.color).name," (",n.color.toUpperCase(),")"]})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Created:"}),e.jsx(r,{children:l.format(new Date(n.date))})]}),(n==null?void 0:n.lastSave)&&e.jsxs(i,{children:[e.jsx(s,{children:"Last edited:"}),e.jsx(r,{children:l.format(new Date(n.lastSave))})]}),(n==null?void 0:n.deadline)&&e.jsxs(i,{children:[e.jsx(s,{children:"Task deadline:"}),e.jsx(r,{children:l.format(new Date(n.deadline))})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Done:"}),e.jsxs(r,{children:[n!=null&&n.done?e.jsx(j,{}):e.jsx(p,{})," ",n==null?void 0:n.done.toString()]})]}),e.jsxs(i,{children:[e.jsx(s,{children:"Pinned:"}),e.jsxs(r,{children:[n!=null&&n.pinned?e.jsx(j,{}):e.jsx(p,{})," ",n==null?void 0:n.pinned.toString()]})]}),(n==null?void 0:n.sharedBy)&&e.jsxs(i,{children:[e.jsx(s,{children:"Shared by: "}),e.jsx(r,{children:n.sharedBy})]}),n.category&&n.category.length>0&&e.jsxs(i,{children:[e.jsx(s,{children:"Categories:"}),e.jsx(r,{children:e.jsx(B,{children:(c=n==null?void 0:n.category)==null?void 0:c.map(a=>e.jsx(D,{category:a,glow:!1},a.id))})})]})]})})]})]})},v=d.div`
  display: flex;
  flex-direction: column;
  padding: 16px;
  border-radius: 32px;
  margin: 0 auto;
  margin-top: 100px;
  box-shadow: 0 0px 24px 2px rgba(0, 0, 0, 0.3);

  @media (min-width: 768px) {
    padding: 24px;
    width: 70%;
  }
`,z=d.h2`
  margin: 8px;
  text-align: center;
  font-size: 1.5em;

  @media (min-width: 768px) {
    font-size: 1.8em;
  }
`,E=d.table`
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
`,i=d.tr`
  border-bottom: 2px solid ${({theme:t})=>t.primary}41;

  &:last-child {
    border-bottom: none;
  }
`,s=d.th`
  text-align: left;
  padding: 8px;
  font-size: 1em;

  @media (min-width: 768px) {
    font-size: 1.2em;
  }
`,r=d.td`
  text-align: left;
  padding: 8px;
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 1em;
  word-break: break-all;
  @media (min-width: 768px) {
    font-size: 1.1em;
  }
`,F=d.div`
  width: 20px;
  height: 20px;
  border-radius: 6px;
  background-color: ${({clr:t})=>t};
`,B=d.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 6px;
`;export{N as default};
