/**
 * 过滤特殊
 */
export function stripscript(str) {
    var pattern = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>/?~！@#￥……&*（）&;—|{ }【】‘；：”“'。，、？]")
    var rs = "";
    for (var i = 0; i < str.length; i++) {
        rs = rs + str.substr(i, 1).replace(pattern, '');
    }
    return rs;
}
/**
 * 验证邮箱
 */
export function validateEmail(value) {
    let reg = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z]{2,4}$/;
    return !reg.test(value) ? true : false;  //三元运算符
}
/**
 * 验证密码
 */
export function validatePass(value) {
    let reg = /^(?!\D+$)(?![a^zA-Z]+$)\S{6,20}$/;
    if(!reg.test(value)){
        return false;
    }else {
        return true;
    }
}
/**
 * 验证验证码
 */
export function validateVcode(value) {
    let reg = /^[a-z0-9]{6}$/;
    return !reg.test(value) ? true : false;
}
