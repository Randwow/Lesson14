// //ПРОСТОЕ ЗАДАНИЕ ПРОСТО НУЖНО МЕНЯТЬ ЗНАЧЕНИЯ A,B,C ;


// var a = 4;
// var b = -5;
// var c = 1;
// var x;
// var x1;
// var x2;
// var des = Math.sqrt(b * b  - (4 * a * c));

// console.log('a =', a);
// console.log('b =', b);
// console.log('c =', c);
// console.log('Descriminant = ', des);


// if(des > 0){    
//     x1 =  ((-b) + des) / (2 * a);
//     x2 =  ((-b) - des) / (2 * a);
//     console.log('X1 = ' , x1 , ' X2 =' , x2);

// } else  if (des == 0){
//     x = (-b) / (2 * a);
//     console.log('X = ', x);
// } else {
//     console.log('ERROR');
// }

var a;
var b;
var c;
var x;
var x1;
var x2;
var des = Math.sqrt(b * b - (4 * a * c));

function showElementById(id) {
    document.getElementById(id).classList.remove('hide');
}

function hideElementById(id) {
    document.getElementById(id).classList.add('hide');
}
function enterData() {
    a = parseInt(prompt("Please enter A = ", 0));
    b = parseInt(prompt('Please enter B = ', 0));
    c = parseInt(prompt('Please enter C = ', 0));

    document.getElementById('a-number').innerHTML = 'You entered A = ' + a;
    document.getElementById('b-number').innerHTML = 'You entered B = ' + b;
    document.getElementById('c-number').innerHTML = 'You entered C = ' + c;


    var isInvalidData = Number.isNaN(des);

    if (isInvalidData) {
        hideElementById('calculate');
    } else {
        showElementById('calculate');
    }

    hideElementById('result');
    showElementById('results-container');

}
function calculateX(){
if(des == 0){  
    x = (-b) / (2 * a);
    document.getElementById('result').innerHTML = 'X = ' + x;  

}else {    
    x1 = ((-b) + des) / (2 * a);
    x2 = ((-b) - des) / (2 * a);
    document.getElementById('result').innerHTML = 'X1 = ' + x1 + ' X2 = ' + x2 ;

} 
    hideElementById('calculate');
    showElementById('result');
}

document.getElementById('start').addEventListener('click', enterData);
document.getElementById('calculate').addEventListener('click', calculateX);