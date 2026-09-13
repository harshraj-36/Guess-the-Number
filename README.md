# 🎯 Guess the Number #

A responsive browser-based number guessing game built with **HTML, CSS, and Vanilla JavaScript**.

The player has **10 chances** to guess a randomly generated number between **1 and 100**. The game provides instant feedback, tracks chances and score, supports the **Enter key**, and includes an animated responsive interface.

---

## LIVE DEMO 🎮
[Play Guess-the-Number ](https://harshraj-36.github.io/Guess-the-Number/)

---

## 📌 About the Project

I built this project while learning how JavaScript works with a real HTML interface.

The first version of the game was based on JavaScript's `prompt()`, `alert()`, and `confirm()` functions. I then converted it into a proper browser UI using HTML elements, DOM manipulation, event listeners, input validation, and CSS animations.

This project helped me understand how JavaScript can control and update elements on a webpage based on user interaction.

---

## ✨ Features

* 🎲 Random number generated between **1 and 100**
* 🎯 Maximum of **10 chances** per game
* 💡 Higher/lower feedback after each guess
* 🛡️ Input validation
* 🏆 Score system
* 🎉 Win detection
* 💀 Game-over detection
* 🔄 Restart without refreshing the page
* ⌨️ Enter key support
* 🔔 Animated game messages
* 📱 Responsive design
* 🌙 Modern dark-themed interface

---

## 🎮 How to Play

1. Enter a number between **1 and 100**.
2. Click **Guess** or press **Enter**.
3. The game tells you whether your guess is:

   * Lower than the target number
   * Higher than the target number
   * Correct
4. Each attempt uses one chance.
5. Guess the number before all **10 chances** are used.
6. If you win, your score is calculated based on the number of wrong attempts.
7. Use **Restart** to begin a new game.

---

## 🏆 Scoring

The game starts with a score of **100**.

Every wrong attempt reduces the score by **10 points**.

### Formula

```text
Score = 100 - (10 × wrong attempts)
```

| Wrong Attempts | Score |
| -------------: | ----: |
|              0 |   100 |
|              1 |    90 |
|              2 |    80 |
|              3 |    70 |
|              4 |    60 |
|              5 |    50 |
|             10 |     0 |

The score is displayed when the player successfully guesses the number.

---

## 🛡️ Input Validation

Before processing a guess, the game checks the entered value.

It handles:

* Empty input
* Non-integer values
* Numbers below `1`
* Numbers above `100`

For example, entering `-150` will not be treated as a valid guess.

Invalid attempts still consume a chance, keeping the game rules consistent.

---

## 🧠 How It Works

The basic game flow is:

The basic game flow is:
Start
  ↓
Generate Random Number
  ↓
Give Player 10 Chances
  ↓
Enter Guess
  ↓
Validate Input
  ↓
Compare Guess
  ↓
Lower / Higher / Correct
  ↓
Update Message & Chances
  ↓
Win or Run Out of Chances
  ↓
Restart


---

## 🔢 Random Number Generation

The target number is generated using JavaScript's `Math.random()`.

The game uses a minimum value of `1` and a maximum value of `100`, allowing any integer in that range to become the target.

The random-number logic is kept inside a reusable function so that a new number can easily be generated whenever the game starts or restarts.

---

## 🌐 DOM Manipulation

One of the main goals of this project was learning **DOM manipulation**.

JavaScript accesses HTML elements using:

text
document.getElementById()


The game uses DOM elements for:

* User input
* Guess button
* Restart button
* Chances
* Score
* Game messages

The input value is read using:

text
.value


while the information displayed on the page is updated using:

text
.textContent


This allows the webpage to change dynamically without being reloaded.

---

## 🖱️ Event Handling

The game responds to different user actions using event listeners.

### Guess Button

The **Guess** button listens for a `click` event and starts the guessing process.

### Restart Button

The **Restart** button listens for a `click` event and resets the complete game state.

### Enter Key

The input field listens for a `keydown` event.

When the player presses **Enter**, the same guessing process used by the Guess button is triggered.

This avoids writing the guessing logic twice.

---

## 🎯 Game State

The game maintains several variables to keep track of the current round.

| Variable       | Purpose                           |
| -------------- | --------------------------------- |
| `RandomNumber` | Stores the target number          |
| `guessnum`     | Stores the player's current guess |
| `chance`       | Stores remaining attempts         |
| `wrongans`     | Counts incorrect attempts         |
| `score`        | Stores the player's score         |
| `won`          | Tracks whether the player has won |

When **Restart** is pressed, these values are reset and a new target number is generated.

---

## 🏆 Winning Logic

The player's guess is compared with the generated number.

There are three possible results:

### Guess is Lower

The player is informed that their guess is lower than the target and one chance is removed.

### Guess is Higher

The player is informed that their guess is higher than the target and one chance is removed.

### Guess is Correct

The game:

* Sets the win state
* Displays the success message
* Calculates the score
* Shows the remaining chances
* Prevents further guesses until restart

---

## 💀 Game Over

If all 10 chances are used without finding the correct number:

* The game displays a game-over message.
* The correct number is revealed.
* Additional guesses are disabled.
* The player can start another round using **Restart**.

---

## 🎨 User Interface

The interface uses a dark, modern game-inspired design.

Some of the main UI elements include:

* Glass-style game container
* Blue and purple accents
* Gradient heading
* Animated background effects
* Styled input field
* Interactive buttons
* Focus effects
* Animated notifications
* Responsive layout

The design is created entirely with CSS without requiring a UI framework.

---

## 🛠️ Technologies Used

### HTML5

Used for the structure of the webpage, including the input field, buttons, game information, and message areas.

### CSS3

Used for:

* Layout
* Responsive design
* Colors
* Gradients
* Shadows
* Animations
* Transitions
* Button and input styling

### JavaScript

Used for the complete game logic, including:

* Random number generation
* Input handling
* Validation
* DOM manipulation
* Event handling
* Chance tracking
* Score calculation
* Win/loss detection
* Restart functionality
* Keyboard interaction

No external JavaScript framework or library is required.

---

## 📂 Project Structure

Guess-the-Number/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

### `index.html`

Contains the structure of the game interface.

### `style.css`

Contains the complete visual design and responsive styling.

### `script.js`

Contains the game logic and interaction.

### `README.md`

Contains information about the project, how it works, and the concepts used.

---

## 🧩 Concepts I Practiced

This project helped me practice:

### HTML

* HTML page structure
* Input elements
* Buttons
* IDs
* Linking CSS and JavaScript

### CSS

* Flexbox
* Responsive design
* Media queries
* CSS variables
* Gradients
* Transitions
* Animations
* Pseudo-elements
* Focus states

### JavaScript

* Variables
* Functions
* Function parameters
* `Math.random()`
* Conditional statements
* Comparison operators
* `Number()`
* `Number.isInteger()`
* DOM manipulation
* `getElementById()`
* `.value`
* `.textContent`
* Event listeners
* Keyboard events
* Input validation
* Game state management

---

## 🚀 Running the Project

### 1. Clone the repository

bash
git clone <your-repository-link>


### 2. Open the project

Open the project folder in **Visual Studio Code**.

### 3. Run the game

Open `index.html` in a browser.

For development, you can also use the **Live Server** extension in VS Code.

No backend, database, or installation process is required.

---

## 📱 Compatibility

The game is designed to work on modern browsers, including:

* Google Chrome
* Microsoft Edge
* Mozilla Firefox
* Safari
* Android browsers

The layout also adapts to smaller screens for mobile use.

---

## 🔮 Future Improvements

Some features I may add in future versions:

* 🔊 Sound effects
* 🎵 Victory and error sounds
* 🎚️ Difficulty levels
* ⏱️ Timer mode
* 🏅 High-score system
* 💾 `localStorage` for saved scores
* 📊 Game statistics
* 🎮 Additional game modes
* ✨ More advanced animations

---

## 📸 Project Status

**Status: Functional ✅**

The current version includes the complete core gameplay, responsive UI, input validation, scoring, restart functionality, keyboard support, and animated feedback.

---

## 👨‍💻 Author

**Harsh Raj**

B.Tech Computer Science & Engineering

This project is part of my journey in learning **JavaScript, frontend development, DOM manipulation, Git, and GitHub**.

---

## ⭐ Feedback

This is a learning project, and I plan to keep improving it as I learn more about frontend development.

Feel free to explore the code, try the game, and suggest improvements.

---

## 📄 License

This project is created for learning and educational purposes.
