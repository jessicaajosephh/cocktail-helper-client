const cocktailsURL = "http://localhost:3000/cocktails"
const ingredientsURL = "http://localhost:3000/ingredients"
const cocktailForm = document.getElementById("cocktail-form")
const iimageInput = document.getElementById("input-image-url")
const cocktailNameInput = document.getElementById("input-cocktail-name")
const instructionsInput = document.getElementById("input-instructions")

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