//Instructions

//Define a function named cube that takes one number as a paramter
//and returns that number cubed (times itself three times):

function cube(n){
    return n * n * n;
}



//DON'T CHANGE THINGS BELOW THIS LINE
//But feel free to read them 😊

//Define a function that takes a number and an expected result, calls the cube() function
//and check that the return value matches the expected result.
//If the answer is wrong log an aditional message
function test(n, expectedResult){
    let result = cube(n);
    console.log(`cube(${n}) == ${expectedResult}? ${result == expectedResult}`);
    if ( result != expectedResult ){
        console.log(`Expected ${expectedResult}, but got the incorrect result ${result}`);
    }
}

if (typeof cube !== "function") { 
    //If cube is not a function, complain.
    console.log("Where is the function?");
} else {
    //Otherwise, cube IS a function, so we can test it out
    console.log("Trying out your cube function...");
    test(1, 1);
    test(2, 8);
    test(-5, -125);
    test(10, 1000);
}