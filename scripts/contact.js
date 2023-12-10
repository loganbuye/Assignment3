// when the "submit-button" is clicked, the contents of the contact-page are replaced with a single <p> element that reads "Thank you for your message" in size 24 font.
//document.getElementById(submit-button).onclick = function(){document.getElementById(contact-page).innerHTML="Thank you for your message";}//
var submit_button = document.getElementById("submit-button");
var content = document.getElementById("contact-page");
submit_button.addEventListener('click', changeContent);

function changeContent() {
    content.innerHTML = "Thank you for your message!";
}
// hint: you can change the style of an element by modifying the value of that element's .style.fontSize, or by updating its .classList.

