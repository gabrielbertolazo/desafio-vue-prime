import{B as tt,s as et,f as at,c as f,o as c,g as ot,b as nt,h as lt,m as O,t as st,n as ut,r as ct,S as ht,p as K,i as p,j,k as P,l as dt,q as V,u as X,v as pt,w as Q,x as ft,y as vt,z as W,A as mt,C as bt,D as yt,E as gt,G as St,H as Rt,I as wt,J as kt,K as $,L as Ot,M as Ct,N as Pt,O as zt,P as H,Q as q,d as rt,R as C,a as b,F as D,T as Y,U as L}from"./index-Bvg1hTJv.js";var Et=`
    .p-avatar {
        display: inline-flex;
        align-items: center;
        justify-content: center;
        width: dt('avatar.width');
        height: dt('avatar.height');
        font-size: dt('avatar.font.size');
        background: dt('avatar.background');
        color: dt('avatar.color');
        border-radius: dt('avatar.border.radius');
    }

    .p-avatar-image {
        background: transparent;
    }

    .p-avatar-circle {
        border-radius: 50%;
    }

    .p-avatar-circle img {
        border-radius: 50%;
    }

    .p-avatar-icon {
        font-size: dt('avatar.icon.size');
        width: dt('avatar.icon.size');
        height: dt('avatar.icon.size');
    }

    .p-avatar img {
        width: 100%;
        height: 100%;
    }

    .p-avatar-lg {
        width: dt('avatar.lg.width');
        height: dt('avatar.lg.width');
        font-size: dt('avatar.lg.font.size');
    }

    .p-avatar-lg .p-avatar-icon {
        font-size: dt('avatar.lg.icon.size');
        width: dt('avatar.lg.icon.size');
        height: dt('avatar.lg.icon.size');
    }

    .p-avatar-xl {
        width: dt('avatar.xl.width');
        height: dt('avatar.xl.width');
        font-size: dt('avatar.xl.font.size');
    }

    .p-avatar-xl .p-avatar-icon {
        font-size: dt('avatar.xl.icon.size');
        width: dt('avatar.xl.icon.size');
        height: dt('avatar.xl.icon.size');
    }

    .p-avatar-group {
        display: flex;
        align-items: center;
    }

    .p-avatar-group .p-avatar + .p-avatar {
        margin-inline-start: dt('avatar.group.offset');
    }

    .p-avatar-group .p-avatar {
        border: 2px solid dt('avatar.group.border.color');
    }

    .p-avatar-group .p-avatar-lg + .p-avatar-lg {
        margin-inline-start: dt('avatar.lg.group.offset');
    }

    .p-avatar-group .p-avatar-xl + .p-avatar-xl {
        margin-inline-start: dt('avatar.xl.group.offset');
    }
`,xt={root:function(e){var a=e.props;return["p-avatar p-component",{"p-avatar-image":a.image!=null,"p-avatar-circle":a.shape==="circle","p-avatar-lg":a.size==="large","p-avatar-xl":a.size==="xlarge"}]},label:"p-avatar-label",icon:"p-avatar-icon"},It=tt.extend({name:"avatar",style:Et,classes:xt}),Tt={name:"BaseAvatar",extends:et,props:{label:{type:String,default:null},icon:{type:String,default:null},image:{type:String,default:null},size:{type:String,default:"normal"},shape:{type:String,default:"square"},ariaLabelledby:{type:String,default:null},ariaLabel:{type:String,default:null}},style:It,provide:function(){return{$pcAvatar:this,$parentInstance:this}}};function z(t){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(t)}function G(t,e,a){return(e=Ut(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Ut(t){var e=Qt(t,"string");return z(e)=="symbol"?e:e+""}function Qt(t,e){if(z(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e);if(z(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var it={name:"Avatar",extends:Tt,inheritAttrs:!1,emits:["error"],methods:{onError:function(e){this.$emit("error",e)}},computed:{dataP:function(){return at(G(G({},this.shape,this.shape),this.size,this.size))}}},$t=["aria-labelledby","aria-label","data-p"],_t=["data-p"],Dt=["data-p"],Lt=["src","alt","data-p"];function jt(t,e,a,n,r,s){return c(),f("div",O({class:t.cx("root"),"aria-labelledby":t.ariaLabelledby,"aria-label":t.ariaLabel},t.ptmi("root"),{"data-p":s.dataP}),[ot(t.$slots,"default",{},function(){return[t.label?(c(),f("span",O({key:0,class:t.cx("label")},t.ptm("label"),{"data-p":s.dataP}),st(t.label),17,_t)):t.$slots.icon?(c(),nt(ct(t.$slots.icon),{key:1,class:ut(t.cx("icon"))},null,8,["class"])):t.icon?(c(),f("span",O({key:2,class:[t.cx("icon"),t.icon]},t.ptm("icon"),{"data-p":s.dataP}),null,16,Dt)):t.image?(c(),f("img",O({key:3,src:t.image,alt:t.ariaLabel,onError:e[0]||(e[0]=function(){return s.onError&&s.onError.apply(s,arguments)})},t.ptm("image"),{"data-p":s.dataP}),null,16,Lt)):lt("",!0)]})],16,$t)}it.render=jt;var Ft=`
    .p-skeleton {
        display: block;
        overflow: hidden;
        background: dt('skeleton.background');
        border-radius: dt('skeleton.border.radius');
    }

    .p-skeleton::after {
        content: '';
        animation: p-skeleton-animation 1.2s infinite;
        height: 100%;
        left: 0;
        position: absolute;
        right: 0;
        top: 0;
        transform: translateX(-100%);
        z-index: 1;
        background: linear-gradient(90deg, rgba(255, 255, 255, 0), dt('skeleton.animation.background'), rgba(255, 255, 255, 0));
    }

    [dir='rtl'] .p-skeleton::after {
        animation-name: p-skeleton-animation-rtl;
    }

    .p-skeleton-circle {
        border-radius: 50%;
    }

    .p-skeleton-animation-none::after {
        animation: none;
    }

    @keyframes p-skeleton-animation {
        from {
            transform: translateX(-100%);
        }
        to {
            transform: translateX(100%);
        }
    }

    @keyframes p-skeleton-animation-rtl {
        from {
            transform: translateX(100%);
        }
        to {
            transform: translateX(-100%);
        }
    }
`,At={root:{position:"relative"}},Mt={root:function(e){var a=e.props;return["p-skeleton p-component",{"p-skeleton-circle":a.shape==="circle","p-skeleton-animation-none":a.animation==="none"}]}},Bt=tt.extend({name:"skeleton",style:Ft,classes:Mt,inlineStyles:At}),Nt={name:"BaseSkeleton",extends:et,props:{shape:{type:String,default:"rectangle"},size:{type:String,default:null},width:{type:String,default:"100%"},height:{type:String,default:"1rem"},borderRadius:{type:String,default:null},animation:{type:String,default:"wave"}},style:Bt,provide:function(){return{$pcSkeleton:this,$parentInstance:this}}};function E(t){"@babel/helpers - typeof";return E=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},E(t)}function Kt(t,e,a){return(e=Vt(e))in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function Vt(t){var e=Xt(t,"string");return E(e)=="symbol"?e:e+""}function Xt(t,e){if(E(t)!="object"||!t)return t;var a=t[Symbol.toPrimitive];if(a!==void 0){var n=a.call(t,e);if(E(n)!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var F={name:"Skeleton",extends:Nt,inheritAttrs:!1,computed:{containerStyle:function(){return this.size?{width:this.size,height:this.size,borderRadius:this.borderRadius}:{width:this.width,height:this.height,borderRadius:this.borderRadius}},dataP:function(){return at(Kt({},this.shape,this.shape))}}},Wt=["data-p"];function Ht(t,e,a,n,r,s){return c(),f("div",O({class:t.cx("root"),style:[t.sx("root"),s.containerStyle],"aria-hidden":"true"},t.ptmi("root"),{"data-p":s.dataP}),null,16,Wt)}F.render=Ht;var qt=class extends ht{constructor(t,e){super(),this.options=e,this.#a=t,this.#s=null,this.#n=K(),this.bindMethods(),this.setOptions(e)}#a;#t=void 0;#f=void 0;#e=void 0;#i;#c;#n;#s;#v;#h;#d;#o;#l;#r;#p=new Set;bindMethods(){this.refetch=this.refetch.bind(this)}onSubscribe(){this.listeners.size===1&&(this.#t.addObserver(this),J(this.#t,this.options)?this.#u():this.updateResult(),this.#g())}onUnsubscribe(){this.hasListeners()||this.destroy()}shouldFetchOnReconnect(){return A(this.#t,this.options,this.options.refetchOnReconnect)}shouldFetchOnWindowFocus(){return A(this.#t,this.options,this.options.refetchOnWindowFocus)}destroy(){this.listeners=new Set,this.#S(),this.#R(),this.#t.removeObserver(this)}setOptions(t){const e=this.options,a=this.#t;if(this.options=this.#a.defaultQueryOptions(t),this.options.enabled!==void 0&&typeof this.options.enabled!="boolean"&&typeof this.options.enabled!="function"&&typeof p(this.options.enabled,this.#t)!="boolean")throw new Error("Expected enabled to be a boolean or a callback that returns a boolean");this.#w(),this.#t.setOptions(this.options),e._defaulted&&!j(this.options,e)&&this.#a.getQueryCache().notify({type:"observerOptionsUpdated",query:this.#t,observer:this});const n=this.hasListeners();n&&Z(this.#t,a,this.options,e)&&this.#u(),this.updateResult(),n&&(this.#t!==a||p(this.options.enabled,this.#t)!==p(e.enabled,this.#t)||P(this.options.staleTime,this.#t)!==P(e.staleTime,this.#t))&&this.#m();const r=this.#b();n&&(this.#t!==a||p(this.options.enabled,this.#t)!==p(e.enabled,this.#t)||r!==this.#r)&&this.#y(r)}getOptimisticResult(t){const e=this.#a.getQueryCache().build(this.#a,t),a=this.createResult(e,t);return Gt(this,a)&&(this.#e=a,this.#c=this.options,this.#i=this.#t.state),a}getCurrentResult(){return this.#e}trackResult(t,e){return new Proxy(t,{get:(a,n)=>(this.trackProp(n),e?.(n),n==="promise"&&(this.trackProp("data"),!this.options.experimental_prefetchInRender&&this.#n.status==="pending"&&this.#n.reject(new Error("experimental_prefetchInRender feature flag is not enabled"))),Reflect.get(a,n))})}trackProp(t){this.#p.add(t)}getCurrentQuery(){return this.#t}refetch({...t}={}){return this.fetch({...t})}fetchOptimistic(t){const e=this.#a.defaultQueryOptions(t),a=this.#a.getQueryCache().build(this.#a,e);return a.fetch().then(()=>this.createResult(a,e))}fetch(t){return this.#u({...t,cancelRefetch:t.cancelRefetch??!0}).then(()=>(this.updateResult(),this.#e))}#u(t){this.#w();let e=this.#t.fetch(this.options,t);return t?.throwOnError||(e=e.catch(dt)),e}#m(){this.#S();const t=P(this.options.staleTime,this.#t);if(V||this.#e.isStale||!X(t))return;const a=pt(this.#e.dataUpdatedAt,t)+1;this.#o=Q.setTimeout(()=>{this.#e.isStale||this.updateResult()},a)}#b(){return(typeof this.options.refetchInterval=="function"?this.options.refetchInterval(this.#t):this.options.refetchInterval)??!1}#y(t){this.#R(),this.#r=t,!(V||p(this.options.enabled,this.#t)===!1||!X(this.#r)||this.#r===0)&&(this.#l=Q.setInterval(()=>{(this.options.refetchIntervalInBackground||ft.isFocused())&&this.#u()},this.#r))}#g(){this.#m(),this.#y(this.#b())}#S(){this.#o&&(Q.clearTimeout(this.#o),this.#o=void 0)}#R(){this.#l&&(Q.clearInterval(this.#l),this.#l=void 0)}createResult(t,e){const a=this.#t,n=this.options,r=this.#e,s=this.#i,o=this.#c,g=t!==a?t.state:this.#f,{state:x}=t;let u={...x},I=!1,l;if(e._optimisticResults){const h=this.hasListeners(),T=!h&&J(t,e),w=h&&Z(t,a,e,n);(T||w)&&(u={...u,...vt(x.data,t.options)}),e._optimisticResults==="isRestoring"&&(u.fetchStatus="idle")}let{error:i,errorUpdatedAt:m,status:d}=u;l=u.data;let k=!1;if(e.placeholderData!==void 0&&l===void 0&&d==="pending"){let h;r?.isPlaceholderData&&e.placeholderData===o?.placeholderData?(h=r.data,k=!0):h=typeof e.placeholderData=="function"?e.placeholderData(this.#d?.state.data,this.#d):e.placeholderData,h!==void 0&&(d="success",l=W(r?.data,h,e),I=!0)}if(e.select&&l!==void 0&&!k)if(r&&l===s?.data&&e.select===this.#v)l=this.#h;else try{this.#v=e.select,l=e.select(l),l=W(r?.data,l,e),this.#h=l,this.#s=null}catch(h){this.#s=h}this.#s&&(i=this.#s,l=this.#h,m=Date.now(),d="error");const S=u.fetchStatus==="fetching",R=d==="pending",_=d==="error",B=R&&S,N=l!==void 0,v={status:d,fetchStatus:u.fetchStatus,isPending:R,isSuccess:d==="success",isError:_,isInitialLoading:B,isLoading:B,data:l,dataUpdatedAt:u.dataUpdatedAt,error:i,errorUpdatedAt:m,failureCount:u.fetchFailureCount,failureReason:u.fetchFailureReason,errorUpdateCount:u.errorUpdateCount,isFetched:u.dataUpdateCount>0||u.errorUpdateCount>0,isFetchedAfterMount:u.dataUpdateCount>g.dataUpdateCount||u.errorUpdateCount>g.errorUpdateCount,isFetching:S,isRefetching:S&&!R,isLoadingError:_&&!N,isPaused:u.fetchStatus==="paused",isPlaceholderData:I,isRefetchError:_&&N,isStale:M(t,e),refetch:this.refetch,promise:this.#n,isEnabled:p(e.enabled,t)!==!1};if(this.options.experimental_prefetchInRender){const h=U=>{v.status==="error"?U.reject(v.error):v.data!==void 0&&U.resolve(v.data)},T=()=>{const U=this.#n=v.promise=K();h(U)},w=this.#n;switch(w.status){case"pending":t.queryHash===a.queryHash&&h(w);break;case"fulfilled":(v.status==="error"||v.data!==w.value)&&T();break;case"rejected":(v.status!=="error"||v.error!==w.reason)&&T();break}}return v}updateResult(){const t=this.#e,e=this.createResult(this.#t,this.options);if(this.#i=this.#t.state,this.#c=this.options,this.#i.data!==void 0&&(this.#d=this.#t),j(e,t))return;this.#e=e;const a=()=>{if(!t)return!0;const{notifyOnChangeProps:n}=this.options,r=typeof n=="function"?n():n;if(r==="all"||!r&&!this.#p.size)return!0;const s=new Set(r??this.#p);return this.options.throwOnError&&s.add("error"),Object.keys(this.#e).some(o=>{const y=o;return this.#e[y]!==t[y]&&s.has(y)})};this.#k({listeners:a()})}#w(){const t=this.#a.getQueryCache().build(this.#a,this.options);if(t===this.#t)return;const e=this.#t;this.#t=t,this.#f=t.state,this.hasListeners()&&(e?.removeObserver(this),t.addObserver(this))}onQueryUpdate(){this.updateResult(),this.hasListeners()&&this.#g()}#k(t){mt.batch(()=>{t.listeners&&this.listeners.forEach(e=>{e(this.#e)}),this.#a.getQueryCache().notify({query:this.#t,type:"observerResultsUpdated"})})}};function Yt(t,e){return p(e.enabled,t)!==!1&&t.state.data===void 0&&!(t.state.status==="error"&&e.retryOnMount===!1)}function J(t,e){return Yt(t,e)||t.state.data!==void 0&&A(t,e,e.refetchOnMount)}function A(t,e,a){if(p(e.enabled,t)!==!1&&P(e.staleTime,t)!=="static"){const n=typeof a=="function"?a(t):a;return n==="always"||n!==!1&&M(t,e)}return!1}function Z(t,e,a,n){return(t!==e||p(n.enabled,t)===!1)&&(!a.suspense||t.state.status!=="error")&&M(t,a)}function M(t,e){return p(e.enabled,t)!==!1&&t.isStaleByTime(P(e.staleTime,t))}function Gt(t,e){return!j(t.getCurrentResult(),e)}function Jt(t=""){if(!bt())throw new Error("vue-query hooks can only be used inside setup() function or functions that support injection context.");const e=gt(t),a=yt(e);if(!a)throw new Error("No 'queryClient' found in Vue context, use 'VueQueryPlugin' to properly initialize the library.");return a}function Zt(t,e,a){const n=Jt(),r=St(()=>{const i=Rt(e);typeof i.enabled=="function"&&(i.enabled=i.enabled());const m=n.defaultQueryOptions(i);return m._optimisticResults=n.isRestoring?.value?"isRestoring":"optimistic",m}),s=new t(n,r.value),o=r.value.shallow?wt(s.getCurrentResult()):kt(s.getCurrentResult());let y=()=>{};n.isRestoring&&$(n.isRestoring,i=>{i||(y(),y=s.subscribe(m=>{q(o,m)}))},{immediate:!0});const g=()=>{s.setOptions(r.value),q(o,s.getCurrentResult())};$(r,g),Ot(()=>{y()});const x=(...i)=>(g(),o.refetch(...i)),u=()=>new Promise((i,m)=>{let d=()=>{};const k=()=>{if(r.value.enabled!==!1){s.setOptions(r.value);const S=s.getOptimisticResult(r.value);S.isStale?(d(),s.fetchOptimistic(r.value).then(i,R=>{H(r.value.throwOnError,[R,s.getCurrentQuery()])?m(R):i(s.getCurrentResult())})):(d(),i(S))}};k(),d=$(r,k)});$(()=>o.error,i=>{if(o.isError&&!o.isFetching&&H(r.value.throwOnError,[i,s.getCurrentQuery()]))throw i});const I=r.value.shallow?Ct(o):Pt(o),l=zt(I);for(const i in o)typeof o[i]=="function"&&(l[i]=o[i]);return l.suspense=u,l.refetch=x,l}function te(t,e){return Zt(qt,t)}const ee="https://jsonplaceholder.typicode.com/",ae="4a8d50a36f974e94978bac0ccfc1e613",ne=1e3;async function se(){const t=new Promise(n=>setTimeout(n,ne)),e=await fetch(`${ee}/users?limit=10`,{headers:{"Content-Type":"application/json",Accept:"application/json","x-api-key":ae}}),[a]=await Promise.all([e,t]);if(!a.ok)throw new Error("Failed to fetch user list");return a.json()}function re(t=0){return te({queryKey:["fetch-users"],queryFn:()=>se(),staleTime:t})}const ie=rt({__name:"UserAvatar",props:{label:{type:String,required:!1,default:""}},setup(t){return(e,a)=>(c(),nt(C(it),{label:t.label,class:"mr-2",size:"small",shape:"circle"},null,8,["label"]))}}),oe={class:"avatar"},le={key:1},ue={class:"avatar"},de=rt({__name:"UserDetails",setup(t){const{data:e,isLoading:a}=re(),n=r=>r.charAt(0).toUpperCase();return(r,s)=>(c(),f("section",null,[s[1]||(s[1]=b("h2",{class:"mb-4"},"User Details",-1)),b("div",null,[C(a)?(c(),f(D,{key:0},[s[0]||(s[0]=b("p",{class:"mb-4"},"Loading user data...",-1)),b("ul",null,[(c(),f(D,null,Y(10,o=>b("li",{key:o,class:"flex items-center gap-4 mb-4"},[b("div",oe,[L(C(F),{shape:"circle",size:"3rem",class:"mr-2"})]),b("span",null,[L(C(F),{width:"10rem",class:"mb-2"})])])),64))])],64)):(c(),f("ul",le,[(c(!0),f(D,null,Y(C(e),o=>(c(),f("li",{key:o.id,class:"flex items-center gap-4 mb-4"},[b("div",ue,[L(ie,{label:n(o.name)},null,8,["label"])]),b("span",null,st(o.name),1)]))),128))]))])]))}});export{de as default};
