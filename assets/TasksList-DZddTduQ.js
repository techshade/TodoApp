import{c as I,j as e,r as i,U as me,O as ge,M as ue,N as fe,a8 as ye,K as $,R as q,ae as T,b2 as Ce,b3 as Se,b4 as ke,af as W,b5 as be,b6 as Te,b7 as De,C as X,b8 as ve,b9 as we,x as S,ag as D,l as u,ah as ze,i as Ee,ba as Ie,bb as Me,bc as Le,k as Ae,m as Re,E as Y,o as Be,s as H,p as Fe,q as Oe,t as Ne,v as Pe,w as Ue,y as Ve,z as Ge,bd as $e,A as qe,B as We,aN as Xe,be as Ye,b1 as He,bf as Je,f as J,g as K,h as Z,F as Ke,I as _,J as v,aZ as Ze}from"./index-DHRrVd1t.js";import{u as _e}from"./useCtrlS-hhfr8Y4G.js";import{f as Qe}from"./formatDate-D_Tte-IX.js";import{D as es}from"./Delete-9XRJBhZd.js";const ss=I(e.jsx("path",{d:"m18 7-1.41-1.41-6.34 6.34 1.41 1.41zm4.24-1.41L11.66 16.17 7.48 12l-1.41 1.41L11.66 19l12-12zM.41 13.41 6 19l1.41-1.41L1.83 12z"}),"DoneAll"),ns=I(e.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"}),"MoreVert"),ts=I(e.jsx("path",{d:"M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"}),"Search"),rs=()=>{var V,G;const{user:o,setUser:k}=i.useContext(me),{selectedTaskId:p,setSelectedTaskId:Q,anchorEl:ee,setAnchorEl:se,setAnchorPosition:M,expandedTasks:ne,toggleShowMore:te,search:j,setSearch:L,highlightMatchingText:oe,multipleSelectedTasks:r,setMultipleSelectedTasks:b,handleSelectTask:ae,editModalOpen:le,setEditModalOpen:A,deleteDialogOpen:ie,setDeleteDialogOpen:R}=i.useContext(ge),w=!!ee,[re,z]=i.useState(!1),[m,B]=i.useState(void 0),[g,E]=ue(void 0,"selectedCategory","sessionStorage"),[de,F]=i.useState({}),O=fe(),N=ye();_e();const y=i.useMemo(()=>new Intl.ListFormat("en-US",{style:"long",type:"conjunction"}),[]),d=i.useMemo(()=>o.tasks.find(s=>s.id===p)||{},[o.tasks,p]),P=(s,n)=>{se(s.currentTarget),Q(n),s.target.tagName!=="BUTTON"?M({top:s.clientY,left:s.clientX}):M(null),!O&&!ne.has(n)&&te(n)},c=i.useCallback(s=>{var x;let n=s.filter(a=>a.pinned),t=s.filter(a=>!a.pinned);if(g!==void 0){const a=C=>{var f;return((f=C.category)==null?void 0:f.some(je=>je.id===g))??!1};t=t.filter(a),n=n.filter(a)}const l=j.toLowerCase(),h=a=>a.name.toLowerCase().includes(l)||a.description&&a.description.toLowerCase().includes(l);if(t=t.filter(h),n=n.filter(h),(x=o.settings[0])!=null&&x.doneToBottom){const a=t.filter(f=>f.done),C=t.filter(f=>!f.done);return[...n,...C,...a]}return[...n,...t]},[j,g,o.settings]),ce=()=>{var s;if(p){const n=o.tasks.filter(t=>t.id!==p);k(t=>({...t,tasks:n})),R(!1),$(e.jsxs("div",{children:["Deleted Task -"," ",e.jsx("b",{translate:"no",children:(s=o.tasks.find(t=>t.id===p))==null?void 0:s.name})]}))}},U=()=>{R(!1)},he=()=>{k(s=>({...s,tasks:s.tasks.map(n=>r.includes(n.id)?{...n,done:!0}:n)})),b([])},xe=()=>z(!0);i.useEffect(()=>{const s=c(o.tasks),n=[];s.forEach(l=>{l.category&&l.category.forEach(h=>{n.some(x=>x.id===h.id)||n.push(h)})});const t={};n.forEach(l=>{const h=s.filter(x=>{var a;return(a=x.category)==null?void 0:a.some(C=>C.id===l.id)});t[l.id]=h.length}),n.sort((l,h)=>{const x=t[l.id]||0;return(t[h.id]||0)-x}),B(n),F(t)},[o.tasks,j,c,B,F]);const pe=i.useCallback(s=>{if(location.pathname==="/share")return;const n=s.filter(t=>t.deadline&&new Date>new Date(t.deadline)&&!t.done);if(n.length>0){const t=n.map(l=>l.name);$(e.jsxs("div",{translate:"no",style:{wordBreak:"break-word"},children:[e.jsxs("b",{translate:"yes",children:["Overdue task",n.length>1&&"s",": "]}),y.format(t)]}),{type:"error",disableVibrate:!0,duration:3400,icon:e.jsx(q,{animate:!0,sx:{color:T.red}}),style:{borderColor:T.red,boxShadow:o.settings[0].enableGlow?`0 0 18px -8px ${T.red}`:"none"}})}},[y,o.settings]);return i.useEffect(()=>{pe(o.tasks)},[]),e.jsxs(e.Fragment,{children:[e.jsx(Ce,{}),e.jsxs(Se,{children:[o.tasks.length>0&&e.jsx(ke,{focused:!0,color:"primary",placeholder:"Search for task...",autoComplete:"off",value:j,onChange:s=>{L(s.target.value)},InputProps:{startAdornment:e.jsx(W,{position:"start",children:e.jsx(ts,{sx:{color:"white"}})}),endAdornment:j?e.jsx(W,{position:"end",children:e.jsx(be,{color:c(o.tasks).length===0&&o.tasks.length>0?"error":"default",onClick:()=>L(""),children:e.jsx(Te,{sx:{color:c(o.tasks).length===0&&o.tasks.length>0?`${T.red} !important`:"white",transition:".3s all"}})})}):void 0}}),m!==void 0&&(m==null?void 0:m.length)>0&&o.settings[0].enableCategories&&e.jsx(De,{children:m==null?void 0:m.map(s=>e.jsx(X,{category:s,emojiSizes:[24,20],list:"true",label:e.jsxs("div",{children:[e.jsx("span",{style:{fontWeight:"bold"},children:s.name}),e.jsxs("span",{style:{fontSize:"14px",opacity:.9,marginLeft:"4px"},children:["(",de[s.id],")"]})]}),onClick:()=>g!==s.id?E(s.id):E(void 0),onDelete:g===s.id?()=>E(void 0):void 0,sx:{boxShadow:"none",display:g===void 0||g===s.id?"inline-flex":"none",p:"20px 14px",fontSize:"16px"}},s.id))}),r.length>0&&e.jsxs(ve,{children:[e.jsxs("div",{children:[e.jsxs("h3",{children:[e.jsx(we,{}),"   Selected ",r.length," task",r.length>1?"s":""]}),e.jsx("span",{translate:"no",style:{fontSize:"14px",opacity:.8},children:y.format(r.map(s=>{var n;return(n=o.tasks.find(t=>t.id===s))==null?void 0:n.name}).filter(s=>s!==void 0))})]}),e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(S,{title:"Mark selected as done",children:e.jsx(D,{sx:{color:u(N.secondary)},size:"large",onClick:he,children:e.jsx(ss,{})})}),e.jsx(S,{title:"Delete selected",children:e.jsx(D,{color:"error",size:"large",onClick:xe,children:e.jsx(es,{})})}),e.jsx(S,{sx:{color:u(N.secondary)},title:"Cancel",children:e.jsx(D,{size:"large",onClick:()=>b([]),children:e.jsx(ze,{})})})]})]}),j&&c(o.tasks).length>1&&o.tasks.length>0&&e.jsx("div",{style:{textAlign:"center",fontSize:"18px",opacity:.9,marginTop:"12px"},children:e.jsxs("b",{children:["Found ",c(o.tasks).length," task",c(o.tasks).length>1?"s":""]})}),o.tasks.length!==0?c(o.tasks).map(s=>e.jsxs(Ee,{id:s.id.toString(),onContextMenu:n=>{n.preventDefault(),P(n,s.id)},backgroundColor:s.color,glow:o.settings[0].enableGlow,done:s.done,blur:p!==s.id&&w&&!O,children:[r.length>0&&e.jsx(Ie,{clr:u(s.color),checked:r.includes(s.id),icon:e.jsx(Me,{}),checkedIcon:e.jsx(Le,{}),onChange:()=>{r.includes(s.id)?b(n=>n.filter(t=>t!==s.id)):ae(s.id)}}),s.emoji||s.done?e.jsx(Ae,{clr:u(s.color),children:s.done?e.jsx(Re,{fontSize:"large"}):e.jsx(Y,{size:o.emojisStyle===Be.NATIVE?H.os==="iOS"||H.os==="macOS"?50:38:46,unified:s.emoji||"",emojiStyle:o.emojisStyle,lazyLoad:!0})}):null,e.jsxs(Fe,{translate:"no",children:[s.pinned&&e.jsxs(Oe,{translate:"yes",children:[e.jsx(Ne,{fontSize:"small"}),"   Pinned"]}),e.jsxs(Pe,{children:[e.jsx(Ue,{done:s.done,children:oe(s.name)}),e.jsx(S,{title:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"medium"}).format(new Date(s.date)),children:e.jsx(Ve,{children:Qe(new Date(s.date))})})]}),e.jsx(Ge,{done:s.done,children:e.jsx($e,{task:s})}),s.deadline&&e.jsx(S,{title:new Intl.DateTimeFormat(navigator.language,{dateStyle:"full",timeStyle:"medium"}).format(new Date(s.deadline)),placement:"bottom-start",children:e.jsxs(qe,{done:s.done,translate:"yes",children:[e.jsx(q,{fontSize:"small",animate:new Date>new Date(s.deadline)&&!s.done,sx:{color:`${u(s.color)} !important`}})," "," ",new Date(s.deadline).toLocaleDateString()," "," • ",new Date(s.deadline).toLocaleTimeString(),!s.done&&e.jsxs(e.Fragment,{children:[" • ",We(new Date(s.deadline))]})]})}),s.sharedBy&&e.jsxs("div",{translate:"yes",style:{opacity:.8,display:"flex",alignItems:"center",gap:"4px"},children:[e.jsx(Xe,{})," Shared by"," ",e.jsx("span",{translate:s.sharedBy==="User"?"yes":"no",children:s.sharedBy})]}),e.jsx("div",{style:{display:"flex",flexWrap:"wrap",gap:"4px 6px",justifyContent:"left",alignItems:"center"},children:s.category&&o.settings[0].enableCategories&&s.category.map(n=>e.jsx("div",{children:e.jsx(X,{category:n,borderclr:u(s.color)})},n.id))})]}),e.jsx(D,{"aria-label":"Task Menu","aria-controls":w?"task-menu":void 0,"aria-haspopup":"true","aria-expanded":w?"true":void 0,onClick:n=>P(n,s.id),sx:{color:u(s.color)},children:e.jsx(ns,{})})]},s.id)):e.jsxs(Ye,{children:[e.jsx("b",{children:"You don't have any tasks yet"}),e.jsx("br",{}),"Click on the ",e.jsx("b",{children:"+"})," button to add one"]}),j&&c(o.tasks).length===0&&o.tasks.length>0&&e.jsxs("div",{style:{textAlign:"center",fontSize:"20px",opacity:.9,marginTop:"18px"},children:[e.jsx("b",{children:"No tasks found"}),e.jsx("br",{}),"Try searching with different keywords.",e.jsx("div",{style:{marginTop:"14px"},children:e.jsx(He,{scale:.8})})]}),e.jsx(Je,{open:le,task:o.tasks.find(s=>s.id===p),onClose:()=>A(!1),onSave:s=>{const n=o.tasks.map(t=>t.id===s.id?{...t,name:s.name,color:s.color,emoji:s.emoji||void 0,description:s.description||void 0,deadline:s.deadline||void 0,category:s.category||void 0,lastSave:new Date}:t);k(t=>({...t,tasks:n})),A(!1)}})]}),e.jsxs(J,{open:ie,onClose:U,children:[e.jsx(K,{children:"Are you sure you want to delete the task?"}),e.jsx(Z,{children:d!==void 0&&e.jsxs(e.Fragment,{children:[d.emoji&&e.jsxs("p",{style:{display:"flex",justifyContent:"left",alignItems:"center",gap:"6px"},children:[e.jsx("b",{children:"Emoji:"})," ",e.jsx(Y,{size:28,emojiStyle:o.emojisStyle,unified:d.emoji})]}),e.jsxs("p",{children:[e.jsx("b",{children:"Task Name:"})," ",e.jsx("span",{translate:"no",children:d.name})]}),d.description&&e.jsxs("p",{children:[e.jsx("b",{children:"Task Description:"})," ",e.jsx("span",{translate:"no",children:d.description.replace(Ke,"[link]")})]}),((G=(V=d.category)==null?void 0:V[0])==null?void 0:G.name)&&e.jsxs("p",{children:[e.jsxs("b",{children:[d.category.length>1?"Categories":"Category",":"]})," ",e.jsx("span",{translate:"no",children:y.format(d.category.map(s=>s.name))})]})]})}),e.jsxs(_,{children:[e.jsx(v,{onClick:U,color:"primary",children:"Cancel"}),e.jsxs(v,{onClick:ce,color:"error",children:[e.jsx(Ze,{}),"   Delete"]})]})]}),e.jsxs(J,{open:re,children:[e.jsx(K,{children:"Are you sure you want to delete selected tasks?"}),e.jsx(Z,{translate:"no",children:y.format(r.map(s=>{var n;return(n=o.tasks.find(t=>t.id===s))==null?void 0:n.name}).filter(s=>s!==void 0))}),e.jsxs(_,{children:[e.jsx(v,{onClick:()=>z(!1),color:"primary",children:"Cancel"}),e.jsx(v,{onClick:()=>{k(s=>({...s,tasks:s.tasks.filter(n=>!r.includes(n.id))})),b([]),z(!1)},color:"error",children:"Delete"})]})]})]})};export{rs as TasksList};