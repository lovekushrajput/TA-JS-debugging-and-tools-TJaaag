function fullName(firstName,lastName){
    return `${firstName} ${lastName}` 
}
let result = fullName  ( "Arya","Stark")
let expected = "Arya Stark"

if(result !== expected){
    throw new Error(`${result} is not eqaul to ${expected}`)
}
// 1st test fail message-  Uncaught Error: Arya Stark is not eqaul to AryaStarkat <anonymous>:8:11
// 2nd test is pass and Output is undefined

 







function totalAmount(amount,taxRate){
    return amount + (amount * taxRate)
}
let result = totalAmount(20000,10)
let expected = 220000
if(result !== expected){
    throw new Error(`${result} is not eqaul to ${expected}`)
};
//1st test fail message- Uncaught Error: 220000 is not eqaul to 210000at <anonymous>:7:11
// 2nd test is pass and Output is undefined