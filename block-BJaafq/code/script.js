function add (num1,num2){
    return num1+num2
    }

    function multiply (num1,num2){
        return num1 * num2
        }
   
    let result,expected;

     //Test framework
    function test(message,callback){
    try{
    callback();
    console.log(`✔️`,message)
    }catch(error){
    console.error(error);
    console.log(`❌`,message)
    }
    }
    
    // assertion library
function except(actual){
    return {
        toadd:function (expected){
            if(actual !==expected){
                throw new Error( `${actual}is not equal to ${expected}`)
            }
        },
        isMultiply: function (expected){
            if( actual !== expected){
                throw new Error (`${ actual}is not equal to ${expected}`)
            }
        }
        
    }


    
}

//testing 5 times add function

// test1 failed
    function testAdd(){
    let  result = add(2,4);
     let expected = 5
    except(result).toadd(expected)
    }
   test("adding 2 and 4",testAdd)

// test2 pass
 test("adding 20 and 4",()=>{
     except(add(20,4)).toadd(24)
 });

//  test3 failed
test("adding 20 and 40",()=>{
    except(add(20,40)).toadd(61)
});

// test 4 pass
test("adding 200 and 40",()=>{
    except(add(200,40)).toadd(240)
});

// test 5 failed
test("adding 20 and 40",()=>{
    except(add(1,40)).toadd(35)
});




/// testing 5 times multiply function 


// test1 passed
function testSayHello(){
    result = multiply(10,2)
    expected = 20
    except(result).isMultiply(expected)
}
test(`multiplicatin 20 and 2`, testSayHello)

// test2 failed
test(`multiplication 1 and 0`,()=>{
    except(multiply(1,0)).isMultiply(1)
})

// test3 passed
test(`multiplication 0 and 0`,()=>{
    except(multiply(0,0)).isMultiply(0)
})

// test4 passed
test(`multiplication 11 and 2`,()=>{
    except(multiply(11,2)).isMultiply(22)
})

// test5 failed
test(`multiplication 20 and 1`,()=>{
    except(multiply(20,1)).isMultiply(22)
})