const categoriesRef = document.querySelectorAll('li.item');

console.log('Number of categories:', categoriesRef.length);

categoriesRef.forEach(categorie => {
  const categorieHeaderRef = categorie.querySelector('h2');
  console.log('Category:', categorieHeaderRef.textContent);

  const categorieItemsRef = categorie.querySelectorAll('li');
  console.log('Elements:', categorieItemsRef.length);
});
