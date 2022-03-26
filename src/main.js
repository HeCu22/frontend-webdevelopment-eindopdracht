import fetchFastRecipes from './functions/fetchFastRecipes'
import fetchRecipeByIngredients from './functions/fetchRecipeByIngredients'
import fetchRecipeByDetails from "./functions/fetchRecipeById";

// reference save of user input radiobuttons

const selectRadioC = document.getElementById('cuisine');
const selectRadioH = document.getElementById('healthy');
const selectRadioQ = document.getElementById('quick');

console.log('e', selectRadioC.value);
// event listener radio button
selectRadioC.addEventListener("keyup", (e) => {
    e.preventDefault();
    console.log('e', selectRadioC.value);
    menuCuisine();
})
// event listener radio button
selectRadioH.addEventListener("keyup", (e) => {
    e.preventDefault();
    fetchRecipeByIngredients("salad").then();
})
// event listener radio button
selectRadioQ.addEventListener("keydown", (e) => {
    e.preventDefault();
    fetchFastRecipes(15).then();
})

function menuCuisine() {
    console.log('log');
    location.href = "./menus/menuCuisine.html";

}