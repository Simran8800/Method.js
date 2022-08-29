const fs=require('fs');
// fs.mkdirSync("CURD_Operation")
// fs.writeFileSync("CURD_Operation/bio.txt","i am simran")
const data=fs.readFileSync("CURD_Operation/bio.txt","utf8")
console.log(data);