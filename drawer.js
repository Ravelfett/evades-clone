function renderArea(area, players, focus) {
  var ligth = document.createElement('canvas');
  var context1 = ligth.getContext("2d");
  ligth.width = width,
  ligth.height = height;
  renderTiles(area, players, focus)
  renderFirstEntities(area, players, focus)
  renderAssets(area, players, focus)
  context.globalAlpha = 1;
  renderPlayers(area, players, focus);
  renderSecondEntities(area, players, focus)
  for (var i in players) {
    var player = players[i];
    var grad = context1.createRadialGradient(width / 2 + (player.pos.x - focus.x) * fov, height / 2 + (player.pos.y - focus.y) * fov, 0, width / 2 + (player.pos.x - focus.x) * fov, height / 2 + (player.pos.y - focus.y) * fov ,(player.radius+30/32)*fov);
    grad.addColorStop(0, "rgba(0, 0, 0, 1)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    context1.beginPath();
    context1.fillStyle = grad;
    context1.arc(width / 2 + (player.pos.x - focus.x) * fov,  height / 2 + (player.pos.y - focus.y) * fov, (player.radius+30/32)*fov, 0, 2 * Math.PI, !1);
    context1.fill();
    context1.closePath();
  }
  context1.beginPath();
  context1.fillStyle = "rgba(0, 0, 0, " + area.lighting + ")"
  context1.fillRect(0, 0, width, height);
  context1.fill();
  context1.closePath();
  context.globalCompositeOperation = "destination-in"
  context.drawImage(ligth, 0, 0)
  context.globalCompositeOperation = "source-over"
  renderUI(area, players, focus)
  renderMinimap(area, players, focus)
}

function renderTiles(area, players, focus) {
  for (var i in area.zones) {
    var zone = area.zones[i];
    for (var j = 0; j < zone.size.x; j++) {
      for (var k = 0; k < zone.size.y; k++) {
        context.beginPath();
        var posX = ((area.pos.x + zone.pos.x + j) % 4);
        var posY = ((area.pos.y + zone.pos.y + k) % 4);
        if (posX < 0) {
          posX = 4 - Math.abs(posX);
        }
        if (posY < 0) {
          posY = 4 - Math.abs(posY);
        }
        context.imageSmoothingEnabled = false;
        context.drawImage(img2, Math.abs(posX) * 32 + zone.type * 128, Math.abs(posY) * 32, 32, 32, width / 2 + ((area.pos.x + zone.pos.x + j) - focus.x) * fov, height / 2 + ((area.pos.y + zone.pos.y + k) - focus.y) * fov, fov, fov);
        context.closePath();
        context.beginPath();
        context.fillStyle = area.background_color;
        context.fillRect(width / 2 + ((area.pos.x + zone.pos.x + j) - focus.x) * fov, height / 2 + ((area.pos.y + zone.pos.y + k) - focus.y) * fov, fov, fov);
        context.fill();
        context.closePath();
        /*context.beginPath();
        context.fillStyle = zone.background_color;
        context.fillRect(width / 2 + ((area.pos.x + zone.pos.x + j) - focus.x) * fov, height / 2 + ((area.pos.y + zone.pos.y + k) - focus.y) * fov, fov, fov);
        context.fill();
        context.closePath();*/
      }
    }
  }
}

function renderFirstEntities(area, players, focus) {
  var entities = area.entities
  for (var i in entities) {
    context.globalAlpha = 1;
    for (var j in entities[i]) {
      if (entities[i][j].renderFirst) {
        context.beginPath();
        context.fillStyle = entities[i][j].color;
        if (entities[i][j].Harmless) {
          context.globalAlpha = 0.4;
        }
        context.arc(width / 2 + (area.pos.x + entities[i][j].pos.x - focus.x) * fov, height / 2 + (area.pos.y + entities[i][j].pos.y - focus.y) * fov, entities[i][j].radius * fov, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
      }
    }
  }
}

function renderPlayers(area, players, focus) {
  for (var i in players) {
    var player = players[i];
    context.beginPath();
    if (!player.die) {
      if (player.god) {
        context.fillStyle = "purple";
      } else {
        context.fillStyle = player.color;
      }
    } else {
      context.fillStyle = "red";
    }
    context.arc(width / 2 + (player.pos.x - focus.x) * fov, height / 2 + (player.pos.y - focus.y) * fov, player.radius * fov, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
    context.beginPath();
    context.fillStyle = "blue";
    context.fillRect(width / 2 + (player.pos.x - focus.x) * fov - 18 / 32 * fov, height / 2 + (player.pos.y - focus.y) * fov - player.radius * fov - 8 / 32 * fov, 36 / 32 * fov * player.energy / player.maxEnergy, 7 / 32 * fov);
    context.fill();
    context.closePath();
    context.beginPath();
    context.strokeStyle = "rgba(0,0,0,0.5)";
    context.lineWidth = 3;
    context.strokeRect(width / 2 + (player.pos.x - focus.x) * fov - 18 / 32 * fov, height / 2 + (player.pos.y - focus.y) * fov - player.radius * fov - 8 / 32 * fov, 36 / 32 * fov, 7 / 32 * fov);
    context.closePath();
    context.beginPath();
    context.fillStyle = "black";
    context.font = 12 / 32 * fov + "px Tahoma, Verdana, Segoe, sans-serif";
    context.textAlign = "center";
    context.fillText(player.name, width / 2 + (player.pos.x - focus.x) * fov, height / 2 + (player.pos.y - focus.y) * fov - player.radius * fov - 11 / 32 * fov);
    context.closePath();
    context.beginPath();
    context.drawImage(hat, width / 2 + (player.pos.x - focus.x) * fov - 25 / 32 * fov, height / 2 + (player.pos.y - focus.y) * fov - 25 / 32 * fov, 50 / 32 * fov, 50 / 32 * fov);
    context.closePath();
  }
}

function renderSecondEntities(area, players, focus) {
  var entities = area.entities
  for (var i in entities) {
    for (var j in entities[i]) {
      if (entities[i][j].aura) {
        context.beginPath();
        context.fillStyle = entities[i][j].auraColor;
        context.arc(width / 2 + (area.pos.x + entities[i][j].pos.x - focus.x) * fov, height / 2 + (area.pos.y + entities[i][j].pos.y - focus.y) * fov, entities[i][j].auraSize * fov, 0, Math.PI * 2, true);
        context.fill();
        context.closePath();
      }
    }
  }
  for (var i in entities) {
    for (var j in entities[i]) {
      context.globalAlpha = 1;
      if (!entities[i][j].renderFirst) {
        if (entities[i][j].shatterTime>0) {
          context.globalAlpha = 0.4;
          var midX= width / 2 + (area.pos.x +entities[i][j].pos.x - focus.x) * fov;
          var midY=height / 2 + (area.pos.y +entities[i][j].pos.y - focus.y) * fov;
          var l = entities[i][j].radius / 4;
          var s = entities[i][j].radius;
          var u = 4e3 - entities[i][j].shatterTime;
          var f = (u - 500) / 500;
          var h = (u - 1e3) / 3e3;
          if (u < 250){
            console.log("1");
            context.beginPath();
            context.fillStyle = entities[i][j].color;
            context.arc(midX,midY, Math.max(l, Math.max(l, entities[i][j].radius * (1 - u / 250)))*fov, 0, 2 * Math.PI, !1);
            context.fill();
            context.closePath()
          }else if (u < 500) {
            console.log("2");
            context.beginPath();
            context.fillStyle = entities[i][j].color;
            context.arc(midX,midY, l*fov, 0, 2 * Math.PI, !1);
            context.fill();
            context.closePath()
          }else if (u < 1e3) {
            console.log("3");
            let n = 5*f;
            for (var o = 0; o < 8; o++) {
              context.beginPath();
              context.fillStyle = entities[i][j].color;
              context.arc(midX+(Math.cos(n) * f*s)*fov, midY+(Math.sin(n) *  f*s)*fov,entities[i][j].radius / 3*fov ,0, 2 * Math.PI, !1);
               n += 2 * Math.PI / 3;
               context.fill();
               context.closePath();
            }
          } else {
            console.log("4");
            let n = 5 - 3 * h;
            for (var o = 0; o < 8; o++) {
              context.beginPath();
              context.fillStyle = entities[i][j].color;
              context.arc(midX+Math.cos(n) * (s - h * s)*fov, midY+Math.sin(n) *  (s - h * s)*fov, Math.min(entities[i][j].radius, Math.max(l, entities[i][j].radius * h))*fov ,0, 2 * Math.PI, !1);
               n += 2 * Math.PI / 3;
               context.fill();
               context.closePath();
            }
          }
        } else {
          context.globalAlpha = 1;
          context.beginPath();
          context.fillStyle = entities[i][j].color;
          if (entities[i][j].Harmless) {
            context.globalAlpha = 0.4;
          }
          context.lineWidth = 2
          context.strokeStyle = "black"
          context.arc(width / 2 + (area.pos.x + entities[i][j].pos.x - focus.x) * fov, height / 2 + (area.pos.y + entities[i][j].pos.y - focus.y) * fov, entities[i][j].radius * fov, 0, Math.PI * 2, true);
          context.fill();
          if (entities[i][j].decayed) {
            context.fillStyle = "rgba(0, 0, 128, 0.2)"
            context.fill();
          }
          if (entities[i][j].outline) {
            context.stroke()
          }
          context.globalAlpha = 1;
          context.closePath();
        }
      }
    }
  }
}

function renderMinimap(area, players, focus) {
  var minimapSize = new Vector(370, 100)
  var bound = area.boundary;
  var xCoef = minimapSize.x / bound.w;
  var yCoef = minimapSize.y / bound.h;
  var coef = xCoef;
  if (yCoef < xCoef) {
    coef = yCoef;
  }
  var yOff = minimapSize.y - bound.h * coef
  for (var i in area.zones) {
    context.beginPath();
    if (area.zones[i].type == 0) {
      context.fillStyle = "rgb(255, 255, 255)"
    }
    if (area.zones[i].type == 1) {
      context.fillStyle = "rgb(195, 195, 195)"
    }
    if (area.zones[i].type == 2) {
      context.fillStyle = "rgb(255, 244, 108)"
    }
    if (area.zones[i].type == 3) {
      context.fillStyle = "rgb(106, 208, 222)"
    }
    context.fillRect((area.zones[i].pos.x - bound.x) * coef, height - minimapSize.y + (area.zones[i].pos.y - bound.y) * coef + yOff, area.zones[i].size.x * coef, area.zones[i].size.y * coef);
    context.closePath();
  }
  for (var i in players) {
    var newPos = new Vector((players[i].pos.x - area.pos.x - bound.x) * coef, (players[i].pos.y - area.pos.y - bound.y) * coef)
    context.beginPath();
    context.fillStyle = players[i].color;
    context.arc(newPos.x, height - minimapSize.y + newPos.y + yOff, 4, 0, Math.PI * 2, true);
    context.fill();
    context.closePath();
  }
}

function renderUI(area, players, focus) {
  context.beginPath();
  context.strokeStyle = "#000000";
  context.fillStyle = "rgba(0, 0, 0, 0.8)"
  context.fillRect(width / 2 - 516 / 2, height - 85, 516, 85);
  context.fill();
  context.closePath();

  context.beginPath();
  context.font = 20 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillStyle = "red";
  context.fillText("None", width / 2 - 516 / 2 + 55,  height - 85+20)
  context.closePath();

  context.beginPath();
  context.fillStyle = "red";
  context.arc( width / 2 - 516 / 2+55,height - 85+55, 23, 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  context.beginPath();
  context.font = 22 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillStyle = "white"
  context.fillText(1, width / 2 - 516 / 2 + 55,  height-85+63)
  context.closePath();

  context.beginPath();
  context.strokeStyle = "rgb(128, 128, 128)"
  context.moveTo(width / 2 - 516 / 2 + 105, height - 85);
  context.lineTo(width / 2 - 516 / 2 + 105, height);
  context.stroke();
  context.closePath();

  context.beginPath();
  context.font = 13 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillStyle = "white"
  context.fillText("Points:", width / 2 - 516 / 2 + 136,  height-85+16)
  context.closePath();

  context.beginPath();
  context.fillStyle = "yellow";
  context.arc( width / 2 - 516 / 2+169,height - 85+12, 8, 0, Math.PI * 2, true);
  context.fill();
  context.closePath();

  context.beginPath();
  context.fillStyle = "black";
  context.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillText(players[0].points, width / 2 - 516 / 2+169,height - 85+16)
  context.closePath();

  context.beginPath();
  context.fillStyle = "white";
  context.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillText("Speed", width / 2 - 516 / 2 +105+41,  height-85+17+44)
  context.closePath();

  context.beginPath();
  context.fillStyle = "white";
  context.font = 22 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillText(players[0].speed, width / 2 - 516 / 2 +105+41,  height-85+17+44-17)
  context.closePath();

  context.beginPath();
  context.fillStyle = "white";
  context.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillText("Energy", width / 2 - 516 / 2 +105+41+82,  height-85+17+44)
  context.closePath();

  context.beginPath();
  context.fillStyle = "white";
  context.font = 22 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillText((Math.round(players[0].energy))+"/"+players[0].maxEnergy, width / 2 - 516 / 2 +105+41+82,  height-85+17+44-17)
  context.closePath();

  context.beginPath();
  context.fillStyle = "white";
  context.font = 10 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillText("Regen", width / 2 - 516 / 2 +105+41+164,  height-85+17+44)
  context.closePath();

  context.beginPath();
  context.fillStyle = "white";
  context.font = 22 + "px Tahoma, Verdana, Segoe, sans-serif";
  context.textAlign = "center";
  context.fillText((Math.round(players[0].regen*10)/10), width / 2 - 516 / 2 +105+41+164,  height-85+17+44-17)
  context.closePath();
}

function renderAssets(area, players, focus) {
  for (var i in area.assets) {
    var zone = area.assets[i];
    for (var j = 0; j < zone.size.x; j++) {
      for (var k = 0; k < zone.size.y; k++) {
        var tileSize = 4;
        if (zone.texture == 4) {
          tileSize = 16
        }
        context.beginPath();
        var posX = ((area.pos.x + zone.pos.x + j) % tileSize);
        var posY = ((area.pos.y + zone.pos.y + k) % tileSize);
        if (posX < 0) {
          posX = tileSize - Math.abs(posX);
        }
        if (posY < 0) {
          posY = tileSize - Math.abs(posY);
        }
        context.imageSmoothingEnabled = true;
        context.drawImage(img2, Math.abs(posX) * 32, Math.abs(posY) * 32 + zone.texture * 128, 32, 32, width / 2 + ((area.pos.x + zone.pos.x + j) - focus.x) * fov, height / 2 + ((area.pos.y + zone.pos.y + k) - focus.y) * fov, fov, fov);
        context.closePath();
      }
    }
  }
}
