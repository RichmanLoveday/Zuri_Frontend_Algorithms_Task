function convertFahrToCelsius(fahr) {
    //This Section convert a string to number and aswell accepts numbers and perform the arithmetic operations
    if(Number(fahr) || fahr === 0 || fahr === "0") {
        var calculate = (fahr - 32) / 1.8;
        var round = calculate.toFixed(4);
        console.log(round);
    }
    // else if(isNaN(fahr)) {
    //     console.log(fahr+" " +"is not a valid number, but an "+ typeof(fahr))
    // }

    //This section check for instances of value of fahr if an array and display's it
    if(fahr instanceof Array) {
        console.log(fahr, `is not a valid number, but an  Array`)
    
    //This section check for instances of value of fahr if an object and display's it
    }else if (fahr instanceof Object){
        console.log(fahr,'is not a valid number, but an  Object')
    }
}

//Section to test Array if worrking
/*
cars = [1, "Volvo", "BMW"]
convertFahrToCelsius(cars);*/

//Calling the function, so put in a parameter to test
convertFahrToCelsius()


function checkYuGiOh(n) {
    let array = [];
    //check if input is valid
    if (Number(n)) {

        //stores numbers from 1 to n in array
        for (let i = 0; i < n; i++) {
            array[i] = i + 1;
        }

        //checks and evaluate whether a number is a factor of 2, 3 or 5
        for (let j = 0; j < array.length; j++) {

            var replaceString = "";
            //checks if number is divisible by 2
            if ((array[j] % 2) === 0) {
                if (replaceString.length < 1) {
                    replaceString += "yu";
                } else {
                    replaceString += "-yu";
                }
            }

            //checks if number is divisible by 3
            if ((array[j] % 3) === 0) {
                if (replaceString.length < 1) {
                    replaceString += "gi";
                } else {
                    replaceString += "-gi";
                }
            }

            //checks if number is divisible by 5
            if ((array[j] % 5) === 0) {
                if (replaceString.length < 1) {
                    replaceString += "oh";
                } else {
                    replaceString += "-oh";
                }
            }

            //replace the number after all check has been done
            if (replaceString.length > 1) {
                array[j] = replaceString;
            }
        }
    } else {
        //displays invalid inputs
        return `invalid parameter: "${n}"`
    }

    //returns array after processing
    return array;
}

console.log(checkYuGiOh())