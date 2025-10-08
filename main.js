
let grades = [90, 97, 83, 68, 100, 93, 77, 59, 86, 72];

let total = 0
for (let i = 0; i < grades.length; i++){
    const grade = grades[i];
    // I will specify the category next
    total += grade;

    let letter;
    if (grade >= 90){
        letter = "A";
    } else if (grade >= 80){
        letter = "B";
    } else if (grade >= 70){
        letter = "C";
    } else if(grade >= 60){
        letter = "D";
    }  else {
        letter = "F"
    }
        console.log("Grade:", grade, "Letter:", letter);

}
// I will now find the average with the 10 grade and with the average we will also get the overall class performance
let average = total / grades.length

let performance;
if (average >= 90){
    performance = "Excellent";
} else if (average >= 80){
    performance = "Good";
} else if (average >= 70){
    performance = "Satisfactory";
} else {
    performance = "Needs Improvement";
}
let highest = (Math.max (...grades))
let lowest = (Math.min(... grades))


console.log("Overall Class Performance:", performance);
console.log("Highest grade A:", highest);
console.log ("Lowest grade F:", lowest);

console.log("Average grade:", average.toFixed(2));




/*
There are 10 grades in the class

Grades:
90: A
97: A
83: B
68: D
100: A
93: A
77: C
59: F
86: B
72: C

Overall Class Performance: Good

Highest Grade: 100 (A)
Lowest Grade: 59 (F)
Average Grade: 82.5
*/