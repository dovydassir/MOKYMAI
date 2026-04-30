console.log('Hello from index.js!');

const string = 'Hello World';
const stringresult = `${string}${string}`;

console.log('String:',string, typeof string);
console.log('Stringresult:', stringresult);

const number = 3.14;
console.log('Number:', number, typeof number);

const boolean = true;
console.log('Boolean:', boolean, typeof boolean);

const nullValue = null;
console.log('Null:', nullValue, typeof nullValue);

const undefinedValue = undefined;
console.log('Undefined:', undefinedValue, typeof undefinedValue);

const NaNValue = NaN;
console.log('NaN:', NaNValue, typeof NaNValue);

const array = [1, 2, 3];
console.log('Array:', array, typeof array);

const object = {
  name: 'John',
  age: 30,
  isStudent: true,
  hobbies: ['reading', 'coding', 'gaming'],
};

console.log('Object:', object, typeof object);

const a= 1;
console.log("kintamojo a reikšmė:", a);
const b= 2;
console.log("kintamojo a reikšmė:", b);

const br = "Vardenis Pavardenis";
const c =  "Mano vardas";

console.log(`${c} ${br}`);
 
let metai = 1997;
let menuo = 5;
let diena = 20;

let viso = (metai % 10) + (menuo % 10) + (diena % 10);

console.log(`Paskutinių skaitmenų suma: ${viso}`);

let markoSvoris = 78;
let markoUgis = 1.69;
let dzonoSvoris = 92;
let dzonoUgis = 1.95;

let kmimarko = markoSvoris / (markoUgis *markoUgis);
let kmidzono = dzonoSvoris / (dzonoUgis *dzonoUgis);

console.log("KMI Marko:",kmimarko);
console.log("KMI dzono", kmidzono);

let markodiesnis= kmimarko > kmidzono;
console.log("marko didesnis:", markodiesnis);

let pirmassk = 10;
let antrassk = 20;
let treciassk = 20;

if (pirmassk === antrassk) {
  console.log("pirmas ir antras skaičius");
}
if (antrassk === treciassk) {
  console.log("antras ir trečias yra lygūs");
}
if (pirmassk > antrassk) {
  console.log("pirmas skaičius didesnis už antrajį");
}
if (antrassk > treciassk * 2) {
  console.log("antras skaičius didesnis už dvigubą trečio");
}
if (pirmassk % 2 === 0) {
  console.log("Pirmas skaičius yra lyginis");
}
if (antrassk % 2 !== 0) {
  console.log("Antras skaičius yra nelyginis");
}
if (treciassk > 0 ) {
  console.log("trecias skaičius teigiamas");
}
if (pirmassk > 0 ) {
  console.log("pirmas skaičius teigiamas");
}
if (antrassk % 4 === 0) {
  console.log("dalinasi iš 4");
}
if (treciassk % 8 === 0) {
  console.log("dalinasi iš 8");
}
// uzduotis 2 //

let vartotojo_amžius = 40;
if (vartotojo_amžius > 18) {
  console.log("jus galite balsuoti");
}
let pazimys1 = 5;
let pazimys2 = 7;
let pazimys3 = 8;
let vidurkis = (pazimys1 + pazimys2 + pazimys3) / 3; 
console.log("vidurkis:", vidurkis);
if (vidurkis > 5) {
  console.log("vidurkis teigiamas");
}
let uzd4 = 25;

if (uzd4 % 5 === 0) {
    console.log(`${uzd4} * 1 = ${uzd4 * 1}`);
}
//15 pamoka
//1 uzd.
let spalva = "zalia";
if (spalva === "zalia") {
  console.log("eik");
} else if (spalva === "geltona") {
  console.log("pasiruosk");
} else if (spalva === "raudona") {
  console.log("stok");
}
//2uzd.
let tmp = 15;
if (tmp <0) {
  console.log("salta");
} else if (tmp <= 20) {
  console.log("vesu");
} else if (tmp < 20) {
  console.log("silta");
}
//3uzd.
let slapt = "1234";
if (slapt === "1234") {
  console.log("prisijungta");
} else {
  console.log("neteisingas");
}
//4uzd.
let dalijasi = 4;
if (dalijasi % 2 === 0) {
  console.log("lyginis");
} else {
  console.log("nelyginis");
}
//5uzd.
let amzius = 18;
if (amzius <= 7) {
  console.log("vaikas")
} else if (amzius <= 17) {
  console.log("mokinys")
} else if (amzius <= 18) {
  console.log("suauges");
}
//6uzd.
let dienos = 3;

switch (dienos) {
    case 1:
        console.log("Pirmadienis");
        break;
    case 2:
        console.log("Antradienis");
        break;
    case 3:
        console.log("Trečiadienis");
        break;
    case 4:
        console.log("Ketvirtadienis");
        break;
    case 5:
        console.log("Penktadienis");
        break;
    case 6:
        console.log("Šeštadienis");
        break;
    case 7:
        console.log("Sekmadienis");
        break;
}
//7uzd.
let vaisius = "obuolys";
switch (vaisius) {
  case "obuolys":
    console.log("raudonas ir skanus");
    break;
  case "bananas":
    console.log("geltonas ir saldus");
    break;
  case "apelsinas":
    console.log(sultingas);
    break;
}
//8uzd.
let gyvunas = "šuo";
switch (gyvunas) {
  case "šuo":
    console.log("au au");
    break;
  case "kate":
    console.log("miau");
    break
  case "karvė":
    console.log("muu")
    break
}

//9uzd.

let pazymiai = 8;
switch (true) {
  case (pazymiai === 10):
    console.log("puiku");
    break;
  case (pazymiai >= 8):
    console.log("gerai");
    break;
  case (pazymiai >= 5):
    console.log("vidutiniskai")
    break;
  default:
    console.log("pasistenk");
}
//10uzd.
let mygtukas = "w";
switch (mygtukas) {
  case "w":
    console.log("pirmyn");
    break;
}

//loops
//1uzd.

for (let i = 1; i <=30; i++) {
  if (i % 3 === 0) {
    console.log(i)
  }
}
//2uzd.
console.log("uzd2")

for (let i=1; i < 20; i++) {
  if (i % 2 === 0) {
    console.log(i + "lyginis");
  } else {
    console.log(i + "nelyginis");
  }
}
//3uzd
console.log("uzd3")

let suma = 0;

for (let i = 1; i <= 50; i++) {
    suma += i;
    console.log("Tarpinė suma:", suma);
}

//4uzd
console.log("uzd4")
for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("fizzbuzz");
  }else if (i % 3 === 0) {
    console.log("fizz");
  }else if (i % 5 === 0) {
    console.log("buzz");
  }else {
    console.log(i)
  }
}
//5uzd
console.log("uzd5")
let piramide = "";
for (let i = 1; i <= 5; i++) {
    piramide += i;
    console.log(piramide);
}


//paskaita 16
// masyvai
console.log("masyvai uzduotys");

//1uzd

let maistas = ["makaronai","ledai","žuvis","pienas", "pica"];

//2uzd
console.log(maistas[0]);
 
//3uzd.
console.log(maistas[maistas.length-1]);

//4uzd.
console.log(maistas.length);
//5uzd.
maistas.push("kebabas");
//6uzd.
maistas.pop()
console.log(maistas);
//7uzd.
maistas.forEach(item => {
  console.log(item);
});
//8uzd.
let masskaiciai = [1,2,3,4,5,6,-7,-8,10];
let sumamassskaiciai = 0;
masskaiciai.forEach(x => sumamassskaiciai += x);
console.log(sumamassskaiciai);
//9uzd.
console.log(Math.min(...masskaiciai));
//10uzd.
console.log(Math.max(...masskaiciai));
//11uzd.
let kiek_lyginiu_masyve = masskaiciai.filter(x => x % 2 === 0).length;
console.log(kiek_lyginiu_masyve);
//12uzd.
let Kiek_teigiamu = masskaiciai.filter(x => x > 0);
console.log(Kiek_teigiamu);
//13uzd.
console.log(masskaiciai.map(x => x*2));
//14uzd.
console.log(masskaiciai.filter(x => x>0));
//15uzd.
console.log(masskaiciai.filter(x => x === 10));
//16uzd.
//17uzd.
let apverstas = [...masskaiciai].reverse();
console.log(apverstas);
//18uzd.
let surikiuotas = [...masskaiciai].sort((a, b) => a - b);
console.log(surikiuotas);
//19uzd.
let kitas = [100, 200];
let sujungtas = [...masskaiciai, ...kitas];
console.log(sujungtas);
//20uzd.
let unikalus = [...new Set(masskaiciai)];
console.log(unikalus);
 
//paskaita17

console.log("paskiata 17 uzduotys");


console.log("uzd1"); //Duotas skaičių masyvas. Rask antrą didžiausią skaičių.
let skaiciai17 = [1,5,9,3,8];
let surikiuoti17 = [...skaiciai17].sort((a, b) => b-a );
console.log(surikiuoti17[1]);


console.log("uzd2"); //Patikrink, ar masyvas yra „palindromas“ (tas pats iš abiejų pusių)
let masyvas17 = [1,2,3,2,1];
let apverstas17 = [...masyvas17].reverse();
console.log(masyvas17.toString() === apverstas17.toString());

console.log("uzd3") //Sukurk naują masyvą, kuriame kiekvienas elementas būtų ankstesnių elementų suma (kaupiamoji suma).

let rezultatas17 = [];
let suma17 = 0;
for (let i=0; i < skaiciai17.length; i++) {
  suma17 += skaiciai17[1];
  rezultatas17.push(suma);
}
console.log(rezultatas17);

console.log("uzd4") //Rask elementą, kuris kartojasi dažniausiai.

let skaiciai177 = [1,2,2,3,3,3,4];
let kiekiai = {};
skaiciai177.forEach(x => {
  if (kiekiai[x]) {
    kiekiai[x] = kiekiai[x] + 1;
  } else {
    kiekiai[x] = 1;
  }
});
let dazniausias = skaiciai177[0];
let max = 0;
for (let key in kiekiai) {
  if (kiekiai[key] > max) {
    max = kiekiai[key];
    dazniausias = key;
  }
}
console.log(dazniausias);

console.log("5uzd.") //Padalink masyvą į dvi dalis: mažesnius už vidurkį ir didesnius arba lygius vidurkiui.

let skaiciai1777 = [1,2,3,4,5];
let suma1777 = 0;

skaiciai1777.forEach(x => {
  suma1777 = suma1777 + x;
});

let vidurkis1777 = suma1777 / skaiciai1777.length;

let mazi = skaiciai1777.filter(x => x < vidurkis1777);
let dideli = skaiciai1777.filter(x => x >= vidurkis1777);

console.log("mazesni:", mazi);
console.log("didesni:", dideli);


let skaiciai99 = [1,2,3,4];
let