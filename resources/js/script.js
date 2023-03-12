
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
buttonOne.addEventListener('click', () => {
    clicked = 'true';
})

function switchToAuto() {
    window.location = 'automated.html';

}

function switchToManual() {
    window.location = "manual.html";

}

const navbar = document.getElementById("header");

navbar.innerHTML = `
    
    <div class="row">
    <div class="col">
        <img class="burger-menu" data-bs-toggle="offcanvas" href="#openNavbar" role="button"
            aria-controls="openNavbar" id="burger-menu" src="resources/images/burger-menu.svg">
    </div>
    <div class="col">
        <h2 id="top-heading">GPA CALCULATOR</h2>
    </div>
</div>
<div class="offcanvas offcanvas-start" tabindex="-1" id="openNavbar" aria-labelledby="openNavbar">
    <div class="offcanvas-header">
        <h5 class="offcanvas-title" id="openNavbar"></h5>
        <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close">

        </button>
    </div>
    <div class="offcanvas-body">
        <nav class="navbar-container">
            <a href="index.html">Home</a>
            <a href="login.html">Log In</a>
            <a href="manual.html">Check GPA</a>
            <a href="automated.html">Automate Tables</a>
        </nav>
    </div>
</div>
`