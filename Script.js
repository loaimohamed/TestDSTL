var xhr = new XMLHttpRequest();
var listM = document.getElementById("listM");
xhr.open("GET", "Data.json");
xhr.onload = async function () { 
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
    
}
xhr.send();
