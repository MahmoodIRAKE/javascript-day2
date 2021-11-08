const worldPopulation = 7900;

function percentageOfWorld1(population) {
    return (population / worldPopulation) * 100;
}

let res1 = percentageOfWorld1(140);
let res2 = percentageOfWorld1(1400);
let res3 = percentageOfWorld1(900);
console.log(res1 + ' ' + res2 + ' ' + res3);

const percentageOfWorld2 = population => (population / worldPopulation) * 100;
res1 = percentageOfWorld2(140);
res2 = percentageOfWorld2(1400);
res3 = percentageOfWorld2(900);
console.log(res1 + ' ' + res2 + ' ' + res3);