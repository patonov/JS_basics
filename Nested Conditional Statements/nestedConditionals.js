function dayOfWeek(num) {
    
    let number = Number(num);
  switch (number) {
    case 1:
        console.log("Monday"); break;
    case 2:
        console.log("Tuesday"); break;
    case 3:
        console.log("Wednesday"); break;
    case 4:
        console.log("Thirsday"); break;
    case 5:
        console.log("Friday"); break;
    case 6:
        console.log("Saturday"); break;
    case 7:
        console.log("Sunday"); break;
    default:
        console.log("Error!"); break;
    }

}

dayOfWeek(3);

dayOfWeek(6);

dayOfWeek(9);

function businessDay(day) {
    
    let str = day;
  switch (str) {
    case "Monday":
    case "Tuesday":
    case "Wednesday":
    case "Thirsday":
    case "Friday":
        console.log("This day is a business day!"); break;
    case "Saturday":
    case "Sunday":
        console.log("This day is weekend!"); break;
    default:
        console.log("Duhai!"); break;
    }
}
businessDay("Monday");

businessDay("January");

function nestedGenderChecker(gender, age) {
    
    if (gender == "f") {
        if (age >= 16) {
            console.log("Ms.");
        }
        else {
            console.log("Miss");
        }
    } 
    else if (gender == "m") {
        if (age >= 16) {
            console.log("Master");
        }
        else {
            console.log("Mr.");
        }
    } 
    else {
        console.log("gazar be, maina!");
    }
}

nestedGenderChecker("f", 19);
nestedGenderChecker("f", 11);
nestedGenderChecker("m", 19);
nestedGenderChecker("m", 11);
nestedGenderChecker("g", 35);