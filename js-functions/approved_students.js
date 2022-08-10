function analyzeApprovedStudents(students) {
    let approvedStudents = [];
    let finalGrade = calculateFinalGrade(students);

    for (let i = 0, a = 0; i < students.length; i++) {
        if (students[i] >= finalGrade) {
            approvedStudents[a] = i + 1;
            a++;
        }
    }
    return `Os estudantes aprovados são (índices): ${approvedStudents}`;
}

function calculateFinalGrade(array) {
    let finalGrade = 0;

    for (let i = 0; i < array.length; i++) {
        finalGrade = finalGrade + array[i];
    }
    finalGrade = finalGrade / array.length;
    return finalGrade;
}

let students = [5, 3, 2, 6, 7, 8];
console.log(analyzeApprovedStudents(students));