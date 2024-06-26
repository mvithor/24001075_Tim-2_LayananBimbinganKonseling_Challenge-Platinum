"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[5019],{26227:(e,o,r)=>{r.d(o,{A:()=>k});var t=r(98587),a=r(58168),n=r(65043),i=r(69292),l=r(68606),s=r(20992),c=r(6803),d=r(85291),p=r(56258),u=r(63336),m=r(72876),A=r(34535),h=r(93436);const x=n.createContext({});var g=r(12220),v=r(26240),f=r(70579);const b=["aria-describedby","aria-labelledby","BackdropComponent","BackdropProps","children","className","disableEscapeKeyDown","fullScreen","fullWidth","maxWidth","onBackdropClick","onClick","onClose","open","PaperComponent","PaperProps","scroll","TransitionComponent","transitionDuration","TransitionProps"],S=(0,A.Ay)(g.A,{name:"MuiDialog",slot:"Backdrop",overrides:(e,o)=>o.backdrop})({zIndex:-1}),W=(0,A.Ay)(d.A,{name:"MuiDialog",slot:"Root",overridesResolver:(e,o)=>o.root})({"@media print":{position:"absolute !important"}}),w=(0,A.Ay)("div",{name:"MuiDialog",slot:"Container",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.container,o["scroll".concat((0,c.A)(r.scroll))]]}})((e=>{let{ownerState:o}=e;return(0,a.A)({height:"100%","@media print":{height:"auto"},outline:0},"paper"===o.scroll&&{display:"flex",justifyContent:"center",alignItems:"center"},"body"===o.scroll&&{overflowY:"auto",overflowX:"hidden",textAlign:"center","&::after":{content:'""',display:"inline-block",verticalAlign:"middle",height:"100%",width:"0"}})})),y=(0,A.Ay)(u.A,{name:"MuiDialog",slot:"Paper",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.paper,o["scrollPaper".concat((0,c.A)(r.scroll))],o["paperWidth".concat((0,c.A)(String(r.maxWidth)))],r.fullWidth&&o.paperFullWidth,r.fullScreen&&o.paperFullScreen]}})((e=>{let{theme:o,ownerState:r}=e;return(0,a.A)({margin:32,position:"relative",overflowY:"auto","@media print":{overflowY:"visible",boxShadow:"none"}},"paper"===r.scroll&&{display:"flex",flexDirection:"column",maxHeight:"calc(100% - 64px)"},"body"===r.scroll&&{display:"inline-block",verticalAlign:"middle",textAlign:"left"},!r.maxWidth&&{maxWidth:"calc(100% - 64px)"},"xs"===r.maxWidth&&{maxWidth:"px"===o.breakpoints.unit?Math.max(o.breakpoints.values.xs,444):"max(".concat(o.breakpoints.values.xs).concat(o.breakpoints.unit,", 444px)"),["&.".concat(h.A.paperScrollBody)]:{[o.breakpoints.down(Math.max(o.breakpoints.values.xs,444)+64)]:{maxWidth:"calc(100% - 64px)"}}},r.maxWidth&&"xs"!==r.maxWidth&&{maxWidth:"".concat(o.breakpoints.values[r.maxWidth]).concat(o.breakpoints.unit),["&.".concat(h.A.paperScrollBody)]:{[o.breakpoints.down(o.breakpoints.values[r.maxWidth]+64)]:{maxWidth:"calc(100% - 64px)"}}},r.fullWidth&&{width:"calc(100% - 64px)"},r.fullScreen&&{margin:0,width:"100%",maxWidth:"100%",height:"100%",maxHeight:"none",borderRadius:0,["&.".concat(h.A.paperScrollBody)]:{margin:0,maxWidth:"100%"}})})),k=n.forwardRef((function(e,o){const r=(0,m.A)({props:e,name:"MuiDialog"}),d=(0,v.A)(),A={enter:d.transitions.duration.enteringScreen,exit:d.transitions.duration.leavingScreen},{"aria-describedby":g,"aria-labelledby":k,BackdropComponent:C,BackdropProps:D,children:M,className:P,disableEscapeKeyDown:B=!1,fullScreen:R=!1,fullWidth:N=!1,maxWidth:j="sm",onBackdropClick:T,onClick:F,onClose:E,open:I,PaperComponent:K=u.A,PaperProps:Y={},scroll:z="paper",TransitionComponent:X=p.A,transitionDuration:H=A,TransitionProps:L}=r,O=(0,t.A)(r,b),q=(0,a.A)({},r,{disableEscapeKeyDown:B,fullScreen:R,fullWidth:N,maxWidth:j,scroll:z}),G=(e=>{const{classes:o,scroll:r,maxWidth:t,fullWidth:a,fullScreen:n}=e,i={root:["root"],container:["container","scroll".concat((0,c.A)(r))],paper:["paper","paperScroll".concat((0,c.A)(r)),"paperWidth".concat((0,c.A)(String(t))),a&&"paperFullWidth",n&&"paperFullScreen"]};return(0,l.A)(i,h.f,o)})(q),J=n.useRef(),Q=(0,s.A)(k),U=n.useMemo((()=>({titleId:Q})),[Q]);return(0,f.jsx)(W,(0,a.A)({className:(0,i.A)(G.root,P),closeAfterTransition:!0,components:{Backdrop:S},componentsProps:{backdrop:(0,a.A)({transitionDuration:H,as:C},D)},disableEscapeKeyDown:B,onClose:E,open:I,ref:o,onClick:e=>{F&&F(e),J.current&&(J.current=null,T&&T(e),E&&E(e,"backdropClick"))},ownerState:q},O,{children:(0,f.jsx)(X,(0,a.A)({appear:!0,in:I,timeout:H,role:"presentation"},L,{children:(0,f.jsx)(w,{className:(0,i.A)(G.container),onMouseDown:e=>{J.current=e.target===e.currentTarget},ownerState:q,children:(0,f.jsx)(y,(0,a.A)({as:K,elevation:24,role:"dialog","aria-describedby":g,"aria-labelledby":Q},Y,{className:(0,i.A)(G.paper,Y.className),ownerState:q,children:(0,f.jsx)(x.Provider,{value:U,children:M})}))})}))}))}))},93436:(e,o,r)=>{r.d(o,{A:()=>i,f:()=>n});var t=r(57056),a=r(32400);function n(e){return(0,a.Ay)("MuiDialog",e)}const i=(0,t.A)("MuiDialog",["root","scrollPaper","scrollBody","container","paper","paperScrollPaper","paperScrollBody","paperWidthFalse","paperWidthXs","paperWidthSm","paperWidthMd","paperWidthLg","paperWidthXl","paperFullWidth","paperFullScreen"])},29347:(e,o,r)=>{r.d(o,{A:()=>x});var t=r(98587),a=r(58168),n=r(65043),i=r(69292),l=r(68606),s=r(34535),c=r(72876),d=r(57056),p=r(32400);function u(e){return(0,p.Ay)("MuiDialogActions",e)}(0,d.A)("MuiDialogActions",["root","spacing"]);var m=r(70579);const A=["className","disableSpacing"],h=(0,s.Ay)("div",{name:"MuiDialogActions",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,!r.disableSpacing&&o.spacing]}})((e=>{let{ownerState:o}=e;return(0,a.A)({display:"flex",alignItems:"center",padding:8,justifyContent:"flex-end",flex:"0 0 auto"},!o.disableSpacing&&{"& > :not(style) ~ :not(style)":{marginLeft:8}})})),x=n.forwardRef((function(e,o){const r=(0,c.A)({props:e,name:"MuiDialogActions"}),{className:n,disableSpacing:s=!1}=r,d=(0,t.A)(r,A),p=(0,a.A)({},r,{disableSpacing:s}),x=(e=>{const{classes:o,disableSpacing:r}=e,t={root:["root",!r&&"spacing"]};return(0,l.A)(t,u,o)})(p);return(0,m.jsx)(h,(0,a.A)({className:(0,i.A)(x.root,n),ownerState:p,ref:o},d))}))},41503:(e,o,r)=>{r.d(o,{A:()=>g});var t=r(98587),a=r(58168),n=r(65043),i=r(69292),l=r(68606),s=r(34535),c=r(72876),d=r(57056),p=r(32400);function u(e){return(0,p.Ay)("MuiDialogContent",e)}(0,d.A)("MuiDialogContent",["root","dividers"]);const m=(0,d.A)("MuiDialogTitle",["root"]);var A=r(70579);const h=["className","dividers"],x=(0,s.Ay)("div",{name:"MuiDialogContent",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,r.dividers&&o.dividers]}})((e=>{let{theme:o,ownerState:r}=e;return(0,a.A)({flex:"1 1 auto",WebkitOverflowScrolling:"touch",overflowY:"auto",padding:"20px 24px"},r.dividers?{padding:"16px 24px",borderTop:"1px solid ".concat((o.vars||o).palette.divider),borderBottom:"1px solid ".concat((o.vars||o).palette.divider)}:{[".".concat(m.root," + &")]:{paddingTop:0}})})),g=n.forwardRef((function(e,o){const r=(0,c.A)({props:e,name:"MuiDialogContent"}),{className:n,dividers:s=!1}=r,d=(0,t.A)(r,h),p=(0,a.A)({},r,{dividers:s}),m=(e=>{const{classes:o,dividers:r}=e,t={root:["root",r&&"dividers"]};return(0,l.A)(t,u,o)})(p);return(0,A.jsx)(x,(0,a.A)({className:(0,i.A)(m.root,n),ownerState:p,ref:o},d))}))}}]);
//# sourceMappingURL=5019.0ecbe751.chunk.js.map