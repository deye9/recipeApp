import {recipes, categories, ingredients} from './dataArrays';

// Recipes API Data
export const getAllRecipes = () => {
  return recipes;
};

export const getRecipeByID = recipeId => {
  return recipes.find(recipe => recipe.recipeId === recipeId);
};

export const getRecipeByCategoryID = categoryID => {
  return recipes.filter(recipe => recipe.categoryId === categoryID);
};

export const getNumberOfReceipes = categoryID => {
  return recipes.filter(recipe => recipe.categoryId === categoryID).length;
};

export const getRecipesByRecipeName = recipeName => {
  return recipes.filter(recipe =>
    recipe.title.toUpperCase().includes(recipeName),
  );
};

export const getRecipesByCategoryName = categoryName => {
  const recipesArray = [];
  const nameUpper = categoryName.toUpperCase();
  categories.map(data => {
    if (data.name.toUpperCase().includes(nameUpper)) {
      const recipeList = getRecipeByCategoryID(data.id); // return a vector of recipes
      recipeList.map(item => {
        recipesArray.push(item);
      });
    }
  });
  return recipesArray;
};

// Categories API Data
export const getAllCategories = () => {
  return categories;
};

export const getCategoryName = categoryID => {
  return categories.find(category => category.id === categoryID).name;
};

// Ingredients API Data
export const getAllIngredients = () => {
  return ingredients;
};

export const getIngredientById = ingredientID => {
  return ingredients.find(
    ingredient => ingredient.ingredientId === ingredientID,
  );
};

export const getIngredientsByByRecipeId = recipeID => {
  // Get all ingredients for the recipe
  const recipe = getRecipeByID(recipeID);

  // Loop through all ingredients and get the ingredient id and quantity
  const ingredientList = [];
  recipe.ingredients.map(ingredient => {
    ingredientList.push({
      ...getIngredientById(ingredient[0]),
      quantity: ingredient[1],
    });
  });

  return ingredientList;
};
