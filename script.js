const displayAllRecipes = () => {
  const recipesList = document.getElementById("recipes-list");
  recipesList.innerHTML = ""; // Limpa a lista de receitas

  Object.keys(recipes).forEach((id) => {
    const recipe = recipes[id];

    const recipeItem = document.createElement("li");
    recipeItem.classList.add("recipe-item");

    recipeItem.innerHTML = `
      <img class="el-li" src="./assets/brown-element-ul.png" alt="fundo" />
      <div class="food-portrait">
        <img class="recipe-image" src="${recipe.image}" alt="Imagem de ${recipe.title}" />
      </div>
      <div class="text-content">
        <h3 class="title-recipe">${recipe.title}</h3>
        <p class="recipe-description">${recipe.description}</p>
        <a href="./recipes/index.html?id=${id}" id="recipe-link">ver receita</a>
      </div>
    `;

    recipesList.appendChild(recipeItem);
  });
};

document.addEventListener("DOMContentLoaded", displayAllRecipes);

const displayFilteredRecipes = (filterFunction) => {
  const recipesList = document.getElementById("recipes-list");
  recipesList.innerHTML = "";

  Object.keys(recipes).forEach((id) => {
    const recipe = recipes[id];
    if (filterFunction(recipe)) {
      const recipeItem = document.createElement("li");
      recipeItem.classList.add("recipe-item");

      recipeItem.innerHTML = `
        <img class="el-li" src="./assets/brown-element-ul.png" alt="fundo" />
        <div class="food-portrait">
          <img class="recipe-image" src="${recipe.image}" alt="Imagem de ${recipe.title}" />
        </div>
        <div class="text-content">
          <h3 class="title-recipe">Aprenda a fazer <br>
          ${recipe.title}</h3>
          <p class="recipe-description">${recipe.description}</p>
          <a href="./recipes/index.html?id=${id}" id="recipe-link">ver receita</a>
        </div>
      `;

      recipesList.appendChild(recipeItem);
    }
  });
};

const filterEasyRecipes = () => {
  displayFilteredRecipes((recipe) => recipe.difficulty === "Fácil");
};

const filterMomentRecipes = () => {
  displayFilteredRecipes((recipe) => recipe.momentRecipes);
};

const filterQuickRecipes = () => {
  displayFilteredRecipes(
    (recipe) => recipe.prepTime && parseInt(recipe.prepTime) <= 30
  );
};

const filterDesserts = () => {
  displayFilteredRecipes((recipe) => recipe.desserts);
};

const filterTopRatedRecipes = () => {
  displayFilteredRecipes((recipe) => recipe.rate && recipe.rate >= 4.5);
};


document.addEventListener("DOMContentLoaded", displayAllRecipes);

document.querySelectorAll(".links-box a").forEach((link) => {
     
    link.addEventListener("click", (event) => {
        event.preventDefault();
        const filterType = event.target.textContent.trim().toLowerCase();

        switch (filterType) {
          case "receitas do momento":
            filterMomentRecipes();
            break;
          case "receitas fáceis":
            filterEasyRecipes();
            break;
          case "receitas rápidas":
            filterQuickRecipes();
            break;
          case "sobremesas":
            filterDesserts();
            break;
          case "receitas bem avaliadas":
            filterTopRatedRecipes();
            break;
          default:
            displayAllRecipes();
            break;
        }
      });
    });