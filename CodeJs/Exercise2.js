let limit= [3,-5,4,-10,20,42]
let musbet= 0
let menfi= 0
for(let i=0 ;i<limit.length ; i++){
if(limit[i]>=0){
    musbet+=limit[i]
   
}
else if(limit[i]<0){
    menfi+=limit[i]
   
}

}
console.log(musbet);
console.log(menfi);
