年龄参考阳历日期：<input type="date" id="caldate" style="margin: 30px 0 10px 0" />

|字辈|姓名|阳历生日|农历生日|年龄|是否成家
|:-:|:-|:-:|:-:|:-:|:-:|
|太字辈{rowspan=8 .vm}|方太中|1950-04-15|1950年二月廿九||是|
|{.h}|方太成|1952-01-30|1952年正月初四||是|
|{.h}|方太家|1956-08-11|1956年七月初六||是|
|{.h}|方太军|1959-08-02|1959年六月廿八||是|
|{.h}|方太华|1961-11-01|1961年九月廿三||是|
|{.h}|方太强|1965-08-04|1965年七月初八||是|
|{.h}|方太文|1970-10-23|1970年九月廿四||是|
|{.h}|方太福|1973-12-04|1973年冬月初十||是|
|运字辈{rowspan=16 .vm}|方运红|1974-03-10|1974年二月十七||是|
|{.h}|方运辉|1976-09-24|1976年八月初一||是|
|{.h}|方运飞|1979-07-07|1979年六月十四||是|
|{.h}|方运勇|1982-03-20|1982年二月廿五||是|
|{.h}|方运江|1983-06-26|1983年五月十六||是|
|{.h}|方运进|1984-02-14|1984年正月十三||是|
|{.h}|方运木|1984-09-24|1984年八月廿九||是|
|{.h}|方运德|1985-12-12|1985年冬月初一||是|
|{.h}|方运波|1987-10-09|1987年八月十七||是|
|{.h}|方运杰|1989-11-28|1989年冬月初一||否|
|{.h}|方林|1992-05-30|1992年四月廿八||是|
|{.h}|方运忠|1995-03-17|1995年二月十七||否|
|{.h}|方运培|1997-10-09|1997年九月初八||否|
|{.h}|方运久|1998-06-14|1998年五月二十||否|
|{.h}|方运刚|1999-11-09|1999年十月初二||否|
|{.h}|方运松|2005-02-13|2005年正月初五||否|
|永字辈{rowspan=16 .vm}|方鹏|1995-08-31|1995年八月初六||否|
|{.h}|方华|2001-11-12|2001年九月廿七||否|
|{.h}|方梓鸥|2011-12-31|2011年腊月初七||否|
|{.h}|方永圣|2012-04-10|2012年三月二十||否|
|{.h}|方远航|2012-10-13|2012年八月廿八||否|
|{.h}|方浩轩|2014-07-31|2014年七月初五||否|
|{.h}|方浩宇|2014-07-31|2014年七月初五||否|
|{.h}|方梓藤|2016-05-25|2016年四月十九||否|
|{.h}|方辰逸|2017-04-23|2017年三月廿七||否|
|{.h}|方远程|2018-12-29|2018年冬月廿三||否{#memberTable}|

<script>
Date.prototype.format = function(fmt) {
    var o = { "M+" : this.getMonth()+1, "D+" : this.getDate() };
    if(/(Y+)/.test(fmt)) fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));
    for(var k in o) if(new RegExp("("+ k +")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ? (o[k]) : (("00"+ o[k]).substr((""+ o[k]).length)));
    return fmt;
}
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
    $('#memberTable tr').each(function(i){
        var tds = $(this).children('td');
        if (i != '0') {
            var age = getAge(day, $(tds[3]).text());
            $(tds[4]).text(age);
        }
    });
}
var now = new Date();
$('#caldate').val(now.format('YYYY-MM-DD'));
$('#caldate').change(function(e) { updateAge(new Date($(this).val())) });
updateAge(now);
</script>
