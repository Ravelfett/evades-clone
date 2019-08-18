class Entity {
  constructor(pos, radius, color) {
    this.pos = pos;
    this.radius = radius;
    this.fixedRadius = radius;
    this.color = color;
    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);
    this.outline = false;
    this.speedMultiplier = 1;
    this.radiusMultiplier = 1;
    this.angle = 0;
    this.speed = 0;
    this.friction = 0;
    this.weak = false;
    this.renderFirst = true;
    this.Harmless = false;
    this.imune = true;
    this.collide = true;
    this.isEnemy = false;
    this.toRemove = false;
  }
  angleToVel() {
    this.vel.x = Math.cos(this.angle) * this.speed;
    this.vel.y = Math.sin(this.angle) * this.speed;
  }
  velToAngle() {
    this.angle = Math.atan2(this.vel.y, this.vel.x);
    var dist = distance(new Vector(0, 0), this.vel);
    this.speed = dist;
  }
  update(time) {
    this.radius = this.fixedRadius;
    this.velToAngle();
    this.angleToVel();
    var timeFix = time / (1000 / 30);
    var vel = new Vector(this.vel.x * this.speedMultiplier, this.vel.y * this.speedMultiplier)
    this.speedMultiplier = 1;
    this.radius *= this.radiusMultiplier;
    this.radiusMultiplier = 1;
    this.pos.x += vel.x / 32 * timeFix;
    this.pos.y += vel.y / 32 * timeFix;
    var dim = 1 - this.friction;
    this.vel.x *= dim;
    this.vel.y *= dim;
  }
  colide(boundary) {
    if (this.pos.x - this.radius < boundary.x) {
      this.vel.x = Math.abs(this.vel.x);
    }
    if (this.pos.x + this.radius > boundary.x + boundary.w) {
      this.vel.x = -Math.abs(this.vel.x);
    }
    if (this.pos.y - this.radius < boundary.y) {
      this.vel.y = Math.abs(this.vel.y);
    }
    if (this.pos.y + this.radius > boundary.y + boundary.h) {
      this.vel.y = -Math.abs(this.vel.y);
    }
  }
  behavior(time, area, offset, players) {

  }
  interact(player, worldPos) {

  }
}
class Pellet extends Entity {
  constructor(pos) {
    var p = ["#b84dd4", "#a32dd8", "#3b96fd", "#43c59b", "#f98f6b"];
    super(pos, 0.29, p[Math.floor(Math.random() * p.length)]);
  }
  behavior(time, area, offset, players) {
    for (var i in players) {
      if (distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y)) < players[i].radius + this.radius) {
        var boundary = area.getActiveBoundary();
        var posX = Math.random() * boundary.w + boundary.x;
        var posY = Math.random() * boundary.h + boundary.y;
        this.pos = new Vector(posX, posY)
        players[i].currentExperience++;
        if (players[i].currentExperience > players[i].maxExperience) {
          players[i].level++;
          players[i].currentExperience = 0;
          players[i].points++;
          players[i].maxExperience = players[i].level * 4;
        }
      }
    }
  }
}
class Player {
  constructor(pos, type, speed, color) {
    this.name = "Ravelfett";
    this.id = Math.random();
    this.type = type;
    this.pos = pos;
    this.previousPos = this.pos;
    this.radius = 15 / 16 / 2;
    this.fixedRadius = 15 / 16 / 2;
    this.color = color;
    this.speed = speed;
    this.world = 0;
    this.area = 0;
    this.maxEnergy = 30;
    this.energy = this.maxEnergy;
    this.regen = 1;
    this.vel = new Vector(0, 0);
    this.acc = new Vector(0, 0);
    this.speedMultiplier = 1;
    this.radiusMultiplier = 1;
    this.die = false;
    this.firstAbility = false;
    this.firstAbilityPressed = false;
    this.firstAbilityCooldown = 0;
    this.secondAbility = false;
    this.secondAbilityPressed = false;
    this.secondAbilityCooldown = 0;
    this.frozen = true;
    this.frozenTime = 0;
    this.onTele = false;
    this.slowing = false;
    this.freezing = false;
    this.draining = false;
    this.slippery = false;
    this.dyingPos = new Vector(0, 0);
    this.level = 1;
    this.points = 50;
    this.maxExperience = this.level * 4;
    this.currentExperience = 0;
  }
  input(input) {
    if (input.keys) {
      if (input.keys[16]) {
        this.speedMultiplier /= 2;
      }
      if (input.keys[49]) {
        if (this.speed < 17 && this.points > 0) {
          this.speed += 0.5;
          this.points--;
        }
      }
      if (input.keys[50]) {
        if (this.maxEnergy < 300 && this.points > 0) {
          this.maxEnergy += 5;
          this.points--;
        }
      }
      if (input.keys[51]) {
        if (this.regen < 7 && this.points > 0) {
          this.regen += 0.4;
          this.points--;
        }
      }
      this.firstAbility = false;
      this.secondAbility = false;
      if ((input.keys[74] || input.keys[90]) && !this.firstAbilityPressed) {
        this.firstAbility = true;
        this.firstAbilityPressed = true;
      }
      if ((input.keys[75] || input.keys[88]) && !this.secondAbilityPressed) {
        this.secondAbility = true;
        this.secondAbilityPressed = true;
      }
      if (!(input.keys[74] || input.keys[90])) {
        this.firstAbilityPressed = false;
      }
      if (!(input.keys[75] || input.keys[88])) {
        this.secondAbilityPressed = false;
      }
      if (input.isMouse) {
        var dirX = input.mouse.x - width / 2;
        var dirY = input.mouse.y - height / 2;
        var dist = distance(new Vector(0, 0), new Vector(dirX, dirY));
        if (dist > 200) {
          dirX = dirX * (200 / dist);
          dirY = dirY * (200 / dist);
        }
        this.vel.x = dirX * this.speed / 200;
        this.vel.y = dirY * this.speed / 200;
      } else {
        if (input.keys[87] || input.keys[38]) {
          this.vel.y = -this.speed;
        }
        if (input.keys[65] || input.keys[37]) {
          this.vel.x = -this.speed;
        }
        if (input.keys[83] || input.keys[40]) {
          this.vel.y = this.speed;
        }
        if (input.keys[68] || input.keys[39]) {
          this.vel.x = this.speed;
        }
      }
    }
  }
  update(time, friction) {
    this.radius = this.fixedRadius;
    this.radius *= this.radiusMultiplier;
    this.radiusMultiplier = 1;
    if (this.frozen) {
      this.frozenTime -= time;
    }
    if (this.frozenTime < 0) {
      this.frozen = false;
    }
    if (this.slowing) {
      this.speedMultiplier *= 0.7;
    }
    if (this.freezing) {
      this.speedMultiplier *= 0.2;
    }
    if (this.draining) {
      this.energy -= 16 * time / 1000;
      if (this.energy < 0) {
        this.energy = 0;
      }
    }
    this.energy += this.regen * time / 1000;
    if (this.energy > this.maxEnergy) {
      this.energy = this.maxEnergy;
    }
    var timeFix = time / (1000 / 30);
    var vel = new Vector(this.vel.x * this.speedMultiplier, this.vel.y * this.speedMultiplier)
    this.speedMultiplier = 1;
    this.previousPos = new Vector(this.pos.x, this.pos.y);
    if (!this.frozen) {
      this.pos.x += vel.x / 32 * timeFix;
      this.pos.y += vel.y / 32 * timeFix;
    }
    var dim = (1 - friction);
    if (this.slippery) {
      dim = 1;
    }
    this.vel.x *= dim;
    this.vel.y *= dim;
    this.slowing = false;
    this.freezing = false;
    this.draining = false;
    this.slippery = false;
    this.firstAbilityCooldown -= time;
    this.secondAbilityCooldown -= time;
    this.firstAbilityCooldown += (Math.abs(this.firstAbilityCooldown) - this.firstAbilityCooldown) / 2;
    this.secondAbilityCooldown += (Math.abs(this.secondAbilityCooldown) - this.secondAbilityCooldown) / 2;
  }
  abilities(time, area, bound) {

  }
}
class Basic extends Player {
  constructor(pos, speed) {
    super(pos, 0, speed, "red");
  }
}
class Jotunn extends Player {
  constructor(pos, speed) {
    super(pos, 1, speed, "#5cacff");
  }
  abilities(time, area, offset) {
    for (var i in area.entities) {
      for (var j in area.entities[i]) {
        var entity = area.entities[i][j];
        if (distance(entity.pos, new Vector(this.pos.x - offset.x, this.pos.y - offset.y)) < (170 / 32) + entity.radius) {
          if (!area.entities[i][j].imune) {
            area.entities[i][j].speedMultiplier *= 0.6;
            area.entities[i][j].decayed = true;
          }
        }
      }
    }
    if (this.secondAbility && this.energy > 30 && this.secondAbilityCooldown == 0) {
      this.energy -= 30;
      this.secondAbilityCooldown = 6000;
      for (var i in area.entities) {
        for (var j in area.entities[i]) {
          var entity = area.entities[i][j];
          if (area.entities[i][j].decayed) {
            area.entities[i][j].shatterTime = 4000;
          }
        }
      }
    }
  }
}
class Burst extends Player {
  constructor(pos, speed) {
    super(pos, 2, speed, "#A33");
  }
  abilities(time, area, offset) {
    if (this.firstAbility && this.energy > 5 && this.firstAbilityCooldown == 0) {
      this.energy -= 5;
      this.firstAbilityCooldown = 500;
      var vx = 1;
      var vy = 0;
      var dist = distance(this.pos, this.previousPos);
      if (dist !== 0) {
        vx = (this.pos.x - this.previousPos.x) / dist;
        vy = (this.pos.y - this.previousPos.y) / dist;
      }
      var dyna = new Dynamite(new Vector(this.pos.x - offset.x, this.pos.y - offset.y), new Vector(vx * 50, vy * 50), this.id);
      area.addEntity("dynamites", dyna)
    }
    if (this.secondAbility && this.energy > 20 && this.secondAbilityCooldown == 0) {
      this.energy -= 20;
      this.secondAbilityCooldown = 1000;
      var newDynamites = [];
      for (var i in area.entities["dynamites"]) {
        if (area.entities["dynamites"][i].owner == this.id) {
          for (var j in area.entities) {
            for (var k in area.entities[j]) {
              if (distance(area.entities["dynamites"][i].pos, area.entities[j][k].pos) < 9 && !area.entities[j][k].imune && area.entities[j][k].isEnemy) {
                var bfvelX = area.entities[j][k].vel.x;
                var bfvelY = area.entities[j][k].vel.y;
                var dirX = area.entities[j][k].pos.x - area.entities["dynamites"][i].pos.x;
                var dirY = area.entities[j][k].pos.y - area.entities["dynamites"][i].pos.y;
                area.entities[j][k].vel.x = Math.sqrt(bfvelX * bfvelX + bfvelY * bfvelY) * dirX / Math.sqrt(dirX * dirX + dirY * dirY);
                area.entities[j][k].vel.y = Math.sqrt(bfvelX * bfvelX + bfvelY * bfvelY) * dirY / Math.sqrt(dirX * dirX + dirY * dirY)
              }
            }
          }
          var particle = new ExplosionParticle(new Vector(area.entities["dynamites"][i].pos.x, area.entities["dynamites"][i].pos.y));
          area.addEntity("explosionParticle", particle);
        } else {
          newDynamites.push(area.entities["dynamites"][i])
        }
      }
      area.entities["dynamites"] = newDynamites;
    }
  }
}
class Dynamite extends Entity {
  constructor(pos, vel, id) {
    super(pos, 1 / 3, "#A33");
    this.vel = new Vector(vel.x, vel.y);
    this.friction = 0.1;
    this.owner = id;
    this.collide = false;
  }
  colide(boundary) {}
}
class ExplosionParticle extends Entity {
  constructor(pos) {
    super(pos, 1 / 3, null);
    this.g = 255;
    this.a = 1;
    this.color = "rgba(255," + this.g + ",0," + this.a + ")";
    this.collide = false;
  }
  behavior(time, area, offset, players) {
    this.g -= time / 2;
    this.a -= time / 800;
    this.radius += time / 100;
    this.fixedRadius = this.radius;
    this.color = "rgba(255," + this.g + ",0," + this.a + ")"
  }
}
class Lantern extends Player {
  constructor(pos, speed) {
    super(pos, 3, speed, "green");
    this.firstAbilityActivated = false;
    this.secondAbilityActivated = false;
    this.firstTime = 0;
    this.secondTime = 0;
  }
  abilities(time, area, offset) {
    if (this.firstAbility) {
      this.firstAbilityActivated = !this.firstAbilityActivated;
    }
    if (this.secondAbility) {
      this.secondAbilityActivated = !this.secondAbilityActivated;
    }
    if (this.firstAbilityActivated) {
      this.firstTime += time / 1000
      this.energy -= 12 * time / 1000;
      if (this.energy < 0) {
        this.energy = 0;
        this.firstAbilityActivated = false;
      }
      if (this.firstTime > 0.005) {
        var follower = new Follower(new Vector(this.pos.x - offset.x, this.pos.y - offset.y))
        area.addEntity("follower", follower);
        this.firstTime = 0;
      }
    }
    if (this.secondAbilityActivated) {
      this.secondTime += time / 1000
      this.energy -= 12 * time / 1000;
      if (this.energy < 0) {
        this.energy = 0;
        this.secondAbilityActivated = false;
      }
      if (this.secondTime > 0.01) {
        var shrinker = new Shrinker(new Vector(this.pos.x - offset.x, this.pos.y - offset.y))
        area.addEntity("shrinker", shrinker);
        this.secondTime = 0;
      }
    }
  }
}
class Follower extends Entity {
  constructor(pos) {
    super(pos, 1.2, "rgba(0,200,0,0.1)");
    this.clock = 0;
    this.collide = false;
  }
  behavior(time, area, offset, players) {
    this.clock += 1 * time / 1000;
    if (this.clock > 1) {
      this.toRemove = true;
    }
    for (var i in area.entities) {
      for (var j in area.entities[i]) {
        if (area.entities[i][j].isEnemy) {
          if (distance(this.pos, area.entities[i][j].pos) < this.radius + area.entities[i][j].fixedRadius) {
            area.entities[i][j].radiusMultiplier = 0.5;
          }
        }
      }
    }
  }
}
class Shrinker extends Entity {
  constructor(pos) {
    super(pos, 1.8, "rgba(0,0,200,0.05)");
    this.clock = 0;
    this.collide = false;
  }
  behavior(time, area, offset, players) {
    this.clock += 1 * time / 1000;
    if (this.clock > 3) {
      this.toRemove = true;
    }
    for (var i in players) {
      if (distance(new Vector(this.pos.x + offset.x, this.pos.y + offset.y), players[i].pos) < this.radius + players[i].fixedRadius) {
        players[i].radiusMultiplier = 0.5;
      }
    }
  }
}
class Enemy extends Entity {
  constructor(pos, type, radius, speed, color, aura, auraColor, auraSize) {
    super(pos, radius, color);
    this.renderFirst = false;
    this.outline = true;
    this.type = type;
    this.aura = aura;
    this.auraColor = auraColor;
    this.auraSize = auraSize
    let angle = Math.random();
    let xvel = Math.cos(angle * Math.PI * 2) * speed;
    let yvel = Math.sin(angle * Math.PI * 2) * speed;
    this.vel = new Vector(xvel, yvel);
    this.decayed = false;
    this.shatterTime = 0;
    this.imune = false;
    this.isEnemy = true;
  }
  update(time) {
    this.radius = this.fixedRadius;
    this.velToAngle();
    this.angleToVel();
    var timeFix = time / (1000 / 30);
    var vel = new Vector(this.vel.x * this.speedMultiplier, this.vel.y * this.speedMultiplier)
    this.speedMultiplier = 1;
    this.radius *= this.radiusMultiplier;
    this.radiusMultiplier = 1;
    this.pos.x += vel.x / 32 * timeFix;
    this.pos.y += vel.y / 32 * timeFix;
    var dim = 1 - this.friction;
    this.vel.x *= dim;
    this.vel.y *= dim;
    this.decayed = false;
    this.shatterTime -= time;
    if (this.shatterTime < 0) {
      this.shatterTime = 0;
    }
  }
  interact(player, worldPos, time) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.radius && !player.god && !this.Harmless && this.shatterTime == 0) {
      player.pos = new Vector(player.dyingPos.x, player.dyingPos.y);
    }
    if (this.aura && !player.god) {
      this.auraEffect(player, worldPos, time)
    }
  }
  auraEffect(player, worldPos) {

  }
}
class Unknown extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("unknown") - 1, radius, speed, "purple");
  }
}
class Normal extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("normal") - 1, radius, speed, "#9e9e9e");
  }
}
class Wall extends Enemy {
  constructor(pos, radius, speed, boundary, index, count, dir) {
    super(pos, entityTypes.indexOf("wall") - 1, radius, speed, "#222222");
    var newBound = {
      x: boundary.x + this.radius,
      y: boundary.y + this.radius,
      w: boundary.w - this.radius * 2,
      h: boundary.h - this.radius * 2
    }
    var peri = perimeter(newBound) / count * index;
    var posAround = warpAround(newBound, peri);
    this.pos.x = posAround.x;
    this.pos.y = posAround.y;
    this.dirAct = 1;
    if (dir !== undefined) {
      console.log("hi");
      this.dirAct = -1;
    }
    this.velToAngle();
    if (posAround.dir == 0) {
      this.vel.y = 0;
      this.vel.x = this.speed * this.dirAct;
    }
    if (posAround.dir == 1) {
      this.vel.x = 0;
      this.vel.y = this.speed * this.dirAct;
    }
    if (posAround.dir == 2) {
      this.vel.y = 0;
      this.vel.x = -this.speed * this.dirAct;
    }
    if (posAround.dir == 3) {
      this.vel.x = 0;
      this.vel.y = -this.speed * this.dirAct;
    }
    this.imune = true;
  }
  colide(rect) {
    this.velToAngle();
    if (this.pos.x < rect.x + this.radius) {
      this.vel.x = 0;
      this.vel.y = -this.speed * this.dirAct;
    } else
    if (this.pos.y < rect.y + this.radius) {
      this.vel.x = this.speed * this.dirAct;
      this.vel.y = 0;
    } else
    if (this.pos.x > rect.x + rect.w - this.radius) {
      this.vel.x = 0;
      this.vel.y = this.speed * this.dirAct;
    } else
    if (this.pos.y > rect.y + rect.h - this.radius) {
      this.vel.x = -this.speed * this.dirAct;
      this.vel.y = 0;
    }
  }
}
class Dasher extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("dasher") - 1, radius, speed, "#003c66");
    this.realVel = new Vector(this.vel.x, this.vel.y);
    this.dashed = false;
    this.clock = 0;
    this.friction = 0.015;
  }
  behavior(time, area, offset, players) {
    this.clock += time;
    if (this.clock > 6500) {
      this.vel = new Vector(this.realVel.x, this.realVel.y);
      this.dashed = false;
      this.clock = this.clock % 6500;
    }
    if (this.clock > 5000 && !this.dashed) {
      this.vel = new Vector(this.realVel.x / 5, this.realVel.y / 5);
      this.dashed = true;
    }
  }
  colide(boundary) {
    if (this.pos.x - this.radius < boundary.x) {
      this.vel.x = Math.abs(this.vel.x);
      this.realVel.x = Math.abs(this.realVel.x);
    }
    if (this.pos.x + this.radius > boundary.x + boundary.w) {
      this.vel.x = -Math.abs(this.vel.x);
      this.realVel.x = -Math.abs(this.realVel.x);
    }
    if (this.pos.y - this.radius < boundary.y) {
      this.vel.y = Math.abs(this.vel.y);
      this.realVel.y = Math.abs(this.realVel.y);
    }
    if (this.pos.y + this.radius > boundary.y + boundary.h) {
      this.vel.y = -Math.abs(this.vel.y);
      this.realVel.y = -Math.abs(this.realVel.y);
    }
  }
}
class Homing extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("homing") - 1, radius, speed, "#966e14");
    this.velToAngle();
    this.targetAngle = this.angle;
  }
  colide(boundary) {
    if (this.pos.x - this.radius < boundary.x) {
      this.vel.x = Math.abs(this.vel.x);
      this.velToAngle();
      this.targetAngle = this.angle;
    }
    if (this.pos.x + this.radius > boundary.x + boundary.w) {
      this.vel.x = -Math.abs(this.vel.x);
      this.velToAngle();
      this.targetAngle = this.angle;
    }
    if (this.pos.y - this.radius < boundary.y) {
      this.vel.y = Math.abs(this.vel.y);
      this.velToAngle();
      this.targetAngle = this.angle;
    }
    if (this.pos.y + this.radius > boundary.y + boundary.h) {
      this.vel.y = -Math.abs(this.vel.y);
      this.velToAngle();
      this.targetAngle = this.angle;
    }
  }
  behavior(time, area, offset, players) {
    var min = 5.625;
    var index;
    for (var i in players) {
      if (distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y)) < min) {
        min = distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y));
        index = i;
      }
    }
    this.velToAngle();
    if (index != undefined) {
      var dX = (players[index].pos.x - offset.x) - this.pos.x;
      var dY = (players[index].pos.y - offset.y) - this.pos.y;
      this.targetAngle = Math.atan2(dY, dX);
    }
    var dif = this.targetAngle - this.angle;
    var angleDif = Math.atan2(Math.sin(dif), Math.cos(dif));
    var angleIncrement = 0.04;
    if (Math.abs(angleDif) >= angleIncrement) {
      if (angleDif < 0) {
        this.angle -= angleIncrement * (time / 30)
      } else {
        this.angle += angleIncrement * (time / 30)
      }
    }
    this.angleToVel();
  }
}
class Slowing extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("slowing") - 1, radius, speed, "#ff0000", true, "rgba(255, 0, 0, 0.15)", 150 / 32);
  }
  auraEffect(player, worldPos) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.auraSize) {
      player.slowing = true;
    }
  }
}
class Draining extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("draining") - 1, radius, speed, "#0000ff", true, "rgba(0, 0, 255, 0.15)", 150 / 32);
  }
  auraEffect(player, worldPos) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.auraSize) {
      player.draining = true;
    }
  }
}
class Oscillating extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("oscillating") - 1, radius, speed, "#869e0f");
    this.clock = 0;
  }
  behavior(time, area, offset, players) {
    this.clock += time;
    if (this.clock > 1000) {
      this.vel.x = -this.vel.x;
      this.vel.y = -this.vel.y;
    }
    this.clock = this.clock % 1000;
  }
}
class Turning extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("turning") - 1, radius, speed, "#336600");
    this.dir = speed / 150;
  }
  behavior(time, area, offset, players) {
    this.velToAngle();
    this.angle += this.dir * (time / 30);
    this.angleToVel();
  }
  colide(boundary) {
    if (this.pos.x - this.radius < boundary.x) {
      this.vel.x = Math.abs(this.vel.x);
      this.dir = -this.dir;
    }
    if (this.pos.x + this.radius > boundary.x + boundary.w) {
      this.vel.x = -Math.abs(this.vel.x);
      this.dir = -this.dir;
    }
    if (this.pos.y - this.radius < boundary.y) {
      this.vel.y = Math.abs(this.vel.y);
      this.dir = -this.dir;
    }
    if (this.pos.y + this.radius > boundary.y + boundary.h) {
      this.vel.y = -Math.abs(this.vel.y);
      this.dir = -this.dir;
    }
  }
}
class Liquid extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("liquid") - 1, radius, speed, "#6789ef");
  }
  behavior(time, area, offset, players) {
    for (var i in players) {
      if (distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y)) < 160 / 32) {
        this.speedMultiplier = 5;
      }
    }
  }
}
class Sizing extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("sizing") - 1, radius, speed, "#f27743");
    this.growing = true;
    this.maxRadius = this.radius * 2.5;
    this.minRadius = this.radius / 2.5;
  }
  behavior(time, area, offset, players) {
    if (this.growing) {
      this.radius += ((time / (1000 / 30)) * 0.08) * this.minRadius;
      this.fixedRadius = this.radius;
      if (this.radius > this.maxRadius) {
        this.growing = false;
      }
    } else {
      this.radius -= ((time / 30) * 0.08) * this.minRadius;
      this.fixedRadius = this.radius;
      if (this.radius < this.minRadius) {
        this.growing = true;
      }
    }
  }
}
class Switch extends Enemy {
  constructor(pos, radius, speed, index, count) {
    super(pos, entityTypes.indexOf("switch") - 1, radius, speed, "#565656");
    this.disabled = false;
    if (index >= count / 2) {
      this.disabled = true;
    }
    this.clock = 0;
  }
  behavior(time, area, offset, players) {
    this.clock += time;
    if (this.clock > 5000) {
      this.disabled = !this.disabled;
    }
    if (this.disabled) {
      this.Harmless = true;
    } else {
      this.Harmless = false;
    }
    this.clock = this.clock % 5000;
  }
}
class Sniper extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("sniper") - 1, radius, speed, "#a05353");
    this.releaseTime = 3000;
    this.clock = Math.random() * this.releaseTime;
  }
  behavior(time, area, offset, players) {
    this.clock += time;
    if (this.clock > this.releaseTime) {
      var min = 18.75;
      var index;
      var boundary = area.getActiveBoundary();
      for (var i in players) {
        if (distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y)) < min && pointInRectangle(new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y), new Vector(boundary.x, boundary.y), new Vector(boundary.w, boundary.h))) {
          min = distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y));
          index = i;
        }
      }
      if (index != undefined) {
        var dX = (players[index].pos.x - offset.x) - this.pos.x;
        var dY = (players[index].pos.y - offset.y) - this.pos.y;
        area.addSniperBullet(0, this.pos, Math.atan2(dY, dX), this.radius / 2, 10)
        this.clock = 0;
      }
    }
  }
}
class SniperBullet extends Entity {
  constructor(pos, angle, radius, speed) {
    super(pos, radius, "#a05353");
    this.vel.x = Math.cos(angle) * speed;
    this.vel.y = Math.sin(angle) * speed;
    this.clock = 0;
    this.weak = true;
  }
  behavior(time, area, offset, players) {
    this.clock += time;
  }
  interact(player, worldPos) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.radius && !player.god) {
      player.pos.x = worldPos.x + 4;
      player.pos.y = worldPos.y + 7.5;
    }
  }
}
class Freezing extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("freezing") - 1, radius, speed, "#64c1b9", true, "rgba(58, 117, 112, 0.3)", 100 / 32);
  }
  auraEffect(player, worldPos) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.auraSize) {
      player.freezing = true;
    }
  }
}
class Teleporting extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("teleporting") - 1, radius, speed, "#ecc4ef");
    this.clock = 0;
  }
  update(time) {
    this.radius = this.fixedRadius;
    this.velToAngle();
    this.angleToVel();
    var timeFix = time / (1000 / 30);
    var vel = new Vector(this.vel.x * this.speedMultiplier, this.vel.y * this.speedMultiplier)
    this.speedMultiplier = 1;
    this.radius *= this.radiusMultiplier;
    this.radiusMultiplier = 1;
    this.pos.x += vel.x / 32;
    this.pos.y += vel.y / 32;
    var dim = 1 - this.friction;
    this.vel.x *= dim;
    this.vel.y *= dim;
    this.decayed = false;
  }
  behavior(time, area, offset, players) {
    this.clock += time
    this.speedMultiplier = 0
    if (this.clock > 1000) {
      this.speedMultiplier = 1;
    }
    this.clock = this.clock % 1000;
  }
}
class Immune extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("immune") - 1, radius, speed, "#000000");
    this.imune = true;
  }
}
class IceSniper extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("ice_sniper") - 1, radius, speed, "#8300ff");
    this.releaseTime = 3000;
    this.clock = Math.random() * this.releaseTime;
  }
  behavior(time, area, offset, players) {
    this.clock += time;
    if (this.clock > this.releaseTime) {
      var min = 18.75;
      var index;
      var boundary = area.getActiveBoundary();
      for (var i in players) {
        if (distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y)) < min && pointInRectangle(new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y), new Vector(boundary.x, boundary.y), new Vector(boundary.w, boundary.h))) {
          min = distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y));
          index = i;
        }
      }
      if (index != undefined) {
        var dX = (players[index].pos.x - offset.x) - this.pos.x;
        var dY = (players[index].pos.y - offset.y) - this.pos.y;
        area.addSniperBullet(1, this.pos, Math.atan2(dY, dX), 10 / 32, 16)
        this.clock = 0;
      }
    }
  }
}
class IceSniperBullet extends Entity {
  constructor(pos, angle, radius, speed) {
    super(pos, radius, "#8300ff");
    this.vel.x = Math.cos(angle) * speed;
    this.vel.y = Math.sin(angle) * speed;
    this.weak = true;
    this.Harmless = true;
  }
  interact(player, worldPos) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.radius && !player.god) {
      player.frozen = true;
      player.frozenTime = 1000;
    }
  }
}
class Disabling extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("disabling") - 1, radius, speed, "#a87c86", true, "rgba(255, 191, 206, 0.5)", 150 / 32);
  }
}
class Icicle extends Enemy {
  constructor(pos, radius, speed, horizontal) {
    super(pos, entityTypes.indexOf("icicle") - 1, radius, speed, "#adf8ff");
    this.clock = 0;
    this.wallHit = false;
    if (horizontal) {
      this.vel.x = (Math.floor(Math.random() * 2) * 2 - 1) * speed;
      this.vel.y = 0
    } else {
      this.vel.x = 0;
      this.vel.y = (Math.floor(Math.random() * 2) * 2 - 1) * speed
    }
  }
  colide(boundary) {
    if (this.pos.x - this.radius < boundary.x) {
      this.vel.x = Math.abs(this.vel.x);
      this.wallHit = true;
    }
    if (this.pos.x + this.radius > boundary.x + boundary.w) {
      this.vel.x = -Math.abs(this.vel.x);
      this.wallHit = true;
    }
    if (this.pos.y - this.radius < boundary.y) {
      this.vel.y = Math.abs(this.vel.y);
      this.wallHit = true;
    }
    if (this.pos.y + this.radius > boundary.y + boundary.h) {
      this.vel.y = -Math.abs(this.vel.y);
      this.wallHit = true;
    }
  }
  behavior(time, area, offset, players) {
    if (this.wallHit) {
      this.clock += time
      this.speedMultiplier = 0
      if (this.clock > 2000) {
        this.wallHit = false;
        this.clock = 0;
      }
    }
  }
}
class Spiral extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("spiral") - 1, radius, speed, "#e8b500");
    this.angleIncrement = 0.15;
    this.angleIncrementChange = 0.004;
    this.angleAdd = false;
    this.dir = 1
  }
  behavior(time, area, offset, players) {
    if (this.angleIncrement < 0.001) {
      this.angleAdd = true;
    } else if (this.angleIncrement > 0.35) {
      this.angleAdd = false;
    }
    if (this.angleIncrement < 0.05) {
      this.angleIncrementChange = 0.0022;
    } else {
      this.angleIncrementChange = 0.004;
    }
    if (this.angleAdd) {
      this.angleIncrement += this.angleIncrementChange * (time / (1000 / 30));
    } else {
      this.angleIncrement -= this.angleIncrementChange * (time / (1000 / 30));
    }
    this.velToAngle();
    this.angle += this.angleIncrement * this.dir * (time / (1000 / 30));
    this.angleToVel();
  }
  colide(boundary) {
    if (this.pos.x - this.radius < boundary.x) {
      this.vel.x = Math.abs(this.vel.x);
      this.dir = -this.dir;
    }
    if (this.pos.x + this.radius > boundary.x + boundary.w) {
      this.vel.x = -Math.abs(this.vel.x);
      this.dir = -this.dir;
    }
    if (this.pos.y - this.radius < boundary.y) {
      this.vel.y = Math.abs(this.vel.y);
      this.dir = -this.dir;
    }
    if (this.pos.y + this.radius > boundary.y + boundary.h) {
      this.vel.y = -Math.abs(this.vel.y);
      this.dir = -this.dir;
    }
  }
}
class Gravity extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("gravity") - 1, radius, speed, "#78148c", true, "rgba(60, 0, 115, 0.15)", 150 / 32);
    this.gravity = 6 / 32;
  }
  auraEffect(player, worldPos, time) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.auraSize) {
      var dx = player.pos.x - (this.pos.x + worldPos.x);
      var dy = player.pos.y - (this.pos.y + worldPos.y);
      var dist = distance(new Vector(0, 0), new Vector(dx, dy));
      var attractionAmplitude = Math.pow(2, -(dist / (100 / 32)));
      var moveDist = this.gravity * attractionAmplitude;
      var angleToPlayer = Math.atan2(dy, dx);
      player.pos.x -= (moveDist * Math.cos(angleToPlayer)) * (time / (1000 / 30))
      player.pos.y -= (moveDist * Math.sin(angleToPlayer)) * (time / (1000 / 30))
    }
  }
}
class Repelling extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("repelling") - 1, radius, speed, "#7b9db2", true, "rgba(210, 228, 239, 0.2)", 150 / 32);
    this.gravity = 6 / 32;
  }
  auraEffect(player, worldPos, time) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.auraSize) {
      var dx = player.pos.x - (this.pos.x + worldPos.x);
      var dy = player.pos.y - (this.pos.y + worldPos.y);
      var dist = distance(new Vector(0, 0), new Vector(dx, dy));
      var attractionAmplitude = Math.pow(2, -(dist / (100 / 32)));
      var moveDist = this.gravity * attractionAmplitude;
      var angleToPlayer = Math.atan2(dy, dx);
      player.pos.x += (moveDist * Math.cos(angleToPlayer)) * (time / (1000 / 30))
      player.pos.y += (moveDist * Math.sin(angleToPlayer)) * (time / (1000 / 30))
    }
  }
}
class Wavy extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("wavy") - 1, radius, speed, "#dd2606");
    this.velToAngle();
    this.angle = Math.PI / 2;
    this.angleToVel();
    this.circleSize = 100;
    this.dir = 1;
    this.switchInterval = 800;
    this.switchTime = 400;
    this.angleIncrement = (this.speed + 6) / this.circleSize
  }
  behavior(time, area, offset, players) {
    if (this.switchTime > 0) {
      this.switchTime -= time
    } else {
      this.switchTime = this.switchInterval
      this.dir *= -1;
    }
    this.velToAngle();
    this.angle += this.angleIncrement * this.dir * (time / (1000 / 30));
    this.angleToVel();
  }
  colide(boundary) {
    if (this.pos.x - this.radius < boundary.x) {
      this.vel.x = Math.abs(this.vel.x);
      this.dir = -this.dir;
    }
    if (this.pos.x + this.radius > boundary.x + boundary.w) {
      this.vel.x = -Math.abs(this.vel.x);
      this.dir = -this.dir;
    }
    if (this.pos.y - this.radius < boundary.y) {
      this.vel.y = Math.abs(this.vel.y);
      this.dir = -this.dir;
    }
    if (this.pos.y + this.radius > boundary.y + boundary.h) {
      this.vel.y = -Math.abs(this.vel.y);
      this.dir = -this.dir;
    }
  }
}
class Zigzag extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("zigzag") - 1, radius, speed, "#b371f2");
    this.switchInterval = 500;
    this.switchTime = 500;
    this.switchAdd = false;
    this.turnAngle = Math.PI / 2
  }
  behavior(time, area, offset, players) {
    if (this.switchTime > 0) {
      this.switchTime -= time
    } else {
      this.switchTime = this.switchInterval
      if (!this.switchAdd) {
        this.velToAngle();
        this.angle -= this.turnAngle
        this.angleToVel();
        this.switchAdd = true;
      } else {
        this.velToAngle();
        this.angle += this.turnAngle
        this.angleToVel();
        this.switchAdd = false;
      }
    }
  }
}
class Zoning extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("zoning") - 1, radius, speed, "#a03811");
    this.switchInterval = 1000;
    this.switchTime = Math.random() * this.switchInterval;
    this.turnAngle = Math.PI / 2
    this.turnAngle *= (Math.floor(Math.random() * 2) * 2) - 1
  }
  behavior(time, area, offset, players) {
    if (this.switchTime > 0) {
      this.switchTime -= time
    } else {
      this.switchTime = this.switchInterval
      this.velToAngle();
      this.angle += this.turnAngle
      this.angleToVel();
    }
  }
}
class Radiating extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("radiating_bullets") - 1, radius, speed, "#d3134f");
    this.releaseTime = 4000;
    this.clock = Math.random() * this.releaseTime;
  }
  behavior(time, area, offset, players) {
    this.clock += time;
    if (this.clock > this.releaseTime) {
      for (var i = 0; i < 9; i++) {
        area.addSniperBullet(2, this.pos, i * Math.PI / 4, 9 / 32, 8)
      }
      this.clock = 0;
    }
  }
}
class RadiatingBullet extends Entity {
  constructor(pos, angle, radius, speed) {
    super(pos, radius, "#d3134f");
    this.vel.x = Math.cos(angle) * speed;
    this.vel.y = Math.sin(angle) * speed;
    this.weak = true;
  }
  interact(player, worldPos) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.radius && !player.god) {
      player.pos.x = worldPos.x + 4;
      player.pos.y = worldPos.y + 7.5;
    }
  }
}
class FrostGiant extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("frost_giant") - 1, radius, speed, "#7e7cd6");
  }
}
class SpeedSniper extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("speed_Sniper") - 1, radius, speed, "#ff9000");
    this.releaseTime = 2500;
    this.clock = Math.random() * this.releaseTime;
  }
  behavior(time, area, offset, players) {
    this.clock += time;
    if (this.clock > this.releaseTime) {
      var min = 18.75;
      var index;
      var boundary = area.getActiveBoundary();
      for (var i in players) {
        if (distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y)) < min && pointInRectangle(new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y), new Vector(boundary.x, boundary.y), new Vector(boundary.w, boundary.h))) {
          min = distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y));
          index = i;
        }
      }
      if (index != undefined) {
        var dX = (players[index].pos.x - offset.x) - this.pos.x;
        var dY = (players[index].pos.y - offset.y) - this.pos.y;
        area.addSniperBullet(3, this.pos, Math.atan2(dY, dX), 10 / 32, 16)
        this.clock = 0;
      }
    }
  }
}
class SpeedSniperBullet extends Entity {
  constructor(pos, angle, radius, speed) {
    super(pos, radius, "#ff9000");
    this.vel.x = Math.cos(angle) * speed;
    this.vel.y = Math.sin(angle) * speed;
    this.weak = true;
    this.Harmless = true;
  }
  interact(player, worldPos) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.radius && !player.god) {

    }
  }
}
class RegenSniper extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("regen_Sniper") - 1, radius, speed, "#00cc8e");
    this.releaseTime = 3000;
    this.clock = Math.random() * this.releaseTime;
  }
  behavior(time, area, offset, players) {
    this.clock += time;
    if (this.clock > this.releaseTime) {
      var min = 18.75;
      var index;
      var boundary = area.getActiveBoundary();
      for (var i in players) {
        if (distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y)) < min && pointInRectangle(new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y), new Vector(boundary.x, boundary.y), new Vector(boundary.w, boundary.h))) {
          min = distance(this.pos, new Vector(players[i].pos.x - offset.x, players[i].pos.y - offset.y));
          index = i;
        }
      }
      if (index != undefined) {
        var dX = (players[index].pos.x - offset.x) - this.pos.x;
        var dY = (players[index].pos.y - offset.y) - this.pos.y;
        area.addSniperBullet(4, this.pos, Math.atan2(dY, dX), 10 / 32, 16)
        this.clock = 0;
      }
    }
  }
}
class RegenSniperBullet extends Entity {
  constructor(pos, angle, radius, speed) {
    super(pos, radius, "#00cc8e");
    this.vel.x = Math.cos(angle) * speed;
    this.vel.y = Math.sin(angle) * speed;
    this.weak = true;
    this.Harmless = true;
  }
  interact(player, worldPos) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.radius && !player.god) {

    }
  }
}
class Snowman extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("snowman") - 1, radius, speed, "#ffffff");
    this.wallHit = false;
    this.snowmanRadiusMultiplier = 1;
    this.growthRate = 0.05 / 32;
    this.maxRadiusMultiplier = 3;
    this.wallTime = 1500;
    this.wallDuration = this.wallTime;
  }
  colide(boundary) {
    if (this.pos.x - this.radius < boundary.x) {
      this.vel.x = Math.abs(this.vel.x);
      this.wallHit = true;
    }
    if (this.pos.x + this.radius > boundary.x + boundary.w) {
      this.vel.x = -Math.abs(this.vel.x);
      this.wallHit = true;
    }
    if (this.pos.y - this.radius < boundary.y) {
      this.vel.y = Math.abs(this.vel.y);
      this.wallHit = true;
    }
    if (this.pos.y + this.radius > boundary.y + boundary.h) {
      this.vel.y = -Math.abs(this.vel.y);
      this.wallHit = true;
    }
  }
  behavior(time, area, offset, players) {
    if (this.wallHit) {
      var shrinkingRemaining = this.snowmanRadiusMultiplier - 1;
      var radiusDifference = shrinkingRemaining * (1 - (this.wallDuration / this.wallTime));
      this.snowmanRadiusMultiplier *= radiusDifference;
      this.radiusMultiplier *= this.snowmanRadiusMultiplier;
      this.wallDuration -= time;
      this.speedMultiplier = 0;
      if (this.wallDuration < 0) {
        this.wallDuration = this.wallTime;
        this.wallHit = false;
      }
    } else {
      this.snowmanRadiusMultiplier = Math.min(this.snowmanRadiusMultiplier + this.growthRate, this.maxRadiusMultiplier);
      this.radiusMultiplier *= this.snowmanRadiusMultiplier;
    }
  }
}
class Slippery extends Enemy {
  constructor(pos, radius, speed) {
    super(pos, entityTypes.indexOf("slippery") - 1, radius, speed, "#1aacbf", true, "rgba(33, 161, 165, 0.3)", 180 / 32);
  }
  auraEffect(player, worldPos) {
    if (distance(player.pos, new Vector(this.pos.x + worldPos.x, this.pos.y + worldPos.y)) < player.radius + this.auraSize) {
      player.slippery = true;
    }
  }
}
