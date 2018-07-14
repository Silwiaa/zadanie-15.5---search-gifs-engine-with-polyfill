// EXC 1
const a = 'Hello',
      b = 'World',
      greeting = `${a} ${b}`;

    console.log(greeting)

// EXC 2
const multiply = (a, b = 1) => a * b;

console.log(multiply(2, 5));
console.log(multiply(6, 6));
console.log(multiply(5));

// EXC 3 I exc 4
const grades = [1, 5, 5, 5, 4, 3, 3, 2, 1],
      average = (...parameters) => {
    console.log(parameters);
    let sum = 0;
    
    for (let i = 0; i < parameters.length; i++) {
        sum += parameters[i];
    }
    return sum / parameters.length;
}

console.log(average(1));
console.log(average(1, 3));
console.log(average(1, 3, 6, 6));
console.log(average(...grades));

// EXC 5

const data = [1, 4, 'Iwona', false, 'Nowak'],
      [ , ,firstname, ,lastname] = data;

console.log(firstname + ' ' + lastname);

