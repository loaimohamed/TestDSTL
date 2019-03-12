var xhr = new XMLHttpRequest();
xhr.open("GET", "Data.json");
var listM = document.getElementById("listM");
xhr.onload = function () {
    jsonFile();
    colorSystem();
}
function jsonFile() {
    var informationZ = JSON.parse(xhr.responseText);
    var cvb = informationZ;
    for (l = 0; l < Object.keys(cvb).length - 1; l++) {
        var trE = document.createElement("tr");
        for (i = 0; i < 8; i++) {
            var tdE = document.createElement("td");
            tdE.innerHTML = cvb[l].List[i];
            trE.appendChild(tdE);
        }
        listM.appendChild(trE);
    }
}
xhr.send();
function colorSystem() {
    var colorSys = document.getElementsByTagName("tr");
    for (let i = 1; i < colorSys.length; i++) { colorSys[i].children[0].innerHTML += " " + i; };
    var boxmarks = document.createElement("div"),
        rtRC = document.createElement("span");
    boxmarks.innerHTML = "X";
    for (var i = 0; i < colorSys.length; i++) {
        var rtR = colorSys[i].children[6].innerHTML.includes("+18/");
        var rtA = Array(rtR);
        for (var key of rtA) {  
            colorSys[i].children[0].appendChild(boxmarks);
        }
    }
}

// {"List" : ["","","","","","","",""]},
// colorSys[i].children[0].appendChild(boxmarks);