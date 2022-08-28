const lodeMeals = (search) => {
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => displyMeals(data.meals))
}

const displyMeals = meals =>{
    
    const mealsContainer = document.getElementById('meal-container')
    mealsContainer.innerHTML = '';
    meals.forEach(meal =>{
        console.log(meal);
        const mealDiv = document.createElement('div');
        mealDiv.classList.add('col');
        mealDiv.innerHTML = `
        <div onclick="loadeMealDetails(${meal.idMeal})" class="card">
                        <img src="${ meal.strMealThumb}" class="card-img-top" alt="...">
                        <div class="card-body">
                        <h5 class="card-title"> ${meal.strMeal}</h5>
                        <p class="card-text">${meal.strInstructions.slice(0, 180)}</p>
                        </div>
                  </div>
        
        `;
        mealsContainer.appendChild(mealDiv);
    })
        
}

const searchFood = () =>{
    const searchFeald = document.getElementById('search-field');
    const searchText = searchFeald.value;
    lodeMeals(searchText);
    searchFeald.value="";

}

const loadeMealDetails = (idMeal) =>{
const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`;

fetch(url)
.then(res => res.json())
.then(data => displyMealsDetales(data.meals[0]))

}
const displyMealsDetales = meal =>{
const detailContainer = document.getElementById('detail-container');
detailContainer.innerHTML = "";
const mealDiv = document.createElement('div');
mealDiv.classList.add('card');
mealDiv.innerHTML =`
<img src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
    <h5 class="card-title"> ${meal.strMeal}</h5>
    <p class="card-text">${meal.strInstructions.slice(0, 180)}</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
`;
detailContainer.appendChild(mealDiv);
}

lodeMeals('');