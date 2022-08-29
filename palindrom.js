var n=require("readline-sync")
var A=n.question("enter the no:-")

var len = A.length;
var mid = Math.floor(len/2);

for ( var i = 0; i < mid; i++ ) {
    if (A[i] !== A[len - 1 - i]) {
        console.log(0);
    }
}
console.log(1);
