# React Counter App Using `useReducer`

This project is a simple **React Counter Application** built using the `useReducer` hook. The app allows the user to increase and decrease a counter value with two buttons: **Inc** and **Dec**.

---

## 🛠️ **Project Setup and Installation**
### Clone the repository:  
```
git clone <repository-url>
```
### Navigate to the project directory:
```
cd react-counter-app
```
### Install dependencies:
```
npm install
```
### Start the development server:
```
npm run dev
```
## 🚀How It Works
### 1. State Management with useReducer
The useReducer hook is used to manage the state of the counter.
useReducer takes two arguments:
Reducer function – Handles the state updates based on the action type.
Initial state – The starting value of the state (in this case, 0).

### 2. Reducer Function
The reducer function takes two parameters:

state – The current state value.
action – An object describing what kind of state update should happen.
```
function reducer(state, action) {
  switch (action.type) {
    case "INC_COUNT":
      return state + 1;
    case "DEC_COUNT":
      if (state === 0) return state; // Prevent negative values
      return state - 1;
    default:
      return state;
  }
}
```

### 3. Dispatching Actions
dispatch is used to trigger state updates.
The handleInc and handleDec functions dispatch specific actions:
```
const handleInc = () => {
  dispatch({ type: "INC_COUNT" });
};

const handleDec = () => {
  dispatch({ type: "DEC_COUNT" });
};
```

### 4. UI Rendering
The count value is displayed in a <p> element.
Two buttons (Inc and Dec) are provided to update the state.
```
<>
  <p>count={count}</p>
  <button onClick={handleInc}>Inc</button>
  <button onClick={handleDec}>Dec</button>
</>
```
## ✅ Features
✔️ State management using useReducer
✔️ Increment and decrement functionality
✔️ Prevents negative values for the counter

### 🏆 Why useReducer Instead of useState?
useReducer is useful when:
The state logic is complex.
The next state depends on the previous state.
Multiple state updates need to be managed in a predictable way.


## 📂 Project Structure

├── src
│   ├── App.css
│   ├── App.jsx
│   └── Main.js
├── package.json
└── README.md
## 🚀 How to Run
Start the development server:
```
npm run dev
```
Open your browser and go to:
```
http://localhost:3000

```
### 🌟 Future Improvements
```
Add reset button.
Add custom step increment/decrement.
Add styling for better user experience.
```
## 💡 Summary
This project demonstrates how to use useReducer for state management in a simple React counter app. The reducer function defines how the state updates based on dispatched actions, and the useReducer hook makes it easy to manage state transitions cleanly.