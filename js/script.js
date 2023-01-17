'use strict';

// Elements
const tabs = document.querySelectorAll('.tab');
const btnNext = document.querySelector('.main__btn--next');
const btnPrev = document.querySelector('.main__btn--prev');
const btnConfirm = document.querySelector('.main__btn--confirm');
const navSteps = document.querySelectorAll('.nav__step-number');

// Global Variables
let currentTab = 0;

// Changing steps as per the page
const changeStep = () => {
    navSteps.forEach((navStep, index) => {
        if (currentTab === index) {
            navStep.classList.add('active');
        } else {
            navStep.classList.remove('active');
        }
    })
}

// 'Changing and displaying active buttons
const displayActiveButtons = () => {
    if (currentTab === 0) {
        btnPrev.style.display = 'none';
        btnConfirm.style.display = 'none';
    } else if (currentTab === 1) {
        btnPrev.style.display = 'block';
    } else if (currentTab === 2) {
        btnConfirm.style.display = 'none';
        btnNext.style.display = 'block';
    } else {
        btnNext.style.display = 'none';
        btnConfirm.style.display = 'block';
    }
}

// Function for changing tab
const changeCurrentTab = () => {
    displayActiveButtons();
    tabs.forEach((tab, index) => {
        if (currentTab === index) {
            tab.classList.add('active-tab');
        } else {
            tab.classList.remove('active-tab');
        }
    })
}

// When the user clicks on next button
btnNext.addEventListener('click', () => {
    currentTab++;
    if (currentTab > 3) {
        currentTab = 3;
    }
    changeCurrentTab();
    changeStep();
});

// When the user clicks on prev button
btnPrev.addEventListener('click', () => {
    currentTab--;
    if (currentTab < 0) {
        currentTab = 0;
    }
    changeCurrentTab();
    changeStep();
});


// Plan page
const planRadioArcade = document.querySelector('#plan__card-radio--arcade');
const planRadioAdvanced = document.querySelector('#plan__card-radio--advanced');
const planRadioPro = document.querySelector('#plan__card-radio--pro');
const planCardRadios = document.querySelectorAll('.plan__card-radio')
const planTimeLabels = document.querySelectorAll('.plan__time-label');
const planTimeCheckmarks = document.querySelectorAll('.plan__time-checkmark');
const planRadioYear = document.querySelector('#plan__time-year')
const planRadioMonth = document.querySelector('#plan__time-month')

const changeActivePlanBackground = () => {
    for (const planCardRadio of planCardRadios) {
        console.log(planCardRadio.value);
    }
}
changeActivePlanBackground();

// Radio for plan card
planRadioArcade.addEventListener('click', () => {
   changeActivePlanBackground();
});

planRadioAdvanced.addEventListener('click', () => {
    changeActivePlanBackground();
});

planRadioPro.addEventListener('click', () => {
    changeActivePlanBackground();
});

// Radio for plan time
let currentPlan = 0;
planRadioMonth.addEventListener('click', () => {
    currentPlan = 0;
    planTimeCheckmarks[0].classList.add('plan__time-active-checkmark');
    planTimeCheckmarks[1].classList.remove('plan__time-active-checkmark');
});

planRadioYear.addEventListener('click', () => {
    currentPlan = 1;
    planTimeCheckmarks[0].classList.remove('plan__time-active-checkmark');
    planTimeCheckmarks[1].classList.add('plan__time-active-checkmark');
});




// // Display active tab
//
// showTab(currentTab);
//
// function showTab(n) {
//     let tab = document.getElementsByClassName('tab');
//
//     // Show active tab
//     tab[n].style.display = 'block'
//
//     // Show accurate button
//     n == 0
//         ? document.getElementById('prevBtn').style.display = 'none'
//         : document.getElementById('nextBtn').style.display = 'inline';
//
//     n == (tab.length - 1)
//         ? document.getElementById('nextBtn').innerHTML = 'Confirm'
//         : document.getElementById('nextBtn').innerHTML = 'Next Step';
// }
//

