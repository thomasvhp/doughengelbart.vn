'use strict';

// Calculate the difference between two values (Delta)
function delta(a, b) {
    return a - b;
}

// Calculate the slope of a line given two points (x1, y1) and (x2, y2)
function slope(x1, y1, x2, y2) {
    return delta(y2, y1) / delta(x2, x1);
}

// Calculate the average of two numbers
function average(n1, n2) {
    return (n1 + n2) / 2;
}

// Round to the user's specified number of decimals
function round_user(value) {
    let decimals = Number(document.getElementById("rounding").value);
    return Math.round(value * 10 ** decimals) / 10 ** decimals;
}

// Calculate the length (distance) between two points (x1, y1) and (x2, y2)
function length(x1, y1, x2, y2) {
    let dx = delta(x2, x1);
    let dy = delta(y2, y1);
    return Math.sqrt(dx ** 2 + dy ** 2);
}

// Calculate the volume of a rectangular prism
function rect_prism_volume() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let volume = length * width * height;
    document.getElementById("result").innerText = `Rectangular Prism Volume: ${round_user(volume)}`;
}

// Calculate the surface area of a rectangular prism
function rect_prism_area() {
    let length = Number(document.getElementById("length").value);
    let width = Number(document.getElementById("width").value);
    let height = Number(document.getElementById("height").value);
    let area = 2 * (length * width + width * height + height * length);
    document.getElementById("result").innerText = `Rectangular Prism Area: ${round_user(area)}`;
}

// Calculate the volume of a sphere
function sphere_volume() {
    let radius = Number(document.getElementById("radius").value);
    let volume = (4 / 3) * Math.PI * radius ** 3;
    document.getElementById("result").innerText = `Sphere Volume: ${round_user(volume)}`;
}

// Calculate the surface area of a sphere
function sphere_area() {
    let radius = Number(document.getElementById("radius").value);
    let area = 4 * Math.PI * radius ** 2;
    document.getElementById("result").innerText = `Sphere Area: ${round_user(area)}`;
}

// Calculate the slope using points (x1, y1) and (x2, y2)
function calculate_slope() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let result = slope(x1, y1, x2, y2);
    document.getElementById("result").innerText = `Slope: ${round_user(result)}`;
}

// Calculate the distance between points (x1, y1) and (x2, y2)
function calculate_length() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let result = length(x1, y1, x2, y2);
    document.getElementById("result").innerText = `Length: ${round_user(result)}`;
}

// Calculate the midpoint between points (x1, y1) and (x2, y2)
function midpoint() {
    let x1 = Number(document.getElementById("x1").value);
    let y1 = Number(document.getElementById("y1").value);
    let x2 = Number(document.getElementById("x2").value);
    let y2 = Number(document.getElementById("y2").value);
    let mx = average(x1, x2);
    let my = average(y1, y2);
    document.getElementById("result").innerText = `Midpoint: (${round_user(mx)}, ${round_user(my)})`;
}