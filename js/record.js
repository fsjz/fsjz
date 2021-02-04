function getAge(l, lunar) {
    var DATE = ['', '初一','初二','初三','初四','初五','初六','初七','初八','初九','初十','十一','十二','十三','十四','十五','十六','十七','十八','十九','二十','廿一','廿二','廿三','廿四','廿五','廿六','廿七','廿八','廿九','三十'];
    var MONTH = ['', '正','二','三','四','五','六','七','八','九','十','冬','腊'];
    var indexOf = function(arr, v) {for(var i in arr) { if (arr[i]==v) return i }};
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
function updateTable(year) {
    var sum = 0;
    $('#feeTable tr').each(function(i){
        var tds = $(this).children('td');
        if (i != 0) {
            var text = $(tds[1]).text().replace(/.*(\d{4}.*)/, '$1').split('=');
            var age = getAge([year+1, 1, 1], text[0]);
            var fee = 10;
            var info = '未满18岁且未成家';
            if (text[1] == 2) {
                fee = 50;
                info = '已经完成任务';
            } else if (text[1] == 1) {
                fee = 100;
                info = '成家且未完成任务';
            } else if (age >= 18 && text[1] == 0) {
                fee = 50;
                info = '满18岁还未成家';
            }
            $(tds[2]).text(fee);
            $(tds[4]).text(info);

            var className = 'lv0';
            var tfee = $(tds[3]).text();
            if (tfee == fee) {
                className = 'lv1';
            } else if (tfee > fee && tfee <= fee*2) {
                className = 'lv2';
            } else if (tfee > fee*2 && tfee <= fee*3) {
                className = 'lv3';
            } else if (tfee > fee*3) {
                className = 'lv4';
            }
            $(tds[1]).attr("class", className);
            $(tds[3]).attr("class", className);
            sum += (tfee*1 || 0);
        }
    });
    return sum;
}
