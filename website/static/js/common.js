function getBirthday(b) {
    b = b || '';
    var m = b.match(/(\d{4}年)(\d{2}月\d{2}日)/);
    if (m) {
        return '<span class="birthday1">' + m[1] + '</span><span  class="birthday2">' + m[2] + '</span>';
    }
    return '<span class="birthday">' + b + '</span>';
}
function getMemberClass(pre, r) {
    var list = [pre];
    if (r.pass && r.girl) {
        list.push('passgirl');
    } else {
        r.pass && (list.push('pass'));
        r.girl && (list.push('girl')) || (list.push('boy'));
    }
    return ' class="'+list.join(' ')+'"';
}
function showMemberName(r) {
    return '<div class="memberContainer">' +
    (r.husband ? ('<div'+getMemberClass('husband', r.husband)+'>' + r.husband.name + getBirthday(r.husband.birthday) +  '</div>') : '') +
    ('<div'+getMemberClass('me', r)+'>' + r.name + getBirthday(r.birthday) +  '</div>') +
    (r.wife ? ('<div'+getMemberClass('wife', r.wife)+'>' + r.wife.name + getBirthday(r.wife.birthday) +  '</div>') : '') +
    '</div>';
}
function showFamilyMemberName(r) {
    return '<span '+getMemberClass('', r)+'>'+r.name+'</span>';
}
function getBirthdayList(children, count) {
    var chineseLunar = require('./lunar.js');
    var birthdayList = [];
    var monthList = '正,二,三,四,五,六,七,八,九,十,冬,腊'.split(',');
    var dayList = '初一,初二,初三,初四,初五,初六,初七,初八,初九,初十,十一,十二,十三,十四,十五,十六,十七,十八,十九,二十,廿一,廿二,廿三,廿四,廿五,廿六,廿七,廿八,廿九,三十'.split(',');
    function getDiffDay(data) {
        var now = new Date();
        var year = now.getFullYear(), month, day, date;
        now = new Date(year, now.getMonth(), now.getDate());
        var m = data.birthday.match(/(\d{4})年(\d{2})月(\d{2})日/);
        if (m) {
            month = +m[2];
            day = +m[3];
            date = new Date(year, month-1, day);
        } else {
            m = data.birthday.match(/(\d{4})(.)月(..)/);
            if (m) {
                month = monthList.indexOf(m[2]) + 1;
                day = dayList.indexOf(m[3]) + 1;
            }
            date = chineseLunar.lunarToSolar(year, month, day);
        }
        if (now <= date) {
            return { name: data.name, day: Math.round((date.getTime() - now.getTime())/86400000) };
        }
        date.setFullYear(year+1);
        return { name: data.name, day: Math.round((date.getTime() - now.getTime())/86400000) };
    }
    function showBirthday(list) {
        for (const data of list) {
            if (data.birthday) {
                birthdayList.push(getDiffDay(data));
            }
            var person = data.wife || data.husband;
            if (person && person.birthday) {
                birthdayList.push(getDiffDay(person));
            }
            if (data.children) {
                showBirthday(data.children);
            }
        }
    }
    showBirthday(children);
    birthdayList.sort(function(a, b){
        return a.day - b.day;
    });
    return birthdayList.slice(0, count);
}
function showNearBirthday(data) {
    console.log("=======", data);
    $('#modal-box-content').html(`<div class="modal-container">
    <div class="modal-item">方运江：今天</div>
    <div class="modal-item">方运勇：6天</div>
    <div class="modal-item">方运江：今天</div>
    <div class="modal-item">方运勇：6天</div>
    <div class="modal-item">方运江：今天</div>
    </div>`);
    $('.modal-box-mask, .modal-box-modal').css('display', 'block');
}


$(document).ready(function(){
    $('.modal-close').click(function(){
        $('.modal-box-mask, .modal-box-modal').css('display', 'none');
    })
    window.onkeydown = function (event) {
        if(event.keyCode == 27){ // 如果键盘按下 ESC 同样退出
            $('.modal-box-mask, .modal-box-modal').css('display', 'none')
        }
    }
})
