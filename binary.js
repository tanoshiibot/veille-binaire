//Pour trouver les nombres pairs et impairs

function odd(){
    let oddNumbers = [];

    for(let i = 0; i <= 1000; i++){
        if (i % 2){
            oddNumbers.push(i);
        }
    }
    return oddNumbers; 
}

function oddBits(){
    let oddNumbers = [];

    for(let i = 0; i <= 1000; i++){
        if (i & 1){
            oddNumbers.push(i);
        }
    }

    return oddNumbers; 
}

console.time();
console.log("Avec % : ");
console.log( odd());
console.timeEnd();

console.time();
console.log("Avec l'opération binaire n & 1 : ");
console.log(oddBits());
console.timeEnd();

//Pour les exposants de 2

function a(){
    let n = 0
    for(i = 0; i < 10000; i++){
        n = Math.pow(2, 12);
    }
    return n;
}

function b(){
    let n = 0
    for(i = 0; i < 10000; i++){
        n = 2 ** 12;
    }
    return n;
}

function c(){
    let n = 0
    for(i = 0; i < 10000; i++){
        n = 1 << 12;
    }
    return n;
}

console.time();
console.log("Avec Math.pow() : " + a());
console.timeEnd();

console.time();
console.log("Avec n ** 2 : " + b());
console.timeEnd();

console.time();
console.log("Avec l'opération binaire 1 << n : " + c());
console.timeEnd();

//Pour les multiplications par 2

function d(){
    let n = 0
    for(i = 0; i < 10000; i++){
        n = 2 * 12;
    }
    return n;
}

function e(){
    let n = 0
    for(i = 0; i < 10000; i++){
        n = 12 << 1;
    }
    return n;
}

console.time();
console.log("Avec n * 2 : " + d());
console.timeEnd();

console.time();
console.log("Avec l'opération binaire n << 1 : " + d());
console.timeEnd();


function mathTrunc(){
    
    let n = 0
    for(i = 0; i < 10000; i++){
        n = Math.trunc(3.14159265359);
    }
    return n;
}

console.time();
console.log("Avec Math.trunc : " + mathTrunc());
console.timeEnd();

function bitTrunc(){

    let n = 0
    for(i = 0; i < 10000; i++){
        n = ~~3.14159265359;
    }
    return n;
}

console.time();
console.log("Avec l'opération binaire ~~n : " + bitTrunc());
console.timeEnd();

//Sources :
//https://www.w3schools.com/js/js_bitwise.asp
//https://gist.github.com/everget/320499f197bc27901b90847bf9159164
//https://graphics.stanford.edu/~seander/bithacks.html