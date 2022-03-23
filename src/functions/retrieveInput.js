// import fetchFastRecipes from './fetchFastRecipes'

import fetchCuiRecipes from './fetchCuiRecipes';
import createCuisineList from "./createCuisineList";


//array with cuisines;
const cuisineList = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean",
    "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];


createCuisineList(cuisineList);


// reference save of user input menucuisine
const inputAuthor = document.getElementById('author');
const inputTag = document.getElementById('tag');
const inputTitle = document.getElementById('title');


const form = document.getElementById('on-submit-cuisine');
let inputCuiString = '';
// event listner user input
form.addEventListener("submit", (e) => {
    e.preventDefault();

    handleCheckbox();
    fetchCuiRecipes(inputAuthor.value, inputTag.value, inputCuiString).then();

    // now refresh input
    inputCuiString = "";
})

function handleCheckbox() {


    // If the checkbox is checked, display the output text

    let selCui = 0;
    let selectCui = [];
    for (let i = 0; i < cuisineList.length; i++) {
        // Get the checkbox
        selCui = `sel-cui-${i}`;
        selectCui[i] = document.getElementById(selCui);
        if (selectCui[i].checked === true) {
            inputCuiString += selectCui[i].value;
            inputCuiString += ",";
        }
    }
}


