import axios from 'axios';
import createListLines from "./createListLines";

const inputId = 0;
const listItems = [];

async function fetchRecipeById(inputId) {
    inputId = 716426;

    console.log('input', inputId);
    try {
        const detailsRecipe = await axios.get(`https://api.spoonacular.com/recipes/${inputId}/information?includeNutrition=false`, {
            params: {
                // apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                id: inputId

            },
            headers: {
                "Content-Type": "application/json"
            }
        });

        // make array from object detailsRecipe to pass it to createListLines

        listItems[0] = detailsRecipe.data;
        createListLines(listItems);


    } catch (e) {
        console.error(e);
    }
}


export default fetchRecipeById;