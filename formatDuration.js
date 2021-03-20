function formatDuration(secondsInt) {
    let secs = secondsInt;
    let mins = 0;
    let hrs = 0;
    let days = 0;
    let yrs = 0;
    let result = "";

    switch (true) {
        // Argument validations, can't be empty, has to be positive number and integer 
        case (""):
        case (secondsInt < 0):
        case (!Number.isInteger(secondsInt)):
            result = "Please enter a positive number";
            break;
        case (secondsInt == 0):
            result = "now";
            break;
        default:
            if (secs >= 60) {
                mins = Math.round(secs / 60);
                secs = secs % 60;
            }
            if (mins >= 60) {
                hrs = Math.round(mins / 60);
                mins = mins % 60;
            }
            if (hrs >= 24) {
                days = Math.round(hrs / 24);
                hrs = hrs % 24;
            }
            if (days >= 365) {
                yrs = Math.round(days / 365);
                days = days % 365;
            }


            if (yrs == 1) {
                yrs = yrs + " year,";
            } else if (yrs > 0) {
                yrs = yrs + " years,";
            } else {
                yrs = "";
            }

            if (days == 1) {
                days = " " + days + " day,";
            } else if (days > 0) {
                days = " " + days + " days,";
            } else {
                days = "";
            }

            if (hrs == 1) {
                hrs = " " + hrs + " hour,";
            } else if (hrs > 0) {
                hrs = " " + hrs + " hours,";
            } else {
                hrs = "";
            }

            if (mins == 1) {
                mins = " " + mins + " minute,";
            } else if (mins > 0) {
                mins = " " + mins + " minutes,";
            } else {
                mins = "";
            }

            if (secs == 1) {
                secs = " " + secs + " second";
            } else if (secs > 0) {
                secs = " " + secs + " seconds";
            } else {
                secs = "";
            }

            result = yrs + days + hrs + mins + secs;

            // Check if there is a comma at the end of the result string and splice it
            result.slice(-1) == "," ? result = result.slice(0, -1) : "";

            // Trim white spaces of result string
            result = result.trim();

            // Replace the last comma if present with the word 'and'
            if (result.lastIndexOf(",") != -1) {
                let indexOfLastComma = result.lastIndexOf(",");
                result = result.split('');
                result[indexOfLastComma] = " and";
                result = result.join('');
            }

    }

    // Returns result of validation or process
    console.log(result);

}


// TESTS
formatDuration(222221041)
formatDuration(22221011)
formatDuration(1041)
formatDuration(41)
formatDuration("")
formatDuration(-2)
formatDuration(31536001)
formatDuration(64)
formatDuration(0)