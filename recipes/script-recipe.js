const getRecipeIdFromUrl = () => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get("id");
};

const displayRecipe = (recipe) => {
  document.querySelector("#recipe-title").innerText = ` Aprenda a fazer 
    ${recipe.title}`;
  document.querySelector("#recipe-image").src = recipe.image;
  document.querySelector("#recipe-image").alt = `Imagem de ${recipe.title}`;
  document.querySelector("#recipe-description").innerText = recipe.description;
  document.querySelector(
    "#recipe-difficulty"
  ).innerText = ` ${recipe.difficulty}`;
  document.querySelector("#recipe-prep-time").innerText = ` ${recipe.prepTime}`;
  document.querySelector("#recipe-servings").innerText = ` ${recipe.servings}`;

  const ingredientsList = document.querySelector("#recipe-ingredients");
  ingredientsList.innerHTML = "";
  recipe.ingredients.forEach((ingredient) => {
    const li = document.createElement("li");
    li.textContent = ingredient;
    ingredientsList.appendChild(li);
  });

  document.querySelector("#recipe-instructions").innerText =
    recipe.instructions;
};

document.addEventListener("DOMContentLoaded", () => {
  const recipeId = getRecipeIdFromUrl();
  if (recipes[recipeId]) {
    displayRecipe(recipes[recipeId]);
  }
});
