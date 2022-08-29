const preOne=(friend,callfrnd)=>{
    console.log(`I am busy riht now.I am talking to ${friend}.I will call you back`);
    callfrnd()
}
const perTwo =()=>{
    console.log(`hy what's up . I call back ypu dekha`);
}
preOne("simi",perTwo)