/*1.How to compare two JSON have the same properties without order?
    a. let obj1={name:"Person1",age:5}
    b. let obj2={age:5,name:"Person1"}
*/

let obj1={name:"Person1",age:5};
let obj2={age:5,name:"Person1"};
// console.log(JSON.stringify(obj1)===JSON.stringify(obj2)) //return false, because these objects have same properties with different order
  
var flag=true;
if(Object.keys(obj1).length==Object.keys(obj2).length){
    for(key in obj1) { 
        if(obj1[key] === obj2[key]) {
            continue;
        }
        else {
            flag=false;
            break;
        }
    }
}
else {
    flag=false;
}
console.log("Object are equal: "+flag);