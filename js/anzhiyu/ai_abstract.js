!function(){const{randomNum:e,basicWordCount:t,btnLink:n,key:i,Referer:a,gptName:o,switchBtn:l,mode:r}=GLOBAL_CONFIG.postHeadAiDescription,{title:c,postAI:s,pageFillDescription:d}=GLOBAL_CONFIG_SITE;let y,m=-1,u=!0,f=r,h=0,p=null,g=!1,T=null;const b=document.querySelector(".post-ai-description"),v=b.querySelector(".ai-title .anzhiyufont.anzhiyu-icon-arrow-rotate-right");let E=b.querySelector(".anzhiyu-icon-circle-dot");const k=b.querySelector(".ai-explanation");let L="",I="",M=600,A=0,S=0,q=[],w=0;const G=new IntersectionObserver((e=>{let t=e[0].isIntersecting;u=t,u&&(M=0===A?200:20,q[1]=setTimeout((()=>{S&&(A=0,S=0),0===A&&(k.innerHTML=L.charAt(0)),requestAnimationFrame(P)}),M))}),{threshold:0}),x=[function(){j("tianli"==f?"我是文章辅助AI: TianliGPT，点击下方的按钮，让我生成本文简介、推荐相关文章等。":`我是文章辅助AI: ${o} GPT，点击下方的按钮，让我生成本文简介、推荐相关文章等。`)},function(){v.click()},function(){A=0,S=1,$(),u=!1,w=0,k.innerHTML="生成中. . .",L="",I="",G.disconnect(),q[2]=setTimeout((()=>{k.innerHTML=function(){let e=document.querySelectorAll(".relatedPosts-list a");if(!e.length){const t=document.querySelector(".card-widget.card-recent-post");if(!t)return"";e=t.querySelectorAll(".aside-list-item a");let n="";for(let t=0;t<e.length;t++){const i=e[t];n+=`<div class="ai-recommend-item"><span class="index">${t+1}：</span><a href="javascript:;" onclick="pjax.loadUrl('${i.href}')" title="${i.title}" data-pjax-state="">${i.title}</a></div>`}return`很抱歉，无法找到类似的文章，你也可以看看本站最新发布的文章：<br /><div class="ai-recommend">${n}</div>`}let t="";for(let n=0;n<e.length;n++){const i=e[n];t+=`<div class="ai-recommend-item"><span>推荐${n+1}：</span><a href="javascript:;" onclick="pjax.loadUrl('${i.href}')" title="${i.title}" data-pjax-state="">${i.title}</a></div>`}return`推荐文章：<br /><div class="ai-recommend">${t}</div>`}()}),600)},function(){j("正在前往博客主页...",!1),q[2]=setTimeout((()=>{window.pjax?pjax.loadUrl("/"):location.href=location.origin}),1e3)}],B=b.querySelectorAll(".ai-btn-item");function P(e){if(u)if(P.start||(P.start=e),w=e-P.start,w>=20){if(P.start=e,A<I-1){let e=L.charAt(A+1),t=/[,.，。!?！？]/.test(e)?150:20;k.firstElementChild&&k.removeChild(k.firstElementChild),k.innerHTML+=e;let n=document.createElement("div");n.className="ai-cursor",k.appendChild(n),A++,150===t&&(b.querySelector(".ai-explanation .ai-cursor").style.opacity="0.2"),A===I-1&&(G.disconnect(),k.removeChild(k.firstElementChild)),q[0]=setTimeout((()=>{requestAnimationFrame(P)}),t)}}else requestAnimationFrame(P)}function $(){q.length&&q.forEach((e=>{e&&clearTimeout(e)}))}function j(e,t=!0){A=0,S=1,$(),u=!1,w=0,G.disconnect(),k.innerHTML=t?"生成中. . .":"请等待. . .",L=e,I=L.length,G.observe(b)}async function C(e=t){"tianli"===f?await async function(e){A=0,S=1,$(),u=!1,w=0,G.disconnect(),e=Math.max(10,Math.min(2e3,e));const t={key:i,Referer:a},n=(c+d).trim().substring(0,e),o={key:t.key,content:n,url:location.href},l={method:"POST",headers:{"Content-Type":"application/json",Referer:t.Referer},body:JSON.stringify(o)};console.info(n.length);try{let e,t=null;t&&clearInterval(t),t=setInterval((()=>{const e="生成中"+".".repeat(S);k.innerHTML=e,S=S%3+1}),500);const n=await fetch("https://summary.tianli0.top/",l);let i;i=403===n.status?{summary:"403 refer与key不匹配。"}:500===n.status?{summary:"500 系统内部错误"}:await n.json(),e=i.summary.trim(),T=i.id,setTimeout((()=>{v.style.opacity="1"}),300),j(e||"摘要获取失败!!!请检查Tianli服务是否正常!!!"),clearInterval(t)}catch(e){console.error(e),k.innerHTML="发生异常"+e}}(e):function(){const e=s.split(",").map((e=>e.trim()));if(1!==e.length){let t=Math.floor(Math.random()*e.length);for(;t===m;)t=Math.floor(Math.random()*e.length);m=t,j(e[t])}else j(e[0]);setTimeout((()=>{v.style.opacity="1"}),600)}()}Array.from(B).filter((e=>"go-tianli-blog"!==e.id)).forEach(((e,t)=>{e.addEventListener("click",(()=>{x[t]()}))})),document.getElementById("ai-tag").addEventListener("click",(function(){"tianli"===f?(b.querySelectorAll(".ai-btn-item").forEach((e=>e.style.display="none")),document.getElementById("go-tianli-blog").style.display="block",j("你好，我是Tianli开发的摘要生成助理TianliGPT，是一个基于GPT-4的生成式AI。我在这里只负责摘要的预生成和显示，你无法与我直接沟通，如果你也需要一个这样的AI摘要接口，可以在下方购买。")):(b.querySelectorAll(".ai-btn-item").forEach((e=>e.style.display="block")),document.getElementById("go-tianli-blog").style.display="none",j(`你好，我是本站摘要生成助理${o} GPT，是一个基于GPT-4的生成式AI。我在这里只负责摘要的预生成和显示，你无法与我直接沟通。`))})),v.addEventListener("click",(function(){const n=(c+d).trim().substring(0,t);if(v.style.opacity="0.2",v.style.transitionDuration="0.3s",v.style.transform="rotate("+360*h+"deg)",n.length<=t){let t=n.length-Math.floor(Math.random()*e);for(;t===y||n.length-t===y;)t=n.length-Math.floor(Math.random()*e);y=t,C(t)}else{let i=Math.floor(Math.random()*e)+t;for(;i===y||n.length-i===y;)i=Math.floor(Math.random()*e)+t;C(i)}h++})),document.getElementById("go-tianli-blog").addEventListener("click",(()=>{window.open(n,"_blank")})),E.addEventListener("click",(async function(){if(!T)return void anzhiyu.snackbarShow("摘要还没加载完呢，请稍后。。。");if(E=b.querySelector(".anzhiyu-icon-circle-dot"),E.style.opacity="0.2",p&&!g)return p.pause(),g=!0,E.style.opacity="1",E.style.animation="",void(E.style.cssText="animation: ''; opacity: 1;cursor: pointer;");if(p&&g)return p.play(),g=!1,void(E.style.cssText="animation: breathe .5s linear infinite; opacity: 0.2;cursor: pointer");const e={key:i,Referer:a},t=new URLSearchParams({key:e.key,id:T}),n={method:"GET",headers:{"Content-Type":"application/json",Referer:e.Referer}};try{const e=await fetch(`https://summary.tianli0.top/audio?${t}`,n);if(403===e.status)console.error("403 refer与key不匹配。");else if(500===e.status)console.error("500 系统内部错误");else{const t=await e.blob(),n=URL.createObjectURL(t);p=new Audio(n),p.play(),E.style.cssText="animation: breathe .5s linear infinite; opacity: 0.2;cursor: pointer",p.addEventListener("ended",(()=>{p=null,E.style.opacity="1",E.style.animation=""}))}}catch(e){console.error("请求发生错误❎")}})),l&&document.getElementById("ai-Toggle").addEventListener("click",(function(){f="tianli"===f?"local":"tianli","tianli"===f?(document.getElementById("ai-tag").innerHTML="TianliGPT",E.style.opacity="1",E.style.cursor="pointer"):(E.style.opacity="0",E.style.cursor="auto",(document.getElementById("go-tianli-blog").style.display="block")&&(document.querySelectorAll(".ai-btn-item").forEach((e=>e.style.display="block")),document.getElementById("go-tianli-blog").style.display="none"),document.getElementById("ai-tag").innerHTML=o+" GPT");C()})),C(),document.getElementById("ai-tag").innerHTML="tianli"===f?"TianliGPT":o+" GPT"}();