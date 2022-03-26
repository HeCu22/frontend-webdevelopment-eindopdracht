console.log('hier aangekomen');
import fetchCuiRecipes from './fetchCuiRecipes';
import createCuisineList from "./createCuisineList";


//array with cuisines;
const cuisineList = ["African", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean",
    "Latin American", "Mediterranean", "Mexican", `Middle Eastern`, "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"];

console.log('retrieveinput');
createCuisineList(cuisineList);


// reference save of user input
let inputAuthor = document.getElementById('author');
let inputTags = document.getElementById('tag');
let inputTitle = document.getElementById('title');
let inputCuiString = '';

const formSubmit = document.getElementById('on-submit-cuisine');



// event listner user input
formSubmit.addEventListener("submit", (e) => {
    e.preventDefault();

    // put input of cuisines marked in string
    handleCheckbox();
    buttonDisplay();
    fetchCuiRecipes(inputAuthor.value, inputTags.value, inputTitle.value, inputCuiString).then();
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

function buttonDisplay () {

    const buttonDisp = document.getElementById("button-place");
    let buttonTag = document.createElement("button");
    buttonTag.setAttribute("id","buttonNext");
    buttonTag.textContent = "+";
    buttonDisp.appendChild(buttonTag);

}