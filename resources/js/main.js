

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {


console.log(data);
//Event Listener that will show the picture of the random drink the user has ended up with.
//Event Listener that will fetch the next random drink on click.
document.getElementById('next-button').addEventListener('click', nextDrink);

console.log(data);

function nextDrink(){
    if (data.drinks[0].strDrinkThumb){

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
        
    let newImage = document.querySelector('img');
    newImage.src = data.drinks[0].strDrinkThumb;
      //Creating list

      const li =  document.createElement('li');
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

    return newImage.sr;

})

.catch(err => {
    console.log('error' + err);
})

    } else{console.log("Select a random drink")}
}

})






 



