import{o as g,h as l,i as c,A as m,E as f,f as p,Q as x,j as h,F as y,k as t,B as R,l as E,n as d,p as F}from"./index-ed74213a.js";import{E as u}from"./ErrorBlock-2b216bce.js";import{S as j}from"./SuccessBlock-d7ef8ef1.js";import{u as b}from"./use-form-721559d2.js";import{P as S}from"./is-email-37029383.js";const L=({email:r})=>c({url:m.AUTH.REQUEST_PIN,data:{email:r,type:f.VERIFY}}),I=()=>{const{email:r}=g(),{reset:n,isSuccess:e,error:s,isLoading:i,mutate:a}=l({mutationFn:L,networkMode:"offlineFirst"});return{reset:n,error:s,isLoading:i,handleResend:()=>a({email:r}),success:e}},P=({pin:r})=>c({url:m.AUTH.VERIFY,data:{code:r,type:f.VERIFY}}),T=()=>{const r=p(),{reset:n,error:e,isLoading:s,mutate:i}=l({mutationFn:P,networkMode:"offlineFirst",onSuccess:o=>r.setQueryData([x.USER],o)});return{reset:n,error:e,isLoading:s,handleSubmit:({pin:o})=>i({pin:o})}},V=()=>{const{t:r}=h("translation",{keyPrefix:"auth"});return{form:b({initialValues:{pin:""},validate:{pin:e=>`${e}`.length<y.PIN_MIN_LENGTH?r("verify.error"):null}})}},B=()=>{const{form:r}=V(),{t:n}=h("translation",{keyPrefix:"auth"}),e=T(),s=I();return t.jsxs(t.Fragment,{children:[e.error&&t.jsx(u,{reset:e.reset,children:e.error}),s.error&&t.jsx(u,{reset:s.reset,children:s.error}),s.success&&t.jsx(j,{reset:s.reset,children:"New code has been sent"}),t.jsx(R,{mt:"md",children:t.jsx("form",{onSubmit:r.onSubmit(i=>{s.reset(),e.handleSubmit(i)}),children:t.jsxs(E,{direction:"column",gap:"lg",align:"center",children:[t.jsx(S,{autoFocus:!0,length:6,size:"lg",oneTimeCode:!0,type:"number",...r.getInputProps("pin"),disabled:e.isLoading||s.isLoading}),t.jsx(d,{type:"submit",size:"lg",fullWidth:!0,disabled:e.isLoading||s.isLoading,loading:e.isLoading,children:n("verify.submit")}),t.jsx(F,{size:"sm",align:"center",color:"dimmed",children:n("verify.notice")}),t.jsx(d,{size:"xs",variant:"light",onClick:()=>{e.reset(),s.handleResend()},loading:s.isLoading,disabled:e.isLoading||s.isLoading,children:n("verify.resend")})]})})})]})};export{B as V};
