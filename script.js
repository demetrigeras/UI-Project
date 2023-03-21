let randFood = "https://www.themealdb.com/api/json/v1/1/random.php"
let slide = document.querySelector(".slide-show")
let meals = document.querySelector(".meal")
let next = document.querySelector(".next")
let recipe = document.querySelector(".recipe")

next.addEventListener("click", (e) => {
    e.preventDefault()

fetch(randFood) 
    .then((res) => res.json())
    .then ((res) => {
    console.log(res)
    meals.innerText = `${res.meals[0].strMeal}`
    recipe.innerText = `${res.meals[0].strInstructions}`
    console.log(res.meals[0].strInstructions)
    })
})

fetch(randFood) 
    .then((res) => res.json())
    .then ((res) => {
    console.log(res)
    meals.innerText = `${res.meals[0].strMeal}`
    recipe.innerText = `${res.meals[0].strInstructions}`
    console.log(res.meals[0].strInstructions)
    })
    // const recipe1 = []

    // for (let i = 1;  i < 21; i++) {
    //     recipe1.push(res.meals[0].strIngredient1)
    //     };
    
    //     console.log(recipe1)
    

    
    
    
    

