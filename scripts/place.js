document.addEventListener('DOMContentLoaded', function() {
    const calculateWindChill = function(temperature, windSpeed) {
        let windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
        return windChill.toFixed(2); // Returning the wind chill rounded to 2 decimal places
    };

    const temperature = parseFloat(document.querySelector("#temp-value").textContent);
    const wind_speed = parseFloat(document.querySelector("#wind-value").textContent);
    const wind_chill = document.querySelector("#chill-value");

    if (temperature <= 10 && wind_speed > 4.8) {
        wind_chill.textContent = calculateWindChill(temperature, wind_speed);
    } else {
        wind_chill.textContent = "N/A";
    }
});

