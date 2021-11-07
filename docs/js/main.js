(()=>{"use strict";var e={9607:(e,t,l)=>{l.r(t)},4196:(e,t,l)=>{l.r(t)},7209:(e,t,l)=>{l.r(t)},6684:(e,t,l)=>{l.r(t)},120:(e,t,l)=>{l.r(t)},2217:(e,t,l)=>{l.r(t)},840:(e,t,l)=>{l.r(t)},4415:(e,t,l)=>{l.r(t)},3820:(e,t,l)=>{l.r(t)},9803:(e,t,l)=>{l.r(t)},7960:(e,t,l)=>{l.r(t)},2396:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.initAccordions=void 0;const n=l(1287);t.initAccordions=function(e){let t=e.getElementsByClassName(n.accordion);for(let e=0;e<t.length;++e){let l=t[e],o=l.nextElementSibling,i=o.scrollHeight+"px";o.style.maxHeight=i,l.onclick=()=>{l.classList.toggle(n.collapsed),o.style.maxHeight="0px"===o.style.maxHeight?i:"0px"}}}},1287:(e,t)=>{function l(e){return void 0!==e.length}function n(e,t){if(l(e))for(let l=0;l<e.length;++l)t(e[l]);else t(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.attr=t.create=t.each=t.isHTMLCollection=t.elementsWithStyle=t.firstElementWithStyle=t.infobox=t.closepopups=t.scrollingarea=t.navbar=t.hamburger=t.accordion=t.collapsed=t.expanded=void 0,t.expanded="expanded",t.collapsed="collapsed",t.accordion="accordion",t.hamburger="hamburger",t.navbar="navbar",t.scrollingarea="scrollingarea",t.closepopups="closepopups",t.infobox="info-box",t.firstElementWithStyle=function(e,t=document){let l=t.getElementsByClassName(e)[0];if(!l)throw ReferenceError(`Cannot find element with class "${e}".`);return l},t.elementsWithStyle=function(e,t=document){return t.getElementsByClassName(e)},t.isHTMLCollection=l,t.each=n,t.create=function(e,t=null){let l=document.createElement(e);return t&&("string"==typeof t?l.appendChild(document.createTextNode(t)):n(t,(e=>l.appendChild(e)))),l},t.attr=function(e,t,l){return n(e,(e=>e.setAttribute(t,l))),e}},4756:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.toggleClassOnClick=t.popupOnClick=void 0;const n=l(1287);let o=n.firstElementWithStyle(n.closepopups);function i(e,t,l){e.addEventListener("click",t),o.addEventListener("mouseup",l),document.addEventListener("keydown",(e=>{"Escape"===e.key&&l()}))}t.popupOnClick=i,t.toggleClassOnClick=function(e,t,l=e){i(e,(()=>n.each(l,(e=>e.classList.toggle(t)))),(()=>n.each(l,(e=>e.classList.remove(t)))))}},7269:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),l(9607),l(3820)},442:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),l(4196)},4266:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),l(7209);const n=l(1287),o=l(4756);n.each(n.elementsWithStyle("hamburger"),(e=>(0,o.toggleClassOnClick)(e,"open")))},6302:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),l(6684);const n=l(1287);!function(){let e=n.elementsWithStyle("scroll-indicator");if(!e||2!=e.length)return;let t=e[0],l=e[1];function o(){t.style.opacity="0",l.style.opacity="0";for(let e of n.elementsWithStyle("info-box")){let n=e,o=window.pageYOffset,i=window.pageYOffset+window.innerHeight,s=6,r=n.offsetTop,a=r+n.offsetHeight,d=window.innerHeight/s;0==o?(n.style.opacity="0",l.style.opacity="1"):r<i-d&&a>o+d?n.style.opacity="1":(n.style.opacity="0",a>o&&a<o+d&&(t.style.opacity="1"),r<i&&r>o-d&&(l.style.opacity="1"))}}window.addEventListener("scroll",o),window.addEventListener("resize",o),o()}(),function(){let e=n.elementsWithStyle("info-area")[0];if(!e)return;let t=[],l=e.querySelectorAll("h2"),o=n.firstElementWithStyle("info-menu"),i=document.createElement("ul");o.appendChild(i);for(let e=0;e<l.length;e++){const o=l[e];let s=n.attr(n.create("a",o.textContent),"href","#"+o.id),r=n.create("li",s);i.appendChild(r),t[e]={heading:o,li:r}}window.addEventListener("scroll",(()=>{let e=window.pageYOffset,l=!1,n=null;for(let o=0;o<t.length;o++){let i=t[o];i.li.classList.remove("highlight"),!l&&i.heading.offsetTop>e+i.heading.offsetHeight&&((n||i).li.classList.add("highlight"),l=!0),n=i}!l&&n&&n.li.classList.add("highlight")}))}()},5034:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),l(120);const n=l(1287),o=l(4756);let i=n.elementsWithStyle("layout")[0];if(i){let e=n.firstElementWithStyle("hamburger",i);(0,o.toggleClassOnClick)(e,"expanded",i.getElementsByClassName("collapsible"));let t=n.firstElementWithStyle("stickypane"),l=getComputedStyle(t),s=parseInt(l.top,10);function r(){let e=Math.min((window.innerHeight-t.offsetHeight)/2,s);t.style.top=`${e}px`}r(),window.addEventListener("resize",r)}},7007:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),l(840);const n=l(1287),o=l(4756);let i=n.firstElementWithStyle(n.navbar),s=n.firstElementWithStyle(n.hamburger,i),r=!1;(0,o.toggleClassOnClick)(s,n.expanded,i);let a=0===i.offsetTop,d=window.pageYOffset;function c(e,t){r=0!==t,i.classList.contains(n.expanded)||(e?i.style.top=`${t}px`:i.style.bottom=`${t}px`,i.style.opacity=r?"0":"1")}window.addEventListener("scroll",(()=>{var e=window.pageYOffset;c(a,d>e?0:-(i.offsetHeight-(a?1:2))),d=e})),i.addEventListener("mouseenter",(()=>{r&&c(a,0)}))},4057:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),l(4415);const n=l(1287);let o=n.elementsWithStyle("pagemenu")[0];if(o){let e=[],t=n.firstElementWithStyle("contentarea");function l(t,o,i,s,r){for(;r<s.length;){let a=s[r],d=parseInt(a.tagName.substr(1,1));if(d<i)return r;if(d>i)if(o){let e=document.createElement("ul");o.appendChild(e),r=l(e,null,d,s,r)}else r=l(t,null,d,s,r);else{let o=n.attr(n.create("a",a.textContent),"href","#"+a.id),d=n.create("li",o);t.appendChild(d),e[r]={heading:a,link:o},r=l(t,d,i,s,r+1)}}return r}l(n.firstElementWithStyle("pagetree",o),null,1,t.querySelectorAll("h1, h2, h3, h4, h5"),0),window.addEventListener("scroll",(()=>{let t=window.pageYOffset,l=!1,n=null;for(let o=0;o<e.length;o++){let i=e[o];i.link.classList.remove("highlight"),!l&&i.heading.offsetTop>t+i.heading.offsetHeight&&((n||i).link.classList.add("highlight"),l=!0),n=i}!l&&n&&n.link.classList.add("highlight")}))}},4624:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),l(9803);const n=l(1287),o=l(2396);let i=n.elementsWithStyle("tocmenu")[0];i&&(document.fonts&&"loaded"!=document.fonts.status?document.fonts.onloadingdone=()=>(0,o.initAccordions)(i):(0,o.initAccordions)(i))},3414:(e,t,l)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.tooltip=void 0;const n=l(1287);l(7960),document.querySelectorAll('[data-toggle="tooltip"]').forEach((e=>i(e,e.getAttribute("data-title"))));const o="tooltip";function i(e,t){e.addEventListener("mouseenter",(()=>function(e,t){if(s(),!t)return;let l=n.create("legend");document.body.appendChild(l),l.id=o,l.innerHTML=t.replace(/=>/g,"⇒");let i=e.getBoundingClientRect();l.style.left=`${Math.round(i.left)+window.scrollX}px`,l.style.top=`${Math.round(i.top)+window.scrollY}px`,l.style.opacity="95%"}(e,t))),e.addEventListener("mouseleave",s)}function s(){let e=document.getElementById(o);e&&e.remove()}t.tooltip=i}},t={};function l(n){var o=t[n];if(void 0!==o)return o.exports;var i=t[n]={exports:{}};return e[n](i,i.exports,l),i.exports}l.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l(2217),l(4266),l(7007),l(5034),l(4624),l(7269),l(4057),l(442),l(3414),l(6302)})();