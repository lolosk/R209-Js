function carre(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    var c = a * a;
    if (isNaN(a) || a == "") {
        alert("Veuillez entrer un nombre");
    } else {
        alert("Le carré de " + a + " est: " + c);
        document.getElementById("result").innerHTML = document.getElementById('nombre').value + " au carré égale : " + c;
    }
}

function cube(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    var c = a * a * a;
    if (isNaN(a) || a == "") {
        alert("Veuillez entrer un nombre");
    } else {
        alert("Le cube de " + a + " est: " + c);
        document.getElementById("result").innerHTML = document.getElementById('nombre').value + " au cube égale : " + c;
    }
}
function puissance(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    var b = parseFloat(arg["exposant"]["value"]);
    var p = 1;
    for (var i = 0; i < b; i++) {
        p *= a;
    }
    if (isNaN(a) || isNaN(b) || a == "" || b == "") {
        alert("Veuillez entrer des nombres");
    } else {
        alert(a + " Puissance " + b + " égale: " + p);
        document.getElementById("result").innerHTML = document.getElementById('nombre').value + " à la puissance " + document.getElementById('exposant').value + " égale : " + p;
    }
}

function racine(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    var r = Math.sqrt(a);
    if (isNaN(a) || a == "") {
        alert("Veuillez entrer un nombre");
    } else {
        alert("La racine carrée de " + a + " est: " + r);
        document.getElementById("result").innerHTML = "La racine carrée de " + document.getElementById('nombre').value + " est : " + r;
    }
}
function premier(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    var p = true;
    if (isNaN(a) || a == "") {
        alert("Veuillez entrer un nombre");
    } else {
        for (var i = 2; i < a; i++) {
            if (a % i == 0) {
                p = false;
                break;
            }
        }
        if (p) {
            alert(a + " est un nombre premier");
            document.getElementById("result").innerHTML = document.getElementById('nombre').value + " est premier";
        } else {
            alert(a + " n'est pas un nombre premier");
            document.getElementById("result").innerHTML = document.getElementById('nombre').value + " n'est pas premier";
        }
    }
}
function npremier(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    var n = parseFloat(arg["exposant"]["value"]);
    var p = 0;
    if (isNaN(a) || isNaN(n) || a == "" || n == "") {
        alert("Veuillez entrer des nombres");
    } else {
        var count = 0;
        var i = a;
        while (count < n) {
            var isPrime = true;
            for (var j = 2; j < i; j++) {
                if (i % j == 0) {
                    isPrime = false;
                    break;
                }
            }
            if (isPrime) {
                alert(i + " est un nombre premier");
                document.getElementById("result").innerHTML = i + " est premier";
                count++;
            }
            i++;
        }
    }
}
function nppremier(arg) {
    var n = parseFloat(arg["nombre"]["value"]);
    var count = 0;
    var i = 2;
    var primes = [];
    while (count < n) {
        var isPrime = true;
        for (var j = 2; j < i; j++) {
            if (i % j == 0) {
                isPrime = false;
                break;
            }
        }
        if (isPrime) {
            primes.push(i);
            count++;
        }
        i++;
    }
    alert("Les " + n + " plus petits nombres premiers sont: " + primes.join(", "));
    document.getElementById("result").innerHTML = "Les " + n + " plus petits nombres premiers sont: " + primes.join(", ");
}
function binaire(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    var b = a.toString(2);
    if (isNaN(a) || a == "") {
        alert("Veuillez entrer un nombre");
    } else {
        alert("Le nombre " + a + " en binaire est: " + b);
        document.getElementById("result").innerHTML = "Le nombre " + document.getElementById('nombre').value + " en binaire est: " + b;
    }
}
function octal(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    var b = a.toString(8);
    if (isNaN(a) || a == "") {
        alert("Veuillez entrer un nombre");
    } else {
        alert("Le nombre " + a + " en octal est: " + b);
        document.getElementById("result").innerHTML = "Le nombre " + document.getElementById('nombre').value + " en octal est: " + b;
    }
}
function hexa(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    var b = a.toString(16);
    if (isNaN(a) || a == "") {
        alert("Veuillez entrer un nombre");
    } else {
        alert("Le nombre " + a + " en hexadécimal est: " + b);
        document.getElementById("result").innerHTML = "Le nombre " + document.getElementById('nombre').value + " en hexadécimal est: " + b;
    }
}
function roman(arg) {
    var a = parseFloat(arg["nombre"]["value"]);
    if (isNaN(a) || a == "") {
        alert("Veuillez entrer un nombre");
    } else {
        var roman = "";
        var romans = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
        var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
        for (var i = 0; i < numbers.length; i++) {
            while (a >= numbers[i]) {
                roman += romans[i];
                a -= numbers[i];
            }
        }
        alert("Le nombre"  + " en chiffres romains est: " + roman);
        document.getElementById("result").innerHTML = "Le nombre " + document.getElementById('nombre').value + " en chiffres romains est: " + roman;
    }
}
