"use strict";(self.webpackChunkmodernize=self.webpackChunkmodernize||[]).push([[117],{117:(e,a,s)=>{s.r(a),s.d(a,{default:()=>R});var n=s(65043),t=s(33211),l=s(73216),r=s(14194),i=s(96446),d=s(15795),o=s(11906),c=s(26227),h=s(41503),x=s(85865),j=s(29347),m=s(14536),g=s(55922),A=s(70579);const p=[{to:"/dashboard",title:"Dashboard"},{title:"Data Kelas"}],u=()=>(0,A.jsx)(g.A,{title:"Data Kelas",items:p});var k=s(42231),C=s(29101),b=s(63336),w=s(79650),f=s(71806),P=s(84882),v=s(28076),S=s(10039),y=s(73460),D=s(77739),K=s(17392),z=s(207),I=s(89735),E=s(59156);const T=e=>{let{kelas:a,page:s,rowsPerPage:n,handleChangePage:t,handleChangeRowsPerPage:l,handleEdit:r,handleDetail:d,handleDelete:o}=e;const c=s>0?Math.max(0,(1+s)*n-a.length):0;return(0,A.jsx)(b.A,{variant:"outlined",children:(0,A.jsx)(w.A,{children:(0,A.jsxs)(f.A,{"aria-label":"custom pagination table",sx:{whiteSpace:"nowrap"},children:[(0,A.jsx)(P.A,{children:(0,A.jsxs)(v.A,{children:[(0,A.jsx)(S.A,{children:(0,A.jsx)(x.A,{variant:"h6",sx:{fontSize:"1rem"},children:"No"})}),(0,A.jsx)(S.A,{align:"center",children:(0,A.jsx)(x.A,{variant:"h6",sx:{fontSize:"1rem"},children:"Nama Kelas"})}),(0,A.jsx)(S.A,{align:"center",children:(0,A.jsx)(x.A,{variant:"h6",sx:{fontSize:"1rem"},children:"Aksi"})})]})}),(0,A.jsxs)(y.A,{children:[(n>0?a.slice(s*n,s*n+n):a).map(((e,a)=>(0,A.jsxs)(v.A,{children:[(0,A.jsx)(S.A,{children:(0,A.jsx)(x.A,{sx:{fontSize:"1rem"},children:s*n+a+1})}),(0,A.jsx)(S.A,{align:"center",children:(0,A.jsx)(x.A,{sx:{fontSize:"1rem"},children:e.nama_kelas})}),(0,A.jsx)(S.A,{children:(0,A.jsxs)(i.A,{sx:{display:"flex",justifyContent:"center",alignItems:"center",height:"100%"},children:[(0,A.jsx)(D.A,{title:"Lihat",placement:"bottom",children:(0,A.jsx)(K.A,{onClick:()=>d(e.id),children:(0,A.jsx)(m.HvQ,{width:20})})}),(0,A.jsx)(D.A,{title:"Edit",placement:"bottom",children:(0,A.jsx)(K.A,{onClick:()=>r(e.id),children:(0,A.jsx)(m.r9C,{width:20})})}),(0,A.jsx)(D.A,{title:"Hapus",placement:"bottom",children:(0,A.jsx)(K.A,{onClick:()=>o(e.id),children:(0,A.jsx)(m.Eau,{width:20})})})]})})]},e.id))),c>0&&(0,A.jsx)(v.A,{style:{height:53*c},children:(0,A.jsx)(S.A,{colSpan:3})})]}),(0,A.jsx)(z.A,{children:(0,A.jsx)(v.A,{children:(0,A.jsx)(I.A,{rowsPerPageOptions:[5,10,25,{label:"All",value:-1}],colSpan:3,count:a.length,rowsPerPage:n,page:s,SelectProps:{inputProps:{"aria-label":"rows per page"},native:!0},onPageChange:t,onRowsPerPageChange:l,ActionsComponent:E.A})})})]})})})},R=()=>{const[e,a]=(0,n.useState)(0),[s,g]=(0,n.useState)(5),[p,b]=(0,n.useState)([]),[w,f]=(0,n.useState)(""),[P,v]=(0,n.useState)(""),[S,y]=(0,n.useState)(null),[D,K]=(0,n.useState)(!1),z=(0,l.Zp)();(0,n.useEffect)((()=>{(async()=>{try{const e=await t.A.get("/kelas");b(e.data)}catch(P){P.response&&P.response.data&&P.response.data.msg?(console.log(P.response.data),v(P.response.data.msg)):(console.error("Terjadi kesalahan:",P.message),v("Terjadi kesalahan saat memuat data"))}})()}),[]);const I=p.filter((e=>e.nama_kelas.toLowerCase().includes(w.toLowerCase()))).sort(((e,a)=>e.nama_kelas.localeCompare(a.nama_kelas))),E=()=>{K(!1)},R=e=>{let{message:a}=e;return(0,A.jsx)(r.A,{severity:"error",children:a})};return(0,A.jsxs)(k.A,{title:"Data Kelas",description:"Data Kelas",children:[(0,A.jsx)(u,{}),(0,A.jsx)(i.A,{justifyContent:"center",mb:5,children:P&&(0,A.jsx)(R,{message:P})}),(0,A.jsxs)(C.A,{title:"Data Kelas",children:[(0,A.jsxs)(i.A,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[(0,A.jsx)(d.A,{label:"Search",variant:"outlined",value:w,onChange:e=>{f(e.target.value)},InputProps:{sx:{padding:"4px"}},sx:{flexGrow:0,marginRight:2}}),(0,A.jsx)(o.A,{variant:"contained",color:"primary",startIcon:(0,A.jsx)(m.uID,{}),onClick:()=>{z("/dashboard/admin/kelas/tambah-kelas")},children:"Tambah Kelas"})]}),(0,A.jsx)(T,{kelas:I,page:e,rowsPerPage:s,handleChangePage:(e,s)=>{a(s)},handleChangeRowsPerPage:e=>{g(parseInt(e.target.value,10)),a(0)},handleEdit:e=>{z("/dashboard/admin/kelas/edit/".concat(e))},handleDetail:()=>{z("/dashboard/admin/kelas/KelasId")},handleDelete:e=>{y(e),K(!0)}})]}),(0,A.jsxs)(c.A,{open:D,onClose:E,maxWidth:"sm",fullWidth:!0,children:[(0,A.jsx)(h.A,{children:(0,A.jsx)(x.A,{variant:"h5",align:"center",sx:{mt:2,mb:2},children:"Apakah Anda yakin ingin menghapus nama kelas?. Menghapus nama kelas akan menghapus data siswa yang ada dikelas tersebut"})}),(0,A.jsxs)(j.A,{sx:{justifyContent:"center",mb:2},children:[(0,A.jsx)(o.A,{sx:{mr:3},variant:"outlined",color:"secondary",onClick:E,children:"Batal"}),(0,A.jsx)(o.A,{sx:{mr:3,backgroundColor:"#F48C06","&:hover":{backgroundColor:"#f7a944"}},variant:"contained",onClick:()=>(async e=>{try{await t.A.delete("/kelas/".concat(e)),b(p.filter((a=>a.id!==e))),K(!1)}catch(P){console.error("Terjadi kesalahan saat menghapus data kelas:",P.message),v("Terjadi kesalahan saat menghapus data kelas")}})(S),children:"Hapus"})]})]})]})}}}]);
//# sourceMappingURL=117.c39df48a.chunk.js.map