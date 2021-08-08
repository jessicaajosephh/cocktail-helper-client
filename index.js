const cocktailsURL = "http://localhost:3000/cocktails"
const ingredientsURL = "http://localhost:3000/ingredients"
const cocktailForm = document.getElementById("cocktail-form")
const imageInput = document.getElementById("input-image-url")
const cocktailNameInput = document.getElementById("input-cocktail-name")
const instructionsInput = document.getElementById("input-instructions")

cocktailForm.addEventListener("submit", (e) => {submitCocktail(e)})

function submitCocktail(e){
    e.preventDefault()
    fetch(cocktailsURL, {
        method: "POST",
        headers: {
            "Content-Type": "applications/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            image: imageInput.value 
            name: cocktailNameInput.value 
            instructions: instructionsInput.value 
        })
    })

    renderCocktail(cocktailNameInput.value, imageInput.value, instructionsInput.value)
}

function fetchCocktails(){
    fetch(cocktailsURL)
    .then(resp => resp.json())
    .then(cocktails =>
        cocktails.data.forEach(cocktail =>{
            cocktailImage.src = cocktail.attributes.image 
            cocktailName.innerText = cocktail.attributes.name 
            ingredientList(cocktail)
            cocktailInstructions.innerText = cocktail.attributes.instructions 
    })
)}

function ingredientList(cocktail){
    let ingredients = cocktail.attributes.ingredients 
    return ingredients.map(ingredients => {
        let li = document.createElement('li')
        li.innerText = ingredient.name 
        ingredientsUl.appendChild(li)
    })
}

fetchCocktails()