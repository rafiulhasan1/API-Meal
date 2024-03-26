// function loadedData(){
//     fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a')
//     .then(res => res.json())
//     .then(data => arra(data.meals))
// }

// function arra(meals){
//     console.log(meals)
//     for(const meal of meals){
//         console.log(meal);
//     }
// }

// loadedData();

const loadedData = (search) =>{
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`
    fetch(url)
    .then(res => res.json())
    .then(data => arra(data.meals))
}
const arra = (meals) =>{
    const divContainer = document.getElementById('div-container');
    divContainer.innerHTML = ``;
    meals.forEach(meal => {
        // console.log(meal);
        const colDiv = document.createElement('div');
    colDiv.classList.add('col');
    colDiv.innerHTML = `
    <div onclick="loadFood(${meal.idMeal})" class="card">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0 , 250)}</p>
        </div>
    </div>
    `;
    divContainer.appendChild(colDiv);
    });
}

const searchFood = () =>{
    const foodValue = document.getElementById('food-value');
    const valueF = foodValue.value;
    loadedData(valueF);
    // console.log(value)
    // foodValue.value = '';
}

const loadFood = (id) =>{
    // console.log(id)
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => detailData(data.meals))
}

const detailData = meals =>{
    const detailDiv = document.getElementById('detail-div');
    detailDiv.innerHTML = ``;
    meals.forEach(meal => {
        const ditail = document.createElement('div');
        ditail.classList.add('card');
        ditail.innerHTML = `
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${meal.strMeal}</h5>
          <p class="card-text">${meal.strInstructions.slice(0 , 200)}.</p>
          <a href="#" class="btn btn-primary">Go somewhere</a>
        </div>
        `;
        detailDiv.appendChild(ditail);
    })
}