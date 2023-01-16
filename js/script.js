'use strict';

// Elements
const tabs = document.querySelectorAll('.tab');
const btnNext = document.querySelector('.main__btn--next');
const btnPrev = document.querySelector('.main__btn--prev');
const btnConfirm = document.querySelector('.main__btn--confirm');

// Global Variables
let currentTab = 0;

// Setting display of form page as block
// tabs[currentTab].style.display = 'block';

// Function for changing tab
const changeCurrentTab = () => {
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
});

// When the user clicks on prev button
btnPrev.addEventListener('click', () => {
    currentTab--;
    if (currentTab < 0) {
        currentTab = 0;
    }
    changeCurrentTab();
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

