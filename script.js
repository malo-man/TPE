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

$("nav a").on("click", function(e) {
    e.preventDefault();
    if ($(this).attr("href") != undefined) {
        $("#content").fadeOut(100, () => {
            $("#content").load($(this).attr("href"), () => {
                $("#content").fadeIn();
                //document.write("<script src='https://cdnjs.cloudflare.com/ajax/libs/mathjax/2.7.2/MathJax.js?config=TeX-MML-AM_CHTML'></script>");
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


////// PREVENT F5

//$(document).on("keydown", e => { if ((e.which || e.keyCode) == 116 || (e.which || e.keyCode) == 82) e.preventDefault(); });