// 1st test fail
function fullName(firstName,lastName){
    return `${firstName} ${lastName}` 
}
let result = fullName  ( "Arya","Stark")
let expected = "AryaStark"

if(result !== expected){
    throw new Error(`${result} is not eqaul to ${expected}`)
}

// 2nd test pass

function fullName (firstName,lastName){
    return `${firstName} ${lastName}` 
}
let result = fullName ( "Arya","Stark")
let expected = "Arya Stark"

if(result !== expected){
    throw new Error(`${result} is not eqaul to ${expected}`)
}






// fail test
function totalAmount(amount,taxRate){
    return amount + (amount * taxRate)
}
let result = totalAmount(20000,10)
let expected = 210000
if(result !== expected){
    throw new Error(`${result} is not eqaul to ${expected}`)
};

// pass test 
function totalAmount(amount,taxRate){
    return amount + (amount * taxRate)
}
let result = totalAmount(20000,10)
let expected = 220000
if(result !== expected){
    throw new Error(`${result} is not eqaul to ${expected}`)
};