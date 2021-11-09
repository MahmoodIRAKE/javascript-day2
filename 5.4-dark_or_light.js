const lights = ['yellow', 'pink', 'orange'];
const dark = ['blue', 'purple', 'brown'];

function func(color) {
    let check = true
    switch (check) {
        case (lights.includes(color.toLowerCase())):
            return 'Light Color';
        case (dark.includes(color.toLowerCase())):
            return "dark Color";

        default:
            return 'Unkown Color';
    }
}
console.log(func('yellow'));
console.log(func('Purple'));
console.log(func('Pink'));
console.log(func('yellodasfw'));