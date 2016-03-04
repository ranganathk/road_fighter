var Game = {
  my_location: 0,
  moveRight: function() {
    if (Game.my_location < 40) {
      Game.my_location += 10;
      Game.car.css("left", Game.my_location + "vh");
    }
  },
  moveLeft: function() {
    if (Game.my_location > 0) {
      Game.my_location -= 10;
      Game.car.css("left", Game.my_location + "vh");
    }
  },
  init: function() {
    Game.resetEnemy();
    Game.timer = setInterval(function(){
      Game.checkCollision(); 
      if (Game.distance == 100) {
        Game.resetEnemy();
      }
      Game.distance += 1;
      Game.enemy.css("top", Game.distance + "vh");
    }, 30);
  },
  checkCollision: function() {
    if (Game.distance >= 60) {
      if (Game.my_location == Game.enemy_x) {
        Game.stopGame();
      }
    }
  },
  resetEnemy: function() {
    Game.distance = -20;
    Game.enemy_x = 10*Math.floor((4*Math.random()));
    Game.enemy.css("left", Game.enemy_x + "vh");
  },
  stopGame: function () {
    clearInterval(Game.timer);
  }
}; 

$(document).ready(function() {
  Game.car = $("#my_car");
  Game.enemy = $("#other_car");
  $(document).bind('keyup', 'right', function() {
    Game.moveRight();
  });
  $(document).bind('keyup', 'left', function() {
    Game.moveLeft();
  });
  $("#game").click(function() {
    Game.init();
  });
  
})

