

fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
.then(res => res.json())
.then(data => {


console.log(data);
//Event Listener that will show the picture of the random drink the user has ended up with.
document.querySelector('button').addEventListener('click',selectedDrinkPhoto);
//Event Listener that will fetch the next random drink on click.
document.getElementById('next-button').addEventListener('click', nextDrink);

console.log(data);


    //Function that appends the new image from the API to the DOM.
    function selectedDrinkPhoto(){

        let newImage = document.querySelector('img');
        newImage.src = data.drinks[0].strDrinkThumb;

        const li =  document.createElement('li');
        //Placing Text into list
  
        li.textContent = data.drinks[0].strInstructions;
  
        console.log(li);
        //append the li to the ol
        document.querySelector('ol').appendChild(li);
  
      //Creating the drinkname variable
        const drinkName = document.createElement('h4');
        
        drinkName.textContent = data.drinks[0].strDrink;
  
        document.querySelector('h4').appendChild(drinkName);
  
        
        return newImage.src;
        }
    //function that will let users select a new random drink to try

function nextDrink(){
    if (data.drinks[0].strDrinkThumb){

    fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
    .then(res => res.json())
    .then(data => {
    
    console.log(data);
    
    let newImage2 = document.querySelector('img');
    newImage2.src = data.drinks[0].strDrinkThumb;
      //Creating list

      const li =  document.createElement('li');
      //Placing Text into list

      li.textContent = data.drinks[0].strInstructions;

      console.log(li);
      //append the li to the ol
      document.querySelector('ol').appendChild(li);

    //Creating the drinkname variable
      const drinkName = document.createElement('h4');
      drinkName.textContent = data.drinks[0].strDrink;

      document.querySelector('h4').appendChild(drinkName);




    return newImage2.sr;


  



})

.catch(err => {
    console.log('error' + err);
})

    } else{console.log("Select a random drink")}


}

})






 



