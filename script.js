var age = prompt("Enter your age");
var height = prompt("Please enter your height in meters (X.YY)");
var weight = prompt("Enter your weight in kilos");

var bodyWeightIndex = weight / (height * height);
var groupNumber;
console.log('"Whatever"')
if(age >= 18 && age <= 25)
    {
        if( bodyWeightIndex < 17.5){
            alert("Weight is insufficient, dangerous to health");
        } else if( bodyWeightIndex >= 17.5 && bodyWeightIndex < 19.5){
            alert("Weight slightly reduced, not dangerous to health");
        } else if( bodyWeightIndex >= 19.5 && bodyWeightIndex < 23){
            alert("Weight is normal");
        } else if( bodyWeightIndex >= 23 && bodyWeightIndex < 27.5){
            alert("Excessive weight");
        } else if( bodyWeightIndex >= 27.5 && bodyWeightIndex < 30){
            alert("Obesity of the 1st degree");   
        } else if( bodyWeightIndex >= 30 && bodyWeightIndex < 35){
            alert("Grade 2 obesity");   
        } else if( bodyWeightIndex >= 35 && bodyWeightIndex < 40){
                alert("Grade 3 obesity");
        } else if( bodyWeightIndex >= 40){
            alert("Grade 4 obesity");
        }
} else if(age >= 25 && age <= 46){
    if( bodyWeightIndex < 18) {
        alert("Weight is insufficient, dangerous to health");
    } else if( bodyWeightIndex >= 18 && bodyWeightIndex < 20){
        alert("Weight slightly reduced, not dangerous to health");
    } else if( bodyWeightIndex >= 20 && bodyWeightIndex < 26){
        alert("Weight is normal");
    } else if( bodyWeightIndex >= 26 && bodyWeightIndex < 28){
        alert("Excessive weight");
    } else if( bodyWeightIndex >= 28 && bodyWeightIndex < 31){
        alert("Obesity of the 1st degree");   
    } else if( bodyWeightIndex >= 31 && bodyWeightIndex < 36){
        alert("Grade 2 obesity");   
    } else if( bodyWeightIndex >= 36 && bodyWeightIndex < 41){
            alert("Grade 3 obesity");
    } else if( bodyWeightIndex >= 41){
        alert("Grade 4 obesity");
    };
} else {
    alert("No data for your age");
}

              