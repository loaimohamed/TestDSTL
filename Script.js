var xhr = new XMLHttpRequest();
var listM = document.getElementById("listM");
xhr.overrideMimeType("application/json");
xhr.open("GET", "Data.json");
xhr.onload = function () { 
    var informationZ = JSON.parse(xhr.responseText);
    for (l = 0; l < Object.keys(informationZ).length - 1; l++) {
        var trE = document.createElement("tr");
        for (i = 0; i < 8; i++) {
            var tdE = document.createElement("td");
            tdE.innerHTML = informationZ[l].List[i];
            trE.appendChild(tdE);
        }
        listM.appendChild(trE);
    }
    colorSystem();
}
xhr.send();
function colorSystem() {
    listM.firstElementChild.classList.add("topStyle");
    var colorSys = document.getElementsByTagName("tr");
    for (var i = 0; i < colorSys.length; i++) {
        var mark = document.createElement("span"),
            search = colorSys[i].children[6].innerHTML,
            listName = colorSys[i].children[0];
        mark.classList.add("boxmarks");
        console.log(search.include("+18"));
        listName.insertAdjacentElement("beforeend", mark);
    }
}
