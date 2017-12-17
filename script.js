/// <reference path="jquery.d.ts" />

var loc = window.location;
var doc = document;
var c = "click";
// NANY !?
const LACONSTANTEAVECLENOMLEPLUSLONGDUMONDEETQUISERTARIEN = undefined;

function link(floc) {
    window.location = floc;
}

function GetValue(Id) {
    return doc.getElementById(Id).value;
}

function AddElement(type, Id, txt, Id2) {
    var element = doc.createElement(type);
    element.textContent = txt;
    element.setAttribute("id", Id);
    doc.getElementById(Id2).appendChild(element);
}

function SetDisp(Id, val) {
    document.getElementById(Id).style.display = val;
}

function GetDisp(Id) {
    return document.getElementById(Id).style.display;
}

function SetAttribute(Id, attribute, val) {
    doc.getElementById(Id).setAttribute(attribute, val);
}

function GetAttribute(Id, attribute) {
    return doc.getElementById(Id).getAttribute(attribute);
}

function AddImg(Id, l, Id2) {
    var element = doc.createElement("img");
    element.setAttribute("src", l);
    element.setAttribute("id", Id);
    doc.getElementById(Id2).appendChild(element);
}

function RemoveElement(Id) {
    doc.getElementById(Id).parentNode.removeChild(doc.getElementById(Id));
}

function ClickEvent(Id, act) {
    doc.getElementById(Id).addEventListener(c, act);
}

var Nimage = 1;
var iMax = 3;

function img() {
    $("#image").attr("src", "img" + Nimage + ".JPG");
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

$("a[href='presentation.html']").trigger("click");

$("#nav>ul>li").hover(function(e) {
    $(this).children("ul").slideToggle(100);
})


var interval = setInterval(() => {
    $("#next").trigger("click");
}, 4000);
