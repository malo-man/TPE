var loc = window.location;
var doc = document;
var c = "click";

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
var iMax = 4;

function img() {
    doc.getElementById("image").setAttribute("src", "img/img" + Nimage + ".JPG");
    RemoveElement("c");
    AddElement("p", "c", "Image n°" + Nimage + " sur " + iMax, "count");
}

function prec() {
    if (Nimage != 1) {
        Nimage = Nimage - 1;
        img();
    }
}

function suiv() {
    if (Nimage != iMax) {
        Nimage = Nimage + 1;
        img();
    }
}

var diapo = true;

function dispDiapo() {
    RemoveElement("toggleDiapo");
    if (diapo) {
        SetDisp("prev", "inline-block");
        SetDisp("next", "inline-block");
        SetDisp("image", "inline-block");
        AddElement("div", "toggleDiapo", "Cacher diapo", "count");
        img();
    } else {
        SetDisp("prev", "none");
        SetDisp("next", "none");
        SetDisp("image", "none");
        SetDisp("c", "none");
        AddElement("div", "toggleDiapo", "Afficher diapo", "count");
    }
    //SetAttribute("toggleDiapo", "class", "button");
    ClickEvent("toggleDiapo", dispDiapo);
    diapo = !diapo;
}

$("#toggleDiapo").on("click", (e) => {
    $("#diapo").slideToggle();
});

//dispDiapo();
img();

//ClickEvent("toggleDiapo", dispDiapo);
ClickEvent("prev", prec);
ClickEvent("next", suiv);

function presentation() {
    $("#content").html("");
    $("#content").load("presentation.html");
}

function exp() {
    $("#content").html("");
    $("#content").load("exp.html");
}

function biblio() {
    $("#content").html("");
    $("#content").load("biblio.html");
}

function app() {
    $("#content").html("");
    $("#content").load("app.html");
}

ClickEvent("presentation", presentation);
ClickEvent("experimentation", exp);
ClickEvent("biblio", biblio);
ClickEvent("app", app);
presentation();