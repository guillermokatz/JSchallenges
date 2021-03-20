function sumIntervals(intervalsArray) {

    // Conditional validation of arguments

    // Arguments must be arrays
    if (!Array.isArray(intervalsArray)) {

        console.error("Please pass valid arrays as arguments.")

        // Arguments must be arrays with numbers and an incresing interval
    } else if (!arrayOfArraysValidation(intervalsArray)) {

        console.error("Please pass arrays with 2 positive numbers as values and with an increasing interval e.g. [[1,5],[4,10]]");

        // Arguments are correct
    } else {

        let totalIntervals = 0;

        // Loop through the intervals array
        for (let i = 0; i < intervalsArray.length; i++) {
            let arrayEndValue;
            let arrayStartValue;

            // If array only contains 1 interval
            if (Number.isInteger(intervalsArray[0])) {
                arrayEndValue = intervalsArray[1];
                arrayStartValue = intervalsArray[0];
                console.log(arrayEndValue - arrayStartValue)
                break;

                // If there is more than 1 interval array in the array
            } else {

                // Transform the array with all the values in between
                arrayStartValue = intervalsArray[i][0];
                arrayEndValue = intervalsArray[i][1];
                intervalsArray[i] = [];

                for (let i2 = 0; i2 <= arrayEndValue - arrayStartValue; i2++) {
                    intervalsArray[i].push(arrayStartValue + i2);
                }

            }
        }

        // Loop through all the arrays again and compare values. If values are repeated arrays are merged and the array that was merged is deleted
        if (!Number.isInteger(intervalsArray[0])) {
            for (let i = 0; i < intervalsArray.length; i++) {

                for (let i3 = 0; i3 <= intervalsArray.length; i3++) {

                    if (intervalsArray[i] != undefined && intervalsArray[i3] != undefined && intervalsArray[i] != intervalsArray[i3]) {

                        // If the same value is found merge arrays, delete the latter, sort the array and delete duplicates
                        let compare = intervalsArray[i].some(value => intervalsArray[i3].includes(value));

                        if (compare) {
                            intervalsArray[i] = [...intervalsArray[i], ...intervalsArray[i3]]
                            let indexDelete = intervalsArray.indexOf(intervalsArray[i3]);
                            delete intervalsArray[indexDelete]
                            intervalsArray[i] = intervalsArray[i].sort((a, b) => a - b);
                            intervalsArray[i] = [...new Set(intervalsArray[i])]

                        }
                    }
                }

            }
        }

        // Sum the intervals in each interval array after process
        if (!Number.isInteger(intervalsArray[0])) {
            intervalsArray.forEach(arrayLast => {
                totalIntervals = totalIntervals + (arrayLast[(arrayLast.length - 1)] - arrayLast[0])
            });
            console.log(totalIntervals);
        }

    }

    // Array validation function. Checks each array passed for type and increasing intervals
    function arrayOfArraysValidation(arrayToValidate) {
        let valid;

        for (let i = 0; i < arrayToValidate.length; i++) {

            if (Array.isArray(arrayToValidate[i]) && (arrayToValidate[i].length == 2) && Number.isInteger(arrayToValidate[i][0]) && Number.isInteger(arrayToValidate[i][1]) && (arrayToValidate[i][0] < arrayToValidate[i][1])) {
                valid = true
            } else if ((arrayToValidate.length == 2) && Number.isInteger(arrayToValidate[0]) && Number.isInteger(arrayToValidate[1]) && (arrayToValidate[0] < arrayToValidate[1])) {
                valid = true;
            } else {
                valid = false;
                break;
            }

        };

        return (valid)
    }

}

// TESTS
sumIntervals([])
sumIntervals([[1, 3], [7, 10], [2, 5]]);
sumIntervals([[1, 2], [6, 10], [11, 17]]);
sumIntervals([1, 3])
sumIntervals([13, 14])

