

function outer(){
    const a = "A: This is a Outer string."; // 1. Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. 
    const b = {name: "B: This is an Outer object."}; // 1. Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. 
    console.log ("Step 2: ", a,b);     // 2. Log their values immediately.

    function inner(a,b) {     // 4. Pass a and b in as arguments when you execute inner().
        console.log("Step 3: ", a,b); // 3. Log the values of a and b in the inner function.
        a = "A: This is a NEW inner string."; // 5. Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b). [no var, let, const so that it is global]
        b = {name: "B: This is a NEW inner object."} // 5. Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b). [no var, let, const so that it is global]
        b.name = "B. Step 6 Instructions on updating you"; //  6. Inside the inner function, update a property of the b object.
    }

    inner(a,b); // 5. Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
    console.log(a,b); // 5. Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
}
  outer();





//  1. Declare two variables, a and b in the outer function's scope and set them to a string and an object respectively. Log their values immediately.
//  2. Log the values of a and b in the inner function.
//  3. Update the inner function to take two parameters named a and b.
//  4. Pass a and b in as arguments when you execute inner().
//  5. Inside the inner function, assign new values to a and b and log them at the end of the function AND after the execution of inner(a,b).
//  6. Inside the inner function, update a property of the b object.






// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures
// https://www.tutorialsteacher.com/javascript/closure-in-javascript
// 
