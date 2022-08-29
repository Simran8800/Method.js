function greet(){
    let name = 'John';
    function displayName() {
 return 'Hi' + ' ' + name;
    }
    return displayName;
}
const g1 = greet();
console.log(g1); // returns the function definition
console.log(g1()); // returns the value
