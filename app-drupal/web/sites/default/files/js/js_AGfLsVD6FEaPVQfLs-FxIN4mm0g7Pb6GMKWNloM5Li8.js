/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
(function($,Drupal,debounce){const cache={right:0,left:0,bottom:0,top:0};const cssVarPrefix='--drupal-displace-offset';const documentStyle=document.documentElement.style;const offsetKeys=Object.keys(cache);const offsetProps={};offsetKeys.forEach((edge)=>{offsetProps[edge]={enumerable:true,get(){return cache[edge];},set(value){if(value!==cache[edge])documentStyle.setProperty(`${cssVarPrefix}-${edge}`,`${value}px`);cache[edge]=value;}};});const offsets=Object.seal(Object.defineProperties({},offsetProps));function getRawOffset(el,edge){const $el=$(el);const documentElement=document.documentElement;let displacement=0;const horizontal=edge==='left'||edge==='right';let placement=$el.offset()[horizontal?'left':'top'];placement-=window[`scroll${horizontal?'X':'Y'}`]||document.documentElement[`scroll${horizontal?'Left':'Top'}`]||0;switch(edge){case 'top':displacement=placement+$el.outerHeight();break;case 'left':displacement=placement+$el.outerWidth();break;case 'bottom':displacement=documentElement.clientHeight-placement;break;case 'right':displacement=documentElement.clientWidth-placement;break;default:displacement=0;}return displacement;}function calculateOffset(edge){let edgeOffset=0;const displacingElements=document.querySelectorAll(`[data-offset-${edge}]`);const n=displacingElements.length;for(let i=0;i<n;i++){const el=displacingElements[i];if(el.style.display==='none')continue;let displacement=parseInt(el.getAttribute(`data-offset-${edge}`),10);if(isNaN(displacement))displacement=getRawOffset(el,edge);edgeOffset=Math.max(edgeOffset,displacement);}return edgeOffset;}function displace(broadcast=true){const newOffsets={};offsetKeys.forEach((edge)=>{newOffsets[edge]=calculateOffset(edge);});offsetKeys.forEach((edge)=>{offsets[edge]=newOffsets[edge];});if(broadcast)$(document).trigger('drupalViewportOffsetChange',offsets);return offsets;}Drupal.behaviors.drupalDisplace={attach(){if(this.displaceProcessed)return;this.displaceProcessed=true;$(window).on('resize.drupalDisplace',debounce(displace,200));}};Drupal.displace=displace;Object.defineProperty(Drupal.displace,'offsets',{value:offsets,writable:false});Drupal.displace.calculateOffset=calculateOffset;})(jQuery,Drupal,Drupal.debounce);;
/* @license MIT https://github.com/floating-ui/floating-ui/blob/master/LICENSE */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).FloatingUICore={})}(this,(function(t){"use strict";const e=["top","right","bottom","left"],n=["start","end"],i=e.reduce(((t,e)=>t.concat(e,e+"-"+n[0],e+"-"+n[1])),[]),o=Math.min,r=Math.max,a={left:"right",right:"left",bottom:"top",top:"bottom"},l={start:"end",end:"start"};function s(t,e,n){return r(t,o(e,n))}function f(t,e){return"function"==typeof t?t(e):t}function c(t){return t.split("-")[0]}function u(t){return t.split("-")[1]}function m(t){return"x"===t?"y":"x"}function d(t){return"y"===t?"height":"width"}function g(t){return["top","bottom"].includes(c(t))?"y":"x"}function p(t){return m(g(t))}function h(t,e,n){void 0===n&&(n=!1);const i=u(t),o=p(t),r=d(o);let a="x"===o?i===(n?"end":"start")?"right":"left":"start"===i?"bottom":"top";return e.reference[r]>e.floating[r]&&(a=w(a)),[a,w(a)]}function y(t){return t.replace(/start|end/g,(t=>l[t]))}function w(t){return t.replace(/left|right|bottom|top/g,(t=>a[t]))}function x(t){return"number"!=typeof t?function(t){return{top:0,right:0,bottom:0,left:0,...t}}(t):{top:t,right:t,bottom:t,left:t}}function v(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}function b(t,e,n){let{reference:i,floating:o}=t;const r=g(e),a=p(e),l=d(a),s=c(e),f="y"===r,m=i.x+i.width/2-o.width/2,h=i.y+i.height/2-o.height/2,y=i[l]/2-o[l]/2;let w;switch(s){case"top":w={x:m,y:i.y-o.height};break;case"bottom":w={x:m,y:i.y+i.height};break;case"right":w={x:i.x+i.width,y:h};break;case"left":w={x:i.x-o.width,y:h};break;default:w={x:i.x,y:i.y}}switch(u(e)){case"start":w[a]-=y*(n&&f?-1:1);break;case"end":w[a]+=y*(n&&f?-1:1)}return w}async function A(t,e){var n;void 0===e&&(e={});const{x:i,y:o,platform:r,rects:a,elements:l,strategy:s}=t,{boundary:c="clippingAncestors",rootBoundary:u="viewport",elementContext:m="floating",altBoundary:d=!1,padding:g=0}=f(e,t),p=x(g),h=l[d?"floating"===m?"reference":"floating":m],y=v(await r.getClippingRect({element:null==(n=await(null==r.isElement?void 0:r.isElement(h)))||n?h:h.contextElement||await(null==r.getDocumentElement?void 0:r.getDocumentElement(l.floating)),boundary:c,rootBoundary:u,strategy:s})),w="floating"===m?{...a.floating,x:i,y:o}:a.reference,b=await(null==r.getOffsetParent?void 0:r.getOffsetParent(l.floating)),A=await(null==r.isElement?void 0:r.isElement(b))&&await(null==r.getScale?void 0:r.getScale(b))||{x:1,y:1},R=v(r.convertOffsetParentRelativeRectToViewportRelativeRect?await r.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:w,offsetParent:b,strategy:s}):w);return{top:(y.top-R.top+p.top)/A.y,bottom:(R.bottom-y.bottom+p.bottom)/A.y,left:(y.left-R.left+p.left)/A.x,right:(R.right-y.right+p.right)/A.x}}function R(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function P(t){return e.some((e=>t[e]>=0))}function T(t){const e=o(...t.map((t=>t.left))),n=o(...t.map((t=>t.top)));return{x:e,y:n,width:r(...t.map((t=>t.right)))-e,height:r(...t.map((t=>t.bottom)))-n}}t.arrow=t=>({name:"arrow",options:t,async fn(e){const{x:n,y:i,placement:r,rects:a,platform:l,elements:c,middlewareData:m}=e,{element:g,padding:h=0}=f(t,e)||{};if(null==g)return{};const y=x(h),w={x:n,y:i},v=p(r),b=d(v),A=await l.getDimensions(g),R="y"===v,P=R?"top":"left",T=R?"bottom":"right",D=R?"clientHeight":"clientWidth",O=a.reference[b]+a.reference[v]-w[v]-a.floating[b],E=w[v]-a.reference[v],L=await(null==l.getOffsetParent?void 0:l.getOffsetParent(g));let k=L?L[D]:0;k&&await(null==l.isElement?void 0:l.isElement(L))||(k=c.floating[D]||a.floating[b]);const C=O/2-E/2,B=k/2-A[b]/2-1,H=o(y[P],B),S=o(y[T],B),F=H,j=k-A[b]-S,z=k/2-A[b]/2+C,M=s(F,z,j),V=!m.arrow&&null!=u(r)&&z!==M&&a.reference[b]/2-(z<F?H:S)-A[b]/2<0,W=V?z<F?z-F:z-j:0;return{[v]:w[v]+W,data:{[v]:M,centerOffset:z-M-W,...V&&{alignmentOffset:W}},reset:V}}}),t.autoPlacement=function(t){return void 0===t&&(t={}),{name:"autoPlacement",options:t,async fn(e){var n,o,r;const{rects:a,middlewareData:l,placement:s,platform:m,elements:d}=e,{crossAxis:g=!1,alignment:p,allowedPlacements:w=i,autoAlignment:x=!0,...v}=f(t,e),b=void 0!==p||w===i?function(t,e,n){return(t?[...n.filter((e=>u(e)===t)),...n.filter((e=>u(e)!==t))]:n.filter((t=>c(t)===t))).filter((n=>!t||u(n)===t||!!e&&y(n)!==n))}(p||null,x,w):w,R=await A(e,v),P=(null==(n=l.autoPlacement)?void 0:n.index)||0,T=b[P];if(null==T)return{};const D=h(T,a,await(null==m.isRTL?void 0:m.isRTL(d.floating)));if(s!==T)return{reset:{placement:b[0]}};const O=[R[c(T)],R[D[0]],R[D[1]]],E=[...(null==(o=l.autoPlacement)?void 0:o.overflows)||[],{placement:T,overflows:O}],L=b[P+1];if(L)return{data:{index:P+1,overflows:E},reset:{placement:L}};const k=E.map((t=>{const e=u(t.placement);return[t.placement,e&&g?t.overflows.slice(0,2).reduce(((t,e)=>t+e),0):t.overflows[0],t.overflows]})).sort(((t,e)=>t[1]-e[1])),C=(null==(r=k.filter((t=>t[2].slice(0,u(t[0])?2:3).every((t=>t<=0))))[0])?void 0:r[0])||k[0][0];return C!==s?{data:{index:P+1,overflows:E},reset:{placement:C}}:{}}}},t.computePosition=async(t,e,n)=>{const{placement:i="bottom",strategy:o="absolute",middleware:r=[],platform:a}=n,l=r.filter(Boolean),s=await(null==a.isRTL?void 0:a.isRTL(e));let f=await a.getElementRects({reference:t,floating:e,strategy:o}),{x:c,y:u}=b(f,i,s),m=i,d={},g=0;for(let n=0;n<l.length;n++){const{name:r,fn:p}=l[n],{x:h,y:y,data:w,reset:x}=await p({x:c,y:u,initialPlacement:i,placement:m,strategy:o,middlewareData:d,rects:f,platform:a,elements:{reference:t,floating:e}});c=null!=h?h:c,u=null!=y?y:u,d={...d,[r]:{...d[r],...w}},x&&g<=50&&(g++,"object"==typeof x&&(x.placement&&(m=x.placement),x.rects&&(f=!0===x.rects?await a.getElementRects({reference:t,floating:e,strategy:o}):x.rects),({x:c,y:u}=b(f,m,s))),n=-1)}return{x:c,y:u,placement:m,strategy:o,middlewareData:d}},t.detectOverflow=A,t.flip=function(t){return void 0===t&&(t={}),{name:"flip",options:t,async fn(e){var n,i;const{placement:o,middlewareData:r,rects:a,initialPlacement:l,platform:s,elements:m}=e,{mainAxis:d=!0,crossAxis:g=!0,fallbackPlacements:p,fallbackStrategy:x="bestFit",fallbackAxisSideDirection:v="none",flipAlignment:b=!0,...R}=f(t,e);if(null!=(n=r.arrow)&&n.alignmentOffset)return{};const P=c(o),T=c(l)===l,D=await(null==s.isRTL?void 0:s.isRTL(m.floating)),O=p||(T||!b?[w(l)]:function(t){const e=w(t);return[y(t),e,y(e)]}(l));p||"none"===v||O.push(...function(t,e,n,i){const o=u(t);let r=function(t,e,n){const i=["left","right"],o=["right","left"],r=["top","bottom"],a=["bottom","top"];switch(t){case"top":case"bottom":return n?e?o:i:e?i:o;case"left":case"right":return e?r:a;default:return[]}}(c(t),"start"===n,i);return o&&(r=r.map((t=>t+"-"+o)),e&&(r=r.concat(r.map(y)))),r}(l,b,v,D));const E=[l,...O],L=await A(e,R),k=[];let C=(null==(i=r.flip)?void 0:i.overflows)||[];if(d&&k.push(L[P]),g){const t=h(o,a,D);k.push(L[t[0]],L[t[1]])}if(C=[...C,{placement:o,overflows:k}],!k.every((t=>t<=0))){var B,H;const t=((null==(B=r.flip)?void 0:B.index)||0)+1,e=E[t];if(e)return{data:{index:t,overflows:C},reset:{placement:e}};let n=null==(H=C.filter((t=>t.overflows[0]<=0)).sort(((t,e)=>t.overflows[1]-e.overflows[1]))[0])?void 0:H.placement;if(!n)switch(x){case"bestFit":{var S;const t=null==(S=C.map((t=>[t.placement,t.overflows.filter((t=>t>0)).reduce(((t,e)=>t+e),0)])).sort(((t,e)=>t[1]-e[1]))[0])?void 0:S[0];t&&(n=t);break}case"initialPlacement":n=l}if(o!==n)return{reset:{placement:n}}}return{}}}},t.hide=function(t){return void 0===t&&(t={}),{name:"hide",options:t,async fn(e){const{rects:n}=e,{strategy:i="referenceHidden",...o}=f(t,e);switch(i){case"referenceHidden":{const t=R(await A(e,{...o,elementContext:"reference"}),n.reference);return{data:{referenceHiddenOffsets:t,referenceHidden:P(t)}}}case"escaped":{const t=R(await A(e,{...o,altBoundary:!0}),n.floating);return{data:{escapedOffsets:t,escaped:P(t)}}}default:return{}}}}},t.inline=function(t){return void 0===t&&(t={}),{name:"inline",options:t,async fn(e){const{placement:n,elements:i,rects:a,platform:l,strategy:s}=e,{padding:u=2,x:m,y:d}=f(t,e),p=Array.from(await(null==l.getClientRects?void 0:l.getClientRects(i.reference))||[]),h=function(t){const e=t.slice().sort(((t,e)=>t.y-e.y)),n=[];let i=null;for(let t=0;t<e.length;t++){const o=e[t];!i||o.y-i.y>i.height/2?n.push([o]):n[n.length-1].push(o),i=o}return n.map((t=>v(T(t))))}(p),y=v(T(p)),w=x(u);const b=await l.getElementRects({reference:{getBoundingClientRect:function(){if(2===h.length&&h[0].left>h[1].right&&null!=m&&null!=d)return h.find((t=>m>t.left-w.left&&m<t.right+w.right&&d>t.top-w.top&&d<t.bottom+w.bottom))||y;if(h.length>=2){if("y"===g(n)){const t=h[0],e=h[h.length-1],i="top"===c(n),o=t.top,r=e.bottom,a=i?t.left:e.left,l=i?t.right:e.right;return{top:o,bottom:r,left:a,right:l,width:l-a,height:r-o,x:a,y:o}}const t="left"===c(n),e=r(...h.map((t=>t.right))),i=o(...h.map((t=>t.left))),a=h.filter((n=>t?n.left===i:n.right===e)),l=a[0].top,s=a[a.length-1].bottom;return{top:l,bottom:s,left:i,right:e,width:e-i,height:s-l,x:i,y:l}}return y}},floating:i.floating,strategy:s});return a.reference.x!==b.reference.x||a.reference.y!==b.reference.y||a.reference.width!==b.reference.width||a.reference.height!==b.reference.height?{reset:{rects:b}}:{}}}},t.limitShift=function(t){return void 0===t&&(t={}),{options:t,fn(e){const{x:n,y:i,placement:o,rects:r,middlewareData:a}=e,{offset:l=0,mainAxis:s=!0,crossAxis:u=!0}=f(t,e),d={x:n,y:i},p=g(o),h=m(p);let y=d[h],w=d[p];const x=f(l,e),v="number"==typeof x?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(s){const t="y"===h?"height":"width",e=r.reference[h]-r.floating[t]+v.mainAxis,n=r.reference[h]+r.reference[t]-v.mainAxis;y<e?y=e:y>n&&(y=n)}if(u){var b,A;const t="y"===h?"width":"height",e=["top","left"].includes(c(o)),n=r.reference[p]-r.floating[t]+(e&&(null==(b=a.offset)?void 0:b[p])||0)+(e?0:v.crossAxis),i=r.reference[p]+r.reference[t]+(e?0:(null==(A=a.offset)?void 0:A[p])||0)-(e?v.crossAxis:0);w<n?w=n:w>i&&(w=i)}return{[h]:y,[p]:w}}}},t.offset=function(t){return void 0===t&&(t=0),{name:"offset",options:t,async fn(e){var n,i;const{x:o,y:r,placement:a,middlewareData:l}=e,s=await async function(t,e){const{placement:n,platform:i,elements:o}=t,r=await(null==i.isRTL?void 0:i.isRTL(o.floating)),a=c(n),l=u(n),s="y"===g(n),m=["left","top"].includes(a)?-1:1,d=r&&s?-1:1,p=f(e,t);let{mainAxis:h,crossAxis:y,alignmentAxis:w}="number"==typeof p?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...p};return l&&"number"==typeof w&&(y="end"===l?-1*w:w),s?{x:y*d,y:h*m}:{x:h*m,y:y*d}}(e,t);return a===(null==(n=l.offset)?void 0:n.placement)&&null!=(i=l.arrow)&&i.alignmentOffset?{}:{x:o+s.x,y:r+s.y,data:{...s,placement:a}}}}},t.rectToClientRect=v,t.shift=function(t){return void 0===t&&(t={}),{name:"shift",options:t,async fn(e){const{x:n,y:i,placement:o}=e,{mainAxis:r=!0,crossAxis:a=!1,limiter:l={fn:t=>{let{x:e,y:n}=t;return{x:e,y:n}}},...u}=f(t,e),d={x:n,y:i},p=await A(e,u),h=g(c(o)),y=m(h);let w=d[y],x=d[h];if(r){const t="y"===y?"bottom":"right";w=s(w+p["y"===y?"top":"left"],w,w-p[t])}if(a){const t="y"===h?"bottom":"right";x=s(x+p["y"===h?"top":"left"],x,x-p[t])}const v=l.fn({...e,[y]:w,[h]:x});return{...v,data:{x:v.x-n,y:v.y-i}}}}},t.size=function(t){return void 0===t&&(t={}),{name:"size",options:t,async fn(e){const{placement:n,rects:i,platform:a,elements:l}=e,{apply:s=(()=>{}),...m}=f(t,e),d=await A(e,m),p=c(n),h=u(n),y="y"===g(n),{width:w,height:x}=i.floating;let v,b;"top"===p||"bottom"===p?(v=p,b=h===(await(null==a.isRTL?void 0:a.isRTL(l.floating))?"start":"end")?"left":"right"):(b=p,v="end"===h?"top":"bottom");const R=x-d[v],P=w-d[b],T=!e.middlewareData.shift;let D=R,O=P;if(y){const t=w-d.left-d.right;O=h||T?o(P,t):t}else{const t=x-d.top-d.bottom;D=h||T?o(R,t):t}if(T&&!h){const t=r(d.left,0),e=r(d.right,0),n=r(d.top,0),i=r(d.bottom,0);y?O=w-2*(0!==t||0!==e?t+e:r(d.left,d.right)):D=x-2*(0!==n||0!==i?n+i:r(d.top,d.bottom))}await s({...e,availableWidth:O,availableHeight:D});const E=await a.getDimensions(l.floating);return w!==E.width||x!==E.height?{reset:{rects:!0}}:{}}}}}));
;
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("@floating-ui/core")):"function"==typeof define&&define.amd?define(["exports","@floating-ui/core"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).FloatingUIDOM={},t.FloatingUICore)}(this,(function(t,e){"use strict";const n=Math.min,o=Math.max,i=Math.round,r=Math.floor,c=t=>({x:t,y:t});function l(t){return u(t)?(t.nodeName||"").toLowerCase():"#document"}function s(t){var e;return(null==t||null==(e=t.ownerDocument)?void 0:e.defaultView)||window}function f(t){var e;return null==(e=(u(t)?t.ownerDocument:t.document)||window.document)?void 0:e.documentElement}function u(t){return t instanceof Node||t instanceof s(t).Node}function a(t){return t instanceof Element||t instanceof s(t).Element}function d(t){return t instanceof HTMLElement||t instanceof s(t).HTMLElement}function h(t){return"undefined"!=typeof ShadowRoot&&(t instanceof ShadowRoot||t instanceof s(t).ShadowRoot)}function p(t){const{overflow:e,overflowX:n,overflowY:o,display:i}=v(t);return/auto|scroll|overlay|hidden|clip/.test(e+o+n)&&!["inline","contents"].includes(i)}function m(t){return["table","td","th"].includes(l(t))}function g(t){const e=y(),n=v(t);return"none"!==n.transform||"none"!==n.perspective||!!n.containerType&&"normal"!==n.containerType||!e&&!!n.backdropFilter&&"none"!==n.backdropFilter||!e&&!!n.filter&&"none"!==n.filter||["transform","perspective","filter"].some((t=>(n.willChange||"").includes(t)))||["paint","layout","strict","content"].some((t=>(n.contain||"").includes(t)))}function y(){return!("undefined"==typeof CSS||!CSS.supports)&&CSS.supports("-webkit-backdrop-filter","none")}function w(t){return["html","body","#document"].includes(l(t))}function v(t){return s(t).getComputedStyle(t)}function x(t){return a(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function b(t){if("html"===l(t))return t;const e=t.assignedSlot||t.parentNode||h(t)&&t.host||f(t);return h(e)?e.host:e}function T(t){const e=b(t);return w(e)?t.ownerDocument?t.ownerDocument.body:t.body:d(e)&&p(e)?e:T(e)}function L(t,e,n){var o;void 0===e&&(e=[]),void 0===n&&(n=!0);const i=T(t),r=i===(null==(o=t.ownerDocument)?void 0:o.body),c=s(i);return r?e.concat(c,c.visualViewport||[],p(i)?i:[],c.frameElement&&n?L(c.frameElement):[]):e.concat(i,L(i,[],n))}function R(t){const e=v(t);let n=parseFloat(e.width)||0,o=parseFloat(e.height)||0;const r=d(t),c=r?t.offsetWidth:n,l=r?t.offsetHeight:o,s=i(n)!==c||i(o)!==l;return s&&(n=c,o=l),{width:n,height:o,$:s}}function E(t){return a(t)?t:t.contextElement}function C(t){const e=E(t);if(!d(e))return c(1);const n=e.getBoundingClientRect(),{width:o,height:r,$:l}=R(e);let s=(l?i(n.width):n.width)/o,f=(l?i(n.height):n.height)/r;return s&&Number.isFinite(s)||(s=1),f&&Number.isFinite(f)||(f=1),{x:s,y:f}}const O=c(0);function S(t){const e=s(t);return y()&&e.visualViewport?{x:e.visualViewport.offsetLeft,y:e.visualViewport.offsetTop}:O}function F(t,n,o,i){void 0===n&&(n=!1),void 0===o&&(o=!1);const r=t.getBoundingClientRect(),l=E(t);let f=c(1);n&&(i?a(i)&&(f=C(i)):f=C(t));const u=function(t,e,n){return void 0===e&&(e=!1),!(!n||e&&n!==s(t))&&e}(l,o,i)?S(l):c(0);let d=(r.left+u.x)/f.x,h=(r.top+u.y)/f.y,p=r.width/f.x,m=r.height/f.y;if(l){const t=s(l),e=i&&a(i)?s(i):i;let n=t,o=n.frameElement;for(;o&&i&&e!==n;){const t=C(o),e=o.getBoundingClientRect(),i=v(o),r=e.left+(o.clientLeft+parseFloat(i.paddingLeft))*t.x,c=e.top+(o.clientTop+parseFloat(i.paddingTop))*t.y;d*=t.x,h*=t.y,p*=t.x,m*=t.y,d+=r,h+=c,n=s(o),o=n.frameElement}}return e.rectToClientRect({width:p,height:m,x:d,y:h})}const D=[":popover-open",":modal"];function P(t){return D.some((e=>{try{return t.matches(e)}catch(t){return!1}}))}function H(t){return F(f(t)).left+x(t).scrollLeft}function W(t,n,i){let r;if("viewport"===n)r=function(t,e){const n=s(t),o=f(t),i=n.visualViewport;let r=o.clientWidth,c=o.clientHeight,l=0,u=0;if(i){r=i.width,c=i.height;const t=y();(!t||t&&"fixed"===e)&&(l=i.offsetLeft,u=i.offsetTop)}return{width:r,height:c,x:l,y:u}}(t,i);else if("document"===n)r=function(t){const e=f(t),n=x(t),i=t.ownerDocument.body,r=o(e.scrollWidth,e.clientWidth,i.scrollWidth,i.clientWidth),c=o(e.scrollHeight,e.clientHeight,i.scrollHeight,i.clientHeight);let l=-n.scrollLeft+H(t);const s=-n.scrollTop;return"rtl"===v(i).direction&&(l+=o(e.clientWidth,i.clientWidth)-r),{width:r,height:c,x:l,y:s}}(f(t));else if(a(n))r=function(t,e){const n=F(t,!0,"fixed"===e),o=n.top+t.clientTop,i=n.left+t.clientLeft,r=d(t)?C(t):c(1);return{width:t.clientWidth*r.x,height:t.clientHeight*r.y,x:i*r.x,y:o*r.y}}(n,i);else{const e=S(t);r={...n,x:n.x-e.x,y:n.y-e.y}}return e.rectToClientRect(r)}function M(t,e){const n=b(t);return!(n===e||!a(n)||w(n))&&("fixed"===v(n).position||M(n,e))}function z(t,e,n){const o=d(e),i=f(e),r="fixed"===n,s=F(t,!0,r,e);let u={scrollLeft:0,scrollTop:0};const a=c(0);if(o||!o&&!r)if(("body"!==l(e)||p(i))&&(u=x(e)),o){const t=F(e,!0,r,e);a.x=t.x+e.clientLeft,a.y=t.y+e.clientTop}else i&&(a.x=H(i));return{x:s.left+u.scrollLeft-a.x,y:s.top+u.scrollTop-a.y,width:s.width,height:s.height}}function A(t,e){return d(t)&&"fixed"!==v(t).position?e?e(t):t.offsetParent:null}function V(t,e){const n=s(t);if(!d(t)||P(t))return n;let o=A(t,e);for(;o&&m(o)&&"static"===v(o).position;)o=A(o,e);return o&&("html"===l(o)||"body"===l(o)&&"static"===v(o).position&&!g(o))?n:o||function(t){let e=b(t);for(;d(e)&&!w(e);){if(g(e))return e;e=b(e)}return null}(t)||n}const N={convertOffsetParentRelativeRectToViewportRelativeRect:function(t){let{elements:e,rect:n,offsetParent:o,strategy:i}=t;const r="fixed"===i,s=f(o),u=!!e&&P(e.floating);if(o===s||u&&r)return n;let a={scrollLeft:0,scrollTop:0},h=c(1);const m=c(0),g=d(o);if((g||!g&&!r)&&(("body"!==l(o)||p(s))&&(a=x(o)),d(o))){const t=F(o);h=C(o),m.x=t.x+o.clientLeft,m.y=t.y+o.clientTop}return{width:n.width*h.x,height:n.height*h.y,x:n.x*h.x-a.scrollLeft*h.x+m.x,y:n.y*h.y-a.scrollTop*h.y+m.y}},getDocumentElement:f,getClippingRect:function(t){let{element:e,boundary:i,rootBoundary:r,strategy:c}=t;const s=[..."clippingAncestors"===i?function(t,e){const n=e.get(t);if(n)return n;let o=L(t,[],!1).filter((t=>a(t)&&"body"!==l(t))),i=null;const r="fixed"===v(t).position;let c=r?b(t):t;for(;a(c)&&!w(c);){const e=v(c),n=g(c);n||"fixed"!==e.position||(i=null),(r?!n&&!i:!n&&"static"===e.position&&i&&["absolute","fixed"].includes(i.position)||p(c)&&!n&&M(t,c))?o=o.filter((t=>t!==c)):i=e,c=b(c)}return e.set(t,o),o}(e,this._c):[].concat(i),r],f=s[0],u=s.reduce(((t,i)=>{const r=W(e,i,c);return t.top=o(r.top,t.top),t.right=n(r.right,t.right),t.bottom=n(r.bottom,t.bottom),t.left=o(r.left,t.left),t}),W(e,f,c));return{width:u.right-u.left,height:u.bottom-u.top,x:u.left,y:u.top}},getOffsetParent:V,getElementRects:async function(t){const e=this.getOffsetParent||V,n=this.getDimensions;return{reference:z(t.reference,await e(t.floating),t.strategy),floating:{x:0,y:0,...await n(t.floating)}}},getClientRects:function(t){return Array.from(t.getClientRects())},getDimensions:function(t){const{width:e,height:n}=R(t);return{width:e,height:n}},getScale:C,isElement:a,isRTL:function(t){return"rtl"===v(t).direction}};const B=e.autoPlacement,I=e.shift,k=e.flip,j=e.size,q=e.hide,U=e.arrow,X=e.inline,Y=e.limitShift;Object.defineProperty(t,"detectOverflow",{enumerable:!0,get:function(){return e.detectOverflow}}),Object.defineProperty(t,"offset",{enumerable:!0,get:function(){return e.offset}}),t.arrow=U,t.autoPlacement=B,t.autoUpdate=function(t,e,i,c){void 0===c&&(c={});const{ancestorScroll:l=!0,ancestorResize:s=!0,elementResize:u="function"==typeof ResizeObserver,layoutShift:a="function"==typeof IntersectionObserver,animationFrame:d=!1}=c,h=E(t),p=l||s?[...h?L(h):[],...L(e)]:[];p.forEach((t=>{l&&t.addEventListener("scroll",i,{passive:!0}),s&&t.addEventListener("resize",i)}));const m=h&&a?function(t,e){let i,c=null;const l=f(t);function s(){var t;clearTimeout(i),null==(t=c)||t.disconnect(),c=null}return function f(u,a){void 0===u&&(u=!1),void 0===a&&(a=1),s();const{left:d,top:h,width:p,height:m}=t.getBoundingClientRect();if(u||e(),!p||!m)return;const g={rootMargin:-r(h)+"px "+-r(l.clientWidth-(d+p))+"px "+-r(l.clientHeight-(h+m))+"px "+-r(d)+"px",threshold:o(0,n(1,a))||1};let y=!0;function w(t){const e=t[0].intersectionRatio;if(e!==a){if(!y)return f();e?f(!1,e):i=setTimeout((()=>{f(!1,1e-7)}),100)}y=!1}try{c=new IntersectionObserver(w,{...g,root:l.ownerDocument})}catch(t){c=new IntersectionObserver(w,g)}c.observe(t)}(!0),s}(h,i):null;let g,y=-1,w=null;u&&(w=new ResizeObserver((t=>{let[n]=t;n&&n.target===h&&w&&(w.unobserve(e),cancelAnimationFrame(y),y=requestAnimationFrame((()=>{var t;null==(t=w)||t.observe(e)}))),i()})),h&&!d&&w.observe(h),w.observe(e));let v=d?F(t):null;return d&&function e(){const n=F(t);!v||n.x===v.x&&n.y===v.y&&n.width===v.width&&n.height===v.height||i();v=n,g=requestAnimationFrame(e)}(),i(),()=>{var t;p.forEach((t=>{l&&t.removeEventListener("scroll",i),s&&t.removeEventListener("resize",i)})),null==m||m(),null==(t=w)||t.disconnect(),w=null,d&&cancelAnimationFrame(g)}},t.computePosition=(t,n,o)=>{const i=new Map,r={platform:N,...o},c={...r.platform,_c:i};return e.computePosition(t,n,{...r,platform:c})},t.flip=k,t.getOverflowAncestors=L,t.hide=q,t.inline=X,t.limitShift=Y,t.platform=N,t.shift=I,t.size=j}));
;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
((Drupal,once,{computePosition,offset,shift,flip})=>{Drupal.behaviors.dropdownInit={attach:(context)=>{once('dropdown-trigger','[data-drupal-dropdown]',context).forEach((trigger)=>{const dropdown=trigger.nextElementSibling;const updatePosition=()=>{computePosition(trigger,dropdown,{strategy:'fixed',placement:trigger.dataset.drupalDropdownPosition||'bottom',middleware:[flip({padding:16}),offset(6),shift({padding:16})]}).then(({x,y})=>{Object.assign(dropdown.style,{left:`${x}px`,top:`${y}px`});});};trigger.addEventListener('click',(e)=>{updatePosition();trigger.setAttribute('aria-expanded',e.currentTarget.getAttribute('aria-expanded')==='false');});document.addEventListener('click',(e)=>{const isButtonClicked=trigger.contains(e.target);if(!isButtonClicked)trigger.setAttribute('aria-expanded','false');});});}};})(Drupal,once,FloatingUIDOM);;
const POPOVER_OPEN_DELAY=150;const POPOVER_CLOSE_DELAY=400;((Drupal,once)=>{Drupal.behaviors.navigationProcessPopovers={attach:(context)=>{once('toolbar-popover',context.querySelectorAll('[data-toolbar-popover]')).forEach((popover)=>{const button=popover.querySelector('[data-toolbar-popover-control]');const tooltip=popover.querySelector('[data-toolbar-popover-wrapper]');if(!button||!tooltip)return;const handleMouseMove=(event)=>{button.style.setProperty('--safe-triangle-cursor-x',`${event.clientX}px`);button.style.setProperty('--safe-triangle-cursor-y',`${event.clientY}px`);};const expandPopover=()=>{popover.classList.add('toolbar-popover--expanded');tooltip.removeAttribute('inert');};const collapsePopover=()=>{popover.classList.remove('toolbar-popover--expanded');tooltip.setAttribute('inert',true);};const toggleState=(state,initialLoad=false)=>{state&&!initialLoad?expandPopover():collapsePopover();button.setAttribute('aria-expanded',state&&!initialLoad);const text=button.querySelector('[data-toolbar-action]');if(text)text.textContent=state?Drupal.t('Collapse'):Drupal.t('Extend');popover.dispatchEvent(new CustomEvent('toolbar-popover-toggled',{bubbles:true,detail:{state}}));};const isPopoverHoverOrFocus=()=>popover.contains(document.activeElement)||popover.matches(':hover');const delayedClose=()=>{setTimeout(()=>{if(isPopoverHoverOrFocus())return;close();},POPOVER_CLOSE_DELAY);};const open=()=>{['mouseleave','focusout'].forEach((e)=>{button.addEventListener(e,delayedClose,false);tooltip.addEventListener(e,delayedClose,false);});};const close=()=>{toggleState(false);['mouseleave','focusout'].forEach((e)=>{button.removeEventListener(e,delayedClose);tooltip.removeEventListener(e,delayedClose);});};button.addEventListener('mousemove',handleMouseMove);button.addEventListener('mouseover',()=>{if(window.matchMedia('(max-width: 1023px)').matches)return;setTimeout(()=>{if(!button.matches(':hover')||!button.getAttribute('aria-expanded')==='false')return;toggleState(true);open();},POPOVER_OPEN_DELAY);});button.addEventListener('click',(e)=>{const state=e.currentTarget.getAttribute('aria-expanded')==='false';toggleState(state);});popover.addEventListener('toolbar-popover-close',()=>{close();});popover.addEventListener('toolbar-popover-open',()=>{toggleState(true);});popover.addEventListener('toolbar-active-url',()=>{toggleState(true,true);});});}};})(Drupal,once);;
((Drupal,once)=>{const TOOLBAR_MENU_SET_TOGGLE='toolbar-menu-set-toggle';Drupal.behaviors.navigationProcessToolbarMenuTriggers={attach:(context)=>{once('toolbar-menu-trigger','[data-toolbar-menu-trigger]',context).forEach((button)=>{const menu=button.nextElementSibling;const text=button.querySelector('.toolbar-menu__link-action');const toggleButtonState=(state)=>{button.setAttribute('aria-expanded',state);if(text)text.textContent=state?Drupal.t('Collapse'):Drupal.t('Extend');if(state)menu.removeAttribute('inert');else menu.setAttribute('inert',true);};button.addEventListener('click',(e)=>{const level=e.currentTarget.dataset.toolbarMenuTrigger;const state=e.currentTarget.getAttribute('aria-expanded')==='false';toggleButtonState(state);button.dispatchEvent(new CustomEvent('toolbar-menu-toggled',{bubbles:true,detail:{state,level}}));});button.addEventListener(TOOLBAR_MENU_SET_TOGGLE,(e)=>{const newState=e.detail.state;toggleButtonState(newState);});});}};Drupal.behaviors.navigationProcessToolbarMenuLinks={attach:(context)=>{once('toolbar-menu-link','a.toolbar-menu__link, a.toolbar-button',context).forEach((link)=>{if(document.URL===link.href){link.classList.add('current','is-active');link.dispatchEvent(new CustomEvent('toolbar-active-url',{bubbles:true}));const menu=link.closest('.toolbar-menu');if(menu)menu.previousElementSibling.dispatchEvent(new CustomEvent(TOOLBAR_MENU_SET_TOGGLE,{detail:{state:true}}));}});}};})(Drupal,once);;
((Drupal,once,{computePosition,offset,shift,flip})=>{Drupal.theme.tooltipWrapper=(dataset)=>`<div class="toolbar-tooltip ${dataset.drupalTooltipClass||''}">
      ${dataset.drupalTooltip}
    </div>`;Drupal.behaviors.tooltipInit={attach:(context)=>{once('tooltip-trigger','[data-drupal-tooltip]',context).forEach((trigger)=>{trigger.insertAdjacentHTML('afterend',Drupal.theme.tooltipWrapper(trigger.dataset));const tooltip=trigger.nextElementSibling;const updatePosition=()=>{computePosition(trigger,tooltip,{strategy:'fixed',placement:trigger.dataset.drupalTooltipPosition||'right',middleware:[flip({padding:16}),offset(6),shift({padding:16})]}).then(({x,y})=>{Object.assign(tooltip.style,{left:`${x}px`,top:`${y}px`});});};const ro=new ResizeObserver(updatePosition);ro.observe(trigger);trigger.addEventListener('mouseover',updatePosition);trigger.addEventListener('focus',updatePosition);});}};})(Drupal,once,FloatingUIDOM);;
((Drupal,once)=>{Drupal.behaviors.navigation={attach(context){once('navigation','.admin-toolbar',context).forEach((sidebar)=>{const backButton=sidebar.querySelector('[data-toolbar-back-control]');if(!backButton)return;const buttons=sidebar.querySelectorAll('[data-toolbar-menu-trigger]');const tooltips=sidebar.querySelectorAll('[data-drupal-tooltip]');const closeButtons=()=>{buttons.forEach((button)=>{button.dispatchEvent(new CustomEvent('toolbar-menu-set-toggle',{detail:{state:false}}));});};const closePopovers=(current=false)=>{sidebar.querySelectorAll('[data-toolbar-popover]').forEach((popover)=>{if(current&&current instanceof Element&&popover.isEqualNode(current))return;popover.dispatchEvent(new CustomEvent('toolbar-popover-close',{}));});};sidebar.addEventListener('click',(e)=>{if(e.target.matches('button, button *'))e.target.closest('button').focus();});sidebar.addEventListener('toggle-admin-toolbar-content',(e)=>{if(!e.detail.state)closePopovers();});sidebar.addEventListener('toolbar-popover-toggled',(e)=>{if(e.detail.state){closeButtons();closePopovers(e.target);}});sidebar.addEventListener('toolbar-menu-toggled',(e)=>{if(e.detail.state){const targetLevel=e.detail.level;buttons.forEach((button)=>{const buttonLevel=button.dataset.toolbarMenuTrigger;if(!button.isEqualNode(e.target)&&+buttonLevel===+targetLevel)button.dispatchEvent(new CustomEvent('toolbar-menu-set-toggle',{detail:{state:false}}));});}});backButton.addEventListener('click',closePopovers);tooltips.forEach((tooltip)=>{['mouseover','focus'].forEach((e)=>{tooltip.addEventListener(e,closePopovers);});});});}};})(Drupal,once);;
((Drupal,once)=>{const HTML_TRIGGER_EVENT='toggle-admin-toolbar';const SIDEBAR_CONTENT_EVENT='toggle-admin-toolbar-content';Drupal.behaviors.navigationProcessHtmlListener={attach:(context)=>{if(context===document)if(once('admin-toolbar-document-triggers-listener',document.documentElement).length){const doc=document.documentElement;setTimeout(()=>{doc.setAttribute('data-admin-toolbar-transitions',true);},200);doc.addEventListener(HTML_TRIGGER_EVENT,(e)=>{const newState=e.detail.state;const isUserInput=e.detail.manual;document.documentElement.setAttribute('data-admin-toolbar',newState?'expanded':'collapsed');document.documentElement.setAttribute('data-admin-toolbar-body-scroll',newState?'locked':'unlocked');doc.querySelector('.admin-toolbar').dispatchEvent(new CustomEvent(SIDEBAR_CONTENT_EVENT,{detail:{state:newState}}));if(isUserInput)document.documentElement.setAttribute('data-admin-toolbar-animating',true);setTimeout(()=>{document.documentElement.removeAttribute('data-admin-toolbar-animating');},200);Drupal.displace(true);});const initDisplace=()=>{const displaceElement=doc.querySelector('.admin-toolbar')?.querySelector('.admin-toolbar__displace-placeholder');const edge=document.documentElement.dir==='rtl'?'right':'left';displaceElement?.setAttribute(`data-offset-${edge}`,'');Drupal.displace(true);};initDisplace();}}};Drupal.behaviors.navigationProcessToolbarTriggers={attach:(context)=>{const triggers=once('admin-toolbar-trigger','[aria-controls="admin-toolbar"]',context);const toggleTriggers=(toState)=>{triggers.forEach((trigger)=>{trigger.setAttribute('aria-expanded',toState);const text=trigger.querySelector('[data-text]');if(text)text.textContent=toState?Drupal.t('Collapse sidebar'):Drupal.t('Expand sidebar');});};let firstState=localStorage.getItem('Drupal.navigation.sidebarExpanded')!=='false';if(window.matchMedia('(max-width: 1023px)').matches)firstState=false;toggleTriggers(firstState);document.documentElement.dispatchEvent(new CustomEvent(HTML_TRIGGER_EVENT,{bubbles:true,detail:{state:firstState,manual:false}}));triggers.forEach((trigger)=>{trigger.addEventListener('click',(e)=>{const state=e.currentTarget.getAttribute('aria-expanded')==='false';trigger.dispatchEvent(new CustomEvent(HTML_TRIGGER_EVENT,{bubbles:true,detail:{state,manual:true}}));toggleTriggers(state);localStorage.setItem('Drupal.navigation.sidebarExpanded',state);});});}};})(Drupal,once);;
((Drupal,once,{focusable})=>{Drupal.behaviors.keyboardNavigation={attach:(context)=>{once('keyboard-processed','.admin-toolbar',context).forEach((sidebar)=>{const IS_RTL=document.documentElement.dir==='rtl';const isInteractive=(element)=>element.getAttribute('aria-expanded');const getFocusableGroup=(element)=>element.closest('[class*="toolbar-menu--level-"]')||element.closest('[data-toolbar-popover-wrapper]')||element.closest('.admin-toolbar');const findFirstElementByChar=(focusableElements,targetChar)=>{const elementWIthChar=Array.prototype.find.call(focusableElements,(element)=>{const dataText=element.dataset.indexText;return dataText&&dataText[0]===targetChar;});return elementWIthChar;};const checkChar=({key,target})=>{const currentGroup=getFocusableGroup(target);const foundElementWithIndexChar=findFirstElementByChar(focusable(currentGroup),key);if(foundElementWithIndexChar)foundElementWithIndexChar.focus();};const focusFirstInGroup=(focusableElements)=>{focusableElements[0].focus();};const focusLastInGroup=(focusableElements)=>{focusableElements[focusableElements.length-1].focus();};const focusNextInGroup=(focusableElements,element)=>{const currentIndex=Array.prototype.indexOf.call(focusableElements,element);if(currentIndex===focusableElements.length-1)focusableElements[0].focus();else focusableElements[currentIndex+1].focus();};const focusPreviousInGroup=(focusableElements,element)=>{const currentIndex=Array.prototype.indexOf.call(focusableElements,element);if(currentIndex===0)focusableElements[focusableElements.length-1].focus();else focusableElements[currentIndex-1].focus();};const toggleMenu=(element,state)=>element.dispatchEvent(new CustomEvent('toolbar-menu-set-toggle',{bubbles:false,detail:{state}}));const closePopover=(element)=>element.dispatchEvent(new CustomEvent('toolbar-popover-close',{bubbles:true}));const openPopover=(element)=>element.dispatchEvent(new CustomEvent('toolbar-popover-open',{bubbles:true}));const focusClosestPopoverTrigger=(element)=>{element.closest('[data-toolbar-popover]')?.querySelector('[data-toolbar-popover-control]')?.focus();};const focusFirstMenuElement=(element)=>{const elements=focusable(element.closest('.toolbar-menu__item')?.querySelector('.toolbar-menu'));if(elements?.length)elements[0].focus();};const focusFirstPopoverElement=(element)=>{const elements=focusable(element.closest('[data-toolbar-popover]'));if(elements?.length>=1)elements[1].focus();};const focusLastPopoverElement=(element)=>{const elements=focusable(element.closest('[data-toolbar-popover]'));if(elements?.length>0)elements[elements.length-1].focus();};const closeNonInteractiveElement=(element)=>{if(element.closest('[class*="toolbar-menu--level-"]')){const trigger=element.closest('.toolbar-menu')?.previousElementSibling;toggleMenu(trigger,false);trigger.focus();}else{closePopover(element);focusClosestPopoverTrigger(element);}};const openInteractiveElement=(element)=>{if(element.hasAttribute('data-toolbar-menu-trigger')){toggleMenu(element,true);focusFirstMenuElement(element);}if(element.hasAttribute('data-toolbar-popover-control')){openPopover(element);focusFirstPopoverElement(element);}};const closeInteractiveElement=(element)=>{if(element.hasAttribute('data-toolbar-menu-trigger'))if(element.getAttribute('aria-expanded')==='false')closeNonInteractiveElement(element);else{toggleMenu(element,false);focusFirstMenuElement(element);}if(element.hasAttribute('data-toolbar-popover-control')){openPopover(element);focusLastPopoverElement(element);}};const arrowsSideControl=({key,target})=>{if((key==='ArrowRight'&&!IS_RTL)||(key==='ArrowLeft'&&IS_RTL)){if(isInteractive(target)){openInteractiveElement(target);if(target.getAttribute('aria-controls')==='admin-toolbar'&&target.getAttribute('aria-expanded')==='false')target.click();}}else{if((key==='ArrowRight'&&IS_RTL)||(key==='ArrowLeft'&&!IS_RTL))if(isInteractive(target)){closeInteractiveElement(target);if(target.getAttribute('aria-controls')==='admin-toolbar'&&target.getAttribute('aria-expanded')!=='false')target.click();}else closeNonInteractiveElement(target);}};const arrowsDirectionControl=({key,target})=>{const focusableElements=focusable(getFocusableGroup(target));if(key==='ArrowUp')focusPreviousInGroup(focusableElements,target);else{if(key==='ArrowDown')focusNextInGroup(focusableElements,target);}};sidebar.addEventListener('keydown',(e)=>{switch(e.key){case 'Escape':closePopover(e.target);focusClosestPopoverTrigger(e.target);break;case 'ArrowLeft':case 'ArrowRight':e.preventDefault();arrowsSideControl(e);break;case 'ArrowDown':case 'ArrowUp':e.preventDefault();arrowsDirectionControl(e);break;case 'Home':e.preventDefault();focusFirstInGroup(getFocusableGroup(e.target));break;case 'End':e.preventDefault();focusLastInGroup(getFocusableGroup(e.target));break;default:checkChar(e);break;}});});}};})(Drupal,once,window.tabbable);;