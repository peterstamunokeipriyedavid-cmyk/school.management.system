let school_name = "David";
let mathScore = 90;
let englishScore = 75;
let compsciScore = 50;
let bioScore = 30;
let totalsubjects = 4;

function totalscore (math,english,compSci, bio) {
    return math + english + compSci + bio;
}
function averagescore(totalscore, totalsubjects) {
    return totalscore / totalsubjects; 
}
function grade(average) {
    if (average >= 70) {
       return "A";
    } else if (average >= 60) {
        return "B";
        
    } else if ( average >= 50) {
        return "C";
        
    } else if (average >= 45 ) {
        return "D";
        
    } else if ( average >= 40) {
        return "E";

        
    } else {
        return "F"
    } 
}
function getresult(average) {
    if (average >= 40) {
      return "PASS";
    } else {
        return "FAIL";
    }
}
function validscore (totalscore) {
    if (totalscore >= 0 && totalscore <= 400) {
        return true;
    } else {
        return false;
    }
}
function distinction(average) {
    return average >= 75;
}
console.log (school_name)
console.log (mathScore)
console.log (englishScore)
console.log (compsciScore)
console.log (bioScore)
console.log (totalscore(mathScore, englishScore, compsciScore, bioScore))
console.log (averagescore(totalscore(mathScore, englishScore, compsciScore, bioScore), totalsubjects))
console.log (grade(averagescore(totalscore(mathScore, englishScore, compsciScore, bioScore), totalsubjects)))
console.log (getresult(averagescore(totalscore(mathScore, englishScore, compsciScore, bioScore), totalsubjects)))
console.log (validscore(totalscore(mathScore, englishScore, compsciScore, bioScore)))
console.log (distinction(averagescore(totalscore(mathScore, englishScore, compsciScore, bioScore), totalsubjects)))

let student1 = {name: "Dane", mathScore: 91, englishScore: 70, compsciScore: 55, bioScore: 37};
console.log(student1);
let student2 = {name: "John", mathScore: 80, englishScore: 70, compsciScore: 60, bioScore: 50};
console.log(student2);
let student3 = {name: "Jane", mathScore: 70, englishScore: 60, compsciScore: 50, bioScore: 40};
console.log(student3);
let totalscore1;
totalscore1 = totalscore(
    student1.mathScore,
    student1.englishScore,
    student1.compsciScore,
    student1.bioScore
);
let totalscore2;
totalscore2 = totalscore(
    student2.mathScore,
    student2.englishScore,
    student2.compsciScore,
    student2.bioScore
);
let totalscore3;
totalscore3 = totalscore(
    student3.mathScore,
    student3.englishScore,
    student3.compsciScore,
    student3.bioScore
);
let averageScore1;
averageScore1 = averagescore(totalscore1, totalsubjects);
let averageScore2;
averageScore2 = averagescore(totalscore2, totalsubjects);
let averageScore3;
averageScore3 = averagescore(totalscore3, totalsubjects);
let grade1;
grade1 = grade(averageScore1);
let grade2;
grade2 = grade(averageScore2);
let grade3;
grade3 = grade(averageScore3);
result1 = getresult(averageScore1);
result2 = getresult(averageScore2);
result3 = getresult(averageScore3); 
validScore1 = validscore(totalscore1);
validScore2 = validscore(totalscore2);
validScore3 = validscore(totalscore3);
distinction1 = distinction(averageScore1);
distinction2 = distinction(averageScore2);
distinction3 = distinction(averageScore3);
return {
    name: student1.name,
    mathScore: student1.mathScore,
    englishScore: student1.englishScore,
    compsciScore: student1.compsciScore,
    bioScore: student1.bioScore,
    totalscore: totalscore1,
    averageScore: averageScore1,
    grade: grade1,
    result: result1,
    validScore: validScore1,
    distinction: distinction1
}
return{
   name: student2.name,
   mathScore: student2.mathScore,
   englishScore: student2.englishScore,
    compsciScore: student2.compsciScore,
    bioScore: student2.bioScore,
    totalscore: totalscore2,
    averageScore: averageScore2,
    grade: grade2,
    result: result2,
    validScore: validScore2,
    distinction: distinction2 
}
return {
    name: student3.name,
    mathScore: student3.mathScore,
    englishScore: student3.englishScore,
    compsciScore: student3.compsciScore,
    bioScore: student3.bioScore,
    totalscore: totalscore3,
    averageScore: averageScore3,
    grade: grade3,
    result: result3,
    validScore: validScore3,
    distinction: distinction3
}
printReport(student1);
printReport(student2);
printReport(student3);
function beststudent(student1, student2, student3) {
    if (student1.averageScore > student2.averageScore && student1.averageScore > student3.averageScore) {
        return student1.name;
    }else if (student2.averageScore > student1.averageScore && student2.averageScore > student3.averageScore) {
        return student2.name;
    } else {
        return student3.name;
    }
}
    function classAverage(student1, student2, student3) {
        return (student1.averageScore + student2.averageScore + student3.averageScore) / 3;
    }
    console.log("Best Student: " + beststudent(student1, student2, student3));
    console.log("Class Average: " + classAverage(student1, student2, student3));