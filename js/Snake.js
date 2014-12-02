var NUM_INTIAL_SECTIONS = 3;
// Directions
var UP = 0;
var UP_KEY_CODE = 38;
var DOWN = 1;
var DOWN_KEY_CODE = 40;
var LEFT = 2;
var LEFT_KEY_CODE = 37;
var RIGHT = 3;
var RIGHT_KEY_CODE = 39;

function Snake() {
  this.img = document.createElement('img');
  this.img.src = 'images/snake2.png';
}

Snake.prototype.setupSnake = function(maxX, maxY) {
  // TODO
};
Snake.prototype.hasCollided = function(maxX, maxY) {
  // TODO
};

Snake.prototype.endMove = function(didGrow) {
  // TODO
};

Snake.prototype.startMove = function() {
  this.direction = this.nextDirection;
  // TODO
};

Snake.prototype.draw = function(context, spacing) {
  // TODO: Draw itself
  // TODO: Draw each section
};

Snake.prototype.init = function(maxX, maxY) {
  this.setupListeners();
  this.setupSnake(maxX, maxY);
};

Snake.prototype.setupListeners = function() {
  this.direction = UP;
  this.nextDirection = UP;
  var snake = this;
  document.addEventListener('keydown', function(e) {
    if (e.keyCode === UP_KEY_CODE && snake.direction !== DOWN) {
      snake.nextDirection = UP;
    } else if (e.keyCode === DOWN_KEY_CODE && snake.direction !== UP) {
      snake.nextDirection = DOWN;
    } else if (e.keyCode === LEFT_KEY_CODE && snake.direction !== RIGHT) {
      snake.nextDirection = LEFT;
    } else if (e.keyCode === RIGHT_KEY_CODE && snake.direction !== LEFT) {
      snake.nextDirection = RIGHT;
    } else {
      return;
    }
    e.preventDefault();
  });
};
