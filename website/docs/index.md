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
        padding-top: 1em;
    }
    #container p {
        font-family: 'Audiowide';
        text-align: center;
        font-size: 3em;
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
<div id="container">
    <p class="l1">齐易家增福</p>
    <p class="l2">续谱定吉昌</p>
    <p class="l3">太运永红光</p>
    <p class="l4">远传忠孝悌</p>
    <p class="l5">荣华富贵长</p>
</div>
