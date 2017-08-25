/**
 * Created by zjj on 2017/7/3.
 */
$(document).ready(function () {
    $("a[name=networkset]").click(function () {
        window.location.href = "networksetting.html?tab=" + $(this).attr("id");
    })
})