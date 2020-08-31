'use-strict';

// Get all the DOM elements.
const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');

// Show Time
const showTime = () => {

    let today = new Date(),
        hour = today.getHours(),
        minutes = today.getMinutes(),
        seconds = today.getSeconds();

    // Setting AM or PM
    const amPM = hour >= 12 ? 'PM' : 'AM';

    // format 12 Hours
    hour = hour % 12 || 12;

    // Render the time    
    time.innerHTML = `${hour}<span>:</span>${addZero(minutes)}<span>:</span>${addZero(seconds)} <span>${amPM}</span>`;
    setTimeout(showTime, 1000)
};

// Add Zero to minutes and seconds
const addZero = (n) => {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
};

// Set background Images
const setBgImage = () => {

    let today = new Date(),
        hour = today.getHours();

    if (hour < 12) {
        // morning
        document.body.style.backgroundImage = "url('../img/morning.jpg')";
        document.body.style.color = '#000';
        greeting.textContent = "Good Morning";

    } else if (hour < 18) {
        // Afternoon
        document.body.style.backgroundImage = "url('../img/afternoon.jpg')";
        greeting.textContent = "Good Afternoon";
    } else {
        // Eveining
        document.body.style.backgroundImage = "url('../img/goodnight.jpg')";
        greeting.textContent = "Good Eveining";
    }
}

// local storage functions to get name and today focus
const getName = () => {
    
    if (localStorage.getItem('name') === null) {
        name.textContent = '[Enter Name]'
    } else {
        name.textContent = localStorage.getItem('name')
    }
};

const getFocus = () => {
    
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[ | ]'
    } else {
        focus.textContent = localStorage.getItem('focus')
    }
};

// set | Update name and focus to localStorage
const setName = (e) => {
    
    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name', e.target.innerText);
            name.blur();
        }
    } else {
        localStorage.setItem('name', e.target.innerText)
    }
};

const setFocus = (e) => {

    if (e.type === 'keypress') {
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText);
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
};

// Events to capture the name and focus
name.addEventListener('keypress', setName);
name.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus)

// Run
showTime();
setBgImage();
getName();
getFocus();