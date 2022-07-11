const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const ingredientsRef = ingredients.map(ingredient => {
  const ingredientItemRef = document.createElement('li');
  ingredientItemRef.textContent = ingredient;
  ingredientItemRef.classList.add('item');

  return ingredientItemRef;
});

const ingredientsListRef = document.querySelector('#ingredients');
ingredientsListRef.append(...ingredientsRef);
