function calculateAge(age) {
    return new Promise((resolve, reject) => {
        if (age < 18) {
            reject(new Error("Age less than 18"));
        } else {
            resolve("User is of age")
        }
    });
}

async function callMe() {
    // calculateAge(90)
    // .then((data) => console.log(data))
    // .catch((error) => {
    //     console.log("THIS IS FROM THE ERROR BLOCK");
    //     console.log(error);
    // })


    try {
        promise();
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/28', {
            method: 'GET' // GET, POST, PUT, DELETE
        });

        const data = await response.json();
        console.log(data);
    } catch(error) {
        throw error;
    }
    
    
         
}

async function promise() {
    try {
        const isValid = await calculateAge(20);
        console.log('AGE VALIDATION SUCCESSFUL');
        console.log(isValid);
    } catch(error) {
        throw error;
    }
}

