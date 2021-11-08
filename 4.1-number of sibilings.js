let numSiblings = prompt('How many siblings do you have?');


if (parseInt(numSiblings) === 1) {
    console.log('1 sibling!');
} else if (parseInt(numSiblings) > 1) {
    console.log('More than 1 sibling');
} else {
    console.log('No siblings');
}


/*taking input from user or client we will get it as string
and we are comparing this string  to number if we but == it will be equal if we but === it wont becuse type is different 
we need to use === becuase we know that the input that will come from the user must be number */