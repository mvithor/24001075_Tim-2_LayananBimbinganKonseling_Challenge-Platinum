"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[6944],{33211:(e,t,a)=>{a.d(t,{A:()=>n});var r=a(40854);const s=a.n(r)().create({baseURL:"http://localhost:4000",timeout:1e4});s.interceptors.request.use((e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(e=>Promise.reject(e))),s.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),window.location.href="/auth/login"),Promise.reject(e))));const n=s},16944:(e,t,a)=>{a.r(t),a.d(t,{default:()=>F});var r=a(65043),s=a(35475),n=a(68903),i=a(96446),o=a(85865),l=a(74600),c=a(42231),d=a(88477),h=a(72560),p=a(39336),x=a(51787),u=a(17392),m=a(69413),g=a(74605),j=a(11906),A=a(14194),f=a(79456),w=a(73216),b=a(34535),y=a(23217),v=a(70579);const k=(0,b.Ay)("span")((e=>{let{theme:t}=e;return{borderRadius:3,width:19,height:19,marginLeft:"4px",boxShadow:"dark"===t.palette.mode?"0 0 0 1px ".concat(t.palette.grey[200]):"inset 0 0 0 1px ".concat(t.palette.grey[300]),backgroundColor:"transparent",".Mui-focusVisible &":{outline:"dark"===t.palette.mode?"0px auto ".concat(t.palette.grey[200]):"0px auto  ".concat(t.palette.grey[300]),outlineOffset:2},"input:hover ~ &":{backgroundColor:(t.palette.mode,t.palette.primary)},"input:disabled ~ &":{boxShadow:"none",background:t.palette.grey[100]}}})),S=(0,b.Ay)(k)({boxShadow:"none",width:19,height:19,"&:before":{display:"block",width:19,height:19,backgroundImage:"url(\"data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M12 5c-.28 0-.53.11-.71.29L7 9.59l-2.29-2.3a1.003 1.003 0 00-1.42 1.42l3 3c.18.18.43.29.71.29s.53-.11.71-.29l5-5A1.003 1.003 0 0012 5z' fill='%23fff'/%3E%3C/svg%3E\")",content:'""'}});const C=function(e){return(0,v.jsx)(y.A,{disableRipple:!0,color:e.color?e.color:"default",checkedIcon:(0,v.jsx)(S,{sx:{backgroundColor:e.color?"".concat(e.color,".main"):"primary.main"}}),icon:(0,v.jsx)(k,{}),inputProps:{"aria-label":"Checkbox demo"},...e})};var I=a(68843),P=a(12038),W=a(24776),z=a(3632),T=a(43559),R=a(33211),B=a(42784);const D=e=>{let{message:t}=e;return(0,v.jsx)(A.A,{severity:"error",children:t})},E=e=>{let{title:t,subtitle:a,subtext:n}=e;const[c,d]=(0,r.useState)(""),[h,A]=(0,r.useState)(""),[b,y]=(0,r.useState)(!1),[k,S]=(0,r.useState)(""),E=(0,w.Zp)(),F=(0,w.zy)(),L=(0,f.wA)();(0,r.useEffect)((()=>{new URLSearchParams(F.search).get("expired")&&S("Session expired. Please login again.")}),[F.search]);return(0,v.jsxs)(v.Fragment,{children:[t?(0,v.jsxs)(o.A,{fontWeight:"700",variant:"h3",mb:1,children:[(0,v.jsx)(i.A,{mb:5,children:k&&(0,v.jsx)(D,{message:k})}),t]}):null,n,(0,v.jsx)(W.A,{title:"Sign in with"}),(0,v.jsx)(i.A,{mt:3,children:(0,v.jsx)(p.A,{children:(0,v.jsx)(o.A,{component:"span",color:"textPrimary",variant:"h6",fontWeight:"400",position:"relative",px:2,children:"or sign in with"})})}),(0,v.jsx)(l.A,{children:(0,v.jsxs)(i.A,{component:"form",onSubmit:async e=>{e.preventDefault(),S("");try{const e=await R.A.post("/auth/login",{email:c,password:h}),{name:t,role:a,accessToken:r,userId:s}=e.data;localStorage.setItem("accessToken",r),L((0,B.gV)({name:t,role:a,accessToken:r,userId:s})),"admin"===a?E("/dashboard/admin"):"siswa"===a?E("/dashboard/siswa"):S("Unknown user role.")}catch(k){k.response?S(k.response.data.msg):S("Something went wrong. Please try again later.")}},children:[(0,v.jsx)(P.A,{htmlFor:"email",children:"Email"}),(0,v.jsx)(I.A,{id:"email",name:"email",variant:"outlined",placeholder:"Email",fullWidth:!0,value:c,onChange:e=>d(e.target.value),required:!0,autoComplete:"email",sx:{"& .MuiInputBase-input::placeholder":{color:"gray"}}}),(0,v.jsx)(P.A,{htmlFor:"password",children:"Password"}),(0,v.jsx)(I.A,{id:"password",name:"password",variant:"outlined",placeholder:"Password",fullWidth:!0,value:h,type:b?"text":"password",onChange:e=>A(e.target.value),required:!0,autoComplete:"current-password",sx:{"& .MuiInputBase-input::placeholder":{color:"gray"}},InputProps:{endAdornment:(0,v.jsx)(x.A,{position:"end",children:(0,v.jsx)(u.A,{"aria-label":"toggle password visibility",onClick:()=>y(!b),onMouseDown:e=>e.preventDefault(),edge:"end",children:b?(0,v.jsx)(z.A,{}):(0,v.jsx)(T.A,{})})})}}),(0,v.jsxs)(l.A,{justifyContent:"space-between",direction:"row",alignItems:"center",my:2,children:[(0,v.jsx)(m.A,{children:(0,v.jsx)(g.A,{control:(0,v.jsx)(C,{defaultChecked:!0}),label:"Remeber this Device"})}),(0,v.jsx)(o.A,{component:s.N_,to:"/auth/forgot-password",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Forgot Password?"})]}),(0,v.jsx)(j.A,{color:"primary",variant:"contained",size:"large",fullWidth:!0,type:"submit",children:"Sign In"})]})}),a]})},F=()=>(0,v.jsx)(c.A,{title:"Login",description:"this is Login page",children:(0,v.jsxs)(n.Ay,{container:!0,spacing:0,sx:{overflowX:"hidden"},children:[(0,v.jsx)(n.Ay,{item:!0,xs:12,sm:12,lg:7,xl:8,sx:{position:"relative","&:before":{content:'""',background:"radial-gradient(#d2f1df, #d3d7fa, #bad8f4)",backgroundSize:"400% 400%",animation:"gradient 15s ease infinite",position:"absolute",height:"100%",width:"100%",opacity:"0.3"}},children:(0,v.jsxs)(i.A,{position:"relative",children:[(0,v.jsx)(i.A,{px:3,children:(0,v.jsx)(h.A,{})}),(0,v.jsx)(i.A,{alignItems:"center",justifyContent:"center",height:"calc(100vh - 75px)",sx:{display:{xs:"none",lg:"flex"}},children:(0,v.jsx)("img",{src:d.A,alt:"bg",style:{width:"100%",maxWidth:"500px"}})})]})}),(0,v.jsx)(n.Ay,{item:!0,xs:12,sm:12,lg:5,xl:4,display:"flex",justifyContent:"center",alignItems:"center",children:(0,v.jsx)(i.A,{p:4,children:(0,v.jsx)(E,{title:"Welcome to Aspirasi Sekolah",subtext:(0,v.jsx)(o.A,{variant:"subtitle1",color:"textPrimary",mb:1,children:"Atasi Tantangan, Capai Tujuan, dan Kuasai Keterampilan"}),subtitle:(0,v.jsxs)(l.A,{direction:"row",spacing:1,mt:3,children:[(0,v.jsx)(o.A,{color:"textPrimary",variant:"h6",fontWeight:"500",children:"Tidak Memiliki Akun?"}),(0,v.jsx)(o.A,{component:s.N_,to:"/auth/register",fontWeight:"500",sx:{textDecoration:"none",color:"primary.main"},children:"Buat Akun Sekarang"})]})})})})]})})},24776:(e,t,a)=>{a.d(t,{A:()=>p});a(65043);const r=a.p+"static/media/google-icon.95e5452dec502669b35ae4455f6cc0ad.svg";const s=a.p+"static/media/facebook-icon.f0391d69645c7323017248ba6ecd7fa8.svg";var n=a(34535),i=a(11906),o=a(70579);const l=(0,n.Ay)((e=>(0,o.jsx)(i.A,{variant:"outlined",size:"large",color:"inherit",...e})))((e=>{let{theme:t}=e;return{border:"1px solid ".concat(t.palette.divider),"&:hover":{color:t.palette.primary.main}}}));var c=a(96992),d=a(81045),h=a(96446);const p=e=>{let{title:t}=e;return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(c.A,{direction:"row",justifyContent:"center",spacing:2,mt:3,children:[(0,o.jsxs)(l,{children:[(0,o.jsx)(d.A,{src:r,alt:r,sx:{width:16,height:16,borderRadius:0,mr:1}}),(0,o.jsxs)(h.A,{sx:{display:{xs:"none",sm:"flex"},whiteSpace:"nowrap",mr:{sm:"3px"}},children:[t," "]})," ","Google"]}),(0,o.jsxs)(l,{children:[(0,o.jsx)(d.A,{src:s,alt:s,sx:{width:25,height:25,borderRadius:0,mr:1}}),(0,o.jsxs)(h.A,{sx:{display:{xs:"none",sm:"flex"},whiteSpace:"nowrap",mr:{sm:"3px"}},children:[t," "]})," ","FB"]})]})})}}}]);
//# sourceMappingURL=6944.923418e4.chunk.js.map