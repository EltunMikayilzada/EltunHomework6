let result=1
let mixed= [2,true ,3,false,5,true,7,false]
for (let i= 1  ;i <= mixed.length  ;  i++ ) {
    for (let j = 1;  j<= mixed.length; j=+2) {
      
    if(mixed[i]==true){
    
    result*=mixed[j]
        }
        
    }   

}
console.log(result)