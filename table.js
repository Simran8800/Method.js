var a= require("readline-sync");
var n=a.questionInt("Enter the no:-")
var b=a.questionInt("enter the no :-")
var i=1

while(i<=10){
    var j=n
    var str=" "
    while(j<=b){
        str=str+j*i+"\t"
        j++
    }
    i++
    console.log(str)
}


