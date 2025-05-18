// function creation
function add(arg1, arg2, arg3) {
    return arg1 + arg2 + arg3;
}

// call the function
//console.log(add(30, 45, 10));

// closures
// closures a functions that a defined in other functions
// and they have access to the variables that where created inside the 
// parent function

// outter function
function outer() {
    let count = 0;

    // inner function
    return function () {
        count++;
        console.log(count);
    }
}

let call = outer();


// callbacks
// My callback function
function callback(age) {
    console.log('CALLBACK CALLED!!!')
    console.log(`${age} is an appropriate age for this experience!!!`);
}

function failure(age) {
    console.log('CALLBACK CALLED!!!')
    console.log(`${age} is not an appropriate age for this experience!!!`);
}

function checkAge(age, func, failure) {
    if (age >= 18) {
        // use the callback function
        func(age);
    } else {
        failure(age);
    }
}

// CALLING THE FUNCTION
checkAge(12, callback, failure);


