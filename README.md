BBC Recipe App (Technical Challenge)
---

Feature List:

Recipe List Page:
  No recipes:
    Display "Sorry, we currently have no recipes for you"

  One/Multiple recipes:
    Display ALL Recipe Name, Cooking Time, Main Ingredients

  More than 10 recipes:
    Display first 10 recipes
    Show page navigation elements

  Select a recipe:
    Go to recipe page

Recipe Page:
  Recipe doesn't exist:
    Display "Sorry, this recipe doesn't exist or may have been removed"

  Recipe exists:
    Display
      Recipe Name,
      Cooking Time,
      Recipe Image (each image has ImageURL field),
      Quantity x Ingredient (e.g. 4 x Chicken Breast)

Filter Recipes:
  No results:
    Display "Sorry, nothing matched your filter term"

  Filter by name:
    Display filtered results
    (E.g. Enter 'Chicken' -> Display Lemon Chicken, Chicken Caesar Salad)

  Filter by ingredient
    Enter 'Lettuce' -> Display Chicken Caesar Salad

  Filter by cooking time
    Display recipes with less/eql to selected maximum cooking time
    (E.g. Select "25 minutes" -> Display Chicken Caesar Salad

Star:
  Star a recipe:
    User X stars recipe Y
    System records recipe Y is starred by user X

  Unstar a recipe
    User X unstars the recipe Y
    System removes recipe Y from user X starred recipes

  Filter for starred recipes
    NONE - Display "Sorry, you don't currently have any starred recipes, get started by starring recipes you like"
    SOME - Display starred recipes
