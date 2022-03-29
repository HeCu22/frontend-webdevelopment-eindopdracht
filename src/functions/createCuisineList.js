function createCuisineList(cuisines) {
    console.log('ikk ben hier');

    const cuisineList = document.getElementById('cuisine-list');

    // make sure every search results in result asked for
    cuisineList.replaceChildren();

    // one or more recipe lines are possible
        /* ------------------------------------ */
        //   use create element method to fill the DOM tree
        /* ------------------------------------ */
        let selCui = "sel-cui-0";
        for (let i = 0; i < cuisines.length; i++) {


            // create container element for recipe line in div
            let cuisineLabel = document.createElement('label');
            selCui = `sel-cui-${i}`;
            cuisineLabel.setAttribute('for', selCui);

            // Create input element
            let cuisineInput = document.createElement('input');
            cuisineInput.setAttribute('type', 'checkbox');
            cuisineInput.setAttribute("id", selCui);
            cuisineInput.setAttribute("value", `${cuisines[i]}`);
            cuisineInput.setAttribute("text", `${cuisines[i]}`)

            // put elements in container input
            cuisineLabel.appendChild(cuisineInput);
            // put text checkbox after the input
            cuisineInput.after(`${cuisines[i]}`);

            // put elements in container label
            cuisineList.appendChild(cuisineLabel);
        }

}

export default createCuisineList;