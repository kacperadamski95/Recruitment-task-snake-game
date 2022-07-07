import { onSnake, expandSnake } from './snake.js'
import { randomGridPosition } from './grid.js'

let food = getRandomFoodPosition();
export let SNAKE_SPEED = 4;
const EXPANSION_RATE = 1
let counter = 0;

export function update() {
    if (onSnake(food)) {
        counter++;
        expandSnake(EXPANSION_RATE)
        displayScore(counter)
        speedUpdate(counter)
        food = getRandomFoodPosition()
    }
}

export function displayScore(counter) {
    document.getElementsByClassName("score")[0].innerHTML = counter;
}

export function draw(gameBoard) {
    const foodElement = document.createElement('div');
    foodElement.style.gridRowStart = food.y;
    foodElement.style.gridColumnStart = food.x;
    foodElement.classList.add('food');
    gameBoard.appendChild(foodElement);
};

function getRandomFoodPosition() {
    let newFoodPosition
    while (newFoodPosition == null || onSnake(newFoodPosition)) {
        newFoodPosition = randomGridPosition()
    }
    return newFoodPosition
}

export function speedUpdate(counter) {
    if (counter % 5 === 0) {
         SNAKE_SPEED *= 1.25;
    }
}
