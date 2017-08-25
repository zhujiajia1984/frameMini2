/**
 * Created by zjj on 2017/7/3.
 */
$(document).ready(function () {
    switch (getUrlParam('tab')){
        case "localSet":
            $("li[name='tab_title']").removeClass("active");
            break;
        case "interSet":
            alert("interSet");
            break;
        default:
            break;
    }

})


function getUrlParam(name) {
    var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
    var r = window.location.search.substr(1).match(reg);  //匹配目标参数
    if (r != null) return unescape(r[2]); return null; //返回参数值
}