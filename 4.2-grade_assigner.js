const arrGrade = ["A", "B", "C", "D", "F"];
const gradeAssigner = grade => arrGrade[(grade >= 0 && grade <= 64) * 4 +
    (grade >= 65 && grade <= 69) * 3 +
    (grade >= 70 && grade <= 79) * 2 +
    (grade >= 80 && grade <= 89) * 1 +
    (grade >= 90 && grade <= 100) * 0];


console.log(gradeAssigner(95));
console.log(gradeAssigner(60));
console.log(gradeAssigner(65));
console.log(gradeAssigner(72));
console.log(gradeAssigner(34));
console.log(gradeAssigner(85));
console.log(gradeAssigner(95));