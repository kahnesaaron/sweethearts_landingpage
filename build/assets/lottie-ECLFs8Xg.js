var Hi=Object.defineProperty;var qi=(e,t,i)=>t in e?Hi(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i;var f=(e,t,i)=>qi(e,typeof t!="symbol"?t+"":t,i);var jt=window,be=jt.ShadowRoot&&(jt.ShadyCSS===void 0||jt.ShadyCSS.nativeShadow)&&"adoptedStyleSheets"in Document.prototype&&"replace"in CSSStyleSheet.prototype,we=Symbol(),ze=new WeakMap,ai=class{constructor(e,t,i){if(this._$cssResult$=!0,i!==we)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(be&&e===void 0){let i=t!==void 0&&t.length===1;i&&(e=ze.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),i&&ze.set(t,e))}return e}toString(){return this.cssText}},Zi=e=>new ai(typeof e=="string"?e:e+"",void 0,we),Ji=(e,...t)=>{let i=e.length===1?e[0]:t.reduce((o,n,r)=>o+(s=>{if(s._$cssResult$===!0)return s.cssText;if(typeof s=="number")return s;throw Error("Value passed to 'css' function must be a 'css' function result: "+s+". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.")})(n)+e[r+1],e[0]);return new ai(i,e,we)},Wi=(e,t)=>{be?e.adoptedStyleSheets=t.map(i=>i instanceof CSSStyleSheet?i:i.styleSheet):t.forEach(i=>{let o=document.createElement("style"),n=jt.litNonce;n!==void 0&&o.setAttribute("nonce",n),o.textContent=i.cssText,e.appendChild(o)})},De=be?e=>e:e=>e instanceof CSSStyleSheet?(t=>{let i="";for(let o of t.cssRules)i+=o.cssText;return Zi(i)})(e):e,Yt,Vt=window,Ve=Vt.trustedTypes,Ki=Ve?Ve.emptyScript:"",Fe=Vt.reactiveElementPolyfillSupport,he={toAttribute(e,t){switch(t){case Boolean:e=e?Ki:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let i=e;switch(t){case Boolean:i=e!==null;break;case Number:i=e===null?null:Number(e);break;case Object:case Array:try{i=JSON.parse(e)}catch{i=null}}return i}},li=(e,t)=>t!==e&&(t==t||e==e),te={attribute:!0,type:String,converter:he,reflect:!1,hasChanged:li},de="finalized",mt=class extends HTMLElement{constructor(){super(),this._$Ei=new Map,this.isUpdatePending=!1,this.hasUpdated=!1,this._$El=null,this._$Eu()}static addInitializer(t){var i;this.finalize(),((i=this.h)!==null&&i!==void 0?i:this.h=[]).push(t)}static get observedAttributes(){this.finalize();let t=[];return this.elementProperties.forEach((i,o)=>{let n=this._$Ep(o,i);n!==void 0&&(this._$Ev.set(n,o),t.push(n))}),t}static createProperty(t,i=te){if(i.state&&(i.attribute=!1),this.finalize(),this.elementProperties.set(t,i),!i.noAccessor&&!this.prototype.hasOwnProperty(t)){let o=typeof t=="symbol"?Symbol():"__"+t,n=this.getPropertyDescriptor(t,o,i);n!==void 0&&Object.defineProperty(this.prototype,t,n)}}static getPropertyDescriptor(t,i,o){return{get(){return this[i]},set(n){let r=this[t];this[i]=n,this.requestUpdate(t,r,o)},configurable:!0,enumerable:!0}}static getPropertyOptions(t){return this.elementProperties.get(t)||te}static finalize(){if(this.hasOwnProperty(de))return!1;this[de]=!0;let t=Object.getPrototypeOf(this);if(t.finalize(),t.h!==void 0&&(this.h=[...t.h]),this.elementProperties=new Map(t.elementProperties),this._$Ev=new Map,this.hasOwnProperty("properties")){let i=this.properties,o=[...Object.getOwnPropertyNames(i),...Object.getOwnPropertySymbols(i)];for(let n of o)this.createProperty(n,i[n])}return this.elementStyles=this.finalizeStyles(this.styles),!0}static finalizeStyles(t){let i=[];if(Array.isArray(t)){let o=new Set(t.flat(1/0).reverse());for(let n of o)i.unshift(De(n))}else t!==void 0&&i.push(De(t));return i}static _$Ep(t,i){let o=i.attribute;return o===!1?void 0:typeof o=="string"?o:typeof t=="string"?t.toLowerCase():void 0}_$Eu(){var t;this._$E_=new Promise(i=>this.enableUpdating=i),this._$AL=new Map,this._$Eg(),this.requestUpdate(),(t=this.constructor.h)===null||t===void 0||t.forEach(i=>i(this))}addController(t){var i,o;((i=this._$ES)!==null&&i!==void 0?i:this._$ES=[]).push(t),this.renderRoot!==void 0&&this.isConnected&&((o=t.hostConnected)===null||o===void 0||o.call(t))}removeController(t){var i;(i=this._$ES)===null||i===void 0||i.splice(this._$ES.indexOf(t)>>>0,1)}_$Eg(){this.constructor.elementProperties.forEach((t,i)=>{this.hasOwnProperty(i)&&(this._$Ei.set(i,this[i]),delete this[i])})}createRenderRoot(){var t;let i=(t=this.shadowRoot)!==null&&t!==void 0?t:this.attachShadow(this.constructor.shadowRootOptions);return Wi(i,this.constructor.elementStyles),i}connectedCallback(){var t;this.renderRoot===void 0&&(this.renderRoot=this.createRenderRoot()),this.enableUpdating(!0),(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostConnected)===null||o===void 0?void 0:o.call(i)})}enableUpdating(t){}disconnectedCallback(){var t;(t=this._$ES)===null||t===void 0||t.forEach(i=>{var o;return(o=i.hostDisconnected)===null||o===void 0?void 0:o.call(i)})}attributeChangedCallback(t,i,o){this._$AK(t,o)}_$EO(t,i,o=te){var n;let r=this.constructor._$Ep(t,o);if(r!==void 0&&o.reflect===!0){let s=(((n=o.converter)===null||n===void 0?void 0:n.toAttribute)!==void 0?o.converter:he).toAttribute(i,o.type);this._$El=t,s==null?this.removeAttribute(r):this.setAttribute(r,s),this._$El=null}}_$AK(t,i){var o;let n=this.constructor,r=n._$Ev.get(t);if(r!==void 0&&this._$El!==r){let s=n.getPropertyOptions(r),l=typeof s.converter=="function"?{fromAttribute:s.converter}:((o=s.converter)===null||o===void 0?void 0:o.fromAttribute)!==void 0?s.converter:he;this._$El=r,this[r]=l.fromAttribute(i,s.type),this._$El=null}}requestUpdate(t,i,o){let n=!0;t!==void 0&&(((o=o||this.constructor.getPropertyOptions(t)).hasChanged||li)(this[t],i)?(this._$AL.has(t)||this._$AL.set(t,i),o.reflect===!0&&this._$El!==t&&(this._$EC===void 0&&(this._$EC=new Map),this._$EC.set(t,o))):n=!1),!this.isUpdatePending&&n&&(this._$E_=this._$Ej())}async _$Ej(){this.isUpdatePending=!0;try{await this._$E_}catch(i){Promise.reject(i)}let t=this.scheduleUpdate();return t!=null&&await t,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){var t;if(!this.isUpdatePending)return;this.hasUpdated,this._$Ei&&(this._$Ei.forEach((n,r)=>this[r]=n),this._$Ei=void 0);let i=!1,o=this._$AL;try{i=this.shouldUpdate(o),i?(this.willUpdate(o),(t=this._$ES)===null||t===void 0||t.forEach(n=>{var r;return(r=n.hostUpdate)===null||r===void 0?void 0:r.call(n)}),this.update(o)):this._$Ek()}catch(n){throw i=!1,this._$Ek(),n}i&&this._$AE(o)}willUpdate(t){}_$AE(t){var i;(i=this._$ES)===null||i===void 0||i.forEach(o=>{var n;return(n=o.hostUpdated)===null||n===void 0?void 0:n.call(o)}),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(t)),this.updated(t)}_$Ek(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$E_}shouldUpdate(t){return!0}update(t){this._$EC!==void 0&&(this._$EC.forEach((i,o)=>this._$EO(o,this[o],i)),this._$EC=void 0),this._$Ek()}updated(t){}firstUpdated(t){}};mt[de]=!0,mt.elementProperties=new Map,mt.elementStyles=[],mt.shadowRootOptions={mode:"open"},Fe==null||Fe({ReactiveElement:mt}),((Yt=Vt.reactiveElementVersions)!==null&&Yt!==void 0?Yt:Vt.reactiveElementVersions=[]).push("1.6.3");var ee,Ft=window,bt=Ft.trustedTypes,Re=bt?bt.createPolicy("lit-html",{createHTML:e=>e}):void 0,ue="$lit$",st=`lit$${(Math.random()+"").slice(9)}$`,hi="?"+st,Gi=`<${hi}>`,ut=document,Ot=()=>ut.createComment(""),Pt=e=>e===null||typeof e!="object"&&typeof e!="function",di=Array.isArray,Qi=e=>di(e)||typeof(e==null?void 0:e[Symbol.iterator])=="function",ie=`[ 	
\f\r]`,$t=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Be=/-->/g,He=/>/g,lt=RegExp(`>|${ie}(?:([^\\s"'>=/]+)(${ie}*=${ie}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`,"g"),qe=/'/g,Ze=/"/g,ui=/^(?:script|style|textarea|title)$/i,Xi=e=>(t,...i)=>({_$litType$:e,strings:t,values:i}),b=Xi(1),wt=Symbol.for("lit-noChange"),I=Symbol.for("lit-nothing"),Je=new WeakMap,ht=ut.createTreeWalker(ut,129,null,!1);function ci(e,t){if(!Array.isArray(e)||!e.hasOwnProperty("raw"))throw Error("invalid template strings array");return Re!==void 0?Re.createHTML(t):t}var Yi=(e,t)=>{let i=e.length-1,o=[],n,r=t===2?"<svg>":"",s=$t;for(let l=0;l<i;l++){let a=e[l],h,u,d=-1,c=0;for(;c<a.length&&(s.lastIndex=c,u=s.exec(a),u!==null);)c=s.lastIndex,s===$t?u[1]==="!--"?s=Be:u[1]!==void 0?s=He:u[2]!==void 0?(ui.test(u[2])&&(n=RegExp("</"+u[2],"g")),s=lt):u[3]!==void 0&&(s=lt):s===lt?u[0]===">"?(s=n??$t,d=-1):u[1]===void 0?d=-2:(d=s.lastIndex-u[2].length,h=u[1],s=u[3]===void 0?lt:u[3]==='"'?Ze:qe):s===Ze||s===qe?s=lt:s===Be||s===He?s=$t:(s=lt,n=void 0);let p=s===lt&&e[l+1].startsWith("/>")?" ":"";r+=s===$t?a+Gi:d>=0?(o.push(h),a.slice(0,d)+ue+a.slice(d)+st+p):a+st+(d===-2?(o.push(void 0),l):p)}return[ci(e,r+(e[i]||"<?>")+(t===2?"</svg>":"")),o]},ce=class pi{constructor({strings:t,_$litType$:i},o){let n;this.parts=[];let r=0,s=0,l=t.length-1,a=this.parts,[h,u]=Yi(t,i);if(this.el=pi.createElement(h,o),ht.currentNode=this.el.content,i===2){let d=this.el.content,c=d.firstChild;c.remove(),d.append(...c.childNodes)}for(;(n=ht.nextNode())!==null&&a.length<l;){if(n.nodeType===1){if(n.hasAttributes()){let d=[];for(let c of n.getAttributeNames())if(c.endsWith(ue)||c.startsWith(st)){let p=u[s++];if(d.push(c),p!==void 0){let m=n.getAttribute(p.toLowerCase()+ue).split(st),v=/([.?@])?(.*)/.exec(p);a.push({type:1,index:r,name:v[2],strings:m,ctor:v[1]==="."?eo:v[1]==="?"?oo:v[1]==="@"?no:qt})}else a.push({type:6,index:r})}for(let c of d)n.removeAttribute(c)}if(ui.test(n.tagName)){let d=n.textContent.split(st),c=d.length-1;if(c>0){n.textContent=bt?bt.emptyScript:"";for(let p=0;p<c;p++)n.append(d[p],Ot()),ht.nextNode(),a.push({type:2,index:++r});n.append(d[c],Ot())}}}else if(n.nodeType===8)if(n.data===hi)a.push({type:2,index:r});else{let d=-1;for(;(d=n.data.indexOf(st,d+1))!==-1;)a.push({type:7,index:r}),d+=st.length-1}r++}}static createElement(t,i){let o=ut.createElement("template");return o.innerHTML=t,o}};function Ct(e,t,i=e,o){var n,r,s,l;if(t===wt)return t;let a=o!==void 0?(n=i._$Co)===null||n===void 0?void 0:n[o]:i._$Cl,h=Pt(t)?void 0:t._$litDirective$;return(a==null?void 0:a.constructor)!==h&&((r=a==null?void 0:a._$AO)===null||r===void 0||r.call(a,!1),h===void 0?a=void 0:(a=new h(e),a._$AT(e,i,o)),o!==void 0?((s=(l=i)._$Co)!==null&&s!==void 0?s:l._$Co=[])[o]=a:i._$Cl=a),a!==void 0&&(t=Ct(e,a._$AS(e,t.values),a,o)),t}var to=class{constructor(t,i){this._$AV=[],this._$AN=void 0,this._$AD=t,this._$AM=i}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(t){var i;let{el:{content:o},parts:n}=this._$AD,r=((i=t==null?void 0:t.creationScope)!==null&&i!==void 0?i:ut).importNode(o,!0);ht.currentNode=r;let s=ht.nextNode(),l=0,a=0,h=n[0];for(;h!==void 0;){if(l===h.index){let u;h.type===2?u=new Ce(s,s.nextSibling,this,t):h.type===1?u=new h.ctor(s,h.name,h.strings,this,t):h.type===6&&(u=new ro(s,this,t)),this._$AV.push(u),h=n[++a]}l!==(h==null?void 0:h.index)&&(s=ht.nextNode(),l++)}return ht.currentNode=ut,r}v(t){let i=0;for(let o of this._$AV)o!==void 0&&(o.strings!==void 0?(o._$AI(t,o,i),i+=o.strings.length-2):o._$AI(t[i])),i++}},Ce=class fi{constructor(t,i,o,n){var r;this.type=2,this._$AH=I,this._$AN=void 0,this._$AA=t,this._$AB=i,this._$AM=o,this.options=n,this._$Cp=(r=n==null?void 0:n.isConnected)===null||r===void 0||r}get _$AU(){var t,i;return(i=(t=this._$AM)===null||t===void 0?void 0:t._$AU)!==null&&i!==void 0?i:this._$Cp}get parentNode(){let t=this._$AA.parentNode,i=this._$AM;return i!==void 0&&(t==null?void 0:t.nodeType)===11&&(t=i.parentNode),t}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(t,i=this){t=Ct(this,t,i),Pt(t)?t===I||t==null||t===""?(this._$AH!==I&&this._$AR(),this._$AH=I):t!==this._$AH&&t!==wt&&this._(t):t._$litType$!==void 0?this.g(t):t.nodeType!==void 0?this.$(t):Qi(t)?this.T(t):this._(t)}k(t){return this._$AA.parentNode.insertBefore(t,this._$AB)}$(t){this._$AH!==t&&(this._$AR(),this._$AH=this.k(t))}_(t){this._$AH!==I&&Pt(this._$AH)?this._$AA.nextSibling.data=t:this.$(ut.createTextNode(t)),this._$AH=t}g(t){var i;let{values:o,_$litType$:n}=t,r=typeof n=="number"?this._$AC(t):(n.el===void 0&&(n.el=ce.createElement(ci(n.h,n.h[0]),this.options)),n);if(((i=this._$AH)===null||i===void 0?void 0:i._$AD)===r)this._$AH.v(o);else{let s=new to(r,this),l=s.u(this.options);s.v(o),this.$(l),this._$AH=s}}_$AC(t){let i=Je.get(t.strings);return i===void 0&&Je.set(t.strings,i=new ce(t)),i}T(t){di(this._$AH)||(this._$AH=[],this._$AR());let i=this._$AH,o,n=0;for(let r of t)n===i.length?i.push(o=new fi(this.k(Ot()),this.k(Ot()),this,this.options)):o=i[n],o._$AI(r),n++;n<i.length&&(this._$AR(o&&o._$AB.nextSibling,n),i.length=n)}_$AR(t=this._$AA.nextSibling,i){var o;for((o=this._$AP)===null||o===void 0||o.call(this,!1,!0,i);t&&t!==this._$AB;){let n=t.nextSibling;t.remove(),t=n}}setConnected(t){var i;this._$AM===void 0&&(this._$Cp=t,(i=this._$AP)===null||i===void 0||i.call(this,t))}},qt=class{constructor(e,t,i,o,n){this.type=1,this._$AH=I,this._$AN=void 0,this.element=e,this.name=t,this._$AM=o,this.options=n,i.length>2||i[0]!==""||i[1]!==""?(this._$AH=Array(i.length-1).fill(new String),this.strings=i):this._$AH=I}get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}_$AI(e,t=this,i,o){let n=this.strings,r=!1;if(n===void 0)e=Ct(this,e,t,0),r=!Pt(e)||e!==this._$AH&&e!==wt,r&&(this._$AH=e);else{let s=e,l,a;for(e=n[0],l=0;l<n.length-1;l++)a=Ct(this,s[i+l],t,l),a===wt&&(a=this._$AH[l]),r||(r=!Pt(a)||a!==this._$AH[l]),a===I?e=I:e!==I&&(e+=(a??"")+n[l+1]),this._$AH[l]=a}r&&!o&&this.j(e)}j(e){e===I?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??"")}},eo=class extends qt{constructor(){super(...arguments),this.type=3}j(t){this.element[this.name]=t===I?void 0:t}},io=bt?bt.emptyScript:"",oo=class extends qt{constructor(){super(...arguments),this.type=4}j(t){t&&t!==I?this.element.setAttribute(this.name,io):this.element.removeAttribute(this.name)}},no=class extends qt{constructor(t,i,o,n,r){super(t,i,o,n,r),this.type=5}_$AI(t,i=this){var o;if((t=(o=Ct(this,t,i,0))!==null&&o!==void 0?o:I)===wt)return;let n=this._$AH,r=t===I&&n!==I||t.capture!==n.capture||t.once!==n.once||t.passive!==n.passive,s=t!==I&&(n===I||r);r&&this.element.removeEventListener(this.name,this,n),s&&this.element.addEventListener(this.name,this,t),this._$AH=t}handleEvent(t){var i,o;typeof this._$AH=="function"?this._$AH.call((o=(i=this.options)===null||i===void 0?void 0:i.host)!==null&&o!==void 0?o:this.element,t):this._$AH.handleEvent(t)}},ro=class{constructor(e,t,i){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=i}get _$AU(){return this._$AM._$AU}_$AI(e){Ct(this,e)}},We=Ft.litHtmlPolyfillSupport;We==null||We(ce,Ce),((ee=Ft.litHtmlVersions)!==null&&ee!==void 0?ee:Ft.litHtmlVersions=[]).push("2.8.0");var so=(e,t,i)=>{var o,n;let r=(o=i==null?void 0:i.renderBefore)!==null&&o!==void 0?o:t,s=r._$litPart$;if(s===void 0){let l=(n=i==null?void 0:i.renderBefore)!==null&&n!==void 0?n:null;r._$litPart$=s=new Ce(t.insertBefore(Ot(),l),l,void 0,i??{})}return s._$AI(e),s},oe,ne,At=class extends mt{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){var t,i;let o=super.createRenderRoot();return(t=(i=this.renderOptions).renderBefore)!==null&&t!==void 0||(i.renderBefore=o.firstChild),o}update(t){let i=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(t),this._$Do=so(i,this.renderRoot,this.renderOptions)}connectedCallback(){var t;super.connectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!0)}disconnectedCallback(){var t;super.disconnectedCallback(),(t=this._$Do)===null||t===void 0||t.setConnected(!1)}render(){return wt}};At.finalized=!0,At._$litElement$=!0,(oe=globalThis.litElementHydrateSupport)===null||oe===void 0||oe.call(globalThis,{LitElement:At});var Ke=globalThis.litElementPolyfillSupport;Ke==null||Ke({LitElement:At});((ne=globalThis.litElementVersions)!==null&&ne!==void 0?ne:globalThis.litElementVersions=[]).push("3.3.3");var ao=Ji`
  @font-face {
    font-family: 'Karla';
    font-weight: regular;
    src: url('./fonts/Karla-regular.woff') format('woff');
  }

  :host {
    --lottie-player-toolbar-height: 35px;
    --lottie-player-toolbar-background-color: transparent;
    --lottie-player-toolbar-hover-background-color: #f3f6f8;
    --lottie-player-toolbar-icon-color: #20272c;
    --lottie-player-toolbar-icon-hover-color: #f3f6f8;
    --lottie-player-toolbar-icon-active-color: #00ddb3;
    --lottie-player-seeker-track-color: #00ddb3;
    --lottie-player-seeker-accent-color: #00c1a2;
    --lottie-player-seeker-thumb-color: #00c1a2;
    --lottie-player-options-separator: #d9e0e6;

    display: block;
    width: 100%;
    height: 100%;

    font-family: 'Karla', sans-serif;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  :host * {
    box-sizing: border-box;
  }

  .active {
    color: var(--lottie-player-toolbar-icon-active-color) !important;
  }

  .main {
    position: relative;
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  }

  .animation {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
  }
  .animation.controls {
    height: calc(100% - var(--lottie-player-toolbar-height));
  }

  .toolbar {
    display: flex;
    align-items: center;
    justify-items: center;
    background-color: var(--lottie-player-toolbar-background-color);
    margin: 0 8px;
    height: var(--lottie-player-toolbar-height);
  }

  .btn-spacing-left {
    margin-right: 4px;
    margin-left: 8px;
  }

  .btn-spacing-center {
    margin-right: 4px;
    margin-left: 4px;
  }

  .btn-spacing-right {
    margin-right: 8px;
    margin-left: 4px;
  }

  .toolbar button {
    color: #20272c;
    cursor: pointer;
    fill: var(--lottie-player-toolbar-icon-color);
    display: flex;
    background: none;
    border: 0px;
    border-radius: 4px;
    padding: 4px;
    outline: none;
    width: 24px;
    height: 24px;
    align-items: center;
  }

  .toolbar button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
    border-style: solid;
    border-radius: 2px;
  }

  .toolbar button.active {
    fill: var(--lottie-player-toolbar-icon-active-color);
  }

  .toolbar button.active:hover {
    fill: var(--lottie-player-toolbar-icon-hover-color);
    border-radius: 4px;
  }

  .toolbar button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .toolbar button svg {
    width: 16px;
    height: 16px;
  }

  .toolbar button.disabled svg {
    display: none;
  }

  .popover {
    position: absolute;
    bottom: 40px;
    left: calc(100% - 239px);
    width: 224px;
    min-height: 84px;
    max-height: 300px;
    background-color: #ffffff;
    box-shadow: 0px 8px 48px 0px rgba(243, 246, 248, 0.15), 0px 8px 16px 0px rgba(61, 72, 83, 0.16),
      0px 0px 1px 0px rgba(61, 72, 83, 0.36);
    border-radius: 8px;
    padding: 8px;
    z-index: 100;
    overflow-y: scroll;
    scrollbar-width: none;
  }
  .popover:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover::-webkit-scrollbar {
    width: 0px;
  }

  .popover-button {
    background: none;
    border: none;
    font-family: inherit;
    width: 100%;
    flex-direction: row;
    cursor: pointer;
    height: 32px;
    color: #20272c;
    justify-content: space-between;
    display: flex;
    padding: 4px 8px;
    align-items: flex-start;
    gap: 8px;
    align-self: stretch;
    border-radius: 4px;
  }

  .popover-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .popover-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }

  .popover-button-text {
    display: flex;
    color: #20272c;
    flex-direction: column;
    align-self: stretch;
    justify-content: center;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
    letter-spacing: -0.28px;
  }

  .reset-btn {
    font-size: 12px;
    cursor: pointer;
    font-family: inherit;
    background: none;
    border: none;
    font-weight: 400;
    line-height: 18px;
    letter-spacing: 0em;
    text-align: left;
    color: #63727e;
    padding: 0;
    width: 31px;
    height: 18px;
  }
  .reset-btn:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }
  .reset-btn:hover {
    color: #20272c;
  }

  .option-title-button {
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 32px;
    align-items: center;
    gap: 4px;
    align-self: stretch;
    cursor: pointer;
    color: var(--lottie-player-toolbar-icon-color);
    border: none;
    background: none;
    padding: 4px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }
  .option-title-button.themes {
    width: auto;
    padding: 0;
  }
  .option-title-button:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-themes-row {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1 0 0;
  }
  .option-title-themes-row:hover {
    background-color: var(--lottie-player-toolbar-icon-hover-color);
  }

  .option-title-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-title-text {
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 150%;
    letter-spacing: -0.32px;
  }

  .option-title-separator {
    margin: 8px -8px;
    border-bottom: 1px solid var(--lottie-player-options-separator);
  }

  .option-title-chevron {
    display: flex;
    padding: 4px;
    border-radius: 8px;
    justify-content: center;
    align-items: center;
    gap: 8px;
  }

  .option-row {
    display: flex;
    flex-direction: column;
  }
  .option-row > ul {
    padding: 0;
    margin: 0;
  }

  .option-button {
    width: 100%;
    background: none;
    border: none;
    font-family: inherit;
    display: flex;
    padding: 4px 8px;
    color: #20272c;
    overflow: hidden;
    align-items: center;
    gap: 8px;
    align-self: stretch;
    cursor: pointer;
    height: 32px;
    font-family: inherit;
    font-size: 14px;
    border-radius: 4px;
  }
  .option-button:hover {
    background-color: var(--lottie-player-toolbar-hover-background-color);
  }
  .option-button:focus-visible {
    outline: 2px solid var(--lottie-player-toolbar-icon-active-color);
    border-radius: 4px;
    box-sizing: border-box;
  }

  .option-tick {
    display: flex;
    width: 24px;
    height: 24px;
    align-items: flex-start;
    gap: 8px;
  }

  .seeker {
    height: 4px;
    width: 95%;
    outline: none;
    -webkit-appearance: none;
    -moz-apperance: none;
    border-radius: 9999px;
    cursor: pointer;
    background-image: linear-gradient(
      to right,
      rgb(0, 221, 179) calc(var(--seeker) * 1%),
      rgb(217, 224, 230) calc(var(--seeker) * 1%)
    );
  }
  .seeker.to-left {
    background-image: linear-gradient(
      to right,
      rgb(217, 224, 230) calc(var(--seeker) * 1%),
      rgb(0, 221, 179) calc(var(--seeker) * 1%)
    );
  }
  .seeker::-webkit-slider-runnable-track:focus-visible {
    color: #f07167;
    accent-color: #00ddb3;
  }

  .seeker::-webkit-slider-runnable-track {
    width: 100%;
    height: 5px;
    cursor: pointer;
  }
  .seeker::-webkit-slider-thumb {
    -webkit-appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
  }
  .seeker:focus-visible::-webkit-slider-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }
  .seeker::-webkit-slider-thumb:hover {
    background: #019d91;
  }
  .seeker::-moz-range-thumb {
    appearance: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: var(--lottie-player-seeker-thumb-color);
    cursor: pointer;
    margin-top: -5px;
    border-color: transparent;
  }
  .seeker:focus-visible::-moz-range-thumb {
    background: var(--lottie-player-seeker-thumb-color);
    outline: 2px solid var(--lottie-player-seeker-track-color);
    border: 1.5px solid #ffffff;
  }

  .error {
    display: flex;
    justify-content: center;
    margin: auto;
    height: 100%;
    align-items: center;
  }
`;/*! Bundled license information:

@lit/reactive-element/css-tag.js:
  (**
   * @license
   * Copyright 2019 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/reactive-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/lit-html.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-element/lit-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

lit-html/is-server.js:
  (**
   * @license
   * Copyright 2022 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/const lo="modulepreload",ho=function(e){return"/"+e},Ge={},it=function(t,i,o){let n=Promise.resolve();if(i&&i.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),l=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));n=Promise.allSettled(i.map(a=>{if(a=ho(a),a in Ge)return;Ge[a]=!0;const h=a.endsWith(".css"),u=h?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${a}"]${u}`))return;const d=document.createElement("link");if(d.rel=h?"stylesheet":lo,h||(d.as="script"),d.crossOrigin="",d.href=a,l&&d.setAttribute("nonce",l),document.head.appendChild(d),h)return new Promise((c,p)=>{d.addEventListener("load",c),d.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${a}`)))})}))}function r(s){const l=new Event("vite:preloadError",{cancelable:!0});if(l.payload=s,window.dispatchEvent(l),!l.defaultPrevented)throw s}return n.then(s=>{for(const l of s||[])l.status==="rejected"&&r(l.reason);return t().catch(r)})};var Qe={},uo=function(e,t,i,o,n){var r=new Worker(Qe[t]||(Qe[t]=URL.createObjectURL(new Blob([e+';addEventListener("error",function(e){e=e.error;postMessage({$e$:[e.message,e.code,e.stack]})})'],{type:"text/javascript"}))));return r.onmessage=function(s){var l=s.data,a=l.$e$;if(a){var h=new Error(a[0]);h.code=a[1],h.stack=a[2],n(h,null)}else n(null,l)},r.postMessage(i,o),r},F=Uint8Array,dt=Uint16Array,vi=Int32Array,Le=new F([0,0,0,0,0,0,0,0,1,1,1,1,2,2,2,2,3,3,3,3,4,4,4,4,5,5,5,5,0,0,0,0]),Se=new F([0,0,0,0,1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9,10,10,11,11,12,12,13,13,0,0]),mi=new F([16,17,18,0,8,7,9,6,10,5,11,4,12,3,13,2,14,1,15]),_i=function(e,t){for(var i=new dt(31),o=0;o<31;++o)i[o]=t+=1<<e[o-1];for(var n=new vi(i[30]),o=1;o<30;++o)for(var r=i[o];r<i[o+1];++r)n[r]=r-i[o]<<5|o;return{b:i,r:n}},yi=_i(Le,2),$e=yi.b,co=yi.r;$e[28]=258,co[258]=28;var po=_i(Se,0),gi=po.b,Rt=new dt(32768);for(C=0;C<32768;++C)et=(C&43690)>>1|(C&21845)<<1,et=(et&52428)>>2|(et&13107)<<2,et=(et&61680)>>4|(et&3855)<<4,Rt[C]=((et&65280)>>8|(et&255)<<8)>>1;var et,C,yt=function(e,t,i){for(var o=e.length,n=0,r=new dt(t);n<o;++n)e[n]&&++r[e[n]-1];var s=new dt(t);for(n=1;n<t;++n)s[n]=s[n-1]+r[n-1]<<1;var l;if(i){l=new dt(1<<t);var a=15-t;for(n=0;n<o;++n)if(e[n])for(var h=n<<4|e[n],u=t-e[n],d=s[e[n]-1]++<<u,c=d|(1<<u)-1;d<=c;++d)l[Rt[d]>>a]=h}else for(l=new dt(o),n=0;n<o;++n)e[n]&&(l[n]=Rt[s[e[n]-1]++]>>15-e[n]);return l},It=new F(288);for(C=0;C<144;++C)It[C]=8;var C;for(C=144;C<256;++C)It[C]=9;var C;for(C=256;C<280;++C)It[C]=7;var C;for(C=280;C<288;++C)It[C]=8;var C,bi=new F(32);for(C=0;C<32;++C)bi[C]=5;var C,wi=yt(It,9,1),Ci=yt(bi,5,1),zt=function(e){for(var t=e[0],i=1;i<e.length;++i)e[i]>t&&(t=e[i]);return t},J=function(e,t,i){var o=t/8|0;return(e[o]|e[o+1]<<8)>>(t&7)&i},Dt=function(e,t){var i=t/8|0;return(e[i]|e[i+1]<<8|e[i+2]<<16)>>(t&7)},Li=function(e){return(e+7)/8|0},Zt=function(e,t,i){return(t==null||t<0)&&(t=0),(i==null||i>e.length)&&(i=e.length),new F(e.subarray(t,i))},Si=["unexpected EOF","invalid block type","invalid length/literal","invalid distance","stream finished","no stream handler",,"no callback","invalid UTF-8 data","extra field too long","date not in range 1980-2099","filename too long","stream finishing","invalid zip data"],V=function(e,t,i){var o=new Error(t||Si[e]);if(o.code=e,Error.captureStackTrace&&Error.captureStackTrace(o,V),!i)throw o;return o},$i=function(e,t,i,o){var n=e.length,r=o?o.length:0;if(!n||t.f&&!t.l)return i||new F(0);var s=!i,l=s||t.i!=2,a=t.i;s&&(i=new F(n*3));var h=function(Ue){var Ne=i.length;if(Ue>Ne){var je=new F(Math.max(Ne*2,Ue));je.set(i),i=je}},u=t.f||0,d=t.p||0,c=t.b||0,p=t.l,m=t.d,v=t.m,y=t.n,_=n*8;do{if(!p){u=J(e,d,1);var S=J(e,d+1,3);if(d+=3,S)if(S==1)p=wi,m=Ci,v=9,y=5;else if(S==2){var g=J(e,d,31)+257,T=J(e,d+10,15)+4,U=g+J(e,d+5,31)+1;d+=14;for(var R=new F(U),O=new F(19),$=0;$<T;++$)O[mi[$]]=J(e,d+$*3,7);d+=T*3;for(var z=zt(O),K=(1<<z)-1,N=yt(O,z,1),$=0;$<U;){var B=N[J(e,d,K)];d+=B&15;var D=B>>4;if(D<16)R[$++]=D;else{var q=0,j=0;for(D==16?(j=3+J(e,d,3),d+=2,q=R[$-1]):D==17?(j=3+J(e,d,7),d+=3):D==18&&(j=11+J(e,d,127),d+=7);j--;)R[$++]=q}}var ot=R.subarray(0,g),nt=R.subarray(g);v=zt(ot),y=zt(nt),p=yt(ot,v,1),m=yt(nt,y,1)}else V(1);else{var D=Li(d)+4,Wt=e[D-4]|e[D-3]<<8,Kt=D+Wt;if(Kt>n){a&&V(0);break}l&&h(c+Wt),i.set(e.subarray(D,Kt),c),t.b=c+=Wt,t.p=d=Kt*8,t.f=u;continue}if(d>_){a&&V(0);break}}l&&h(c+131072);for(var Fi=(1<<v)-1,Ri=(1<<y)-1,Gt=d;;Gt=d){var q=p[Dt(e,d)&Fi],ft=q>>4;if(d+=q&15,d>_){a&&V(0);break}if(q||V(2),ft<256)i[c++]=ft;else if(ft==256){Gt=d,p=null;break}else{var Ee=ft-254;if(ft>264){var $=ft-257,St=Le[$];Ee=J(e,d,(1<<St)-1)+$e[$],d+=St}var Qt=m[Dt(e,d)&Ri],Xt=Qt>>4;Qt||V(3),d+=Qt&15;var nt=gi[Xt];if(Xt>3){var St=Se[Xt];nt+=Dt(e,d)&(1<<St)-1,d+=St}if(d>_){a&&V(0);break}l&&h(c+131072);var Me=c+Ee;if(c<nt){var Te=r-nt,Bi=Math.min(nt,Me);for(Te+c<0&&V(3);c<Bi;++c)i[c]=o[Te+c]}for(;c<Me;++c)i[c]=i[c-nt]}}t.l=p,t.p=Gt,t.b=c,t.f=u,p&&(u=1,t.m=v,t.d=m,t.n=y)}while(!u);return c!=i.length&&s?Zt(i,0,c):i.subarray(0,c)},fo=new F(0),vo=function(e,t){var i={};for(var o in e)i[o]=e[o];for(var o in t)i[o]=t[o];return i},Xe=function(e,t,i){for(var o=e(),n=e.toString(),r=n.slice(n.indexOf("[")+1,n.lastIndexOf("]")).replace(/\s+/g,"").split(","),s=0;s<o.length;++s){var l=o[s],a=r[s];if(typeof l=="function"){t+=";"+a+"=";var h=l.toString();if(l.prototype)if(h.indexOf("[native code]")!=-1){var u=h.indexOf(" ",8)+1;t+=h.slice(u,h.indexOf("(",u))}else{t+=h;for(var d in l.prototype)t+=";"+a+".prototype."+d+"="+l.prototype[d].toString()}else t+=h}else i[a]=l}return t},Nt=[],mo=function(e){var t=[];for(var i in e)e[i].buffer&&t.push((e[i]=new e[i].constructor(e[i])).buffer);return t},_o=function(e,t,i,o){if(!Nt[i]){for(var n="",r={},s=e.length-1,l=0;l<s;++l)n=Xe(e[l],n,r);Nt[i]={c:Xe(e[s],n,r),e:r}}var a=vo({},Nt[i].e);return uo(Nt[i].c+";onmessage=function(e){for(var k in e.data)self[k]=e.data[k];onmessage="+t.toString()+"}",i,a,mo(a),o)},yo=function(){return[F,dt,vi,Le,Se,mi,$e,gi,wi,Ci,Rt,Si,yt,zt,J,Dt,Li,Zt,V,$i,Ae,Ai,ki]},Ai=function(e){return postMessage(e,[e.buffer])},ki=function(e){return e&&{out:e.size&&new F(e.size),dictionary:e.dictionary}},go=function(e,t,i,o,n,r){var s=_o(i,o,n,function(l,a){s.terminate(),r(l,a)});return s.postMessage([e,t],t.consume?[e.buffer]:[]),function(){s.terminate()}},X=function(e,t){return e[t]|e[t+1]<<8},G=function(e,t){return(e[t]|e[t+1]<<8|e[t+2]<<16|e[t+3]<<24)>>>0},re=function(e,t){return G(e,t)+G(e,t+4)*4294967296};function bo(e,t,i){return i||(i=t,t={}),typeof i!="function"&&V(7),go(e,t,[yo],function(o){return Ai(Ae(o.data[0],ki(o.data[1])))},1,i)}function Ae(e,t){return $i(e,{i:2},t&&t.out,t&&t.dictionary)}var pe=typeof TextDecoder<"u"&&new TextDecoder,wo=0;try{pe.decode(fo,{stream:!0}),wo=1}catch{}var Co=function(e){for(var t="",i=0;;){var o=e[i++],n=(o>127)+(o>223)+(o>239);if(i+n>e.length)return{s:t,r:Zt(e,i-1)};n?n==3?(o=((o&15)<<18|(e[i++]&63)<<12|(e[i++]&63)<<6|e[i++]&63)-65536,t+=String.fromCharCode(55296|o>>10,56320|o&1023)):n&1?t+=String.fromCharCode((o&31)<<6|e[i++]&63):t+=String.fromCharCode((o&15)<<12|(e[i++]&63)<<6|e[i++]&63):t+=String.fromCharCode(o)}};function Lt(e,t){if(t){for(var i="",o=0;o<e.length;o+=16384)i+=String.fromCharCode.apply(null,e.subarray(o,o+16384));return i}else{if(pe)return pe.decode(e);var n=Co(e),r=n.s,i=n.r;return i.length&&V(8),r}}var Lo=function(e,t){return t+30+X(e,t+26)+X(e,t+28)},So=function(e,t,i){var o=X(e,t+28),n=Lt(e.subarray(t+46,t+46+o),!(X(e,t+8)&2048)),r=t+46+o,s=G(e,t+20),l=i&&s==4294967295?$o(e,r):[s,G(e,t+24),G(e,t+42)],a=l[0],h=l[1],u=l[2];return[X(e,t+10),a,h,n,r+X(e,t+30)+X(e,t+32),u]},$o=function(e,t){for(;X(e,t)!=1;t+=4+X(e,t+2));return[re(e,t+12),re(e,t+4),re(e,t+20)]},Ye=typeof queueMicrotask=="function"?queueMicrotask:typeof setTimeout=="function"?setTimeout:function(e){e()};function Ao(e,t,i){i||(i=t,t={}),typeof i!="function"&&V(7);var o=[],n=function(){for(var y=0;y<o.length;++y)o[y]()},r={},s=function(y,_){Ye(function(){i(y,_)})};Ye(function(){s=i});for(var l=e.length-22;G(e,l)!=101010256;--l)if(!l||e.length-l>65558)return s(V(13,0,1),null),n;var a=X(e,l+8);if(a){var h=a,u=G(e,l+16),d=u==4294967295||h==65535;if(d){var c=G(e,l-12);d=G(e,c)==101075792,d&&(h=a=G(e,c+32),u=G(e,c+48))}for(var p=t&&t.filter,m=function(y){var _=So(e,u,d),S=_[0],g=_[1],T=_[2],U=_[3],R=_[4],O=_[5],$=Lo(e,O);u=R;var z=function(N,B){N?(n(),s(N,null)):(B&&(r[U]=B),--a||s(null,r))};if(!p||p({name:U,size:g,originalSize:T,compression:S}))if(!S)z(null,Zt(e,$,$+g));else if(S==8){var K=e.subarray($,$+g);if(g<32e4)try{z(null,Ae(K,{out:new F(T)}))}catch(N){z(N,null)}else o.push(bo(K,{size:T},z))}else z(V(14,"unknown compression type "+S,1),null);else z(null,null)},v=0;v<h;++v)m(v)}else s(null,{});return n}function ko(e){return(Array.isArray(e)?e:e.issues).reduce((t,i)=>{if(i.path){let o=i.path.map(({key:n})=>n).join(".");t.nested[o]=[...t.nested[o]||[],i.message]}else t.root=[...t.root||[],i.message];return t},{nested:{}})}var xo=class extends Error{constructor(t){super(t[0].message);f(this,"issues");this.name="ValiError",this.issues=t}};function Oo(e,t){return{reason:e==null?void 0:e.reason,validation:t.validation,origin:(e==null?void 0:e.origin)||"value",message:t.message,input:t.input,abortEarly:e==null?void 0:e.abortEarly,abortPipeEarly:e==null?void 0:e.abortPipeEarly}}function Po(e,t){return{reason:t,origin:e==null?void 0:e.origin,abortEarly:e==null?void 0:e.abortEarly,abortPipeEarly:e==null?void 0:e.abortPipeEarly}}function at(e,t,i,o){if(!t||!t.length)return{output:e};let n,r,s=e;for(let l of t){let a=l(s);if(a.issue){n=n||Po(i,o);let h=Oo(n,a.issue);if(r?r.push(h):r=[h],n.abortEarly||n.abortPipeEarly)break}else s=a.output}return r?{issues:r}:{output:s}}function Y(e,t){return!e||typeof e=="string"?[e,t]:[void 0,e]}function tt(e,t,i,o,n,r){return{issues:[{reason:t,validation:i,origin:(e==null?void 0:e.origin)||"value",message:o,input:n,issues:r,abortEarly:e==null?void 0:e.abortEarly,abortPipeEarly:e==null?void 0:e.abortPipeEarly}]}}function Io(e=[]){return{schema:"any",async:!1,_parse(t,i){return at(t,e,i,"any")}}}function kt(e,t,i){let[o,n]=Y(t,i);return{schema:"array",array:{item:e},async:!1,_parse(r,s){if(!Array.isArray(r))return tt(s,"type","array",o||"Invalid type",r);let l,a=[];for(let h=0;h<r.length;h++){let u=r[h],d=e._parse(u,s);if(d.issues){let c={schema:"array",input:r,key:h,value:u};for(let p of d.issues)p.path?p.path.unshift(c):p.path=[c],l==null||l.push(p);if(l||(l=d.issues),s!=null&&s.abortEarly)break}else a.push(d.output)}return l?{issues:l}:at(a,n,s,"array")}}}function se(e,t){let[i,o]=Y(e,t);return{schema:"boolean",async:!1,_parse(n,r){return typeof n!="boolean"?tt(r,"type","boolean",i||"Invalid type",n):at(n,o,r,"boolean")}}}function ti(e,t){return{schema:"literal",literal:e,async:!1,_parse(i,o){return i!==e?tt(o,"type","literal","Invalid type",i):{output:i}}}}function Eo(e,t){return{schema:"native_enum",nativeEnum:e,async:!1,_parse(i,o){return Object.values(e).includes(i)?{output:i}:tt(o,"type","native_enum","Invalid type",i)}}}function Q(e,t){let[i,o]=Y(e,t);return{schema:"number",async:!1,_parse(n,r){return typeof n!="number"?tt(r,"type","number",i||"Invalid type",n):at(n,o,r,"number")}}}function W(e,t,i){let[o,n]=Y(t,i),r;return{schema:"object",object:e,async:!1,_parse(s,l){if(!s||typeof s!="object")return tt(l,"type","object",o||"Invalid type",s);r=r||Object.entries(e);let a,h={};for(let[u,d]of r){let c=s[u],p=d._parse(c,l);if(p.issues){let m={schema:"object",input:s,key:u,value:c};for(let v of p.issues)v.path?v.path.unshift(m):v.path=[m],a==null||a.push(v);if(a||(a=p.issues),l!=null&&l.abortEarly)break}else h[u]=p.output}return a?{issues:a}:at(h,n,l,"object")}}}function L(e){return{schema:"optional",wrapped:e,async:!1,_parse(t,i){return t===void 0?{output:t}:e._parse(t,i)}}}function M(e,t){let[i,o]=Y(e,t);return{schema:"string",async:!1,_parse(n,r){return typeof n!="string"?tt(r,"type","string",i||"Invalid type",n):at(n,o,r,"string")}}}function Mo(e,t,i,o){if(typeof t=="object"&&!Array.isArray(t)){let[s,l]=Y(i,o);return[e,t,s,l]}let[n,r]=Y(t,i);return[M(),e,n,r]}var To=["__proto__","prototype","constructor"];function Uo(e,t,i,o){let[n,r,s,l]=Mo(e,t,i,o);return{schema:"record",record:{key:n,value:r},async:!1,_parse(a,h){if(!a||typeof a!="object")return tt(h,"type","record",s||"Invalid type",a);let u,d={};for(let[c,p]of Object.entries(a))if(!To.includes(c)){let m,v=n._parse(c,{origin:"key",abortEarly:h==null?void 0:h.abortEarly,abortPipeEarly:h==null?void 0:h.abortPipeEarly});if(v.issues){m={schema:"record",input:a,key:c,value:p};for(let _ of v.issues)_.path=[m],u==null||u.push(_);if(u||(u=v.issues),h!=null&&h.abortEarly)break}let y=r._parse(p,h);if(y.issues){m=m||{schema:"record",input:a,key:c,value:p};for(let _ of y.issues)_.path?_.path.unshift(m):_.path=[m],u==null||u.push(_);if(u||(u=y.issues),h!=null&&h.abortEarly)break}!v.issues&&!y.issues&&(d[v.output]=y.output)}return u?{issues:u}:at(d,l,h,"record")}}}function No(e,t,i){let[o,n]=Y(e,t);return[void 0,o,n]}function ei(e,t,i,o){let[n,r,s]=No(t,i);return{schema:"tuple",tuple:{items:e,rest:n},async:!1,_parse(l,a){if(!Array.isArray(l)||!n&&e.length!==l.length||n&&e.length>l.length)return tt(a,"type","tuple",r||"Invalid type",l);let h,u=[];for(let d=0;d<e.length;d++){let c=l[d],p=e[d]._parse(c,a);if(p.issues){let m={schema:"tuple",input:l,key:d,value:c};for(let v of p.issues)v.path?v.path.unshift(m):v.path=[m],h==null||h.push(v);if(h||(h=p.issues),a!=null&&a.abortEarly)break}else u[d]=p.output}if(n)for(let d=e.length;d<l.length;d++){let c=l[d],p=n._parse(c,a);if(p.issues){let m={schema:"tuple",input:l,key:d,value:c};for(let v of p.issues)v.path?v.path.unshift(m):v.path=[m],h==null||h.push(v);if(h||(h=p.issues),a!=null&&a.abortEarly)break}else u[d]=p.output}return h?{issues:h}:at(u,s,a,"tuple")}}}function fe(e,t){return{schema:"union",union:e,async:!1,_parse(i,o){let n,r;for(let s of e){let l=s._parse(i,o);if(l.issues)if(n)for(let a of l.issues)n.push(a);else n=l.issues;else{r=[l.output];break}}return r?{output:r[0]}:tt(o,"type","union","Invalid type",i,n)}}}function Et(e,t,i){let[o,n]=Y(t,i);return W(e.reduce((r,s)=>({...r,...s.object}),{}),o,n)}function jo(e,t,i,o){let[n,r]=Y(i,o);return W(Object.entries(e.object).reduce((s,[l,a])=>t.includes(l)?s:{...s,[l]:a},{}),n,r)}function zo(e,t,i){let o=e._parse(t,i);return o.issues?{success:!1,error:new xo(o.issues),issues:o.issues}:{success:!0,data:o.output,output:o.output}}function ve(e,t){return i=>i>e?{issue:{validation:"max_value",message:t||"Invalid value",input:i}}:{output:i}}function me(e,t){return i=>i<e?{issue:{validation:"min_value",message:t||"Invalid value",input:i}}:{output:i}}var Do=Object.create,ke=Object.defineProperty,Vo=Object.getOwnPropertyDescriptor,xi=Object.getOwnPropertyNames,Fo=Object.getPrototypeOf,Ro=Object.prototype.hasOwnProperty,Bo=(e,t,i)=>t in e?ke(e,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):e[t]=i,Mt=(e,t)=>function(){return t||(0,e[xi(e)[0]])((t={exports:{}}).exports,t),t.exports},Ho=(e,t,i,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of xi(t))!Ro.call(e,n)&&n!==i&&ke(e,n,{get:()=>t[n],enumerable:!(o=Vo(t,n))||o.enumerable});return e},qo=(e,t,i)=>(i=e!=null?Do(Fo(e)):{},Ho(!e||!e.__esModule?ke(i,"default",{value:e,enumerable:!0}):i,e)),Zo=(e,t,i)=>(Bo(e,t+"",i),i),Jo=Mt({"../../node_modules/.pnpm/@rgba-image+copy@0.1.3/node_modules/@rgba-image/copy/dist/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.copy=void 0;var t=(i,o,n=0,r=0,s=i.width-n,l=i.height-r,a=0,h=0)=>{if(n=n|0,r=r|0,s=s|0,l=l|0,a=a|0,h=h|0,s<=0||l<=0)return;let u=new Uint32Array(i.data.buffer),d=new Uint32Array(o.data.buffer);for(let c=0;c<l;c++){let p=r+c;if(p<0||p>=i.height)continue;let m=h+c;if(!(m<0||m>=o.height))for(let v=0;v<s;v++){let y=n+v;if(y<0||y>=i.width)continue;let _=a+v;if(_<0||_>=o.width)continue;let S=p*i.width+y,g=m*o.width+_;d[g]=u[S]}}};e.copy=t}}),Wo=Mt({"../../node_modules/.pnpm/@rgba-image+create-image@0.1.1/node_modules/@rgba-image/create-image/dist/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.CreateImageFactory=(t=[0,0,0,0],i=4)=>{if(i=Math.floor(i),isNaN(i)||i<1)throw TypeError("channels should be a positive non-zero number");if(!("length"in t)||t.length<i)throw TypeError(`fill should be iterable with at least ${i} members`);t=new Uint8ClampedArray(t).slice(0,i);let o=t.every(n=>n===0);return(n,r,s)=>{if(n===void 0||r===void 0)throw TypeError("Not enough arguments");if(n=Math.floor(n),r=Math.floor(r),isNaN(n)||n<1||isNaN(r)||r<1)throw TypeError("Index or size is negative or greater than the allowed amount");let l=n*r*i;if(s===void 0&&(s=new Uint8ClampedArray(l)),s instanceof Uint8ClampedArray){if(s.length!==l)throw TypeError("Index or size is negative or greater than the allowed amount");if(!o)for(let a=0;a<r;a++)for(let h=0;h<n;h++){let u=(a*n+h)*i;for(let d=0;d<i;d++)s[u+d]=t[d]}return{get width(){return n},get height(){return r},get data(){return s}}}throw TypeError("Expected data to be Uint8ClampedArray or undefined")}},e.createImage=e.CreateImageFactory()}}),Ko=Mt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/filters.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.filters=void 0;var t=14,i=(r,s)=>{if(r<=-s||r>=s||r==0)return 0;let l=r*Math.PI;return Math.sin(l)/l*Math.sin(l/s)/(l/s)},o=r=>Math.round(r*((1<<t)-1)),n=(r,s,l,a,h)=>{let u=h?2:3,d=1/l,c=Math.min(1,l),p=u/c,m=Math.floor((p+1)*2),v=new Int16Array((m+2)*s),y=0;for(let _=0;_<s;_++){let S=(_+.5)*d+a,g=Math.max(0,Math.floor(S-p)),T=Math.min(r-1,Math.ceil(S+p)),U=T-g+1,R=new Float32Array(U),O=new Int16Array(U),$=0,z=0;for(let j=g;j<=T;j++){let ot=i((j+.5-S)*c,u);$+=ot,R[z]=ot,z++}let K=0;for(let j=0;j<R.length;j++){let ot=R[j]/$;K+=ot,O[j]=o(ot)}O[s>>1]+=o(1-K);let N=0;for(;N<O.length&&O[N]===0;)N++;let B=O.length-1;for(;B>0&&O[B]===0;)B--;let D=g+N,q=B-N+1;v[y++]=D,v[y++]=q,v.set(O.subarray(N,B+1),y),y+=q}return v};e.filters=n}}),Go=Mt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/convolve.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.convolve=void 0;var t=14,i=(o,n,r,s,l,a)=>{let h=0,u=0;for(let d=0;d<s;d++){let c=0;for(let p=0;p<l;p++){let m=a[c++],v=h+m*4|0,y=0,_=0,S=0,g=0;for(let T=a[c++];T>0;T--){let U=a[c++];y=y+U*o[v]|0,_=_+U*o[v+1]|0,S=S+U*o[v+2]|0,g=g+U*o[v+3]|0,v=v+4|0}n[u]=y+8192>>t,n[u+1]=_+8192>>t,n[u+2]=S+8192>>t,n[u+3]=g+8192>>t,u=u+s*4|0}u=(d+1)*4|0,h=(d+1)*r*4|0}};e.convolve=i}}),Qo=Mt({"../../node_modules/.pnpm/@rgba-image+lanczos@0.1.1/node_modules/@rgba-image/lanczos/dist/index.js"(e){Object.defineProperty(e,"__esModule",{value:!0}),e.lanczos2=e.lanczos=void 0;var t=Jo(),i=Wo(),o=Ko(),n=Go(),r=(a,h,u=!1)=>{let d=h.width/a.width,c=h.height/a.height,p=o.filters(a.width,h.width,d,0,u),m=o.filters(a.height,h.height,c,0,u),v=new Uint8ClampedArray(h.width*a.height*4);n.convolve(a.data,v,a.width,a.height,h.width,p),n.convolve(v,h.data,a.height,h.width,h.height,m)},s=(a,h,u=0,d=0,c=a.width-u,p=a.height-d,m=0,v=0,y=h.width-m,_=h.height-v)=>{if(u=u|0,d=d|0,c=c|0,p=p|0,m=m|0,v=v|0,y=y|0,_=_|0,c<=0||p<=0||y<=0||_<=0)return;if(u===0&&d===0&&c===a.width&&p===a.height&&m===0&&v===0&&y===h.width&&_===h.height){r(a,h);return}let S=i.createImage(c,p),g=i.createImage(y,_);t.copy(a,S,u,d),r(S,g),t.copy(g,h,0,0,g.width,g.height,m,v)};e.lanczos=s;var l=(a,h,u=0,d=0,c=a.width-u,p=a.height-d,m=0,v=0,y=h.width-m,_=h.height-v)=>{if(u=u|0,d=d|0,c=c|0,p=p|0,m=m|0,v=v|0,y=y|0,_=_|0,c<=0||p<=0||y<=0||_<=0)return;if(u===0&&d===0&&c===a.width&&p===a.height&&m===0&&v===0&&y===h.width&&_===h.height){r(a,h,!0);return}let S=i.createImage(c,p),g=i.createImage(y,_);t.copy(a,S,u,d),r(S,g,!0),t.copy(g,h,0,0,g.width,g.height,m,v)};e.lanczos2=l}}),Oi=(e=>(e.Bounce="bounce",e.Normal="normal",e))(Oi||{}),Xo=Eo(Oi),Pi=W({autoplay:L(se()),defaultTheme:L(M()),direction:L(fe([ti(1),ti(-1)])),hover:L(se()),id:M(),intermission:L(Q()),loop:L(fe([se(),Q()])),playMode:L(Xo),speed:L(Q()),themeColor:L(M())}),Yo=W({animations:kt(M()),id:M()}),tn=W({activeAnimationId:L(M()),animations:kt(Pi),author:L(M()),custom:L(Uo(M(),Io())),description:L(M()),generator:L(M()),keywords:L(M()),revision:L(Q()),themes:L(kt(Yo)),states:L(kt(M())),version:L(M())}),Ii=jo(Pi,["id"]),ct=W({state:M()}),en=ct,on=Et([ct,W({ms:Q()})]),nn=Et([ct,W({count:Q()})]),rn=ct,sn=ct,an=ct,ln=Et([ct,W({threshold:L(kt(Q([me(0),ve(1)])))})]),hn=W({onAfter:L(on),onClick:L(en),onComplete:L(an),onEnter:L(nn),onMouseEnter:L(rn),onMouseLeave:L(sn),onShow:L(ln)}),dn=Et([Ii,W({playOnScroll:L(ei([Q([me(0),ve(1)]),Q([me(0),ve(1)])])),segments:L(fe([ei([Q(),Q()]),M()]))})]);Et([hn,W({animationId:L(M()),playbackSettings:dn})]);var un={jpeg:"image/jpeg",png:"image/png",gif:"image/gif",bmp:"image/bmp",svg:"image/svg+xml",webp:"image/webp",mpeg:"audio/mpeg",mp3:"audio/mp3"},ii={jpeg:[255,216,255],png:[137,80,78,71,13,10,26,10],gif:[71,73,70],bmp:[66,77],webp:[82,73,70,70,87,69,66,80],svg:[60,63,120],mp3:[73,68,51,3,0,0,0,0],mpeg:[73,68,51,3,0,0,0,0]},cn=e=>{let t=null,i=[];if(!e)return null;let o=e.substring(e.indexOf(",")+1);typeof window>"u"?t=Buffer.from(o,"base64").toString("binary"):t=atob(o);let n=new Uint8Array(t.length);for(let r=0;r<t.length;r+=1)n[r]=t.charCodeAt(r);i=Array.from(n.subarray(0,8));for(let r in ii){let s=ii[r];if(s&&i.every((l,a)=>l===s[a]))return un[r]}return null},xe=class extends Error{constructor(e,t){super(e),Zo(this,"code"),this.name="[dotlottie-js]",this.code=t}};function Ei(e){let t;if(typeof window>"u")t=Buffer.from(e).toString("base64");else{let i=Array.prototype.map.call(e,o=>String.fromCharCode(o)).join("");t=window.btoa(i)}return`data:${cn(t)};base64,${t}`}function oi(e){return"w"in e&&"h"in e&&!("xt"in e)&&"p"in e}function _e(e){return!("h"in e)&&!("w"in e)&&"p"in e&&"e"in e&&"u"in e&&"id"in e}async function Tt(e,t=()=>!0){if(!(e instanceof Uint8Array))throw new xe("DotLottie not found","INVALID_DOTLOTTIE");return await new Promise((i,o)=>{Ao(e,{filter:t},(n,r)=>{n&&o(n),i(r)})})}async function Oe(e,t,i){if(!(e instanceof Uint8Array))throw new xe("DotLottie not found","INVALID_DOTLOTTIE");return(await Tt(e,o=>o.name===t&&!0))[t]}async function ye(e){let t="manifest.json",i=(await Tt(e,o=>o.name===t))[t];if(!(typeof i>"u"))return JSON.parse(Lt(i,!1))}async function pn(e){if(!(e instanceof Uint8Array))return{success:!1,error:"DotLottie not found"};let t=await ye(e);if(typeof t>"u")return{success:!1,error:"Invalid .lottie file, manifest.json is missing"};let i=zo(tn,t);return i.success?{success:!0}:{success:!1,error:`Invalid .lottie file, manifest.json structure is invalid, ${JSON.stringify(ko(i.error).nested,null,2)}`}}async function ni(e){let t=new Uint8Array(e),i=await pn(t);if(i.error)throw new xe(i.error,"INVALID_DOTLOTTIE");return t}async function fn(e,t){let i=await Tt(e,n=>{let r=n.name.replace("audio/","");return n.name.startsWith("audio/")&&(!t||t({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let s=n.replace("audio/","");o[s]=Ei(r)}}return o}async function vn(e,t){var i;let o=new Map;for(let[r,s]of Object.entries(t))for(let l of s.assets||[])if(_e(l)){let a=l.p;o.has(a)||o.set(a,new Set),(i=o.get(a))==null||i.add(r)}let n=await fn(e,r=>o.has(r.name));for(let[r,s]of o){let l=n[r];if(l)for(let a of s){let h=t[a];for(let u of(h==null?void 0:h.assets)||[])_e(u)&&u.p===r&&(u.p=l,u.u="",u.e=1)}}}async function mn(e,t){let i=await Tt(e,n=>{let r=n.name.replace("images/","");return n.name.startsWith("images/")&&(!t||t({...n,name:r}))}),o={};for(let n in i){let r=i[n];if(r instanceof Uint8Array){let s=n.replace("images/","");o[s]=Ei(r)}}return o}async function _n(e,t){var i;let o=new Map;for(let[r,s]of Object.entries(t))for(let l of s.assets||[])if(oi(l)){let a=l.p;o.has(a)||o.set(a,new Set),(i=o.get(a))==null||i.add(r)}let n=await mn(e,r=>o.has(r.name));for(let[r,s]of o){let l=n[r];if(l)for(let a of s){let h=t[a];for(let u of(h==null?void 0:h.assets)||[])oi(u)&&u.p===r&&(u.p=l,u.u="",u.e=1)}}}async function yn(e,t,{inlineAssets:i}={},o){let n=`animations/${t}.json`,r=await Oe(e,n);if(typeof r>"u")return;let s=JSON.parse(Lt(r,!1));if(!i)return s;let l={[t]:s};return await _n(e,l),await vn(e,l),s}async function gn(e,t,i){let o=`themes/${t}.json`,n=await Oe(e,o);if(!(typeof n>"u"))return JSON.parse(Lt(n,!1))}async function bn(e,t){let i={},o=await Tt(e,n=>(n.name.replace("states/","").replace(".json",""),n.name.startsWith("states/")&&!0));for(let n in o){let r=o[n];if(r instanceof Uint8Array){let s=n.replace("states/","").replace(".json","");i[s]=Lt(r,!1)}}return i}async function wn(e,t,i){let o=`states/${t}.json`,n=await Oe(e,o);return typeof n>"u"?void 0:JSON.parse(Lt(n,!1))}qo(Qo());function w(e,t="dotLottie-common"){return new Error(`[${t}]: ${e}`)}function vt(e,t="dotLottie-common",...i){console.error(`[${t}]:`,e,...i)}function A(e,t="dotLottie-common",...i){console.warn(`[${t}]:`,e,...i)}function Cn(e=""){let t=e.trim(),i=t.lastIndexOf("/"),o=t.substring(i+1),n=o.indexOf(".");return n!==-1?o.substring(0,n):o}function Bt(e){return["v","ip","op","layers","fr","w","h"].every(t=>Object.prototype.hasOwnProperty.call(e,t))}function Ln(e){let t=e.assets;return t?t.some(i=>_e(i)):!1}function Sn(e){try{let t=JSON.parse(e);return Bt(t)}catch{return!1}}function Xn(e,t){let i=Object.keys(e).find(o=>e[o]===t);if(i===void 0)throw new Error("Value not found in the object.");return i}function ae(e){return JSON.parse(JSON.stringify(e))}var $n=class{constructor(){f(this,"_dotLottie");f(this,"_animationsMap",new Map);f(this,"_themeMap",new Map);f(this,"_stateMachinesMap",new Map);f(this,"_manifest")}get dotLottie(){return this._dotLottie}get animationsMap(){return this._animationsMap}get themeMap(){return this._themeMap}get stateMachinesMap(){return this._stateMachinesMap}get manifest(){return this._manifest}async loadFromUrl(e){let t=await fetch(e,{method:"GET",mode:"cors"});if(!t.ok)throw new Error(`Failed to load dotLottie from ${e} with status ${t.status}`);let i=t.headers.get("content-type");if(i!=null&&i.includes("application/json")){let o=await t.json();if(!Bt(o))throw new Error(`Invalid lottie JSON at ${e}`);let n=Cn(e);this._animationsMap.set(n,o);let r={activeAnimationId:n,animations:[{id:n}]};this._manifest=r}else{this._dotLottie=await ni(await t.arrayBuffer());let o=await ye(this._dotLottie);if(!o)throw new Error("Manifest not found");this._manifest=o}}loadFromLottieJSON(e){if(!Bt(e))throw new Error("Invalid lottie JSON");let t="my-animation";this._animationsMap.set(t,e);let i={activeAnimationId:t,animations:[{id:t}]};this._manifest=i}async loadFromArrayBuffer(e){this._dotLottie=await ni(e);let t=await ye(this._dotLottie);if(!t)throw new Error("Manifest not found");this._manifest=t}async getAnimation(e){if(this._animationsMap.get(e))return this._animationsMap.get(e);if(!this._dotLottie)return;let t=await yn(this._dotLottie,e,{inlineAssets:!0});return t&&this._animationsMap.set(e,t),t}async getTheme(e){if(this._themeMap.get(e))return this._themeMap.get(e);if(!this._dotLottie)return;let t=await gn(this._dotLottie,e);return t&&this._themeMap.set(e,t),t}async getStateMachines(){if(!this._dotLottie)return;let e=await bn(this._dotLottie);for(let t in e)if(t){let i=e[t];if(i){let o=JSON.parse(i);if(o){let n=o.descriptor.id;this._stateMachinesMap.get(n)||this._stateMachinesMap.set(n,o)}}}return Array.from(this._stateMachinesMap.values())}async getStateMachine(e){if(this._stateMachinesMap.get(e))return this._stateMachinesMap.get(e);if(!this._dotLottie)return;let t=await wn(this._dotLottie,e);return t&&this._stateMachinesMap.set(t.descriptor.id,t),t}};function Jt(){throw new Error("Cycle detected")}function Pe(){if(gt>1)gt--;else{for(var e,t=!1;xt!==void 0;){var i=xt;for(xt=void 0,ge++;i!==void 0;){var o=i.o;if(i.o=void 0,i.f&=-3,!(8&i.f)&&Ti(i))try{i.c()}catch(n){t||(e=n,t=!0)}i=o}}if(ge=0,gt--,t)throw e}}var k=void 0,xt=void 0,gt=0,ge=0,Ht=0;function Mi(e){if(k!==void 0){var t=e.n;if(t===void 0||t.t!==k)return t={i:0,S:e,p:k.s,n:void 0,t:k,e:void 0,x:void 0,r:t},k.s!==void 0&&(k.s.n=t),k.s=t,e.n=t,32&k.f&&e.S(t),t;if(t.i===-1)return t.i=0,t.n!==void 0&&(t.n.p=t.p,t.p!==void 0&&(t.p.n=t.n),t.p=k.s,t.n=void 0,k.s.n=t,k.s=t),t}}function H(e){this.v=e,this.i=0,this.n=void 0,this.t=void 0}H.prototype.h=function(){return!0};H.prototype.S=function(e){this.t!==e&&e.e===void 0&&(e.x=this.t,this.t!==void 0&&(this.t.e=e),this.t=e)};H.prototype.U=function(e){if(this.t!==void 0){var t=e.e,i=e.x;t!==void 0&&(t.x=i,e.e=void 0),i!==void 0&&(i.e=t,e.x=void 0),e===this.t&&(this.t=i)}};H.prototype.subscribe=function(e){var t=this;return xn(function(){var i=t.value,o=32&this.f;this.f&=-33;try{e(i)}finally{this.f|=o}})};H.prototype.valueOf=function(){return this.value};H.prototype.toString=function(){return this.value+""};H.prototype.toJSON=function(){return this.value};H.prototype.peek=function(){return this.v};Object.defineProperty(H.prototype,"value",{get:function(){var e=Mi(this);return e!==void 0&&(e.i=this.i),this.v},set:function(e){if(k instanceof pt&&function(){throw new Error("Computed cannot have side-effects")}(),e!==this.v){ge>100&&Jt(),this.v=e,this.i++,Ht++,gt++;try{for(var t=this.t;t!==void 0;t=t.x)t.t.N()}finally{Pe()}}}});function An(e){return new H(e)}function Ti(e){for(var t=e.s;t!==void 0;t=t.n)if(t.S.i!==t.i||!t.S.h()||t.S.i!==t.i)return!0;return!1}function Ui(e){for(var t=e.s;t!==void 0;t=t.n){var i=t.S.n;if(i!==void 0&&(t.r=i),t.S.n=t,t.i=-1,t.n===void 0){e.s=t;break}}}function Ni(e){for(var t=e.s,i=void 0;t!==void 0;){var o=t.p;t.i===-1?(t.S.U(t),o!==void 0&&(o.n=t.n),t.n!==void 0&&(t.n.p=o)):i=t,t.S.n=t.r,t.r!==void 0&&(t.r=void 0),t=o}e.s=i}function pt(e){H.call(this,void 0),this.x=e,this.s=void 0,this.g=Ht-1,this.f=4}(pt.prototype=new H).h=function(){if(this.f&=-3,1&this.f)return!1;if((36&this.f)==32||(this.f&=-5,this.g===Ht))return!0;if(this.g=Ht,this.f|=1,this.i>0&&!Ti(this))return this.f&=-2,!0;var e=k;try{Ui(this),k=this;var t=this.x();(16&this.f||this.v!==t||this.i===0)&&(this.v=t,this.f&=-17,this.i++)}catch(i){this.v=i,this.f|=16,this.i++}return k=e,Ni(this),this.f&=-2,!0};pt.prototype.S=function(e){if(this.t===void 0){this.f|=36;for(var t=this.s;t!==void 0;t=t.n)t.S.S(t)}H.prototype.S.call(this,e)};pt.prototype.U=function(e){if(this.t!==void 0&&(H.prototype.U.call(this,e),this.t===void 0)){this.f&=-33;for(var t=this.s;t!==void 0;t=t.n)t.S.U(t)}};pt.prototype.N=function(){if(!(2&this.f)){this.f|=6;for(var e=this.t;e!==void 0;e=e.x)e.t.N()}};pt.prototype.peek=function(){if(this.h()||Jt(),16&this.f)throw this.v;return this.v};Object.defineProperty(pt.prototype,"value",{get:function(){1&this.f&&Jt();var e=Mi(this);if(this.h(),e!==void 0&&(e.i=this.i),16&this.f)throw this.v;return this.v}});function ji(e){var t=e.u;if(e.u=void 0,typeof t=="function"){gt++;var i=k;k=void 0;try{t()}catch(o){throw e.f&=-2,e.f|=8,Ie(e),o}finally{k=i,Pe()}}}function Ie(e){for(var t=e.s;t!==void 0;t=t.n)t.S.U(t);e.x=void 0,e.s=void 0,ji(e)}function kn(e){if(k!==this)throw new Error("Out-of-order effect");Ni(this),k=e,this.f&=-2,8&this.f&&Ie(this),Pe()}function Ut(e){this.x=e,this.u=void 0,this.s=void 0,this.o=void 0,this.f=32}Ut.prototype.c=function(){var e=this.S();try{if(8&this.f||this.x===void 0)return;var t=this.x();typeof t=="function"&&(this.u=t)}finally{e()}};Ut.prototype.S=function(){1&this.f&&Jt(),this.f|=1,this.f&=-9,ji(this),Ui(this),gt++;var e=k;return k=this,kn.bind(this,e)};Ut.prototype.N=function(){2&this.f||(this.f|=2,this.o=xt,xt=this)};Ut.prototype.d=function(){this.f|=8,1&this.f||Ie(this)};function xn(e){var t=new Ut(e);try{t.c()}catch(i){throw t.d(),i}return t.d.bind(t)}var On=class{constructor(e){f(this,"_state");f(this,"_prevState");this._prevState=e,this._state=An(e)}setState(e){this._prevState=this._state.value,this._state.value=e}subscribe(e){return this._state.subscribe(t=>e(t,this._prevState))}};async function Pn(e,t){let[{DotLottieStateMachineManager:i}]=await Promise.all([it(()=>import("./dotlottie-state-machine-manager-2E7RUGJG-NTQ25VSR-BYgKJQjq.js"),[])]);if(!e.length)throw w("No state machines available inside this .lottie!");return new i(e,t)}var In={dependencies:{"lottie-web":"^5.12.2"}},rt=(e=>(e.Complete="complete",e.DataFail="data_fail",e.DataReady="data_ready",e.Error="error",e.Frame="frame",e.Freeze="freeze",e.LoopComplete="loopComplete",e.Pause="pause",e.Play="play",e.Ready="ready",e.Stop="stop",e.VisibilityChange="visibilityChange",e))(rt||{}),_t=(e=>(e.Completed="completed",e.Error="error",e.Fetching="fetching",e.Frozen="frozen",e.Initial="initial",e.Loading="loading",e.Paused="paused",e.Playing="playing",e.Ready="ready",e.Stopped="stopped",e))(_t||{}),zi=(e=>(e.Bounce="bounce",e.Normal="normal",e))(zi||{}),Z={autoplay:!1,direction:1,hover:!1,intermission:0,loop:!1,playMode:"normal",speed:1,defaultTheme:""},Di={activeStateId:"",autoplay:!1,currentState:"initial",frame:0,seeker:0,direction:1,hover:!1,loop:!1,playMode:"normal",speed:1,background:"transparent",intermission:0,currentAnimationId:void 0,visibilityPercentage:0},ri=class{constructor(e,t,i){f(this,"_lottie");f(this,"_src");f(this,"_animationConfig");f(this,"_prevUserPlaybackOptions",{});f(this,"_userPlaybackOptions");f(this,"_hover",!1);f(this,"_loop",!1);f(this,"_counter",0);f(this,"_intermission",0);f(this,"_counterInterval",null);f(this,"_container",null);f(this,"_name");f(this,"_mode","normal");f(this,"_background","transparent");f(this,"_animation");f(this,"_defaultTheme");f(this,"_activeAnimationId");f(this,"_currentAnimationId");f(this,"_testId");f(this,"_listeners",new Map);f(this,"_currentState","initial");f(this,"_stateBeforeFreeze","initial");f(this,"state",new On(Di));f(this,"_light",!1);f(this,"_worker",!1);f(this,"_dotLottieLoader",new $n);f(this,"_activeStateId");f(this,"_inInteractiveMode",!1);f(this,"_scrollTicking",!1);f(this,"_scrollCallback");f(this,"_onShowIntersectionObserver");f(this,"_visibilityPercentage",0);f(this,"_audios",[]);f(this,"_stateMachineManager");typeof e=="string"?this._src=e:this._src=ae(e),i!=null&&i.testId&&(this._testId=i.testId),this._defaultTheme=(i==null?void 0:i.defaultTheme)||"",this._userPlaybackOptions=this._validatePlaybackOptions(i||{}),typeof(i==null?void 0:i.activeAnimationId)=="string"&&(this._activeAnimationId=i.activeAnimationId),this._container=t||null,typeof(i==null?void 0:i.background)=="string"&&this.setBackground(i.background),typeof(i==null?void 0:i.activeStateId)<"u"&&(this._activeStateId=i.activeStateId);let{rendererSettings:o,...n}=i||{};this._animationConfig={loop:!1,autoplay:!1,renderer:"svg",rendererSettings:{clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0,filterSize:{width:"200%",height:"200%",x:"-50%",y:"-50%"},...o},...n},i!=null&&i.light&&(this._light=i.light),i!=null&&i.worker&&(this._worker=i.worker),this._listenToHover(),this._listenToVisibilityChange()}_listenToHover(){var e,t,i,o;let n=()=>{this._hover&&this.currentState!=="playing"&&this.play()},r=()=>{this._hover&&this.currentState==="playing"&&this.stop()};(e=this._container)==null||e.removeEventListener("mouseenter",n),(t=this._container)==null||t.removeEventListener("mouseleave",r),(i=this._container)==null||i.addEventListener("mouseleave",r),(o=this._container)==null||o.addEventListener("mouseenter",n)}_onVisibilityChange(){!this._lottie||typeof document>"u"||(document.hidden&&this.currentState==="playing"?this.freeze():this.currentState==="frozen"&&this.unfreeze())}_listenToVisibilityChange(){typeof document<"u"&&typeof document.hidden<"u"&&document.addEventListener("visibilitychange",()=>this._onVisibilityChange())}_getOption(e){var t;if(typeof this._userPlaybackOptions[e]<"u")return this._userPlaybackOptions[e];let i=(t=this._dotLottieLoader.manifest)==null?void 0:t.animations.find(o=>o.id===this._currentAnimationId);return i&&typeof i[e]<"u"?i[e]:Z[e]}_getPlaybackOptions(){let e={};for(let t in Z)typeof Z[t]<"u"&&(e[t]=this._getOption(t));return e}_setPlayerState(e){var t,i,o;let n=e(this._getPlaybackOptions());try{Ii._parse(n)}catch{A(`Invalid PlaybackOptions, ${JSON.stringify(n,null,2)}`);return}typeof n.defaultTheme<"u"&&(this._defaultTheme=n.defaultTheme),typeof n.playMode<"u"&&(this._mode=n.playMode),typeof n.intermission<"u"&&(this._intermission=n.intermission),typeof n.hover<"u"&&(this._hover=n.hover),typeof n.loop<"u"&&(this.clearCountTimer(),this._loop=n.loop,this._counter=0,(t=this._lottie)==null||t.setLoop(typeof n.loop=="number"?!0:n.loop)),typeof n.speed<"u"&&((i=this._lottie)==null||i.setSpeed(n.speed)),typeof n.autoplay<"u"&&this._lottie&&(this._lottie.autoplay=n.autoplay),typeof n.direction<"u"&&((o=this._lottie)==null||o.setDirection(n.direction))}_getOptionsFromAnimation(e){let{id:t,...i}=e;return{...Z,...i}}_updateTestData(){!this._testId||!this._lottie||(window.dotLottiePlayer||(window.dotLottiePlayer={[this._testId]:{}}),window.dotLottiePlayer[this._testId]={direction:this._lottie.playDirection,currentState:this._currentState,loop:this.loop,mode:this._mode,speed:this._lottie.playSpeed})}setContainer(e){e!==this._container&&(this._container=e,this.setBackground(this._background),this._listenToHover())}get currentState(){return this._currentState}clearCountTimer(){this._counterInterval&&clearInterval(this._counterInterval)}setCurrentState(e){this._currentState=e,this._notify(),this._updateTestData()}static isPathJSON(e){var t;return((t=e.split(".").pop())==null?void 0:t.toLowerCase())==="json"}get src(){return this._src}updateSrc(e){this._src!==e&&(typeof e=="string"?this._src=e:this._src=ae(e),this._activeAnimationId=void 0,this._currentAnimationId=void 0,this.load())}get intermission(){return this._intermission}get hover(){return this._hover}setHover(e){typeof e=="boolean"&&(this._hover=e,this._userPlaybackOptions.hover=e,this._notify())}setIntermission(e){this._intermission=e,this._userPlaybackOptions.intermission=e,this._notify()}get mode(){return this._mode}get animations(){return this._dotLottieLoader.animationsMap}get themes(){return this._dotLottieLoader.themeMap}setMode(e){typeof e=="string"&&(this._mode=e,this._userPlaybackOptions.playMode=e,this._setPlayerState(()=>({playMode:e})),this._notify(),this._updateTestData())}get container(){if(this._container)return this._container}goToAndPlay(e,t,i){if(!this._lottie||["loading"].includes(this._currentState)){A("goToAndPlay() Can't use whilst loading.");return}this._lottie.goToAndPlay(e,t,i),this.setCurrentState("playing")}goToAndStop(e,t,i){if(!this._lottie||["loading"].includes(this._currentState)){A("goToAndStop() Can't use whilst loading.");return}this._lottie.goToAndStop(e,t,i),this.setCurrentState("stopped")}seek(e){if(!this._lottie||["loading"].includes(this._currentState)){A("seek() Can't use whilst loading.");return}let t=e;typeof t=="number"&&(t=Math.round(t));let i=/^(\d+)(%?)$/u.exec(t.toString());if(!i)return;let o=i[2]==="%"?this.totalFrames*Number(i[1])/100:i[1];o!==void 0&&(this._lottie.goToAndPlay(o,!0),this.currentState==="playing"?this.play():this.currentState==="frozen"?this.freeze():this.pause())}_areNumbersInRange(e,t){return e>=0&&e<=1&&t>=0&&t<=1}_updatePosition(e,t,i){let[o,n]=e??[0,this.totalFrames-1],[r,s]=t??[0,1];if(!this._areNumbersInRange(r,s)){vt("threshold values must be between 0 and 1");return}if(this.container){let{height:l,top:a}=this.container.getBoundingClientRect(),h=window.innerHeight-a,u=window.innerHeight+l,d=h/u,c=o+Math.round((d-r)/(s-r)*(n-o));i&&i(d),this.goToAndStop(c,!0),(c>=n||d>=s)&&this._handleAnimationComplete()}this._scrollTicking=!1}_requestTick(e,t,i){this._scrollTicking||(requestAnimationFrame(()=>this._updatePosition(e,t,i)),this._scrollTicking=!0)}playOnScroll(e){this.stop(),this._scrollCallback&&this.stopPlayOnScroll(),this._scrollCallback=()=>this._requestTick(e==null?void 0:e.segments,e==null?void 0:e.threshold,e==null?void 0:e.positionCallback),window.addEventListener("scroll",this._scrollCallback)}stopPlayOnScroll(){this._scrollCallback&&(window.removeEventListener("scroll",this._scrollCallback),this._scrollCallback=void 0)}stopPlayOnShow(){this._onShowIntersectionObserver&&(this._onShowIntersectionObserver.disconnect(),this._onShowIntersectionObserver=void 0)}addIntersectionObserver(e){if(!this.container)throw w("Can't play on show, player container element not available.");let t={root:null,rootMargin:"0px",threshold:e!=null&&e.threshold?e.threshold:[0,1]},i=o=>{o.forEach(n=>{var r,s;this._visibilityPercentage=n.intersectionRatio*100,n.isIntersecting?(e!=null&&e.callbackOnIntersect&&e.callbackOnIntersect(this._visibilityPercentage),(r=this._container)==null||r.dispatchEvent(new Event("visibilityChange"))):e!=null&&e.callbackOnIntersect&&(e.callbackOnIntersect(0),(s=this._container)==null||s.dispatchEvent(new Event("visibilityChange")))})};this._onShowIntersectionObserver=new IntersectionObserver(i,t),this._onShowIntersectionObserver.observe(this.container)}playOnShow(e){var t;if(this.stop(),!this.container)throw w("Can't play on show, player container element not available.");this._onShowIntersectionObserver&&this.stopPlayOnShow(),this.addIntersectionObserver({threshold:(t=e==null?void 0:e.threshold)!=null?t:[],callbackOnIntersect:i=>{i===0?this.pause():this.play()}})}_validatePlaybackOptions(e){if(!e)return{};let t={};for(let[i,o]of Object.entries(e))switch(i){case"autoplay":typeof o=="boolean"&&(t.autoplay=o);break;case"direction":typeof o=="number"&&[1,-1].includes(o)&&(t.direction=o);break;case"loop":(typeof o=="boolean"||typeof o=="number")&&(t.loop=o);break;case"playMode":typeof o=="string"&&["normal","bounce"].includes(o)&&(t.playMode=o);break;case"speed":typeof o=="number"&&(t.speed=o);break;case"themeColor":typeof o=="string"&&(t.themeColor=o);break;case"hover":typeof o=="boolean"&&(t.hover=o);break;case"intermission":typeof o=="number"&&(t.intermission=o);break;case"defaultTheme":typeof o=="string"&&(t.defaultTheme=o);break}return this._requireValidPlaybackOptions(t),t}_requireAnimationsInTheManifest(){var e;if(!((e=this._dotLottieLoader.manifest)!=null&&e.animations.length))throw w("No animations found in manifest.")}_requireAnimationsToBeLoaded(){if(this._dotLottieLoader.animationsMap.size===0)throw w("No animations have been loaded.")}async play(e,t){var i,o;if(["initial","loading"].includes(this._currentState)){A("Player unable to play whilst loading.");return}if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),this._lottie&&!e){this._lottie.playDirection===-1&&this._lottie.currentFrame===0?this._lottie.goToAndPlay(this._lottie.totalFrames,!0):this._lottie.play(),this.setCurrentState("playing");return}if(typeof e=="number"){let n=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations[e];if(!n)throw w("animation not found.");typeof t=="function"?await this.render({id:n.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}if(typeof e=="string"){let n=(o=this._dotLottieLoader.manifest)==null?void 0:o.animations.find(r=>r.id===e);if(!n)throw w("animation not found.");typeof t=="function"?await this.render({id:n.id,...t(this._getPlaybackOptions(),this._getOptionsFromAnimation(n))}):await this.render({id:n.id})}}playSegments(e,t){if(!this._lottie||["loading"].includes(this._currentState)){A("playSegments() Can't use whilst loading.");return}this._lottie.playSegments(e,t),this.setCurrentState("playing")}resetSegments(e){if(!this._lottie||["loading"].includes(this._currentState)){A("resetSegments() Can't use whilst loading.");return}this._lottie.resetSegments(e)}togglePlay(){this.currentState==="playing"?this.pause():this.play()}_getAnimationByIdOrIndex(e){var t,i;if(this._requireAnimationsInTheManifest(),this._requireAnimationsToBeLoaded(),typeof e=="number"){let o=(t=this._dotLottieLoader.manifest)==null?void 0:t.animations[e];if(!o)throw w("animation not found.");return o}if(typeof e=="string"){let o=(i=this._dotLottieLoader.manifest)==null?void 0:i.animations.find(n=>n.id===e);if(!o)throw w("animation not found.");return o}throw w("first param must be a number or string")}get activeAnimationId(){return this._getActiveAnimationId()}get currentAnimationId(){return this._currentAnimationId}get activeStateId(){return this._activeStateId}async _startInteractivity(e){if(!this._inInteractiveMode){vt("Can't start interactivity. Not in interactive mode. Call enterInteractiveMode(stateId: string) to start.");return}if(this._dotLottieLoader.stateMachinesMap.size===0&&await this._dotLottieLoader.getStateMachines(),this._dotLottieLoader.stateMachinesMap.size===0)throw w("No interactivity states are available.");if(e==="undefined")throw w("stateId is not specified.");this._stateMachineManager||(this._stateMachineManager=await Pn(Array.from(this._dotLottieLoader.stateMachinesMap.values()),this)),this._stateMachineManager.start(e)}enterInteractiveMode(e){var t;if(e)this._inInteractiveMode||(this._prevUserPlaybackOptions={...this._userPlaybackOptions}),this._inInteractiveMode&&((t=this._stateMachineManager)==null||t.stop()),this._activeStateId=e,this._inInteractiveMode=!0,this._startInteractivity(e);else throw w("stateId must be a non-empty string.")}exitInteractiveMode(){var e;this._inInteractiveMode&&(this._inInteractiveMode=!1,this._activeStateId="",(e=this._stateMachineManager)==null||e.stop(),this._userPlaybackOptions={},this._userPlaybackOptions={...this._prevUserPlaybackOptions},this._prevUserPlaybackOptions={},this.reset())}reset(){var e;let t=this._getActiveAnimationId(),i=(e=this._dotLottieLoader.manifest)==null?void 0:e.animations.find(o=>o.id===t);if(this._inInteractiveMode&&this.exitInteractiveMode(),!i)throw w("animation not found.");this.play(t)}previous(e){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw w("manifest not found.");if(this._inInteractiveMode){A("previous() is not supported in interactive mode.");return}let t=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(t===-1)throw w("animation not found.");let i=this._dotLottieLoader.manifest.animations[(t-1+this._dotLottieLoader.manifest.animations.length)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw w("animation not found.");typeof e=="function"?this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}next(e){if(!this._dotLottieLoader.manifest||!this._dotLottieLoader.manifest.animations.length)throw w("manifest not found.");if(this._inInteractiveMode){A("next() is not supported in interactive mode.");return}let t=this._dotLottieLoader.manifest.animations.findIndex(o=>o.id===this._currentAnimationId);if(t===-1)throw w("animation not found.");let i=this._dotLottieLoader.manifest.animations[(t+1)%this._dotLottieLoader.manifest.animations.length];if(!i||!i.id)throw w("animation not found.");typeof e=="function"?this.render({id:i.id,...e(this._getPlaybackOptions(),this._getOptionsFromAnimation(i))}):this.render({id:i.id})}getManifest(){return this._dotLottieLoader.manifest}resize(){if(!this._lottie||["loading"].includes(this._currentState)){A("resize() Can't use whilst loading.");return}this._lottie.resize()}stop(){if(!this._lottie||["loading"].includes(this._currentState)){A("stop() Can't use whilst loading.");return}this.clearCountTimer(),this._counter=0,this._setPlayerState(()=>({direction:this._getOption("direction")})),this._lottie.stop(),this.setCurrentState("stopped")}pause(){if(!this._lottie||["loading"].includes(this._currentState)){A("pause() Can't use whilst loading.");return}this.clearCountTimer(),this._lottie.pause(),this.setCurrentState("paused")}freeze(){if(!this._lottie||["loading"].includes(this._currentState)){A("freeze() Can't use whilst loading.");return}this.currentState!=="frozen"&&(this._stateBeforeFreeze=this.currentState),this._lottie.pause(),this.setCurrentState("frozen")}unfreeze(){if(!this._lottie||["loading"].includes(this._currentState)){A("unfreeze() Can't use whilst loading.");return}this._stateBeforeFreeze==="playing"?this.play():this.pause()}destroy(){var e,t;(e=this._container)!=null&&e.__lottie&&(this._container.__lottie.destroy(),this._container.__lottie=null),this._audios.length&&(this._audios.forEach(i=>{i.unload()}),this._audios=[]),this.clearCountTimer(),typeof document<"u"&&document.removeEventListener("visibilitychange",()=>this._onVisibilityChange()),this._counter=0,(t=this._lottie)==null||t.destroy(),this._lottie=void 0}getAnimationInstance(){return this._lottie}static getLottieWebVersion(){return`${In.dependencies["lottie-web"]}`}addEventListener(e,t){var i,o,n;this._listeners.has(e)||this._listeners.set(e,new Set),(i=this._listeners.get(e))==null||i.add(t);try{e==="complete"?(o=this._container)==null||o.addEventListener(e,t):(n=this._lottie)==null||n.addEventListener(e,t)}catch(r){vt(`addEventListener ${r}`)}}getState(){var e,t,i,o,n,r,s;return{autoplay:(t=(e=this._lottie)==null?void 0:e.autoplay)!=null?t:!1,currentState:this._currentState,frame:this._frame,visibilityPercentage:this._visibilityPercentage,seeker:this._seeker,direction:(o=(i=this._lottie)==null?void 0:i.playDirection)!=null?o:1,hover:this._hover,loop:this._loop||!1,playMode:this._mode,speed:(r=(n=this._lottie)==null?void 0:n.playSpeed)!=null?r:1,background:this._background,intermission:this._intermission,defaultTheme:this._defaultTheme,currentAnimationId:this._currentAnimationId,activeStateId:(s=this._activeStateId)!=null?s:""}}_notify(){this.state.setState(this.getState())}get totalFrames(){var e;return((e=this._lottie)==null?void 0:e.totalFrames)||0}get direction(){return this._lottie?this._lottie.playDirection:1}setDirection(e){this._requireValidDirection(e),this._setPlayerState(()=>({direction:e})),this._userPlaybackOptions.direction=e}get speed(){var e;return((e=this._lottie)==null?void 0:e.playSpeed)||1}setSpeed(e){this._requireValidSpeed(e),this._setPlayerState(()=>({speed:e})),this._userPlaybackOptions.speed=e}get autoplay(){var e,t;return(t=(e=this._lottie)==null?void 0:e.autoplay)!=null?t:!1}setAutoplay(e){if(this._requireValidAutoplay(e),!this._lottie||["loading"].includes(this._currentState)){A("setAutoplay() Can't use whilst loading.");return}this._setPlayerState(()=>({autoplay:e})),this._userPlaybackOptions.autoplay=e}toggleAutoplay(){if(!this._lottie||["loading"].includes(this._currentState)){A("toggleAutoplay() Can't use whilst loading.");return}this.setAutoplay(!this._lottie.autoplay)}get defaultTheme(){return this._defaultTheme}setDefaultTheme(e){this._setPlayerState(()=>({defaultTheme:e})),this._userPlaybackOptions.defaultTheme=e,this._animation&&this.render()}get loop(){return this._loop}setLoop(e){this._requireValidLoop(e),this._setPlayerState(()=>({loop:e})),this._userPlaybackOptions.loop=e}toggleLoop(){if(!this._lottie||["loading"].includes(this._currentState)){A("toggleLoop() Can't use whilst loading.");return}this.setLoop(!this._loop)}get background(){return this._background}setBackground(e){this._requireValidBackground(e),this._background=e,this._container&&(this._container.style.backgroundColor=e)}get _frame(){return this._lottie?this.currentState==="completed"?this.direction===-1?0:this._lottie.totalFrames:this._lottie.currentFrame:0}get _seeker(){return this._lottie?this._frame/this._lottie.totalFrames*100:0}async revertToManifestValues(e){var t;let i;!Array.isArray(e)||e.length===0?i=["autoplay","defaultTheme","direction","hover","intermission","loop","playMode","speed","activeAnimationId"]:i=e;let o=!1;if(i.includes("activeAnimationId")){let n=(t=this._dotLottieLoader.manifest)==null?void 0:t.activeAnimationId,r=this._getAnimationByIdOrIndex(n||0);this._activeAnimationId=n,await this._setCurrentAnimation(r.id),o=!0}i.forEach(n=>{switch(n){case"autoplay":delete this._userPlaybackOptions.autoplay,this.setAutoplay(this._getOption("autoplay"));break;case"defaultTheme":delete this._userPlaybackOptions.defaultTheme,this.setDefaultTheme(this._getOption("defaultTheme"));break;case"direction":delete this._userPlaybackOptions.direction,this.setDirection(this._getOption("direction"));break;case"hover":delete this._userPlaybackOptions.hover,this.setHover(this._getOption("hover"));break;case"intermission":delete this._userPlaybackOptions.intermission,this.setIntermission(this._getOption("intermission"));break;case"loop":delete this._userPlaybackOptions.loop,this.setLoop(this._getOption("loop"));break;case"playMode":delete this._userPlaybackOptions.playMode,this.setMode(this._getOption("playMode")),this.setDirection(this._getOption("direction"));break;case"speed":delete this._userPlaybackOptions.speed,this.setSpeed(this._getOption("speed"));break}}),o&&this.render()}removeEventListener(e,t){var i,o,n;try{e==="complete"?(i=this._container)==null||i.removeEventListener(e,t):(o=this._lottie)==null||o.removeEventListener(e,t),(n=this._listeners.get(e))==null||n.delete(t)}catch(r){vt("removeEventListener",r)}}_handleAnimationComplete(){var e;typeof this._loop=="number"&&this.stop();let t=this.direction===-1?0:this.totalFrames-1;this.goToAndStop(t,!0),this._counter=0,this.clearCountTimer(),this.setCurrentState("completed"),(e=this._container)==null||e.dispatchEvent(new Event("complete"))}addEventListeners(){var e;if(!this._lottie||["loading"].includes(this._currentState)){A("addEventListeners() Can't use whilst loading.");return}this._lottie.addEventListener("enterFrame",()=>{var t;if(!this._lottie){A("enterFrame event : Lottie is undefined.");return}Math.floor(this._lottie.currentFrame)===0&&this.direction===-1&&((t=this._container)==null||t.dispatchEvent(new Event("complete")),this.loop||this.setCurrentState("completed")),this._notify()}),this._lottie.addEventListener("loopComplete",()=>{var t;if(!this._lottie){A("loopComplete event : Lottie is undefined.");return}(t=this._container)==null||t.dispatchEvent(new Event("loopComplete")),this.intermission>0&&this.pause();let i=this._lottie.playDirection;if(typeof this._loop=="number"&&this._loop>0&&(this._counter+=this._mode==="bounce"?.5:1,this._counter>=this._loop)){this._handleAnimationComplete();return}this._mode==="bounce"&&typeof i=="number"&&(i=Number(i)*-1);let o=i===-1?this._lottie.totalFrames-1:0;this.intermission?(this.goToAndPlay(o,!0),this.pause(),this._counterInterval=window.setTimeout(()=>{this._lottie&&(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(o,!0))},this._intermission)):(this._setPlayerState(()=>({direction:i})),this.goToAndPlay(i===-1?this.totalFrames-1:0,!0))}),this._lottie.addEventListener("complete",()=>{if(this._lottie&&this._loop===!1&&this._mode==="bounce"){if(this._counter+=.5,this._counter>=1){this._handleAnimationComplete();return}this._counterInterval=window.setTimeout(()=>{if(!this._lottie)return;let t=this._lottie.playDirection;this._mode==="bounce"&&typeof t=="number"&&(t=Number(t)*-1);let i=t===-1?this.totalFrames-1:0;this._setPlayerState(()=>({direction:t})),this.goToAndPlay(i,!0)},this._intermission)}else this._handleAnimationComplete()});for(let[t,i]of this._listeners)if(t==="complete")for(let o of i)(e=this._container)==null||e.addEventListener(t,o);else for(let o of i)this._lottie.addEventListener(t,o)}async _setCurrentAnimation(e){this._currentState="loading";let t=await this._dotLottieLoader.getAnimation(e);this._currentAnimationId=e,this._animation=t,this._currentState="ready"}async _getAudioFactory(){if(this._animation&&Ln(this._animation)){let{DotLottieAudio:e}=await it(()=>import("./dotlottie-audio-75C54RUV-CLeub0cW.js"),[]);return t=>{let i=new e({src:[t]});return this._audios.push(i),i}}return null}async render(e){var t,i,o,n,r,s,l,a,h,u,d,c,p,m,v,y,_,S;if(e!=null&&e.id)await this._setCurrentAnimation(e.id);else if(!this._animation)throw w("no animation selected");let g=(t=Z.loop)!=null?t:!1,T=(i=Z.autoplay)!=null?i:!1,U=(o=Z.playMode)!=null?o:"normal",R=(n=Z.intermission)!=null?n:0,O=(r=Z.hover)!=null?r:!1,$=(s=Z.direction)!=null?s:1,z=(l=Z.speed)!=null?l:1,K=(a=Z.defaultTheme)!=null?a:"";g=(h=e==null?void 0:e.loop)!=null?h:this._getOption("loop"),T=(u=e==null?void 0:e.autoplay)!=null?u:this._getOption("autoplay"),U=(d=e==null?void 0:e.playMode)!=null?d:this._getOption("playMode"),R=(c=e==null?void 0:e.intermission)!=null?c:this._getOption("intermission"),O=(p=e==null?void 0:e.hover)!=null?p:this._getOption("hover"),$=(m=e==null?void 0:e.direction)!=null?m:this._getOption("direction"),z=(v=e==null?void 0:e.speed)!=null?v:this._getOption("speed"),K=(y=e==null?void 0:e.defaultTheme)!=null?y:this._getOption("defaultTheme");let N={...this._animationConfig,autoplay:O?!1:T,loop:typeof g=="number"?!0:g,renderer:this._worker?"svg":(_=this._animationConfig.renderer)!=null?_:"svg"},[B,D,q]=await Promise.all([this._dotLottieLoader.getTheme(K),this._getLottiePlayerInstance(),this._getAudioFactory()]);if(B&&this._animation?(this._animation=ae(this._animation),this._animation.slots=B):this._animation=await this._dotLottieLoader.getAnimation((S=this._currentAnimationId)!=null?S:""),this._activeStateId&&!this._inInteractiveMode){this.enterInteractiveMode(this._activeStateId);return}this.destroy(),this._setPlayerState(()=>({defaultTheme:K,playMode:U,intermission:R,hover:O,loop:g})),q?this._lottie=D.loadAnimation({...N,container:this._container,animationData:this._animation,audioFactory:q}):this._lottie=D.loadAnimation({...N,container:this._container,animationData:this._animation}),typeof this._lottie.resetSegments>"u"&&(this._lottie.resetSegments=()=>{var j;(j=this._lottie)==null||j.playSegments([0,this._lottie.totalFrames],!0)}),this.addEventListeners(),this._container&&(this._container.__lottie=this._lottie),this._setPlayerState(()=>({direction:$,speed:z})),T&&!O&&(g===!1&&$===-1?this.play():this.setCurrentState("playing")),this._updateTestData()}async _getLottiePlayerInstance(){var e;let t=(e=this._animationConfig.renderer)!=null?e:"svg",i;if(this._worker)return t!=="svg"&&A("Worker is only supported with svg renderer. Change or remove renderer prop to get rid of this warning."),i=await it(()=>import("./lottie_worker-Q23FJ6ZR-YP5OKMTN-C3vat8xo.js"),[]),i.default;switch(t){case"svg":{this._light?i=await it(()=>import("./lottie_light-KMJEUZFY-TNG7ODX7-DbxMIYkV.js"),[]):i=await it(()=>import("./lottie_svg-MJGYILXD-NRTSROOT-UeOyDnl7.js"),[]);break}case"canvas":{this._light?i=await it(()=>import("./lottie_light_canvas-B5UTTNXA-PRI6IBWW-BFtM4LAg.js"),[]):i=await it(()=>import("./lottie_canvas-CDSUBMCL-MZNYH5VV-DuqDI9Ic.js"),[]);break}case"html":{this._light?i=await it(()=>import("./lottie_light_html-SLCECTRT-SYWXEBDN-QAeGihkR.js"),[]):i=await it(()=>import("./lottie_html-X3TYKVQI-L6774NQS-HxpYi2Gl.js"),[]);break}default:throw new Error(`Invalid renderer: ${t}`)}return i.default}_getActiveAnimationId(){var e,t,i,o;let n=this._dotLottieLoader.manifest;return(o=(i=(e=this._activeAnimationId)!=null?e:n==null?void 0:n.activeAnimationId)!=null?i:(t=n==null?void 0:n.animations[0])==null?void 0:t.id)!=null?o:void 0}async load(e){if(this._currentState==="loading"){A("Loading in progress..");return}try{if(this.setCurrentState("loading"),typeof this._src=="string")if(Sn(this._src)){let i=JSON.parse(this._src);this._dotLottieLoader.loadFromLottieJSON(i)}else{let i=new URL(this._src,window.location.href);await this._dotLottieLoader.loadFromUrl(i.toString())}else if(typeof this._src=="object"&&Bt(this._src))this._dotLottieLoader.loadFromLottieJSON(this._src);else throw w("Invalid src provided");if(!this._dotLottieLoader.manifest)throw w("No manifest found");let t=this._getActiveAnimationId();if(!t)throw w("No active animation found");await this._setCurrentAnimation(t),await this.render(e)}catch(t){this.setCurrentState("error"),t instanceof Error&&vt(`Error loading animation: ${t.message}`)}}setErrorState(e){this.setCurrentState("error"),vt(e)}_requireValidDirection(e){if(e!==-1&&e!==1)throw w("Direction can only be -1 (backwards) or 1 (forwards)")}_requireValidIntermission(e){if(e<0||!Number.isInteger(e))throw w("intermission must be a positive number")}_requireValidLoop(e){if(typeof e=="number"&&(!Number.isInteger(e)||e<0))throw w("loop must be a positive number or boolean")}_requireValidSpeed(e){if(typeof e!="number")throw w("speed must be a number")}_requireValidBackground(e){if(typeof e!="string")throw w("background must be a string")}_requireValidAutoplay(e){if(typeof e!="boolean")throw w("autoplay must be a boolean")}_requireValidPlaybackOptions(e){e.direction&&this._requireValidDirection(e.direction),e.intermission&&this._requireValidIntermission(e.intermission),e.loop&&this._requireValidLoop(e.loop),e.speed&&this._requireValidSpeed(e.speed)}},En=Object.create,Vi=Object.defineProperty,Mn=Object.getOwnPropertyDescriptor,Tn=Object.getOwnPropertyNames,Un=Object.getPrototypeOf,Nn=Object.prototype.hasOwnProperty,Yn=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports),jn=(e,t,i,o)=>{if(t&&typeof t=="object"||typeof t=="function")for(let n of Tn(t))!Nn.call(e,n)&&n!==i&&Vi(e,n,{get:()=>t[n],enumerable:!(o=Mn(t,n))||o.enumerable});return e},tr=(e,t,i)=>(i=e!=null?En(Un(e)):{},jn(Vi(i,"default",{value:e,enumerable:!0}),e)),zn=Object.defineProperty,P=(e,t,i,o)=>{for(var n=void 0,r=e.length-1,s;r>=0;r--)(s=e[r])&&(n=s(t,i,n)||n);return n&&zn(t,i,n),n},Dn=(e,t)=>t.kind==="method"&&t.descriptor&&!("value"in t.descriptor)?{...t,finisher(i){i.createProperty(t.key,e)}}:{kind:"field",key:Symbol(),placement:"own",descriptor:{},originalKey:t.key,initializer(){typeof t.initializer=="function"&&(this[t.key]=t.initializer.call(this))},finisher(i){i.createProperty(t.key,e)}},Vn=(e,t,i)=>{t.constructor.createProperty(i,e)};function E(e){return(t,i)=>i!==void 0?Vn(e,t,i):Dn(e,t)}function Fn(e){return E({...e,state:!0})}var Rn=({finisher:e,descriptor:t})=>(i,o)=>{var n;if(o===void 0){let r=(n=i.originalKey)!==null&&n!==void 0?n:i.key,s=t!=null?{kind:"method",placement:"prototype",key:r,descriptor:t(i.key)}:{...i,key:r};return e!=null&&(s.finisher=function(l){e(l,r)}),s}{let r=i.constructor;t!==void 0&&Object.defineProperty(i,o,t(o)),e==null||e(r,o)}};function Bn(e,t){return Rn({descriptor:i=>({get(){var n,r;return(r=(n=this.renderRoot)===null||n===void 0?void 0:n.querySelector(e))!==null&&r!==void 0?r:null},enumerable:!0,configurable:!0})})}var le;((le=window.HTMLSlotElement)===null||le===void 0?void 0:le.prototype.assignedElements)!=null;var Hn={version:"2.7.12"},si="dotlottie-player",x=class extends At{constructor(){super(...arguments);f(this,"defaultTheme","");f(this,"container");f(this,"playMode",zi.Normal);f(this,"autoplay",!1);f(this,"background","transparent");f(this,"controls",!1);f(this,"direction",1);f(this,"hover",!1);f(this,"loop");f(this,"renderer","svg");f(this,"speed",1);f(this,"src");f(this,"intermission",0);f(this,"activeAnimationId",null);f(this,"light",!1);f(this,"worker",!1);f(this,"activeStateId");f(this,"_seeker",0);f(this,"_dotLottieCommonPlayer");f(this,"_io");f(this,"_loop");f(this,"_renderer","svg");f(this,"_unsubscribeListeners");f(this,"_hasMultipleAnimations",!1);f(this,"_hasMultipleThemes",!1);f(this,"_hasMultipleStates",!1);f(this,"_popoverIsOpen",!1);f(this,"_animationsTabIsOpen",!1);f(this,"_statesTabIsOpen",!1);f(this,"_styleTabIsOpen",!1);f(this,"_themesForCurrentAnimation",[]);f(this,"_statesForCurrentAnimation",[])}_parseLoop(t){let i=parseInt(t,10);return Number.isInteger(i)&&i>0?(this._loop=i,i):typeof t=="string"&&["true","false"].includes(t)?(this._loop=t==="true",this._loop):(A("loop must be a positive integer or a boolean"),!1)}_handleSeekChange(t){let i=t.currentTarget;try{let o=parseInt(i.value,10);if(!this._dotLottieCommonPlayer)return;let n=o/100*this._dotLottieCommonPlayer.totalFrames;this.seek(n)}catch{throw w("Error while seeking animation")}}_initListeners(){let t=this._dotLottieCommonPlayer;if(t===void 0){A("player not initialized - cannot add event listeners","dotlottie-player-component");return}this._unsubscribeListeners=t.state.subscribe((i,o)=>{this._seeker=i.seeker,this.requestUpdate(),o.currentState!==i.currentState&&this.dispatchEvent(new CustomEvent(i.currentState)),this.dispatchEvent(new CustomEvent(rt.Frame,{detail:{frame:i.frame,seeker:i.seeker}})),this.dispatchEvent(new CustomEvent(rt.VisibilityChange,{detail:{visibilityPercentage:i.visibilityPercentage}}))}),t.addEventListener("complete",()=>{this.dispatchEvent(new CustomEvent(rt.Complete))}),t.addEventListener("loopComplete",()=>{this.dispatchEvent(new CustomEvent(rt.LoopComplete))}),t.addEventListener("DOMLoaded",()=>{let i=this.getManifest();i&&i.themes&&(this._themesForCurrentAnimation=i.themes.filter(o=>o.animations.includes(this.getCurrentAnimationId()||""))),i&&i.states&&(this._hasMultipleStates=i.states.length>0,this._statesForCurrentAnimation=[],i.states.forEach(o=>{this._statesForCurrentAnimation.push(o)})),this.dispatchEvent(new CustomEvent(rt.Ready))}),t.addEventListener("data_ready",()=>{this.dispatchEvent(new CustomEvent(rt.DataReady))}),t.addEventListener("data_failed",()=>{this.dispatchEvent(new CustomEvent(rt.DataFail))}),window&&window.addEventListener("click",i=>this._clickOutListener(i))}async load(t,i,o){if(!this.shadowRoot)return;this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.destroy(),this._dotLottieCommonPlayer=new ri(t,this.container,{rendererSettings:i??{scaleMode:"noScale",clearCanvas:!0,progressiveLoad:!0,hideOnTransparent:!0},hover:this.hasAttribute("hover")?this.hover:void 0,renderer:this.hasAttribute("renderer")?this._renderer:void 0,loop:this.hasAttribute("loop")?this._loop:void 0,direction:this.hasAttribute("direction")?this.direction===1?1:-1:void 0,speed:this.hasAttribute("speed")?this.speed:void 0,intermission:this.hasAttribute("intermission")?Number(this.intermission):void 0,playMode:this.hasAttribute("playMode")?this.playMode:void 0,autoplay:this.hasAttribute("autoplay")?this.autoplay:void 0,activeAnimationId:this.hasAttribute("activeAnimationId")?this.activeAnimationId:void 0,defaultTheme:this.hasAttribute("defaultTheme")?this.defaultTheme:void 0,light:this.light,worker:this.worker,activeStateId:this.hasAttribute("activeStateId")?this.activeStateId:void 0}),await this._dotLottieCommonPlayer.load(o);let n=this.getManifest();this._hasMultipleAnimations=this.animationCount()>1,n&&(n.themes&&(this._themesForCurrentAnimation=n.themes.filter(r=>r.animations.includes(this.getCurrentAnimationId()||"")),this._hasMultipleThemes=n.themes.length>0),n.states&&(this._hasMultipleStates=n.states.length>0,this._statesForCurrentAnimation=[],n.states.forEach(r=>{this._statesForCurrentAnimation.push(r)}))),this._initListeners()}getCurrentAnimationId(){var t;return(t=this._dotLottieCommonPlayer)==null?void 0:t.currentAnimationId}animationCount(){var t;return this._dotLottieCommonPlayer&&((t=this._dotLottieCommonPlayer.getManifest())==null?void 0:t.animations.length)||0}animations(){if(!this._dotLottieCommonPlayer)return[];let t=this._dotLottieCommonPlayer.getManifest();return(t==null?void 0:t.animations.map(i=>i.id))||[]}currentAnimation(){return!this._dotLottieCommonPlayer||!this._dotLottieCommonPlayer.currentAnimationId?"":this._dotLottieCommonPlayer.currentAnimationId}getState(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.getState():Di}getManifest(){var t;return(t=this._dotLottieCommonPlayer)==null?void 0:t.getManifest()}getLottie(){var t;return(t=this._dotLottieCommonPlayer)==null?void 0:t.getAnimationInstance()}getVersions(){return{lottieWebVersion:ri.getLottieWebVersion(),dotLottiePlayerVersion:`${Hn.version}`}}previous(t){var i;(i=this._dotLottieCommonPlayer)==null||i.previous(t)}next(t){var i;(i=this._dotLottieCommonPlayer)==null||i.next(t)}reset(){var t;(t=this._dotLottieCommonPlayer)==null||t.reset()}play(t,i){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.play(t,i)}pause(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.pause()}stop(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stop()}playOnShow(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnShow(t)}stopPlayOnShow(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnShow()}playOnScroll(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.playOnScroll(t)}stopPlayOnScroll(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.stopPlayOnScroll()}seek(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.seek(t)}snapshot(t=!0){if(!this.shadowRoot)return"";let i=this.shadowRoot.querySelector(".animation svg"),o=new XMLSerializer().serializeToString(i);if(t){let n=document.createElement("a");n.href=`data:image/svg+xml;charset=utf-8,${encodeURIComponent(o)}`,n.download=`download_${this._seeker}.svg`,document.body.appendChild(n),n.click(),document.body.removeChild(n)}return o}setTheme(t){var i;(i=this._dotLottieCommonPlayer)==null||i.setDefaultTheme(t)}themes(){var t;if(!this._dotLottieCommonPlayer)return[];let i=this._dotLottieCommonPlayer.getManifest();return((t=i==null?void 0:i.themes)==null?void 0:t.map(o=>o.id))||[]}getDefaultTheme(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.defaultTheme:""}getActiveStateMachine(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.activeStateId:""}_freeze(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.freeze()}setSpeed(t=1){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setSpeed(t)}setDirection(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setDirection(t)}setLooping(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setLoop(t)}isLooping(){return this._dotLottieCommonPlayer?this._dotLottieCommonPlayer.loop:!1}togglePlay(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.togglePlay()}toggleLooping(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.toggleLoop()}setPlayMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.setMode(t)}enterInteractiveMode(t){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.enterInteractiveMode(t)}exitInteractiveMode(){this._dotLottieCommonPlayer&&this._dotLottieCommonPlayer.exitInteractiveMode()}revertToManifestValues(t){var i;(i=this._dotLottieCommonPlayer)==null||i.revertToManifestValues(t)}static get styles(){return ao}async firstUpdated(){var t;this.container=(t=this.shadowRoot)==null?void 0:t.querySelector("#animation"),"IntersectionObserver"in window&&(this._io=new IntersectionObserver(i=>{var o,n;i[0]!==void 0&&i[0].isIntersecting?((o=this._dotLottieCommonPlayer)==null?void 0:o.currentState)===_t.Frozen&&this.play():((n=this._dotLottieCommonPlayer)==null?void 0:n.currentState)===_t.Playing&&this._freeze()}),this._io.observe(this.container)),this.loop?this._parseLoop(this.loop):this.hasAttribute("loop")&&this._parseLoop("true"),this.renderer==="svg"?this._renderer="svg":this.renderer==="canvas"?this._renderer="canvas":this.renderer==="html"&&(this._renderer="html"),this.src&&await this.load(this.src)}disconnectedCallback(){var t,i;this._io&&(this._io.disconnect(),this._io=void 0),(t=this._dotLottieCommonPlayer)==null||t.destroy(),(i=this._unsubscribeListeners)==null||i.call(this),window&&window.removeEventListener("click",o=>this._clickOutListener(o))}_clickOutListener(t){!t.composedPath().some(i=>i instanceof HTMLElement?i.classList.contains("popover")||i.id==="lottie-animation-options":!1)&&this._popoverIsOpen&&(this._popoverIsOpen=!1,this.requestUpdate())}renderControls(){var t,i,o,n,r;let s=((t=this._dotLottieCommonPlayer)==null?void 0:t.currentState)===_t.Playing,l=((i=this._dotLottieCommonPlayer)==null?void 0:i.currentState)===_t.Paused;return b`
      <div id="lottie-controls" aria-label="lottie-animation-controls" class="toolbar">
        ${this._hasMultipleAnimations?b`
              <button @click=${()=>this.previous()} aria-label="Previous animation" class="btn-spacing-left">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M1.69214 13.5C1.69214 13.7761 1.916 14 2.19214 14C2.46828 14 2.69214 13.7761 2.69214 13.5L2.69214 2.5C2.69214 2.22386 2.46828 2 2.19214 2C1.916 2 1.69214 2.22386 1.69214 2.5V13.5ZM12.5192 13.7828C13.1859 14.174 14.0254 13.6933 14.0254 12.9204L14.0254 3.0799C14.0254 2.30692 13.1859 1.8262 12.5192 2.21747L4.13612 7.13769C3.47769 7.52414 3.47769 8.4761 4.13612 8.86255L12.5192 13.7828Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:b``}
        <button
          id="lottie-play-button"
          @click=${()=>{this.togglePlay()}}
          class=${s||l?`active ${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`:`${this._hasMultipleAnimations?"btn-spacing-center":"btn-spacing-right"}`}
          aria-label="play / pause animation"
        >
          ${s?b`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.99996 2C3.26358 2 2.66663 2.59695 2.66663 3.33333V12.6667C2.66663 13.403 3.26358 14 3.99996 14H5.33329C6.06967 14 6.66663 13.403 6.66663 12.6667V3.33333C6.66663 2.59695 6.06967 2 5.33329 2H3.99996Z"
                    fill="#20272C"
                  />
                  <path
                    d="M10.6666 2C9.93025 2 9.33329 2.59695 9.33329 3.33333V12.6667C9.33329 13.403 9.93025 14 10.6666 14H12C12.7363 14 13.3333 13.403 13.3333 12.6667V3.33333C13.3333 2.59695 12.7363 2 12 2H10.6666Z"
                    fill="#20272C"
                  />
                </svg>
              `:b`
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M3.33337 3.46787C3.33337 2.52312 4.35948 1.93558 5.17426 2.41379L12.8961 6.94592C13.7009 7.41824 13.7009 8.58176 12.8961 9.05408L5.17426 13.5862C4.35948 14.0644 3.33337 13.4769 3.33337 12.5321V3.46787Z"
                    fill="#20272C"
                  />
                </svg>
              `}
        </button>
        ${this._hasMultipleAnimations?b`
              <button @click=${()=>this.next()} aria-label="Next animation" class="btn-spacing-right">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M14.3336 2.5C14.3336 2.22386 14.1097 2 13.8336 2C13.5574 2 13.3336 2.22386 13.3336 2.5V13.5C13.3336 13.7761 13.5574 14 13.8336 14C14.1097 14 14.3336 13.7761 14.3336 13.5V2.5ZM3.50618 2.21722C2.83954 1.82595 2 2.30667 2 3.07965V12.9201C2 13.6931 2.83954 14.1738 3.50618 13.7825L11.8893 8.86231C12.5477 8.47586 12.5477 7.52389 11.8893 7.13745L3.50618 2.21722Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:b``}
        <input
          id="lottie-seeker-input"
          class="seeker ${((o=this._dotLottieCommonPlayer)==null?void 0:o.direction)===-1?"to-left":""}"
          type="range"
          min="0"
          step="1"
          max="100"
          .value=${this._seeker}
          @input=${a=>this._handleSeekChange(a)}
          @mousedown=${()=>{this._freeze()}}
          @mouseup=${()=>{var a;(a=this._dotLottieCommonPlayer)==null||a.unfreeze()}}
          aria-valuemin="1"
          aria-valuemax="100"
          role="slider"
          aria-valuenow=${this._seeker}
          aria-label="lottie-seek-input"
          style=${`--seeker: ${this._seeker}`}
        />
        <button
          id="lottie-loop-toggle"
          @click=${()=>this.toggleLooping()}
          class=${(n=this._dotLottieCommonPlayer)!=null&&n.loop?"active btn-spacing-left":"btn-spacing-left"}
          aria-label="loop-toggle"
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M10.8654 2.31319C11.0607 2.11793 11.3772 2.11793 11.5725 2.31319L13.4581 4.19881C13.6534 4.39407 13.6534 4.71066 13.4581 4.90592L11.5725 6.79154C11.3772 6.9868 11.0607 6.9868 10.8654 6.79154C10.6701 6.59628 10.6701 6.27969 10.8654 6.08443L11.6162 5.33362H4V6.66695C4 7.03514 3.70152 7.33362 3.33333 7.33362C2.96514 7.33362 2.66666 7.03514 2.66666 6.66695L2.66666 4.66695C2.66666 4.29876 2.96514 4.00028 3.33333 4.00028H11.8454L10.8654 3.0203C10.6701 2.82504 10.6701 2.50846 10.8654 2.31319Z"
              fill="currentColor"
            />
            <path
              d="M12.4375 11.9999C12.8057 11.9999 13.1042 11.7014 13.1042 11.3332V9.33321C13.1042 8.96502 12.8057 8.66655 12.4375 8.66655C12.0693 8.66655 11.7708 8.96502 11.7708 9.33321V10.6665H4.15462L4.90543 9.91573C5.10069 9.72047 5.10069 9.40389 4.90543 9.20862C4.71017 9.01336 4.39359 9.01336 4.19832 9.20862L2.31271 11.0942C2.11744 11.2895 2.11744 11.6061 2.31271 11.8013L4.19832 13.687C4.39359 13.8822 4.71017 13.8822 4.90543 13.687C5.10069 13.4917 5.10069 13.1751 4.90543 12.9799L3.92545 11.9999H12.4375Z"
              fill="currentColor"
            />
          </svg>
        </button>
        ${this._hasMultipleAnimations||this._hasMultipleThemes||this._hasMultipleStates?b`
              <button
                id="lottie-animation-options"
                @click=${()=>{this._popoverIsOpen=!this._popoverIsOpen,this.requestUpdate()}}
                aria-label="options"
                class="btn-spacing-right"
                style=${`background-color: ${this._popoverIsOpen?"var(--lottie-player-toolbar-icon-hover-color)":""}`}
              >
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8.33337 11.6666C7.78109 11.6666 7.33337 12.1143 7.33337 12.6666C7.33337 13.2189 7.78109 13.6666 8.33337 13.6666C8.88566 13.6666 9.33337 13.2189 9.33337 12.6666C9.33337 12.1143 8.88566 11.6666 8.33337 11.6666Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 7.99992C7.33337 7.44763 7.78109 6.99992 8.33337 6.99992C8.88566 6.99992 9.33338 7.44763 9.33338 7.99992C9.33338 8.5522 8.88566 8.99992 8.33337 8.99992C7.78109 8.99992 7.33337 8.5522 7.33337 7.99992Z"
                    fill="#20272C"
                  />
                  <path
                    d="M7.33337 3.33325C7.33337 2.78097 7.78109 2.33325 8.33337 2.33325C8.88566 2.33325 9.33338 2.78097 9.33338 3.33325C9.33338 3.88554 8.88566 4.33325 8.33337 4.33325C7.78109 4.33325 7.33337 3.88554 7.33337 3.33325Z"
                    fill="#20272C"
                  />
                </svg>
              </button>
            `:b``}
      </div>
      ${this._popoverIsOpen?b`
            <div
              id="popover"
              class="popover"
              tabindex="0"
              aria-label="lottie animations themes popover"
              style="min-height: ${this.themes().length>0?"84px":"auto"}"
            >
              ${!this._animationsTabIsOpen&&!this._styleTabIsOpen&&!this._statesTabIsOpen?b`
                    <button
                      class="popover-button"
                      tabindex="0"
                      aria-label="animations"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                      @keydown=${a=>{(a.code==="Space"||a.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate())}}
                    >
                      <div class="popover-button-text">Animations</div>
                      <div>
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                            fill="#4C5863"
                          />
                        </svg>
                      </div>
                    </button>
                  `:b``}
              ${this._hasMultipleThemes&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?b` <button
                    class="popover-button"
                    aria-label="Themes"
                    @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                    @keydown=${a=>{(a.code==="Space"||a.code==="Enter")&&(this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">Themes</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._hasMultipleStates&&!this._styleTabIsOpen&&!this._animationsTabIsOpen&&!this._statesTabIsOpen?b` <button
                    class="popover-button"
                    aria-label="States"
                    @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                    @keydown=${a=>{(a.code==="Space"||a.code==="Enter")&&(this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate())}}
                  >
                    <div class="popover-button-text">States</div>
                    <div>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M10.4697 17.5303C10.1768 17.2374 10.1768 16.7626 10.4697 16.4697L14.9393 12L10.4697 7.53033C10.1768 7.23744 10.1768 6.76256 10.4697 6.46967C10.7626 6.17678 11.2374 6.17678 11.5303 6.46967L16.5303 11.4697C16.8232 11.7626 16.8232 12.2374 16.5303 12.5303L11.5303 17.5303C11.2374 17.8232 10.7626 17.8232 10.4697 17.5303Z"
                          fill="#4C5863"
                        />
                      </svg>
                    </div>
                  </button>`:""}
              ${this._animationsTabIsOpen?b`<button
                      class="option-title-button"
                      aria-label="Back to main popover menu"
                      @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this.requestUpdate()}}
                    >
                      <div class="option-title-chevron">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                            fill="#20272C"
                          />
                        </svg>
                      </div>
                      <div>Animations</div>
                    </button>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this.animations().map(a=>b`
                            <li>
                              <button
                                class="option-button"
                                aria-label=${`${a}`}
                                @click=${()=>{this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(a),this.requestUpdate()}}
                                @keydown=${h=>{(h.code==="Space"||h.code==="Enter")&&(this._animationsTabIsOpen=!this._animationsTabIsOpen,this._popoverIsOpen=!this._popoverIsOpen,this.play(a),this.requestUpdate())}}
                              >
                                <div class="option-tick">
                                  ${this.currentAnimation()===a?b`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:b`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${a}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div> `:b``}
              ${this._styleTabIsOpen?b`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._styleTabIsOpen=!this._styleTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">Themes</div>
                        ${((r=this._dotLottieCommonPlayer)==null?void 0:r.defaultTheme)===""?b``:b`
                              <button
                                class="reset-btn"
                                @click=${()=>{this.setTheme(""),this.requestUpdate()}}
                              >
                                Reset
                              </button>
                            `}
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._themesForCurrentAnimation.map(a=>b`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${a.id}"
                                @click=${()=>{this.setTheme(a.id)}}
                                @keydown=${h=>{(h.code==="Space"||h.code==="Enter")&&this.setTheme(a.id)}}
                              >
                                <div class="option-tick">
                                  ${this.getDefaultTheme()===a.id?b`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:b`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${a.id}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:b``}
              ${this._statesTabIsOpen?b`<div class="option-title-themes-row">
                      <button
                        class="option-title-button themes"
                        aria-label="Back to main popover menu"
                        @click=${()=>{this._statesTabIsOpen=!this._statesTabIsOpen,this.requestUpdate()}}
                      >
                        <div class="option-title-chevron">
                          <svg
                            width="24"
                            height="24"
                            viewBox="0 0 24 24"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              clip-rule="evenodd"
                              d="M13.5303 6.46967C13.8232 6.76256 13.8232 7.23744 13.5303 7.53033L9.06066 12L13.5303 16.4697C13.8232 16.7626 13.8232 17.2374 13.5303 17.5303C13.2374 17.8232 12.7626 17.8232 12.4697 17.5303L7.46967 12.5303C7.17678 12.2374 7.17678 11.7626 7.46967 11.4697L12.4697 6.46967C12.7626 6.17678 13.2374 6.17678 13.5303 6.46967Z"
                              fill="#20272C"
                            />
                          </svg>
                        </div>
                        <div class="option-title-text">States</div>
                        <button
                          class="reset-btn"
                          @click=${()=>{this.exitInteractiveMode(),this.requestUpdate()}}
                        >
                          Reset
                        </button>
                      </button>
                    </div>
                    <div class="option-title-separator"></div>
                    <div class="option-row">
                      <ul>
                        ${this._statesForCurrentAnimation.map(a=>b`
                            <li>
                              <button
                                class="option-button"
                                aria-label="${a}"
                                @click=${()=>{this.enterInteractiveMode(a)}}
                                @keydown=${h=>{(h.code==="Space"||h.code==="Enter")&&this.enterInteractiveMode(a)}}
                              >
                                <div class="option-tick">
                                  ${this.getActiveStateMachine()===a?b`
                                        <svg
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          xmlns="http://www.w3.org/2000/svg"
                                        >
                                          <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M20.5281 5.9372C20.821 6.23009 20.821 6.70497 20.5281 6.99786L9.46297 18.063C9.32168 18.2043 9.12985 18.2833 8.93004 18.2826C8.73023 18.2819 8.53895 18.2015 8.39864 18.0593L3.46795 13.0596C3.1771 12.7647 3.1804 12.2898 3.47532 11.999C3.77024 11.7081 4.2451 11.7114 4.53595 12.0063L8.93634 16.4683L19.4675 5.9372C19.7604 5.64431 20.2352 5.64431 20.5281 5.9372Z"
                                            fill="#20272C"
                                          />
                                        </svg>
                                      `:b`<div style="width: 24px; height: 24px"></div>`}
                                </div>
                                <div>${a}</div>
                              </button>
                            </li>
                          `)}
                      </ul>
                    </div>`:b``}
            </div>
          `:b``}
    `}render(){var t;let i=this.controls?"main controls":"main",o=this.controls?"animation controls":"animation";return b`
      <div id="animation-container" class=${i} lang="en" role="img" aria-label="lottie-animation-container">
        <div id="animation" class=${o} style="background:${this.background};">
          ${((t=this._dotLottieCommonPlayer)==null?void 0:t.currentState)===_t.Error?b` <div class="error">⚠️</div> `:void 0}
        </div>
        ${this.controls?this.renderControls():void 0}
      </div>
    `}};P([E({type:String})],x.prototype,"defaultTheme"),P([Bn("#animation")],x.prototype,"container"),P([E()],x.prototype,"playMode"),P([E({type:Boolean})],x.prototype,"autoplay"),P([E({type:String})],x.prototype,"background"),P([E({type:Boolean})],x.prototype,"controls"),P([E({type:Number})],x.prototype,"direction"),P([E({type:Boolean})],x.prototype,"hover"),P([E({type:String})],x.prototype,"loop"),P([E({type:String})],x.prototype,"renderer"),P([E({type:Number})],x.prototype,"speed"),P([E({type:String})],x.prototype,"src"),P([E()],x.prototype,"intermission"),P([E({type:String})],x.prototype,"activeAnimationId"),P([E({type:Boolean})],x.prototype,"light"),P([E({type:Boolean})],x.prototype,"worker"),P([E({type:String})],x.prototype,"activeStateId"),P([Fn()],x.prototype,"_seeker");customElements.get(si)||customElements.define(si,x);/*! Bundled license information:

@lit/reactive-element/decorators/custom-element.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/property.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/state.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/base.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/event-options.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-all.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-async.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-elements.js:
  (**
   * @license
   * Copyright 2021 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)

@lit/reactive-element/decorators/query-assigned-nodes.js:
  (**
   * @license
   * Copyright 2017 Google LLC
   * SPDX-License-Identifier: BSD-3-Clause
   *)
*/export{vt as e,w as g,Z as q,Xn as r,Yn as u,tr as v};
