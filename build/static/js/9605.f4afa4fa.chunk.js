"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[9605],{16263:(e,t,n)=>{n.d(t,{A:()=>r});n(65043);var a=n(96446),s=n(14194),i=n(70579);const r=e=>{let{error:t,success:n}=e;return(0,i.jsxs)(a.A,{justifyContent:"center",mb:3,children:[t&&(0,i.jsx)(s.A,{severity:"error",children:t}),n&&(0,i.jsx)(s.A,{severity:"success",children:n})]})}},42231:(e,t,n)=>{n.d(t,{A:()=>i});n(65043);var a=n(41591),s=n(70579);const i=e=>{let{title:t,description:n,children:i}=e;return(0,s.jsxs)("div",{children:[(0,s.jsxs)(a.m,{children:[(0,s.jsx)("title",{children:t}),(0,s.jsx)("meta",{name:"description",content:n})]}),i]})}},12038:(e,t,n)=>{n.d(t,{A:()=>r});n(65043);var a=n(34535),s=n(85865),i=n(70579);const r=(0,a.Ay)((e=>(0,i.jsx)(s.A,{variant:"subtitle1",fontWeight:600,...e,component:"label",htmlFor:e.htmlFor})))((()=>({marginBottom:"5px",marginTop:"25px",display:"block"})))},1024:(e,t,n)=>{n.d(t,{A:()=>r});n(65043);var a=n(34535),s=n(69859),i=n(70579);const r=(0,a.Ay)((e=>(0,i.jsx)(s.A,{...e})))((e=>{let{theme:t}=e;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"0.8"},"& .MuiTypography-root":{color:t.palette.text.secondary},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"1"}}}))},35292:(e,t,n)=>{n.d(t,{A:()=>r});n(65043);var a=n(34535),s=n(69285),i=n(70579);const r=(0,a.Ay)((e=>(0,i.jsx)(s.A,{...e})))((e=>{let{theme:t}=e;return{}}))},68843:(e,t,n)=>{n.d(t,{A:()=>r});n(65043);var a=n(34535),s=n(15795),i=n(70579);const r=(0,a.Ay)((e=>(0,i.jsx)(s.A,{...e})))((e=>{let{theme:t}=e;return{"& .MuiOutlinedInput-input::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"0.8"},"& .MuiOutlinedInput-input.Mui-disabled::-webkit-input-placeholder":{color:t.palette.text.secondary,opacity:"1"},"& .Mui-disabled .MuiOutlinedInput-notchedOutline":{borderColor:t.palette.grey[200]}}}))},29101:(e,t,n)=>{n.d(t,{A:()=>c});n(65043);var a=n(12110),s=n(79958),i=n(39336),r=n(26494),l=n(96446),o=n(79456),d=n(70579);const c=e=>{let{title:t,children:n,footer:c}=e;const m=(0,o.d4)((e=>e.customizer));return(0,d.jsxs)(a.A,{sx:{padding:0},elevation:m.isCardShadow?9:0,variant:m.isCardShadow?void 0:"outlined",children:[(0,d.jsx)(s.A,{title:t}),(0,d.jsx)(i.A,{}),(0,d.jsx)(r.A,{children:n}),c?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(i.A,{}),(0,d.jsx)(l.A,{p:3,children:c})]}):""]})}},55922:(e,t,n)=>{n.d(t,{A:()=>x});n(65043);var a=n(68903),s=n(85865),i=n(22698),r=n(88446),l=n(96446),o=n(35475);const d=n.p+"static/media/ChatBc.a9e64b961d26acf719b8.png";var c=n(14536),m=n(70579);const x=e=>{let{subtitle:t,items:n,title:x,children:h}=e;return(0,m.jsxs)(a.Ay,{container:!0,sx:{backgroundColor:"primary.light",borderRadius:e=>e.shape.borderRadius/4,p:"30px 25px 20px",marginBottom:"30px",position:"relative",overflow:"hidden"},children:[(0,m.jsxs)(a.Ay,{item:!0,xs:12,sm:6,lg:8,mb:1,children:[(0,m.jsx)(s.A,{variant:"h4",children:x}),(0,m.jsx)(s.A,{color:"textSecondary",variant:"h6",fontWeight:400,mt:.8,mb:0,children:t}),(0,m.jsx)(i.A,{separator:(0,m.jsx)(c.ABt,{size:"5",fill:"textSecondary",fillOpacity:"0.6",style:{margin:"0 5px"}}),sx:{alignItems:"center",mt:n?"10px":""},"aria-label":"breadcrumb",children:n?n.map((e=>(0,m.jsx)("div",{children:e.to?(0,m.jsx)(r.A,{underline:"none",color:"inherit",component:o.k2,to:e.to,children:e.title}):(0,m.jsx)(s.A,{color:"textPrimary",children:e.title})},e.title))):""})]}),(0,m.jsx)(a.Ay,{item:!0,xs:12,sm:6,lg:4,display:"flex",alignItems:"flex-end",children:(0,m.jsx)(l.A,{sx:{display:{xs:"none",md:"block",lg:"flex"},alignItems:"center",justifyContent:"flex-end",width:"100%"},children:h?(0,m.jsx)(l.A,{sx:{top:"0px",position:"absolute"},children:h}):(0,m.jsx)(m.Fragment,{children:(0,m.jsx)(l.A,{sx:{top:"0px",position:"absolute"},children:(0,m.jsx)("img",{src:d,alt:d,width:"165px"})})})})})]})}},33211:(e,t,n)=>{n.d(t,{A:()=>i});var a=n(40854);const s=n.n(a)().create({baseURL:"http://localhost:4000",timeout:1e4});s.interceptors.request.use((e=>{const t=localStorage.getItem("accessToken");return t&&(e.headers.Authorization="Bearer ".concat(t)),e}),(e=>Promise.reject(e))),s.interceptors.response.use((e=>e),(e=>(e.response&&401===e.response.status&&(localStorage.removeItem("accessToken"),window.location.href="/auth/login"),Promise.reject(e))));const i=s},7422:(e,t,n)=>{n.r(t),n.d(t,{default:()=>I});var a=n(65043),s=n(16263),i=n(55922),r=n(70579);const l=[{to:"/dashboard",title:"Dashboard"},{title:"Tambah Data Pelanggaran"}],o=()=>(0,r.jsx)(i.A,{title:"Tambah Data Pelanggaran",items:l});var d=n(42231),c=n(29101),m=n(33211),x=n(73216),h=n(51690),u=n(10688),p=n(9546),j=n(96446),A=n(68903),g=n(51787),b=n(32143),y=n(11906),v=n(12038),f=n(1024),k=n(68843),w=n(14536),C=n(35292);const S=e=>{let{setSuccess:t,setError:n}=e;const[s,i]=(0,a.useState)(""),[l,o]=(0,a.useState)(""),[d,c]=(0,a.useState)([]),[S,I]=(0,a.useState)(""),[F,B]=(0,a.useState)(""),[W,T]=(0,a.useState)(""),[M,P]=(0,a.useState)(""),[z,O]=(0,a.useState)(""),D=(0,x.Zp)();(0,a.useEffect)((()=>{(async()=>{try{const e=await m.A.get("/users/jenis-kelamin");c(e.data)}catch(e){console.error("Error fetching gender options:",e)}})()}),[]);return(0,r.jsx)(j.A,{children:(0,r.jsxs)("form",{onSubmit:async e=>{e.preventDefault();try{await m.A.post("/admin/api/pelanggaran",{namaSiswa:s,jenisKelamin:l,waktu:S,peristiwa:F,tempat:W,informan:M,bidangBimbingan:z}),t("Pelanggaran berhasil ditambahkan!"),n(""),i(""),o(""),I(""),B(""),T(""),P(""),O(""),setTimeout((()=>D("/dashboard/admin/pelanggaran")),2e3)}catch(a){const e=a.response&&a.response.data&&a.response.data.msg?a.response.data.msg:"Terjadi kesalahan saat menambah pelanggaran";n(e),t("")}},children:[(0,r.jsxs)(A.Ay,{item:!0,xs:12,children:[(0,r.jsx)(j.A,{display:"flex",alignItems:"center",children:(0,r.jsx)(v.A,{htmlFor:"namaSiswa",sx:{mt:0,mb:1},children:"Nama Siswa"})}),(0,r.jsx)(f.A,{startAdornment:(0,r.jsx)(g.A,{position:"start",children:(0,r.jsx)(w.oHj,{})}),id:"namaSiswa",name:"namaSiswa",value:s,onChange:e=>{i(e.target.value)},fullWidth:!0}),(0,r.jsx)(j.A,{display:"flex",alignItems:"center",children:(0,r.jsx)(v.A,{htmlFor:"jenisKelamin",sx:{mt:2,mb:1},children:"Jenis Kelamin"})}),(0,r.jsx)(C.A,{startAdornment:(0,r.jsx)(g.A,{position:"start",children:(0,r.jsx)(w.PRz,{})}),id:"jenisKelamin",name:"jenisKelamin",value:l,onChange:e=>{o(e.target.value)},fullWidth:!0,variant:"outlined",children:d.map((e=>(0,r.jsx)(b.A,{value:e.jenis_kelamin,children:e.jenis_kelamin},e.id)))}),(0,r.jsx)(j.A,{display:"flex",alignItems:"center",children:(0,r.jsx)(v.A,{htmlFor:"waktu",sx:{mt:2,mb:1},children:"Waktu"})}),(0,r.jsx)(f.A,{startAdornment:(0,r.jsx)(g.A,{position:"start",children:(0,r.jsx)(w.hbh,{})}),id:"waktu",name:"waktu",value:S,onChange:e=>{I(e.target.value)},fullWidth:!0,disable:!0}),(0,r.jsx)(v.A,{htmlFor:"waktu",children:"Waktu Kejadian"}),(0,r.jsx)(h.$,{dateAdapter:u.h,children:(0,r.jsx)(p.l,{renderInput:e=>(0,r.jsx)(k.A,{...e,fullWidth:!0,size:"medium"}),placeholder:"Tanggal Lahir",value:S,onChange:e=>I(e),required:!0})}),(0,r.jsx)(j.A,{display:"flex",alignItems:"center",children:(0,r.jsx)(v.A,{htmlFor:"peristiwa",sx:{mt:2,mb:1},children:"Peristiwa"})}),(0,r.jsx)(f.A,{startAdornment:(0,r.jsx)(g.A,{position:"start",children:(0,r.jsx)(w.$vd,{})}),id:"peristiwa",name:"peristiwa",value:F,onChange:e=>{B(e.target.value)},fullWidth:!0}),(0,r.jsx)(j.A,{display:"flex",alignItems:"center",children:(0,r.jsx)(v.A,{htmlFor:"tempat",sx:{mt:2,mb:1},children:"Tempat"})}),(0,r.jsx)(f.A,{startAdornment:(0,r.jsx)(g.A,{position:"start",children:(0,r.jsx)(w.CZ$,{})}),id:"tempat",name:"tempat",value:W,onChange:e=>{T(e.target.value)},fullWidth:!0}),(0,r.jsx)(j.A,{display:"flex",alignItems:"center",children:(0,r.jsx)(v.A,{htmlFor:"informan",sx:{mt:2,mb:1},children:"Informan"})}),(0,r.jsx)(f.A,{startAdornment:(0,r.jsx)(g.A,{position:"start",children:(0,r.jsx)(w._DF,{})}),id:"informan",name:"informan",value:M,onChange:e=>{P(e.target.value)},fullWidth:!0}),(0,r.jsx)(j.A,{display:"flex",alignItems:"center",children:(0,r.jsx)(v.A,{htmlFor:"bidangBimbingan",sx:{mt:0,mb:1},children:"Bidang Bimbingan"})}),(0,r.jsx)(f.A,{startAdornment:(0,r.jsx)(g.A,{position:"start",children:(0,r.jsx)(w.Q$s,{})}),id:"bidangBimbingan",name:"bidangBimbingan",value:z,onChange:e=>{O(e.target.value)},fullWidth:!0})]}),(0,r.jsx)(A.Ay,{item:!0,xs:12,children:(0,r.jsxs)(j.A,{sx:{display:"flex",justifyContent:"flex-start",pt:3},children:[(0,r.jsx)(y.A,{sx:{mr:2,backgroundColor:"#F48C06","&:hover":{backgroundColor:"#f7a944"}},variant:"contained",type:"submit",children:"Simpan"}),(0,r.jsx)(y.A,{sx:{backgroundColor:"#2F327D","&:hover":{backgroundColor:"#63659e"}},variant:"contained",color:"secondary",type:"button",onClick:()=>{D(-1)},children:"Batal"})]})})]})})},I=()=>{const[e,t]=(0,a.useState)(""),[n,i]=(0,a.useState)("");return(0,r.jsxs)(d.A,{children:[(0,r.jsx)(o,{}),e&&(0,r.jsx)(s.A,{success:e}),n&&(0,r.jsx)(s.A,{error:n}),(0,r.jsx)(c.A,{title:"Form Tambah Pelanggaran",children:(0,r.jsx)(S,{setSuccess:t,setError:i})})]})}}}]);
//# sourceMappingURL=9605.f4afa4fa.chunk.js.map