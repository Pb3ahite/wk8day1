// Exercise 1 

let a = 118;         // number

let b = 'Thieves';   // string

let c = [true, false, false];  // boolean[]

let d = {age: number};   //  should be { age: number }

let e = [3];           // number[]

let f;                 // f can represent anything

let g = [];             // anything inside []


// Exercise 2 

let song: {
    title: string,
    releaseYear: number,
} = {
    title: 'Lose Yourself'
};
// No errors

let prices = [100, 200, 300];
prices[0] = '$100';
//  string not a 'number'

function myFunc(a: number, b: number): number {}
// function needs a return statement 
