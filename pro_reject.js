const pro1=new Promise((resolve, reject)=>{
    setTimeout(() =>{
         let roll_no=[1,2,3,4,5,5,6];
         reject("Error while communicating")
    },2000);
});
pro1.catch((Error)=>{
    console.log(Error);
})

