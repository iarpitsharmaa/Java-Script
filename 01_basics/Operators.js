let a=5;
let b=2;
let d=7;
let c="5";
console.log(a+b);
console.log(a-b);
console.log(a*b);
console.log(a/b);
console.log(a%b);
console.log(a**b);
console.log(a++);
console.log(++a);
console.log(a==b);    //ye khali values ko compare krta h
console.log(a!=b);
console.log(a===c);  // === datatype ko bhi sath sath compare krta h value k
console.log(a===d);  // === datatype ko bhi sath sath compare krta h value k

//COnditional Statement

let age=17;
if(age>18){
    console.log("you can vote");
}
else if(age==18){
    console.log("you can vote after turning 19");
    
}
else{
    console.log("You are minor")
   
}


//--Ternary Operator
age >=18 ? console.log( "adult") : console.log("not adult");


//Practice

// let no=prompt("Enter a number");
// if(no%5==0){
//     console.log("Divisible");
// }
// else{
//     console.log("not divisble");
    
// }

const heros=["arpit","ram"];
console.log(typeof heros);
const myobj={
nameee:"Arpit",
neo:23
};
console.log(myobj);




