const cocktailsURL = "http://localhost:3000/cocktails"
const cocktailDiv = document.getElementById("cocktail-id")
const cocktailName = document.getElementById("cocktail-name")
const ingredientsUl = document.getElementById("ingredient-list")
const cocktailImage = document.getElementById("cocktail-image")
const cocktailInstructions = document.getElementById("instructions")

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