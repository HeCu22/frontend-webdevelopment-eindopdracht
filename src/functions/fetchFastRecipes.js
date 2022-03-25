import axios from 'axios';
import createListLines from "./createListLines";


const inputParm = 10;
async function fetchFastRecipes(inputParm) {

    try {
        const response = await axios.get ("https://api.spoonacular.com/recipes/complexSearch", {
            params: {
                // apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                maxReadyTime: inputParm,
                type: "salad",
                number: 5
            },
            headers: {
                "Content-Type": "application/json"
            }

        });
        const {results: {slice}} = response.data;

        // create a  list of max 5 lines that uses array of all found
        createListLines(slice(0,5));

    } catch
        (e) {
        console.error(e);
    }
}

export default fetchFastRecipes;



