/**
 * Created by zjj on 2017/6/25.
 */
var btnNext = document.getElementById("btnNext");
var btnPre = document.getElementById("btnPre");
var btnSubmit = document.getElementById("btnSubmit");
var step111 = document.getElementById("step111");
var step222 = document.getElementById("step222");
var step333 = document.getElementById("step333");
var tab1 = document.getElementById("tab1");
var tab2 = document.getElementById("tab2");
var tab3 = document.getElementById("tab3");
var index = 1;
btnNext.addEventListener("click",function (event) {
    if(index == 1){
        step111.className = "col-md-4 bg-grey mt-step-col done";
        step222.className = "col-md-4 bg-grey mt-step-col active";
        tab1.className = "tab-pane";
        tab2.className = "tab-pane active";
        btnPre.style = "";
    }
    else{
        step111.className = "col-md-4 bg-grey mt-step-col done";
        step222.className = "col-md-4 bg-grey mt-step-col done";
        step333.className = "col-md-4 bg-grey mt-step-col active";
        tab1.className = "tab-pane";
        tab2.className = "tab-pane";
        tab3.className = "tab-pane active";
        btnPre.style = "";
        btnSubmit.style = "";
        btnNext.style.display = "none";
        index = 0;
    }
    index++;
});