/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?
var monday = document.getElementById("monday");
var tuesday = document.getElementById("tuesday");
var wednesday = document.getElementById("wednesday");
var thursday = document.getElementById("thursday");
var friday = document.getElementById("friday");

var clear_button = document.getElementById("clear-button");

var half_button = document.getElementById("half");
var full_button = document.getElementById("full");

var day_rate;
var days_per_week;
var calculated_cost = document.getElementById("calculated-cost");
var clicked_length = document.getElementsByClassName('clicked');
/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!
monday.addEventListener('click', changeColourMon);
function changeColourMon() {
    monday.classList.add('clicked');
}
tuesday.addEventListener('click', changeColourTues);
function changeColourTues() {
    tuesday.classList.add('clicked');
}
wednesday.addEventListener('click', changeColourWed);
function changeColourWed() {
    wednesday.classList.add('clicked');
}
thursday.addEventListener('click', changeColourThurs);
function changeColourThurs() {
    thursday.classList.add('clicked');
}
friday.addEventListener('click', changeColourFri);
function changeColourFri() {
    friday.classList.add('clicked');
}

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.
clear_button.addEventListener('click', clear);
function clear() {
    monday.classList.remove('clicked');
    tuesday.classList.remove('clicked');
    wednesday.classList.remove('clicked');
    thursday.classList.remove('clicked');
    friday.classList.remove('clicked');
    calculated_cost.innerHTML = 0;
}


/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.
half_button.addEventListener('click', halfDay);
function halfDay() {
    half_button.classList.add('clicked');
    full_button.classList.remove('clicked');
    day_rate = 20;
    calculate();
}

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.
full_button.addEventListener('click', fullDay);
function fullDay() {
    full_button.classList.add('clicked');
    half_button.classList.remove('clicked');
    day_rate = 35;
    calculate();
}

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value
function calculate() {
    
    days_per_week = clicked_length.length -1;
    calculated_cost.innerHTML = day_rate * days_per_week;
}

