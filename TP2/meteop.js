var ville, temperature, pression, humidite, vent, direction, tr1, tr2, tr3, tr4, tr5, tr6;
function interprete (data) {
    // traite les données json obtenue par fetch
    tr1 = document.getElementById("tr1");
    ville = document.createElement("td");
    ville["innerHTML"] = ville2;
    tr1.appendChild(ville);

    tr2 = document.getElementById("tr2");
    temperature = document.createElement("td");
    temperature["innerHTML"] = data["main"]["temp"];
    tr2.appendChild(temperature);

    tr3 = document.getElementById("tr3");
    pression = document.createElement("td");
    pression["innerHTML"] = data["main"]["pressure"];
    tr3.appendChild(pression);

    tr4 = document.getElementById("tr4");
    humidite = document.createElement("td");
    humidite["innerHTML"] = data["main"]["humidity"];
    tr4.appendChild(humidite);

    tr5 = document.getElementById("tr5");
    vent = document.createElement("td");
    vent["innerHTML"] = data["wind"]["speed"];
    tr5.appendChild(vent);

    tr6 = document.getElementById("tr6");
    direction = document.createElement("td");
    direction["innerHTML"] = data["wind"]["deg"];
    tr6.appendChild(direction);
}
function requete(arg){
    url = "https://api.openweathermap.org/data/2.5/weather?q="+arg["ville"]["value"]+",France&appid=d76799c7a74b69b1236ec356896bb945&lang=fr&units=metric"
    promesse = fetch(url)
    jsonprom = promesse.then(function(r) {return r.json()})
    jsonprom.then(interprete)
    ville2=arg["ville"]["value"];
}