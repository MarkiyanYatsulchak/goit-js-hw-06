const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.querySelector('#ingredients');

const ingredientItem = ingredients.map(elem => {
  
  const ingredientsElement = document.createElement('li');

  ingredientsElement.classList.add('item');

  ingredientsElement.textContent = elem;

  return ingredientsElement
});

ingredientsList.append(...ingredientItem);


