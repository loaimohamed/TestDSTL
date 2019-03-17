var xhr = new XMLHttpRequest();
var listM = document.getElementById("listM");
xhr.overrideMimeType("application/json");
xhr.open("GET", "Data.json");
xhr.onreadystatechange = function () { 
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
    var ageRatings = ["+18", "+17", "+16", "+14"];
    var colorSys = document.getElementsByTagName("tr");
    for (var i = 0; i < colorSys.length; i++) {
        var mark = document.createElement("span"),
            search = colorSys[i].children[6].innerHTML,
            listName = colorSys[i].children[0];
        mark.classList.add("boxmarks");
        if (search.includes("+12")) { mark.classList.add("T-rating12"); };
        if (search.includes("+14")) { mark.classList.add("T-rating15"); };
        if (search.includes("+15")) { mark.classList.add("T-rating15"); };
        if (search.includes("+16")) { mark.classList.add("T-rating16"); };
        if (search.includes("+17")) { mark.classList.add("T-rating17"); };
        if (search.includes("+18")) { mark.classList.add("T-rating18"); };
        listName.insertAdjacentElement("beforeend", mark);
    }
}
