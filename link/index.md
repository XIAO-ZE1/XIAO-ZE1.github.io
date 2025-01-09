---
title: link
date: 2025-01-01 00:00:00
type: "link"
---

<div class="addBtn"><button onclick="leonus.linkCom()"><i class="fa-solid fa-circle-plus"></i>快速申请 (默认样式)</button> <button onclick="leonus.linkCom(&quot;bf&quot;)"><i class="fa-solid fa-circle-plus"></i>快速申请 (Butterfly)</button></div>
<link rel="stylesheet" href="/css/kslink.css">
<script src="/js/kslink.js"></script>

## 本站友链添加方式：
{% tabs link %}
<!-- tab 🙋 butterfly-💭candy -->
```yml
    - name: Fomalhaut🥝
      link: https://www.fomal.cc/
      avatar: https://www.fomal.cc/assets/avatar.webp
      descr: Future is now 🍭🍭🍭
      siteshot（可选）: https://source.fomal.cc/siteshot/www.fomal.cn.jpg
```
<!-- endtab -->

<!-- tab 🥗Volantis -->
```JSON
{
  "title": "Fomalhaut🥝",
  "screenshot": "https://source.fomal.cc/siteshot/www.fomal.cn.jpg",
  "url": "https://www.fomal.cc/",
  "avatar": "https://www.fomal.cc/assets/avatar.webp",
  "description": "Future is now 🍭🍭🍭",
  "keywords": "Fomalhaut🥝"
}
```
<!-- endtab -->

<!-- tab 🌴General -->

| 名称       | 数值                                                         |
| ---------- | ------------------------------------------------------------ |
| 站点名称   | Fomalhaut🥝                                                   |
| 站点截图   | https://source.fomal.cc/siteshot/www.fomal.cn.jpg |
| 站点链接   | https://www.fomal.cc/                                        |
| 站长头像   | https://www.fomal.cc/assets/avatar.webp                         |
| 站点描述   | Future is now🍭🍭🍭                         |
| 站点关键词 | Fomalhaut🥝,个人博客,代码                                     |

<!-- endtab -->
{% endtabs %}


## 加入本站友链方式
参照以下格式留言即可
```YML
- name: #站点名称
  link: #站点链接
  avatar: #站长头像
  descr: #站点描述
  siteshot: #站点截图 
```

站点截图可以自己提供，尺寸尽量不要大于 600*600，图片压缩后最好小于200KB。
未提供站点预览图的，本站会根据贵站链接调用以下 API 自动获取贵站的站点截图。
对于做了反扒措施的站点，API 获取的将是反扒页面，望知悉。
站点截图建议使用以下 API 获取以匹配本站样式
有部分朋友的截图体积过大影响加载速度，后面一律采用小体积截图代替望周知
```markdown
https://image.thum.io/get/allowJPG/wait/20/width/600/crop/950/https://<你的域名>/
```

{% note primary flat %}
🎉本站支持交换友链，在您提出申请之前，请将本站添加至友链
🥗为了保障本站用户，本站仅支持个人网站的友链申请
🍧申请本站友链需要拥有独立域名（非免费域名），建议开启全站HTTPS
🥫如果友情链接已经添加，请保持网站的正常访问，会定期清理僵尸网站
🍖网站有一定的实质性内容和主题，不能是空壳网站和练手网站
💕感谢您对本站的支持，如果您已经满足上述要求，请在下方表单提交友链申请~~~
{% endnote %}

<style>
  #cf-container {
    background: transparent !important;
  }
  .cf-article .cf-article-title:hover {
    color: #f4f4f4 !important;
  }
  .cf-img-avatar {
    opacity: .4 !important;
  }
  .cf-article-author:hover {
    background: var(--theme-color) !important;
  }
  #cf-more:hover {
    background: var(--theme-color) !important;
  }
  .cf-overshow p a:hover {
    color: #f4f4f4 !important;
  }
  .cf-article {
    transition: transform linear 0.3s;
  }
  .cf-article:hover {
    transform: scale(1.05);
    box-shadow: 0 5px 10px 8px #07111b29;
  }
  .cf-article {
    border-radius: 15px !important;
    border: 1px solid #a5a5a5ee !important;
  }
  ::selection {
  background: var(--theme-color) !important;
  color: #f4f4f4 !important;
  }
</style>

<div id="hexo-circle-of-friends-root"></div>
<script>
    let UserConfig = {
        // 替换为你的API!!!
        private_api_url: 'https://fcircle.fomal.cc/',
        // 点击加载更多时，一次最多加载几篇文章，默认10
        page_turning_number: 12,
        // 头像加载失败时，默认头像地址
        error_img: '/assets/r1.jpg',
        // 进入页面时第一次的排序规则
        sort_rule: 'created'
    }
</script>
<link rel="stylesheet" href="https://cdn1.tianli0.top/gh/zhheo/JS-Heo@master/mainColor/heoMainColor.css">
<script type="text/javascript" src="https://cdn1.tianli0.top/gh/zhheo/JS-Heo@master/moments5/app.min.js"></script>
<script type="text/javascript" src="https://cdn1.tianli0.top/gh/zhheo/JS-Heo@master/moments5/bundle.js"></script>
