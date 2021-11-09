const populsations = [1400, 1500, 1600, 1700];





function populationPercentages(arr) {
    let percentages = [];
    for (let index = 0; index < arr.length; index++) {
        percentages.push(percentageOfWorld1(arr[index]));

    }
    return percentages;
}

console.log(populationPercentages(populsations));