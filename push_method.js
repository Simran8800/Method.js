
a=[1,2,3,4,4,5,5,6]
b=[]
c=[]
d=[]
for(var i=0; i<a.length;i++){
    if(!b.includes(a[i])){
        b.push(a[i])
    }
    else{
        d.push(a[i])
        
    }
}
console.log(b);
console.log(c);
console.log(d);
