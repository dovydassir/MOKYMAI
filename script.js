
//1uzd.
function manoFunkcija() {
    setTimeout(() => {
        console.log("1 UZDUOTIS");
    }, 2000);
}

manoFunkcija();

//2uzd.
 console.log("Pranešimas prieš timeout");

setTimeout(() => {

    console.log("2 UZDUOTIS");

}, 3000);

//3uzd.
function manoFunkcija1() {
    setTimeout(() => {
        console.log("3 UZDUOTIS");
    }, 4000);
}

function manoFunkcija2() {
    setTimeout(() => {
        console.log("3,1 UZDUOTIS");
    }, 5000);   
}

manoFunkcija1();
manoFunkcija2();
//4uzd. 

function manoFunkcija3() {
    setTimeout(() => {
        console.log("4 UZDUOTIS");
    }, 3000);
}

manoFunkcija3();


//6uzd.

function manoFunkcija4(vardas, callback) {
    callback(vardas);
}

function manoFunkcija5(vardas) {
    console.log(vardas);
}

manoFunkcija4("Petras", manoFunkcija5);

//7uzd.  

function manoFunkcija6(skaicius, callback) {
    callback(skaicius);
}

function manoFunkcija7(skaicius) {
    console.log(skaicius * 2);


}

manoFunkcija6(5, manoFunkcija7);

//8uzd. 

function manoFunkcija8(skaicius, callback) {
    callback(skaicius);
}

function manoFunkcija9(skaicius) {
    console.log(skaicius.toUpperCase());
}

manoFunkcija8("petras", manoFunkcija9);

//9uzd.

function manoFunkcija10(masyvas, callback) {
    callback(masyvas);
}

function manoFunkcija11(masyvas) {
    console.log(masyvas);
}

manoFunkcija10([1, 2, 3], manoFunkcija11);

//10uzd.

function manoFunkcija12() {
    setTimeout(() => {
        console.log("10 UZDUOTIS");
    }, 2000);
}

manoFunkcija12();


//11uzd. 

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("duomenys gauti");
    }, 2000);
}).then((result) => {
    console.log(result);
});

// 12uzd 

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("klaida");
    }, 2000);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});



//13uzd.

new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(2*2);
    }, 2000);
}).then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});


