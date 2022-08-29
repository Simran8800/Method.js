const pro1=new Promise((resolve, reject)=>{
    setTimeout(() =>{
         let roll_no=[1,2,3,4,5,5,6];
         resolve(roll_no);
    },2000);
});
pro1.then((rollno)=>{
    console.log(rollno);
});
