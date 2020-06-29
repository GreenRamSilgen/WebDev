function add (num1, num2) {
	return num1 + num2;
}

function subtract (num1, num2) {
	return num1 - num2;
}

function sum (inArr) {
	if(inArr.length == 0) return 0;
	if(inArr.length == 1) return inArr[0];
	return inArr.reduce((totaler, element)=> totaler + element);
}

function multiply (inArr) {
	if(inArr.length == 0) return 0;
	if(inArr.length == 1) return inArr[0];
	return inArr.reduce((totaler, element)=> totaler * element);
}

function power(val, power) {
	return val ** power;
}

function factorial(n) {
	if(n == 0) return 1;
	return n * factorial(n-1);
}

module.exports = {
	add,
	subtract,
	sum,
	multiply,
    power,
	factorial
}