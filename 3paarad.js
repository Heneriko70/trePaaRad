//Definerer variabler for spiller 1, spiller 2 og hvem som er nåverende spiller.
var spiller1 = "X";
var spiller2 = "O";
var spillernaa = spiller1;

//definerer variablene for alle boksene/cellene i rammen til 3 på rad. 
var b1El = document.querySelector("#b1");
var b2El = document.querySelector('#b2');
var b3El = document.querySelector('#b3');
var b4El = document.querySelector('#b4');
var b5El = document.querySelector('#b5');
var b6El = document.querySelector('#b6');
var b7El = document.querySelector('#b7');
var b8El = document.querySelector('#b8');
var b9El = document.querySelector('#b9');

/*lager eventlisteners for hver av boksene/cellene i 3 på rad. 
Når du trykker på boksene/cellene kjøres funksjonen spill.
 */
b1El.addEventListener("click", spill);
b2El.addEventListener('click', spill);
b3El.addEventListener('click', spill);
b4El.addEventListener('click', spill);
b5El.addEventListener('click', spill);
b6El.addEventListener('click', spill);
b7El.addEventListener('click', spill);
b8El.addEventListener('click', spill);
b9El.addEventListener('click', spill);

// Lager variablen for der teksten om hvem som vant skal komme opp.
var vinnertekstEl = document.querySelector("#vinnertekst");

var metode1EL = document.querySelector("#metode1");
var metode2EL = document.querySelector("#metode2");
var metode = 1;
// Lager en eventlistener for metode 1 knappen.
metode1EL.addEventListener("click", function () {
    metode = 1;
});
// Lager en eventlistener for metode 2 knappen.
metode2EL.addEventListener("click", function () {
    metode = 2;
});

var antallklikk = 0; // Lager en variabel som inneholder antall klikk.
var vinner = ""; // Lager en variabel som inneholder hvem som vant.

// Lager en funksjon som sjekker hvem sin tur det er.
function klikktur() {
    // Sjekker om det er spiller 1 sin tur, hvis det er det så bytter den til spiller 2 sin tur.
    if (spillernaa === spiller1) {
        spillernaa = spiller2;
        // Hvis det ikke er spiller 1 sin tur så bytter den til spiller 1 sin tur.
    } else {
        spillernaa = spiller1;
    }
}


// Lager en funksjon som sjekker om noen har vunnet.
function vinnersjekk1() {
    console.log("vinnersjekk1");
    // Lager en variabel som inneholder alle mulige vinnerkombinasjoner.
    var vinnermuligheter = [
        [b1El, b2El, b3El],
        [b4El, b5El, b6El],
        [b7El, b8El, b9El],
        [b1El, b4El, b7El],
        [b2El, b5El, b8El],
        [b3El, b6El, b9El],
        [b1El, b5El, b9El],
        [b3El, b5El, b7El]
    ];


    /* Lager en for loop som sjekker om noen har vunnet. For 
    hver kombinasjon av vinnermuligheter sjekker den om det er en vinner.
    Hvis det er en vinner så endrer den vinner variabelen til vinneren og
    bryter ut av loopen. */
    for (var kombinasjoner of vinnermuligheter) {
        var [a, b, c] = kombinasjoner;
        if (a.innerHTML === b.innerHTML && b.innerHTML === c.innerHTML) {
            vinner = a.innerHTML;
            break;
        }
    }
    /* Hvis det er en vinner så skriver den ut hvem som vant.
    Hvis det ikke er en vinner så skriver den ingenting. */
    if (vinner !== "") {
        vinnertekstEl.innerHTML = `Spiller ${vinner} vant`;
    } else {
        vinnertekstEl.innerHTML = "";
    }
}
// Lager en funksjon som sjekker om noen har vunnet ved hjelp av if-statements.
function vinnersjekk2() {
    console.log("vinnersjekk2");

    // Sjekker alle mulige vinnerkombinasjoner ved hjelp av if-statements.
    if (b1El.innerHTML === b2El.innerHTML && b2El.innerHTML === b3El.innerHTML) {
        vinner = b1El.innerHTML;
    } else if (b4El.innerHTML === b5El.innerHTML && b5El.innerHTML === b6El.innerHTML) {
        vinner = b4El.innerHTML;
    } else if (b7El.innerHTML === b8El.innerHTML && b8El.innerHTML === b9El.innerHTML) {
        vinner = b7El.innerHTML;
    } else if (b1El.innerHTML === b4El.innerHTML && b4El.innerHTML === b7El.innerHTML) {
        vinner = b1El.innerHTML;
    } else if (b2El.innerHTML === b5El.innerHTML && b5El.innerHTML === b8El.innerHTML) {
        vinner = b2El.innerHTML;
    } else if (b3El.innerHTML === b6El.innerHTML && b6El.innerHTML === b9El.innerHTML) {
        vinner = b3El.innerHTML;
    } else if (b1El.innerHTML === b5El.innerHTML && b5El.innerHTML === b9El.innerHTML) {
        vinner = b1El.innerHTML;
    } else if (b3El.innerHTML === b5El.innerHTML && b5El.innerHTML === b7El.innerHTML) {
        vinner = b3El.innerHTML;
    } else {
        vinnertekstEl.innerHTML = "";
    }

    /* Hvis det er en vinner så skriver den ut hvem som vant.
    Hvis det ikke er en vinner eller vinneren er en tom streng så skriver den ingenting. */
    if (vinner !== "") {
        vinnertekstEl.innerHTML = `Spiller ${vinner} vant`;
    } else {
        vinnertekstEl.innerHTML = "";
    }
}


// Lager funksjonen som kjøres når du trykker på en boks/celle.
function spill() {
    antallklikk++;              // øker antallklikk med 1.
    console.log(antallklikk);

    // Sjekker om boksen/cellen er tom, hvis den ikke er det så skjer det ingenting.
    if (this.innerHTML === spiller1 || this.innerHTML === spiller2) {
        return;
    }

    /* Kjører funksjonen klikktur.
    Sjekker om det er spiller 1 sin tur, hvis det er det så skriver den X i boksen/cellen.
    Hvis det ikke er spiller 1 sin tur så skriver den O i boksen/cellen. */
    klikktur();

    if (spillernaa === spiller1) {
        this.innerHTML = spiller1;
    }
    else {
        this.innerHTML = spiller2;
    }

    if (antallklikk >= 5) {
        if (metode === 1) {
            vinnersjekk1();
        } else {
            vinnersjekk2();
        }

    }
    if (antallklikk === 9 && vinner === "") {
        vinnertekstEl.innerHTML = "Uavgjort";
    }

}

