
console.log("1uzd.");
const button = document.getElementsByClassName('myButton')[0];

button.addEventListener('click', function() {
    console.log('Mygtukas paspaustas!');
}); 

console.log("2uzd.");

const button2 = document.getElementsByClassName('myButton2')[0];
button2.addEventListener('click', function() {
    const heading = document.querySelector('h1');   
    heading.textContent = 'Tekstas pakeistas!';
});


console.log("3uzd.");

const heading = document.querySelector('h1');
heading.addEventListener('click', function() {
    heading.style.color = 'red';
});

console.log("4uzd.");


function hideDiv() {
    const div = document.querySelector('.myDIV');
    div.style.display = 'none';
}

console.log("5uzd.");
function showDiv() {
    const div = document.querySelector('.myDIV');
    div.style.display = 'block';
}

console.log("6uzd.");

let count = 0;
const countButton = document.getElementsByClassName('countButton')[0];
const countDisplay = document.getElementsByClassName('countDisplay')[0];
countButton.addEventListener('click', function() {
    count++;
    countDisplay.textContent = 'Skaitliukas: ' + count;
});

console.log("7uzd.");

let count2 = 0;
const countButton2Plus = document.getElementsByClassName('countButton2+')[0];
const countButton2Minus = document.getElementsByClassName('countButton2-')[0];
const countDisplay2 = document.getElementsByClassName('countDisplay2')[0];
countButton2Plus.addEventListener('click', function() {
    count2++;
    countDisplay2.textContent = 'Skaitliukas2: ' + count2;
});
countButton2Minus.addEventListener('click', function() {
    count2--;
    countDisplay2.textContent = 'Skaitliukas2: ' + count2;
}); 

console.log("8uzd.");

const changeColorButton = document.getElementsByClassName('changeColorButton')[0];
const myDiv2 = document.querySelector('.myDiv2');

changeColorButton.addEventListener('click', function() {
    myDiv2.style.backgroundColor = 'red';
});

console.log("9uzd.");

myDiv2.addEventListener('mouseover', function() {
    myDiv2.style.width = '50%';
});
 
console.log("10uzd.");

myDiv2.addEventListener('mouseout', function() {
    myDiv2.style.width = '100%';
});


console.log("11uzd.");
document.addEventListener('keydown', function(event) {
    document.getElementsByClassName('myParagraph')[0].textContent = 'paspaustas klavisas: ' + event.key;
});


console.log("12uzd.");

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        alert('Paspaustas Enter klavisas!');
    }
});


