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
