import{u as $e,n as F,r as o,p as Be,j as e,k as Ke,a as _e,Q as We,S as Qe,b as He,c as Ue,d as X,_ as qe,e as Xe,f as L,g as me,h as Ve,i as ze,t as Ye,T as Ge,l as Je,L as w,F as Ze,m as es,o as ss,q as ts}from"./index-3987f3f0.js";import{u as ns}from"./useDispatch-dca3303c.js";import{u as rs,a as ls,e as as,b as os,c as is,d as cs,s as us,f as ds,g as fs,Q as xs,h as ms}from"./axios-5f5fea07.js";function V(){return V=Object.assign?Object.assign.bind():function(s){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(s[n]=r[n])}return s},V.apply(this,arguments)}function hs(s,t){const r=$e({context:s.context}),n=rs(),a=ls(),l=r.defaultQueryOptions(s);l._optimisticResults=n?"isRestoring":"optimistic",l.onError&&(l.onError=F.batchCalls(l.onError)),l.onSuccess&&(l.onSuccess=F.batchCalls(l.onSuccess)),l.onSettled&&(l.onSettled=F.batchCalls(l.onSettled)),as(l),os(l,a),is(a);const[c]=o.useState(()=>new t(r,l)),m=c.getOptimisticResult(l);if(cs(o.useCallback(j=>{const h=n?()=>{}:c.subscribe(F.batchCalls(j));return c.updateResult(),h},[c,n]),()=>c.getCurrentResult(),()=>c.getCurrentResult()),o.useEffect(()=>{c.setOptions(l,{listeners:!1})},[l,c]),us(l,m,n))throw ds(l,c,a);if(fs({result:m,errorResetBoundary:a,useErrorBoundary:l.useErrorBoundary,query:c.getCurrentQuery()}))throw m.error;return l.notifyOnChangeProps?m:c.trackResult(m)}function ps(s,t,r){const n=Be(s,t,r);return hs(n,xs)}function js({rating:s,title:t,image:r,oldPrice:n,price:a,id:l}){const c=ns(),m=()=>We.success("Add to cart"),j=()=>{c(_e({id:l,title:t,image:r,oldPrice:n,price:a,rating:s})),m()};return e.jsxs("div",{className:"border-2 p-2 mb-4 sm:my-1 rounded-sm shadow-xl shadow-slate-100",children:[e.jsx("div",{className:"w-full sm:w-full xl:h-96 h-96 overflow-hidden",children:e.jsx("img",{src:r,alt:t,className:"w-full h-full duration-500 hover:scale-110 object-cover"})}),e.jsxs("div",{children:[e.jsx("h1",{className:"text-xl font-bold my-1",children:t}),e.jsxs("div",{className:"flex flex-row space-x-4 text-md",children:[e.jsxs("p",{className:"line-through",children:["$",n]}),e.jsxs("p",{children:["$",a]})]})]}),e.jsx("button",{onClick:j,className:"bg-black hover:opacity-50 text-white px-4 py-1 mb-3 rounded-md text-md",children:"Add to Cart"}),e.jsx(Ke,{className:"w-24 px-4 shadow-none mt-3"})]},l)}const he=()=>{o.useState("");const{isLoading:s,isError:t,data:r,error:n}=ps({queryKey:["products"],queryFn:async()=>{try{return(await ms.get("https://fakestoreapiserver.reactbd.com/products")).data}catch(a){throw console.log(a),a}}});return{isLoading:s,isError:t,error:n,data:r}};function vs({products:s}){const{isLoading:t,error:r,data:n}=he();return t?e.jsxs("div",{className:"flex flex-row justify-center items-center px-2 h-20 mt-10 text-2xl italic",children:[e.jsx("span",{children:"MAFIA loading your store..."}),e.jsx(Qe,{animation:"border"})]}):r?e.jsxs("div",{className:"flex flex-col text-xl items-center justify-center h-96",children:[e.jsx("h1",{children:"Oops!"}),e.jsx("p",{className:"capitalize",children:r.message})]}):e.jsx("div",{className:"px-2 sm:mx-5 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 sm:gap-5 xl:grid-cols-4 lg:mx-7",children:s.map(a=>e.jsx("div",{children:e.jsx(js,{brand:a.brand,category:a.category,description:a.description,image:a.image,oldPrice:a.oldPrice,price:a.price,title:a.title,id:a._id,rating:a.rating})},a._id))})}function gs(s,t){const r=o.useRef(!0);o.useEffect(()=>{if(r.current){r.current=!1;return}return s()},t)}const z=2**31-1;function pe(s,t,r){const n=r-Date.now();s.current=n<=z?setTimeout(t,n):setTimeout(()=>pe(s,t,r),z)}function bs(){const s=He(),t=o.useRef();return Ue(()=>clearTimeout(t.current)),o.useMemo(()=>{const r=()=>clearTimeout(t.current);function n(a,l=0){s()&&(r(),l<=z?t.current=setTimeout(a,l):pe(t,a,Date.now()+l))}return{set:n,clear:r}},[])}const ys=["as","disabled"];function ws(s,t){if(s==null)return{};var r={},n=Object.keys(s),a,l;for(l=0;l<n.length;l++)a=n[l],!(t.indexOf(a)>=0)&&(r[a]=s[a]);return r}function Ns(s){return!s||s.trim()==="#"}function je({tagName:s,disabled:t,href:r,target:n,rel:a,role:l,onClick:c,tabIndex:m=0,type:j}){s||(r!=null||n!=null||a!=null?s="a":s="button");const h={tagName:s};if(s==="button")return[{type:j||"button",disabled:t},h];const f=d=>{if((t||s==="a"&&Ns(r))&&d.preventDefault(),t){d.stopPropagation();return}c==null||c(d)},x=d=>{d.key===" "&&(d.preventDefault(),f(d))};return s==="a"&&(r||(r="#"),t&&(r=void 0)),[{role:l??"button",disabled:void 0,tabIndex:t?void 0:m,href:r,target:s==="a"?n:void 0,"aria-disabled":t||void 0,rel:s==="a"?a:void 0,onClick:f,onKeyDown:x},h]}const Cs=o.forwardRef((s,t)=>{let{as:r,disabled:n}=s,a=ws(s,ys);const[l,{tagName:c}]=je(Object.assign({tagName:r,disabled:n},a));return e.jsx(c,Object.assign({},a,l,{ref:t}))});Cs.displayName="Button";const Ss=["onKeyDown"];function Es(s,t){if(s==null)return{};var r={},n=Object.keys(s),a,l;for(l=0;l<n.length;l++)a=n[l],!(t.indexOf(a)>=0)&&(r[a]=s[a]);return r}function Rs(s){return!s||s.trim()==="#"}const ve=o.forwardRef((s,t)=>{let{onKeyDown:r}=s,n=Es(s,Ss);const[a]=je(Object.assign({tagName:"a"},n)),l=X(c=>{a.onKeyDown(c),r==null||r(c)});return Rs(n.href)||n.role==="button"?e.jsx("a",Object.assign({ref:t},n,a,{onKeyDown:l})):e.jsx("a",Object.assign({ref:t},n,{onKeyDown:r}))});ve.displayName="Anchor";const de=ve;function fe(s){return"default"+s.charAt(0).toUpperCase()+s.substr(1)}function Is(s){var t=ks(s,"string");return typeof t=="symbol"?t:String(t)}function ks(s,t){if(typeof s!="object"||s===null)return s;var r=s[Symbol.toPrimitive];if(r!==void 0){var n=r.call(s,t||"default");if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(s)}function Ts(s,t,r){var n=o.useRef(s!==void 0),a=o.useState(t),l=a[0],c=a[1],m=s!==void 0,j=n.current;return n.current=m,!m&&j&&l!==t&&c(t),[m?s:l,o.useCallback(function(h){for(var f=arguments.length,x=new Array(f>1?f-1:0),d=1;d<f;d++)x[d-1]=arguments[d];r&&r.apply(void 0,[h].concat(x)),c(h)},[r])]}function As(s,t){return Object.keys(t).reduce(function(r,n){var a,l=r,c=l[fe(n)],m=l[n],j=qe(l,[fe(n),n].map(Is)),h=t[n],f=Ts(m,c,s[h]),x=f[0],d=f[1];return V({},j,(a={},a[n]=x,a[h]=d,a))},s)}const Os=Xe("carousel-caption"),ge=o.forwardRef(({as:s="div",bsPrefix:t,className:r,...n},a)=>{const l=L(r,me(t,"carousel-item"));return e.jsx(s,{ref:a,...n,className:l})});ge.displayName="CarouselItem";const Ps=ge;function xe(s,t){let r=0;return o.Children.map(s,n=>o.isValidElement(n)?t(n,r++):n)}function Ds(s,t){let r=0;o.Children.forEach(s,n=>{o.isValidElement(n)&&t(n,r++)})}const Ms=40;function Fs(s){if(!s||!s.style||!s.parentNode||!s.parentNode.style)return!1;const t=getComputedStyle(s);return t.display!=="none"&&t.visibility!=="hidden"&&getComputedStyle(s.parentNode).display!=="none"}const be=o.forwardRef(({defaultActiveIndex:s=0,...t},r)=>{const{as:n="div",bsPrefix:a,slide:l=!0,fade:c=!1,controls:m=!0,indicators:j=!0,indicatorLabels:h=[],activeIndex:f,onSelect:x,onSlide:d,onSlid:k,interval:T=5e3,keyboard:Y=!0,onKeyDown:$,pause:S="hover",onMouseOver:B,onMouseOut:K,wrap:A=!0,touch:G=!0,onTouchStart:_,onTouchMove:W,onTouchEnd:Q,prevIcon:ye=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-prev-icon"}),prevLabel:J="Previous",nextIcon:we=e.jsx("span",{"aria-hidden":"true",className:"carousel-control-next-icon"}),nextLabel:Z="Next",variant:ee,className:Ne,children:H,...Ce}=As({defaultActiveIndex:s,...t},{activeIndex:"onSelect"}),b=me(a,"carousel"),E=Ve(),R=o.useRef(null),[se,te]=o.useState("next"),[Se,D]=o.useState(!1),[I,ne]=o.useState(!1),[p,Ee]=o.useState(f||0);o.useEffect(()=>{!I&&f!==p&&(R.current?te(R.current):te((f||0)>p?"next":"prev"),l&&ne(!0),Ee(f||0))},[f,I,p,l]),o.useEffect(()=>{R.current&&(R.current=null)});let N=0,re;Ds(H,(i,u)=>{++N,u===f&&(re=i.props.interval)});const le=ze(re),v=o.useCallback(i=>{if(I)return;let u=p-1;if(u<0){if(!A)return;u=N-1}R.current="prev",x==null||x(u,i)},[I,p,x,A,N]),g=X(i=>{if(I)return;let u=p+1;if(u>=N){if(!A)return;u=0}R.current="next",x==null||x(u,i)}),U=o.useRef();o.useImperativeHandle(r,()=>({element:U.current,prev:v,next:g}));const ae=X(()=>{!document.hidden&&Fs(U.current)&&(E?v():g())}),C=se==="next"?"start":"end";gs(()=>{l||(d==null||d(p,C),k==null||k(p,C))},[p]);const Re=`${b}-item-${se}`,Ie=`${b}-item-${C}`,ke=o.useCallback(i=>{Ye(i),d==null||d(p,C)},[d,p,C]),Te=o.useCallback(()=>{ne(!1),k==null||k(p,C)},[k,p,C]),Ae=o.useCallback(i=>{if(Y&&!/input|textarea/i.test(i.target.tagName))switch(i.key){case"ArrowLeft":i.preventDefault(),E?g(i):v(i);return;case"ArrowRight":i.preventDefault(),E?v(i):g(i);return}$==null||$(i)},[Y,$,v,g,E]),Oe=o.useCallback(i=>{S==="hover"&&D(!0),B==null||B(i)},[S,B]),Pe=o.useCallback(i=>{D(!1),K==null||K(i)},[K]),oe=o.useRef(0),M=o.useRef(0),ie=bs(),De=o.useCallback(i=>{oe.current=i.touches[0].clientX,M.current=0,S==="hover"&&D(!0),_==null||_(i)},[S,_]),Me=o.useCallback(i=>{i.touches&&i.touches.length>1?M.current=0:M.current=i.touches[0].clientX-oe.current,W==null||W(i)},[W]),Fe=o.useCallback(i=>{if(G){const u=M.current;Math.abs(u)>Ms&&(u>0?v(i):g(i))}S==="hover"&&ie.set(()=>{D(!1)},T||void 0),Q==null||Q(i)},[G,S,v,g,ie,T,Q]),ce=T!=null&&!Se&&!I,q=o.useRef();o.useEffect(()=>{var i,u;if(!ce)return;const y=E?v:g;return q.current=window.setInterval(document.visibilityState?ae:y,(i=(u=le.current)!=null?u:T)!=null?i:void 0),()=>{q.current!==null&&clearInterval(q.current)}},[ce,v,g,le,T,ae,E]);const ue=o.useMemo(()=>j&&Array.from({length:N},(i,u)=>y=>{x==null||x(u,y)}),[j,N,x]);return e.jsxs(n,{ref:U,...Ce,onKeyDown:Ae,onMouseOver:Oe,onMouseOut:Pe,onTouchStart:De,onTouchMove:Me,onTouchEnd:Fe,className:L(Ne,b,l&&"slide",c&&`${b}-fade`,ee&&`${b}-${ee}`),children:[j&&e.jsx("div",{className:`${b}-indicators`,children:xe(H,(i,u)=>e.jsx("button",{type:"button","data-bs-target":"","aria-label":h!=null&&h.length?h[u]:`Slide ${u+1}`,className:u===p?"active":void 0,onClick:ue?ue[u]:void 0,"aria-current":u===p},u))}),e.jsx("div",{className:`${b}-inner`,children:xe(H,(i,u)=>{const y=u===p;return l?e.jsx(Ge,{in:y,onEnter:y?ke:void 0,onEntered:y?Te:void 0,addEndListener:Je,children:(O,Le)=>o.cloneElement(i,{...Le,className:L(i.props.className,y&&O!=="entered"&&Re,(O==="entered"||O==="exiting")&&"active",(O==="entering"||O==="exiting")&&Ie)})}):o.cloneElement(i,{className:L(i.props.className,y&&"active")})})}),m&&e.jsxs(e.Fragment,{children:[(A||f!==0)&&e.jsxs(de,{className:`${b}-control-prev`,onClick:v,children:[ye,J&&e.jsx("span",{className:"visually-hidden",children:J})]}),(A||f!==N-1)&&e.jsxs(de,{className:`${b}-control-next`,onClick:g,children:[we,Z&&e.jsx("span",{className:"visually-hidden",children:Z})]})]})]})});be.displayName="Carousel";const P=Object.assign(be,{Caption:Os,Item:Ps}),Ls="/assets/Two-acba3acd.jpg",$s="/assets/Third-90057865.jpg",Bs="/assets/Fifth-7e227ccf.jpg",Ks="/assets/Sixth-8a3607e7.jpg";function _s(){return e.jsxs(P,{className:"w-full sm:h-96 lg:h-full theCarouse overflow-hidden my-5 sm:",controls:!1,children:[e.jsx(P.Item,{children:e.jsxs("div",{className:"w-full h-full bg-white p-4 flex flex-row items-center justify-around",children:[e.jsx("div",{className:"",children:e.jsxs("div",{children:[e.jsx("h1",{className:"sm:text-2xl lg:text-3xl font-bold xl:text-4xl bg-orange-400 w-fit p-2",children:"Get 15% off"}),e.jsxs("p",{className:"sm:text-md lg:text-2xl xl:text-xl",children:["Start shopping now and make the most",e.jsx("br",{})," of these incredible discounts."]})]})}),e.jsx("div",{className:"",children:e.jsx("img",{src:Ls,alt:"",className:"w-72 h-full"})})]})}),e.jsx(P.Item,{children:e.jsxs("div",{className:'w-full h-full p-4 flex flex-row items-center justify-around bg-gradient-to-br from-blue-300 to-blue-100"',children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"sm:text-2xl lg:text-3xl xl:text-4xl bg-blue-500 p-2 font-bold w-fit text-white",children:"Shop Now and Save!"}),e.jsxs("p",{className:"sm:text-md lg:text-2xl xl:text-xl",children:["Browse our latest collection of ",e.jsx("br",{})," fashion-forward clothing for all seasons."]})]}),e.jsx("div",{className:"",children:e.jsx("img",{src:$s,alt:"",className:"w-72 h-full"})})]})}),e.jsx(P.Item,{children:e.jsxs("div",{className:"w-full h-full p-4 flex flex-row items-center justify-around ",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"sm:text-2xl lg:text-3xl xl:text-4xl bg-pink-300 p-2 font-bold text-center",children:"Enjoy a 20% discount"}),e.jsx("p",{className:"sm:text-md lg:text-2xl xl:text-xl",children:"on all T-shirts in our summer collection"})]}),e.jsx("div",{className:"",children:e.jsx("img",{src:Ks,alt:"",className:"w-72 h-full"})})]})}),e.jsx(P.Item,{children:e.jsxs("div",{className:"w-full sm:px-6 lg:px-0 h-full py-4 bg-gradient-to-tr from-slate-300 to slate-50 flex flex-row items-center justify-around",children:[e.jsxs("div",{className:"",children:[e.jsx("h1",{className:"sm:text-2xl lg:text-3xl xl:text-4xl font-bold bg-slate-400 text-white p-2 w-fit",children:"Tech Extravaganza!"}),e.jsx("p",{className:"sm:text-md lg:text-2xl xl:text-xl",children:"Enjoy up to 30% off on select computers and accessories"})]}),e.jsx("div",{className:"",children:e.jsx("img",{src:Bs,alt:"",className:"w-72 h-full "})})]})})]})}const Ws="/assets/Last-474f7fee.jpg";function Qs(){return e.jsxs("div",{className:"grid gap-4 sm:grid-cols-2 sm:items-center px-3 sm:px-5 py-5 bg-slate-100 w-full lg:mx-7",children:[e.jsx("div",{className:"w-full h-64 lg:h-full",children:e.jsx("img",{src:Ws,alt:"",className:"w-full h-full object-cover"})}),e.jsxs("div",{className:"",children:[e.jsx("h2",{className:"text-2xl font-bold ",children:"New arrivals!"}),e.jsx("p",{className:"text-md ",children:"Subscribe to our newsletter and stay updated on the latest trends, product launches and special offers"}),e.jsx("p",{className:"text-md",children:"Thank you for choosing MAFIA for you diffrent type of products."}),e.jsxs("div",{className:"my-3 w-full flex flex-row",children:[e.jsx("input",{type:"email",className:"border-1 w-full py-1 px-2 outline-none placeholder:italic",placeholder:"abc@gmail.com",required:!0}),e.jsx("button",{type:"submit",className:"text-md px-3 py-1 text-white bg-black hover:duration-500 hover:opacity-50",children:"Subscribe"})]})]})]})}function Hs(){return e.jsxs("div",{className:"bg-black text-white flex flex-col justify-around py-4 w-full",children:[e.jsx("div",{className:"flex flex-col items-center sm:items-start sm:mx-10 lg:mx-32 xl:mx-40",children:e.jsx("h1",{className:"text-white text-3xl ",children:"MAFIA"})}),e.jsxs("div",{className:"footer flex flex-col  items-center gap-5 sm:flex-row sm:justify-around sm:items-start my-4",children:[e.jsxs("div",{className:"flex flex-col items-center sm:items-start",children:[e.jsx("h2",{className:"text-xl",children:"Products"}),e.jsx(w,{to:"/",children:"Electronics"}),e.jsx(w,{children:"Man's Clothing"}),e.jsx(w,{children:"Woman's Clothing"})]}),e.jsxs("div",{className:"flex flex-col",children:[e.jsx("h2",{className:"text-xl",children:"About"}),e.jsx(w,{children:"About Us"}),e.jsx(w,{children:"Blog"}),e.jsx(w,{children:"Contact"})]}),e.jsxs("div",{className:"social flex flex-row space-x-7 text-2xl justify-center my-2",children:[e.jsx(w,{children:e.jsx(Ze,{})}),e.jsxs(w,{children:[" ",e.jsx(es,{})]}),e.jsx(w,{children:e.jsx(ss,{})})]})]}),e.jsx("p",{className:"text-sm text-center mt-5 italic",children:"© Copyright 2023 by MAFIA. All rights reserved."})]})}function Vs(){const[s,t]=o.useState(""),{data:r}=he(),[n,a]=o.useState(!1),[l,c]=o.useState([]),[m,j]=o.useState(!1),h=()=>{if(r){const x=r.filter(d=>s===""||d.category.toLowerCase().includes(s.toLowerCase()));c(x),j(s!==""&&x.length===0),a(s!=="")}},f=()=>{h()};return o.useEffect(()=>{h()},[s]),e.jsxs("div",{className:"relative top-36",children:[e.jsx("div",{className:"px-2 mb-4",children:e.jsxs("div",{className:"w-full flex sm:justify-center sm:mx-auto",children:[e.jsx("input",{type:"search",value:s,onChange:x=>t(x.target.value),className:"border-2 rounded-l-md outline-none w-full sm:w-1/2 lg:w-1/4 sm:py-2 placeholder:italic px-2 py-1",placeholder:"What are you looking for?"}),e.jsx("button",{onClick:f,className:"px-2 bg-slate-300 font-bold rounded-r-md",children:e.jsx(ts,{})})]})}),e.jsx("div",{className:n?"hidden":"flex flex-row justify-center items-center w-full",children:e.jsx("h1",{className:"font-bold italic text-2xl",children:"Welcome to MAFIA store!"})}),e.jsx("div",{className:n?"hidden":"hidden sm:flex",children:e.jsx(_s,{})}),m?e.jsx("p",{className:"italic flex flex-row justify-center items-center px-2 text-2xl h-60",children:"Your search is not found!"}):e.jsx(vs,{products:s===""?r:l}),e.jsx("div",{className:n?"hidden":"flex",children:e.jsx(Qs,{})}),e.jsx("div",{className:n?"hidden":"flex",children:e.jsx(Hs,{})})]})}export{Vs as default};