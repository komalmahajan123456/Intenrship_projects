function convertTemperature() {
    const temperature = parseFloat(document.getElementById('temperatureInput').value);
    const unit = document.querySelector('input[name="unit"]:checked').value;

    if (isNaN(temperature)) {
        document.getElementById('result').innerText = "Please enter a valid number";
        return;
    }

    let convertedTemp;
    let resultText;

    if (unit === 'celsius') {
        // Celsius to Fahrenheit
        convertedTemp = (temperature * 9/5) + 32;
        resultText = `${temperature}°C is equal to ${convertedTemp.toFixed(2)}°F`;
    } else if (unit === 'fahrenheit') {
        // Fahrenheit to Celsius
        convertedTemp = (temperature - 32) * 5/9;
        resultText = `${temperature}°F is equal to ${convertedTemp.toFixed(2)}°C`;
    }

    document.getElementById('result').innerText = resultText;
}
