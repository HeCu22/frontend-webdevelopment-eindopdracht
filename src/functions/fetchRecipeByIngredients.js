import axios from 'axios';
import createListLines from "./createListLines";


const ingredients = "";

async function fetchRecipeByIngredients(ingredients) {
     try {

        const response = await axios.get("https://api.spoonacular.com/recipes/findByIngredients", {
                params: {
                apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                    // apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                ingredients: ingredients,
                number: 5
            },
            headers: {
                "Content-Type": "application/json"
            }

        });
         const {data: foundRecipes} = response;


         // create a  list of max 5 lines that uses array of all found
         createListLines(foundRecipes.slice(0,5));

    } catch (e) {
        console.error(e);
    }
}

export default fetchRecipeByIngredients;