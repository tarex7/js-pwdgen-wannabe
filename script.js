//UI elements
const firstNameUI = document.getElementById("firstName");
const lastNameUI = document.getElementById("lastName");
const favColorUI = document.getElementById("favColor");
const passwordUI = document.getElementById("password");

//Inputs
const firstName = prompt("Qual'è il tuo nome?");
const lastName = prompt("Qual'è il tuo cognome?");
const favColor = prompt("Qual'è il tuo colore preferito?");

//Password
const password = firstName + lastName + favColor + 21;

//Show in UI
firstNameUI.innerText = firstName;
lastNameUI.innerText = lastName;
favColorUI.innerText = favColor;
passwordUI.innerText = password;
