
const siteUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const drinkCard = document.getElementById("all-drinks")
const drinkList = document.getElementById('drink-list')
const drinkStorrage =[]
const renderDrinkListItem = (drink) => {
  const {strDrink, strCategory, strDrinkThumb, strIngredient1, strInstructions} = drink;


  const drinkLi = document.createElement("li");
  // drinkLi.innerText = `${strDrink} : ${strCategory} : ${strIngredient1} : ${strInstructions}`;
  drinkLi.className = `drink ${strIngredient1.toLowerCase()}`;

  const drinkInstructions = document.createElement("p");
  drinkInstructions.innerText = strInstructions;

  const drinkName = document.createElement("h4");
  drinkName.innerText = strDrink;

  const drinkImg = document.createElement("img");
  drinkImg.src = strDrinkThumb;
  drinkImg.className = "drink-image";



  drinkLi.append(drinkImg,strDrink,drinkInstructions);

  drinkCard.append(drinkLi);
};




// event handlers

fetch(siteUrl)
.then(res => res.json())
.then(data => { 
  data.drinks.forEach(drink =>{
    drinkStorrage.push(drink)
    renderDrinkListItem(drink)
  
  })
})


const filterDrinks = (event) => {

  const allDrinkNodes = document.querySelectorAll('.drink')
  allDrinkNodes.forEach(drinkNode =>{
    if(drinkNode.className.includes(event.target.id)) {
      drinkNode.style.display = 'row'
    }else{
      drinkNode.style.display = 'none'
    }
  })
}
 
const displayAllDrinks = () => {
  const allDrinkNodes = document.querySelectorAll('.drink')
  allDrinkNodes.forEach(drinkNode =>{
    drinkNode.style.display = 'row'
   
  })
}
 



const vodkaBttn = document.getElementById('vodka')
vodkaBttn.addEventListener('click', filterDrinks)

const ginBttn = document.getElementById('gin')
ginBttn.addEventListener('click', filterDrinks)

const rumBttn = document.getElementById('rum')
rumBttn.addEventListener('click', filterDrinks)

const whiskeyBttn = document.getElementById('whiskey')
whiskeyBttn.addEventListener('click', filterDrinks)

const allDrinksBttn = document.getElementById('all-drink')
allDrinksBttn.addEventListener('click', displayAllDrinks)




 


