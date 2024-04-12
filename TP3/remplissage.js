var titres, divc, paragraphe, i

titres = document.getElementsByClassName("titre")
for (i = 0; i<titres.length; i = i+1) {
    titres[i]["innerHTML"] = "Nouveau titre " + String(i)
}
divc = document.getElementById("contenu")
paragraphe = document.createElement("p")
paragraphe.setAttribute("class", "vert")
paragraphe["innerHTML"] = "Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur. Hi omnes lingua, institutis, legibus inter se differunt. Gallos ab Aquitanis Garumna flumen, a Belgis Matrona et Sequana dividit."
divc.appendChild(paragraphe)