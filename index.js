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