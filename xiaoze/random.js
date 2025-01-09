var posts=["posts/16107.html","posts/3458e8f8.html","posts/ddae.html","posts/ae28.html","posts/b2daadad.html","posts/35215.html","posts/371d898c.html","posts/2013454d.html"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };var friend_link_list=[{"name":"Hexo","link":"https://hexo.io/zh-tw/","avatar":"https://d33wubrfki0l68.cloudfront.net/6657ba50e702d84afb32fe846bed54fba1a77add/827ae/logo.svg","descr":"快速、简单且强大的网站框架"},{"name":"anzhiyu主题","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg"},{"name":"安知鱼","link":"https://blog.anheyu.com/","avatar":"https://npm.elemecdn.com/anzhiyu-blog-static@1.0.4/img/avatar.jpg","descr":"生活明朗，万物可爱","siteshot":"https://npm.elemecdn.com/anzhiyu-theme-static@1.1.6/img/blog.anheyu.com.jpg","color":"vip","tag":"技术"},{"name":"Akilarの糖果屋","link":"https://akilar.top/","avatar":"https://cdn.qyliu.top/i/2024/04/06/661170950f7a2.png","descr":"欢迎光临糖果屋","siteshot":"https://cdn.qyliu.top/i/2024/03/21/65fc582187f19.png"},{"name":"Fomalhaut🥝","link":"https://www.fomal.cc/","avatar":"https://www.fomal.cc/assets/avatar.webp","descr":"Future is now 🍭🍭🍭","siteshot":"https://source.fomal.cc/siteshot/www.fomal.cn.jpg","color":"speed","tag":"魔改"},{"name":"清羽飞扬","link":"https://blog.liushen.fun/","avatar":"https://cdn.qyliu.top/i/2024/03/21/65fc56832e37d.png","descr":"柳影曳曳，清酒孤灯，扬笔撒墨，心境如霜","siteshot":"https://cdn.qyliu.top/i/2024/03/21/65fc57d6b8615.png"},{"name":"唐志远","link":"https://fe32.top/","avatar":"https://bu.dusays.com/2022/05/02/626f92e193879.jpg","descr":"古今之成大事者，不惟有超世之才，亦必有坚忍不拔之志。","recommend":true},{"name":"Youtube","link":"https://www.youtube.com/","avatar":"https://i.loli.net/2020/05/14/9ZkGg8v3azHJfM1.png","descr":"視頻網站"},{"name":"Weibo","link":"https://www.weibo.com/","avatar":"https://i.loli.net/2020/05/14/TLJBum386vcnI1P.png","descr":"中國最大社交分享平台"},{"name":"Twitter","link":"https://twitter.com/","avatar":"https://i.loli.net/2020/05/14/5VyHPQqR6LWF39a.png","descr":"社交分享平台"},{"name":"Hexo官网","link":"https://hexo.io/zh-tw/","avatar":"https://cdn.qyliu.top/i/2024/04/07/66124225b85c1.png","descr":"快速、简单且强大的网志框架"},{"name":"柳神云图床","link":"https://pic.qyliu.top/","avatar":"https://cdn.qyliu.top/i/2024/03/21/65fc56832e37d.png","descr":"自建云图床"},{"name":"TianLiGPT","link":"https://summary.zhheo.com/admin","avatar":"https://bu.dusays.com/2023/04/15/643a29d0cf651.png","descr":"TianLiGPT管理"},{"name":"统计鸟","link":"https://www.tongjiniao.com/controlCenter/trafficStatistics","avatar":"https://cdn.qyliu.top/i/2024/04/09/6614ebdc3eafe.png","descr":"提供网站数据统计分析"},{"name":"缤纷云","link":"https://console.bitiful.com/buckets","avatar":"https://cdn.qyliu.top/i/2024/04/09/6614ec3365b84.png","descr":"高性能对象存储及CDN"}];
    var refreshNum = 1;
    function friendChainRandomTransmission() {
      const randomIndex = Math.floor(Math.random() * friend_link_list.length);
      const { name, link } = friend_link_list.splice(randomIndex, 1)[0];
      Snackbar.show({
        text:
          "点击前往按钮进入随机一个友链，不保证跳转网站的安全性和可用性。本次随机到的是本站友链：「" + name + "」",
        duration: 8000,
        pos: "top-center",
        actionText: "前往",
        onActionClick: function (element) {
          element.style.opacity = 0;
          window.open(link, "_blank");
        },
      });
    }
    function addFriendLinksInFooter() {
      var footerRandomFriendsBtn = document.getElementById("footer-random-friends-btn");
      if(!footerRandomFriendsBtn) return;
      footerRandomFriendsBtn.style.opacity = "0.2";
      footerRandomFriendsBtn.style.transitionDuration = "0.3s";
      footerRandomFriendsBtn.style.transform = "rotate(" + 360 * refreshNum++ + "deg)";
      const finalLinkList = [];
  
      let count = 0;

      while (friend_link_list.length && count < 3) {
        const randomIndex = Math.floor(Math.random() * friend_link_list.length);
        const { name, link, avatar } = friend_link_list.splice(randomIndex, 1)[0];
  
        finalLinkList.push({
          name,
          link,
          avatar,
        });
        count++;
      }
  
      let html = finalLinkList
        .map(({ name, link }) => {
          const returnInfo = "<a class='footer-item' href='" + link + "' target='_blank' rel='noopener nofollow'>" + name + "</a>"
          return returnInfo;
        })
        .join("");
  
      html += "<a class='footer-item' href='/link/'>更多</a>";

      document.getElementById("friend-links-in-footer").innerHTML = html;

      setTimeout(()=>{
        footerRandomFriendsBtn.style.opacity = "1";
      }, 300)
    };