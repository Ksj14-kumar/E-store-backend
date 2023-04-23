import{R as n,j as e,M as o,m as x,u as f,i as u,a as p,r as l,O as h}from"./index-df01ba08.js";function j({index:s,item:t}){return e.jsxs("div",{className:"item_list  bg-[#e8e2e2d3] items-center justify-center flex flex-col rounded-md p-2",children:[e.jsx("div",{className:"image p-1 bg-[#fcfbfb] rounded-md  shrink-0",children:e.jsx("img",{src:t.image,className:"w-[8rem] h-[8rem]",alt:"img"})}),e.jsxs("p",{className:"text-md font-sans text-[1.2rem] text-[#0e0e0e] font-medium py-1",children:[e.jsx("span",{children:"Price:"})," ",e.jsx("span",{className:"mr-1",children:"₹"}),Math.round(t.price)]}),e.jsxs("p",{className:"text-sm font-sans  text-[#0e0e0e] font-medium py-1",children:[e.jsx("span",{children:"Qty:"})," ",t.count]})]},s)}const y=n.memo(j);function N({time:s,price:t,paymentStatus:r,deliveryStatus:c}){const[a,i,d,m]=new Date(s).toString().split(" ");return e.jsxs("div",{className:"status bg-[#d5d6decc] md:rounded-tl-none rounded-t-none rounded-bl-none  text-[#000]  py-[1.4rem] mt-[.2rem] md:mt-2 px-4 rounded-md w-full justify-center flex  flex-col items-center md:rounded-tr-md",children:[e.jsxs("p",{className:"online font-serif  relative flex items-center gap-x-3 mobile:text-sm py-1",children:[e.jsx("div",{className:"div rounded-full bg-[#20ed05] w-[10px] h-[10px]"}),"Deliverd on ",i," ",d]}),e.jsxs("p",{className:"text-[1.4rem] font-sans font-medium  px-3 flex items-center bg-[#878d8c] p-[5px] rounded-md mb-2 gap-1",children:["Total: ",e.jsxs("span",{className:"text-[#4df106]",children:[e.jsx("span",{className:"mr-1",children:"₹"}),t]}),r==="paid"&&e.jsx(o,{className:"text-[#fff] rounded-full ml-1 bg-[#0fd405] border"})]}),e.jsxs("p",{className:"text-md font-sans italic flex items-center gap-2 py-2 text-[#fff] bg-[#6e0202] px-4 rounded-md",children:["Delivery status:",e.jsx("p",{className:"bg-red-500 border w-[1rem] h-[1rem] rounded-full"})," ",c]})]})}const v=n.memo(N);function b({address:s,phone:t,name:r}){return e.jsxs("div",{className:"address py-2 bg-[#d5d6decc] mt-2 rounded-tr-none md:rounded-tr-none md:rounded-br-none flex justify-center items-center flex-col md:rounded-tl-md",children:[e.jsx("p",{className:"text-lg font-serif font-medium text-[1.4rem]",children:"On this address"}),e.jsxs("div",{className:"address_Wrapper flex justify-center items-center flex-col px-4",children:[e.jsx("p",{className:"text-md font-sans italic font-medium text-lg",children:r.name}),e.jsx("p",{className:"text-md font-sans italic",children:s.address.line1}),e.jsx("p",{className:"text-md font-sans italic",children:s.address.line2}),e.jsxs("p",{className:"text-md font-sans italic",children:[s.address.city,", ",s.address.postal_code,",",s.address.state]}),e.jsxs("p",{className:"text-md font-sans italic font-medium",children:["Mobile, ",t.phone]})]})]})}const g=n.memo(b);function w({item:s}){return e.jsx(x.div,{className:"items flex bg-[#f9f5f5] rounded-md justify-between items-center p-2 mb-2 cursor-pointer wide:w-full mobile:flex-col mobile:justify-between",initial:{scale:1},transition:{duration:.5,type:"tween",ease:"easeInOut"},"data-aos":"fade-up","data-aos-duration":"4000",children:e.jsx("div",{className:"items w-full",children:e.jsxs("div",{className:"wrappe",children:[e.jsx("div",{className:"wrappe_items flex flex-wrap gap-2 mobile:justify-center",children:s.items.map((t,r)=>e.jsx(y,{index:r,item:t}))}),e.jsxs("div",{className:"wrapper md:flex justify-center items-center  w-full mobile:flex-col wide:flex-col",children:[e.jsx("div",{className:"left flex-[6] wide:flex-[0]",children:e.jsx(g,{address:s,name:s,phone:s})}),e.jsx("div",{className:"right flex-[6] wide:flex-[0] h-[10rem] flex flex-col justify-center ",children:e.jsx(v,{time:s.time,price:s.amount,paymentStatus:s.paymentStatus,deliveryStatus:s.deliveryStatus})})]})]})})})}const O=n.memo(w);function S(){const s=f(u),[t,{isLoading:r,isSuccess:c}]=p(),[a,i]=l.useState([]);return l.useMemo(()=>{(async function(){try{if(s.isHaveId){const d=await t({userId:s.isHaveId}).unwrap();typeof d!="string"&&i(d)}}catch{}})()},[]),l.useEffect(()=>{},[]),e.jsxs("div",{className:"pt-[4rem] px-[10rem] bg-[#d2dde7] pb-2 mobile:px-2 wide:px-2",children:[e.jsx("header",{className:"previuos_items text-lg font-serif bg-[#f5f2f2] rounded-sm shadow-md py-2 px-4",children:e.jsx("p",{className:"tracking-wider",children:"Orders"})}),e.jsx("div",{className:"mt-2 mobile:w-full wide:w-full",children:r?e.jsx("div",{className:"loader flex justify-center items-center h-[calc(100vh-9rem)]",children:e.jsx(h,{height:50,width:50,color:"#0404FC",wrapperStyle:{},wrapperClass:"",visible:!0,ariaLabel:"oval-loading",secondaryColor:"#FFFFFF",strokeWidth:2,strokeWidthSecondary:2})}):a.length>0?a.map((d,m)=>e.jsx(O,{item:d},m)):e.jsx("div",{className:"not_found mt-[3rem] flex justify-center",children:e.jsx("p",{className:"text-[1.3rem] font-serif tracking-wider",children:"no order found"})})})]})}const D=n.memo(S);export{D as default};
