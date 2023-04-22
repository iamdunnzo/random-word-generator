class Game {
  constructor() {
    this.words = [];
    this.timer = null;
    this.time = 0;
    this.score = 0;
    this.currentWord = null;
    this.wordsContainer = document.getElementById("words-container");
    this.input = document.getElementById("user-input");
    this.scoreEl = document.getElementById("score");
    this.timeEl = document.getElementById("time");
    this.startBtn = document.getElementById("start-btn");
    this.resetBtn = document.getElementById("reset-btn");

    this.startBtn.addEventListener("click", () => this.startGame());
    this.input.addEventListener("input", () => this.checkInput());
    this.resetBtn.addEventListener("click", () => this.resetGame());
  }

  generateWords() {
    for (let i = 0; i < 100; i++) {
      const word = this.generateRandomWord();
      this.words.push(word);
      const wordEl = document.createElement("span");
      wordEl.classList.add("word");
      wordEl.innerText = word;
      this.wordsContainer.appendChild(wordEl);
    }
  }

  generateRandomWord() {
    const words = [
      "apple",
      "banana",
      "cherry",
      "orange",
      "grape",
      "pineapple",
      "kiwi",
      "mango",
      "pear",
      "watermelon",
      "strawberry",
      "blueberry",
      "raspberry",
      "blackberry",
      "peach",
      "plum",
      "apricot",
      "pomegranate",
      "lemon",
      "lime",
      "grapefruit",
      "melon",
      "coconut",
      "avocado",
      "pepper",
      "carrot",
      "broccoli",
      "potato",
      "tomato",
      "lettuce",
      "cucumber",
      "onion",
      "garlic",
      "ginger",
      "pumpkin",
      "eggplant",
      "corn",
      "bean",
      "pea",
      "chickpea",
      "lentil",
      "rice",
      "noodle",
      "spaghetti",
      "pizza",
      "burger",
      "hotdog",
      "sandwich",
      "pancake",
      "waffle",
      "fries",
      "soup",
      "salad",
      "steak",
      "chicken",
      "fish",
      "shrimp",
      "lobster",
      "crab",
      "sushi",
      "rice",
      "cake",
      "cookie",
      "ice cream",
     
    "donut",
    "croissant",
    "bagel",
    "toast",
    "biscuit",
    "jam",
    "butter",
    "honey",
    "cheese",
    "yogurt",
    "milk",
    "coffee",
    "tea",
    "juice",
    "soda",
    "water",
    "beer",
    "wine",
    "cocktail",
    "whiskey",
    "vodka",
    "rum",
    "gin",
    "tequila",
    "brandy",
    "champagne",
    "syrup",
    "sauce",
    "mustard",
    "ketchup",
    "mayonnaise",
    "vinegar",
    "oil",
    "salt",
    "pepper",
    "sugar",
    "flour",
    "baking powder",
    "baking soda",
    "yeast",
    "cinnamon",
    "vanilla",
    "chocolate",
    "cocoa",
    "nutella",
    "peanut butter",
    "almond butter",
    "cashew butter",
    "hazelnut butter",
    "macadamia nut butter",
    "pistachio butter",
    "walnut butter",
    "sunflower seed butter",
    "almond",
    "cashew",
    "hazelnut",
    "macadamia nut",
    "pistachio",
    "walnut",
    "pecan",
    "peanut",
    "sunflower seed",
    "pumpkin seed",
    "sesame seed",
    "chia seed",
    "flax seed",
    "quinoa",
    "oatmeal",
    "granola",
    "cereal",
    "bread",
    "baguette",
    "croissant",
    "panini",
    "taco",
    "burrito",
    "enchilada",
    "quesadilla",
    "nachos",
    "guacamole",
    "salsa",
    "tortilla",
    "sourdough",
    "rye",
    "whole wheat",
    "white",
    "multigrain",
    "gluten-free",
    "kosher",
    "halal",
    "organic",
    "vegetarian",
    "vegan",
    "paleo",
    "keto",
    "low-carb",
    "low-fat",
    "low-sugar",
    "high-protein",
    "high-fiber",
    "low-sodium",
    "heart-healthy",
    "diabetic-friendly",
    "kid-friendly",
    "budget-friendly",
    "quick",
    "easy",
    "healthy",
    "delicious",
    "tasty",
    "yummy",
    "scrumptious",
    "mouth-watering",
    "flavorful",
    "spicy",
    "sweet",
    "sour",
    "salty",
    "savory",
    "bitter",
    "umami",
    "creamy",
    "crispy",
    "crunchy",
    "juicy",
    "tender",
    "succulent",
    "rich",
    "fatty",
    "greasy",
    "fried",
    "grilled",
    "roasted",
    "baked",
    "boiled",
    "steamed",
    "sauteed",
    "stir-fried",
    "marinated",
    "pickled",
    "fermented",
    "cured",
    "smoked",
    "raw",
    "cooked",
    "overcooked"
];
}

class Games {
constructor() {
this.words = [];
this.currentWordIndex = 0;
this.score = 0;
this.timer = null;
this.timeRemaining = 60;
this.gameStarted = false;
this.gameEnded = false;
}

startGame() {
this.gameStarted = true;
this.gameEnded = false;
this.score = 0;
this.timeRemaining = 60;
this.currentWordIndex = 0;
this.words = [];
for (let i = 0; i < 100; i++) {
const index = Math.floor(Math.random() * wordList.length);
this.words.push(wordList[index]);
}
this.showWord(this.currentWordIndex);
this.updateTimer();
}

showWord(index) {
const wordDisplay = document.querySelector(".word-display");
wordDisplay.textContent = this.words[index];
}

updateTimer() {
const timerDisplay = document.querySelector(".timer-display");
timerDisplay.textContent = `Time remaining: ${this.timeRemaining} seconds`;
this.timer = setInterval(() => {
this.timeRemaining--;
timerDisplay.textContent = `Time remaining: ${this.timeRemaining} seconds`;
if (this.timeRemaining === 0) {
clearInterval(this.timer);
this.gameOver();
}
}, 1000);
}

handleInput(event) {
if (event.keyCode === 13) {
const input = document.querySelector(".word-input");
const currentWord = this.words[this.currentWordIndex];
if (input.value.trim().toLowerCase() === currentWord.toLowerCase()) {
input.classList.remove("wrong");
input.classList.add("right");
this.score++;
} else {
input.classList.remove("right");
input.classList.add("wrong");
this.score--;
}
input.value = "";
this.currentWordIndex++;
if (this.currentWordIndex < this.words.length) {
this.showWord(this.currentWordIndex);
} else {
clearInterval(this.timer);
this.gameOver();
}
}
}

gameOver() {
this.gameEnded = true;
this.gameStarted = false;
const wordDisplay = document.querySelector(".word-display");
wordDisplay.textContent = "Game over!";
const timerDisplay = document.querySelector(".timer-display");
timerDisplay.textContent = `Final score: ${this.score}`;
const input = document.querySelector(".word-input");
input.value = "";
}
}

const game = new Game();

const startButton = document.querySelector(".start-button");
startButton.addEventListener("click", () => {
game.startGame();
const input = document.querySelector(".word-input");
input.focus();
});

const resetButton = document.querySelector(".reset-button");
resetButton.addEventListener("click", () => {
if (game.score >= 10 && game.timeRemaining > 0) {
game.startGame();
const input = document.querySelector(".word-input");
input.focus();
}
});

const wordInput = document.querySelector(".word-input");
wordInput.addEventListener("keyup", (event) => {
if (game.gameStarted && !game.gameEnded) {
game.handleInput(event);
}
  });