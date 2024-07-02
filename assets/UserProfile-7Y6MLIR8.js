import{c as k,j as e,r,U as W,ao as G,T as K,x as d,ag as X,ap as j,aq as Y,ar as q,as as J,at as C,au as P,av as Q,aw as Z,ax as R,e as l,ak as b,ay as U,f as I,g as $,h as z,az as p,af as ee,aA as te,K as g,I as E,J as m,aB as oe,aC as ae,n as c,ae as M,l as ne,aD as se}from"./index-DHRrVd1t.js";import{T as re}from"./TodayRounded-CBYr_2U8.js";import{D as ie}from"./Delete-9XRJBhZd.js";const le=k([e.jsx("path",{d:"M3 8c0 .55.45 1 1 1s1-.45 1-1V6h2c.55 0 1-.45 1-1s-.45-1-1-1H5V2c0-.55-.45-1-1-1s-1 .45-1 1v2H1c-.55 0-1 .45-1 1s.45 1 1 1h2z"},"0"),e.jsx("circle",{cx:"13",cy:"14",r:"3"},"1"),e.jsx("path",{d:"M21 6h-3.17l-1.24-1.35c-.37-.41-.91-.65-1.47-.65h-6.4c.17.3.28.63.28 1 0 1.1-.9 2-2 2H6v1c0 1.1-.9 2-2 2-.37 0-.7-.11-1-.28V20c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2m-8 13c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5"},"2")],"AddAPhotoRounded"),ce=k(e.jsx("path",{d:"M9 16.17 5.53 12.7a.9959.9959 0 0 0-1.41 0c-.39.39-.39 1.02 0 1.41l4.18 4.18c.39.39 1.02.39 1.41 0L20.29 7.71c.39-.39.39-1.02 0-1.41a.9959.9959 0 0 0-1.41 0z"}),"CheckRounded"),de=k(e.jsx("path",{d:"M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6"}),"Settings"),Ce=()=>{const{user:o,setUser:i}=r.useContext(W),{name:a,profilePicture:x,createdAt:y}=o,[n,v]=r.useState(""),[s,B]=r.useState(""),[F,w]=r.useState(!1),[O,S]=r.useState(!1),[_,T]=r.useState(!1),h=G();r.useEffect(()=>{document.title=`Todo App - User ${a?`(${a})`:""}`},[a]);const A=()=>{n.length<=l&&n!==a&&(i({...o,name:n}),g(e.jsxs("div",{children:["Changed user name",n&&e.jsxs(e.Fragment,{children:[" ","to ",e.jsx("b",{translate:"no",children:n})]}),"."]})),v(""))},D=()=>{w(!0)},u=()=>{w(!1)},f=()=>{S(!1)},H=()=>{i(se),f(),g("You have been successfully logged out")},L=()=>{s.length<=p&&s.startsWith("https://")&&(u(),i(t=>({...t,profilePicture:s})),g("Changed profile picture."))};return e.jsxs(e.Fragment,{children:[e.jsx(K,{title:"User Profile"}),e.jsxs(pe,{children:[e.jsx(d,{title:"App Settings",children:e.jsx(X,{onClick:()=>T(!0),"aria-label":"Settings",size:"large",sx:{position:"absolute",top:"24px",right:"24px"},children:e.jsx(de,{fontSize:"large"})})}),e.jsx(d,{title:x?"Change profile picture":"Add profile picture",children:e.jsx(j,{overlap:"circular",anchorOrigin:{vertical:"bottom",horizontal:"right"},badgeContent:e.jsx(Y,{onClick:D,sx:{background:"#9c9c9c81",backdropFilter:"blur(10px)",cursor:"pointer"},children:e.jsx(le,{})}),children:e.jsx(q,{onClick:D,src:x||void 0,hasImage:x!==null,size:"96px",children:a?a[0].toUpperCase():void 0})})}),e.jsx(ue,{translate:a?"no":"yes",children:a||"User"}),e.jsx(d,{title:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"medium"}).format(new Date(y)),children:e.jsxs(ge,{children:[e.jsx(re,{fontSize:"small"})," Registered ",J(y)]})}),e.jsxs(xe,{container:!0,maxWidth:"300px",marginBottom:"6px",marginTop:"1px",display:"flex",justifyContent:"left",alignItems:"center",gap:1,children:[e.jsx(C,{item:!0,children:e.jsx(d,{title:`System (${h})`,children:e.jsx(P,{clr:h==="dark"||h==="unknown"?"#3d3e59":"#ffffff",style:{transition:".3s background"},size:"40px",onClick:()=>{i(t=>({...t,theme:"system"}))},children:e.jsx(j,{badgeContent:o.theme==="system"?e.jsx(N,{}):void 0,children:e.jsx(Q,{sx:{color:h==="dark"?"white":"black"}})})})})}),Z.map(t=>e.jsx(C,{children:e.jsx(d,{title:t.name[0].toUpperCase()+t.name.replace(t.name[0],""),children:e.jsx(P,{clr:t.MuiTheme.palette.primary.main,secondClr:t.MuiTheme.palette.secondary.main,"aria-label":`Change theme - ${t.name}`,size:"40px",style:{border:o.theme===t.name?`3px solid ${t.MuiTheme.palette.primary.main}`:"none"},onClick:()=>{i(V=>({...V,theme:t.name}))},children:e.jsx(j,{badgeContent:o.theme===t.name?e.jsx(N,{}):void 0,children:e.jsx("div",{style:{width:"24px",height:"24px"}})})})})},t.name))]}),e.jsx(R,{sx:{width:"300px"},label:a===null?"Add Name":"Change Name",value:n,onChange:t=>v(t.target.value),onKeyDown:t=>t.key==="Enter"&&A(),error:n.length>l||n===a&&a!=="",helperText:n.length>l?`Name exceeds ${l} characters`:n.length>0&&n!==a?`${n.length}/${l}`:n===a&&a!==""?"New username matches old one.":"",autoComplete:"nickname"}),e.jsx(he,{onClick:A,disabled:n.length>l||n===a,children:"Save name"}),e.jsxs(b,{color:"error",variant:"outlined",sx:{p:"12px 20px",borderRadius:"14px",marginTop:"8px"},onClick:()=>S(!0),children:[e.jsx(U,{}),"  Logout"]})]}),e.jsxs(I,{open:F,onClose:u,children:[e.jsx($,{children:"Change Profile Picture"}),e.jsxs(z,{children:[e.jsx(R,{autoFocus:!0,label:"Link to profile picture",placeholder:"Enter link to profile picture...",sx:{my:"8px",width:"300px"},value:s,onChange:t=>{B(t.target.value)},onKeyDown:t=>t.key==="Enter"&&L(),error:s.length>p,helperText:s.length>p?`URL is too long maximum ${p} characters`:"",autoComplete:"url",type:"url",InputProps:{startAdornment:e.jsx(ee,{position:"start",children:e.jsx(te,{})})}}),e.jsx("br",{}),x!==null&&e.jsxs(b,{fullWidth:!0,onClick:()=>{u(),g("Deleted profile image."),i({...o,profilePicture:null})},color:"error",variant:"outlined",sx:{margin:"16px 0",p:"12px 20px",borderRadius:"14px"},children:[e.jsx(ie,{}),"   Delete Image"]})]}),e.jsxs(E,{children:[e.jsx(m,{onClick:u,children:"Cancel"}),e.jsxs(m,{disabled:s.length>p||!s.startsWith("https://"),onClick:L,children:[e.jsx(oe,{}),"   Save"]})]})]}),e.jsxs(I,{open:O,onClose:f,children:[e.jsx($,{children:"Logout Confirmation"}),e.jsxs(z,{children:["Are you sure you want to logout? ",e.jsx("b",{children:"Your tasks will not be saved."})]}),e.jsxs(E,{children:[e.jsx(m,{onClick:f,children:"Cancel"}),e.jsxs(m,{onClick:H,color:"error",children:[e.jsx(U,{}),"   Logout"]})]})]}),e.jsx(ae,{open:_,onClose:()=>T(!1)})]})},pe=c.div`
  margin: 0 auto;
  max-width: 400px;
  padding: 64px 48px;
  border-radius: 48px;
  box-shadow: 0px 4px 50px rgba(0, 0, 0, 0.25);
  background: ${({theme:o})=>o.darkmode?"#383838":"#f5f5f5"};
  color: ${({theme:o})=>o.darkmode?M.fontLight:M.fontDark};
  transition: border 0.3s, box-shadow 0.3s;
  border: 4px solid ${({theme:o})=>o.primary};
  box-shadow: 0 0 72px -1px ${({theme:o})=>o.primary+"bf"};
  display: flex;
  gap: 14px;
  flex-direction: column;
  align-items: center;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`,N=c(ce)`
  font-size: 18px;
  padding: 2px;
  color: white;
  background: #242427;
  border-radius: 100px;
`,xe=c(C)`
  background: ${({theme:o})=>o.darkmode?"#505050":"#d9d9d9"};
  padding: 10px;
  border-radius: 32px;
  overflow-y: auto;
`,he=c(b)`
  width: 300px;
  font-weight: 600;
  border: none;
  background: ${({theme:o})=>o.primary};
  color: ${({theme:o})=>ne(o.primary)};
  font-size: 18px;
  padding: 14px;
  border-radius: 16px;
  cursor: pointer;
  text-transform: capitalize;
  transition: background 0.3s, color 0.3s;
  &:hover {
    background: ${({theme:o})=>o.primary};
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
    color: white;
  }
`,ue=c.span`
  font-size: 20px;
  font-weight: 500;
`,ge=c.span`
  display: flex;
  align-items: center;
  font-style: italic;
  font-weight: 400;
  opacity: 0.8;
  margin-top: -5px;
  margin-bottom: 2px;
  // fix for browser translate
  & font {
    margin: 0 1px;
  }
`;export{Ce as default};
