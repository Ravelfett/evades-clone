function pointInRectangle(pos, rectpos, rectsize) {
  return (pos.x >= rectpos.x && pos.x <= rectpos.x + rectsize.x && pos.y >= rectpos.y && pos.y <= rectpos.y + rectsize.y);
}
var entityTypes = [
  "unknown",
  "normal",
  "wall",
  "dasher",
  "homing",
  "slowing",
  "draining",
  "oscillating",
  "turning",
  "liquid",
  "sizing",
  "switch",
  "freezing",
  "sniper",
  "teleporting",
  "draining",
  "immune",
  "ice_sniper",
  "disabling",
  "icicle",
  "spiral",
  "gravity",
  "repelling",
  "wavy",
  "zigzag",
  "zoning",
  "radiating_bullets",
  "frost_giant",
  "speed_sniper",
  "regen_sniper",
  "snowman",
  "slippery"
]
function closestPointToRectangle(pos, rectpos, rectsize) {
  var xpos = pos.x;
  var ypos = pos.y;
  if (xpos < rectpos.x) {
    xpos = rectpos.x
  }
  if (xpos > rectpos.x + rectsize.x) {
    xpos = rectpos.x + rectsize.x;
  }
  if (ypos < rectpos.y) {
    ypos = rectpos.y
  }
  if (ypos > rectpos.y + rectsize.y) {
    ypos = rectpos.y + rectsize.y;
  }
  return new Vector(xpos, ypos);
}

function make2Darray(cols, rows, xpos, ypos, type) {
  var arr = new Array(cols);
  for (var i = 0; i < arr.length; i++) {
    arr[i] = new Array(rows);
    for (var j = 0; j < arr[i].length; j++) {
      arr[i][j] = new Tile(i + xpos, j + ypos, type);
    }
  }
  return arr;
};
function distance(pos1, pos2) {
  return Math.sqrt(Math.pow(pos1.x - pos2.x, 2) + Math.pow(pos1.y - pos2.y, 2));
}
function perimeter(rect){
  return (rect.w*2+rect.h*2);
}
function warpAround(rect,length){
  var result = {};
  var xpos;
  var ypos;
  var dir;
  if (length<rect.w) {
    dir = 0;
    ypos = rect.y;
    xpos = rect.x+length;
  }else if (length<rect.w+rect.h) {
    dir = 1;
    xpos = rect.x+rect.w;
    ypos = rect.y+(length-rect.w)
  }else if (length<rect.w*2+rect.h) {
    dir = 2;
    ypos = rect.y+rect.h
    xpos = (rect.x+rect.w)-(length-(rect.w+rect.h));
  }else if (length<rect.w*2+rect.h*2) {
    dir = 3;
    xpos = rect.x;
    ypos = (rect.y+rect.h)-(length-(rect.w*2+rect.h))
  }
  result.x = xpos;
  result.y = ypos;
  result.dir = dir;
  return result;
}
