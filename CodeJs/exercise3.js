let limit=4
let numbers=[1,2,5,7,8,9]
let exp =[]
for (let i = 0; i < numbers.length; i++) {
 if(numbers[i]>limit){
    exp.push(numbers[i])
 }  
}
console.log(exp);