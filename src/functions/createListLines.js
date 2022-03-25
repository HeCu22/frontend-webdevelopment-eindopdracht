function createListLines(recipes) {

    const recipeList = document.getElementById('recipe-list');

    // Zorg ervoor dat na elke zoekopdracht en dat er altijd het gewenste zoekresultaat op de pagina staat;
    recipeList.replaceChildren();


    // one or more recipe lines are possible
    recipes.map((recipe) => {

        /* ------------------------------------ */
        //   use create element method to fill the DOM tree
        /* ------------------------------------ */

        // create container element for recipe line in div
        let recipeDiv = document.createElement('div');
        recipeDiv.setAttribute('class', 'recipe-line');

        // Create IMG element
        let recipeImg = document.createElement('img');
        recipeImg.setAttribute('class', 'img-p');
        recipeImg.setAttribute('src', `${recipe.image}`);


        // Create het titel-element
        const recipeTitle = document.createElement('p');
        //  fill titel-element
        recipeTitle.textContent = recipe.title;
        recipeTitle.setAttribute('class', 'font-p');


        const recipeId = document.createElement("p");
        recipeId.textContent = recipe.id;

        // put elements in container div
        recipeDiv.appendChild(recipeImg);
        recipeDiv.appendChild(recipeTitle);
        // put elements in container List
        recipeList.appendChild(recipeDiv);
        recipeList.appendChild(recipeId);


    });


}


export default createListLines;