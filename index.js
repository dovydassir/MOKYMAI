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
 