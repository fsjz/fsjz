<style>
    body {
        background: #222826;
    }
    p {
        margin-top: 0.5em;
        margin-bottom: 0.5em;
    }
    #container {
        width: 100%;
        text-align: center;
    }
    #container p {
        font-family: 'Audiowide';
        text-align: center;
        font-size: 3em;
    }
    .mainContainer {
        padding: 0;
    }
</style>
<script>
    function addStyle(style, i, c1, c2) {
        style.appendChild(document.createTextNode('.l'+i+' { color:'+c2+';animation: light'+i+' 1.5s ease infinite alternate;}'));
        style.appendChild(document.createTextNode('@keyframes light'+i+' { from { text-shadow: 0 0 10px '+c1+', 0 0 20px '+c1+', 0 0 30px '+c1+', 0 0 40px '+c2+', 0 0 70px '+c2+', 0 0 80px '+c2+', 0 0 100px '+c2+', 0 0 150px '+c2+'; } to { text-shadow: 0 0 10px '+c1+', 0 0 20px '+c1+', 0 0 30px '+c1+', 0 0 40px '+c2+', 0 0 70px '+c2+', 0 0 80px '+c2+', 0 0 100px '+c2+', 0 0 150px '+c2+'; }}'));
    }

    var style = document.createElement('style');
    var colors = ['#B22222', '#00a67c', '#FF0000', '#458B00', '#FF8C00'];
    for (var i=0; i<5; i++) {
        addStyle(style, i+1, '#fff', colors[i]);
    }
    document.getElementsByTagName("head")[0].appendChild(style);
</script>

``` tagcloud line width=600 height=600 textColour=#fff className=tagcloud-container
方拔齐 方定基 方定乾 方定古 方吉才 方昌明 方太中 方运琼 方运辉 方婷 方丹 方华 方运艳 方运素 方运江 方远航 方远程 方太成 方运梅 方运红 方鹏 方雪 方黔粤 方运先 方运美 方运敏 方太国 方运琴 方运慧 方运飞 方欣羽 方运勇 方浩轩 方浩宇 方太加 方运丽 方运进 方紫涵 方辰逸 方运德 方梓鸥 方梓腾 方太先 方太强 方运波 方妙兮 方艺玲 方运菊 方太蓉 方太学 方太福 方运培 方运松 方昌英 方昌伦 方太军 方运模 方娟娟 方永圣 方燕 方太华 方运杰 方林 老大 方太文 方运忠 方运久 方运刚
```

<div id="container">
    <p class="l1">齐易家增福</p>
    <p class="l2">续谱定吉昌</p>
    <p class="l3">太运永红光</p>
    <p class="l4">远传忠孝悌</p>
    <p class="l5">荣华富贵长</p>
</div>
