//map method

let arr2=[10,20,30]

let c=arr2.map((value,index)=>{
  
  return value+index;
})

console.log(c);

//reduce method

let arr1=[10,20,30]

let b=arr1.reduce((num1,num2)=>
 {
  
  return num1-num2
})

console.log(b);

//filter method
let arr =[10,20,30,40]

let a=arr.filter((value)=>
 {
     return value<30 ;           
                 
 })
console.log(a);

//forEach function

let fruits=["apple","mango","banana"]

fruits.forEach(function(value,index){

console.log(index+":"+" "+ value)
})

//example2

let num=[10,20,30]

num.forEach(function(value,index,array){
  console.log(value,index,array)
})


