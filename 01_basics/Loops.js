let sum=0
for(let i=1;i<=5;i++){
    sum+=i
}
console.log(sum);

let i=1
let s=0
while(i<=5){
   s+=i
   i++ 
}
console.log(s);


//for of loop
//for string
let str='Arpit Sharma';
for(let i of str){
    console.log(i);
    
}


//for in loop
//for objects and arrays

let student={
    name:"arpit",
    age:20,
    cgpa:23
}

for(let key in student){
    console.log(key,student[key]);
    
}


//practice

for(let i=0;i<=100;i++){
    if(i%2==0){ 
        console.log(i)
    }
}

//Game
 
let gameNumber=25;

let userNum=prompt("Enter number: ")
console.log(userNum);
while(userNum != gameNumber){
    console.log("you entered the wrong no");
    userNum=prompt("Enter number again")
    
}
console.log("Congratulations you won");
