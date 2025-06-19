/**
 * @license
 * Copyright 2019 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const Ct=globalThis,Wt=Ct.ShadowRoot&&(Ct.ShadyCSS===void 0||Ct.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,qt=Symbol(),Jt=new WeakMap;let Ae=class{constructor(e,t,r){if(this._$cssResult$=!0,r!==qt)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o;const t=this.t;if(Wt&&e===void 0){const r=t!==void 0&&t.length===1;r&&(e=Jt.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),r&&Jt.set(t,e))}return e}toString(){return this.cssText}};const ar=e=>new Ae(typeof e=="string"?e:e+"",void 0,qt),ot=(e,...t)=>{const r=e.length===1?e[0]:t.reduce((n,i,s)=>n+(o=>{if(o._$cssResult$===!0)return o.cssText;if(typeof o=="number")return o;throw Error("Value passed to 'css' function must be a 'css' function result: "+o+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(i)+e[s+1],e[0]);return new Ae(r,e,qt)},cr=(e,t)=>{if(Wt)e.adoptedStyleSheets=t.map(r=>r instanceof CSSStyleSheet?r:r.styleSheet);else for(const r of t){const n=document.createElement("style"),i=Ct.litNonce;i!==void 0&&n.setAttribute("nonce",i),n.textContent=r.cssText,e.appendChild(n)}},Xt=Wt?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let r="";for(const n of t.cssRules)r+=n.cssText;return ar(r)})(e):e;/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{is:lr,defineProperty:ur,getOwnPropertyDescriptor:dr,getOwnPropertyNames:hr,getOwnPropertySymbols:pr,getPrototypeOf:fr}=Object,gt=globalThis,Gt=gt.trustedTypes,vr=Gt?Gt.emptyScript:"",Kt=gt.reactiveElementPolyfillSupport,xt=(e,t)=>e,Ut={toAttribute(e,t){switch(t){case Boolean:e=e?vr:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let r=e;switch(t){case Boolean:r=e!==null;break;case Number:r=e===null?null:Number(e);break;case Object:case Array:try{r=JSON.parse(e)}catch{r=null}}return r}},Yt=(e,t)=>!lr(e,t),Ft={attribute:!0,type:String,converter:Ut,reflect:!1,useDefault:!1,hasChanged:Yt};Symbol.metadata??(Symbol.metadata=Symbol("metadata")),gt.litPropertyMetadata??(gt.litPropertyMetadata=new WeakMap);let vt=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??(this.l=[])).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Ft){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){const r=Symbol(),n=this.getPropertyDescriptor(e,r,t);n!==void 0&&ur(this.prototype,e,n)}}static getPropertyDescriptor(e,t,r){const{get:n,set:i}=dr(this.prototype,e)??{get(){return this[t]},set(s){this[t]=s}};return{get:n,set(s){const o=n==null?void 0:n.call(this);i==null||i.call(this,s),this.requestUpdate(e,o,r)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Ft}static _$Ei(){if(this.hasOwnProperty(xt("elementProperties")))return;const e=fr(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(xt("finalized")))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(xt("properties"))){const t=this.properties,r=[...hr(t),...pr(t)];for(const n of r)this.createProperty(n,t[n])}const e=this[Symbol.metadata];if(e!==null){const t=litPropertyMetadata.get(e);if(t!==void 0)for(const[r,n]of t)this.elementProperties.set(r,n)}this._$Eh=new Map;for(const[t,r]of this.elementProperties){const n=this._$Eu(t,r);n!==void 0&&this._$Eh.set(n,t)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){const t=[];if(Array.isArray(e)){const r=new Set(e.flat(1/0).reverse());for(const n of r)t.unshift(Xt(n))}else e!==void 0&&t.push(Xt(e));return t}static _$Eu(e,t){const r=t.attribute;return r===!1?void 0:typeof r=="string"?r:typeof e=="string"?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){var e;this._$ES=new Promise(t=>this.enableUpdating=t),this._$AL=new Map,this._$E_(),this.requestUpdate(),(e=this.constructor.l)==null||e.forEach(t=>t(this))}addController(e){var t;(this._$EO??(this._$EO=new Set)).add(e),this.renderRoot!==void 0&&this.isConnected&&((t=e.hostConnected)==null||t.call(e))}removeController(e){var t;(t=this._$EO)==null||t.delete(e)}_$E_(){const e=new Map,t=this.constructor.elementProperties;for(const r of t.keys())this.hasOwnProperty(r)&&(e.set(r,this[r]),delete this[r]);e.size>0&&(this._$Ep=e)}createRenderRoot(){const e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return cr(e,this.constructor.elementStyles),e}connectedCallback(){var e;this.renderRoot??(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostConnected)==null?void 0:r.call(t)})}enableUpdating(e){}disconnectedCallback(){var e;(e=this._$EO)==null||e.forEach(t=>{var r;return(r=t.hostDisconnected)==null?void 0:r.call(t)})}attributeChangedCallback(e,t,r){this._$AK(e,r)}_$ET(e,t){var r;const n=this.constructor.elementProperties.get(e),i=this.constructor._$Eu(e,n);if(i!==void 0&&n.reflect===!0){const s=(((r=n.converter)==null?void 0:r.toAttribute)!==void 0?n.converter:Ut).toAttribute(t,n.type);this._$Em=e,s==null?this.removeAttribute(i):this.setAttribute(i,s),this._$Em=null}}_$AK(e,t){var r,n;const i=this.constructor,s=i._$Eh.get(e);if(s!==void 0&&this._$Em!==s){const o=i.getPropertyOptions(s),a=typeof o.converter=="function"?{fromAttribute:o.converter}:((r=o.converter)==null?void 0:r.fromAttribute)!==void 0?o.converter:Ut;this._$Em=s,this[s]=a.fromAttribute(t,o.type)??((n=this._$Ej)==null?void 0:n.get(s))??null,this._$Em=null}}requestUpdate(e,t,r){var n;if(e!==void 0){const i=this.constructor,s=this[e];if(r??(r=i.getPropertyOptions(e)),!((r.hasChanged??Yt)(s,t)||r.useDefault&&r.reflect&&s===((n=this._$Ej)==null?void 0:n.get(e))&&!this.hasAttribute(i._$Eu(e,r))))return;this.C(e,t,r)}this.isUpdatePending===!1&&(this._$ES=this._$EP())}C(e,t,{useDefault:r,reflect:n,wrapped:i},s){r&&!(this._$Ej??(this._$Ej=new Map)).has(e)&&(this._$Ej.set(e,s??t??this[e]),i!==!0||s!==void 0)||(this._$AL.has(e)||(this.hasUpdated||r||(t=void 0),this._$AL.set(e,t)),n===!0&&this._$Em!==e&&(this._$Eq??(this._$Eq=new Set)).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(t){Promise.reject(t)}const e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var e;if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??(this.renderRoot=this.createRenderRoot()),this._$Ep){for(const[i,s]of this._$Ep)this[i]=s;this._$Ep=void 0}const n=this.constructor.elementProperties;if(n.size>0)for(const[i,s]of n){const{wrapped:o}=s,a=this[i];o!==!0||this._$AL.has(i)||a===void 0||this.C(i,void 0,s,a)}}let t=!1;const r=this._$AL;try{t=this.shouldUpdate(r),t?(this.willUpdate(r),(e=this._$EO)==null||e.forEach(n=>{var i;return(i=n.hostUpdate)==null?void 0:i.call(n)}),this.update(r)):this._$EM()}catch(n){throw t=!1,this._$EM(),n}t&&this._$AE(r)}willUpdate(e){}_$AE(e){var t;(t=this._$EO)==null||t.forEach(r=>{var n;return(n=r.hostUpdated)==null?void 0:n.call(r)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&(this._$Eq=this._$Eq.forEach(t=>this._$ET(t,this[t]))),this._$EM()}updated(e){}firstUpdated(e){}};vt.elementStyles=[],vt.shadowRootOptions={mode:"open"},vt[xt("elementProperties")]=new Map,vt[xt("finalized")]=new Map,Kt==null||Kt({ReactiveElement:vt}),(gt.reactiveElementVersions??(gt.reactiveElementVersions=[])).push("2.1.0");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Nt=globalThis,Dt=Nt.trustedTypes,te=Dt?Dt.createPolicy("lit-html",{createHTML:e=>e}):void 0,Ce="$lit$",lt=`lit$${Math.random().toFixed(9).slice(2)}$`,Ee="?"+lt,br=`<${Ee}>`,pt=document,$t=()=>pt.createComment(""),kt=e=>e===null||typeof e!="object"&&typeof e!="function",Vt=Array.isArray,gr=e=>Vt(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",Rt=`[ 	
\f\r]`,wt=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,ee=/-->/g,re=/>/g,dt=RegExp(`>|${Rt}(?:([^\\s"'>=/]+)(${Rt}*=${Rt}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),ne=/'/g,ie=/"/g,ze=/^(?:script|style|textarea|title)$/i,mr=e=>(t,...r)=>({_$litType$:e,strings:t,values:r}),T=mr(1),ft=Symbol.for("lit-noChange"),z=Symbol.for("lit-nothing"),oe=new WeakMap,ht=pt.createTreeWalker(pt,129);function je(e,t){if(!Vt(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return te!==void 0?te.createHTML(t):t}const yr=(e,t)=>{const r=e.length-1,n=[];let i,s=t===2?"<svg>":t===3?"<math>":"",o=wt;for(let a=0;a<r;a++){const p=e[a];let g,k,w=-1,A=0;for(;A<p.length&&(o.lastIndex=A,k=o.exec(p),k!==null);)A=o.lastIndex,o===wt?k[1]==="!--"?o=ee:k[1]!==void 0?o=re:k[2]!==void 0?(ze.test(k[2])&&(i=RegExp("</"+k[2],"g")),o=dt):k[3]!==void 0&&(o=dt):o===dt?k[0]===">"?(o=i??wt,w=-1):k[1]===void 0?w=-2:(w=o.lastIndex-k[2].length,g=k[1],o=k[3]===void 0?dt:k[3]==='"'?ie:ne):o===ie||o===ne?o=dt:o===ee||o===re?o=wt:(o=dt,i=void 0);const M=o===dt&&e[a+1].startsWith("/>")?" ":"";s+=o===wt?p+br:w>=0?(n.push(g),p.slice(0,w)+Ce+p.slice(w)+lt+M):p+lt+(w===-2?a:M)}return[je(e,s+(e[r]||"<?>")+(t===2?"</svg>":t===3?"</math>":"")),n]};class _t{constructor({strings:t,_$litType$:r},n){let i;this.parts=[];let s=0,o=0;const a=t.length-1,p=this.parts,[g,k]=yr(t,r);if(this.el=_t.createElement(g,n),ht.currentNode=this.el.content,r===2||r===3){const w=this.el.content.firstChild;w.replaceWith(...w.childNodes)}for(;(i=ht.nextNode())!==null&&p.length<a;){if(i.nodeType===1){if(i.hasAttributes())for(const w of i.getAttributeNames())if(w.endsWith(Ce)){const A=k[o++],M=i.getAttribute(w).split(lt),D=/([.?@])?(.*)/.exec(A);p.push({type:1,index:s,name:D[2],strings:M,ctor:D[1]==="."?xr:D[1]==="?"?$r:D[1]==="@"?kr:It}),i.removeAttribute(w)}else w.startsWith(lt)&&(p.push({type:6,index:s}),i.removeAttribute(w));if(ze.test(i.tagName)){const w=i.textContent.split(lt),A=w.length-1;if(A>0){i.textContent=Dt?Dt.emptyScript:"";for(let M=0;M<A;M++)i.append(w[M],$t()),ht.nextNode(),p.push({type:2,index:++s});i.append(w[A],$t())}}}else if(i.nodeType===8)if(i.data===Ee)p.push({type:2,index:s});else{let w=-1;for(;(w=i.data.indexOf(lt,w+1))!==-1;)p.push({type:7,index:s}),w+=lt.length-1}s++}}static createElement(t,r){const n=pt.createElement("template");return n.innerHTML=t,n}}function mt(e,t,r=e,n){var i,s;if(t===ft)return t;let o=n!==void 0?(i=r._$Co)==null?void 0:i[n]:r._$Cl;const a=kt(t)?void 0:t._$litDirective$;return(o==null?void 0:o.constructor)!==a&&((s=o==null?void 0:o._$AO)==null||s.call(o,!1),a===void 0?o=void 0:(o=new a(e),o._$AT(e,r,n)),n!==void 0?(r._$Co??(r._$Co=[]))[n]=o:r._$Cl=o),o!==void 0&&(t=mt(e,o._$AS(e,t.values),o,n)),t}let wr=class{constructor(t,r){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=r}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){const{el:{content:r},parts:n}=this._$AD,i=((t==null?void 0:t.creationScope)??pt).importNode(r,!0);ht.currentNode=i;let s=ht.nextNode(),o=0,a=0,p=n[0];for(;p!==void 0;){if(o===p.index){let g;p.type===2?g=new yt(s,s.nextSibling,this,t):p.type===1?g=new p.ctor(s,p.name,p.strings,this,t):p.type===6&&(g=new _r(s,this,t)),this._$AV.push(g),p=n[++a]}o!==(p==null?void 0:p.index)&&(s=ht.nextNode(),o++)}return ht.currentNode=pt,i}p(t){let r=0;for(const n of this._$AV)n!==void 0&&(n.strings!==void 0?(n._$AI(t,n,r),r+=n.strings.length-2):n._$AI(t[r])),r++}};class yt{get _$AU(){var t;return((t=this._$AM)==null?void 0:t._$AU)??this._$Cv}constructor(t,r,n,i){this.type=2,this._$AH=z,this._$AN=void 0,this._$AA=t,this._$AB=r,this._$AM=n,this.options=i,this._$Cv=(i==null?void 0:i.isConnected)??!0}get parentNode(){let t=this._$AA.parentNode;const r=this._$AM;return r!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=r.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,r=this){t=mt(this,t,r),kt(t)?t===z||t==null||t===""?(this._$AH!==z&&this._$AR(),this._$AH=z):t!==this._$AH&&t!==ft&&this._(t):t._$litType$!==void 0?this.$(t):t.nodeType!==void 0?this.T(t):gr(t)?this.k(t):this._(t)}O(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}T(t){this._$AH!==t&&(this._$AR(),this._$AH=this.O(t))}_(t){this._$AH!==z&&kt(this._$AH)?this._$AA.nextSibling.data=t:this.T(pt.createTextNode(t)),this._$AH=t}$(t){var r;const{values:n,_$litType$:i}=t,s=typeof i=="number"?this._$AC(t):(i.el===void 0&&(i.el=_t.createElement(je(i.h,i.h[0]),this.options)),i);if(((r=this._$AH)==null?void 0:r._$AD)===s)this._$AH.p(n);else{const o=new wr(s,this),a=o.u(this.options);o.p(n),this.T(a),this._$AH=o}}_$AC(t){let r=oe.get(t.strings);return r===void 0&&oe.set(t.strings,r=new _t(t)),r}k(t){Vt(this._$AH)||(this._$AH=[],this._$AR());const r=this._$AH;let n,i=0;for(const s of t)i===r.length?r.push(n=new yt(this.O($t()),this.O($t()),this,this.options)):n=r[i],n._$AI(s),i++;i<r.length&&(this._$AR(n&&n._$AB.nextSibling,i),r.length=i)}_$AR(t=this._$AA.nextSibling,r){var n;for((n=this._$AP)==null?void 0:n.call(this,!1,!0,r);t&&t!==this._$AB;){const i=t.nextSibling;t.remove(),t=i}}setConnected(t){var r;this._$AM===void 0&&(this._$Cv=t,(r=this._$AP)==null||r.call(this,t))}}class It{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(t,r,n,i,s){this.type=1,this._$AH=z,this._$AN=void 0,this.element=t,this.name=r,this._$AM=i,this.options=s,n.length>2||n[0]!==""||n[1]!==""?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=z}_$AI(t,r=this,n,i){const s=this.strings;let o=!1;if(s===void 0)t=mt(this,t,r,0),o=!kt(t)||t!==this._$AH&&t!==ft,o&&(this._$AH=t);else{const a=t;let p,g;for(t=s[0],p=0;p<s.length-1;p++)g=mt(this,a[n+p],r,p),g===ft&&(g=this._$AH[p]),o||(o=!kt(g)||g!==this._$AH[p]),g===z?t=z:t!==z&&(t+=(g??"")+s[p+1]),this._$AH[p]=g}o&&!i&&this.j(t)}j(t){t===z?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,t??"")}}let xr=class extends It{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===z?void 0:t}};class $r extends It{constructor(){super(...arguments),this.type=4}j(t){this.element.toggleAttribute(this.name,!!t&&t!==z)}}let kr=class extends It{constructor(t,r,n,i,s){super(t,r,n,i,s),this.type=5}_$AI(t,r=this){if((t=mt(this,t,r,0)??z)===ft)return;const n=this._$AH,i=t===z&&n!==z||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==z&&(n===z||i);i&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var r;typeof this._$AH=="function"?this._$AH.call(((r=this.options)==null?void 0:r.host)??this.element,t):this._$AH.handleEvent(t)}},_r=class{constructor(t,r,n){this.element=t,this.type=6,this._$AN=void 0,this._$AM=r,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(t){mt(this,t)}};const Sr={I:yt},se=Nt.litHtmlPolyfillSupport;se==null||se(_t,yt),(Nt.litHtmlVersions??(Nt.litHtmlVersions=[])).push("3.3.0");const Pe=(e,t,r)=>{const n=(r==null?void 0:r.renderBefore)??t;let i=n._$litPart$;if(i===void 0){const s=(r==null?void 0:r.renderBefore)??null;n._$litPart$=i=new yt(t.insertBefore($t(),s),s,void 0,r??{})}return i._$AI(e),i};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const St=globalThis;class Y extends vt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t;const r=super.createRenderRoot();return(t=this.renderOptions).renderBefore??(t.renderBefore=r.firstChild),r}update(t){const r=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=Pe(r,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)==null||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)==null||t.setConnected(!1)}render(){return ft}}var ae;Y._$litElement$=!0,Y.finalized=!0,(ae=St.litElementHydrateSupport)==null||ae.call(St,{LitElement:Y});const ce=St.litElementPolyfillSupport;ce==null||ce({LitElement:Y});(St.litElementVersions??(St.litElementVersions=[])).push("4.2.0");/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Ar={attribute:!0,type:String,converter:Ut,reflect:!1,hasChanged:Yt},Cr=(e=Ar,t,r)=>{const{kind:n,metadata:i}=r;let s=globalThis.litPropertyMetadata.get(i);if(s===void 0&&globalThis.litPropertyMetadata.set(i,s=new Map),n==="setter"&&((e=Object.create(e)).wrapped=!0),s.set(r.name,e),n==="accessor"){const{name:o}=r;return{set(a){const p=t.get.call(this);t.set.call(this,a),this.requestUpdate(o,p,e)},init(a){return a!==void 0&&this.C(o,void 0,e,a),a}}}if(n==="setter"){const{name:o}=r;return function(a){const p=this[o];t.call(this,a),this.requestUpdate(o,p,e)}}throw Error("Unsupported decorator location: "+n)};function bt(e){return(t,r)=>typeof r=="object"?Cr(e,t,r):((n,i,s)=>{const o=i.hasOwnProperty(s);return i.constructor.createProperty(s,n),o?Object.getOwnPropertyDescriptor(i,s):void 0})(e,t,r)}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/let Me=class extends Event{constructor(t,r,n,i){super("context-request",{bubbles:!0,composed:!0}),this.context=t,this.contextTarget=r,this.callback=n,this.subscribe=i??!1}};/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Te="setting",le=`<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect
              width="14"
              height="20"
              x="5"
              y="2"
              rx="2"
              ry="2"
            ></rect>
            <path d="M12 18h.01"></path>
          </svg>`,ue=`<svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <rect
              width="20"
              height="14"
              x="2"
              y="3"
              rx="2"
            ></rect>
            <line
              x1="8"
              x2="16"
              y1="21"
              y2="21"
            ></line>
            <line
              x1="12"
              x2="12"
              y1="17"
              y2="21"
            ></line>
          </svg>`,Er=`<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path
            d="M7 7m0 2.667a2.667 2.667 0 0 1 2.667 -2.667h8.666a2.667 2.667 0 0 1 2.667 2.667v8.666a2.667 2.667 0 0 1 -2.667 2.667h-8.666a2.667 2.667 0 0 1 -2.667 -2.667z"
          />
          <path
            d="M4.012 16.737a2.005 2.005 0 0 1 -1.012 -1.737v-10c0 -1.1 .9 -2 2 -2h10c.75 0 1.158 .385 1.5 1"
          />
        </svg>`,zr=`<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="green"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M5 12l5 5l10 -10" />
        </svg>`,jr=`<svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path
            stroke="none"
            d="M0 0h24v24H0z"
            fill="none"
          />
          <path d="M7 8l-4 4l4 4" />
          <path d="M17 8l4 4l-4 4" />
          <path d="M14 4l-4 16" />
        </svg>`,Pr=`<svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path
          stroke="none"
          d="M0 0h24v24H0z"
          fill="none"
        />
        <path d="M18 14l-6 -6l-6 6h12" />
      </svg>`,Mr='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="18.529296875" height="12.75" viewBox="0 0 18.529296875 12.75"><g><g><path d="M17.157173276805878,0.7083308100700378C17.725773276805878,0.7083308100700378,18.186573276805877,1.1840278100700379,18.186573276805877,1.7708308100700378L18.186573276805877,10.979130810070037C18.186573276805877,11.565930810070038,17.725773276805878,12.041630810070037,17.157173276805878,12.041630810070037L16.127773276805875,12.041630810070037C15.559273276805877,12.041630810070037,15.098373276805878,11.565930810070038,15.098373276805878,10.979130810070037L15.098373276805878,1.7708308100700378C15.098373276805878,1.1840278100700379,15.559273276805877,0.7083308100700378,16.127773276805875,0.7083308100700378L17.157173276805878,0.7083308100700378ZM11.323573276805877,3.187520810070038L12.352973276805878,3.187520810070038C12.921573276805878,3.187520810070038,13.382373276805877,3.663210810070038,13.382373276805877,4.250020810070038L13.382373276805877,10.979230810070037C13.382373276805877,11.566030810070037,12.921573276805878,12.041730810070037,12.352973276805878,12.041730810070037L11.323573276805877,12.041730810070037C10.755073276805877,12.041730810070037,10.294183276805878,11.566030810070037,10.294183276805878,10.979230810070037L10.294183276805878,4.250020810070038C10.294183276805878,3.663210810070038,10.755073276805877,3.187520810070038,11.323573276805877,3.187520810070038ZM6.519883276805878,5.666770810070038L7.549293276805877,5.666770810070038C8.117823276805877,5.666770810070038,8.578713276805878,6.1424608100700375,8.578713276805878,6.729270810070038L8.578713276805878,10.979230810070037C8.578713276805878,11.566030810070037,8.117823276805877,12.041730810070037,7.549293276805877,12.041730810070037L6.519883276805878,12.041730810070037C5.951353276805878,12.041730810070037,5.4904732768058775,11.566030810070037,5.4904732768058775,10.979230810070037L5.4904732768058775,6.729270810070038C5.4904732768058775,6.1424608100700375,5.951353276805878,5.666770810070038,6.519883276805878,5.666770810070038ZM2.7455832768058777,7.791770810070038C3.3141132768058776,7.791770810070038,3.7750032768058777,8.267460810070038,3.7750032768058777,8.854270810070037L3.7750032768058777,10.979230810070037C3.7750032768058777,11.566030810070037,3.3141132768058776,12.041730810070037,2.7455832768058777,12.041730810070037L1.7161732768058777,12.041730810070037C1.1476442768058777,12.041730810070037,0.6867615578058777,11.566030810070037,0.6867615578058777,10.979230810070037L0.6867615578058777,8.854270810070037C0.6867615578058777,8.267460810070038,1.1476442768058777,7.791770810070038,1.7161732768058777,7.791770810070038L2.7455832768058777,7.791770810070038Z" fill-rule="evenodd" fill="#686868" fill-opacity="1"/></g></g></svg>',Tr='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="21.61767578125" height="15.9375" viewBox="0 0 21.61767578125 15.9375"><g><g><path d="M10.637686445083618,3.7972692495346068C12.927896445083618,3.797369249534607,15.130496445083619,4.6874192495346065,16.790196445083616,6.283459249534607C16.915196445083616,6.406679249534607,17.11499644508362,6.405119249534607,17.23809644508362,6.279969249534607L18.432796445083618,5.060399249534607C18.495196445083618,4.996919249534606,18.52989644508362,4.910939249534607,18.52939644508362,4.821479249534606C18.528896445083618,4.732019249534607,18.493096445083616,4.646449249534607,18.43009644508362,4.583719249534607C14.073696445083618,0.360989249534607,7.200986445083618,0.360989249534607,2.8445960450836183,4.583719249534607C2.781490745083618,4.6464092495346065,2.7456855520836183,4.7319492495346065,2.7451036495236183,4.821409249534607C2.7445217470836183,4.910869249534607,2.779211145083618,4.996879249534607,2.841495445083618,5.060399249534607L4.036586445083618,6.279969249534607C4.159606445083618,6.405309249534607,4.359536445083618,6.406859249534607,4.484446445083618,6.283459249534607C6.144436445083619,4.687309249534607,8.347286445083618,3.797259249534607,10.637686445083618,3.7972692495346068ZM14.044296445083619,9.116819249534608C13.110496445083617,8.240729249534606,11.895776445083618,7.755589249534607,10.636056445083618,7.755669249534607C9.377166445083617,7.756209249534607,8.163366445083618,8.241309249534606,7.230206445083618,9.116819249534608C7.103906445083618,9.241159249534608,6.904956445083618,9.238459249534607,6.781846445083618,9.110749249534607L5.587466445083618,7.860009249534607C5.524416445083618,7.794499249534607,5.489386445083618,7.705509249534607,5.490226445083618,7.612999249534607C5.491076445083618,7.520489249534607,5.527716445083618,7.432199249534607,5.591946445083618,7.367939249534607C8.43547644508362,4.6273592495346065,12.838996445083618,4.6273592495346065,15.682596445083618,7.367939249534607C15.746696445083618,7.432209249534607,15.783396445083618,7.520449249534607,15.784296445083617,7.612929249534607C15.785196445083619,7.705409249534607,15.750296445083618,7.794409249534607,15.687396445083618,7.860009249534607L14.492696445083618,9.110749249534607C14.369596445083618,9.238459249534607,14.170596445083618,9.241159249534608,14.044296445083619,9.116819249534608ZM12.941596445083619,10.891419249534607C13.005696445083618,10.827809249534607,13.040996445083618,10.740279249534607,13.039196445083618,10.649479249534608C13.037396445083617,10.558689249534607,12.998496445083617,10.472679249534607,12.931896445083618,10.411769249534608C11.607336445083618,9.279409249534606,9.667416445083617,9.279409249534606,8.342876445083618,10.411769249534608C8.276186445083617,10.472629249534608,8.237306445083618,10.558609249534607,8.235406445083619,10.649409249534607C8.233506445083618,10.740199249534607,8.268756445083618,10.827769249534606,8.332836445083618,10.891419249534607L10.407196445083617,13.006969249534606C10.467996445083617,13.069169249534607,10.550886445083618,13.104169249534607,10.637376445083618,13.104169249534607C10.723866445083619,13.104169249534607,10.806756445083618,13.069169249534607,10.867556445083618,13.006969249534606L12.941596445083619,10.891419249534607Z" fill-rule="evenodd" fill="#686868" fill-opacity="1"/></g></g></svg>',Or='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="25.7353515625" height="12.75" viewBox="0 0 25.7353515625 12.75"><g><g style="opacity:0.4000000059604645;"><path d="M0,3.0208392197322844C0,1.5480792197322846,1.19391,0.35416921973228455,2.66667,0.35416921973228455L19.9804,0.35416921973228455C21.4531,0.35416921973228455,22.6471,1.5480792197322846,22.6471,3.0208392197322844L22.6471,9.729169219732285C22.6471,11.201969219732284,21.4531,12.395869219732285,19.9804,12.395869219732285L2.66667,12.395869219732285C1.19391,12.395869219732285,0,11.201969219732284,0,9.729169219732285L0,3.0208392197322844ZM1,3.0208392197322844L1,9.729169219732285Q1,10.419569219732285,1.48816,10.907669219732284Q1.97631,11.395869219732285,2.66667,11.395869219732285L19.9804,11.395869219732285Q20.6707,11.395869219732285,21.1589,10.907669219732284Q21.6471,10.419569219732285,21.6471,9.729169219732285L21.6471,3.0208392197322844Q21.6471,2.3305092197322845,21.1589,1.8423392197322845Q20.6707,1.3541692197322845,19.9804,1.3541692197322845L2.66667,1.3541692197322845Q1.97631,1.3541692197322845,1.48816,1.8423292197322845Q1,2.3304792197322843,1,3.0208392197322844Z" fill-rule="evenodd" fill="#686868" fill-opacity="1"/></g><g style="opacity:0.5;"><path d="M23.676467895507812,4.25C23.676467895507812,4.25,23.676467895507812,8.5,23.676467895507812,8.5C24.508170895507813,8.14005,25.049017895507813,7.3027,25.049017895507813,6.375C25.049017895507813,5.4473,24.508170895507813,4.6099499999999995,23.676467895507812,4.25Z" fill="#686868" fill-opacity="1"/></g><g><path d="M2.0588228702545166,3.8124991303253175C2.0588228702545166,3.0761221303253174,2.655776870254517,2.4791691303253174,3.3921528702545167,2.4791691303253174C3.3921528702545167,2.4791691303253174,19.254922870254518,2.4791691303253174,19.254922870254518,2.4791691303253174C19.991322870254518,2.4791691303253174,20.588222870254516,3.0761231303253176,20.588222870254516,3.8124991303253175C20.588222870254516,3.8124991303253175,20.588222870254516,8.937499130325318,20.588222870254516,8.937499130325318C20.588222870254516,9.673879130325318,19.991322870254518,10.270839130325317,19.254922870254518,10.270839130325317C19.254922870254518,10.270839130325317,3.3921528702545167,10.270839130325317,3.3921528702545167,10.270839130325317C2.655776870254517,10.270839130325317,2.0588228702545166,9.673879130325318,2.0588228702545166,8.937499130325318C2.0588228702545166,8.937499130325318,2.0588228702545166,3.8124991303253175,2.0588228702545166,3.8124991303253175C2.0588228702545166,3.8124991303253175,2.0588228702545166,3.8124991303253175,2.0588228702545166,3.8124991303253175Z" fill="#686868" fill-opacity="1"/></g></g></svg>',Lr='<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" fill="none" version="1.1" width="14.5" height="14.5" viewBox="0 0 14.5 14.5"><g transform="matrix(0,1,-1,0,14.5,-14.5)"><path d="M24.20812,9.1195L24.8631,9.1195L29,13.2647L27.764699999999998,14.5L23.619500000000002,10.3631L23.619500000000002,9.70812L23.39565,9.47599C22.45054,10.2885,21.22356,10.7776,19.88879,10.7776C16.91252,10.7776,14.5,8.36507,14.5,5.38879C14.5,2.41252,16.91252,0,19.88879,0C22.86507,0,25.2776,2.41252,25.2776,5.38879C25.2776,6.72356,24.7885,7.95054,23.97599,8.89565L24.20812,9.1195ZM16.15802,5.38878C16.15802,7.4531,17.8244,9.11949,19.88872,9.11949C21.95304,9.11949,23.61943,7.4531,23.61943,5.38878C23.61943,3.32446,21.95304,1.65808,19.88872,1.65808C17.8244,1.65808,16.15802,3.32446,16.15802,5.38878Z" fill-rule="evenodd" fill="#949494" fill-opacity="1"/></g></svg>',Oe="jj-demo-block-setting";class Le{constructor(){const t=localStorage.getItem(Oe);t?(Object.assign(this,JSON.parse(t)),this.devices.forEach(r=>{r.type==="mobile"&&(r.icon=le),r.type==="desktop"&&(r.icon=ue)})):(this.isShowHeader=!0,this.devices=[{id:1,width:"375px",type:"mobile",name:"Mobile",enable:!0,checked:!0,icon:le},{id:2,width:"100%",type:"desktop",name:"Desktop",enable:!0,checked:!1,icon:ue}])}}var He=e=>{throw TypeError(e)},Ue=(e,t,r)=>t.has(e)||He("Cannot "+r),st=(e,t,r)=>(Ue(e,t,"read from private field"),r?r.call(e):t.get(e)),at=(e,t,r)=>t.has(e)?He("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ct=(e,t,r,n)=>(Ue(e,t,"write to private field"),t.set(e,r),r);const Hr={CHILD:2},Ne=e=>(...t)=>({_$litDirective$:e,values:t});class De{constructor(t){}get _$AU(){return this._$AM._$AU}_$AT(t,r,n){this._$Ct=t,this._$AM=r,this._$Ci=n}_$AS(t,r){return this.update(t,r)}update(t,r){return this.render(...r)}}/**
* @license
* Copyright 2020 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const{I:Ur}=Sr,de=(e,t)=>(e==null?void 0:e._$litType$)!==void 0,Nr=e=>{var t;return((t=e==null?void 0:e._$litType$)==null?void 0:t.h)!=null},he=()=>document.createComment(""),pe=(e,t,r)=>{var n;const i=e._$AA.parentNode,s=e._$AB;if(r===void 0){const o=i.insertBefore(he(),s),a=i.insertBefore(he(),s);r=new Ur(o,a,e,e.options)}else{const o=r._$AB.nextSibling,a=r._$AM,p=a!==e;if(p){let g;(n=r._$AQ)==null||n.call(r,e),r._$AM=e,r._$AP!==void 0&&(g=e._$AU)!==a._$AU&&r._$AP(g)}if(o!==s||p){let g=r._$AA;for(;g!==o;){const k=g.nextSibling;i.insertBefore(g,s),g=k}}}return r},Dr={},fe=(e,t=Dr)=>e._$AH=t,ve=e=>e._$AH,Ir=e=>{e._$AR()};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const be=e=>Nr(e)?e._$litType$.h:e.strings,Rr=Ne(class extends De{constructor(e){super(e),this.et=new WeakMap}render(e){return[e]}update(e,[t]){const r=de(this.it)?be(this.it):null,n=de(t)?be(t):null;if(r!==null&&(n===null||r!==n)){const i=ve(e).pop();let s=this.et.get(r);if(s===void 0){const o=document.createDocumentFragment();s=Pe(z,o),s.setConnected(!1),this.et.set(r,s)}fe(s,[i]),pe(s,void 0,i)}if(n!==null){if(r===null||r!==n){const i=this.et.get(n);if(i!==void 0){const s=ve(i).pop();Ir(e),pe(e,void 0,s),fe(e,[s])}}this.it=t}else this.it=void 0;return this.render(t)}});/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/const Qt=e=>(t,r)=>{r!==void 0?r.addInitializer(()=>{customElements.define(e,t)}):customElements.define(e,t)};/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function At(e){return bt({...e,state:!0,attribute:!1})}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class Zt extends De{constructor(t){if(super(t),this.it=z,t.type!==Hr.CHILD)throw Error(this.constructor.directiveName+"() can only be used in child bindings")}render(t){if(t===z||t==null)return this._t=void 0,this.it=t;if(t===ft)return t;if(typeof t!="string")throw Error(this.constructor.directiveName+"() called with a non-string value");if(t===this.it)return this._t;this.it=t;const r=[t];return r.raw=r,this._t={_$litType$:this.constructor.resultType,strings:r,values:[]}}}Zt.directiveName="unsafeHTML",Zt.resultType=1;const ut=Ne(Zt);/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/class ge{constructor(t,r,n,i){if(this.subscribe=!1,this.provided=!1,this.value=void 0,this.t=(s,o)=>{this.unsubscribe&&(this.unsubscribe!==o&&(this.provided=!1,this.unsubscribe()),this.subscribe||this.unsubscribe()),this.value=s,this.host.requestUpdate(),this.provided&&!this.subscribe||(this.provided=!0,this.callback&&this.callback(s,o)),this.unsubscribe=o},this.host=t,r.context!==void 0){const s=r;this.context=s.context,this.callback=s.callback,this.subscribe=s.subscribe??!1}else this.context=r,this.callback=n,this.subscribe=i??!1;this.host.addController(this)}hostConnected(){this.dispatchRequest()}hostDisconnected(){this.unsubscribe&&(this.unsubscribe(),this.unsubscribe=void 0)}dispatchRequest(){this.host.dispatchEvent(new Me(this.context,this.host,this.t,this.subscribe))}}/**
* @license
* Copyright 2022 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function Br({context:e,subscribe:t}){return(r,n)=>{typeof n=="object"?n.addInitializer(function(){new ge(this,{context:e,callback:i=>{r.set.call(this,i)},subscribe:t})}):r.constructor.addInitializer(i=>{new ge(i,{context:e,callback:s=>{i[n]=s},subscribe:t})})}}let me;function Zr(e,t,r,n,i,s){var o,a,p,g,k,w,A,M=Symbol.metadata||Symbol.for("Symbol.metadata"),D=Object.defineProperty,I=Object.create,V=[I(null),I(null)],Q=t.length;function O(c,m,v){return function(l,u){m&&(u=l,l=e);for(var y=0;y<c.length;y++)u=c[y].apply(l,v?[u]:[]);return v?u:l}}function _(c,m,v,l){if(typeof c!="function"&&(l||c!==void 0))throw new TypeError(m+" must "+(v||"be")+" a function"+(l?"":" or undefined"));return c}function J(c,m,v,l,u,y,C,b,x,$,G){function R(h){if(!G(h))throw new TypeError("Attempted to access private element on non-instance")}var B=[].concat(m[0]),K=m[3],Z=!C,j=u===1,F=u===3,tt=u===4,L=u===2;function H(h,E,nt){return function(N,it){return E&&(it=N,N=c),nt&&nt(N),d[h].call(N,it)}}if(!Z){var d={},W=[],S=F?"get":tt||j?"set":"value";if(x?($||j?d={get:ye(function(){return K(this)},l,"get"),set:function(h){m[4](this,h)}}:d[S]=K,$||ye(d[S],l,L?"":S)):$||(d=Object.getOwnPropertyDescriptor(c,l)),!$&&!x){if((a=V[+b][l])&&(a^u)!=7)throw Error("Decorating two elements with the same name ("+d[S].name+") is not supported yet");V[+b][l]=u<3?1:u}}for(var f=c,U=B.length-1;U>=0;U-=v?2:1){var et=_(B[U],"A decorator","be",!0),rt=v?B[U-1]:void 0,q={},P={kind:["field","accessor","method","getter","setter","class"][u],name:l,metadata:o,addInitializer:(function(h,E){if(h.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(E,"An initializer","be",!0),y.push(E)}).bind(null,q)};if(Z)a=et.call(rt,f,P),q.v=1,_(a,"class decorators","return")&&(f=a);else if(P.static=b,P.private=x,a=P.access={has:x?G.bind():function(h){return l in h}},tt||(a.get=x?L?function(h){return R(h),d.value}:H("get",0,R):function(h){return h[l]}),L||F||(a.set=x?H("set",0,R):function(h,E){h[l]=E}),f=et.call(rt,j?{get:d.get,set:d.set}:d[S],P),q.v=1,j){if(typeof f=="object"&&f)(a=_(f.get,"accessor.get"))&&(d.get=a),(a=_(f.set,"accessor.set"))&&(d.set=a),(a=_(f.init,"accessor.init"))&&W.unshift(a);else if(f!==void 0)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(f,($?"field":"method")+" decorators","return")&&($?W.unshift(f):d[S]=f)}return u<2&&C.push(O(W,b,1),O(y,b,0)),$||Z||(x?j?C.splice(-1,0,H("get",b),H("set",b)):C.push(L?d[S]:_.call.bind(d[S])):D(c,l,d)),f}function X(c){return D(c,M,{configurable:!0,enumerable:!0,value:o})}return s!==void 0&&(o=s[M]),o=I(o??null),k=[],w=function(c){c&&k.push(O(c))},A=function(c,m){for(var v=0;v<r.length;v++){var l=r[v],u=l[1],y=7&u;if((8&u)==c&&!y==m){var C=l[2],b=!!l[3],x=16&u;J(c?e:e.prototype,l,x,b?"#"+C:Wr(C),y,y<2?[]:c?g=g||[]:p=p||[],k,!!c,b,m,c&&b?function($){return Yr($)===e}:i)}}},A(8,0),A(0,0),A(8,1),A(0,1),w(p),w(g),a=k,Q||X(e),{e:a,get c(){var c=[];return Q&&[X(e=J(e,[t],n,e.name,5,c)),O(c,1)]}}}function Wr(e){var t=qr(e,"string");return typeof t=="symbol"?t:t+""}function qr(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ye(e,t,r){typeof t=="symbol"&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch{}return e}function Yr(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(e!==null?typeof e:"null"));return e}let Vr;var Bt;Bt=class extends Y{render(){return T`<div
      class="rounded-3 bg-[var(--vp-c-bg,#fff)] b-px b-solid b-[var(--vp-c-border,#c2c2c4)] p-3 relative"
    >
      <div
        class="box-border absolute left-50% -translate-x-50% top-0 w-30 h-3 flex justify-center items-center gap-2"
      >
        <div class="w-1 h-1 rounded-full b-px b-solid b-[var(--vp-c-text-3,#929295)] mr-2"></div>
        <div class="w-20 h-1 rounded-1 b-px b-solid b-[var(--vp-c-text-3,#929295)]"></div>
        <div class="w-1 h-1 rounded-full b-px b-solid b-[var(--vp-c-text-3,#929295)]"></div>
      </div>
      <div class="w-full b-px b-solid b-[var(--vp-c-border,#c2c2c4)] overflow-hidden">
        <div class="h-8 bg-[var(--vp-c-bg-alt,#f6f6f7)] relative">
          <div class="h-8 flex items-center gap-2 ml-4">
            <div class="w-2.5 h-2.5 rounded-full bg-[var(--vp-c-red-1,#f66f81)]"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-[var(--vp-c-yellow-1,#f9b44e)]"></div>
            <div class="w-2.5 h-2.5 rounded-full bg-[var(--vp-c-green-1,#3dd68c)]"></div>
          </div>
          <div
            class="h-5.5 leading-5.5 w-45% rounded-xl bg-[var(--vp-c-bg,#fff)] absolute left-50% -translate-x-50% top-50% -translate-y-50% text-align-center text-sm text-[var(--vp-c-text-2,#67676c)]"
          >
            www.demo.com
            <div class="absolute top-0 right-2 h-full flex items-center">
              ${ut(Lr)}
            </div>
          </div>
        </div>
        <slot></slot>
      </div>
    </div>`}static get styles(){return[ot`
        :host {
          display: block;
          margin: 0 auto;
        }
      `,ot`
        /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.left-50\\%{left:50%;}
.right-2{right:0.5rem;}
.top-0{top:0;}
.top-50\\%{top:50%;}
.ml-4{margin-left:1rem;}
.mr-2{margin-right:0.5rem;}
.box-border{box-sizing:border-box;}
.block{display:block;}
.h-1{height:0.25rem;}
.h-2\\.5{height:0.625rem;}
.h-3{height:0.75rem;}
.h-5\\.5{height:1.375rem;}
.h-8{height:2rem;}
.h-full{height:100%;}
.w-1{width:0.25rem;}
.w-2\\.5{width:0.625rem;}
.w-20{width:5rem;}
.w-30{width:7.5rem;}
.w-45\\%{width:45%;}
.w-full{width:100%;}
.flex{display:flex;}
.-translate-x-50\\%{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.-translate-y-50\\%{--un-translate-y:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.gap-2{gap:0.5rem;}
.overflow-hidden{overflow:hidden;}
.b-px{border-width:1px;}
.b-\\[var\\(--vp-c-border\\,\\#c2c2c4\\)\\]{border-color:var(--vp-c-border,#c2c2c4);}
.b-\\[var\\(--vp-c-text-3\\,\\#929295\\)\\]{border-color:var(--vp-c-text-3,#929295);}
.rounded-1{border-radius:0.25rem;}
.rounded-3,
.rounded-xl{border-radius:0.75rem;}
.rounded-full{border-radius:9999px;}
.b-solid{border-style:solid;}
.bg-\\[var\\(--vp-c-bg-alt\\,\\#f6f6f7\\)\\]{background-color:var(--vp-c-bg-alt,#f6f6f7) /* var(--vp-c-bg-alt,#f6f6f7) */;}
.bg-\\[var\\(--vp-c-bg\\,\\#fff\\)\\]{background-color:var(--vp-c-bg,#fff) /* var(--vp-c-bg,#fff) */;}
.bg-\\[var\\(--vp-c-green-1\\,\\#3dd68c\\)\\]{background-color:var(--vp-c-green-1,#3dd68c) /* var(--vp-c-green-1,#3dd68c) */;}
.bg-\\[var\\(--vp-c-red-1\\,\\#f66f81\\)\\]{background-color:var(--vp-c-red-1,#f66f81) /* var(--vp-c-red-1,#f66f81) */;}
.bg-\\[var\\(--vp-c-yellow-1\\,\\#f9b44e\\)\\]{background-color:var(--vp-c-yellow-1,#f9b44e) /* var(--vp-c-yellow-1,#f9b44e) */;}
.p-3{padding:0.75rem;}
.text-align-center{text-align:center;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-\\[var\\(--vp-c-text-2\\,\\#67676c\\)\\]{color:var(--vp-c-text-2,#67676c) /* var(--vp-c-text-2,#67676c) */;}
.leading-5\\.5{line-height:1.375rem;};
      `]}},[Vr,me]=Zr(Bt,[Qt("jj-demo-block-desktop-view")],[],0,void 0,Y).c,me();let we;function Qr(e,t,r,n,i,s){var o,a,p,g,k,w,A,M=Symbol.metadata||Symbol.for("Symbol.metadata"),D=Object.defineProperty,I=Object.create,V=[I(null),I(null)],Q=t.length;function O(c,m,v){return function(l,u){m&&(u=l,l=e);for(var y=0;y<c.length;y++)u=c[y].apply(l,v?[u]:[]);return v?u:l}}function _(c,m,v,l){if(typeof c!="function"&&(l||c!==void 0))throw new TypeError(m+" must "+(v||"be")+" a function"+(l?"":" or undefined"));return c}function J(c,m,v,l,u,y,C,b,x,$,G){function R(h){if(!G(h))throw new TypeError("Attempted to access private element on non-instance")}var B=[].concat(m[0]),K=m[3],Z=!C,j=u===1,F=u===3,tt=u===4,L=u===2;function H(h,E,nt){return function(N,it){return E&&(it=N,N=c),nt&&nt(N),d[h].call(N,it)}}if(!Z){var d={},W=[],S=F?"get":tt||j?"set":"value";if(x?($||j?d={get:xe(function(){return K(this)},l,"get"),set:function(h){m[4](this,h)}}:d[S]=K,$||xe(d[S],l,L?"":S)):$||(d=Object.getOwnPropertyDescriptor(c,l)),!$&&!x){if((a=V[+b][l])&&(a^u)!=7)throw Error("Decorating two elements with the same name ("+d[S].name+") is not supported yet");V[+b][l]=u<3?1:u}}for(var f=c,U=B.length-1;U>=0;U-=v?2:1){var et=_(B[U],"A decorator","be",!0),rt=v?B[U-1]:void 0,q={},P={kind:["field","accessor","method","getter","setter","class"][u],name:l,metadata:o,addInitializer:(function(h,E){if(h.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(E,"An initializer","be",!0),y.push(E)}).bind(null,q)};if(Z)a=et.call(rt,f,P),q.v=1,_(a,"class decorators","return")&&(f=a);else if(P.static=b,P.private=x,a=P.access={has:x?G.bind():function(h){return l in h}},tt||(a.get=x?L?function(h){return R(h),d.value}:H("get",0,R):function(h){return h[l]}),L||F||(a.set=x?H("set",0,R):function(h,E){h[l]=E}),f=et.call(rt,j?{get:d.get,set:d.set}:d[S],P),q.v=1,j){if(typeof f=="object"&&f)(a=_(f.get,"accessor.get"))&&(d.get=a),(a=_(f.set,"accessor.set"))&&(d.set=a),(a=_(f.init,"accessor.init"))&&W.unshift(a);else if(f!==void 0)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(f,($?"field":"method")+" decorators","return")&&($?W.unshift(f):d[S]=f)}return u<2&&C.push(O(W,b,1),O(y,b,0)),$||Z||(x?j?C.splice(-1,0,H("get",b),H("set",b)):C.push(L?d[S]:_.call.bind(d[S])):D(c,l,d)),f}function X(c){return D(c,M,{configurable:!0,enumerable:!0,value:o})}return s!==void 0&&(o=s[M]),o=I(o??null),k=[],w=function(c){c&&k.push(O(c))},A=function(c,m){for(var v=0;v<r.length;v++){var l=r[v],u=l[1],y=7&u;if((8&u)==c&&!y==m){var C=l[2],b=!!l[3],x=16&u;J(c?e:e.prototype,l,x,b?"#"+C:Jr(C),y,y<2?[]:c?g=g||[]:p=p||[],k,!!c,b,m,c&&b?function($){return Gr($)===e}:i)}}},A(8,0),A(0,0),A(8,1),A(0,1),w(p),w(g),a=k,Q||X(e),{e:a,get c(){var c=[];return Q&&[X(e=J(e,[t],n,e.name,5,c)),O(c,1)]}}}function Jr(e){var t=Xr(e,"string");return typeof t=="symbol"?t:t+""}function Xr(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function xe(e,t,r){typeof t=="symbol"&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch{}return e}function Gr(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(e!==null?typeof e:"null"));return e}let Kr;const Fr=class extends Y{render(){return T`<div
      class="rounded-10 bg-[var(--vp-c-bg,#fff)] b-px b-solid b-[var(--vp-c-border,#c2c2c4)] p-2 relative"
    >
      <div
        class="box-border absolute left-50% -translate-x-50% top-2 w-30 h-5 bg-[var(--vp-c-bg,#fff)] rounded-b-15 b-x-px b-x-solid b-x-[var(--vp-c-border,#c2c2c4)] b-b-px b-b-solid b-b-[var(--vp-c-border,#c2c2c4)] flex justify-center gap-2 pt-1"
      >
        <div class="w-12 h-.5 rounded-1 b-px b-solid b-[var(--vp-c-text-3,#929295)]"></div>
        <div class="w-.5 h-.5 rounded-full b-px b-solid b-[var(--vp-c-text-3,#929295)]"></div>
      </div>
      <div class="w-full rounded-8 b-px b-solid b-[var(--vp-c-border,#c2c2c4)] overflow-hidden">
        <div
          class="h-5 bg-[var(--vp-c-bg-alt,#f6f6f7)] px-6 flex justify-between items-center text-sm font-500"
        >
          5:19
          <div class="h-full flex items-center gap-1">
            ${ut(Mr)}${ut(Tr)}${ut(Or)}
          </div>
        </div>
        <slot></slot>
      </div>
    </div>`}static get styles(){return[ot`
        :host {
          display: block;
          margin: 0 auto;
        }
      `,ot`
        /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.relative{position:relative;}
.static{position:static;}
.left-50\\%{left:50%;}
.top-2{top:0.5rem;}
.box-border{box-sizing:border-box;}
.block{display:block;}
.h-\\.5{height:0.125rem;}
.h-5{height:1.25rem;}
.h-full{height:100%;}
.w-\\.5{width:0.125rem;}
.w-12{width:3rem;}
.w-30{width:7.5rem;}
.w-full{width:100%;}
.flex{display:flex;}
.-translate-x-50\\%{--un-translate-x:-50%;transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.gap-1{gap:0.25rem;}
.gap-2{gap:0.5rem;}
.overflow-hidden{overflow:hidden;}
.b-px{border-width:1px;}
.b-x-px{border-left-width:1px;border-right-width:1px;}
.b-b-px{border-bottom-width:1px;}
.b-\\[var\\(--vp-c-border\\,\\#c2c2c4\\)\\]{border-color:var(--vp-c-border,#c2c2c4);}
.b-\\[var\\(--vp-c-text-3\\,\\#929295\\)\\]{border-color:var(--vp-c-text-3,#929295);}
.b-x-\\[var\\(--vp-c-border\\,\\#c2c2c4\\)\\]{border-left-color:var(--vp-c-border,#c2c2c4);border-right-color:var(--vp-c-border,#c2c2c4);}
.b-b-\\[var\\(--vp-c-border\\,\\#c2c2c4\\)\\]{border-bottom-color:var(--vp-c-border,#c2c2c4);}
.rounded-1{border-radius:0.25rem;}
.rounded-10{border-radius:2.5rem;}
.rounded-8{border-radius:2rem;}
.rounded-full{border-radius:9999px;}
.rounded-b-15{border-bottom-left-radius:3.75rem;border-bottom-right-radius:3.75rem;}
.b-solid{border-style:solid;}
.b-x-solid{border-left-style:solid;border-right-style:solid;}
.b-b-solid{border-bottom-style:solid;}
.bg-\\[var\\(--vp-c-bg-alt\\,\\#f6f6f7\\)\\]{background-color:var(--vp-c-bg-alt,#f6f6f7) /* var(--vp-c-bg-alt,#f6f6f7) */;}
.bg-\\[var\\(--vp-c-bg\\,\\#fff\\)\\]{background-color:var(--vp-c-bg,#fff) /* var(--vp-c-bg,#fff) */;}
.p-2{padding:0.5rem;}
.px-6{padding-left:1.5rem;padding-right:1.5rem;}
.pt-1{padding-top:0.25rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.font-500{font-weight:500;};
      `]}};[Kr,we]=Qr(Fr,[Qt("jj-demo-block-mobile-view")],[],0,void 0,Y).c,we();let $e,Ie,Re,Be,Ze,We,qe,Ye,Ve,Qe,Je,Xe,Ge,Ke,Fe,tr,er;function tn(e,t,r,n,i,s){var o,a,p,g,k,w,A,M=Symbol.metadata||Symbol.for("Symbol.metadata"),D=Object.defineProperty,I=Object.create,V=[I(null),I(null)],Q=t.length;function O(c,m,v){return function(l,u){m&&(u=l,l=e);for(var y=0;y<c.length;y++)u=c[y].apply(l,v?[u]:[]);return v?u:l}}function _(c,m,v,l){if(typeof c!="function"&&(l||c!==void 0))throw new TypeError(m+" must "+(v||"be")+" a function"+(l?"":" or undefined"));return c}function J(c,m,v,l,u,y,C,b,x,$,G){function R(h){if(!G(h))throw new TypeError("Attempted to access private element on non-instance")}var B=[].concat(m[0]),K=m[3],Z=!C,j=u===1,F=u===3,tt=u===4,L=u===2;function H(h,E,nt){return function(N,it){return E&&(it=N,N=c),nt&&nt(N),d[h].call(N,it)}}if(!Z){var d={},W=[],S=F?"get":tt||j?"set":"value";if(x?($||j?d={get:ke(function(){return K(this)},l,"get"),set:function(h){m[4](this,h)}}:d[S]=K,$||ke(d[S],l,L?"":S)):$||(d=Object.getOwnPropertyDescriptor(c,l)),!$&&!x){if((a=V[+b][l])&&(a^u)!=7)throw Error("Decorating two elements with the same name ("+d[S].name+") is not supported yet");V[+b][l]=u<3?1:u}}for(var f=c,U=B.length-1;U>=0;U-=v?2:1){var et=_(B[U],"A decorator","be",!0),rt=v?B[U-1]:void 0,q={},P={kind:["field","accessor","method","getter","setter","class"][u],name:l,metadata:o,addInitializer:(function(h,E){if(h.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(E,"An initializer","be",!0),y.push(E)}).bind(null,q)};if(Z)a=et.call(rt,f,P),q.v=1,_(a,"class decorators","return")&&(f=a);else if(P.static=b,P.private=x,a=P.access={has:x?G.bind():function(h){return l in h}},tt||(a.get=x?L?function(h){return R(h),d.value}:H("get",0,R):function(h){return h[l]}),L||F||(a.set=x?H("set",0,R):function(h,E){h[l]=E}),f=et.call(rt,j?{get:d.get,set:d.set}:d[S],P),q.v=1,j){if(typeof f=="object"&&f)(a=_(f.get,"accessor.get"))&&(d.get=a),(a=_(f.set,"accessor.set"))&&(d.set=a),(a=_(f.init,"accessor.init"))&&W.unshift(a);else if(f!==void 0)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(f,($?"field":"method")+" decorators","return")&&($?W.unshift(f):d[S]=f)}return u<2&&C.push(O(W,b,1),O(y,b,0)),$||Z||(x?j?C.splice(-1,0,H("get",b),H("set",b)):C.push(L?d[S]:_.call.bind(d[S])):D(c,l,d)),f}function X(c){return D(c,M,{configurable:!0,enumerable:!0,value:o})}return s!==void 0&&(o=s[M]),o=I(o??null),k=[],w=function(c){c&&k.push(O(c))},A=function(c,m){for(var v=0;v<r.length;v++){var l=r[v],u=l[1],y=7&u;if((8&u)==c&&!y==m){var C=l[2],b=!!l[3],x=16&u;J(c?e:e.prototype,l,x,b?"#"+C:en(C),y,y<2?[]:c?g=g||[]:p=p||[],k,!!c,b,m,c&&b?function($){return nn($)===e}:i)}}},A(8,0),A(0,0),A(8,1),A(0,1),w(p),w(g),a=k,Q||X(e),{e:a,get c(){var c=[];return Q&&[X(e=J(e,[t],n,e.name,5,c)),O(c,1)]}}}function en(e){var t=rn(e,"string");return typeof t=="symbol"?t:t+""}function rn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function ke(e,t,r){typeof t=="symbol"&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch{}return e}function nn(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(e!==null?typeof e:"null"));return e}let on;var Et,zt,jt,Pt,Mt,Tt,Ot,Lt;const sn=class extends Y{constructor(...t){super(...t),at(this,Et,Ie(this,"")),at(this,zt,(Re(this),Be(this,"100%"))),at(this,jt,(Ze(this),We(this,"hello, world"))),at(this,Pt,(qe(this),Ye(this,!1))),at(this,Mt,(Ve(this),Qe(this,new Le))),at(this,Tt,(Je(this),Xe(this,[]))),at(this,Ot,(Ge(this),Ke(this,!1))),at(this,Lt,(Fe(this),tr(this,!1))),er(this)}get iframeUrl(){return st(this,Et)}set iframeUrl(t){ct(this,Et,t)}get iframeHeight(){return st(this,zt)}set iframeHeight(t){ct(this,zt,t)}get rawSource(){return st(this,jt)}set rawSource(t){ct(this,jt,t)}get isShowSourcePermanently(){return st(this,Pt)}set isShowSourcePermanently(t){ct(this,Pt,t)}get globalSetting(){return st(this,Mt)}set globalSetting(t){ct(this,Mt,t)}get _devices(){return st(this,Tt)}set _devices(t){ct(this,Tt,t)}_onCheckDevice(t){this._devices.forEach(r=>{r.checked=r.id===t}),this.requestUpdate()}willUpdate(t){t.has("globalSetting")&&(this._devices=JSON.parse(JSON.stringify(this.globalSetting.devices)))}get _isCopied(){return st(this,Ot)}set _isCopied(t){ct(this,Ot,t)}async _onCopyCode(){if(!this._isCopied)try{await navigator.clipboard.writeText(decodeURIComponent(this.rawSource)),this._isCopied=!0,setTimeout(()=>{this._isCopied=!1},2e3)}catch(t){console.error("Failed to copy: ",t)}}get _isShowSource(){return st(this,Lt)}set _isShowSource(t){ct(this,Lt,t)}_onToggleSourceVisible(){this._isShowSource=!this._isShowSource}render(){return T`<div
      class="flex-1 rounded text-[var(--vp-c-text-1,#3c3c43)]"
      @click=${this._onClick}
    >
      ${this.globalSetting.isShowHeader?T`<div class="flex justify-center items-center gap-2 mb-2">
            ${this._devices.filter(({enable:t})=>t).map(({id:t,icon:r,checked:n})=>T`<div
                  class="px-2 py-1 rounded-md cursor-pointer ${n?"bg-[var(--vp-c-neutral,#000)] text-[--vp-c-neutral-inverse,#fff]":"bg-[var(--vp-c-neutral-inverse,#fff)] text-[--vp-c-neutral,#000] b-px b-solid b-[var(--vp-c-border,#c2c2c4)]"} flex cursor-pointer"
                  @click=${()=>!n&&this._onCheckDevice(t)}
                >
                  ${ut(r)}
                </div>`)}
          </div>`:z}
      ${/desktop/.test(this._devices.find(({checked:t})=>t).type)?T`<jj-demo-block-desktop-view
            style="width: ${this._devices.find(({checked:t})=>t).width}"
          >
            <div class="min-h-20 max-h-65vh overflow-auto ${this.iframeUrl?"":"p-2"}">
              ${this.iframeUrl?T`<iframe
                    src=${this.iframeUrl}
                    frameborder="0"
                    width="100%"
                    style="height: ${this.iframeHeight}"
                    loading="lazy"
                  ></iframe>`:T`<slot></slot>`}
            </div>
          </jj-demo-block-desktop-view>`:T`<jj-demo-block-mobile-view
            style="width: ${this._devices.find(({checked:t})=>t).width}"
          >
            <div class="min-h-20 max-h-65vh overflow-auto ${this.iframeUrl?"":"p-2"}">
              ${this.iframeUrl?T`<iframe
                    src=${this.iframeUrl}
                    frameborder="0"
                    width="100%"
                    style="height: ${this.iframeHeight}"
                    loading="lazy"
                  ></iframe>`:T`<slot></slot>`}
            </div>
          </jj-demo-block-mobile-view>`}
      <div
        class="p-2 flex justify-center items-center gap-3 text-[var(--vp-c-text-2,#67676c)] text-0"
      >
        <div
          tooltip="${this._isCopied?"已复制":"复制代码"}"
          position="bottom"
          @click=${this._onCopyCode}
          class="flex cursor-pointer hover:[&>svg]:text-[var(--vp-c-brand-1,#3451b2)] hover:[&>svg]:stroke-2"
        >
          ${ut(this._isCopied?zr:Er)}
        </div>
        ${this.isShowSourcePermanently?z:T`<div
              tooltip=${this._isShowSource?"隐藏代码":"查看代码"}
              position="bottom"
              class="flex cursor-pointer hover:[&>svg]:text-[var(--vp-c-brand-1,#3451b2)] hover:[&>svg]:stroke-2"
              @click=${this._onToggleSourceVisible}
            >
              ${ut(jr)}
            </div>`}
      </div>
      <!-- md.render后的html片段，用于展示代码，目前不通过prop接收了，因为生成的html片段包含class，可能依赖运行环境，而由于web component的隔离型，class样式无法应用 -->
      ${this.isShowSourcePermanently||this._isShowSource?T`<slot name="source"></slot>`:z}
      <!-- 收起箭头 -->
      ${this.isShowSourcePermanently?z:T`${Rr(this._isShowSource?T`<div
                  class="flex justify-center items-center b-t-px b-t-solid b-t-[var(--vp-c-divider,#e2e2e3)] h-10 bg-[var(--vp-c-bg,#fff)] rd-b-1 text-[var(--vp-c-text-2,#67676c)] cursor-pointer sticky left-0 right-0 bottom-0 z-10 hover:text-[var(--vp-c-indigo-1,#3451b2)]"
                  @click=${()=>this._isShowSource=!1}
                >
                  ${ut(Pr)}隐藏代码
                </div>`:z)}`}
    </div>`}static get styles(){return[ot`
        /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.absolute{position:absolute;}
.relative{position:relative;}
.sticky{position:sticky;}
.static{position:static;}
.bottom-0{bottom:0;}
.left-0{left:0;}
.right-0{right:0;}
.z-10{z-index:10;}
.mb-2{margin-bottom:0.5rem;}
.inline-block{display:inline-block;}
.h-10{height:2.5rem;}
.max-h-65vh{max-height:65vh;}
.min-h-20{min-height:5rem;}
.flex{display:flex;}
.flex-1{flex:1 1 0%;}
.transform{transform:translateX(var(--un-translate-x)) translateY(var(--un-translate-y)) translateZ(var(--un-translate-z)) rotate(var(--un-rotate)) rotateX(var(--un-rotate-x)) rotateY(var(--un-rotate-y)) rotateZ(var(--un-rotate-z)) skewX(var(--un-skew-x)) skewY(var(--un-skew-y)) scaleX(var(--un-scale-x)) scaleY(var(--un-scale-y)) scaleZ(var(--un-scale-z));}
.cursor-pointer{cursor:pointer;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.gap-2{gap:0.5rem;}
.gap-3{gap:0.75rem;}
.overflow-auto{overflow:auto;}
.b-px{border-width:1px;}
.b-t-px{border-top-width:1px;}
.b-\\[var\\(--vp-c-border\\,\\#c2c2c4\\)\\]{border-color:var(--vp-c-border,#c2c2c4);}
.b-t-\\[var\\(--vp-c-divider\\,\\#e2e2e3\\)\\]{border-top-color:var(--vp-c-divider,#e2e2e3);}
.rounded{border-radius:0.25rem;}
.rounded-md{border-radius:0.375rem;}
.rd-b-1{border-bottom-left-radius:0.25rem;border-bottom-right-radius:0.25rem;}
.b-solid{border-style:solid;}
.b-t-solid{border-top-style:solid;}
.bg-\\[var\\(--vp-c-bg\\,\\#fff\\)\\]{background-color:var(--vp-c-bg,#fff) /* var(--vp-c-bg,#fff) */;}
.bg-\\[var\\(--vp-c-neutral-inverse\\,\\#fff\\)\\]{background-color:var(--vp-c-neutral-inverse,#fff) /* var(--vp-c-neutral-inverse,#fff) */;}
.bg-\\[var\\(--vp-c-neutral\\,\\#000\\)\\]{background-color:var(--vp-c-neutral,#000) /* var(--vp-c-neutral,#000) */;}
.hover\\:\\[\\&\\>svg\\]\\:stroke-2>svg:hover{stroke-width:2px;}
.p-2{padding:0.5rem;}
.px-2{padding-left:0.5rem;padding-right:0.5rem;}
.py-1{padding-top:0.25rem;padding-bottom:0.25rem;}
.text-0{font-size:0;}
.text-\\[--vp-c-neutral-inverse\\,\\#fff\\]{color:var(--vp-c-neutral-inverse,#fff) /* var(--vp-c-neutral-inverse,#fff) */;}
.text-\\[--vp-c-neutral\\,\\#000\\]{color:var(--vp-c-neutral,#000) /* var(--vp-c-neutral,#000) */;}
.text-\\[var\\(--vp-c-text-1\\,\\#3c3c43\\)\\]{color:var(--vp-c-text-1,#3c3c43) /* var(--vp-c-text-1,#3c3c43) */;}
.text-\\[var\\(--vp-c-text-2\\,\\#67676c\\)\\]{color:var(--vp-c-text-2,#67676c) /* var(--vp-c-text-2,#67676c) */;}
.hover\\:\\[\\&\\>svg\\]\\:text-\\[var\\(--vp-c-brand-1\\,\\#3451b2\\)\\]>svg:hover{color:var(--vp-c-brand-1,#3451b2) /* var(--vp-c-brand-1,#3451b2) */;}
.hover\\:text-\\[var\\(--vp-c-indigo-1\\,\\#3451b2\\)\\]:hover{color:var(--vp-c-indigo-1,#3451b2) /* var(--vp-c-indigo-1,#3451b2) */;};
      `,ot`
        :host {
          display: flex;
        }
      `,ot`
        [tooltip] {
          position: relative;
          display: inline-block;
        }
        [tooltip]::before {
          content: '';
          position: absolute;
          border-width: 4px 6px 0 6px;
          border-style: solid;
          border-color: transparent;
          border-top-color: var(--vp-c-neutral, #000);
          z-index: 99;
          opacity: 0;
        }
        [tooltip]::after {
          content: attr(tooltip);
          position: absolute;
          background: var(--vp-c-neutral, #000);
          text-align: center;
          color: var(--vp-c-neutral-inverse, #fff);
          border-radius: 5px;
          padding: 4px 2px;
          min-width: 80px;
          pointer-events: none;
          z-index: 99;
          opacity: 0;
          font-size: 14px;
        }
        [tooltip]:hover::after,
        [tooltip]:hover::before {
          opacity: 1;
        }
        [tooltip][position='bottom']::before {
          top: 100%;
          left: 50%;
          margin-top: 1px;
          transform: translatex(-50%) rotate(180deg);
        }
        [tooltip][position='bottom']::after {
          top: 100%;
          left: 50%;
          margin-top: 5px;
          transform: translatex(-50%);
        }
      `]}};Et=new WeakMap,zt=new WeakMap,jt=new WeakMap,Pt=new WeakMap,Mt=new WeakMap,Tt=new WeakMap,Ot=new WeakMap,Lt=new WeakMap,{e:[Ie,Re,Be,Ze,We,qe,Ye,Ve,Qe,Je,Xe,Ge,Ke,Fe,tr,er],c:[on,$e]}=tn(sn,[Qt("jj-demo-block")],[[bt(),1,"iframeUrl"],[bt(),1,"iframeHeight"],[bt({attribute:!1}),1,"rawSource"],[bt({type:Boolean}),1,"isShowSourcePermanently"],[[Br({context:Te,subscribe:!0}),At()],1,"globalSetting"],[At(),1,"_devices"],[At(),1,"_isCopied"],[At(),1,"_isShowSource"]],0,void 0,Y),$e();var rr=e=>{throw TypeError(e)},nr=(e,t,r)=>t.has(e)||rr("Cannot "+r),an=(e,t,r)=>(nr(e,t,"read from private field"),r?r.call(e):t.get(e)),cn=(e,t,r)=>t.has(e)?rr("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),ln=(e,t,r,n)=>(nr(e,t,"write to private field"),t.set(e,r),r);class un{get value(){return this.o}set value(t){this.setValue(t)}setValue(t,r=!1){const n=r||!Object.is(t,this.o);this.o=t,n&&this.updateObservers()}constructor(t){this.subscriptions=new Map,this.updateObservers=()=>{for(const[r,{disposer:n}]of this.subscriptions)r(this.o,n)},t!==void 0&&(this.value=t)}addCallback(t,r,n){if(!n)return void t(this.value);this.subscriptions.has(t)||this.subscriptions.set(t,{disposer:()=>{this.subscriptions.delete(t)},consumerHost:r});const{disposer:i}=this.subscriptions.get(t);t(this.value,i)}clearCallbacks(){this.subscriptions.clear()}}/**
* @license
* Copyright 2021 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/let dn=class extends Event{constructor(e,t){super("context-provider",{bubbles:!0,composed:!0}),this.context=e,this.contextTarget=t}};class _e extends un{constructor(t,r,n){var i,s;super(r.context!==void 0?r.initialValue:n),this.onContextRequest=o=>{if(o.context!==this.context)return;const a=o.contextTarget??o.composedPath()[0];a!==this.host&&(o.stopPropagation(),this.addCallback(o.callback,a,o.subscribe))},this.onProviderRequest=o=>{if(o.context!==this.context||(o.contextTarget??o.composedPath()[0])===this.host)return;const a=new Set;for(const[p,{consumerHost:g}]of this.subscriptions)a.has(p)||(a.add(p),g.dispatchEvent(new Me(this.context,g,p,!0)));o.stopPropagation()},this.host=t,r.context!==void 0?this.context=r.context:this.context=r,this.attachListeners(),(s=(i=this.host).addController)==null||s.call(i,this)}attachListeners(){this.host.addEventListener("context-request",this.onContextRequest),this.host.addEventListener("context-provider",this.onProviderRequest)}hostConnected(){this.host.dispatchEvent(new dn(this.context,this.host))}}/**
* @license
* Copyright 2017 Google LLC
* SPDX-License-Identifier: BSD-3-Clause
*/function hn({context:e}){return(t,r)=>{const n=new WeakMap;if(typeof r=="object")return{get(){return t.get.call(this)},set(i){return n.get(this).setValue(i),t.set.call(this,i)},init(i){return n.set(this,new _e(this,{context:e,initialValue:i})),i}};{t.constructor.addInitializer(o=>{n.set(o,new _e(o,{context:e}))});const i=Object.getOwnPropertyDescriptor(t,r);let s;if(i===void 0){const o=new WeakMap;s={get(){return o.get(this)},set(a){n.get(this).setValue(a),o.set(this,a)},configurable:!0,enumerable:!0}}else{const o=i.set;s={...i,set(a){n.get(this).setValue(a),o==null||o.call(this,a)}}}return void Object.defineProperty(t,r,s)}}}let ir,or;function pn(e,t,r,n,i,s){var o,a,p,g,k,w,A,M=Symbol.metadata||Symbol.for("Symbol.metadata"),D=Object.defineProperty,I=Object.create,V=[I(null),I(null)],Q=t.length;function O(c,m,v){return function(l,u){m&&(u=l,l=e);for(var y=0;y<c.length;y++)u=c[y].apply(l,v?[u]:[]);return v?u:l}}function _(c,m,v,l){if(typeof c!="function"&&(l||c!==void 0))throw new TypeError(m+" must "+(v||"be")+" a function"+(l?"":" or undefined"));return c}function J(c,m,v,l,u,y,C,b,x,$,G){function R(h){if(!G(h))throw new TypeError("Attempted to access private element on non-instance")}var B=[].concat(m[0]),K=m[3],Z=!C,j=u===1,F=u===3,tt=u===4,L=u===2;function H(h,E,nt){return function(N,it){return E&&(it=N,N=c),nt&&nt(N),d[h].call(N,it)}}if(!Z){var d={},W=[],S=F?"get":tt||j?"set":"value";if(x?($||j?d={get:Se(function(){return K(this)},l,"get"),set:function(h){m[4](this,h)}}:d[S]=K,$||Se(d[S],l,L?"":S)):$||(d=Object.getOwnPropertyDescriptor(c,l)),!$&&!x){if((a=V[+b][l])&&(a^u)!=7)throw Error("Decorating two elements with the same name ("+d[S].name+") is not supported yet");V[+b][l]=u<3?1:u}}for(var f=c,U=B.length-1;U>=0;U-=v?2:1){var et=_(B[U],"A decorator","be",!0),rt=v?B[U-1]:void 0,q={},P={kind:["field","accessor","method","getter","setter","class"][u],name:l,metadata:o,addInitializer:(function(h,E){if(h.v)throw new TypeError("attempted to call addInitializer after decoration was finished");_(E,"An initializer","be",!0),y.push(E)}).bind(null,q)};if(Z)a=et.call(rt,f,P),q.v=1,_(a,"class decorators","return")&&(f=a);else if(P.static=b,P.private=x,a=P.access={has:x?G.bind():function(h){return l in h}},tt||(a.get=x?L?function(h){return R(h),d.value}:H("get",0,R):function(h){return h[l]}),L||F||(a.set=x?H("set",0,R):function(h,E){h[l]=E}),f=et.call(rt,j?{get:d.get,set:d.set}:d[S],P),q.v=1,j){if(typeof f=="object"&&f)(a=_(f.get,"accessor.get"))&&(d.get=a),(a=_(f.set,"accessor.set"))&&(d.set=a),(a=_(f.init,"accessor.init"))&&W.unshift(a);else if(f!==void 0)throw new TypeError("accessor decorators must return an object with get, set, or init properties or undefined")}else _(f,($?"field":"method")+" decorators","return")&&($?W.unshift(f):d[S]=f)}return u<2&&C.push(O(W,b,1),O(y,b,0)),$||Z||(x?j?C.splice(-1,0,H("get",b),H("set",b)):C.push(L?d[S]:_.call.bind(d[S])):D(c,l,d)),f}function X(c){return D(c,M,{configurable:!0,enumerable:!0,value:o})}return s!==void 0&&(o=s[M]),o=I(o??null),k=[],w=function(c){c&&k.push(O(c))},A=function(c,m){for(var v=0;v<r.length;v++){var l=r[v],u=l[1],y=7&u;if((8&u)==c&&!y==m){var C=l[2],b=!!l[3],x=16&u;J(c?e:e.prototype,l,x,b?"#"+C:fn(C),y,y<2?[]:c?g=g||[]:p=p||[],k,!!c,b,m,c&&b?function($){return bn($)===e}:i)}}},A(8,0),A(0,0),A(8,1),A(0,1),w(p),w(g),a=k,Q||X(e),{e:a,get c(){var c=[];return Q&&[X(e=J(e,[t],n,e.name,5,c)),O(c,1)]}}}function fn(e){var t=vn(e,"string");return typeof t=="symbol"?t:t+""}function vn(e,t){if(typeof e!="object"||!e)return e;var r=e[Symbol.toPrimitive];if(r!==void 0){var n=r.call(e,t);if(typeof n!="object")return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function Se(e,t,r){typeof t=="symbol"&&(t=(t=t.description)?"["+t+"]":"");try{Object.defineProperty(e,"name",{configurable:!0,value:r?r+" "+t:t})}catch{}return e}function bn(e){if(Object(e)!==e)throw TypeError("right-hand side of 'in' should be an object, got "+(e!==null?typeof e:"null"));return e}var Ht;const sr=class extends Y{constructor(...t){super(...t),cn(this,Ht,ir(this,new Le)),or(this)}get globalSetting(){return an(this,Ht)}set globalSetting(t){ln(this,Ht,t)}_saveGlobalSetting(){const t=JSON.parse(JSON.stringify(this.globalSetting));t.devices.forEach(r=>delete r.icon),localStorage.setItem(Oe,JSON.stringify(t)),this.globalSetting={...this.globalSetting}}_toggleIsShowHeader(t){this.globalSetting.isShowHeader=t.target.checked,this._saveGlobalSetting()}_toggleDeviceEnable(t,r){const n=this.globalSetting.devices.find(i=>i.id===t);if(n){if(n.enable=r.target.checked,!n.enable&&n.checked){n.checked=!1;const i=this.globalSetting.devices.find(s=>s.enable);i&&(i.checked=!0)}this.globalSetting.devices.some(i=>i.enable)||(this.globalSetting.isShowHeader=!1),this._saveGlobalSetting()}}_checkDevice(t){this.globalSetting.devices.forEach(r=>{r.checked=r.id===t}),this._saveGlobalSetting()}render(){const t=this.globalSetting.devices.filter(r=>r.enable);return T`<div>
      <slot></slot>
      <div class="setting-container fixed bottom-5 right-5 z-20">
        <div
          part="setting-icon"
          class="setting-icon w-10 h-10 flex items-center justify-center bg-gray-200 hover:bg-gray-300 rounded-full cursor-pointer shadow-lg"
        >
          ⚙️
        </div>
        <div
          class="setting-panel absolute bottom-full right-0 p-4 w-72 bg-white rounded-md shadow-xl border border-gray-200 z-10"
        >
          <h3 class="text-lg font-semibold mb-3">Demo设置</h3>

          <div class="mb-3 pb-3 border-b border-gray-200">
            <div class="flex items-center justify-between">
              <label
                for="isShowHeaderToggle"
                class="text-sm text-gray-700"
                >显示设备切换栏</label
              >
              <input
                type="checkbox"
                id="isShowHeaderToggle"
                .checked=${this.globalSetting.isShowHeader}
                @change=${this._toggleIsShowHeader}
                class="form-checkbox"
              />
            </div>
          </div>

          <div class="mb-3 pb-3 border-b border-gray-200">
            <h4 class="text-md font-semibold mb-2 text-gray-800">启用设备</h4>
            ${this.globalSetting.devices.map(r=>T`<div class="flex items-center justify-between mb-1">
                <label
                  for="deviceEnable-${r.id}"
                  class="text-sm text-gray-600"
                  >${r.name}</label
                >
                <input
                  type="checkbox"
                  id="deviceEnable-${r.id}"
                  .checked=${r.enable}
                  @change=${n=>this._toggleDeviceEnable(r.id,n)}
                  class="form-checkbox"
                />
              </div>`)}
          </div>

          ${t.length>0?T`<div class="mb-2">
                <h4 class="text-md font-semibold mb-2 text-gray-800">选择设备</h4>
                ${t.map(r=>T`<div class="flex items-center mb-1">
                    <input
                      type="radio"
                      id="deviceCheck-${r.id}"
                      name="activeDevice"
                      .value=${r.id.toString()}
                      .checked=${r.checked}
                      @change=${()=>this._checkDevice(r.id)}
                      class="form-radio mr-2"
                    />
                    <label
                      for="deviceCheck-${r.id}"
                      class="text-sm text-gray-600"
                      >${r.name} (${r.width})</label
                    >
                  </div>`)}
              </div>`:T`<p class="text-sm text-gray-500">请至少启用一个设备</p>`}
        </div>
      </div>
    </div>`}static get styles(){return[ot`
        .form-checkbox,
        .form-radio {
          appearance: none;
          padding: 0;
          display: inline-block;
          vertical-align: middle;
          background-origin: border-box;
          user-select: none;
          flex-shrink: 0;
          height: 1rem;
          width: 1rem;
          color: #2563eb; /* blue-600 */
          background-color: #fff;
          border: 1px solid #adb5bd;
        }
        .form-checkbox {
          border-radius: 0.25rem;
        }
        .form-radio {
          border-radius: 50%;
        }
        .form-checkbox:checked {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3cpath d='M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z'/%3e%3c/svg%3e");
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
        }
        .form-radio:checked {
          background-image: url("data:image/svg+xml,%3csvg viewBox='0 0 16 16' fill='white' xmlns='http://www.w3.org/2000/svg'%3e%3ccircle cx='8' cy='8' r='3'/%3e%3c/svg%3e");
          border-color: transparent;
          background-color: currentColor;
          background-size: 100% 100%;
          background-position: center;
          background-repeat: no-repeat;
        }

        /* CSS-only hover effect for setting panel */
        .setting-container .setting-panel {
          display: none; /* 或者 opacity: 0; visibility: hidden; transition: opacity 0.2s ease-in-out, visibility 0.2s ease-in-out; */
        }
        .setting-container:hover .setting-panel {
          display: block; /* 或者 opacity: 1; visibility: visible; */
        }
      `,ot`
        /* layer: preflights */
*,::before,::after{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}::backdrop{--un-rotate:0;--un-rotate-x:0;--un-rotate-y:0;--un-rotate-z:0;--un-scale-x:1;--un-scale-y:1;--un-scale-z:1;--un-skew-x:0;--un-skew-y:0;--un-translate-x:0;--un-translate-y:0;--un-translate-z:0;--un-pan-x: ;--un-pan-y: ;--un-pinch-zoom: ;--un-scroll-snap-strictness:proximity;--un-ordinal: ;--un-slashed-zero: ;--un-numeric-figure: ;--un-numeric-spacing: ;--un-numeric-fraction: ;--un-border-spacing-x:0;--un-border-spacing-y:0;--un-ring-offset-shadow:0 0 rgb(0 0 0 / 0);--un-ring-shadow:0 0 rgb(0 0 0 / 0);--un-shadow-inset: ;--un-shadow:0 0 rgb(0 0 0 / 0);--un-ring-inset: ;--un-ring-offset-width:0px;--un-ring-offset-color:#fff;--un-ring-width:0px;--un-ring-color:rgb(147 197 253 / 0.5);--un-blur: ;--un-brightness: ;--un-contrast: ;--un-drop-shadow: ;--un-grayscale: ;--un-hue-rotate: ;--un-invert: ;--un-saturate: ;--un-sepia: ;--un-backdrop-blur: ;--un-backdrop-brightness: ;--un-backdrop-contrast: ;--un-backdrop-grayscale: ;--un-backdrop-hue-rotate: ;--un-backdrop-invert: ;--un-backdrop-opacity: ;--un-backdrop-saturate: ;--un-backdrop-sepia: ;}
/* layer: default */
.visible{visibility:visible;}
.absolute{position:absolute;}
.fixed{position:fixed;}
.static{position:static;}
.bottom-5{bottom:1.25rem;}
.bottom-full{bottom:100%;}
.right-0{right:0;}
.right-5{right:1.25rem;}
.z-10{z-index:10;}
.z-20{z-index:20;}
.mb-1{margin-bottom:0.25rem;}
.mb-2{margin-bottom:0.5rem;}
.mb-3{margin-bottom:0.75rem;}
.mr-2{margin-right:0.5rem;}
.block{display:block;}
.inline-block{display:inline-block;}
.hidden{display:none;}
.h-10{height:2.5rem;}
.w-10{width:2.5rem;}
.w-72{width:18rem;}
.flex{display:flex;}
.flex-shrink{flex-shrink:1;}
.cursor-pointer{cursor:pointer;}
.items-center{align-items:center;}
.justify-center{justify-content:center;}
.justify-between{justify-content:space-between;}
.border{border-width:1px;}
.border-b{border-bottom-width:1px;}
.border-gray-200{--un-border-opacity:1;border-color:rgb(229 231 235 / var(--un-border-opacity));}
.rounded-full{border-radius:9999px;}
.rounded-md{border-radius:0.375rem;}
.bg-gray-200{--un-bg-opacity:1;background-color:rgb(229 231 235 / var(--un-bg-opacity)) /* #e5e7eb */;}
.bg-white{--un-bg-opacity:1;background-color:rgb(255 255 255 / var(--un-bg-opacity)) /* #fff */;}
.hover\\:bg-gray-300:hover{--un-bg-opacity:1;background-color:rgb(209 213 219 / var(--un-bg-opacity)) /* #d1d5db */;}
.p-4{padding:1rem;}
.pb-3{padding-bottom:0.75rem;}
.text-lg{font-size:1.125rem;line-height:1.75rem;}
.text-sm{font-size:0.875rem;line-height:1.25rem;}
.text-gray-500{--un-text-opacity:1;color:rgb(107 114 128 / var(--un-text-opacity)) /* #6b7280 */;}
.text-gray-600{--un-text-opacity:1;color:rgb(75 85 99 / var(--un-text-opacity)) /* #4b5563 */;}
.text-gray-700{--un-text-opacity:1;color:rgb(55 65 81 / var(--un-text-opacity)) /* #374151 */;}
.text-gray-800{--un-text-opacity:1;color:rgb(31 41 55 / var(--un-text-opacity)) /* #1f2937 */;}
.font-semibold{font-weight:600;}
.shadow-lg{--un-shadow:var(--un-shadow-inset) 0 10px 15px -3px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 4px 6px -4px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.shadow-xl{--un-shadow:var(--un-shadow-inset) 0 20px 25px -5px var(--un-shadow-color, rgb(0 0 0 / 0.1)),var(--un-shadow-inset) 0 8px 10px -6px var(--un-shadow-color, rgb(0 0 0 / 0.1));box-shadow:var(--un-ring-offset-shadow), var(--un-ring-shadow), var(--un-shadow);}
.transition{transition-property:color,background-color,border-color,text-decoration-color,fill,stroke,opacity,box-shadow,transform,filter,backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;}
.ease-in-out{transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);};
      `]}};Ht=new WeakMap,[ir,or]=pn(sr,[],[[[hn({context:Te}),bt({attribute:!1})],1,"globalSetting"]],0,void 0,Y).e;let gn=sr;window.customElements.define("jj-demo-block-setting",gn);
