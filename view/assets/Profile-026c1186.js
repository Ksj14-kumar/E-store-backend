import{u as M,i as L,r as t,b as Z,c as ee,d as se,j as e,L as x,n as l,e as C,f as k,R as te,g as ae,O as ne}from"./index-df01ba08.js";import{A as ie}from"./Address-7a07a8f7.js";function oe(n){return/^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()\.,;\s@\"]+\.{0,1})+([^<>()\.,;:\s@\"]{2,}|[\d\.]+))$/.test(n)}function le(){const n=M(L),[i,c]=t.useState({name:"",lname:""}),[a,m]=t.useState(""),[u,g]=t.useState(""),[f,p]=t.useState(""),[b,o]=t.useState(!1),[h,j]=t.useState(!1),[H,y]=t.useState(!1),[v,w]=t.useState(!1),[G,_]=t.useState(!1),[N,S]=t.useState(!1),[A,V]=t.useState(""),[d,E]=t.useState(""),[O,{isLoading:ce,isSuccess:me,error:ue,isError:fe}]=Z(),[F,{}]=ee(),[R,{}]=se(),J=Boolean(i.name)&&Boolean(i.lname),P=Boolean(a),U=Boolean(u),W=Boolean(f);let I;function B(s){I=s.target.name;const r=s.target.value;c({...i,[I]:r})}function $(s){m(s.target.value)}function D(s){g(s.target.value)}function T(s){p(s.target.value)}function Q(s){E(s.target.value)}function Y(){Boolean(u)&&_(!0)}async function q(){if(Boolean(i.name)&&Boolean(i.lname))try{n.isHaveId&&(o(!0),await O({status:3,userId:n.isHaveId,name:i.name,lname:i.lname}).unwrap(),l.success("update Successfull",{duration:2e3,position:"bottom-center"}),c({name:"",lname:""}))}catch(r){console.warn(r),l.error("something error, reload page",{duration:2e3,position:"bottom-center"})}finally{o(!1)}}async function z(){if(Boolean(f))try{n.isHaveId&&(j(!0),await O({userId:n.isHaveId,gender:f,status:4}),l.success("update success",{duration:2e3,position:"bottom-center"}),p(""))}catch(r){console.warn(r),l.error("something error, reload page",{duration:2e3,position:"bottom-center"})}finally{j(!1)}}async function K(){if(Boolean(a)){if(!oe(a)){l.error("Invalid Email",{duration:2e3,position:"bottom-center"});return}try{if(n.isHaveId){w(!0);const s=await F({userId:n.isHaveId,email:a}).unwrap();y(!0),w(!1),V("Resend"),l.success(s,{duration:2e3,position:"bottom-center"})}}catch(s){if(C(s)){const r=JSON.parse(JSON.stringify(s.data));l.error(r,{duration:2e3,position:"bottom-center"})}else k(s)&&l.error(s.message,{duration:2e3,position:"bottom-center"})}finally{w(!1)}}}async function X(){if(Boolean(d)&&d.length!==4){l.error("invalid otp",{duration:2e3,position:"bottom-center"});return}if(Boolean(d)&&d.length===4)try{if(n.isHaveId){S(!0);const s=await R({otp:d,userId:n.isHaveId,email:a}).unwrap();l.success(s,{duration:2e3,position:"bottom-center"}),m(""),E(""),y(!1)}}catch(s){if(C(s)){const r=JSON.parse(JSON.stringify(s.data));l.error(r,{duration:2e3,position:"bottom-center"})}else k(s)&&l.error(s.message,{duration:2e3,position:"bottom-center"})}finally{S(!1)}}return e.jsxs("div",{className:"right_side flex-[9] bg-[#bbcade] rounded-md py-3   h-full mobile:mt-2",children:[e.jsx("header",{className:"text-[1.3rem] w-full font-serif indent-8  ",children:e.jsx("p",{className:"",children:"Personal Info"})}),e.jsxs("main",{className:"info_section bg-[#bbcade] pb-4",children:[e.jsxs("section",{className:"name_lname py-3 w-full indent-8 mobile:indent-0 mobile:px-2",children:[e.jsx("div",{className:"name py-2 mobile:w-full",children:e.jsx("input",{type:"text",name:"name",className:"py-2 rounded-md indent-4 font-serif tracking-wider w-[40%] drop-shadow-lg mobile:w-full",placeholder:"name",onChange:B,value:i.name,id:""})}),e.jsx("div",{className:"lname py-2 mobile:indent-0  mobile:w-full",children:e.jsx("input",{type:"text",name:"lname",className:"py-2 drop-shadow-lg rounded-md indent-4 font-serif tracking-wider w-[40%] mobile:w-full",placeholder:"last name",id:"",onChange:B,value:i.lname})}),e.jsx("div",{className:"butt py-2 mobile:indent-0  mobile:w-full",children:e.jsx("button",{disabled:!J||b,onClick:()=>{q()},className:"text-[1rem] btn font-serif bg-[#137703] w-[40%] rounded-md py-2 text-[#e7d9d9] mobile:indent-0  mobile:w-full",children:b?e.jsx(x,{width:33,height:33}):"Save"})})]}),e.jsxs("section",{className:"gender indent-8 py-4",children:[e.jsx("input",{type:"radio",name:"gender",id:"",className:"",onChange:T,value:"M"})," ",e.jsx("span",{className:"text-[1.1rem]",children:"Male"}),e.jsx("input",{type:"radio",name:"gender",id:"",className:"ml-4",onChange:T,value:"F"})," ",e.jsx("span",{className:"text-[1.1rem]",children:"Female"}),e.jsx("div",{className:"butt py-2",children:e.jsx("button",{disabled:!W||h,onClick:()=>{z()},className:"text-[1rem] btn font-serif bg-[#127703] w-[40%] rounded-md py-2  text-[#e7d9d9] btn-sm",children:h?e.jsx(x,{width:40,height:24}):"Save"})})]}),e.jsxs("div",{className:"email w-full py-4 mobile:px-3",children:[e.jsxs("div",{className:"email indent-8 flex item-center pl-8 mobile:flex-col mobile:pl-0",children:[e.jsx("input",{type:"email",className:"py-2 rounded-md  font-serif tracking-wider w-[42%] drop-shadow-lg indent-4 mobile:w-full",name:"",placeholder:"Email",id:"",onChange:$,value:a}),e.jsx("div",{className:"button flex justify-center items-center pl-8 mobile:pl-0 mobile:w-full mobile:mt-2",children:e.jsx("button",{disabled:!P||v,onClick:K,className:"btn btn-sm bg-[#0380b2]",children:P?v?e.jsx(x,{width:30,height:30}):A?"Resend":"Get OTP":"Get OTP"})})]}),H&&e.jsxs("div",{className:"verify_email flex pl-[4rem] pt-4 gap-x-6",children:[e.jsx("div",{className:"smal  flex justify-center",children:e.jsx("input",{type:"text",name:"",className:"py-1 rounded-md   font-serif tracking-wider w-[5rem] drop-shadow-lg text-center",placeholder:"OTP",id:"",onChange:Q,minLength:1,maxLength:4,value:d})}),e.jsx("div",{className:"otp_buton",children:e.jsx("button",{disabled:!d||N,onClick:()=>{X()},className:"btn btn-sm ",children:N?e.jsx(x,{width:30,height:30}):"verify"})})]})]}),e.jsxs("div",{className:"mobile w-full mobile:flex-col mobile:px-3",children:[e.jsxs("div",{className:"email indent-8 flex item-center pl-8 mobile:pl-0 mobile:flex-col",children:[e.jsx("input",{type:"email",className:"py-2 rounded-md  font-serif tracking-wider w-[42%] drop-shadow-lg indent-4 mobile:w-full",name:"",placeholder:"mobile",id:"",onChange:D,value:u}),e.jsx("div",{className:"button flex justify-center items-center pl-8 mobile:mt-2 mobile:pl-0",children:e.jsx("button",{disabled:!U,onClick:Y,className:"btn btn-sm bg-[#0380b2]",children:"Get OTP"})})]}),G&&e.jsxs("div",{className:"verify_mobile flex pl-[4rem] mobile:pl-2 pt-4 gap-x-6",children:[e.jsx("div",{className:"smal  flex justify-center",children:e.jsx("input",{type:"text",name:"",className:"py-1 rounded-md   font-serif tracking-wider w-[5rem] drop-shadow-lg indent-2",placeholder:"OTP",id:""})}),e.jsx("div",{className:"otp_buton",children:e.jsx("button",{className:"btn btn-sm ",children:"verify"})})]})]})]})]})}const re=[{id:1,name:"My Profile"},{id:2,name:"Manage Addresses"}];function de({socket:n,profileImageURL:i}){const c=M(L),[a,m]=t.useState({profile:!0,add:!1,id:1}),[u,{isLoading:g,isSuccess:f}]=ae(),[p,b]=t.useState("");return t.useMemo(()=>{(async function(){try{if(c.isHaveId){const o=await u({userId:c.isHaveId}).unwrap();b(o)}}catch(o){console.warn(o)}})()},[]),t.useEffect(()=>{},[]),e.jsxs("div",{className:"pt-[3.6rem] px-[5rem] flex gap-x-4 bg-[#cfcde5] flex-1 h-full mobile:flex-col mobile:px-0",children:[e.jsxs("div",{className:"left_side flex-[3] bg-[#efebeb] rounded-md shadow-lg p-2 mobile:w-full",children:[e.jsx("section",{className:"top_section bg-[#bebed5] rounded-md drop-shadow-lg mobile:w-full",children:e.jsxs("div",{className:"wrapper py-1 px-2 flex items-center",children:[e.jsx("div",{className:"image_container flex-[3]",children:e.jsx("div",{className:"image rounded-full w-[2.7rem] h-[2.7rem]",children:typeof i=="string"&&e.jsx("img",{src:i,alt:"",className:"rounded-full w-full h-full"})})}),e.jsx("div",{className:"message flex-[9] flex justify-center",children:g?e.jsx(ne,{height:30,width:30,color:"#E90064",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#F0EEED",strokeWidth:2,strokeWidthSecondary:2}):e.jsx("p",{className:"text-[1.2rem] truncate text-[#2c2a2a] font-serif tracking-wider",children:p})})]})}),e.jsx("section",{className:"bottom_section",children:e.jsx("div",{className:"profile",children:e.jsx("ul",{className:"px-2 py-2",children:re.map((o,h)=>e.jsx("li",{onClick:()=>{o.id===2&&m({profile:!1,add:!0,id:2}),o.id===1&&m({profile:!0,add:!1,id:1})},className:`text-[1.1rem] mb-3 tracking-wider font-serif py-3 text-center rounded-md drop-shadow-lg cursor-pointer bg-[#f3f0f0] hover:bg-[#ffffff] 
                                        ${a.id===1&&a.profile?o.id===1&&"bg-[#8dabdf]":a.id===2&&a.add&&o.id===2&&"bg-[#8dabdf]"}
                                        `,children:o.name},h))})})})]}),a.profile&&a.id===1?e.jsx(le,{}):e.jsx(ie,{sidebar:!0,socket:n})]})}const he=te.memo(de);export{he as default};