
// Convert Temperature

function convertTemperature() {

    const tempInput = document.getElementById("temp");

    const unit = document.getElementById("fromUnit").value;

    const error = document.getElementById("error");

    const celsius = document.getElementById("celsius");

    const fahrenheit = document.getElementById("fahrenheit");

    const kelvin = document.getElementById("kelvin");

    // Clear previous error

    error.textContent = "";

    // Read input value

    const temperature = parseFloat(tempInput.value);

    // Validate input

    if (tempInput.value.trim() === "" || isNaN(temperature)) {

        error.textContent = "Please enter a valid numeric temperature.";

        celsius.textContent = "Celsius : --";

        fahrenheit.textContent = "Fahrenheit : --";

        kelvin.textContent = "Kelvin : --";

        return;
    }

    // Absolute Zero Validation

    if (
        (unit === "C" && temperature < -273.15) ||
        (unit === "F" && temperature < -459.67) ||
        (unit === "K" && temperature < 0)
    ) {

        error.textContent =
            "Temperature cannot be below absolute zero.";

        celsius.textContent = "Celsius : --";

        fahrenheit.textContent = "Fahrenheit : --";

        kelvin.textContent = "Kelvin : --";

        return;
    }

    let c;

    // Convert to Celsius first

    switch (unit) {

        case "C":

            c = temperature;

            break;

        case "F":

            c = (temperature - 32) * 5 / 9;

            break;

        case "K":

            c = temperature - 273.15;

            break;

    }

    // Convert to all units

    const f = (c * 9 / 5) + 32;

    const k = c + 273.15;

    // Display Results

    celsius.textContent =
        "Celsius : " + c.toFixed(2) + " °C";

    fahrenheit.textContent =
        "Fahrenheit : " + f.toFixed(2) + " °F";

    kelvin.textContent =
        "Kelvin : " + k.toFixed(2) + " K";

}


// Reset Function

function resetFields() {

    document.getElementById("temp").value = "";

    document.getElementById("fromUnit").selectedIndex = 0;

    document.getElementById("error").textContent = "";

    document.getElementById("celsius").textContent =
        "Celsius : --";

    document.getElementById("fahrenheit").textContent =
        "Fahrenheit : --";

    document.getElementById("kelvin").textContent =
        "Kelvin : --";

}