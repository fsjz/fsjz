|字辈|姓名|生日|年龄|
|:-:|:-|:-:|:-:|:-:|:-:|:-|:-|
|太字辈{rowspan=9 .vm}|方太中|1950年二月廿九*04-15*{.m}||
|{.h}|方太成|1952年正月初四*01-30*{.m}||
|{.h}|方太国|1953年腊月廿六*01-30*{.m}|故于2012年四月十八，终年58岁|
|{.h}|方太家|1956年七月初六*08-11*{.m}||
|{.h}|方太军|1959年六月廿八*08-02*{.m}||
|{.h}|方太华|1961年九月廿三*11-01*{.m}||
|{.h}|方太强|1965年七月初八*08-04*{.m}||
|{.h}|方太文|1970年九月廿四*10-23*{.m}||
|{.h}|方太福|1973年冬月初十*12-04*{.m}||
|运字辈{rowspan=16 .vm}|方运红|1974年二月十七*03-10*{.m}||
|{.h}|方运辉|1976年八月初一*09-24*{.m}||
|{.h}|方运飞|1979年六月十四*07-07*{.m}||
|{.h}|方运勇|1982年二月廿五*03-20*{.m}||
|{.h}|方运江|1983年五月十六*06-26*{.m}||
|{.h}|方运进|1984年正月十三*02-14*{.m}||
|{.h}|方运木|1984年八月廿九*09-24*{.m}||
|{.h}|方运德|1985年冬月初一*12-12*{.m}||
|{.h}|方运波|1987年八月十七*10-09*{.m}||
|{.h}|方运杰|1989年冬月初一*11-28*{.m}||
|{.h}|方林|1992年四月廿八*05-30*{.m}||
|{.h}|方运忠|1995年二月十七*03-17*{.m}||
|{.h}|方运培|1997年九月初八*10-09*{.m}||
|{.h}|方运久|1998年五月二十*06-14*{.m}||
|{.h}|方运刚|1999年十月初二*11-09*{.m}||
|{.h}|方运松|2005年正月初五*02-13*{.m}||
|永字辈{rowspan=16 .vm}|方鹏|1995年八月初六*08-31*{.m}||
|{.h}|方华|2001年九月廿六*11-11*{.m}||
|{.h}|方梓鸥|2011年腊月初七*12-31*{.m}||
|{.h}|方永圣|2012年三月二十*04-10*{.m}||
|{.h}|方远航|2012年八月廿八*10-13*{.m}||
|{.h}|方浩轩|2014年七月初五*07-31*{.m}||
|{.h}|方浩宇|2014年七月初五*07-31*{.m}||
|{.h}|方梓藤|2016年四月十九*05-25*{.m}||
|{.h}|方辰逸|2017年三月廿七*04-23*{.m}||
|{.h}|方远程|2018年冬月廿三*12-29*{.m}|{#familyTable}|

<script>
function getLunar(date){
    var MADD = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var CALENDAR_DATA = [0xA4B,0x5164B,0x6A5,0x6D4,0x415B5,0x2B6,0x957,0x2092F,0x497,0x60C96,0xD4A,0xEA5,0x50DA9,0x5AD,0x2B6,0x3126E, 0x92E,0x7192D,0xC95,0xD4A,0x61B4A,0xB55,0x56A,0x4155B, 0x25D,0x92D,0x2192B,0xA95,0x71695,0x6CA,0xB55,0x50AB5,0x4DA,0xA5B,0x30A57,0x52B,0x8152A,0xE95,0x6AA,0x615AA,0xAB5,0x4B6,0x414AE,0xA57,0x526,0x31D26,0xD95,0x70B55,0x56A,0x96D,0x5095D,0x4AD,0xA4D,0x41A4D,0xD25,0x81AA5,0xB54,0xB6A,0x612DA,0x95B,0x49B,0x41497,0xA4B,0xA164B, 0x6A5,0x6D4,0x615B4,0xAB6,0x957,0x5092F,0x497,0x64B, 0x30D4A,0xEA5,0x80D65,0x5AC,0xAB6,0x5126D,0x92E,0xC96,0x41A95,0xD4A,0xDA5,0x20B55,0x56A,0x7155B,0x25D,0x92D,0x5192B,0xA95,0xB4A,0x416AA,0xAD5,0x90AB5,0x4BA,0xA5B, 0x60A57,0x52B,0xA93,0x40E95];

    var y = date.getFullYear();
    var m = date.getMonth();
    var d = date.getDate();

    var bit = function(m, n) { return (m>>n)&1 };

    var i, j, k;
    var isEnd=false;
    var total=(y-1921) * 365+Math.floor((y-1921)/4)+MADD[m]+d-38;
    if(d%4==0&&m>1) {
        total++;
    }
    for(i=0;;i++){
        k=(CALENDAR_DATA[i]<0xfff)?11:12;
        for(j=k;j>=0;j--){
            if(total<=29+bit(CALENDAR_DATA[i],j)){
                isEnd=true; break;
            }
            total=total-29-bit(CALENDAR_DATA[i],j);
        }
        if(isEnd) break;
    }
    cy=1921+i;
    cm=k-j+1;
    cd=total;
    if(k==12){
        if(cm==Math.floor(CALENDAR_DATA[i]/0x10000)+1){
            cm=1-cm;
        }
        if(cm>Math.floor(CALENDAR_DATA[i]/0x10000)+1){
            cm--;
        }
    }
    return [cy, cm, cd];
}
function getAge(date, lunar) {
    var DATE = ['', '一','二','三','四','五','六','七','八','九','十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];
    var MONTH = ['', '一','二','三','四','五','六','七','八','九','十','冬','腊'];
    var indexOf = function(arr, v) {for(var i in arr) { if (arr[i]==v) return i }};
    var l = getLunar(date);
    var tmp = lunar.split('年');
    var ly = tmp[0];
    tmp = tmp[1].split('月');
    var lm = indexOf(MONTH, tmp[0]);
    var ld = indexOf(DATE, tmp[1]);
    var age = l[0] -ly;
    if (l[1] < lm || (l[1] == lm && l[2] < ld)) {
        age--;
    }
    return age;
}
function updateAge(day) {
    $('#familyTable tr').each(function(i){
        var tds = $(this).children('td');
        if (i != 0 && !$(tds[3]).text()) {
            var text = $(tds[2]).text();
            var age = getAge(day, text.replace(/\d\d-\d\d$/, ''));
            $(tds[3]).text(age+'岁');
        }
    });
}
updateAge(new Date());
</script>
