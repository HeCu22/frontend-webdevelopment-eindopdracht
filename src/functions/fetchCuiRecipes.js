import axios from 'axios';
import createListLines from "./createListLines";

const messageText = document.getElementById("message");
messageText.textContent = "";

async function fetchCuiRecipes(inputAuthor, inputTag, inputTitle, inputCuisine) {
    messageText.textContent = "";
    console.log('inputCuisine', inputTitle);
    try {

        const response = await axios.get("https://api.spoonacular.com/recipes/complexSearch", {
            params: {
                // apiKey: "dbfe72f1a5bd47d9bea64ca490667395",
                apiKey: "e7fbe0c19f1f4db7b20523c1dba4b282",
                cuisine: inputCuisine,
                author: inputAuthor,
                tags: inputTag,
                titleMatch: inputTitle,
                number: 5
            },
            headers: {
                "Content-Type": "application/json"
            }

        });
        console.log(response.data.results);
        const foundRecipes = response.data.results;

        // create a  list of max 5 lines that uses array of all found
        let firstLine = 0;
        let lastLine = 4;
        let arrayDisplay = foundRecipes.slice(firstLine, lastLine);
        // console.log(arrayDisplay);
        createListLines(arrayDisplay);


// display next page


        // <button id="buttonNext">Next</button>
            const button = document.getElementById("buttonNext");
            button.addEventListener("click", (e) => {
                if (lastLine > foundRecipes.length) {
                    messageText.textContent = `Last data found. Press Start to go to first page.`;
                } else {
                    firstLine += 4;
                    lastLine += 4;
                    console.log(firstLine, lastLine);
                    arrayDisplay = foundRecipes.slice(firstLine, lastLine);
                    console.log(arrayDisplay);
                    createListLines(arrayDisplay);
                }

            })



    } catch
        (e) {
        console.error(e);
        // fill message text
        messageText.textContent = `For this input no data found.`;
    }
}


export default fetchCuiRecipes;



