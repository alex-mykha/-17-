// Nr1..................
let resaltString = ""

for (let i = 10; i <= 20; i++) {
    resaltString += i + (i !== 20 ? "," : "")
}
console.log(resaltString);

// Nr2....................
for (let i = 10; i <= 20; i++) {
    console.log(i * i);
}

// Nr3.....................
for (let i = 1; i <= 10; i++) {
    console.log(`7 * ${i} = ${7 * i}`);
}

// Nr 4.....................
let sum = 0
for (let i = 1; i <= 15; i++) {
    sum += i
}
console.log(sum);

// Nr 5.....................
let multiTapeSum = 1
for (let i = 15; i <= 35; i++) {
    multiTapeSum *= i
}
console.log(multiTapeSum);

// Nr 6.....................
let sumAwg = 0
for (let i = 0; i <= 500; i++) {
    sumAwg += i

}
let resaltAwg = sumAwg / 500
console.log(resaltAwg)

// Nr 7......................
let eventSum = 0
for (let i = 30; i <= 80; i++) {
    if (i % 2 === 0) [
        eventSum += i
    ]
}
console.log(eventSum);

// Nr 8..........................
for (let i = 100; i <= 200; i++) {
    if (i % 3 === 0) [
        console.log(i)
    ]
}

// Nr9...........................
let nummber = 50
let divisoers = []
for (let i = 1; i <= nummber; i++) {
    if (nummber % i === 0) [
        divisoers.push(i)
    ]
}
console.log(divisoers);

// Nr10...........................
let eventDiversoers = 0
for (let i = 0; i < divisoers.length; i++) {
    if (divisoers[i] % 2 === 0) [
        eventDiversoers++
    ]
}
console.log(eventDiversoers);

//Nr 11.............................
let sumEventDivisoers = 0

for (let i = 0; i < divisoers.length; i++) {
    if (divisoers[i] % 2 === 0) [
        sumEventDivisoers += divisoers[i]
    ]
}
console.log(sumEventDivisoers);

// Nr 12.............................
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        console.log(`${i} * ${j} = ${i * j}`);
    }
    console.log('');
}

// Nr13...............................
let fraczionResalt = ""
for (let i = 20; i <= 30; i += 0.5) {
    fraczionResalt += i + " "
}
console.log(fraczionResalt);

// Nr14...............................
for (let i = 10; i <= 100; i += 10) {
    console.log(`${i}Usd = ${i * 27}Uah`);
}

// Nr15..............................
let N = 50
for (let i = 1; i < 100; i++) {
    if (i * i <= N) [
        console.log(i)]
    else { break }
}

// Nr16................................
let number2 = 29;
let isPrime = true;
if (number2 > 1) {
    for (let i = 2; i <= Math.sqrt(number2); i++) {
        if (number2 % i === 0) {
            isPrime = false;
            break;
        }
    }
} else {
    isPrime = false;
}
console.log(isPrime ? `${number2} є простим числом` : `${number2} не є простим числом`);

// Nr17................................
let number3 = 81;
let isPowerOfThree = false;
let power = 0;
while (3 ** power <= number3) {
    if (3 ** power === number3) {
        isPowerOfThree = true;
        break;
    }
    power++;
}
console.log(isPowerOfThree ? `${number3} можна отримати зведенням 3 у ступінь ${power}` : `${number3} не можна отримати зведенням 3 у ступінь`);