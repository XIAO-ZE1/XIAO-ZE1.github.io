window.IP_CONFIG={API_KEY:"RkpZUXb9t9BSnJv1sQpbO1R48Q",BLOG_LOCATION:{lng:108.946,lat:34.155},CACHE_DURATION:36e5,HOME_PAGE_ONLY:!0};const insertAnnouncementComponent=()=>{const n=document.querySelectorAll(".card-widget.card-announcement");n.length&&(!IP_CONFIG.HOME_PAGE_ONLY||isHomePage()?document.querySelector("#welcome-info")&&fetchIpInfo():n.forEach((n=>n.remove())))},getWelcomeInfoElement=()=>document.querySelector("#welcome-info"),fetchIpData=async()=>{const n=await fetch(`https://api.nsmao.net/api/ip/query?key=${encodeURIComponent(IP_CONFIG.API_KEY)}`);if(!n.ok)throw new Error("网络响应不正常");return await n.json()},showWelcome=({data:n,ip:e})=>{if(!n)return showErrorMessage();const{lng:t,lat:o,country:r,prov:i,city:a}=n,s=getWelcomeInfoElement();if(!s)return;const c=calculateDistance(t,o),l=formatIpDisplay(e),d=formatLocation(r,i,a);s.style.display="block",s.style.height="auto",s.innerHTML=generateWelcomeMessage(d,c,l,r,i,a)},calculateDistance=(n,e)=>{const t=Math.PI/180,o=(e-IP_CONFIG.BLOG_LOCATION.lat)*t,r=(n-IP_CONFIG.BLOG_LOCATION.lng)*t,i=Math.sin(o/2)*Math.sin(o/2)+Math.cos(IP_CONFIG.BLOG_LOCATION.lat*t)*Math.cos(e*t)*Math.sin(r/2)*Math.sin(r/2);return Math.round(12742*Math.atan2(Math.sqrt(i),Math.sqrt(1-i)))},formatIpDisplay=n=>n.includes(":")?"<br>好复杂，咱看不懂~(ipv6)":n,formatLocation=(n,e,t)=>n?"中国"===n?`${e} ${t}`:n:"神秘地区",generateWelcomeMessage=(n,e,t,o,r,i)=>`\n    欢迎来自 <b>${n}</b> 的小友💖<br>\n    你当前距博主约 <b>${e}</b> 公里！<br>\n    你的IP地址：<b class="ip-address">${t}</b><br>\n    ${getTimeGreeting()}<br>\n    Tip：<b>${getGreeting(o,r,i)}🍂</b>\n`,addStyles=()=>{const n=document.createElement("style");n.textContent="\n        #welcome-info {\n            user-select: none;\n            display: flex;\n            justify-content: center;\n            align-items: center;\n            height: 212px;\n            padding: 10px;\n            margin-top: 5px;\n            border-radius: 12px;\n            background-color: var(--anzhiyu-background);\n            outline: 1px solid var(--anzhiyu-card-border);\n        }\n        .loading-spinner {\n            width: 50px;\n            height: 50px;\n            border: 3px solid rgba(0, 0, 0, 0.1);\n            border-radius: 50%;\n            border-top: 3px solid var(--anzhiyu-main);\n            animation: spin 1s linear infinite;\n        }\n        @keyframes spin {\n            0% { transform: rotate(0deg); }\n            100% { transform: rotate(360deg); }\n        }\n        .ip-address {\n            filter: blur(5px);\n            transition: filter 0.3s ease;\n        }\n        .ip-address:hover {\n            filter: blur(0);\n        }\n        .error-message {\n            color: #ff6565;\n            display: flex;\n            flex-direction: column;\n            justify-content: center;\n            align-items: center;\n        }\n        .error-message p,\n        .permission-dialog p {\n            margin: 0;\n        }\n        .error-icon {\n            font-size: 3rem;\n        }\n        #retry-button {\n            margin: 0 5px;\n            color: var(--anzhiyu-main);\n            transition: transform 0.3s ease;\n        }\n        #retry-button:hover {\n            transform: rotate(180deg);\n        }\n        .permission-dialog {\n            text-align: center;\n        }\n        .permission-dialog button {\n            margin: 10px 5px;\n            padding: 5px 10px;\n            border: none;\n            border-radius: 5px;\n            background-color: var(--anzhiyu-main);\n            color: white;\n            transition: opacity 0.3s ease;\n        }\n        .permission-dialog button:hover {\n            opacity: 0.8;\n        }\n    ",document.head.appendChild(n)},checkLocationPermission=()=>"granted"===localStorage.getItem("locationPermission"),saveLocationPermission=n=>{localStorage.setItem("locationPermission",n)},showLocationPermissionDialog=()=>{const n=document.getElementById("welcome-info");n.innerHTML='\n        <div class="permission-dialog">\n            <div class="error-icon">❓</div>\n            <p>是否允许访问您的位置信息？</p>\n            <button data-action="allow">允许</button>\n            <button data-action="deny">拒绝</button>\n        </div>\n    ',n.addEventListener("click",(n=>{if("BUTTON"===n.target.tagName){const e=n.target.dataset.action;handleLocationPermission("allow"===e?"granted":"denied")}}))},handleLocationPermission=n=>{saveLocationPermission(n),"granted"===n?(showLoadingSpinner(),fetchIpInfo()):showErrorMessage("您已拒绝访问位置信息")},showLoadingSpinner=()=>{const n=document.querySelector("#welcome-info");n&&(n.innerHTML='<div class="loading-spinner"></div>')},IP_CACHE_KEY="ip_info_cache",getIpInfoFromCache=()=>{const n=localStorage.getItem(IP_CACHE_KEY);if(!n)return null;const{data:e,timestamp:t}=JSON.parse(n);return Date.now()-t>IP_CONFIG.CACHE_DURATION?(localStorage.removeItem(IP_CACHE_KEY),null):e},setIpInfoCache=n=>{localStorage.setItem(IP_CACHE_KEY,JSON.stringify({data:n,timestamp:Date.now()}))},fetchIpInfo=async()=>{if(!checkLocationPermission())return void showLocationPermissionDialog();showLoadingSpinner();const n=getIpInfoFromCache();if(n)showWelcome(n);else try{const n=await fetchIpData();setIpInfoCache(n),showWelcome(n)}catch(n){console.error("获取IP信息失败:",n),showErrorMessage()}},greetings={"中国":{"北京市":"北——京——欢迎你~~~","天津市":"讲段相声吧","河北省":"山势巍巍成壁垒，天下雄关铁马金戈由此向，无限江山","山西省":"展开坐具长三尺，已占山河五百余","内蒙古自治区":"天苍苍，野茫茫，风吹草低见牛羊","辽宁省":"我想吃烤鸡架！","吉林省":"状元阁就是东北烧烤之王","黑龙江省":"很喜欢哈尔滨大剧院","上海市":"众所周知，中国只有两个城市","江苏省":{"南京市":"这是我挺想去的城市啦","苏州市":"上有天堂，下有苏杭","其他":"散装是必须要散装的"},"浙江省":{"杭州市":"东风渐绿西湖柳，雁已还人未南归","其他":"望海楼明照曙霞,护江堤白蹋晴沙"},"河南省":{"郑州市":"豫州之域，天地之中","信阳市":"品信阳毛尖，悟人间芳华","南阳市":"臣本布衣，躬耕于南阳此南阳非彼南阳！","驻马店市":"峰峰有奇石，石石挟仙气嵖岈山的花很美哦！","开封市":"刚正不阿包青天","洛阳市":"洛阳牡丹甲天下","其他":"可否带我品尝河南烩面啦？"},"安徽省":"蚌埠住了，芜湖起飞","福建省":"井邑白云间，岩城远带山","江西省":"落霞与孤鹜齐飞，秋水共长天一色","山东省":"遥望齐州九点烟，一泓海水杯中泻","湖北省":{"黄冈市":"红安将军县！辈出将才！","其他":"来碗热干面~"},"湖南省":"74751，长沙斯塔克","广东省":{"广州市":"看小蛮腰，喝早茶了嘛~","深圳市":"今天你逛商场了嘛~","阳江市":"阳春合水！博主家乡~ 欢迎来玩~","其他":"来两斤福建人~"},"广西壮族自治区":"桂林山水甲天下","海南省":"朝观日出逐白浪，夕看云起收霞光","四川省":"康康川妹子","贵州省":"茅台，学生，再塞200","云南省":"玉龙飞舞云缠绕，万仞冰川直耸天","西藏自治区":"躺在茫茫草原上，仰望蓝天","陕西省":"来份臊子面加馍","甘肃省":"羌笛何须怨杨柳，春风不度玉门关","青海省":"牛肉干和老酸奶都好好吃","宁夏回族自治区":"大漠孤烟直，长河落日圆","新疆维吾尔自治区":"驼铃古道丝绸路，胡马犹闻唐汉风","台湾省":"我在这头，大陆在那头","香港特别行政区":"永定贼有残留地鬼嚎，迎击光非岁玉","澳门特别行政区":"性感荷官，在线发牌","其他":"带我去你的城市逛逛吧！"},"美国":"Let us live in peace!","日本":"よろしく、一緒に桜を見ませんか","俄罗斯":"干了这瓶伏特加！","法国":"C'est La Vie","德国":"Die Zeit verging im Fluge.","澳大利亚":"一起去大堡礁吧！","加拿大":"拾起一片枫叶赠予你","其他":"带我去你的国家逛逛吧"},getGreeting=(n,e,t)=>{const o=greetings[n]||greetings["其他"];if("string"==typeof o)return o;const r=o[e]||o["其他"];return"string"==typeof r?r:r[t]||r["其他"]||o["其他"]},getTimeGreeting=()=>{const n=(new Date).getHours();return n<11?"早上好🌤️ ，一日之计在于晨":n<13?"中午好☀️ ，记得午休喔~":n<17?"下午好🕞 ，饮茶先啦！":n<19?"即将下班🚶‍♂️，记得按时吃饭~":"晚上好🌙 ，夜生活嗨起来！"},showErrorMessage=(n="抱歉，无法获取信息")=>{document.getElementById("welcome-info").innerHTML=`\n        <div class="error-message">\n            <div class="error-icon">😕</div>\n            <p>${n}</p>\n            <p>请<i id="retry-button" class="fa-solid fa-arrows-rotate"></i>重试或检查网络连接</p>\n        </div>\n    `,document.getElementById("retry-button").addEventListener("click",fetchIpInfo)},isHomePage=()=>"/"===window.location.pathname||"/index.html"===window.location.pathname;document.addEventListener("DOMContentLoaded",(()=>{addStyles(),insertAnnouncementComponent(),document.addEventListener("pjax:complete",insertAnnouncementComponent)}));