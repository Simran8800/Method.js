let c1={"a":2,"b":4}
let c2={"a":3,"b":5}
function myfun(){
    console.log(this.a+','+this.b);
}
let s=myfun.bind(c1)
let x=myfun.bind(c2)
s()
x()



