"use strict";(self.webpackChunkwelcome_to_mars=self.webpackChunkwelcome_to_mars||[]).push([[678],{8032:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return x},P:function(){return E},S:function(){return D},_:function(){return l},a:function(){return i},b:function(){return m},g:function(){return d},h:function(){return o}});var r=a(7294),s=(a(2369),a(5697)),n=a.n(s);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,s={},n=Object.keys(e);for(r=0;r<n.length;r++)t.indexOf(a=n[r])>=0||(s[a]=e[a]);return s}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let s="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(s="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:s,"data-gatsby-image-wrapper":"",style:r}}function m(e,t,a,r,s){return void 0===s&&(s={}),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},s,{opacity:t?1:0})})}function d(e,t,a,r,s,n,l,o){const c={};n&&(c.backgroundColor=n,"fixed"===a?(c.width=r,c.height=s,c.backgroundColor=n,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),l&&(c.objectFit=l),o&&(c.objectPosition=o);const m=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return m}const u=["children"],p=function(e){let{layout:t,width:a,height:s}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:s/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+s+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=l(e,u);return r.createElement(r.Fragment,null,r.createElement(p,i({},a)),t,null)},h=["src","srcSet","loading","alt","shouldLoad"],f=["fallback","sources","shouldLoad"],y=function(e){let{src:t,srcSet:a,loading:s,alt:n="",shouldLoad:o}=e,c=l(e,h);return r.createElement("img",i({},c,{decoding:"async",loading:s,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:n}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:s=!0}=e,n=l(e,f);const o=n.sizes||(null==t?void 0:t.sizes),c=r.createElement(y,i({},n,t,{sizes:o,shouldLoad:s}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:n}=e;return r.createElement("source",{key:t+"-"+n+"-"+a,type:n,media:t,srcSet:s?a:void 0,"data-srcset":s?void 0:a,sizes:o})})),c):c};var b;y.propTypes={src:s.string.isRequired,alt:s.string.isRequired,sizes:s.string,srcSet:s.string,shouldLoad:s.bool},w.displayName="Picture",w.propTypes={alt:s.string.isRequired,shouldLoad:s.bool,fallback:s.exact({src:s.string.isRequired,srcSet:s.string,sizes:s.string}),sources:s.arrayOf(s.oneOfType([s.exact({media:s.string.isRequired,type:s.string,sizes:s.string,srcSet:s.string.isRequired}),s.exact({media:s.string,type:s.string.isRequired,sizes:s.string,srcSet:s.string.isRequired})]))};const v=["fallback"],E=function(e){let{fallback:t}=e,a=l(e,v);return t?r.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};E.displayName="Placeholder",E.propTypes={fallback:s.string,sources:null==(b=w.propTypes)?void 0:b.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const x=function(e){return r.createElement(r.Fragment,null,r.createElement(w,i({},e)),r.createElement("noscript",null,r.createElement(w,i({},e,{shouldLoad:!0}))))};x.displayName="MainImage",x.propTypes=w.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],k=["style","className"],S=e=>e.replace(/\n/g,""),L=function(e,t,a){for(var r=arguments.length,s=new Array(r>3?r-3:0),i=3;i<r;i++)s[i-3]=arguments[i];return e.alt||""===e.alt?n().string.apply(n(),[e,t,a].concat(s)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},z={image:n().object.isRequired,alt:L},N=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],T=["style","className"],j=new Set;let I,_;const O=function(e){let{as:t="div",image:s,style:n,backgroundColor:m,className:d,class:u,onStartLoad:p,onLoad:g,onError:h}=e,f=l(e,N);const{width:y,height:w,layout:b}=s,v=c(y,w,b),{style:E,className:x}=v,C=l(v,T),k=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(s.images)),[s.images]);u&&(d=u);const L=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(b,y,w);return(0,r.useEffect)((()=>{I||(I=Promise.all([a.e(774),a.e(731)]).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return _=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=k.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void j.add(S);if(_&&j.has(S))return;let t,r;return I.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;k.current&&(k.current.innerHTML=a(i({isLoading:!0,isLoaded:j.has(S),image:s},f)),j.has(S)||(t=requestAnimationFrame((()=>{k.current&&(r=l(k.current,S,j,n,p,g,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[s]),(0,r.useLayoutEffect)((()=>{j.has(S)&&_&&(k.current.innerHTML=_(i({isLoading:j.has(S),isLoaded:j.has(S),image:s},f)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[s]),(0,r.createElement)(t,i({},C,{style:i({},E,n,{backgroundColor:m}),className:x+(d?" "+d:""),ref:k,dangerouslySetInnerHTML:{__html:L},suppressHydrationWarning:!0}))},P=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));P.propTypes=z,P.displayName="GatsbyImage";const A=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:s,__error:n}=t,o=l(t,A);return n&&console.warn(n),s?r.createElement(e,i({image:s},o)):(console.warn("Image not loaded",a),null)}}const F=q((function(e){let{as:t="div",className:a,class:s,style:n,image:o,loading:u="lazy",imgClassName:p,imgStyle:h,backgroundColor:f,objectFit:y,objectPosition:w}=e,b=l(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;s&&(a=s),h=i({objectFit:y,objectPosition:w,backgroundColor:f},h);const{width:v,height:L,layout:z,images:N,placeholder:T,backgroundColor:j}=o,I=c(v,L,z),{style:_,className:O}=I,P=l(I,k),A={fallback:void 0,sources:[]};return N.fallback&&(A.fallback=i({},N.fallback,{srcSet:N.fallback.srcSet?S(N.fallback.srcSet):void 0})),N.sources&&(A.sources=N.sources.map((e=>i({},e,{srcSet:S(e.srcSet)})))),r.createElement(t,i({},P,{style:i({},_,n,{backgroundColor:f}),className:O+(a?" "+a:"")}),r.createElement(g,{layout:z,width:v,height:L},r.createElement(E,i({},d(T,!1,z,v,L,j,y,w))),r.createElement(x,i({"data-gatsby-image-ssr":"",className:p},b,m("eager"===u,!1,A,u,h)))))})),M=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),s=2;s<a;s++)r[s-2]=arguments[s];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?n().number.apply(n(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},G=new Set(["fixed","fullWidth","constrained"]),R={src:n().string.isRequired,alt:L,width:M,height:M,sizes:n().string,layout:e=>{if(void 0!==e.layout&&!G.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};F.displayName="StaticImage",F.propTypes=R;const D=q(P);D.displayName="StaticImage",D.propTypes=R},2369:function(e){const t=(e,t)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");t=Object.assign({pascalCase:!1},t);if(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim(),0===e.length)return"";if(1===e.length)return t.pascalCase?e.toUpperCase():e.toLowerCase();return e!==e.toLowerCase()&&(e=(e=>{let t=!1,a=!1,r=!1;for(let s=0;s<e.length;s++){const n=e[s];t&&/[a-zA-Z]/.test(n)&&n.toUpperCase()===n?(e=e.slice(0,s)+"-"+e.slice(s),t=!1,r=a,a=!0,s++):a&&r&&/[a-zA-Z]/.test(n)&&n.toLowerCase()===n?(e=e.slice(0,s-1)+"-"+e.slice(s-1),r=a,a=!1,t=!0):(t=n.toLowerCase()===n&&n.toUpperCase()!==n,r=a,a=n.toUpperCase()===n&&n.toLowerCase()!==n)}return e})(e)),e=e.replace(/^[_.\- ]+/,"").toLowerCase().replace(/[_.\- ]+(\w|$)/g,((e,t)=>t.toUpperCase())).replace(/\d+(\w|$)/g,(e=>e.toUpperCase())),a=e,t.pascalCase?a.charAt(0).toUpperCase()+a.slice(1):a;var a};e.exports=t,e.exports.default=t},5592:function(e,t,a){a.d(t,{Z:function(){return i}});var r=a(7294),s=a(1883);var n=e=>{let{siteTitle:t}=e;return r.createElement("header",{style:{margin:"0 auto",padding:"var(--space-4) var(--size-gutter)",display:"flex",alignItems:"center",justifyContent:"space-between"}},r.createElement(s.Link,{to:"/",style:{fontSize:"var(--font-sm)",textDecoration:"none"}},t),r.createElement("img",{alt:"Gatsby logo",height:20,style:{margin:0},src:"data:image/svg+xml,%3Csvg fill='none' viewBox='0 0 107 28' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink'%3E%3CclipPath id='a'%3E%3Cpath d='m0 0h106.1v28h-106.1z'/%3E%3C/clipPath%3E%3Cg clip-path='url(%23a)'%3E%3Cg fill='%23000'%3E%3Cpath clip-rule='evenodd' d='m89 11.7c-.8 0-2.2.2-3.2 1.6v-8.10005h-2.8v16.80005h2.7v-1.3c1.1 1.5 2.6 1.5999 3.2 1.5999 3 0 5-2.2999 5-5.2999s-2-5.3-4.9-5.3zm-.7 2.5c1.7 0 2.8 1.2 2.8 2.8s-1.2 2.8-2.8 2.8c-1.7 0-2.8-1.2-2.8-2.8s1.1-2.8 2.8-2.8z' fill-rule='evenodd'/%3E%3Cpath d='m71.2 21.9999v-7.6h1.9v-2.4h-1.9v-3.40005h-2.8v3.40005h-1.1v2.4h1.1v7.6z'/%3E%3Cpath clip-rule='evenodd' d='m65.6999 12h-2.9v1.3c-.8999-1.5-2.4-1.6-3.2-1.6-2.9 0-4.8999 2.4-4.8999 5.3s1.9999 5.2999 5.0999 5.2999c.8 0 2.1001-.0999 3.1001-1.5999v1.3h2.7999zm-5.1999 7.8c-1.7001 0-2.8-1.2-2.8-2.8s1.2-2.8 2.8-2.8c1.7 0 2.7999 1.2 2.7999 2.8s-1.1999 2.8-2.7999 2.8z' fill-rule='evenodd'/%3E%3Cpath d='m79.7001 14.4c-.7-.6-1.3-.7-1.6-.7-.7 0-1.1.3-1.1.8 0 .3.1.6.9.9l.7.2c.1261.0472.2621.0945.4037.1437.7571.2632 1.6751.5823 2.0963 1.2563.3.4.5 1 .5 1.7 0 .9-.3 1.8-1.1 2.5s-1.8 1.0999-3 1.0999c-2.1 0-3.2-.9999-3.9-1.6999l1.5-1.7c.6.6 1.4 1.2 2.2 1.2s1.4-.4 1.4-1.1c0-.6-.5-.9-.9-1l-.6-.2c-.0687-.0295-.1384-.0589-.2087-.0887l-.0011-.0004c-.6458-.2729-1.3496-.5704-1.8902-1.1109-.5-.5-.8-1.1-.8-1.9 0-1 .5-1.8 1-2.3.8-.6 1.8-.7 2.6-.7.7 0 1.9.1 3.2 1.1z'/%3E%3Cpath d='m98.5 20.5-4.8-8.5h3.3l3.1 5.7 2.8-5.7h3.2l-8 15.3h-3.2z'/%3E%3Cpath d='m47 13.7h7c0 .0634.01.1267.0206.1932.0227.1435.0477.3018-.0206.5068 0 4.5-3.4 8.1-8 8.1s-8-3.6-8-8.1c0-4.49995 3.6-8.09995 8-8.09995 2.6 0 5 1.2 6.5 3.3l-2.3 1.49995c-1-1.29995-2.6-2.09995-4.2-2.09995-2.9 0-4.9 2.49995-4.9 5.39995s2.1 5.3 5 5.3c2.6 0 4-1.3 4.6-3.2h-3.7z'/%3E%3C/g%3E%3Cpath d='m18 14h7c0 5.2-3.7 9.6-8.5 10.8l-13.19995-13.2c1.1-4.9 5.5-8.6 10.69995-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.29995 2.5-8.49995 6l11.49995 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8z' fill='%23fff'/%3E%3Cpath d='m6.2 21.7001c-2.1-2.1-3.2-4.8-3.2-7.6l10.8 10.8c-2.7 0-5.5-1.1-7.6-3.2z' fill='%23fff'/%3E%3Cpath d='m14 0c-7.7 0-14 6.3-14 14s6.3 14 14 14 14-6.3 14-14-6.3-14-14-14zm-7.8 21.8c-2.1-2.1-3.2-4.9-3.2-7.6l10.9 10.8c-2.8-.1-5.6-1.1-7.7-3.2zm10.2 2.9-13.1-13.1c1.1-4.9 5.5-8.6 10.7-8.6 3.7 0 6.9 1.8 8.9 4.5l-1.5 1.3c-1.7-2.3-4.4-3.8-7.4-3.8-3.9 0-7.2 2.5-8.5 6l11.5 11.5c2.9-1 5.1-3.5 5.8-6.5h-4.8v-2h7c0 5.2-3.7 9.6-8.6 10.7z' fill='%237026b9'/%3E%3C/g%3E%3C/svg%3E"}))};var i=e=>{var t;let{children:a}=e;const i=(0,s.useStaticQuery)("3649515864");return r.createElement(r.Fragment,null,r.createElement(n,{siteTitle:(null===(t=i.site.siteMetadata)||void 0===t?void 0:t.title)||"Title"}),r.createElement("div",{style:{margin:"0 auto",maxWidth:"var(--size-content)",padding:"var(--size-gutter)"}},r.createElement("main",null,a),r.createElement("footer",{style:{marginTop:"var(--space-5)",fontSize:"var(--font-sm)"}},"© ",(new Date).getFullYear()," · Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby"))))}},9357:function(e,t,a){var r=a(7294),s=a(1883);t.Z=function(e){var t,a;let{description:n,title:i,children:l}=e;const{site:o}=(0,s.useStaticQuery)("63159454"),c=n||o.siteMetadata.description,m=null===(t=o.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,m?i+" | "+m:i),r.createElement("meta",{name:"description",content:c}),r.createElement("meta",{property:"og:title",content:i}),r.createElement("meta",{property:"og:description",content:c}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"twitter:card",content:"summary"}),r.createElement("meta",{name:"twitter:creator",content:(null===(a=o.siteMetadata)||void 0===a?void 0:a.author)||""}),r.createElement("meta",{name:"twitter:title",content:i}),r.createElement("meta",{name:"twitter:description",content:c}),l)}},278:function(e,t,a){a.r(t),a.d(t,{Head:function(){return u},default:function(){return p}});var r=a(7294),s=a(1883),n=a(8032),i=a(5592),l=a(9357);const o=[{text:"Tutorial",url:"https://www.gatsbyjs.com/docs/tutorial",description:"A great place to get started if you're new to web development. Designed to guide you through setting up your first Gatsby site."},{text:"Examples",url:"https://github.com/gatsbyjs/gatsby/tree/master/examples",description:"A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites."},{text:"Plugin Library",url:"https://www.gatsbyjs.com/plugins",description:"Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community."},{text:"Build and Host",url:"https://www.gatsbyjs.com/cloud",description:"Now you’re ready to show the world! Give your Gatsby site superpowers: Build and host on Gatsby Cloud. Get started for free!"}],c=[{text:"Page 2",url:"page-2",badge:!1,description:"A simple example of linking to another page within a Gatsby site"},{text:"TypeScript",url:"using-typescript"},{text:"Server Side Rendering",url:"using-ssr"},{text:"Deferred Static Generation",url:"using-dsg"}],m=[{text:"Join us on Discord",url:"https://gatsby.dev/discord"},{text:"Documentation",url:"https://gatsbyjs.com/docs/"},{text:"Starters",url:"https://gatsbyjs.com/starters/"},{text:"Showcase",url:"https://gatsbyjs.com/showcase/"},{text:"Contributing",url:"https://www.gatsbyjs.com/contributing/"},{text:"Issues",url:"https://github.com/gatsbyjs/gatsby/issues"}],d="?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter",u=()=>r.createElement(l.Z,{title:"Home"});var p=()=>r.createElement(i.Z,null,r.createElement("div",{className:"index-module--textCenter--4ece3"},r.createElement(n.S,{src:"../images/example.png",loading:"eager",width:64,quality:95,formats:["auto","webp","avif"],alt:"",style:{marginBottom:"var(--space-3)"},__imageData:a(1678)}),r.createElement("h1",null,"Welcome to ",r.createElement("b",null,"Mars!")),r.createElement("p",{className:"index-module--intro--0b876"},r.createElement("b",null,"Example pages:")," ",c.map(((e,t)=>r.createElement(r.Fragment,{key:e.url},r.createElement(s.Link,{to:e.url},e.text),t!==c.length-1&&r.createElement(r.Fragment,null," · ")))),r.createElement("br",null),"Edit ",r.createElement("code",null,"src/pages/index.js")," to update this page.")),r.createElement("ul",{className:"index-module--list--fb407"},o.map((e=>r.createElement("li",{key:e.url,className:"index-module--listItem--06e6d"},r.createElement("a",{className:"index-module--listItemLink--02c9e",href:""+e.url+d},e.text," ↗"),r.createElement("p",{className:"index-module--listItemDescription--f3875"},e.description))))),m.map(((e,t)=>r.createElement(r.Fragment,{key:e.url},r.createElement("a",{href:""+e.url+d},e.text),t!==m.length-1&&r.createElement(r.Fragment,null," · ")))))},1678:function(e){e.exports=JSON.parse('{"layout":"constrained","backgroundColor":"#f8f8f8","images":{"fallback":{"src":"/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/215bb/example.png","srcSet":"/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/134eb/example.png 16w,\\n/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/0f9f8/example.png 32w,\\n/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/215bb/example.png 64w,\\n/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/bab23/example.png 128w","sizes":"(min-width: 64px) 64px, 100vw"},"sources":[{"srcSet":"/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/e515b/example.avif 16w,\\n/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/ddf23/example.avif 32w,\\n/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/dfaf6/example.avif 64w,\\n/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/ad936/example.avif 128w","type":"image/avif","sizes":"(min-width: 64px) 64px, 100vw"},{"srcSet":"/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/69fd1/example.webp 16w,\\n/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/64762/example.webp 32w,\\n/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/555b2/example.webp 64w,\\n/welcome-to-mars/static/705185e5354a42a4570368356f29b7e5/72378/example.webp 128w","type":"image/webp","sizes":"(min-width: 64px) 64px, 100vw"}]},"width":64,"height":54}')}}]);
//# sourceMappingURL=component---src-pages-index-js-36e6023bcdd7d660fc16.js.map