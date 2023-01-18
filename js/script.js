'use strict';

// Data
const planPrice = {
    arcade: 9,
    advanced: 12,
    pro: 15
};

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

const infoName = document.querySelector('#info__name');
const infoEmail = document.querySelector('#info__email');
const infoNumber = document.querySelector('#info__number');

// Form Validation


// When the user clicks on next button
btnNext.addEventListener('click', (event) => {
    // event.preventDefault();
    // currentTab++;
    // if (currentTab > 3) {
    //     currentTab = 3;
    // }
    // changeCurrentTab();
    // changeStep();
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
const planCards = document.querySelectorAll('.plan__card');
const planCardRadios = document.querySelectorAll('.plan__card-radio')
const planTimeRadios = document.querySelectorAll('.plan__time-radio');
const planTimeCheckmarks = document.querySelectorAll('.plan__time-checkmark');

// Plan Card radio
let currentCardPlan = 'arcade';
planCardRadios.forEach((planRadio, index) => {
    let currentCardIndex = 0;
    const updateCard = () => {
        planCards.forEach((planCard, index) => {
            if (currentCardIndex === index) {
                planCard.classList.add('active-card');
            } else {
                planCard.classList.remove('active-card');
            }
        })
    };
    planRadio.addEventListener('click', () => {
        currentCardPlan = planRadio.value;
        currentCardIndex = index;
        updateCard();
    });
});

// Radio for plan time
let currentTimePlan = 'monthly';
planTimeRadios.forEach((planRadio, index) => {
    let currentActivePlan = 0;
    const updateTimePlan = () => {
        planTimeCheckmarks.forEach((planTimeCheckmark, index) => {
            if (currentActivePlan === index) {
                planTimeCheckmark.classList.add('active-checkmark');
            } else {
                planTimeCheckmark.classList.remove('active-checkmark');
            }
        })
    }

    planRadio.addEventListener('click', () => {
        currentTimePlan = planRadio.value;
        currentActivePlan = index;
        updateTimePlan();
    })
})


