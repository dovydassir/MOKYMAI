
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



//14 uzd.Promise

let skaicius = 15;

new Promise((resolve, reject) => {

    if (skaicius > 10) {

        resolve("Skaičius didesnis už 10");

    } else {

        reject("Skaičius per mažas");

    }

})
.then((result) => {

    console.log(result);

})
.catch((error) => {

    console.log(error);

});

//15 uzd.

new Promise((resolve, reject) => {

    const vartotojas = {

        vardas: "Tomas",
        amzius: 25,
        miestas: "Vilnius"

    };

    resolve(vartotojas);

})
.then((user) => {

    console.log(user);

})
.catch((error) => {

    console.log(error);

});

//16uzd. turedamas skaiciu masyva  a) atrink tik lyginius b) padaugink juos is 2 C) surikiuok didejimo tvarka

const skaiciai = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

new Promise((resolve, reject) => {

    resolve(skaiciai);

})
.then((skaiciai) => {

    console.log(skaiciai.filter(skaicius => skaicius % 2 === 0));

})
.then((skaiciai) => {

    console.log(skaiciai.map(skaicius => skaicius * 2));

})
.then((skaiciai) => {

    console.log(skaiciai.sort((a, b) => a - b));

})
.catch((error) => {

    console.log(error);

});

//17 uzd turedamas vardu masyva a) palik tik ilgesnius nei 5 B) paversk didziosiomis raidemis

const vardai = ["Tomas", "Petras", "Antanas", "Ona", "Mindaugas"];

new Promise((resolve, reject) => {  

    resolve(vardai);

})
.then((vardai) => {     

    console.log(vardai.filter(vardas => vardas.length > 5));

})
.then((vardai) => { 

    console.log(vardai.map(vardas => vardas.toUpperCase()));

})
.catch((error) => {

    console.log(error);

}); 
     

//18 is produktu masyvo a) atrink brangesnius nei 50 b) paimk tik ju pavadinimus

const produktai = [ 

    {

        pavadinimas: "Pomidoras",
        kaina: 2.5,
        kiekis: 10

    },

    {   

        pavadinimas: "Bananai",
        kaina: 1.5,
        kiekis: 20

    },  

    {

        pavadinimas: "Apelsinai",
        kaina: 3,
        kiekis: 5

    },

    {

        pavadinimas: "Kairys",
        kaina: 0.5,
        kiekis: 100

    }

];

new Promise((resolve, reject) => {

    resolve(produktai);

})
.then((produktai) => {

    console.log(produktai.filter(produktas => produktas.kiekis > 50));

})
.then((produktai) => {

    console.log(produktai.map(produktas => produktas.pavadinimas));

})
.catch((error) => {

    console.log(error);

});

//19 surusiok studentus pagal pazimi ir isvek tik vardus

const studentai = [

    {

        vardas: "Tomas",
        pazymys: 8

    },

    {

        vardas: "Petras",
        pazymys: 6

    },

    {

        vardas: "Antanas",
        pazymys: 9

    },

    {

        vardas: "Ona",
        pazymys: 7

    }

];

new Promise((resolve, reject) => {

    resolve(studentai);

})
.then((studentai) => {

    console.log(studentai.filter(studentas => studentas.pazymys > 7));

})
.then((studentai) => {

    console.log(studentai.map(studentas => studentas.vardas));

})
.catch((error) => {

    console.log(error);

}); 

//20 

const skaiciai1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

new Promise((resolve, reject) => {

    resolve(skaiciai1);

})
.then((skaiciai1) => {

    console.log(skaiciai1.filter(skaicius => skaicius % 2 === 0));

})
.then((skaiciai1) => {

    console.log(skaiciai1.reduce((acc, skaicius) => acc + skaicius, 0));

})
.catch((error) => {

    console.log(error);

});

//21 uzd. sukurk javaskript objekta ir paversk ji json formata

const objektas = {
    
    vardas: "Tomas",
    pazymys: 8  
}   

console.log(JSON.stringify(objektas));

//22 json teksta paversk javascript objektu 

const jsonTekstas = '{"vardas": "Tomas", "pazymys": 8}';

console.log(JSON.parse(jsonTekstas));

//23 uzd. is json objekto isvesk konkrecias savybes

const jsonObjektas = '{"vardas": "Tomas", "pazymys": 8}';

const objektas1 = JSON.parse(jsonObjektas);

console.log(objektas1.vardas);

//24 

const studentas = {

    vardas: "Tomas",
    pazymys: 8

}

console.log(JSON.stringify(studentas));

//25 

const produktai1 = [
    {
        pavadinimas: "Pomidoras",
        kaina: 2.5,
        kiekis: 10
    },
    {
        pavadinimas: "Bananai",
        kaina: 1.5,
        kiekis: 20
    },
    {
        pavadinimas: "Apelsinai",
        kaina: 3,
        kiekis: 5
    },
    {
        pavadinimas: "Kairys",
        kaina: 0.5,
        kiekis: 100
    }
];

console.log(JSON.stringify(produktai1.map(produktas => produktas.pavadinimas)));    

//26 uzd. 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

//27 uzd. 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

//28 uzd. 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data[0].name))
.catch(error => console.log(error));

//29 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data.map(user => user.name)))
.catch(error => console.log(error));

//30 

fetch("https://jsonplaceholder.typicode.com/users")
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.log(error));

//31 uzd. 

document.getElementById("loading").style.display = "block";

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

    console.log(data);

    document.getElementById("loading").style.display = "none";

})
.catch(error => console.log(error));

//32 

fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())

.then(data => {

    console.log(data);

    document.getElementById("loading").style.display = "none";

})

.catch(error => console.log(error));

//33 uzd. 

async function gautiDuomenis() {

    try {

        const response = await fetch("https://jsonplaceholder.typicode.com/users");

        const data = await response.json();

        console.log(data);

    } catch(error) {

        console.log(error);

    }

}

gautiDuomenis();

34// 

