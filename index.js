let antraste = document.getElementsByClassName("antraste")[0];

let mygtukas = document.getElementsByClassName("mygtukas")[0];

mygtukas.addEventListener("click", function () {

    antraste.innerHTML = "Antraste pasikeite";

});

console.log("2uzd");

let tekstas = document.getElementsByClassName("tekstas")[0];
let spalvaBtn = document.getElementsByClassName("spalvaBtn")[0];

spalvaBtn.addEventListener("click", function () {
    tekstas.style.color = "red";
});

console.log("3uzd");

let pasleptiBtn = document.getElementsByClassName("pasleptiBtn")[0];
pasleptiBtn.addEventListener("click", function () {
    pasleptiBtn.style.display = "none";
});

console.log("4uzd");

let rodytiBtn = document.getElementsByClassName("rodytiBtn")[0];

rodytiBtn.addEventListener("click", function () {

    pasleptiBtn.style.display = "block";

});
console.log("5uzd");
let foto = document.getElementsByClassName("foto")[0];
let keistiFotoBtn = document.getElementsByClassName("keistiFotoBtn")[0];

keistiFotoBtn.addEventListener("click", function () {
    foto.src = "https://upload.wikimedia.org/wikipedia/commons/b/b6/Image_created_with_a_mobile_phone.png";
});
console.log("6uzd");

let skaicius = 0;
let skaiciusP = document.getElementsByClassName("skaicius")[0];
let didintiBtn = document.getElementsByClassName("didintiBtn")[0];
didintiBtn.addEventListener("click", function () {
    skaicius++;
    skaiciusP.innerHTML = skaicius;
});
console.log("7uzd");

let mazintiBtn = document.getElementsByClassName("mazintiBtn")[0];
mazintiBtn.addEventListener("click", function () {
    skaicius--;
    skaiciusP.innerHTML = skaicius;
});
console.log("8uzd");
let keistisp = document.getElementsByClassName("keistisp")[0];
keistisp.addEventListener("click", function () {
    skaiciusP.style.fontSize = "30px";
    skaiciusP.style.backgroundColor = "yellow";
}); 
