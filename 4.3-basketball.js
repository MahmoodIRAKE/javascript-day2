/*1 */
let avgJohn = (89 + 120 + 103) / 3;
let avgMike = (116 + 94 + 123) / 3;

/*2 */
let winner = (avgJohn < avgMike) ? "mike" : (avgJohn === avgMike) ? "Draw" : 'Jiohn';
console.log(winner);
/*3 */
avgJohn = (120 + 120 + 120) / 3;
avgMike = (116 + 94 + 123) / 3;


winner = (avgJohn < avgMike) ? "mike" : (avgJohn === avgMike) ? "Draw" : 'Jiohn';
console.log(winner);

avgJohn = (89 + 120 + 103) / 3;
avgMike = (89 + 120 + 103) / 3;


winner = (avgJohn < avgMike) ? "mike" : (avgJohn === avgMike) ? "Draw" : 'Jiohn';
console.log(winner);

/*4 */
avgJohn = (89 + 120 + 103) / 3;
avgMike = (116 + 94 + 123) / 3;
let avgMarry = (97 + 134 + 105) / 3;

if (avgJohn < avgMike && avgMarry < avgMike) {
    winner = "mike"
}
if (avgMike < avgJohn && avgMarry < avgJohn) {
    winner = "John"
}
if (avgJohn < avgMarry && avgMike < avgMarry) {
    winner = "Marry"
}


console.log(winner);

/*5 */
avgJohn = (89 + 120 + 103) / 3;
avgMike = (116 + 94 + 123) / 3;
avgMarry = (89 + 120 + 103) / 3;

if (avgJohn < avgMike && avgMarry < avgMike) {
    winner = "mike"
}
if (avgMike < avgJohn && avgMarry < avgJohn) {
    winner = "John"
}
if (avgJohn < avgMarry && avgMike < avgMarry) {
    winner = "Marry"
}


console.log(winner);