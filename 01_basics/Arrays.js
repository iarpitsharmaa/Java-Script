let marks=[87,34,56,76,77]
console.log(marks.length);
console.log(marks[0]);     
marks[0]=66
console.log(marks[0]);
for(let i=0;i<marks.length;i++){
    console.log(marks[i]);
    
}
for(let i of marks){
    console.log(i);
    
}



//PRactice 

let arr=[85,97,44,37,76,60]
let av=arr.length
let sum=0
for(let el of arr){
    sum+=el
}
let avg=sum/av
console.log(avg);

2
let arrr=[250,645,300,900,50]
for(let i=0;i<arrr.length;i++){
    let val=((10/100)*arrr[i])
    arrr[i]=arrr[i]-val
    console.log(arrr[i]);
}

//3
let companies=["Bloomberg","Microsoft","uber","Google","IBM","Netflix"]
console.log(companies.shift());
console.log(companies)
companies.push("amazon")
console.log(companies)
companies.splice(2,1,"Ola")
console.log(companies)

