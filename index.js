document.addEventListener('DOMContentLoaded',() =>{
  listeners()
  fetchData()
})

const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

function likeCallback(e) {
  const heart = e.target
      if (heart.innerText === EMPTY_HEART){
        heart.innerText = FULL_HEART
        heart.className = "activated-heart"
      } else {
        heart.innerText = EMPTY_HEART
        heart.className = " "

      }

}

const siteUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'
const drinkCard = document.getElementById("all-drinks")
const drinkList = document.getElementById('drink-list')
const drinkStorrage =[]

const renderDrinkListItem = (drink) => {
  const {strDrink, strCategory, strDrinkThumb, strIngredient1, strInstructions} = drink;
  const drinkLi = document.createElement("li");
  drinkLi.className = `drink ${strIngredient1.toLowerCase()}`;

  const drinkInstructions = document.createElement("p");
  drinkInstructions.innerText = strInstructions;

  const likerButton = document.createElement('span')
  likerButton.innerText = EMPTY_HEART;
  likerButton.addEventListener("click", likeCallback );

  const drinkName = document.createElement("h4");
  drinkName.innerText = strDrink;

  const drinkImg = document.createElement("img");
  drinkImg.src = strDrinkThumb;
  drinkImg.className = "drink-image";

  drinkLi.append(drinkImg,drinkName,drinkInstructions,likerButton);
  drinkCard.append(drinkLi);

  drinkStorrage.push(drinkLi)
};

function fetchData(){
  fetch(siteUrl)
  .then(res => res.json())
  .then(data => { 
    data.drinks.forEach(drink =>{
      renderDrinkListItem(drink)
    
    })
  })
}

// event handlers
const filterDrinks = (event) => {
  drinkStorrage.forEach(drinkNode =>{
    if(drinkNode.className.includes(event.target.id)) {
      drinkNode.style.display = ''
    }else{
      drinkNode.style.display = 'none'
    }
  })
}
 
const displayAllDrinks = () => {
  drinkStorrage.forEach(drinkNode =>{
    drinkNode.style.display = ''
   
  })
}

function listeners() {
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
}

 


