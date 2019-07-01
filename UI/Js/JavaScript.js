/// <reference path="jquery-1.8.0.min.js" />
$(function () {
    $('.DivMax1_1').fadeIn(3000);
    $('.DivMax1_2').delay(10000).fadeIn(2000);

    $(".DivMax1A1").click(function () {
        $(".DivMax1_1").attr("style", "display:none")
    });
    $(".A2").click(function () {
        $(".DivMax1_2").attr("style", "display:none")
    });
    $(".Header1_A2").mouseover(function () {
        $(".redian").css("display", "none");
        $(".Header1_A2").css("color", "");
        $("#" + $(this).attr("sid") + "").css("display", "block");
        $(this).css("color", "#FA0564");
        $(".Header1").css("background-image", "url(Images/" + $(this).attr("sid") + ".jpg)");
    });
    
    $(".liuchengA").mouseover(function () {
        $(".liucheng").css("display", "none");
        $("#" + $(this).attr("sid") + "").css("display", "block");
        $(".I_Div9_1").css("background-image", "url(Images/" + $(this).attr("sid") + ".jpg)");
    });

    $("#I_Div8A a").mouseenter(function () {
        $(this).find("img").animate({ width: 0, height: 0 }, 400);
    });
    $("#I_Div8A a").mouseleave(function () {
        $(this).find("img").animate({ width: 285, height: 150 }, 400);
    });

    var x = document.documentElement.clientWidth;
    var y = document.documentElement.clientHeight;
    var count = (x - 90) / 2
    $(".lxfscroll-title").css("margin", "350px 0px 0px " + count + "px");
    var DivMax1_2left = (x - 386) / 2;
    var DivMax1_2top = (y - 228)/2
    $(".DivMax1_2").css("margin", "" + DivMax1_2top + "px 0px 0px " + DivMax1_2left + "px")
    var ul = $(".lxfscroll ul");
    var li = $(".lxfscroll li");
    var tli = $(".lxfscroll-title li");
    var speed = 350;
    var autospeed = 3000;
    var i = 1;
    var index = 0;
    var n = 0;
    /* 标题按钮事件 */
    function lxfscroll() {
        $("#UL2 li").attr("style", "background-color:white");
        $(this).attr("style", "background-color:#00AEFF");
        var index = tli.index($(this));
        tli.removeClass("cur");
        $(this).addClass("cur");
        ul.css({ "left": "0px" });
        li.css({ "left": "0px" });
        li.eq(index).css({ "z-index": i });
        li.eq(index).css({ "left": "100%" });
        ul.animate({ left: "-100%" }, speed);
        i++;

    };
    /* 自动轮换 */
    function autoroll() {
        if (n >= 3) {
            n = 0;
        }
        $("#UL2 li").attr("style", "background-color:#666666");
        tli.eq(n).attr("style", "background-color:#00AEFF");
        tli.removeClass("cur");
        tli.eq(n).addClass("cur");
        ul.css({ "left": "0px" });
        li.css({ "left": "0px" });
        li.eq(n).css({ "z-index": i });
        li.eq(n).css({ "left": "100%" });
        n++;
        i++;
        timer = setTimeout(autoroll, autospeed);
        ul.animate({ left: "-100%" }, speed);
    };
    /* 鼠标悬停即停止自动轮换 */
    function stoproll() {
        li.hover(function () {
            clearTimeout(timer);
            n = $(this).prevAll().length + 1;
        }, function () {
            timer = setTimeout(autoroll, autospeed);
        });
        tli.hover(function () {
            clearTimeout(timer);
            n = $(this).prevAll().length + 1;
        }, function () {
            timer = setTimeout(autoroll, autospeed);
        });
    };
    tli.click(lxfscroll);
    autoroll();
    stoproll();
});
