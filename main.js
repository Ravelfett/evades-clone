var canvas = document.getElementById("game");
var context = canvas.getContext("2d"),
  width = canvas.width,
  height = canvas.height;
var inMenu = true;
var fov = 32;
var keys = [];
var mousePos = new Vector(0, 0);
var mouse = false;
var scale = 1;
var loaded = false;
var game = new Game();

function loadMain() {
  game.worlds[0] = new World(new Vector(0, 0), 0, centralCore)
  game.worlds[1] = new World(new Vector(0, 80), 1, hauntedHalls)
  game.worlds[2] = new World(new Vector(0, 160), 2, peculiarPyramid)
  game.worlds[3] = new World(new Vector(0, 525), 3, wackyWonderland)
  game.worlds[4] = new World(new Vector(0, 570), 4, glacialGorge)
  game.worlds[5] = new World(new Vector(0, 615), 5, viciousValley)
  game.worlds[6] = new World(new Vector(0, 660), 6, humongousHollow)
  game.worlds[7] = new World(new Vector(0, 705), 7, eliteExpanse);
  game.worlds[8] = new World(new Vector(0, 750), 8, centralCoreHard);
  game.worlds[9] = new World(new Vector(0, 795), 9, dangerousDistrict);
  game.worlds[10] = new World(new Vector(0, 840), 10, quietQuarry);
  game.worlds[11] = new World(new Vector(0, 885), 11, monumentalMigration);
  game.worlds[12] = new World(new Vector(0, 930), 12, ominousOccult);
  game.worlds[13] = new World(new Vector(0, 970), 13, viciousValleyHard);
  game.worlds[14] = new World(new Vector(0, 1015), 14, frozenFjord);
  game.worlds[15] = new World(new Vector(-61, 1365), 15, restlessRidge);
  game.worlds[16] = new World(new Vector(-61, -15), 16, stellarSquare);
}

function loadSecondary() {
  game.worlds[0] = new World(new Vector(0, 0), 0, transformingTurbidity)
  game.worlds[1] = new World(new Vector(0, 45), 1, unexploredUtopia)
  game.worlds[2] = new World(new Vector(0, 90), 2, littleLandscape)
  game.worlds[3] = new World(new Vector(0, 132), 3, darknessDimension)
  game.worlds[4] = new World(new Vector(0, 177), 4, crowdedCavern)
  game.worlds[5] = new World(new Vector(0, 222), 5, centralCoreImpossible)
  game.worlds[6] = new World(new Vector(0, 267), 6, elongatingEscalator)
  game.worlds[7] = new World(new Vector(0, 312), 7, ballisticBattlefield)
  game.worlds[8] = new World(new Vector(0, 357), 8, insanityIsle)
}
var img2 = new Image();
img2.src = "texture/tiles.jpg";
var hat = new Image();
hat.src = "texture/gold-wreath.png"

var thing = 1;
var world = new World(new Vector(0, 0), 0, missingMap);
game.worlds[0] = world;

function animate(time) {
  var progress = time - lastRender;
  context.clearRect(0, 0, width, height);
  context.beginPath();
  context.fillStyle = "#333";
  context.rect(0, 0, width, height);
  context.fill();
  context.closePath();
  if (!inMenu) {
    var input = {}
    input.keys = keys;
    input.mouse = mousePos;
    input.isMouse = mouse;
    game.inputPlayer(0, input)
    if (progress > 1000) {
      progress = 1000;
    }
    game.update(progress * thing);
    var players = game.players;
    var states = game.getStates(0);
    var focus = new Vector(players[0].pos.x, players[0].pos.y);
    renderArea(states, players, focus)
    context.beginPath();
    context.textAlign = "center";
    context.lineWidth = 6;
    context.fillStyle = "#f4faff";
    context.strokeStyle = "#425a6d";
    context.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
    context.textAlign = "center";
    context.strokeText(game.worlds[game.players[0].world].name + ": " + (game.worlds[game.players[0].world].areas[game.players[0].area].name), width / 2, 40);
    context.fillText(game.worlds[game.players[0].world].name + ": " + (game.worlds[game.players[0].world].areas[game.players[0].area].name), width / 2, 40);
    context.closePath();
    //
    var world = document.getElementById("world");
    if (world.selectedIndex == 1 && game.players[0].area == 0) {
      var author = "???"
      if (states.name == "Transforming Turbidity") {
        author = "TTTruck";
      }
      if (states.name == "Unexplored Utopia") {
        author = "Marko";
      }
      if (states.name == "Little Landscape") {
        author = "Rc";
      }
      if (states.name == "Darkness Dimension") {
        author = "XScienceMasterX";
      }
      if (states.name == "Crowded Cavern") {
        author = "fAtKiD";
      }
      if (states.name == "Central Core Impossible") {
        author = "Pentagonis, REALLY IMPOSSIBLE";
      }
      if (states.name == "Elongating Escalators") {
        author = "Darklight";
      }
      if (states.name == "Ballistic Battlefield") {
        author = "Strat";
      }
      if (states.name == "Insanity Isle") {
        author = "Manticore";
      }
      context.beginPath();
      context.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      context.textAlign = "center";
      context.lineWidth = 5,
        context.strokeStyle = "#006b2c",
        context.fillStyle = "#00ff6b",
        context.strokeText("made by " + author, width / 2, height - 120);
      context.fillText("made by " + author, width / 2, height - 120);
      context.closePath();
    }
    if (world.selectedIndex == 1 && game.players[0].area == 1 && game.players[0].world == 3) {
      context.beginPath();
      context.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      context.textAlign = "center";
      context.lineWidth = 5,
        context.strokeStyle = "#006b2c",
        context.fillStyle = "#00ff6b",
        context.strokeText("this map has 120 areas... make sure you have time :D", width / 2, height - 120);
      context.fillText("this map has 120 areas... make sure you have time :D", width / 2, height - 120);
      context.closePath();
    }
    if (world.selectedIndex == 2 && !loaded) {
      context.beginPath();
      context.font = "bold " + 35 + "px Tahoma, Verdana, Segoe, sans-serif";
      context.textAlign = "center";
      context.lineWidth = 5,
        context.strokeStyle = "#006b2c",
        context.fillStyle = "#00ff6b",
        context.strokeText("this is to import a map, top left in the menu", width / 2, height - 120);
      context.fillText("this is to import a map, top left in the menu", width / 2, height - 120);
      context.closePath();
    }
  }
  lastRender = time
  window.requestAnimationFrame(animate);
}
var lastRender = 0;
window.requestAnimationFrame(animate);
