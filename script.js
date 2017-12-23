/// <reference path="jquery.d.ts" />

var loc = window.location;
var doc = document;
var c = "click";
// NANY !?
const LACONSTANTEAVECLENOMLEPLUSLONGDUMONDEETQUISERTARIEN = undefined;

var Nimage = 1;
var iMax = 8;

function img() {
    $("#image").attr("src", "diapo/img" + Nimage + ".JPG");
    $("#c").html("Image n°" + Nimage + " sur " + iMax, "count")
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
            });
        });
    }
});

$("div[id='toggleDiapo']").trigger("click");
$("a[href='presentation.html']").trigger("click");

$("#nav>ul>li").hover(function(e) {
    $(this).children("ul").slideToggle(100);
})


var interval = setInterval(() => {
    $("#next").trigger("click");
}, 5000);
