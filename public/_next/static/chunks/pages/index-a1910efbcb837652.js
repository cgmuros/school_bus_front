(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(2307)}])},2307:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return Component}});var i=n(6811),o=n(7294),r=n(3100),s=n(4641),a=n(3838),l=n(1941),c=n(7754),d=n(1669),h=n(9432),m=n(4418),g=n(9564),x=n(204),p=n(5034);function useButtonType(e){let[t,n]=(0,o.useState)(!e),i=(0,o.useCallback)(e=>{e&&n("BUTTON"===e.tagName)},[]);return{ref:i,type:t?"button":void 0}}var[u,f]=(0,n(5227).k)({strict:!1,name:"ButtonGroupContext"}),w=n(2504),C=n(5432),F=n(5893);function ButtonIcon(e){let{children:t,className:n,...i}=e,r=(0,o.isValidElement)(t)?(0,o.cloneElement)(t,{"aria-hidden":!0,focusable:!1}):t,s=(0,C.cx)("chakra-button__icon",n);return(0,F.jsx)(w.m.span,{display:"inline-flex",alignSelf:"center",flexShrink:0,...i,className:s,children:r})}ButtonIcon.displayName="ButtonIcon";var Z=n(295);function ButtonSpinner(e){let{label:t,placement:n,spacing:i="0.5rem",children:r=(0,F.jsx)(Z.$,{color:"currentColor",width:"1em",height:"1em"}),className:s,__css:a,...l}=e,c=(0,C.cx)("chakra-button__spinner",s),d="start"===n?"marginEnd":"marginStart",h=(0,o.useMemo)(()=>({display:"flex",alignItems:"center",position:t?"relative":"absolute",[d]:t?i:0,fontSize:"1em",lineHeight:"normal",...a}),[a,t,d,i]);return(0,F.jsx)(w.m.div,{className:c,...l,__css:h,children:r})}function assignRef(e,t){if(null!=e){if("function"==typeof e){e(t);return}try{e.current=t}catch(n){throw Error(`Cannot assign value '${t}' to ref '${e}'`)}}}function mergeRefs(...e){return t=>{e.forEach(e=>{assignRef(e,t)})}}function useMergeRefs(...e){return(0,o.useMemo)(()=>mergeRefs(...e),e)}ButtonSpinner.displayName="ButtonSpinner";var B=n(5059),b=n(1628),v=n(3179),_=(0,B.G)((e,t)=>{let n=f(),i=(0,b.mq)("Button",{...n,...e}),{isDisabled:r=null==n?void 0:n.isDisabled,isLoading:s,isActive:a,children:l,leftIcon:c,rightIcon:d,loadingText:h,iconSpacing:m="0.5rem",type:g,spinner:x,spinnerPlacement:p="start",className:u,as:Z,...B}=(0,v.Lr)(e),_=(0,o.useMemo)(()=>{let e={...null==i?void 0:i._focus,zIndex:1};return{display:"inline-flex",appearance:"none",alignItems:"center",justifyContent:"center",userSelect:"none",position:"relative",whiteSpace:"nowrap",verticalAlign:"middle",outline:"none",...i,...!!n&&{_focus:e}}},[i,n]),{ref:k,type:y}=useButtonType(Z),S={rightIcon:d,leftIcon:c,iconSpacing:m,children:l};return(0,F.jsxs)(w.m.button,{ref:useMergeRefs(t,k),as:Z,type:null!=g?g:y,"data-active":(0,C.PB)(a),"data-loading":(0,C.PB)(s),__css:_,className:(0,C.cx)("chakra-button",u),...B,disabled:r||s,children:[s&&"start"===p&&(0,F.jsx)(ButtonSpinner,{className:"chakra-button__spinner--start",label:h,placement:"start",spacing:m,children:x}),s?h||(0,F.jsx)(w.m.span,{opacity:0,children:(0,F.jsx)(ButtonContent,{...S})}):(0,F.jsx)(ButtonContent,{...S}),s&&"end"===p&&(0,F.jsx)(ButtonSpinner,{className:"chakra-button__spinner--end",label:h,placement:"end",spacing:m,children:x})]})});function ButtonContent(e){let{leftIcon:t,rightIcon:n,children:i,iconSpacing:o}=e;return(0,F.jsxs)(F.Fragment,{children:[t&&(0,F.jsx)(ButtonIcon,{marginEnd:o,children:t}),i,n&&(0,F.jsx)(ButtonIcon,{marginStart:o,children:n})]})}_.displayName="Button";var k=n(4298),y=n.n(k),S=n(1664),E=n.n(S);n(5202);var X=n(738),z=n(9008),W=n.n(z);function Component(){return(0,i.BX)(o.Fragment,{children:[(0,i.BX)(r.xu,{children:[(0,i.tZ)(y(),{strategy:"afterInteractive",children:"document.documentElement.lang = 'en'"}),(0,i.BX)(s.U,{justifyContent:"space-between",sx:{position:"sticky",bg:"#171F26",paddingX:"2em",paddingY:"1em",zIndex:"999",top:"0"},children:[(0,i.tZ)(r.xu,{children:(0,i.BX)(s.U,{sx:{fontFamily:"Comfortaa",fontWeight:"500",fontSize:"1.5em"},children:[(0,i.tZ)(a.r,{as:E(),href:"/",sx:{color:"#14A1F0",textDecoration:"none",_hover:{}},children:"cmuros"}),(0,i.tZ)(a.r,{as:E(),href:"/",sx:{color:"#087ec4",textDecoration:"none",_hover:{}},children:"dev"})]})}),(0,i.BX)(s.U,{children:[(0,i.tZ)(l.E,{src:"/icons/download.svg"}),(0,i.tZ)(a.r,{as:E(),href:"/docs/cv_english_detail.pdf",isExternal:!0,sx:{color:"#14A1F0",textDecoration:"none",_hover:{}},children:"Download CV"})]}),(0,i.tZ)(X.Z,{badge:{dot:!0,color:"#14A1F0"},href:"https://www.linkedin.com/in/cgmuros/",icon:(0,i.tZ)(l.E,{src:"/icons/linkedin_blue.svg"}),target:"_blank"})]}),(0,i.tZ)(c.M,{children:(0,i.BX)(d.g,{sx:{maxWidth:"600px",width:"100%",padding:"2em"},children:[(0,i.BX)(d.g,{alignItems:"start",spacing:"2em",sx:{maxWidth:"600px",width:"100%"},children:[(0,i.BX)(s.U,{spacing:"1em",children:[(0,i.tZ)(a.r,{as:E(),href:"/",sx:{textDecoration:"none",_hover:{}},children:(0,i.tZ)(h.q,{name:"Cristian Munoz",size:"xl",src:"/me_128.png",sx:{padding:"2px",color:"#C3C7CB",border:"4px",borderColor:"#14A1F0",bg:"#171F26"}})}),(0,i.BX)(d.g,{alignItems:"start",children:[(0,i.tZ)(m.X,{size:"lg",sx:{color:"#F1F2F4",fontFamily:"Poppins",fontWeight:"500"},children:"Cristian Munoz"}),(0,i.tZ)(g.x,{sx:{marginTop:"0px !important",color:"#C3C7CB"},children:"cgmuros@gmail.com"}),(0,i.BX)(s.U,{children:[(0,i.tZ)(a.r,{as:E(),href:"https://www.linkedin.com/in/cgmuros/",isExternal:!0,sx:{textDecoration:"none",_hover:{}},children:(0,i.tZ)(l.E,{alt:"Linkedin",src:"/icons/linkedin.svg",sx:{width:"1.5em",height:"1.5em"}})}),(0,i.tZ)(a.r,{as:E(),href:"https://github.com/cgmuros",isExternal:!0,sx:{textDecoration:"none",_hover:{}},children:(0,i.tZ)(l.E,{alt:"Github",src:"/icons/square-github.svg",sx:{width:"1.5em",height:"1.5em"}})}),(0,i.tZ)(a.r,{as:E(),href:"https://twitter.com/cgmurosdev",isExternal:!0,sx:{textDecoration:"none",_hover:{}},children:(0,i.tZ)(l.E,{alt:"Twitter/X",src:"/icons/twitter_logo.svg",sx:{width:"1.5em",height:"1.5em"}})}),(0,i.tZ)(a.r,{as:E(),href:"https://www.strava.com/athletes/49921501",isExternal:!0,sx:{textDecoration:"none",_hover:{}},children:(0,i.tZ)(l.E,{alt:"Strava",src:"/icons/strava_logo.svg",sx:{width:"1.5em",height:"1.5em"}})})]})]})]}),(0,i.BX)(x.k,{sx:{width:"100%"},children:[(0,i.BX)(r.xu,{sx:{fontSize:"0.8em",color:"#C3C7CB"},children:[(0,i.tZ)(g.x,{as:"span",sx:{fontWeight:"bold",color:"#14A1F0"},children:"+15"})," Profesional Experience"]}),(0,i.tZ)(p.L,{}),(0,i.BX)(r.xu,{sx:{fontSize:"0.8em",color:"#C3C7CB"},children:[(0,i.tZ)(g.x,{as:"span",sx:{fontWeight:"bold",color:"#14A1F0"},children:"+10"})," Data Engineer"]}),(0,i.tZ)(p.L,{}),(0,i.BX)(r.xu,{sx:{fontSize:"0.8em",color:"#C3C7CB"},children:[(0,i.tZ)(g.x,{as:"span",sx:{fontWeight:"bold",color:"#14A1F0"},children:"+6"})," Data Architect"]})]}),(0,i.tZ)(g.x,{sx:{color:"#F1F2F4",fontSize:"1.5em"},children:""}),(0,i.BX)(d.g,{alignItems:"start",sx:{widht:"100%"},children:[(0,i.tZ)(g.x,{sx:{color:"#C3C7CB",align:"left"},children:"I have been working for the last 15 years on data-related projects. "}),(0,i.tZ)(g.x,{sx:{color:"#C3C7CB",align:"left"},children:"            Various Companies and Projects have allowed me to gain experience and meet great teams in which I have been able to be a contribution. "}),(0,i.tZ)(g.x,{sx:{color:"#C3C7CB",align:"left"},children:"            I built this site mainly so that you can get to know me and contact me if you need it."})]})]}),(0,i.BX)(d.g,{spacing:"0.8em",sx:{width:"100%"},children:[(0,i.tZ)(m.X,{size:"lg",sx:{width:"100%",size:"lg",paddingTop:"1em",color:"#F1F2F4",fontFamily:"Poppins",fontWeight:"500"},children:"Links"}),(0,i.tZ)(a.r,{as:E(),href:"/about",isExternal:!1,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,i.tZ)(_,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:"#171F26",whiteSpace:"normal",textAlign:"start",color:"#F1F2F4",_hover:{backgroundColor:"#087ec4"}},children:(0,i.BX)(s.U,{sx:{widht:"100%"},children:[(0,i.tZ)(l.E,{src:"/icons/aboutme.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,i.BX)(d.g,{alignItems:"start",spacing:"0.5em",sx:{paddingY:"0.5em",paddingRight:"0.5em"},children:[(0,i.tZ)(g.x,{sx:{fontFamily:"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"About Me"}),(0,i.tZ)(g.x,{sx:{fontSize:"0.8em",fontWeight:"300",color:"#C3C7CB"},children:"A little more about me"})]})]})})}),(0,i.tZ)(a.r,{as:E(),href:"/skills",isExternal:!1,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,i.tZ)(_,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:"#171F26",whiteSpace:"normal",textAlign:"start",color:"#F1F2F4",_hover:{backgroundColor:"#087ec4"}},children:(0,i.BX)(s.U,{sx:{widht:"100%"},children:[(0,i.tZ)(l.E,{src:"/icons/skills.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,i.BX)(d.g,{alignItems:"start",spacing:"0.5em",sx:{paddingY:"0.5em",paddingRight:"0.5em"},children:[(0,i.tZ)(g.x,{sx:{fontFamily:"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"My Skills"}),(0,i.tZ)(g.x,{sx:{fontSize:"0.8em",fontWeight:"300",color:"#C3C7CB"},children:"Knowing my technical skills"})]})]})})}),(0,i.tZ)(a.r,{as:E(),href:"/mycv",isExternal:!1,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,i.tZ)(_,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:"#171F26",whiteSpace:"normal",textAlign:"start",color:"#F1F2F4",_hover:{backgroundColor:"#087ec4"}},children:(0,i.BX)(s.U,{sx:{widht:"100%"},children:[(0,i.tZ)(l.E,{src:"/icons/cv.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,i.BX)(d.g,{alignItems:"start",spacing:"0.5em",sx:{paddingY:"0.5em",paddingRight:"0.5em"},children:[(0,i.tZ)(g.x,{sx:{fontFamily:"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"My CV"}),(0,i.tZ)(g.x,{sx:{fontSize:"0.8em",fontWeight:"300",color:"#C3C7CB"},children:"Download my CV"})]})]})})}),(0,i.tZ)(a.r,{as:E(),href:"https://www.linkedin.com/in/cgmuros/",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,i.tZ)(_,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:"#171F26",whiteSpace:"normal",textAlign:"start",color:"#F1F2F4",_hover:{backgroundColor:"#087ec4"}},children:(0,i.BX)(s.U,{sx:{widht:"100%"},children:[(0,i.tZ)(l.E,{src:"/icons/linkedin.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,i.BX)(d.g,{alignItems:"start",spacing:"0.5em",sx:{paddingY:"0.5em",paddingRight:"0.5em"},children:[(0,i.tZ)(g.x,{sx:{fontFamily:"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"LikedIn"}),(0,i.tZ)(g.x,{sx:{fontSize:"0.8em",fontWeight:"300",color:"#C3C7CB"},children:"Let's talk on linkedin"})]})]})})}),(0,i.tZ)(a.r,{as:E(),href:"https://github.com/cgmuros",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,i.tZ)(_,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:"#171F26",whiteSpace:"normal",textAlign:"start",color:"#F1F2F4",_hover:{backgroundColor:"#087ec4"}},children:(0,i.BX)(s.U,{sx:{widht:"100%"},children:[(0,i.tZ)(l.E,{src:"/icons/square-github.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,i.BX)(d.g,{alignItems:"start",spacing:"0.5em",sx:{paddingY:"0.5em",paddingRight:"0.5em"},children:[(0,i.tZ)(g.x,{sx:{fontFamily:"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Github"}),(0,i.tZ)(g.x,{sx:{fontSize:"0.8em",fontWeight:"300",color:"#C3C7CB"},children:"I invite you to review my repos"})]})]})})}),(0,i.tZ)(a.r,{as:E(),href:"https://twitter.com/cgmurosdev",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,i.tZ)(_,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:"#171F26",whiteSpace:"normal",textAlign:"start",color:"#F1F2F4",_hover:{backgroundColor:"#087ec4"}},children:(0,i.BX)(s.U,{sx:{widht:"100%"},children:[(0,i.tZ)(l.E,{src:"/icons/twitter_logo.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,i.BX)(d.g,{alignItems:"start",spacing:"0.5em",sx:{paddingY:"0.5em",paddingRight:"0.5em"},children:[(0,i.tZ)(g.x,{sx:{fontFamily:"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Twitter"}),(0,i.tZ)(g.x,{sx:{fontSize:"0.8em",fontWeight:"300",color:"#C3C7CB"},children:"Let's connect"})]})]})})}),(0,i.tZ)(a.r,{as:E(),href:"https://www.strava.com/athletes/49921501",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,i.tZ)(_,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:"#171F26",whiteSpace:"normal",textAlign:"start",color:"#F1F2F4",_hover:{backgroundColor:"#087ec4"}},children:(0,i.BX)(s.U,{sx:{widht:"100%"},children:[(0,i.tZ)(l.E,{src:"/icons/strava_logo.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,i.BX)(d.g,{alignItems:"start",spacing:"0.5em",sx:{paddingY:"0.5em",paddingRight:"0.5em"},children:[(0,i.tZ)(g.x,{sx:{fontFamily:"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Strava"}),(0,i.tZ)(g.x,{sx:{fontSize:"0.8em",fontWeight:"300",color:"#C3C7CB"},children:"Let's connect"})]})]})})}),(0,i.tZ)(m.X,{size:"lg",sx:{width:"100%",size:"lg",paddingTop:"1em",color:"#F1F2F4",fontFamily:"Poppins",fontWeight:"500"},children:"Contact"}),(0,i.tZ)(a.r,{as:E(),href:"mailto:cgmuros@gmail.com",isExternal:!0,sx:{width:"100%",textDecoration:"none",_hover:{}},children:(0,i.tZ)(_,{sx:{width:"100%",height:"100%",display:"block",padding:"0.5em",borderRadius:"1em",backgroundColor:"#171F26",whiteSpace:"normal",textAlign:"start",color:"#F1F2F4",_hover:{backgroundColor:"#087ec4"}},children:(0,i.BX)(s.U,{sx:{widht:"100%"},children:[(0,i.tZ)(l.E,{src:"/icons/envelope-solid.svg",sx:{width:"1.5em",height:"1.5em",margin:"0.8em"}}),(0,i.BX)(d.g,{alignItems:"start",spacing:"0.5em",sx:{paddingY:"0.5em",paddingRight:"0.5em"},children:[(0,i.tZ)(g.x,{sx:{fontFamily:"Poppins",fontWeight:"500",fontSize:"1em",color:"#F1F2F4"},children:"Email"}),(0,i.tZ)(g.x,{sx:{fontSize:"0.8em",fontWeight:"300",color:"#C3C7CB"},children:"cgmuros@gmail.com"})]})]})})})]})]})}),(0,i.BX)(d.g,{sx:{paddingBottom:"2em",color:"#A3ABB2"},children:[(0,i.tZ)(l.E,{src:"/logo_128.png",sx:{height:"4em"}}),(0,i.tZ)(a.r,{as:E(),href:"https://www.linkedin.com/in/cgmuros/",isExternal:!0,sx:{fontSize:"0.8em",textDecoration:"none",_hover:{}},children:"2023-2024 cgmuros By Cristian Munoz V1"}),(0,i.tZ)(g.x,{sx:{fontSize:"0.8em",marginTop:"0px !important"},children:"Building software from Chile to the World"})]})]}),(0,i.BX)(W(),{children:[(0,i.tZ)("title",{children:"CgmurosDev. Software Engineering and Data"}),(0,i.tZ)("meta",{content:"Building software from Chile to the World",name:"description"}),(0,i.tZ)("meta",{content:"me_128.png",property:"og:image"}),(0,i.tZ)("meta",{content:"website",name:"og:type"}),(0,i.tZ)("meta",{content:"CgmurosDev. Software Engineering and Data",name:"og:title"}),(0,i.tZ)("meta",{content:"Building software from Chile to the World",name:"og:description"}),(0,i.tZ)("meta",{content:"me_128.png",name:"og:image"}),(0,i.tZ)("meta",{content:"summary_large_image",name:"twitter:card"}),(0,i.tZ)("meta",{content:"@cmurosdev",name:"twitter:site"})]})]})}},4298:function(e,t,n){e.exports=n(5354)}},function(e){e.O(0,[884,774,888,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);