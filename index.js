let unit = document.querySelector ('#unit');
let form = document.querySelector ('#form');
let result = document.querySelector ('#result');
let result2 = document.querySelector ('#result2');

form.addEventListener ('submit', (e) => {
    e.preventDefault();
    const input = document.querySelector ('#input').value;
    unit = unit.options[unit.selectedIndex].value;
    
    if (input === '' || isNaN(input)){
        result.innerHTML = '<span>Please enter a valid temperature</span>';
    }

    if (unit === 'celsius')
        celsius(input);
    else if (unit === 'fahrenheit')
        fahrenheit(input);
    else if (unit === 'kelvin')
        kelvin(input);
    else
        result2.innerHTML = '<span>Please select a valid unit</span>';
});

function celsius (input) {
    let cToF = (9/5 * (input)) + 32;
    let cToK = Number(input) + 273.15;
    result.innerHTML = `<span> Temperature in Fahrenheit: <span style="color: red;">${cToF} F</span></span>`;
    result2.innerHTML = `<span> Temperature in Kelvin: <span style="color: red;">${cToK} K</span></span>`;
}

function fahrenheit (input) {
    let fToC = (5/9)*(input-32);
    let fToK = fToC + 273.15;
    result.innerHTML = `<span> Temperature in Celsius: <span style="color: red;">${fToC} C</span></span>`;
    result2.innerHTML = `<span> Temperature in Kelvin: <span style="color: red;">${fToK} K</span></span>`;
}

function kelvin (input) {
    let kToC = input - 273.15;
    let kToF = (9/5 * kToC) + 32;
    result.innerHTML = `<span> Temperature in Celsius: <span style="color: red;">${kToC} C</span></span>`;
    result2.innerHTML = `<span> Temperature in Fahrenheit: <span style="color: red;">${kToF} F</span></span>`;
}