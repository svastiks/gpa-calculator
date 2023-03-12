
let gradeLetter = "A+";
//Variables

let frequency = 1;

let courses = document.getElementById('numberOfCourses');

let table = document.getElementsByClassName("gradeTable");

console.log(calcgradeLetter(gradeLetter, frequency));

function calcgradeLetter(gradeLetter, frequency) {

    let points = "";

    if (gradeLetter === 'A+') {
        points = 9;
    }
    else if (gradeLetter === 'A') {
        points = 8;
    }
    else if (gradeLetter === 'B+') {
        points = 7;
    }
    else if (gradeLetter === 'B') {
        points = 6;
    }
    else if (gradeLetter === 'C+') {
        points = 5;
    }
    else if (gradeLetter === 'C') {
        points = 4;
    }
    else if (gradeLetter === 'D+') {
        points = 3;
    }
    else if (gradeLetter === 'D') {
        points = 2;
    }
    else if (gradeLetter === 'E') {
        points = 1;
    }
    else if (gradeLetter === 'F') {
        points = 0;
    }
    else {
        return points;
    }

    document.getElementsByClassName("footer-container").innerHTML = `
    
        Points = ${points * 3}
    
    `;

    const finalPoints = localStorage.setItem('Points', points);

    return points;
}

function askQuestion() {

    table.innerHTML = `
    
        ${courses}

    `
    console.log(courses);
}

const buttonOne = document.querySelector('#optionOne');
// buttonOne.addEventListener('click', () => {
//     clicked = 'true';
// })

function switchToAuto() {
    window.location = 'automated.html';

}

function switchToManual() {
    window.location = "manual.html";

}

const navbar = document.getElementById("header");

$(function () {
    $("#header").load("navbar.html");
});

let list1 = [];
let list2 = [];
let list3 = [];
let list4 = [];

let n = 1;

let x = 0;

function addRow() {

    let rownumber = document.getElementById("tableShow");
    let NewRow = rownumber.insertRow(n);

    list1[x] = document.getElementById("numberOfCourses").value;
    list2[x] = document.getElementById("gradeRecieved").value;
    list3[x] = document.getElementById("creditsFinished").value;

    let cell1 = NewRow.insertCell(0);
    let cell2 = NewRow.insertCell(1);
    let cell3 = NewRow.insertCell(2);

    for (let i = 0; i < document.getElementById("numberOfCourses").value; i++) {
        $(cell1).html(
            list1[x]
        )

        $(cell2).html(
            list2[x]
        )

        $(cell3).html(
            list3[x]
        )

        n++;
        x++;
    }

        localStorage.setItem('Courses', document.getElementById("numberOfCourses").value);
        localStorage.setItem('Grade', document.getElementById("gradeRecieved").value);
        localStorage.setItem('Credits', document.getElementById("creditsFinished").value);
    
}

function calculateGpa() {

    let courses = localStorage.getItem('Courses');

    let grade = localStorage.getItem('Grade');

    let converted = convertLetterGrade(grade);
    console.log(converted);

    let credits = localStorage.getItem('Credits');

    let points = credits * converted;

    let gpa = points / credits;

    console.log(gpa);

    $(".display-gpa").html(`
    <br>
    <br>
    GPA: ${gpa}
    `);


}

calculateGpa();

function convertLetterGrade(gradeLetter) {

    let points = 0;

    if (gradeLetter === 'A+') {
        points = 9;
    }
    else if (gradeLetter === 'A') {
        points = 8;
    }
    else if (gradeLetter === 'B+') {
        points = 7;
    }
    else if (gradeLetter === 'B') {
        points = 6;
    }
    else if (gradeLetter === 'C+') {
        points = 5;
    }
    else if (gradeLetter === 'C') {
        points = 4;
    }
    else if (gradeLetter === 'D+') {
        points = 3;
    }
    else if (gradeLetter === 'D') {
        points = 2;
    }
    else if (gradeLetter === 'E') {
        points = 1;
    }
    else if (gradeLetter === 'F') {
        points = 0;
    }
    else {
        return points;
    }

    return points;
}