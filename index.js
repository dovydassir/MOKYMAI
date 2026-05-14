console.log("uzd1.");

const pakeistiAntraste = () => {
    document.querySelector(".antraste").textContent =
        "Nauja antraštė";
};

document
    .querySelector(".btn1")
.addEventListener("click", pakeistiAntraste);



console.log("uzd2");

const pakeistiSpalva = () => {
    document.querySelector(".tekstas").style.color =
        "red";
};

document
    .querySelector(".tekstas")
    .addEventListener("click", pakeistiSpalva);

console.log("uzd3");

const paslepti = () => {
    document.querySelector(".blokas").style.display = 
    "none";
};
document
.querySelector(".btn3")
.addEventListener("click", paslepti);

console.log("uzd4");

const parodyti = () => {
    document.querySelector(".blokas").style.display =
    "block";
}
document
.querySelector(".btn4")
.addEventListener("click", parodyti);


console.log("uzd5")

const keistiNuotrauka = () => {
    document.querySelector(".img").src =
        "https://picsum.photos/300";
};

document
    .querySelector(".btn5")
    .addEventListener("click", keistiNuotrauka);

console.log("uzd6");


const skaitliukas = () => {
    document.querySelector(".skaitliukas").textContent++;
}
document
.querySelector(".btn6")
.addEventListener("click", skaitliukas);

console.log("uzd7");

let counter = 0;

const plus2 = () => {
    counter++;

    document.querySelector(".counter").textContent =
        counter;
};

const minus2 = () => {
    counter--;

    document.querySelector(".counter").textContent =
        counter;
};

document
.querySelector(".plus2")
.addEventListener("click", plus2);

document
.querySelector(".minus2")
.addEventListener("click", minus2);


console.log("uzd8");



const randomColor = () => {
    const red = Math.round(Math.random() * 255);
    const green = Math.round(Math.random() * 255);
    const blue = Math.round(Math.random() * 255);
    document.body.style.backgroundColor = `rgb(${red},${green},${blue})`;
  };
  
  document.querySelector(".randomcolor").addEventListener("click", randomColor);

console.log("uzd9");


const naujasElementas = () => {
    const naujasElementas = document.createElement("li");
    naujasElementas.textContent = "Naujas elementas";
    document.querySelector("ul").appendChild(naujasElementas);
  };
  
  document.querySelector(".naujasElementas").addEventListener("click", naujasElementas);

   
    const pasalintiElementa = () => {
        const elementai = document.querySelectorAll("li");
        elementai[elementai.length - 1].remove();
      };
      
      document.querySelector(".pasalintiElementa").addEventListener("click", pasalintiElementa);






        















    













