var arrayOfCelsiusValues = [-2,34,56,-10];

var arrayOfFahrenheitValues = arrayOfCelsiusValues.map(function(value){
	
    //add your code here and return the new value
    if (value >=-10){
        return (value * 1.8) + 32;
    }
	
});

console.log(arrayOfFahrenheitValues);