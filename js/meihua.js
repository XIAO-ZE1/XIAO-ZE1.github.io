function clearItem(){localStorage.removeItem("blogbg"),localStorage.removeItem("universe"),localStorage.removeItem("blur"),localStorage.removeItem("fpson"),localStorage.removeItem("transNum"),localStorage.removeItem("bing"),localStorage.removeItem("blurRad"),localStorage.removeItem("font"),localStorage.removeItem("themeColor"),localStorage.removeItem("rs"),localStorage.removeItem("mouse")}function setFont(e){localStorage.setItem("font",e),"default"==e?(document.documentElement.style.setProperty("--global-font","-apple-system"),document.body.style.fontFamily="-apple-system, Consolas_1, BlinkMacSystemFont, 'Segoe UI' , 'Helvetica Neue' , Lato, Roboto, 'PingFang SC' , 'Microsoft JhengHei' , 'Microsoft YaHei' , sans-serif"):(document.documentElement.style.setProperty("--global-font",e),document.body.style.fontFamily="var(--global-font),-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif");try{setFontBorder()}catch(e){}}function setFontBorder(){var e="swf_"+localStorage.getItem("font");document.getElementById(e).style.border="2px solid var(--theme-color)",Array.prototype.forEach.call(document.getElementsByClassName("swf"),(function(t){t.id!=e&&(t.style.border="2px solid var(--border-color)")}))}function setColor(e){document.getElementById("themeColor").innerText=":root{--theme-color:"+map.get(e)+" !important; --anzhiyu-theme:"+map.get(e)+" !important}",localStorage.setItem("themeColor",e),CURSOR.refresh();var t=map.get(e),n="rgba"+t.substring(3,t.length-1)+", 0.7)";document.documentElement.style.setProperty("--text-bg-hover",n)}function setUniverse2(e){document.getElementById("universe").style.display=e,localStorage.setItem("universe",e)}function setUniverse(){document.getElementById("universeSet").checked?setUniverse2("block"):setUniverse2("none")}function fpssw(){document.getElementById("fpson").checked?localStorage.setItem("fpson","1"):localStorage.setItem("fpson","0"),setTimeout(reload,600)}function reload(){window.location.reload()}function toggleRightside(){document.getElementById("rightSideSet").checked?(localStorage.setItem("rs","block"),document.getElementById("rightSide").innerText=":root{--rightside-display: block}"):(localStorage.setItem("rs","none"),document.getElementById("rightSide").innerText=":root{--rightside-display: none}")}null==localStorage.getItem("reset_2")&&(localStorage.setItem("reset_2","1"),localStorage.removeItem("reset_1"),clearItem(),setTimeout((function(){new Vue({data:function(){this.$notify({title:"提示🍒",message:" (｡･∀･)ﾉﾞ由于网站部分设置项更新，当前已为您重置所有设置，祝您愉快！",position:"top-left",offset:50,showClose:!0,type:"success",duration:8e3})}})}),1500)),null==localStorage.getItem("font")&&localStorage.setItem("font","xxx"),setFont(localStorage.getItem("font")),null==localStorage.getItem("themeColor")&&localStorage.setItem("themeColor","heoblue"),setColor(localStorage.getItem("themeColor")),null==localStorage.getItem("universe")&&localStorage.setItem("universe","block"),setUniverse2(localStorage.getItem("universe")),null==localStorage.getItem("fpson")&&localStorage.setItem("fpson","1"),null==localStorage.getItem("rs")&&localStorage.setItem("rs","block"),"block"==localStorage.getItem("rs")?document.getElementById("rightSide").innerText=":root{--rightside-display: block}":document.getElementById("rightSide").innerText=":root{--rightside-display: none}",null==localStorage.getItem("transNum")&&localStorage.setItem("transNum",95);var curTransNum=localStorage.getItem("transNum"),curTransMini=.95*curTransNum;function setTrans(){var e=document.getElementById("transSet").value;document.querySelector(".transValue").innerHTML="透明度 (0%-100%): "+e+"%",localStorage.setItem("transNum",e),curTransMini=.95*e,curTransNum=e,document.querySelector("#rang_trans").style.width=curTransMini+"%",document.getElementById("transPercent").innerText=`:root{--trans-light: rgba(253, 253, 253, ${e}%) !important; --trans-dark: rgba(25, 25, 25, ${e}%) !important} `}document.getElementById("transPercent").innerText=`:root{--trans-light: rgba(253, 253, 253, ${curTransNum}%) !important; --trans-dark: rgba(25, 25, 25, ${curTransNum}%) !important} `,null==localStorage.getItem("blurRad")&&localStorage.setItem("blurRad",20);var curBlur=localStorage.getItem("blurRad"),miniBlur=.95*curBlur;function setBlurNum(){var e=document.getElementById("blurSet").value;document.querySelector(".blurValue").innerHTML="模糊半径 (开启模糊生效 0px-100px): "+e+"px",localStorage.setItem("blurRad",e),miniBlur=.95*(curBlur=e),document.querySelector("#rang_blur").style.width=miniBlur+"%",document.getElementById("blurNum").innerText=`:root{--blur-num: blur(${curBlur}px) saturate(120%) !important`}function setBlur(){document.getElementById("blur").checked?(localStorage.setItem("blur",1),document.getElementById("settingStyle").innerText=":root{--backdrop-filter: var(--blur-num)}"):(localStorage.setItem("blur",0),document.getElementById("settingStyle").innerText=":root{--backdrop-filter: none}")}document.getElementById("blurNum").innerText=`:root{--blur-num: blur(${curBlur}px) saturate(120%) !important`,null==localStorage.getItem("blur")&&localStorage.setItem("blur",0),0==localStorage.getItem("blur")?document.getElementById("settingStyle").innerText=":root{--backdrop-filter: none}":document.getElementById("settingStyle").innerText=":root{--backdrop-filter: var(--blur-num)}";var clk,defineColor=localStorage.getItem("blogbg")&&"#"==localStorage.getItem("blogbg").charAt(0)?localStorage.getItem("blogbg"):"#F4D88A";function changeBgColor(){changeBg(document.querySelector("#colors").value)}if(null!=localStorage.getItem("blogbg")){let e=localStorage.getItem("blogbg");document.getElementById("defineBg").innerText=`:root{\n    --default-bg: ${e};\n    --darkmode-bg: ${e};\n    --mobileday-bg: ${e};\n    --mobilenight-bg: ${e};\n  }`,changeBg(e)}else document.getElementById("defineBg").innerText=":root{\n    --default-bg: url('/img/pc2.png');\n    --darkmode-bg: url('/img/pc3.png');\n    --mobileday-bg: url('/img/mobile2.png');\n    --mobilenight-bg: url('/img/mobile3.png');\n  }";function changeBg(e){let t=document.getElementById("web_bg");"#"==e.charAt(0)?(t.style.backgroundColor=e,t.style.backgroundImage="none",defineColor=e):(t.style.backgroundImage=e,defineColor="#F4D88A"),localStorage.setItem("blogbg",e),localStorage.setItem("bing","false"),document.getElementById("bingSet")&&(document.getElementById("bingSet").checked=!1)}function getPicture(){debounce(getPicture_,300)}function getPicture_(){let e=document.getElementById("web_bg");checkImgExists(document.getElementById("pic-link").value).then((()=>{var t="url("+document.getElementById("pic-link").value+")";e.style.backgroundImage=t,localStorage.setItem("blogbg",t),localStorage.setItem("bing","false"),document.getElementById("bingSet")&&(document.getElementById("bingSet").checked=!1),new Vue({data:function(){this.$notify({title:"可以啦🍨",message:"切换自定义背景成功！",position:"top-left",offset:50,showClose:!0,type:"success",duration:5e3})}})})).catch((()=>{new Vue({data:function(){this.$notify({title:"链接不对🤣",message:"请输入有效的图片链接！",position:"top-left",offset:50,showClose:!0,type:"warning",duration:5e3})}})}))}function checkImgExists(e){return new Promise((function(t,n){var o=new Image;o.src=e,o.onload=function(e){t(e)},o.onerror=function(e){n(e)}}))}if(null==localStorage.getItem("bing")&&localStorage.setItem("bing","false"),"true"==localStorage.getItem("bing")){let e=document.getElementById("web_bg"),t=screen.width<=768?"url(https://bing.img.run/m.php)":"url(https://bing.img.run/1920x1080.php)";e.style.backgroundImage=t}function setBing(){if(document.getElementById("bingSet").checked){let e=document.getElementById("web_bg"),t=screen.width<=768?"url(https://bing.img.run/m.php)":"url(https://bing.img.run/1920x1080.php)";e.style.backgroundImage=t,localStorage.setItem("bing","true"),localStorage.removeItem("blogbg")}else localStorage.setItem("bing","false"),setTimeout(reload,600)}function setLight(){if(document.getElementById("lightSet").checked)clearInterval(clk),clk=setInterval(changeLightColor,1200),localStorage.setItem("light","true");else{clearInterval(clk),localStorage.setItem("light","false"),document.getElementById("site-name")&&(document.getElementById("site-name").style.textShadow="#1e1e1ee0 1px 1px 1px"),document.getElementById("site-title")&&(document.getElementById("site-title").style.textShadow="#1e1e1ee0 1px 1px 1px"),document.getElementById("site-subtitle")&&(document.getElementById("site-subtitle").style.textShadow="#1e1e1ee0 1px 1px 1px"),document.getElementById("post-info")&&(document.getElementById("post-info").style.textShadow="#1e1e1ee0 1px 1px 1px");try{document.getElementsByClassName("author-info__name")[0].style.textShadow="",document.getElementsByClassName("author-info__description")[0].style.textShadow=""}catch{}}}null==localStorage.getItem("light")&&localStorage.setItem("light",!0),"true"==localStorage.getItem("light")&&(clearInterval(clk),clk=setInterval(changeLightColor,1200));var winbox="";function createWinbox(){let e=document.createElement("div");document.body.appendChild(e),winbox=WinBox({id:"meihuaBox",index:99,title:"美化设置",x:"left",y:"center",minwidth:"300px",height:"60%",background:"var(--theme-color)",onmaximize:()=>{e.innerHTML="<style>body::-webkit-scrollbar {display: none;} div#meihuaBox {width: 100% !important;}</style>"},onrestore:()=>{e.innerHTML=""}}),winResize(),window.addEventListener("resize",winResize),winbox.body.innerHTML=`\n<div class="settings" style="display: block;">\n<div id="article-container" style="padding:12px;">\n<br>\n<center><p><button onclick="reset()" style="background:linear-gradient(to right, #fc354c, #0abfbc);display:block;width:40%;padding:15px 0;border-radius:30px;color:white;font-size:1.1em;"><i class="fa-solid fa-arrows-rotate"></i>&nbsp;恢复默认设置</button></p></center>\n\n<h2>一、显示偏好</h2>\n\n<div class="transValue" style="font-weight:bold;padding-left:10px">透明度 (0%-100%): ${curTransNum}%</div>\n<div class="range">\n  <input id="transSet" type="range" min="0" max="100" step="1" value=${curTransNum} oninput="setTrans()">\n  <p class="rang_width" id="rang_trans" style="width:${curTransMini}%"></p>\n</div>\n\n<div class="blurValue" style="font-weight:bold;padding-left:10px">模糊半径 (开启模糊生效 0px-100px): ${curBlur} px</div>\n<div class="range">\n  <input id="blurSet" type="range" min="0" max="100" step="1" value="${curBlur}" oninput="setBlurNum()">\n  <p class="rang_width" id="rang_blur" style="width:${miniBlur}%"></p>\n</div>\n\n\n<div class="content" style="display:flex">\n  <div class="content-text" style="font-weight:bold; padding-left:10px"> 星空特效 (夜间模式) </div><input type="checkbox" id="universeSet" onclick="setUniverse()">\n  <div class="content-text" style="font-weight:bold; padding-left:20px"> 霓虹灯 (夜间模式) </div><input type="checkbox" id="lightSet" onclick="setLight()">\n</div>\n\n<div class="content" style="display:flex">\n  <div class="content-text" style="font-weight:bold; padding-left:10px"> 模糊效果 (消耗性能) </div><input type="checkbox" id="blur" onclick="setBlur()">\n  <div class="content-text" style="font-weight:bold; padding-left:20px"> 侧边栏 (默认开) </div><input type="checkbox" id="rightSideSet" onclick="toggleRightside()">\n</div>\n\n<div class="content" style="display:flex">\n  <div class="content-text" style="font-weight:bold; padding-left:10px"> 帧率监测 (刷新生效) </div><input type="checkbox" id="fpson" onclick="fpssw()">\n  <div class="content-text" style="font-weight:bold; padding-left:20px"> 必应每日壁纸 </div><input type="checkbox" id="bingSet" onclick="setBing()">\n</div>\n\n<h2>二、字体设置</h2>\n<div class="note warning modern"><p>非商免字体未经授权只能个人使用。本站为完全非商业、非盈利性质的网站，平时用于个人学习交流，如有侵权请联系站长删除，谢谢！ —— 致版权方</p></div>\n<p id="swfs">\n<a class="swf" id="swf_ZhuZiAWan" href="javascript:;" rel="noopener external nofollow" style="font-family:'ZhuZiAWan'!important;color:black" onclick="setFont('ZhuZiAWan')">筑紫A丸标准体2.0</a>\n<a class="swf" id="swf_MiSans" href="javascript:;" rel="noopener external nofollow" style="font-family:'MiSans'!important;color:black" onclick="setFont('MiSans')">MiSans</a>\n<a class="swf" id="swf_HarmonyOS" href="javascript:;" rel="noopener external nofollow" style="font-family:'HarmonyOS'!important;color:black" onclick="setFont('HarmonyOS')">HarmonyOS</a>\n<a class="swf" id="swf_SmileySans-Oblique" href="javascript:;" rel="noopener external nofollow" style="font-family:'SmileySans-Oblique'!important;color:black" onclick="setFont('SmileySans-Oblique')">得意黑</a>\n<a class="swf" id="swf_DingTalk-JinBuTi" href="javascript:;" rel="noopener external nofollow" style="font-family:'DingTalk-JinBuTi'!important;color:black" onclick="setFont('DingTalk-JinBuTi')">钉钉进步体</a>\n<a class="swf" id="swf_LXGWWenKai" href="javascript:;" rel="noopener external nofollow" style="font-family:'LXGWWenKai'!important;color:black" onclick="setFont('LXGWWenKai')">霞鹜文楷</a>\n<a class="swf" id="swf_default" href="javascript:;" rel="noopener external nofollow" style="font-family:-apple-system, IBM Plex Mono ,monosapce,'微软雅黑', sans-serif;!important;color:black" onclick="setFont('default')">系统默认</a>\n</p>\n\n<h2>三、主题色设置</h2>\n<div class="content" style="display:flex"><input type="radio" id="red" name="colors" value=" "\n        onclick="setColor('red')"><input type="radio" id="orange" name="colors" value=" "\n        onclick="setColor('orange')"><input type="radio" id="yellow" name="colors" value=" "\n        onclick="setColor('yellow')"><input type="radio" id="green" name="colors" value=" "\n        onclick="setColor('green')"><input type="radio" id="blue" name="colors" value=" "\n        onclick="setColor('blue')"><input type="radio" id="heoblue" name="colors" value=" "\n        onclick="setColor('heoblue')"><input type="radio" id="darkblue" name="colors" value=" "\n        onclick="setColor('darkblue')"><input type="radio" id="purple" name="colors" value=" "\n        onclick="setColor('purple')"><input type="radio" id="pink" name="colors" value=" "\n        onclick="setColor('pink')" checked="checked"><input type="radio" id="black" name="colors" value=" "\n        onclick="setColor('black')"><input type="radio" id="blackgray" name="colors" value=" "\n        onclick="setColor('blackgray')"></div>\n\n<h2>四、背景设置</h2>\n<center><button onclick="resetBg()" style="background:var(--theme-color);display:block;width:35%;padding:15px 0;border-radius:30px;color:white;"><i class="fa-solid fa-arrows-rotate"></i>&nbsp;恢复默认背景</button></center>\n\n<h3>1. 二次元</h3>\n<details class="folding-tag"><summary> 查看二次元背景 </summary>\n<div class="bgbox">\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/dm15.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/dm15.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/yuanshen1.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/yuanshen1.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/dm2.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/dm2.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/dm7.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/dm7.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/dm8.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/dm8.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/dm3.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/dm3.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/dm11.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/dm11.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://npm.elemecdn.com/ushio-api-img-moe@5.0.53/img_532_1920x1080_96_null_normal.jpg)" class="imgbox" onclick="changeBg('url(https://npm.elemecdn.com/ushio-api-img-moe@5.0.53/img_532_1920x1080_96_null_normal.jpg)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/dm12.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/dm12.webp)')"></a>\n</div>\n</details>\n\n<h3>2. 风景</h3>\n<details class="folding-tag cyan"><summary> 查看风景背景 </summary>\n<div class="bgbox">\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/fj2.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/fj2.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/fj1.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/fj1.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/fj3.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/fj3.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/fj4.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/fj4.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/fj5.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/fj5.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/fj6.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/fj6.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/fj7.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/fj7.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/fj8.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/fj8.webp)')"></a>\n</div>\n</details>\n\n<h3>3. 萌宠</h3>\n<details class="folding-tag cyan"><summary> 查看萌宠背景 </summary>\n<div class="bgbox">\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mc1.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mc1.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mc2.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mc2.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mc3.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mc3.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mc4.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mc4.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mc5.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mc5.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mc6.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mc6.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mc7.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mc7.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mc8.webp)" class="imgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mc8.webp)')"></a>\n</div>\n</details>\n\n<h3>4. 渐变色</h3>\n<details class="folding-tag cyan"><summary> 查看渐变色背景 </summary>\n<div class="bgbox">\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to right, #544a7d, #ffd452)" onclick="changeBg('linear-gradient(to right, #544a7d, #ffd452)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)" onclick="changeBg('linear-gradient(to bottom, #7f7fd5, #86a8e7, #91eae4)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to left, #654ea3, #eaafc8)" onclick="changeBg('linear-gradient(to left, #654ea3, #eaafc8)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)" onclick="changeBg('linear-gradient(to top, #feac5e, #c779d0, #4bc0c8)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #d3959b, #bfe6ba)" onclick="changeBg('linear-gradient(to top, #d3959b, #bfe6ba)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #8360c3, #2ebf91)" onclick="changeBg('linear-gradient(to top, #8360c3, #2ebf91)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #108dc7, #ef8e38)" onclick="changeBg('linear-gradient(to top, #108dc7, #ef8e38)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)" onclick="changeBg('linear-gradient(to top, #355c7d, #6c5b7b, #c06c84)')"></a>\n</div>\n</details>\n\n<h3>5. 纯色</h3>\n<details class="folding-tag cyan"><summary> 查看纯色背景 </summary>\n<div class="bgbox">\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ecb1b1" onclick="changeBg('#ecb1b1')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #d3ebac" onclick="changeBg('#d3ebac')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #ace9ce" onclick="changeBg('#ace9ce')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #c1ebea" onclick="changeBg('#c1ebea')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #dee7f1" onclick="changeBg('#dee7f1')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #e9e3f2" onclick="changeBg('#e9e3f2')"></a>\n<a href="javascript:;" rel="noopener external nofollow" class="box" style="background: #f7eff5" onclick="changeBg('#f7eff5')"></a> \n<input type="color" id="colors" href="javascript:;" rel="noopener external nofollow" class="box" autocomplete="on" value="${defineColor}" oninput="changeBgColor()"></input>\n</div>\n</details>\n\n<h3>6. 适配手机</h3>\n<details class="folding-tag cyan"><summary> 查看适配手机背景 </summary>\n<div class="bgbox">\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mb4.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mb4.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mb5.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mb5.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mb6.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mb6.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mb7.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mb7.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mb8.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mb8.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mb9.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mb9.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mb16.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mb16.webp)')"></a>\n<a href="javascript:;" rel="noopener external nofollow" style="background-image:url(https://sourcebucket.s3.bitiful.net/img/mb19.webp)" class="pimgbox" onclick="changeBg('url(https://sourcebucket.s3.bitiful.net/img/mb19.webp)')"></a>\n</div>\n</details>\n\n\n<h3>7. 壁纸API</h3>\n<details class="folding-tag cyan"><summary> 查看壁纸API背景 </summary>\n<div class="bgbox">\n<a id="bingDayBox" rel="noopener external nofollow" style="background-image: url(https://bing.img.run/1920x1080.php)" class="box apiBox" onclick="changeBg('url(https://bing.img.run/1920x1080.php)')"></a>\n<a id="bingHistoryBox" rel="noopener external nofollow" style="background-image: url(https://bing.img.run/rand.php)" class="box apiBox" onclick="changeBg('url(https://bing.img.run/rand.php)')"></a>\n<a id="EEEDogBox" rel="noopener external nofollow" style="background-image: url(https://api.yimian.xyz/img?type=moe&amp;size=1920x1080)" class="box apiBox" onclick="changeBg('url(https://api.yimian.xyz/img?type=moe&amp;size=1920x1080)')"></a>\n<a id="seovxBox" rel="noopener external nofollow" style="background-image: url(https://cdn.seovx.com/?mom=302)" class="box apiBox" onclick="changeBg('url(https://cdn.seovx.com/?mom=302)')"></a>\n<a id="picsumBox" rel="noopener external nofollow" style="background-image: url(https://picsum.photos/1920/1080.webp)" class="box apiBox" onclick="changeBg('url(https://picsum.photos/1920/1080.webp)')"></a>\n<a id="waiBizhiBox" rel="noopener external nofollow" style="background-image: url(https://api.ixiaowai.cn/gqapi/gqapi.php)" class="box apiBox" onclick="changeBg('url(https://api.ixiaowai.cn/gqapi/gqapi.php)')"></a>\n<a id="btstuBox" rel="noopener external nofollow" style="background-image: url(http://api.btstu.cn/sjbz/?lx=suiji)" class="box apiBox" onclick="changeBg('url(http://api.btstu.cn/sjbz/?lx=suiji)')"></a>\n<a id="unsplashBox" rel="noopener external nofollow" style="background-image: url(https://source.unsplash.com/random/1920x1080/)" class="box apiBox" onclick="changeBg('url(https://source.unsplash.com/random/1920x1080/)')"></a>\n</div>\n</details>\n\n\n<h3>8. 自定义背景</h3>\n<details class="folding-tag cyan"><summary> 设置自定义背景 </summary>\n<p></p>\n<center>\n<input type="text" id="pic-link" size="70%" maxlength="1000" placeholder="请输入有效的图片链接，如 https://source.fomal.cc/img/home_bg.webp">\n</center>\n<p></p>\n<p></p>\n<center>\n<button class="winbox_btn" type="button" onclick="getPicture()" style="background:var(--theme-color);width:35%;padding: 5px 0px 7px 0px;border-radius:30px;color:white;line-height:2;">🌈切换背景🌈</button>\n</center>\n<p></p>\n</details>\n\n<br>\n<center><div style="font-size:1.2em;color:var(--theme-color);font-weight:bold;">------ ( •̀ ω •́ )y 到底啦 ------</div></center>\n<br>\n\n</div>\n\n</div>\n\n`,$("#"+localStorage.getItem("themeColor")).attr("checked",!0),1==localStorage.getItem("blur")?document.getElementById("blur").checked=!0:document.getElementById("blur").checked=!1,"block"==localStorage.getItem("universe")?document.getElementById("universeSet").checked=!0:"none"==localStorage.getItem("universe")&&(document.getElementById("universeSet").checked=!1),"1"==localStorage.getItem("fpson")?document.getElementById("fpson").checked=!0:document.getElementById("fpson").checked=!1,"block"==localStorage.getItem("rs")?document.getElementById("rightSideSet").checked=!0:"none"==localStorage.getItem("rs")&&(document.getElementById("rightSideSet").checked=!1),"true"==localStorage.getItem("bing")?document.getElementById("bingSet").checked=!0:document.getElementById("bingSet").checked=!1,"true"==localStorage.getItem("light")?document.getElementById("lightSet").checked=!0:document.getElementById("lightSet").checked=!1,setFontBorder()}function resetBg(){localStorage.removeItem("blogbg"),reload()}function reset(){clearItem(),reload()}function winResize(){try{var e=document.documentElement.clientWidth;e<=768?winbox.resize(.95*e+"px","90%").move("center","center"):winbox.resize(.6*e+"px","70%").move("center","center")}catch(e){}}function toggleWinbox(){document.querySelector("#meihuaBox")?winbox.toggleClass("hide"):createWinbox()}