// Use at least 2 classes
class Sandwich {
    constructor(name, ingredients) {
      this.name = name;
      this.ingredients = ingredients;
    }
  }
  
//   Use at least one array
  class Menu {
    constructor() {
      this.sandwiches = [];
    }
  
    // Menu options to create, view & delete elements
    createSandwich(name, ingredients) {
      const sandwich = new Sandwich(name, ingredients);
      this.sandwiches.push(sandwich);
      console.log(`"${name}" sandwich created successfully.`);
    }
  
    viewSandwiches() {
      console.log("Peanut Butter & Jelly Sandwiches Menu:");
      this.sandwiches.forEach((sandwich, index) => {
        console.log(`${index + 1}. ${sandwich.name} - Ingredients: ${sandwich.ingredients.join(", ")}`);
      });
    }
  
    deleteSandwich(index) {
      if (index >= 0 && index < this.sandwiches.length) {
        const deletedSandwich = this.sandwiches.splice(index, 1)[0];
        console.log(`"${deletedSandwich.name}" sandwich deleted successfully.`);
      } else {
        console.log("Invalid sandwich index.");
      }
    }
  }
  
  let menu = new Menu();
  
  function promptMenu() {
    const choice = prompt(`Menu Options:
    1. Create Sandwich
    2. View Sandwiches
    3. Delete Sandwich
    Enter option number: `);
  
    // Sandwich options: classic, nutty delight, sweet & savory
    switch (choice) {
      case "1":
        createSandwich();
        break;
      case "2":
        menu.viewSandwiches();
        break;
      case "3":
        deleteSandwich();
        break;
      default:
        console.log("Invalid option. Please choose again.");
        promptMenu();
    }
  }
  
  function createSandwich() {
    let name = prompt("Enter sandwich name:");
    let ingredients = prompt("Enter ingredients (separated by commas):").split(",").map(item => item.trim());
    menu.createSandwich(name, ingredients);
    promptMenu();
  }
  
  function deleteSandwich() {
    const index = parseInt(prompt("Enter index of sandwich to delete:")) - 1;
    menu.deleteSandwich(index);
    promptMenu();
  }
  
  promptMenu();
  