window.onresize = function() {
  var winw = window.innerWidth;
  var winh = window.innerHeight;
  var xvalue = winw / width;
  var yvalue = winh / height;
  scale = xvalue;
  if (yvalue < xvalue) {
    scale = yvalue
  }
  canvas.style.transform = "scale(" + scale + ")";
  canvas.style.left = (winw - width) / 2 + "px";
  canvas.style.top = (winh - height) / 2 + "px";
};
window.onload = function() {
  var winw = window.innerWidth;
  var winh = window.innerHeight;
  var xvalue = winw / width;
  var yvalue = winh / height;
  scale = xvalue;
  if (yvalue < xvalue) {
    scale = yvalue
  }
  canvas.style.transform = "scale(" + scale + ")";
  canvas.style.left = (winw - width) / 2 + "px";
  canvas.style.top = (winh - height) / 2 + "px";
}
document.addEventListener("keydown", keydown, false);
document.addEventListener("keyup", keyup, false);

function keydown(e) {
  keys[e.keyCode] = true;
  if (e.keyCode == 84) {
    game.players[0].area++
    if (game.players[0].area>=game.worlds[game.players[0].world].areas.length-1) {
      game.players[0].area=game.worlds[game.players[0].world].areas.length-1
    }
    game.worlds[game.players[0].world].areas[game.players[0].area].load()
  }
  if (e.keyCode == 82) {
    game.players[0].area = Number(game.players[0].area) + 10;
    if (game.players[0].area>=game.worlds[game.players[0].world].areas.length-1) {
      game.players[0].area=game.worlds[game.players[0].world].areas.length-1
    }
    game.worlds[game.players[0].world].areas[game.players[0].area].load()
  }
  if (e.keyCode == 69) {
    game.players[0].area = Number(game.players[0].area) - 1;
    if (game.players[0].area<0) {
      game.players[0].area=0;
    }
    game.worlds[game.players[0].world].areas[game.players[0].area].load()
  }
  if (e.keyCode == 67) {
    game.players[0].god = !game.players[0].god;
  }
}

function keyup(e) {
  delete keys[e.keyCode];
}
window.onblur = function() {
  keys = [];
};
var enterGame = document.getElementById("connect");
enterGame.onclick = function() {
  menu.style.display = "none";
  gamed.style.display = "inline-block";
  inMenu = false;
  var world = document.getElementById("world");
  var hero = document.getElementById("hero");
  if (world.selectedIndex == 0) {
    loadMain();
  }
  if (world.selectedIndex == 1) {
    loadSecondary();
  }
  if (hero.selectedIndex == 0) {
    var player = new Basic(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }
  if (hero.selectedIndex == 1) {
    var player = new Jotunn(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }
  if (hero.selectedIndex == 2) {
    var player = new Burst(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }
  if (hero.selectedIndex == 3) {
    var player = new Lantern(new Vector(Math.random() * 7 + 2.5, Math.random() * 10 + 2.5),5);
    game.players.push(player)
  }
  game.worlds[0].areas[0].load();
}
document.addEventListener("mousemove", Pos, false);

function Pos(p) {
  var t = canvas.getBoundingClientRect();
  mousePos = new Vector((p.pageX - t.left) / scale, (p.pageY - t.top) / scale);
}
document.onmousedown = function(e) {
  if (e.buttons == 1) {
    if (!inMenu) {
      mouse = !mouse;
    }
  }
};
var inputElement = document.getElementById("load");
inputElement.addEventListener("change", handleFiles, false);

function handleFiles() {
  loaded = true;
  var fileList = this.files[0]; /* Vous pouvez maintenant manipuler la liste de fichiers */
  var reader = new FileReader();
  reader.onloadend = function(evt) {
    if (evt.target.readyState == FileReader.DONE) { // DONE == 2
      game = new Game()
      var world = new World(new Vector(0, 0), 0, jsyaml.load(evt.target.result));
      game.worlds[0] = world
    }
  };
  reader.readAsBinaryString(fileList);
}
