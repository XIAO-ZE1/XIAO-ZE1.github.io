---
title: link
date: 2025-01-01 00:00:00
type: "link"
---

## 我的友链

{% tabs link %}
<!-- tab 🙋 butterfly-💭candy -->
```yml
    - name: xiaoze
      link: https://xiao-ze1.github.io/
      avatar: #https://www.fomal.cc/assets/avatar.webp
      descr: 纵有疾风起，人生不言弃
      siteshot: #https://source.fomal.cc/siteshot/www.fomal.cn.jpg
```
<!-- endtab -->

<!-- tab 🥗Volantis -->
```JSON
{
  "title": "xiaoze",
  "screenshot": "",
  "url": "https://xiao-ze1.github.io/",
  "avatar": "",
  "description": "纵有疾风起，人生不言弃",
  "keywords": "xiaoze"
}
```
<!-- endtab -->

<!-- tab 🌴General -->

| 名称       | 数值                                                         |
| ---------- | ------------------------------------------------------------ |
| 站点名称   | xiaoze     |
| 站点截图   |    |
| 站点链接   | https://xiao-ze1.github.io/    |
| 站长头像   |                       |
| 站点描述   | 纵有疾风起，人生不言弃                       |
| 站点关键词 | xiaoze     |

<!-- endtab -->
{% endtabs %}

{% folding 友情链接免责声明 %}

## 免责声明

本博客遵守中华人民共和国相关法律。本页内容仅作为方便学习而产生的快速链接的链接方式，对与友情链接中存在的链接、好文推荐链接等均为其他网站。我本人能力有限无法逐个甄别每篇文章的每个字，并无法获知是否在收录后原作者是否对链接增加了违反法律甚至其他破坏用户计算机等行为。因为部分友链网站甚至没有做备案、域名并未做实名认证等，所以友链网站均可能存在风险，请你须知。

所以在我力所能及的情况下，我会包括但不限于：

1. 针对收录的博客中的绝大多数内容通过标题来鉴别是否存在有风险的内容
2. 在收录的友链好文推荐中检查是否存在风险内容

但是你在访问的时候，仍然无法避免，包括但不限于：

1. 作者更换了超链接的指向，替换成了其他内容
2. 作者的服务器被恶意攻击、劫持、被注入恶意内容
3. 作者的域名到期，被不法分子用作他用
4. 作者修改了文章内容，增加钓鱼网站、广告等无效信息
5. 不完善的隐私保护对用户的隐私造成了侵害、泄漏

最新文章部分为机器抓取，本站作者未经过任何审核和筛选，本着友链信任原则添加的。如果你发现其中包含违反中华人民共和国法律的内容，请及时联系和举报。该友链会被拉黑。

如果因为从本页跳转给你造成了损失，深表歉意，并且建议用户如果发现存在问题在本页面进行回复。通常会很快处理。如果长时间无法得到处理，建议联系3337484367@qq.com。

{% endfolding %}

{% folding cyan open, 友链申请格式 %}

{% tabs 申请格式 %}
<!-- tab -->
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
有部分朋友的截图体积过大影响加载速度，后面一律采用小体积截图代替，望周知
<!-- endtab -->

<!-- tab -->
```md
昵称（请勿包含博客等字样）：
网站地址（要求博客地址，请勿提交个人主页）：
头像图片url（请提供尽可能清晰的图片，我会上传到我自己的图床）：
描述：
站点截图（可选）：
```
<!-- endtab -->
{% endtabs %}

{% note primary flat %}
🎉本站支持交换友链，在您提出申请之前，请将本站添加至友链
🥗为了保障本站用户，本站仅支持个人网站的友链申请
🍧申请本站友链需要拥有独立域名（非免费域名），建议开启全站HTTPS
🥫如果友情链接已经添加，请保持网站的正常访问，会定期清理僵尸网站
🍖网站有一定的实质性内容和主题，不能是空壳网站和练手网站
💕感谢您对本站的支持，如果您已经满足上述要求，请在下方表单提交友链申请~~~
{% endnote %}
{% endfolding %}

<p style="padding: 0 0 0 .8rem">
    请<strong>勾选</strong>你符合的条件：
</p>
<div id="friendlink_checkboxs" style="padding: 0 0 0 1.6rem">
    <p>
        <label class="checkbox">
            <input type="checkbox" class="checkbox-input" id="checkbox1">
            我已添加 <b>xiaoze</b> 博客的友情链接
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" class="checkbox-input" id="checkbox2">
            我的链接主体为 <b>个人</b>，网站类型为<b>博客</b>
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" class="checkbox-input" id="checkbox3">
            我的网站现在可以在中国大陆区域正常访问
        </label>
    </p>
    <p>
        <label class="checkbox">
            <input type="checkbox" class="checkbox-input" id="checkbox4">
            网站内容符合中国大陆法律法规
        </label>
    </p>
</div>

<script>
    document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll(".checkbox-input");

    // 更新提交按钮的显示状态
    function updateSubmitButton() {
    const twikooSubmit = document.querySelector(".tk-submit");
    const input = document.querySelector('.el-textarea__inner');

    // 检查 .tk-submit 是否存在
    if (!twikooSubmit) {
    console.warn("评论提交按钮 .tk-submit 未找到");
    return;
}

    // 检查 .el-textarea__inner 是否存在
    if (!input) {
    console.warn("评论输入框 .el-textarea__inner 未找到");
    return;
}

    // 检查是否所有复选框都已勾选
    const allChecked = Array.from(checkboxes).every(checkbox => checkbox.checked);

    if (allChecked) {
    // 显示提交按钮
    twikooSubmit.style.opacity = "1";
    twikooSubmit.style.height = "auto";
    twikooSubmit.style.overflow = "visible";

    // 填写模板信息到输入框
    input.value = '- name：\n  link：\n  avatar：\n  descr：\n  siteshot：';

    // 模拟输入事件以更新界面
    input.dispatchEvent(new Event('input', { bubbles: true }));

    // 将光标设置到最后一行
    input.focus();
    input.setSelectionRange(input.value.length, input.value.length);
} else {
    // 隐藏提交按钮
    twikooSubmit.style.opacity = "0";
    twikooSubmit.style.height = "0";
    twikooSubmit.style.overflow = "hidden";
}
}

    // 给每个复选框添加监听器
    checkboxes.forEach(checkbox => checkbox.addEventListener("change", updateSubmitButton));
});
</script>

<style>.tk-comments>.tk-submit {
    opacity: 0;
    height: 0;
    transition: opacity 0.5s ease, height 0.5s ease;
    overflow: hidden;
}

</style>
