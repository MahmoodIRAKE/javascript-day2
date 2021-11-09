function pass1(password) {
    if (password.length <= 7) {
        return 'Weak';
    } else {
        return 'Strong'
    }
}

function pass2(password) {
    return (password.length <= 7) ? 'Weak' : 'Strong';
}

function pass3(password) {

}

function pass4(password) {
    let res1 = '';
    let res = (password.length <= 7) ? 'Weak' : 'Strong';
    for (let index = 0; index < password.length; index++) {
        res1 = (password[index] <= 'Z' && password[index] >= 'A') ? 'Very Strong' : '';
        if (res1 !== '') {
            break;
        }
    }
    return (res1 === '') ? res : res1;

}
console.log(pass4('mahMood Irake'));
console.log(pass4('mahmood irake'));