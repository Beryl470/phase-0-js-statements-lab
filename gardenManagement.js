const temperature = 90;
const timeOfDay = "morning";
 
//watering control
if (temperature>=80){
console.log("watering on")
} else { 
    console.log("watering off")
}

//gardening control
if (timeOfDay==="evening" || timeOfDay==="night"){
    console.log("lights on")
} else {
    console.log('lights off')
}

//adjustment
let soilMoisture = 0; 

while (soilMoisture < 40) {
    console.log(soilMoisture);
    soilMoisture += 5;
}

console.log(soilMoisture); 
