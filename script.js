/// <reference path="jquery.d.ts" />

var c = "click";
// NANI !? OMAEWA MOU SHINDE IRU !!!
const LACONSTANTEAVECLENOMLEPLUSLONGDUMONDEETQUISERTARIEN = undefined;

var Nimage = 1;
var iMax = 8;

function img() {
    $("#image").attr("src", "diapo/img" + Nimage + ".JPG");
    //$("#c").html("Image n°" + Nimage + " sur " + iMax, "count")
}


$("#prev").on("click", (e) => {
    if (Nimage == 1) {
        Nimage = iMax + 1;
    }
    if (Nimage > 1) {
        Nimage -= 1;
        img();
    }
});

$("#next").on("click", (e) => {
    if (Nimage == iMax) {
        Nimage = 0;
    }
    if (Nimage < iMax) {
        Nimage += 1;
        img();
    }
});

$("#toggleDiapo").on("click", e => {
    $("#diapo, #c").slideToggle();
    $("#next,#prev").fadeToggle(100);
});

img();
var currentPage = null;
$("nav a").on("click", function(e) {
    e.preventDefault();
    if ($(this).attr("href") != undefined && $(this).attr("href") != currentPage) {
        currentPage = $(this).attr("href");
        $("#tothetop").trigger("click");
        $("#content").fadeOut(100, () => {
            $("#content").load($(this).attr("href"), () => {
                $("#content").fadeIn();
            });
        });
    }
});

$("#toggleDiapo").trigger("click");
$("a[href='presentation.html']").trigger("click");

$("#nav>ul>li").hover(function(e) {
    $(this).children("ul").slideToggle(100);
});


var interval = setInterval(() => {
    $("#next").trigger("click");
}, 4000);

$(window).scroll(function(e) {
    if ($(this).scrollTop() > 100) {
        $("#tothetop").fadeIn(200);
    } else {
        $("#tothetop").fadeOut(200);
    }
});

$("#tothetop").on("click", (e) => {
    e.preventDefault();
    $('html, body').animate({ scrollTop: 0 }, 300);
});
$("#tothetop").trigger("click");