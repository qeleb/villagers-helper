"use strict";(self.webpackChunkvilrs=self.webpackChunkvilrs||[]).push([[515],{8492:(e,t,a)=>{a.d(t,{l:()=>b});var r=a(244),l=a(7812),i=a(9466),n=a(6473),o=a(7993);const s=e=>{let{click:t}=e;return l.az(c,{onClick:t},l.az(d,null),l.az(d,null),l.az(d,null))},c=r.ZP.button`height:1.4rem;width:1.875rem;display:flex;flex-direction:column;justify-content:space-between;background:transparent;border:none;cursor:pointer;padding:0;box-sizing:border-box;&:focus{outline:none;}`,d=r.ZP.div`width:100%;height:12%;background-color:${e=>e.theme.primary};`;var m=a(6352),g=a(2219),u=a(632),p=a(7215),h=a(8446);const f=a.p+"static/media/logo.b0e1f40989880cf418e4.webp",b=e=>{let{title:t,btnSearch:a}=e;const{actions:r}=(0,p.oX)(),n=(0,m.v9)(g.O),o=(0,m.v9)(u.P),c=(0,m.I0)();return l.az(v,null,o===h.n.light&&l.az(x,null),l.az(y,{className:"mobile"},l.az(s,{click:()=>c(r.toggleSideDrawer(!n.showDrawer))})),l.az(z,{to:"/",className:"desktop"},l.az("img",{src:f,alt:"vilrs"}),l.az("span",null,l.az("strong",null,"vilrs"),"A helpful tool for villagers")),l.az(w,null,t),l.az(k,{className:"mobile"},a&&l.az("div",{onClick:a})),l.az($,{className:"desktop"},l.az(i.OL,{to:"/rules",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game rules"},"rules"),l.az(i.OL,{to:"/configs",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game configurations"},"configurations"),l.az(i.OL,{to:"/cards",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"game cards"},"cards"),l.az(i.OL,{to:"/settings",className:e=>{let{isActive:t}=e;return t?"active":"inactive"},title:"settings"},"settings")))},v=r.ZP.header`position:fixed;top:0;width:100%;height:calc(${n.P.COMBINED_BAR_HEIGHT});padding:calc(${n.P.STATUS_BAR_HEIGHT}) calc(1.5rem + env(safe-area-inset-right)) 0 calc(1.5rem + env(safe-area-inset-left));z-index:5;display:flex;box-shadow:0 1px 0 0 ${e=>e.theme.borderLight};background-color:${e=>e.theme.background};@supports (backdrop-filter:blur(6px)){backdrop-filter:blur(6px);background-color:${e=>e.theme.background.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.75)")};}.desktop{display:none !important;}${o.N}{align-items:center;.desktop{display:inherit !important;}.mobile{display:none !important;}}`,x=r.ZP.div`@media only screen and (display-mode:standalone) and (orientation:portrait){position:absolute;top:0;left:0;width:100%;height:env(safe-area-inset-top);z-index:-1;background:linear-gradient(#0000005a 80%,#ffffff00 80%);}`,y=r.ZP.div`flex:1;margin-right:auto;display:flex;align-items:center;`,z=(0,r.ZP)(i.OL)`flex:1;display:flex;align-items:center;justify-content:end;text-decoration:none;img{max-height:calc(${n.P.NAV_BAR_HEIGHT} - 1rem);}span{font-size:0.875rem;color:${e=>e.theme.textSecondary};strong{font-size:1.6rem;color:${e=>e.theme.text};font-weight:bold;margin:0 0.75rem;}}`,w=r.ZP.div`flex:1;display:flex;justify-content:center;align-self:center;font-size:1.634rem;font-weight:bold;color:${e=>e.theme.text};`,k=r.ZP.nav`flex:1;div{margin-left:auto;width:24px;height:100%;background:transparent url("data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' fill='${e=>e.theme.textSecondary}' width='24' height='24' viewBox='0 0 487.95 487.95'><path d='M481.8,453l-140-140.1c27.6-33.1,44.2-75.4,44.2-121.6C386,85.9,299.5,0.2,193.1,0.2S0,86,0,191.4s86.5,191.1,192.9,191.1 c45.2,0,86.8-15.5,119.8-41.4l140.5,140.5c8.2,8.2,20.4,8.2,28.6,0C490,473.4,490,461.2,481.8,453z M41,191.4 c0-82.8,68.2-150.1,151.9-150.1s151.9,67.3,151.9,150.1s-68.2,150.1-151.9,150.1S41,274.1,41,191.4z'/></svg>") no-repeat center;cursor:pointer;}`,$=r.ZP.nav`flex:1;display:flex;.active{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.textSecondary};cursor:default;text-decoration:none;}.inactive{padding:0.25rem 1rem;font-size:0.875rem;color:${e=>e.theme.primary};text-decoration:none;&:hover{opacity:0.8;}&:active{opacity:0.4;}}`},403:(e,t,a)=>{a.d(t,{P:()=>r});const r=a(244).ZP.p`font-size:1rem;line-height:1.5;color:${e=>e.theme.textSecondary};margin:0.625rem 0 1.5rem 0;`},5130:(e,t,a)=>{a.r(t),a.d(t,{SettingsPage:()=>_});var r=a(244),l=a(7812);const i=r.ZP.label`text-transform:uppercase;font-weight:normal;margin:0 0 0.625rem 0;padding:0;color:${e=>e.theme.textSecondary};font-size:0.75rem;`;var n=a(7993);const o=(0,l.X$)((e=>{let{id:t,img:a,label:r,className:i,isSelected:n,...o}=e;return l.ZP.createElement(s,{className:i},l.ZP.createElement("input",Object.assign({type:"checkbox",id:t,checked:n},o)),l.ZP.createElement("label",{htmlFor:t},r,a&&l.ZP.createElement("img",{src:a,alt:r})))})),s=r.ZP.div`input[type='checkbox']{margin:0;opacity:0;width:0;height:0;padding:0;+ label{width:100%;margin:0;display:inline-block;padding-left:1.375rem;padding-top:0.0625rem;position:relative;z-index:1;font-size:0.875rem;color:${e=>e.theme.text};cursor:pointer;a{color:${e=>e.theme.text};text-decoration:none;}img{width:1.5rem;float:right;}&::before{position:absolute;top:0.25rem;left:0;display:inline-block;width:1rem;height:1rem;border-radius:25%;background-color:${e=>e.theme.background};content:'';border:2px solid ${e=>e.theme.border};transition:all 0.1s;}&::after{display:none;content:'';position:absolute;display:inline-block;width:0.375rem;height:0.375rem;border-radius:25%;top:0.5625rem;left:0.3125rem;background-color:${e=>e.theme.background};}${n.N}{&:hover{&::before{border-color:${e=>e.theme.primary};}}}}&:disabled{+ label{opacity:0.6;cursor:auto;&:hover{&::before{border-color:${e=>e.theme.border};}}}}&:focus{+ label{&::before{box-shadow:0 0 0 3px ${e=>e.theme.primary.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.2)")};}}}&:checked{+ label{&::before{background-color:${e=>e.theme.primary};border-color:${e=>e.theme.primary};}&::after{display:inline-block;}}}}`;var c=a(6352),d=a(5074),m=a(8619),g=a(7717),u=a(4240),p=a(7314);const h=function(e){e||(e="_NOT_TRANSLATED_");for(var t=arguments.length,a=new Array(t>1?t-1:0),r=1;r<t;r++)a[r-1]=arguments[r];return[e,...a]},f=()=>h(p.I.expSelector.selectExp,"Select Expansions");var b=a(9755);const v=()=>{const{t:e}=(0,u.$)(),t=(0,c.v9)(d.j),{actions:a}=(0,m.Jf)(),r=(0,c.I0)();return l.az(x,null,l.az(i,null,e(...f())),l.az(y,null,b.Xx[b.ZA.Exp].sets.filter(((e,t)=>0!==t)).map(((e,i)=>l.az(o,{id:""+(i+1),img:e.img,label:e.name,onChange:()=>(e=>{const l=t.includes(e)?t.filter((t=>t!==e)):t.concat(e);(0,g.ym)(l),r(a.setSelectedExpansions(l))})(i+1),isSelected:t.includes(i+1),key:i})))))},x=r.ZP.div`display:flex;flex-direction:column;`,y=r.ZP.div`display:grid;grid-template-columns:1fr 1fr;grid-template-rows:1fr 1fr 1fr 1fr;row-gap:0.5rem;column-gap:2rem;`,z=(0,l.X$)((e=>{let{id:t,label:a,className:r,isSelected:i,...n}=e;return l.ZP.createElement(w,{className:r},l.ZP.createElement("input",Object.assign({type:"radio",id:t,checked:i},n)),l.ZP.createElement("label",{htmlFor:t},a))})),w=r.ZP.div`input[type='radio']{margin:0;opacity:0;width:0;height:0;padding:0;+ label{margin:0;display:inline-block;padding-left:1.375rem;padding-top:0.0625rem;position:relative;z-index:1;font-size:0.875rem;color:${e=>e.theme.text};cursor:pointer;a{color:${e=>e.theme.text};text-decoration:none;}&::before{position:absolute;top:0.25rem;left:0;display:inline-block;width:1rem;height:1rem;border-radius:50%;background-color:${e=>e.theme.background};content:'';border:2px solid ${e=>e.theme.border};transition:all 0.1s;}&::after{display:none;content:'';position:absolute;display:inline-block;width:0.375rem;height:0.375rem;border-radius:50%;top:0.5625rem;left:0.3125rem;background-color:${e=>e.theme.background};}&:hover{&::before{border-color:${e=>e.theme.primary};}}}&:disabled{+ label{opacity:0.6;cursor:auto;&:hover{&::before{border-color:${e=>e.theme.border};}}}}&:focus{+ label{&::before{box-shadow:0 0 0 3px ${e=>e.theme.primary.replace(/rgba?(\(\s*\d+\s*,\s*\d+\s*,\s*\d+)(?:\s*,.+?)?\)/,"rgba$1,0.2)")};}}}&:checked{+ label{&::before{background-color:${e=>e.theme.primary};border-color:${e=>e.theme.primary};}&::after{display:inline-block;}}}}`;var k=a(1402),$=a(632),S=a(2488);const P=()=>h(p.I.themeSwitch.selectTheme,"Select Theme"),E=()=>{const{t:e}=(0,u.$)(),t=(0,c.v9)($.O),a=(0,c.I0)(),r=e=>{const t=e.target.value;(0,S.DV)(t),a(k.uQ.changeTheme(t))};return l.az(Z,null,l.az(i,null,e(...P())),l.az(N,null,l.az(z,{id:"system",label:"System theme",name:"theme",onChange:r,value:"system",isSelected:"system"===t}),l.az(z,{id:"light",label:"Light",name:"theme",onChange:r,value:"light",isSelected:"light"===t}),l.az(z,{id:"dark",label:"Dark",name:"theme",onChange:r,value:"dark",isSelected:"dark"===t})))},Z=r.ZP.div`display:flex;flex-direction:column;`,N=r.ZP.div`display:flex;div{margin-right:1.5rem;}`,O=()=>h(p.I.languageSwitch.selectLanguage,"Select Language"),I=()=>{const{t:e,i18n:t}=(0,u.$)(),a=e=>{t.changeLanguage(e.target.value)};return l.az(A,null,l.az(i,null,e(...O())),l.az(C,null,l.az(z,{id:"en",label:"English",name:"language",onChange:a,value:"en",isSelected:t.language.startsWith("en")}),l.az(z,{id:"es",label:"Espa\xf1ol",name:"language",onChange:a,value:"es",isSelected:t.language.startsWith("es")})))},A=r.ZP.div`display:flex;flex-direction:column;`,C=r.ZP.div`display:flex;div{margin-right:1.5rem;}`;var L=a(5964),T=a(8492),D=a(403);const _=()=>l.az(l.HY,null,l.az(L.ql,null,l.az("title",null,"settings"),l.az("meta",{name:"description",content:"settings"})),l.az(T.l,{title:"settings"}),l.az(j,null,l.az(H,null,l.az("div",null,l.az(i,null,"configurations"),l.az(D.P,{style:{margin:".5rem 0 0 0"}},"user configurations will be shown here.")),l.az(v,null),l.az(I,null),l.az(E,null)))),j=r.ZP.main`width:100%;max-width:52.75rem;height:100%;max-height:49.25rem;margin:0 auto;padding:1rem max(1rem,env(safe-area-inset-right)) calc(1rem + env(safe-area-inset-bottom)) max(1rem,env(safe-area-inset-left));display:flex;flex-direction:column;`,H=r.ZP.div`height:100%;display:flex;flex-flow:column wrap;justify-content:space-between;row-gap:1rem;column-gap:3rem;`},8619:(e,t,a)=>{a.d(t,{E3:()=>s,Jf:()=>g});var r=a(1685),l=a(5381),i=a(7717),n=a(9755);const o=[{name:"Standard Game",color:"#ff0000",cards:[n.Gb.Founders]}],s={configs:(0,i.Li)()||o,selectedExps:(0,i.tO)()||[n.NE.Base,n.NE.FourPlayer,n.NE.Promo1,n.NE.DiceTower,n.NE.Profiteers,n.NE.Saints,n.NE.Scoundrels]},c=(0,r.o)({name:"userData",initialState:s,reducers:{setDisabledCards(e,t){e.configs=t.payload},setSelectedExpansions(e,t){e.selectedExps=t.payload}}}),{actions:d,reducer:m}=c,g=()=>((0,l.v)({key:c.name,reducer:c.reducer}),{actions:c.actions})},5074:(e,t,a)=>{a.d(t,{j:()=>i});var r=a(5323),l=a(8619);(0,r.P1)([e=>e.userData||l.E3],(e=>e.configs));const i=(0,r.P1)([e=>e.userData||l.E3],(e=>e.selectedExps))},7717:(e,t,a)=>{a.d(t,{Li:()=>l,tO:()=>i,ym:()=>r});const r=e=>{var t;return null==(t=window.localStorage)?void 0:t.setItem("selectedExps",JSON.stringify(e))},l=()=>{var e;return null!=(e=window.localStorage)&&e.getItem("configs")?JSON.parse(window.localStorage.getItem("configs")||"[]"):null},i=()=>{var e;return null!=(e=window.localStorage)&&e.getItem("selectedExps")?JSON.parse(window.localStorage.getItem("selectedExps")||"[]"):null}}}]);