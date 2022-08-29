const age=[2,1,4,6,5,6,4,8]
b=[]
for (let i=0;i<age.length;i++){
    let count=1
    for(let j=0;j<age.length;j++){
        if(age[i]==age[j]&& i!=j){
            count++

        }
    }
    if(count<2){
        if(!b.includes(age[i])){
            b.push(age[i])
        }
    }
}
console.log(b);