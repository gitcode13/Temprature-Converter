function convertTemperature() {
    const tempInput = document.getElementById('temperatureInput').value;
    const unitInput = document.getElementById('unitInput').value;
    const resultDiv = document.getElementById('result');

    // Validate if input is a number
    if (isNaN(tempInput) || tempInput === '') {
        resultDiv.innerHTML = 'Please enter a valid number';
        return;
    }

    const temperature = parseFloat(tempInput);
    let result = '';

    if (unitInput === 'Celsius') {
        result = `Fahrenheit: ${(temperature * 9/5) + 32} °F<br>Kelvin: ${temperature + 273.15} K`;
    } else if (unitInput === 'Fahrenheit') {
        result = `Celsius: ${(temperature - 32) * 5/9} °C<br>Kelvin: ${((temperature - 32) * 5/9) + 273.15} K`;
    } else if (unitInput === 'Kelvin') {
        result = `Celsius: ${temperature - 273.15} °C<br>Fahrenheit: ${((temperature - 273.15) * 9/5) + 32} °F`;
    }

    resultDiv.innerHTML = result;
}