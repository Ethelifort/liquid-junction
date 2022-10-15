fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {

//Event Listener that will show the picture of the random drink the user has ended up with.
//Event Listener that will fetch the next random drink on click.

document.getElementById('next-button').addEventListener('click', nextDrink);

function nextDrink(){
    if (data.drinks[0].strDrinkThumb){

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        
    let newImage = document.querySelector('img');
    newImage.src = data.drinks[0].strDrinkThumb;
      //Creating list

      let li =  document.createElement('li');
      //Placing Text into list

      li.textContent = data.drinks[0].strInstructions;
      
         //Creating the drinkname variable
         const drinkName = document.createElement('h4');
         drinkName.textContent = data.drinks[0].strDrink;
   
         document.querySelector('ol').appendChild(drinkName);

         //Inserts text into the h3
         const instructions = document.querySelector('h3');
         instructions.textContent = "Instructions";

      //append the li to the ol
      document.querySelector('ol').appendChild(li);
//-----------------------------------------------------------------------------------------------------------------------------------------------------
    // Storing all ingredients in a array.
      li =  document.createElement('li');
      let arr = [];
      arr.push(data.drinks[0].strIngredient1); arr.push(data.drinks[0].strIngredient2); arr.push(data.drinks[0].strIngredient3); arr.push(data.drinks[0].strIngredient4); arr.push(data.drinks[0].strIngredient5);
      arr.push(data.drinks[0].strIngredient6); arr.push(data.drinks[0].strIngredient7); arr.push(data.drinks[0].strIngredient8); arr.push(data.drinks[0].strIngredient9);
      arr.push(data.drinks[0].strIngredient10); arr.push(data.drinks[0].strIngredient11); arr.push(data.drinks[0].strIngredient12);arr.push(data.drinks[0].strIngredient13); 
      arr.push(data.drinks[0].strIngredient14);  arr.push(data.drinks[0].strIngredient15);
    //Filtering invalid ingredients
      let allIngredients = arr.filter((a)=> a != null);
//------------------------------------------------------------------------------------------------------------------------------------------------------------
      li.textContent = allIngredients.join(",");
         //Inserts text into the h3
         const ingredients = document.getElementById('ingredients');
         ingredients.textContent = "Ingredients";
        //append the li to the ul
        document.querySelector('ul').appendChild(li);
    return newImage.sr;
})
.catch(err => {
    console.log('error' + err);
})
    } else{alert("Select a random drink")}
}
})