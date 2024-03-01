var age = prompt("Enter your age");
var height = prompt("Please enter your height in meters (X.YY)");
var weight = prompt("Enter your weight in kilos");

var bodyWeightIndex = weight / (height * height);
var groupNumber;

if(age >= 18 && age <= 25){
    groupNumber = 1;
} else if(age >= 25 && age <= 46){
    groupNumber = 2;
} else {
    groupNumber = 3;
}

if(groupNumber === 1 && bodyWeightIndex < 17.5) {
    alert("Weight is insufficient, dangerous to health");
} else if(groupNumber === 1 && bodyWeightIndex >= 17.5 && bodyWeightIndex < 19.5){
    alert("Weight slightly reduced, not dangerous to health");
} else if(groupNumber === 1 && bodyWeightIndex >= 19.5 && bodyWeightIndex < 23){
    alert("Weight is normal");
} else if(groupNumber === 1 && bodyWeightIndex >= 23 && bodyWeightIndex < 27.5){
    alert("Excessive weight");
} else if(groupNumber === 1 && bodyWeightIndex >= 27.5 && bodyWeightIndex < 30){
    alert("Obesity of the 1st degree");   
} else if(groupNumber === 1 && bodyWeightIndex >= 30 && bodyWeightIndex < 35){
    alert("Grade 2 obesity");   
} else if(groupNumber === 1 && bodyWeightIndex >= 35 && bodyWeightIndex < 40){
        alert("Grade 3 obesity");
} else if(groupNumber === 1 && bodyWeightIndex >= 40){
    alert("Grade 4 obesity");
} else if(groupNumber === 2 && bodyWeightIndex < 18) {
    alert("Weight is insufficient, dangerous to health");
} else if(groupNumber === 2 && bodyWeightIndex >= 18 && bodyWeightIndex < 20){
    alert("Weight slightly reduced, not dangerous to health");
} else if(groupNumber === 2 && bodyWeightIndex >= 20 && bodyWeightIndex < 26){
    alert("Weight is normal");
} else if(groupNumber === 2 && bodyWeightIndex >= 26 && bodyWeightIndex < 28){
    alert("Excessive weight");
} else if(groupNumber === 2 && bodyWeightIndex >= 28 && bodyWeightIndex < 31){
    alert("Obesity of the 1st degree");   
} else if(groupNumber === 2 && bodyWeightIndex >= 31 && bodyWeightIndex < 36){
    alert("Grade 2 obesity");   
} else if(groupNumber === 2 && bodyWeightIndex >= 36 && bodyWeightIndex < 41){
        alert("Grade 3 obesity");
} else if(groupNumber === 2 && bodyWeightIndex >= 41){
    alert("Grade 4 obesity");
} else if (groupNumber === 3) {
    alert("No data for your age");
}    
              