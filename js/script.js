// Global variables
let currentTab = 1;


// Display active tab

showTab(currentTab);

function showTab(n) {
    let tab = document.getElementsByClassName('tab');
    
    // Show active tab
    tab[n].style.display = 'block'

    // Show accurate button
    n == 0 
        ? document.getElementById('prevBtn').style.display = 'none'
        : document.getElementById('nextBtn').style.display = 'inline';

    n == (tab.length - 1)
        ? document.getElementById('nextBtn').innerHTML = 'Confirm'
        : document.getElementById('nextBtn').innerHTML = 'Next Step';
}

// Change tab on click

function nextPrev(n) {
    let tab = document.getElementsByClassName('tab');
    tab[currentTab].style.display = 'none';
    
    currentTab = currentTab + n;
    showTab(currentTab);
}

