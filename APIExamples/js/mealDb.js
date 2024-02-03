const searchFood = ()=>{
    const searchFoodField = document.getElementById('search-field');
    const searchFoodText = searchFoodField.value;
    //console.log(searchFoodText);
    searchFoodField.value ="";

    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchFoodText}`;
    //console.log(url);
    fetch(url)
        .then(res=>res.json())
        .then(data => displaySearchResult(data.meals))
}
const displaySearchResult = (meals)=>{
    const searchResult = document.getElementById('search-result');
    meals.forEach(meal => {
        console.log(meal);
        const div = document.createElement("div");
        div.classList.add('col');
        div.innerHTML = `
        <div onclick="loadMealDetail(${meal.idMeal})" class="card h-100" style="width: 18rem">
          <img src="${meal.strMealThumb}" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">
              ${meal.strInstructions.slice(0,100)}
            </p>
          </div>
        </div> 
        `;
        searchResult.appendChild(div);
    });
}

const loadMealDetail = (mealId)=>{
    //console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/load.php?i=${mealId}`;
     fetch(url)
        .then(res=>res.json())
        .then(data => console.log(data.meals[0]))
    
}