const funA=(place)=>{
    setTimeout(function(){
        console.log(`Welcome FunA `);
        funB();
    },2000);
}
const funB =()=>{
    console.log(`Welcome funB`);
}
funA();