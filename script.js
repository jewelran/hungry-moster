const item = document.getElementById("display_item");
document.getElementById("search_btn").addEventListener("click", function () {
  const inputValue = document.getElementById("inputValue").value;
  fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${inputValue}`)
    .then((res) => res.json())
    .then((data) => {
      if (data.meals === null || data.meals === undefined) {
        const error = document.getElementById("error-massege");
        error.innerHTML = ` ${inputValue} not found, plz try again!`;
      } else {
        item.innerHTML = data.meals.map(
          (
            meal
          ) => `<div onclick="foodDetails('${meal.strMeal}')" class="meals">
           
            <img src="${meal.strMealThumb}" alt="img"/>
            
           <div> 
           <br/>
           <h2>${meal.strMeal}<h2>
           </div>
             </div>`
        );
      }
    });
});

const foodDetails = (foodName) => {
  const foodsUrl = `https://www.themealdb.com/api/json/v1/1/search.php?s=${foodName}`;
  fetch(foodsUrl)
    .then((res) => res.json())
    .then((data) => {
      const foodDetail = document.getElementById("detailsInFo");
      foodDetail.innerHTML = `
       <img src = '${data.meals[0].strMealThumb}' alt = 'img'/>
        <h2>${data.meals[0].strMeal}</h2>
        </br>
        <li>${data.meals[0].strIngredient1}</li>
        <li>${data.meals[0].strIngredient2}</li>
        <li>${data.meals[0].strIngredient3}</li>
        <li>${data.meals[0].strIngredient4}</li>
        <li>${data.meals[0].strIngredient5}</li>
        <li>${data.meals[0].strIngredient6}</li>
        <li>${data.meals[0].strIngredient7}</li>
        <li>${data.meals[0].strIngredient8}</li>
        <li>${data.meals[0].strIngredient9}</li>
        <li>${data.meals[0].strIngredient10}</li>
       `;
    });
};
