// ***即刻短文

// 判断和胶囊音乐播放器冲突问题
  function pjaxqj() {
    if (document.querySelector("#nav-music meting-js").aplayer && !document.querySelector("#nav-music meting-js").aplayer.audio.paused) {
      anzhiyu.musicToggle();
    } 
   }
pjaxplasx()//打开运行一次
function pjaxplasx() {
  if (typeof pjaxqj === 'function') {pjaxqj();}// 判断点击函数是否存在存在就执行，点击函数为pjaxqj()
}
document.addEventListener("pjax:complete", pjaxplasx) // pjax加载完成（切换页面）后再执行一次
document.addEventListener("DOMContentLoaded",pjaxplasx);//第一次


var percentFlag = false; // 节流阀
function essayScroll() {
  let a = document.documentElement.scrollTop || window.pageYOffset; // 卷去高度
  const waterfallResult = a % document.documentElement.clientHeight; // 卷去一个视口
  result <= 99 || (result = 99);

  if (
    !percentFlag &&
    waterfallResult + 100 >= document.documentElement.clientHeight &&
    document.querySelector("#waterfall")
  ) {
    // console.info(waterfallResult, document.documentElement.clientHeight);
    setTimeout(() => {
      waterfall("#waterfall");
    }, 500);
  } else {
    setTimeout(() => {
      document.querySelector("#waterfall") && waterfall("#waterfall");
    }, 500);
  }

  const r = window.scrollY + document.documentElement.clientHeight;

  let p = document.getElementById("post-comment") || document.getElementById("footer");

  (p.offsetTop + p.offsetHeight / 2 < r || 90 < result) && (percentFlag = true);
}
function replaceAll(e, n, t) {
  return e.split(n).join(t);
}
var anzhiyu = {
  diffDate: function (d, more = false) {
    const dateNow = new Date();
    const datePost = new Date(d);
    const dateDiff = dateNow.getTime() - datePost.getTime();
    const minute = 1000 * 60;
    const hour = minute * 60;
    const day = hour * 24;
    const month = day * 30;

    let result;
    if (more) {
      const monthCount = dateDiff / month;
      const dayCount = dateDiff / day;
      const hourCount = dateDiff / hour;
      const minuteCount = dateDiff / minute;

      if (monthCount >= 1) {
        result = datePost.toLocaleDateString().replace(/\//g, "-");
      } else if (dayCount >= 1) {
        result = parseInt(dayCount) + " " + GLOBAL_CONFIG.dateSuffix.day;
      } else if (hourCount >= 1) {
        result = parseInt(hourCount) + " " + GLOBAL_CONFIG.dateSuffix.hour;
      } else if (minuteCount >= 1) {
        result = parseInt(minuteCount) + " " + GLOBAL_CONFIG.dateSuffix.min;
      } else {
        result = GLOBAL_CONFIG.dateSuffix.just;
      }
    } else {
      result = parseInt(dateDiff / day);
    }
    return result;
  },
  changeTimeInEssay: function () {
    document.querySelector("#bber") &&
      document.querySelectorAll("#bber time").forEach(function (e) {
        var t = e,
          datetime = t.getAttribute("datetime");
        (t.innerText = anzhiyu.diffDate(datetime, true)), (t.style.display = "inline");
      });
  },
  reflashEssayWaterFall: function () {
    document.querySelector("#waterfall") &&
      setTimeout(function () {
        waterfall("#waterfall");
        document.getElementById("waterfall").classList.add("show");
      }, 500);
  },
  commentText: function (txt) {
    const postCommentDom = document.querySelector("#post-comment");
    var domTop = postCommentDom.offsetTop;
    window.scrollTo(0, domTop - 80);
    if (txt == "undefined" || txt == "null") txt = "好棒！";
    function setText() {
      setTimeout(() => {
        var input = document.getElementsByClassName("el-textarea__inner")[0];
        if (!input) setText();
        let evt = document.createEvent("HTMLEvents");
        evt.initEvent("input", true, true);
        let inputValue = replaceAll(txt, "\n", "\n> ");
        input.value = "> " + inputValue + "\n\n";
        input.dispatchEvent(evt);
        input.focus();
        input.setSelectionRange(-1, -1);
        if (document.getElementById("comment-tips")) {
          document.getElementById("comment-tips").classList.add("show");
        }
      }, 100);
    }
    setText();
  },
  initIndexEssay: function () {
    setTimeout(() => {
      let essay_bar_swiper = new Swiper(".essay_bar_swiper_container", {
        passiveListeners: true,
        direction: "vertical",
        loop: true,
        autoplay: {
          disableOnInteraction: true,
          delay: 3000,
        },
        mousewheel: true,
      });

      let essay_bar_comtainer = document.getElementById("bbtalk");
      if (essay_bar_comtainer !== null) {
        essay_bar_comtainer.onmouseenter = function () {
          essay_bar_swiper.autoplay.stop();
        };
        essay_bar_comtainer.onmouseleave = function () {
          essay_bar_swiper.autoplay.start();
        };
      }
    }, 100);
  },
};

if (document.querySelector('#bber-talk')) {
      var swiper = new Swiper('.swiper-container', {
        direction: 'vertical', // 垂直切换选项
        loop: true,
        autoplay: {
        delay: 3000,
        pauseOnMouseEnter: true
      },
      });
}//Heo 的鼠标滚动函数

anzhiyu.initIndexEssay();
anzhiyu.changeTimeInEssay();
anzhiyu.reflashEssayWaterFall();
// ***即刻短文end***

/* ***手机侧边栏默认不展开*** */
var mobile_sidebar_menus = document.getElementById("sidebar-menus");
if (mobile_sidebar_menus) {
    var menus_item_child = mobile_sidebar_menus.getElementsByClassName(
        "menus_item_child"
    );
    var menus_expand = mobile_sidebar_menus.getElementsByClassName("expand");
    for (var i = 0; i < menus_item_child.length; i++) {
        menus_item_child[i].style.display = "none";
    }
}
/* ***手机侧边栏默认不展开end*** */

/* ***通知悬浮窗*** */
// noinspection JSIgnoredPromiseFromCall
// 这个语句的作用就是取代了BF原生的悬浮窗，不想要的话可以删掉（不确保没BUG）
document.addEventListener(
    'DOMContentLoaded',
    () => btf.snackbarShow = (text, time = 3500) => kms.pushInfo({text, time}, null)
)

const kms = {

    /** 是否为移动端 */
    isMobile: 'ontouchstart' in document.documentElement,
    
    /** 缓存 */
    _cache: {
        winCode: 0
    },
    /**
     * 在右上角弹出悬浮窗
     * @param {{text: string, time:number?, left:boolean?, bottom:boolean?}|string} optional
     *      配置项（text: 要显示的内容，time: 持续时间，left: 是否靠左显示，bottom: 是否靠下显示
     * @param button {?{icon:string?, text:string, desc:string?, onclick:function?}}
     *      传入null表示没有按钮（icon: 图标，text: 按钮文本，desc: 描述文本， onclick: 点击按钮时触发的回调）
     * @return {{close:function, onclose:function}} 一个对象，其中有两个函数对象，调用`close`可手动关闭悬浮窗，添加`onclose`可监听悬浮窗的关闭
     */
    pushInfo: (optional, button = null) => {
        let {text, time, left, bottom} = optional
        if (typeof optional === 'string') text = optional
        if (!time) time = 3500
        const externalApi = {}  // 对外部暴露的接口
        const id = kms._cache.winCode++
        const cardID = `float-win-${id}`
        const actionID = `float-action-${id}`
        const exitID = `float-exit-${id}`
        /**
         * 关闭指定悬浮窗
         * @param id {string} 悬浮窗ID
         */
        const closeWin = id => {
            const div = document.getElementById(id)
            if (div) {
                const {classList, style} = div
                if (classList.contains('close')) return
                if (externalApi.onclose) externalApi.onclose()
                style.maxHeight = `${div.clientHeight + 10}px`
                classList.add('close')
                setTimeout(() => div.remove(), 1000)
                setTimeout(() => {
                    style.maxHeight = style.marginBottom = '0'
                    classList.remove('show')
                }, 25)
            }
        }
        /** 关闭多余的悬浮窗 */
        const closeRedundantWin = className => {
            // noinspection SpellCheckingInspection
            const list = document.querySelector(`.float-box${className}`).children
            const count = list.length - 3
            for (let k = 0, i = 0; k < count && i !== list.length; ++i) {
                closeWin(list[i].id)
                ++k
            }
        }
        /** 构建html代码 */
        const buildHTML = id => {
            const buttonDesc = (button && button.desc) ? `<div class="descr"><p ${kms.isMobile ? 'class="open"' : ''}>${button.desc}</p></div>` : ''
            // noinspection HtmlUnknownAttribute
            return `<div class="float-win ${left ? 'left' : 'right'} ${bottom ? 'bottom' : 'top'} ${button ? 'click' : ''
            }" id="${cardID}" move="0" style="z-index:${id};"><button class="exit" id="${exitID}"><i class="iconfont icon-close"></i></button><div class="text">${text}</div>${button ?
                '<div class="select"><button class="action" id="' + actionID + '">' + (button.icon ? '<i class="' + button.icon + '">' : '') +
                '</i><p class="text">' + button.text + `</p></button>${buttonDesc}` : ''}</div></div>`
        }
        const className = `${left ? '.left' : '.right'}${bottom ? '.bottom' : '.top'}`
        // noinspection SpellCheckingInspection
        document.querySelector(`.float-box${className}`).insertAdjacentHTML('beforeend', buildHTML(id))
        const cardDiv = document.getElementById(cardID)
        const actionButton = document.getElementById(actionID)
        const exitButton = document.getElementById(exitID)
        if (actionButton) {
            actionButton.onclick = () => {
                if (button.onclick) button.onclick()
                closeWin(cardID)
            }
        }
        exitButton.onclick = () => closeWin(cardID)
        cardDiv.onmouseover = () => cardDiv.setAttribute('over', '1')
        cardDiv.onmouseleave = () => cardDiv.removeAttribute('over')
        closeRedundantWin(className)
        setTimeout(() => cardDiv.classList.add('show'), 25)
        let age = 0
        const task = setInterval(() => {
            const win = document.getElementById(cardID)
            if (win) {
                if (win.hasAttribute('over')) return age = 0
                age += 100
                if (age < time) return
            }
            clearInterval(task)
            closeWin(cardID)
        }, 100)
        externalApi.close = () => closeWin(cardID)
        return externalApi
    }
}
/* ***通知悬浮窗end*** */

/* ***分享本页*** */
function share() {
    let url = window.location.origin + window.location.pathname
    new ClipboardJS(".share", { text: function() { return '标题：' + document.title + '\n链接：' + url } });
    btf.snackbarShow("本页链接已复制到剪切板，快去分享吧~")
}
/* ***分享本页end*** */

/* ***返回顶部显示网页阅读进度*** */
window.onscroll = percent;// 执行函数
// 页面百分比
function percent() {
    let a = document.documentElement.scrollTop || window.pageYOffset, // 卷去高度
        b = Math.max(document.body.scrollHeight, document.documentElement.scrollHeight, document.body.offsetHeight, document.documentElement.offsetHeight, document.body.clientHeight, document.documentElement.clientHeight) - document.documentElement.clientHeight, // 整个网页高度
        result = Math.round(a / b * 100), // 计算百分比
        up = document.querySelector("#go-up") // 获取按钮

    if (result <= 95) {
        up.childNodes[0].style.display = 'none'
        up.childNodes[1].style.display = 'block'
        up.childNodes[1].childNodes[0].innerHTML = result;
    } else {
        up.childNodes[1].style.display = 'none'
        up.childNodes[0].style.display = 'block'
    }
}
/* ***返回顶部显示网页阅读进度end*** */
