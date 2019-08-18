var missingMap = {
  "name": "Missing Map",
  "properties": {
    "friction": 0.75
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "safe",
          "x": 0,
          "y": 0,
          "width": 160,
          "height": 160
        }
      ]
    }
  ]
}
var stellarSquare = {
  "name": "Stellar Square",
  "properties": {
    "friction": 0.75
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 1216,
          "y": 0,
          "width": 64,
          "height": 1216,
          "translate": {
            "x": 832,
            "y": 0
          },
          "properties": {
            "background_color": [
              0,
              50,
              0,
              50
            ]
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 128,
          "width": 128,
          "height": 960
        },
        {
          "type": "safe",
          "x": 1088,
          "y": 128,
          "width": 128,
          "height": 960
        },
        {
          "type": "safe",
          "x": 0,
          "y": 0,
          "width": 1216,
          "height": 128
        },
        {
          "type": "safe",
          "x": 0,
          "y": 1088,
          "width": 1216,
          "height": 128
        },
        {
          "type": "active",
          "x": 128,
          "y": 128,
          "width": 960,
          "height": 960,
          "spawner": [
            {
              "count": 3,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 5,
              "types": [
                "wavy",
                "dasher",
                "spiral",
                "sizing"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 15,
              "radius": 18,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ]
        }
      ]
    }
  ]
}
var centralCore = {
  "name": "Central Core",
  "properties": {
    "friction": 0.75
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 64,
          "y": 0,
          "width": 256,
          "height": 64,
          "translate": {
            "x": -1952,
            "y": 44000
          }
        },
        {
          "type": "teleport",
          "x": 64,
          "y": 416,
          "width": 256,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 2240
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -832,
            "y": 0
          },
          "properties": {
            "background_color": [
              0,
              50,
              0,
              50
            ]
          }
        },
        {
          "type": "safe",
          "x": 64,
          "y": 64,
          "width": 256,
          "height": 352
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 18,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 30,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 30,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 12,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 24,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 12,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 24,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 40,
              "radius": 18,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 120,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 7,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 7,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 12,
              "radius": 12,
              "speed": 7,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 7,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 12,
              "radius": 12,
              "speed": 7,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 12,
              "radius": 24,
              "speed": 7,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 5,
              "types": [
                "normal",
                "slowing"
              ]
            },
            {
              "count": 9,
              "radius": 18,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 24,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 11,
              "radius": 18,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 12,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 5,
              "types": [
                "normal",
                "slowing"
              ]
            },
            {
              "count": 12,
              "radius": 18,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 15,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 15,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 15,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 15,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 25,
              "radius": 18,
              "speed": 7,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 5,
              "types": [
                "normal",
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 22,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 18,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 2,
              "radius": 120,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 9,
              "radius": 18,
              "speed": 5,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 19,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 13,
              "radius": 18,
              "speed": 5,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 24,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 11,
              "radius": 18,
              "speed": 5,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 7,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 7,
              "types": [
                "homing"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing",
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 16,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 9,
              "radius": 18,
              "speed": 7,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 12,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 9,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 9,
              "radius": 24,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 5,
              "types": [
                "homing"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing",
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 23,
              "radius": 18,
              "speed": 7,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 32,
              "speed": 7,
              "types": [
                "homing"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing",
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 5,
              "types": [
                "homing"
              ]
            },
            {
              "count": 2,
              "radius": 120,
              "speed": 5,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 12,
              "speed": 3.3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 12,
              "speed": 3.3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 20,
              "radius": 18,
              "speed": 3.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 40,
              "radius": 12,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 17,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 14,
              "radius": 18,
              "speed": 5,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 17,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 56,
              "radius": 18,
              "speed": 5,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 20,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "draining"
              ]
            },
            {
              "count": 35,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 17,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 18,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "draining"
              ]
            },
            {
              "count": 38,
              "radius": 12,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 17,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 18,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "draining"
              ]
            },
            {
              "count": 38,
              "radius": 30,
              "speed": 2,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 15,
              "radius": 12,
              "speed": 0.5,
              "types": [
                "draining"
              ]
            },
            {
              "count": 20,
              "radius": 60,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 12,
              "speed": 10,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 20,
              "radius": 18,
              "speed": 10,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "removal",
          "width": 160,
          "x": 3040,
          "y": 0
        }
      ]
    }
  ]
}
var hauntedHalls = {
  "name": "Haunted Halls",
  "properties": {
    "friction": 0.75,
    "background_color": [
      78,
      39,
      0,
      80
    ],
    "texture": "leaves"
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": -2240
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 416,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 2240
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 64,
          "width": 320,
          "height": 352,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 2,
              "radius": 45,
              "speed": 4,
              "types": [
                "tree"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.9,
        "background_color": [
          78,
          39,
          0,
          90
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 4,
              "radius": 45,
              "speed": 4,
              "types": [
                "tree"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.8,
        "background_color": [
          78,
          39,
          0,
          100
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 6,
              "radius": 45,
              "speed": 4,
              "types": [
                "tree"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.7,
        "background_color": [
          78,
          39,
          0,
          110
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 6,
              "radius": 45,
              "speed": 4,
              "types": [
                "tree"
              ]
            },
            {
              "count": 2,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.6,
        "background_color": [
          78,
          39,
          0,
          120
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 6,
              "radius": 45,
              "speed": 4,
              "types": [
                "tree"
              ]
            },
            {
              "count": 2,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 3,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.5,
        "background_color": [
          78,
          39,
          0,
          130
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 6,
              "radius": 45,
              "speed": 4,
              "types": [
                "tree"
              ]
            },
            {
              "count": 4,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 10,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.5,
        "background_color": [
          78,
          39,
          0,
          130
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 5,
              "radius": 45,
              "speed": 4,
              "types": [
                "tree"
              ]
            },
            {
              "count": 4,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 10,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.4,
        "background_color": [
          78,
          39,
          0,
          140
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 4,
              "radius": 45,
              "speed": 4,
              "types": [
                "tree"
              ]
            },
            {
              "count": 4,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 15,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 10,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.3,
        "background_color": [
          78,
          39,
          0,
          150
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 2,
              "radius": 45,
              "speed": 4,
              "types": [
                "tree"
              ]
            },
            {
              "count": 2,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 25,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 10,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.2,
        "background_color": [
          78,
          39,
          0,
          160
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 2,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 35,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 15,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "flashlight_spawner",
          "x": 240,
          "y": 240
        },
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0.1,
        "background_color": [
          78,
          39,
          0,
          170
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 2,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 50,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 20,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "flashlight_spawner",
          "x": 240,
          "y": 240
        },
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0,
        "background_color": [
          78,
          39,
          0,
          180
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 60,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 25,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "flashlight_spawner",
          "x": 240,
          "y": 240
        },
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "torch",
          "x": 420,
          "y": -36
        },
        {
          "type": "torch",
          "x": 740,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1060,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1380,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1700,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2020,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2340,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2660,
          "y": -36
        },
        {
          "type": "torch",
          "x": 420,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 740,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1060,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1380,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1700,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2020,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2340,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2660,
          "y": 480,
          "upside_down": true
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0,
        "background_color": [
          78,
          39,
          0,
          180
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 60,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 30,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "flashlight_spawner",
          "x": 240,
          "y": 240
        },
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "torch",
          "x": 420,
          "y": -36
        },
        {
          "type": "torch",
          "x": 740,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1060,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1380,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1700,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2020,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2340,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2660,
          "y": -36
        },
        {
          "type": "torch",
          "x": 420,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 740,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1060,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1380,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1700,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2020,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2340,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2660,
          "y": 480,
          "upside_down": true
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0,
        "background_color": [
          78,
          39,
          0,
          180
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 60,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 35,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "torch",
          "x": 420,
          "y": -36
        },
        {
          "type": "torch",
          "x": 740,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1060,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1380,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1700,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2020,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2340,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2660,
          "y": -36
        },
        {
          "type": "torch",
          "x": 420,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 740,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1060,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1380,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1700,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2020,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2340,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2660,
          "y": 480,
          "upside_down": true
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0,
        "background_color": [
          78,
          39,
          0,
          180
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 60,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 40,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ],
      "assets": [
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 2880,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "torch",
          "x": 420,
          "y": -36
        },
        {
          "type": "torch",
          "x": 740,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1060,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1380,
          "y": -36
        },
        {
          "type": "torch",
          "x": 1700,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2020,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2340,
          "y": -36
        },
        {
          "type": "torch",
          "x": 2660,
          "y": -36
        },
        {
          "type": "torch",
          "x": 420,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 740,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1060,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1380,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 1700,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2020,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2340,
          "y": 480,
          "upside_down": true
        },
        {
          "type": "torch",
          "x": 2660,
          "y": 480,
          "upside_down": true
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "properties": {
        "lighting": 0,
        "background_color": [
          78,
          39,
          0,
          180
        ]
      },
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 7680,
          "height": 480,
          "spawner": [
            {
              "count": 180,
              "radius": 30,
              "types": [
                "fake_pumpkin"
              ]
            },
            {
              "count": 135,
              "radius": 30,
              "speed": 8,
              "types": [
                "pumpkin"
              ]
            }
          ]
        },
        {
          "height": 416,
          "type": "safe",
          "width": 320,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 64,
          "type": "exit",
          "translate": {
            "x": 0,
            "y": 160
          },
          "width": 320,
          "x": 8000,
          "y": 416
        }
      ],
      "assets": [
        {
          "type": "light_region",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "light_region",
          "x": 8000,
          "y": 0,
          "width": 320,
          "height": 480
        },
        {
          "type": "torch",
          "x": 420,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 420,
          "y": 480
        },
        {
          "type": "torch",
          "x": 740,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 740,
          "y": 480
        },
        {
          "type": "torch",
          "x": 1060,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 1060,
          "y": 480
        },
        {
          "type": "torch",
          "x": 1380,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 1380,
          "y": 480
        },
        {
          "type": "torch",
          "x": 1700,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 1700,
          "y": 480
        },
        {
          "type": "torch",
          "x": 2020,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 2020,
          "y": 480
        },
        {
          "type": "torch",
          "x": 2340,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 2340,
          "y": 480
        },
        {
          "type": "torch",
          "x": 2560,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 2560,
          "y": 480
        },
        {
          "type": "torch",
          "x": 2720,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 2720,
          "y": 480
        },
        {
          "type": "torch",
          "x": 2880,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 2880,
          "y": 480
        },
        {
          "type": "torch",
          "x": 3040,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 3040,
          "y": 480
        },
        {
          "type": "torch",
          "x": 3200,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 3200,
          "y": 480
        },
        {
          "type": "torch",
          "x": 3360,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 3360,
          "y": 480
        },
        {
          "type": "torch",
          "x": 3520,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 3520,
          "y": 480
        },
        {
          "type": "torch",
          "x": 3680,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 3680,
          "y": 480
        },
        {
          "type": "torch",
          "x": 3840,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 3840,
          "y": 480
        },
        {
          "type": "torch",
          "x": 4000,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 4000,
          "y": 480
        },
        {
          "type": "torch",
          "x": 4160,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 4160,
          "y": 480
        },
        {
          "type": "torch",
          "x": 4320,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 4320,
          "y": 480
        },
        {
          "type": "torch",
          "x": 4480,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 4480,
          "y": 480
        },
        {
          "type": "torch",
          "x": 4640,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 4640,
          "y": 480
        },
        {
          "type": "torch",
          "x": 4800,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 4800,
          "y": 480
        },
        {
          "type": "torch",
          "x": 4960,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 4960,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5120,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5120,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5200,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5200,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5280,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5280,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5360,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5360,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5440,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5440,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5520,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5520,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5600,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5600,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5680,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5680,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5760,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5760,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5840,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5840,
          "y": 480
        },
        {
          "type": "torch",
          "x": 5920,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 5920,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6000,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6000,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6080,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6080,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6160,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6160,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6240,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6240,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6320,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6320,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6400,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6400,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6480,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6480,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6560,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6560,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6640,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6640,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6720,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6720,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6800,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6800,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6880,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6880,
          "y": 480
        },
        {
          "type": "torch",
          "x": 6960,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 6960,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7040,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7040,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7120,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7120,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7200,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7200,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7280,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7280,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7360,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7360,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7440,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7440,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7520,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7520,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7600,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7600,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7680,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7680,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7760,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7760,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7840,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7840,
          "y": 480
        },
        {
          "type": "torch",
          "x": 7920,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 7920,
          "y": 480
        },
        {
          "type": "torch",
          "x": 8000,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 8000,
          "y": 480
        },
        {
          "type": "torch",
          "x": 8080,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 8080,
          "y": 480
        },
        {
          "type": "torch",
          "x": 8300,
          "y": -36
        },
        {
          "type": "torch",
          "upside_down": true,
          "x": 8300,
          "y": 480
        },
        {
          "type": "gate",
          "x": 8320,
          "y": 0,
          "width": 64,
          "height": 480
        }
      ]
    },
    {
      "x": 57952,
      "y": "last_bottom",
      "properties": {
        "lighting": 0.5,
        "background_color": [
          78,
          39,
          0,
          130
        ]
      },
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 480,
          "x": 0,
          "y": 0
        },
        {
          "height": 2560,
          "type": "victory",
          "width": "last_width",
          "x": 0,
          "y": "last_bottom"
        },
        {
          "height": 64,
          "type": "removal",
          "width": "last_width",
          "x": 0,
          "y": "last_bottom"
        }
      ]
    }
  ]
}
var peculiarPyramid = {
  "areas": [
    {
      "name": "Tunnel 1",
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "height": 64,
          "width": 320,
          "translate": {
            "x": 0,
            "y": -2240
          },
          "type": "teleport",
          "x": 0,
          "y": 0
        },
        {
          "height": 64,
          "width": 320,
          "translate": {
            "x": 0,
            "y": 11360
          },
          "type": "teleport",
          "x": 0,
          "y": 416
        },
        {
          "height": 352,
          "width": 320,
          "type": "safe",
          "x": 0,
          "y": 64,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "height": 480,
          "width": 2560,
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "x": 320,
          "y": 0
        },
        {
          "height": 416,
          "type": "safe",
          "width": 256,
          "x": 2880,
          "y": 0
        },
        {
          "height": 64,
          "translate": {
            "x": 1952,
            "y": 4512
          },
          "type": "exit",
          "width": 256,
          "x": 2880,
          "y": 416
        }
      ]
    },
    {
      "name": "Tunnel 2",
      "x": 4832,
      "y": 4800,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": -1952,
            "y": -4512
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 0
        },
        {
          "height": 96,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 64
        },
        {
          "height": 96,
          "type": "safe",
          "width": 224,
          "x": 256,
          "y": 0
        },
        {
          "height": 640,
          "spawner": [
            {
              "count": 3,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 160
        },
        {
          "height": 96,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 800
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 224,
          "y": 896
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 224,
          "x": 0,
          "y": 896
        }
      ]
    },
    {
      "name": "Tunnel 3",
      "x": 4832,
      "y": 5760,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 0
        },
        {
          "height": 352,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 64
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 416
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 1280,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 416,
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 64
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 256,
          "x": 1536,
          "y": 0
        }
      ]
    },
    {
      "name": "Tunnel 4",
      "x": 6144,
      "y": 4640,
      "zones": [
        {
          "height": 160,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 416,
          "y": 0
        },
        {
          "height": 160,
          "type": "safe",
          "width": 416,
          "x": 0,
          "y": 0
        },
        {
          "height": 640,
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 160
        },
        {
          "height": 256,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 800
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 1056
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 224,
          "x": 256,
          "y": 1056
        }
      ]
    },
    {
      "name": "Tunnel 5",
      "x": 6624,
      "y": 4640,
      "zones": [
        {
          "height": 128,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 352,
          "type": "safe",
          "width": 64,
          "x": 0,
          "y": 128
        },
        {
          "height": 480,
          "type": "safe",
          "width": 192,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 416,
          "type": "safe",
          "width": 256,
          "x": 2816,
          "y": 0
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 256,
          "x": 2816,
          "y": 416
        }
      ]
    },
    {
      "name": "Outer 1",
      "x": 9216,
      "y": 5120,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 224,
          "x": 256,
          "y": 0
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 0
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 64
        },
        {
          "height": 5120,
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 3,
              "types": [
                "dasher"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 0,
          "y": 5376
        },
        {
          "height": 256,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 416,
          "y": 5376
        }
      ]
    },
    {
      "name": "Outer 2",
      "x": 9696,
      "y": 10272,
      "zones": [
        {
          "height": 224,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 256
        },
        {
          "height": 256,
          "type": "safe",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 480,
          "type": "safe",
          "width": 192,
          "x": 64,
          "y": 0
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 10,
              "radius": 28,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 6,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 5120,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 416,
          "type": "safe",
          "width": 256,
          "x": 5376,
          "y": 64
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 256,
          "x": 5376,
          "y": 0
        }
      ]
    },
    {
      "name": "Outer 3",
      "x": 14848,
      "y": 4640,
      "zones": [
        {
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 64,
          "y": 0
        },
        {
          "height": 5120,
          "spawner": [
            {
              "count": 20,
              "radius": 28,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 3,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 5376
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 5568
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 224,
          "x": 256,
          "y": 5568
        }
      ]
    },
    {
      "name": "Outer 4",
      "x": 9792,
      "y": 4640,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 416
        },
        {
          "height": 416,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 0
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 6,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 10,
              "radius": 28,
              "speed": 6,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 4480,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": 4736,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 64,
          "x": 4992,
          "y": 224
        },
        {
          "height": 224,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 4992,
          "y": 0
        }
      ]
    },
    {
      "name": "Outer 5",
      "x": 9792,
      "y": 5120,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 224,
          "x": 0,
          "y": 0
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 224,
          "y": 0
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 64
        },
        {
          "height": 4480,
          "spawner": [
            {
              "count": 8,
              "radius": 12,
              "speed": 6,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 6,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 28,
              "speed": 6,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 0,
          "y": 4736
        },
        {
          "height": 256,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 416,
          "y": 4736
        }
      ]
    },
    {
      "name": "Outer 6",
      "x": 10272,
      "y": 9632,
      "zones": [
        {
          "height": 256,
          "type": "safe",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 224,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 256
        },
        {
          "height": 480,
          "type": "safe",
          "width": 192,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 6,
              "types": [
                "homing"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 9,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 3840,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 416,
          "type": "safe",
          "width": 256,
          "x": 4096,
          "y": 64
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 256,
          "x": 4096,
          "y": 0
        }
      ]
    },
    {
      "name": "Outer 7",
      "x": 14144,
      "y": 5280,
      "zones": [
        {
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 64,
          "y": 0
        },
        {
          "height": 3840,
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 6,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 4096
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 4288
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 224,
          "x": 256,
          "y": 4288
        }
      ]
    },
    {
      "name": "Outer 8",
      "x": 10368,
      "y": 5280,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 416
        },
        {
          "height": 32,
          "translate": {
            "x": -480,
            "y": -380
          },
          "type": "exit",
          "width": 32,
          "x": 0,
          "y": 0
        },
        {
          "height": 32,
          "type": "safe",
          "width": 256,
          "x": 32,
          "y": 0
        },
        {
          "height": 384,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 32
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 9,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 3200,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 480,
          "type": "safe",
          "width": 256,
          "x": 3456,
          "y": 0
        },
        {
          "height": 224,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 3712,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 64,
          "x": 3712,
          "y": 224
        }
      ]
    },
    {
      "name": "Perimeter 1",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          70
        ]
      },
      "x": 4832,
      "y": 6240,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 224,
          "x": 0,
          "y": 0
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 224,
          "y": 0
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 64
        },
        {
          "height": 5120,
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 0,
          "y": 5376
        },
        {
          "height": 256,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 416,
          "y": 5376
        }
      ]
    },
    {
      "name": "Perimeter 2",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          70
        ]
      },
      "x": 5312,
      "y": 11392,
      "zones": [
        {
          "height": 256,
          "type": "safe",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 224,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 256
        },
        {
          "height": 480,
          "type": "safe",
          "width": 192,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 24,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 24,
              "speed": 1,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 5120,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 32,
          "translate": {
            "x": 320,
            "y": -1568
          },
          "type": "exit",
          "width": 32,
          "x": 5504,
          "y": 128
        },
        {
          "height": 32,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 32,
          "x": 3328,
          "y": 448
        }
      ]
    },
    {
      "name": "Perimeter 3",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          90
        ]
      },
      "x": 8544,
      "y": 11872,
      "zones": [
        {
          "height": 256,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 0
        },
        {
          "height": 1920,
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 50,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 256,
          "x": 0,
          "y": 256
        },
        {
          "height": 256,
          "type": "safe",
          "width": 192,
          "x": 0,
          "y": 2176
        },
        {
          "height": 256,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 192,
          "y": 2176
        }
      ]
    },
    {
      "name": "Perimeter 4",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          90
        ]
      },
      "x": 8800,
      "y": 14048,
      "zones": [
        {
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 192,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 45,
              "radius": 18,
              "speed": 50,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 15,
              "radius": 18,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 7680,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 192,
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 64
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 256,
          "x": 7936,
          "y": 0
        }
      ]
    },
    {
      "name": "Perimeter 5",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          90
        ]
      },
      "x": 16736,
      "y": 8736,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 0
        },
        {
          "height": 192,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 64
        },
        {
          "height": 4800,
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 13,
              "radius": 24,
              "speed": 6,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 256,
          "x": 0,
          "y": 256
        },
        {
          "height": 192,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 5056
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 5248
        }
      ]
    },
    {
      "name": "Perimeter 6",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          90
        ]
      },
      "x": 16736,
      "y": 3360,
      "zones": [
        {
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 192,
          "x": 64,
          "y": 0
        },
        {
          "height": 4864,
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 13,
              "radius": 24,
              "speed": 6,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 256,
          "x": 0,
          "y": 256
        },
        {
          "height": 192,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 5120
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 5312
        }
      ]
    },
    {
      "name": "Perimeter 7",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          90
        ]
      },
      "x": 11104,
      "y": 3360,
      "zones": [
        {
          "height": 256,
          "translate": {
            "x": -128,
            "y": 0
          },
          "type": "exit",
          "width": 32,
          "x": 0,
          "y": 0
        },
        {
          "height": 192,
          "type": "safe",
          "width": 224,
          "x": 32,
          "y": 0
        },
        {
          "height": 64,
          "type": "safe",
          "width": 64,
          "x": 32,
          "y": 192
        },
        {
          "height": 64,
          "translate": {
            "x": 256,
            "y": 2496
          },
          "type": "exit",
          "width": 64,
          "x": 96,
          "y": 192
        },
        {
          "height": 64,
          "type": "safe",
          "width": 96,
          "x": 160,
          "y": 192
        },
        {
          "height": 256,
          "spawner": [
            {
              "count": 9,
              "radius": 24,
              "speed": 9,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 9,
              "radius": 24,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 5120,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 192,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "name": "Inner 1",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          50
        ]
      },
      "x": 10368,
      "y": 5760,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 224,
          "x": 0,
          "y": 0
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 224,
          "y": 0
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 64
        },
        {
          "height": 3200,
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 6,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 0,
          "y": 3456
        },
        {
          "height": 256,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 416,
          "y": 3456
        }
      ]
    },
    {
      "name": "Inner 2",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          50
        ]
      },
      "x": 10848,
      "y": 8992,
      "zones": [
        {
          "height": 256,
          "type": "safe",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 224,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 256
        },
        {
          "height": 480,
          "type": "safe",
          "width": 192,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 3,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 416,
          "type": "safe",
          "width": 256,
          "x": 2816,
          "y": 64
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 256,
          "x": 2816,
          "y": 0
        }
      ]
    },
    {
      "name": "Inner 3",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          55
        ]
      },
      "x": 13440,
      "y": 5920,
      "zones": [
        {
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 64,
          "y": 0
        },
        {
          "height": 2560,
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 9,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 2816
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 3008
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 224,
          "x": 256,
          "y": 3008
        }
      ]
    },
    {
      "name": "Inner 4",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          60
        ]
      },
      "x": 10944,
      "y": 5920,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 416
        },
        {
          "height": 32,
          "translate": {
            "x": -480,
            "y": -380
          },
          "type": "exit",
          "width": 32,
          "x": 0,
          "y": 0
        },
        {
          "height": 32,
          "type": "safe",
          "width": 256,
          "x": 32,
          "y": 0
        },
        {
          "height": 384,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 32
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 40,
              "radius": 18,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 1920,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": 2176,
          "y": 0
        },
        {
          "height": 224,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 2432,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 64,
          "x": 2432,
          "y": 224
        }
      ]
    },
    {
      "name": "Inner 5",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          60
        ]
      },
      "x": 10944,
      "y": 6400,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 224,
          "x": 0,
          "y": 0
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 224,
          "y": 0
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 64
        },
        {
          "height": 1920,
          "spawner": [
            {
              "count": 30,
              "radius": 18,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 3,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 0,
          "y": 2176
        },
        {
          "height": 256,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 416,
          "y": 2176
        }
      ]
    },
    {
      "name": "Inner 6",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          60
        ]
      },
      "x": 11424,
      "y": 8352,
      "zones": [
        {
          "height": 256,
          "type": "safe",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 224,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 256
        },
        {
          "height": 480,
          "type": "safe",
          "width": 192,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 20,
              "radius": 18,
              "speed": 3,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 1280,
          "x": "last_right",
          "y": 0
        },
        {
          "height": 416,
          "type": "safe",
          "width": 256,
          "x": 1536,
          "y": 64
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 256,
          "x": 1536,
          "y": 0
        }
      ]
    },
    {
      "name": "Inner 7",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          65
        ]
      },
      "x": 12736,
      "y": 6560,
      "zones": [
        {
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 64,
          "y": 0
        },
        {
          "height": 1280,
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 6,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 1536
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 1728
        },
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 224,
          "x": 256,
          "y": 1728
        }
      ]
    },
    {
      "name": "Inner 8",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          70
        ]
      },
      "x": 11584,
      "y": 6560,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": 160
          },
          "type": "exit",
          "width": 256,
          "x": 0,
          "y": 416
        },
        {
          "height": 32,
          "translate": {
            "x": -480,
            "y": -380
          },
          "type": "exit",
          "width": 32,
          "x": 0,
          "y": 0
        },
        {
          "height": 32,
          "type": "safe",
          "width": 256,
          "x": 32,
          "y": 0
        },
        {
          "height": 384,
          "type": "safe",
          "width": 256,
          "x": 0,
          "y": 32
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 10,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 10,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 640,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": 896,
          "y": 0
        },
        {
          "height": 224,
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 1088,
          "y": 0
        },
        {
          "height": 256,
          "type": "safe",
          "width": 64,
          "x": 1088,
          "y": 224
        }
      ]
    },
    {
      "name": "Inner 9",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          90
        ]
      },
      "x": 11584,
      "y": 7040,
      "zones": [
        {
          "height": 64,
          "translate": {
            "x": 0,
            "y": -160
          },
          "type": "exit",
          "width": 224,
          "x": 0,
          "y": 0
        },
        {
          "height": 64,
          "type": "safe",
          "width": 256,
          "x": 224,
          "y": 0
        },
        {
          "height": 192,
          "type": "safe",
          "width": 480,
          "x": 0,
          "y": 64
        },
        {
          "height": 640,
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 12,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 12,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 480,
          "x": 0,
          "y": 256
        },
        {
          "height": 256,
          "type": "safe",
          "width": 416,
          "x": 0,
          "y": 896
        },
        {
          "height": 256,
          "translate": {
            "x": 256,
            "y": -576
          },
          "type": "exit",
          "width": 64,
          "x": 416,
          "y": 896
        }
      ]
    },
    {
      "x": 12160,
      "y": 7168,
      "zones": [
        {
          "height": 256,
          "translate": {
            "x": -256,
            "y": 576
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 224
        },
        {
          "height": 192,
          "type": "victory",
          "width": 288,
          "x": 0,
          "y": 0
        },
        {
          "height": 32,
          "type": "victory",
          "width": 64,
          "x": 0,
          "y": 192
        },
        {
          "height": 288,
          "type": "victory",
          "width": 192,
          "x": 288,
          "y": 0
        },
        {
          "height": 192,
          "type": "victory",
          "width": 288,
          "x": 192,
          "y": 288
        },
        {
          "height": 288,
          "type": "victory",
          "width": 128,
          "x": 64,
          "y": 192
        },
        {
          "height": 96,
          "type": "removal",
          "width": 96,
          "x": 192,
          "y": 192
        }
      ]
    },
    {
      "name": "Chamber 1",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          60
        ]
      },
      "x": 8608,
      "y": 3360,
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -96,
            "y": 0
          },
          "type": "exit",
          "width": 32,
          "x": 0,
          "y": 0
        },
        {
          "height": 480,
          "type": "safe",
          "width": 224,
          "x": 32,
          "y": 0
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 45,
              "radius": 18,
              "speed": 1,
              "types": [
                "speed_sniper"
              ]
            }
          ],
          "type": "active",
          "width": 1920,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": 2176,
          "y": 0
        },
        {
          "height": 256,
          "translate": {
            "x": 128,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 2432,
          "y": 0
        },
        {
          "height": 224,
          "type": "safe",
          "width": 64,
          "x": 2432,
          "y": 256
        }
      ]
    },
    {
      "name": "Chamber 2",
      "properties": {
        "background_color": [
          68,
          62,
          12,
          60
        ]
      },
      "x": 8288,
      "y": 3360,
      "zones": [
        {
          "height": 320,
          "translate": {
            "x": 96,
            "y": 0
          },
          "type": "exit",
          "width": 32,
          "x": 288,
          "y": 0
        },
        {
          "height": 320,
          "type": "victory",
          "width": 288,
          "x": 0,
          "y": 0
        }
      ]
    }
  ],
  "name": "Peculiar Pyramid",
  "properties": {
    "background_color": [
      237,
      210,
      11,
      40
    ],
    "friction": 0.75
  }
}
var wackyWonderland = {
  "name": "Wacky Wonderland",
  "properties": {
    "friction": 0.75,
    "background_color": [
      209,
      100,
      209,
      30
    ]
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": -11360
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 416,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 1120
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 64,
          "width": 320,
          "height": 352,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 4,
              "radius": 18,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 6,
              "radius": 18,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 4,
              "radius": 18,
              "speed": 5
            },
            {
              "types": [
                "wall"
              ],
              "count": 4,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 6,
              "radius": 18,
              "speed": 5
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 18,
              "speed": 5
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 18,
              "speed": 5
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 5,
              "radius": 18,
              "speed": 5
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 5,
              "radius": 18,
              "speed": 5
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 5,
              "radius": 30,
              "speed": 5
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 5,
              "radius": 30,
              "speed": 5
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 24,
              "speed": 7
            },
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 30,
              "speed": 5
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 24,
              "speed": 7
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 30,
              "speed": 5
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 80,
              "speed": 5
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 80,
              "speed": 5
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 4,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "wavy"
              ],
              "count": 4,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 6,
              "radius": 18,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 10,
              "radius": 18,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 4,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "spiral"
              ],
              "count": 4,
              "radius": 35,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 7,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "spiral"
              ],
              "count": 7,
              "radius": 35,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 640,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 12,
              "radius": 40,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 4,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "zoning"
              ],
              "count": 5,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 4,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "zoning"
              ],
              "count": 3,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 16,
              "radius": 18,
              "speed": 5
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "zoning"
              ],
              "count": 18,
              "radius": 18,
              "speed": 5
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 2,
              "radius": 80,
              "speed": 6
            },
            {
              "types": [
                "spiral"
              ],
              "count": 5,
              "radius": 35,
              "speed": 6
            },
            {
              "types": [
                "zoning"
              ],
              "count": 2,
              "radius": 80,
              "speed": 6
            },
            {
              "types": [
                "zoning"
              ],
              "count": 5,
              "radius": 35,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 5,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 8
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 5,
              "radius": 18,
              "speed": 9
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 5,
              "radius": 18,
              "speed": 12
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 8
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 8,
              "radius": 18,
              "speed": 12
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 8
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 640,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 6,
              "radius": 45,
              "speed": 9
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 10,
              "radius": 35,
              "speed": 12
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 8
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 22,
              "radius": 12,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 8
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 21,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 20,
              "speed": 8
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 11,
              "radius": 30,
              "speed": 6
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 2,
              "radius": 80,
              "speed": 9
            },
            {
              "types": [
                "oscillating"
              ],
              "count": 11,
              "radius": 35,
              "speed": 12
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 8
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 10,
              "radius": 35,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 10
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 18,
              "radius": 35,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 10
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 10,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 10
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 18,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 10
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 40,
              "radius": 18,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 10
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 40,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 10
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 25,
              "radius": 12,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 18,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 20,
              "radius": 35,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 10
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 30,
              "radius": 35,
              "speed": 6
            },
            {
              "types": [
                "homing"
              ],
              "count": 5,
              "radius": 18,
              "speed": 12
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 15
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 4,
              "radius": 90,
              "speed": 6
            },
            {
              "types": [
                "switch"
              ],
              "count": 6,
              "radius": 18,
              "speed": 15
            },
            {
              "types": [
                "switch"
              ],
              "count": 6,
              "radius": 28,
              "speed": 12
            },
            {
              "types": [
                "switch"
              ],
              "count": 6,
              "radius": 38,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 10
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "victory",
          "x": 64,
          "y": 0,
          "width": 2976,
          "height": "last_height"
        },
        {
          "height": "last_height",
          "type": "exit",
          "width": 160,
          "translate": {
            "x": 160,
            "y": 0
          },
          "x": 3040,
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 6,
              "radius": 18,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 4,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 4,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 6,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 5,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 5,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 18,
              "speed": 13
            },
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 24,
              "speed": 10
            },
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 30,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 18,
              "speed": 13
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 24,
              "speed": 10
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 30,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "wavy"
              ],
              "count": 3,
              "radius": 80,
              "speed": 7
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 3,
              "radius": 80,
              "speed": 7
            },
            {
              "types": [
                "zigzag"
              ],
              "count": 4,
              "radius": 18,
              "speed": 10
            },
            {
              "types": [
                "wavy"
              ],
              "count": 4,
              "radius": 18,
              "speed": 10
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 6,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 10,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 4,
              "radius": 18,
              "speed": 13
            },
            {
              "types": [
                "spiral"
              ],
              "count": 4,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 7,
              "radius": 18,
              "speed": 13
            },
            {
              "types": [
                "spiral"
              ],
              "count": 7,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 640,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 12,
              "radius": 40,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 4,
              "radius": 18,
              "speed": 13
            },
            {
              "types": [
                "zoning"
              ],
              "count": 5,
              "radius": 18,
              "speed": 13
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 4,
              "radius": 35,
              "speed": 13
            },
            {
              "types": [
                "zoning"
              ],
              "count": 3,
              "radius": 35,
              "speed": 13
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 16,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "zoning"
              ],
              "count": 18,
              "radius": 18,
              "speed": 7
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "spiral"
              ],
              "count": 2,
              "radius": 80,
              "speed": 9
            },
            {
              "types": [
                "spiral"
              ],
              "count": 5,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "zoning"
              ],
              "count": 2,
              "radius": 80,
              "speed": 9
            },
            {
              "types": [
                "zoning"
              ],
              "count": 5,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 6,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 5,
              "radius": 18,
              "speed": 13
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 11
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 5,
              "radius": 18,
              "speed": 13
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 5,
              "radius": 18,
              "speed": 17
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 11
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 8,
              "radius": 18,
              "speed": 17
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 11
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 640,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 6,
              "radius": 45,
              "speed": 13
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 10,
              "radius": 35,
              "speed": 17
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 11
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 22,
              "radius": 12,
              "speed": 13
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 11
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 21,
              "radius": 18,
              "speed": 13
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 20,
              "speed": 11
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 11,
              "radius": 30,
              "speed": 9
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "oscillating"
              ],
              "count": 2,
              "radius": 80,
              "speed": 13
            },
            {
              "types": [
                "oscillating"
              ],
              "count": 11,
              "radius": 35,
              "speed": 17
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 11
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 10,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 14
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 18,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 14
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 10,
              "radius": 35,
              "speed": 13
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 14
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 18,
              "radius": 35,
              "speed": 13
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 14
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 40,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 14
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 40,
              "radius": 18,
              "speed": 13
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 14
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 25,
              "radius": 12,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 18,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 20,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 14
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 30,
              "radius": 35,
              "speed": 9
            },
            {
              "types": [
                "homing"
              ],
              "count": 5,
              "radius": 18,
              "speed": 17
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 21
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "switch"
              ],
              "count": 4,
              "radius": 90,
              "speed": 9
            },
            {
              "types": [
                "switch"
              ],
              "count": 6,
              "radius": 18,
              "speed": 21
            },
            {
              "types": [
                "switch"
              ],
              "count": 6,
              "radius": 28,
              "speed": 17
            },
            {
              "types": [
                "switch"
              ],
              "count": 6,
              "radius": 38,
              "speed": 13
            },
            {
              "types": [
                "wall"
              ],
              "count": 9,
              "radius": 30,
              "speed": 14
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "victory",
          "x": 64,
          "y": 0,
          "width": 2976,
          "height": "last_height"
        },
        {
          "height": "last_height",
          "type": "removal",
          "width": 160,
          "x": 3040,
          "y": 0
        }
      ]
    }
  ]
}
var glacialGorge = {
  "name": "Glacial Gorge",
  "properties": {
    "friction": 0.15,
    "background_color": [
      50,
      128,
      255,
      75
    ]
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": -1120
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 416,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 1120
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 64,
          "width": 320,
          "height": 352,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 5,
              "radius": 18,
              "speed": 0.5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 10,
              "radius": 18,
              "speed": 0.5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 5,
              "radius": 18,
              "speed": 1
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 10,
              "radius": 18,
              "speed": 1
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 4,
              "radius": 12,
              "speed": 1.5
            },
            {
              "types": [
                "liquid"
              ],
              "count": 4,
              "radius": 18,
              "speed": 1
            },
            {
              "types": [
                "liquid"
              ],
              "count": 4,
              "radius": 24,
              "speed": 0.5
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 4,
              "radius": 18,
              "speed": 1.5
            },
            {
              "types": [
                "liquid"
              ],
              "count": 4,
              "radius": 24,
              "speed": 1
            },
            {
              "types": [
                "liquid"
              ],
              "count": 4,
              "radius": 30,
              "speed": 0.5
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 12,
              "radius": 30,
              "speed": 1.5
            },
            {
              "types": [
                "slippery"
              ],
              "count": 1,
              "radius": 2,
              "speed": 3
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 10,
              "radius": 18,
              "speed": 2
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 20,
              "radius": 18,
              "speed": 1
            },
            {
              "types": [
                "slippery"
              ],
              "count": 1,
              "radius": 2,
              "speed": 3
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "liquid"
              ],
              "count": 10,
              "radius": 18,
              "speed": 2.5
            },
            {
              "types": [
                "liquid"
              ],
              "count": 2,
              "radius": 90,
              "speed": 2.5
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3.3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 448,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 6,
              "radius": 18,
              "speed": 6
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          90,
          180,
          75
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 416,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 11,
              "radius": 18,
              "speed": 6
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          80,
          160,
          75
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 384,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 4,
              "radius": 12,
              "speed": 9
            },
            {
              "types": [
                "icicle"
              ],
              "count": 4,
              "radius": 18,
              "speed": 6
            },
            {
              "types": [
                "icicle"
              ],
              "count": 4,
              "radius": 24,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          70,
          140,
          75
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 352,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 4,
              "radius": 12,
              "speed": 9
            },
            {
              "types": [
                "icicle"
              ],
              "count": 4,
              "radius": 18,
              "speed": 6
            },
            {
              "types": [
                "icicle"
              ],
              "count": 4,
              "radius": 24,
              "speed": 3
            },
            {
              "types": [
                "liquid"
              ],
              "count": 4,
              "radius": 18,
              "speed": 1
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          60,
          120,
          75
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 320,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 320,
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 3,
              "radius": 12,
              "speed": 12
            },
            {
              "types": [
                "icicle"
              ],
              "count": 3,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "icicle"
              ],
              "count": 3,
              "radius": 24,
              "speed": 6
            },
            {
              "types": [
                "liquid"
              ],
              "count": 4,
              "radius": 18,
              "speed": 1
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          50,
          100,
          75
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 288,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 10,
              "radius": 12,
              "speed": 12
            },
            {
              "types": [
                "slippery"
              ],
              "count": 1,
              "radius": 2,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          40,
          80,
          75
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 15,
              "radius": 20,
              "speed": 12
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          30,
          60,
          75
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 15,
              "radius": 28,
              "speed": 12
            },
            {
              "types": [
                "slippery"
              ],
              "count": 1,
              "radius": 2,
              "speed": 5
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          20,
          40,
          80
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 8,
              "radius": 36,
              "speed": 15
            },
            {
              "types": [
                "liquid"
              ],
              "count": 5,
              "radius": 18,
              "speed": 2
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          10,
          20,
          85
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 256,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "icicle"
              ],
              "count": 2,
              "radius": 30,
              "speed": 9
            },
            {
              "types": [
                "icicle"
              ],
              "count": 15,
              "radius": 12,
              "speed": 9
            },
            {
              "types": [
                "liquid"
              ],
              "count": 4,
              "radius": 18,
              "speed": 2
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          0,
          0,
          90
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 320,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 2,
              "radius": 5,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          40,
          80,
          75
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 384,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 4,
              "radius": 5,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ],
      "properties": {
        "background_color": [
          0,
          80,
          160,
          75
        ]
      }
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 3,
              "radius": 5,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 4,
              "radius": 5,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 3,
              "radius": 5,
              "speed": 12
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 5,
              "radius": 5,
              "speed": 12
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 5,
              "radius": 5,
              "speed": 6
            },
            {
              "types": [
                "liquid"
              ],
              "count": 8,
              "radius": 18,
              "speed": 1
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 7,
              "radius": 5,
              "speed": 6
            },
            {
              "types": [
                "liquid"
              ],
              "count": 14,
              "radius": 24,
              "speed": 1
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 13,
              "radius": 5,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "slippery"
              ],
              "count": 13,
              "radius": 30,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 3
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 4,
              "radius": 12,
              "speed": 3
            },
            {
              "types": [
                "normal"
              ],
              "count": 4,
              "radius": 18,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 7,
              "radius": 12,
              "speed": 3
            },
            {
              "types": [
                "normal"
              ],
              "count": 4,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 7,
              "radius": 12,
              "speed": 3
            },
            {
              "types": [
                "liquid"
              ],
              "count": 12,
              "radius": 18,
              "speed": 1.5
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 8,
              "radius": 12,
              "speed": 6
            },
            {
              "types": [
                "liquid"
              ],
              "count": 20,
              "radius": 18,
              "speed": 1.5
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 7,
              "radius": 12,
              "speed": 6
            },
            {
              "types": [
                "icicle"
              ],
              "count": 16,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 7,
              "radius": 12,
              "speed": 6
            },
            {
              "types": [
                "icicle"
              ],
              "count": 8,
              "radius": 12,
              "speed": 12
            },
            {
              "types": [
                "icicle"
              ],
              "count": 8,
              "radius": 18,
              "speed": 9
            },
            {
              "types": [
                "icicle"
              ],
              "count": 8,
              "radius": 24,
              "speed": 6
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 7,
              "radius": 12,
              "speed": 6
            },
            {
              "types": [
                "icicle"
              ],
              "count": 5,
              "radius": 12,
              "speed": 15
            },
            {
              "types": [
                "icicle"
              ],
              "count": 5,
              "radius": 18,
              "speed": 12
            },
            {
              "types": [
                "icicle"
              ],
              "count": 5,
              "radius": 24,
              "speed": 9
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 7,
              "radius": 12,
              "speed": 6
            },
            {
              "types": [
                "icicle"
              ],
              "count": 5,
              "radius": 24,
              "speed": 9
            },
            {
              "types": [
                "icicle"
              ],
              "count": 5,
              "radius": 32,
              "speed": 6
            },
            {
              "types": [
                "icicle"
              ],
              "count": 5,
              "radius": 40,
              "speed": 3
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 7,
              "radius": 12,
              "speed": 6
            },
            {
              "types": [
                "liquid"
              ],
              "count": 5,
              "radius": 24,
              "speed": 2
            },
            {
              "types": [
                "liquid"
              ],
              "count": 5,
              "radius": 32,
              "speed": 1.5
            },
            {
              "types": [
                "liquid"
              ],
              "count": 5,
              "radius": 40,
              "speed": 1
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": "last_height",
          "spawner": [
            {
              "types": [
                "ice_sniper"
              ],
              "count": 4,
              "radius": 40,
              "speed": 6
            },
            {
              "types": [
                "ice_sniper"
              ],
              "count": 8,
              "radius": 24,
              "speed": 9
            },
            {
              "types": [
                "normal"
              ],
              "count": 13,
              "radius": 18,
              "speed": 12
            },
            {
              "types": [
                "wall"
              ],
              "count": 5,
              "radius": 30,
              "speed": 7
            }
          ]
        },
        {
          "type": "safe",
          "x": "last_right",
          "y": 0,
          "width": 256,
          "height": "last_height"
        },
        {
          "type": "exit",
          "x": "last_right",
          "y": 0,
          "width": 64,
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          }
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "type": "exit",
          "x": 0,
          "y": 0,
          "width": 64,
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          }
        },
        {
          "type": "victory",
          "x": 64,
          "y": 0,
          "width": 2976,
          "height": "last_height"
        },
        {
          "type": "removal",
          "x": 3040,
          "y": 0,
          "width": 160,
          "height": "last_height"
        }
      ]
    }
  ]
}
var viciousValley = {
  "name": "Vicious Valley",
  "properties": {
    "friction": 0.75,
    "background_color": [
      100,
      255,
      100,
      50
    ]
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": -1120
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 416,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 1120
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 64,
          "width": 320,
          "height": 352,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 4,
              "radius": 20,
              "speed": 3,
              "types": [
                "sizing"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 20,
              "speed": 3,
              "types": [
                "sizing"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 20,
              "speed": 6,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 20,
              "speed": 6,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 35,
              "speed": 6,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 4,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 35,
              "speed": 6,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 4,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 12,
              "speed": 9,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 4,
              "radius": 20,
              "speed": 6,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 4,
              "radius": 35,
              "speed": 3,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 12,
              "speed": 9,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 6,
              "radius": 20,
              "speed": 6,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 6,
              "radius": 35,
              "speed": 3,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 4,
              "types": [
                "draining"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 35,
              "speed": 12,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 4,
              "types": [
                "draining"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 16,
              "radius": 25,
              "speed": 6,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 2,
              "radius": 75,
              "speed": 3,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 6,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 6,
              "types": [
                "turning"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 6,
              "types": [
                "turning"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 9,
              "types": [
                "turning"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "turning"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 5,
              "types": [
                "draining"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 12,
              "types": [
                "turning"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 35,
              "speed": 9,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 30,
              "speed": 12,
              "types": [
                "turning"
              ]
            },
            {
              "count": 3,
              "radius": 30,
              "speed": 12,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 5,
              "types": [
                "draining"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 30,
              "speed": 6,
              "types": [
                "turning"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 9,
              "types": [
                "turning"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 12,
              "types": [
                "turning"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 6,
              "types": [
                "homing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 30,
              "speed": 9,
              "types": [
                "turning"
              ]
            },
            {
              "count": 2,
              "radius": 24,
              "speed": 12,
              "types": [
                "turning"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 15,
              "types": [
                "turning"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 6,
              "types": [
                "homing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 7,
              "types": [
                "turning"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 10,
              "types": [
                "draining"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 13,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 11,
              "types": [
                "turning"
              ]
            },
            {
              "count": 2,
              "radius": 95,
              "speed": 11,
              "types": [
                "turning"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 3,
              "speed": 9,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 13,
              "radius": 3,
              "speed": 9,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 3,
              "speed": 9,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "homing"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 3,
              "speed": 6,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 6,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 3,
              "speed": 3,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 4,
              "radius": 30,
              "speed": 9,
              "types": [
                "homing"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "turning"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 3,
              "speed": 3,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 12,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 3,
              "speed": 3,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 24,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 3,
              "speed": 3,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 9,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 9,
              "types": [
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 20,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 3,
              "speed": 6,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 12,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 12,
              "types": [
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 17,
              "radius": 18,
              "speed": 9,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 9,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 5,
              "radius": 6,
              "speed": 9,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 12,
              "speed": 6,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 7,
              "radius": 6,
              "speed": 9,
              "types": [
                "draining"
              ]
            },
            {
              "count": 15,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 12,
              "speed": 9,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 7,
              "radius": 3,
              "speed": 6,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 4,
              "radius": 6,
              "speed": 9,
              "types": [
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 12,
              "speed": 6,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 3,
              "radius": 3,
              "speed": 6,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 4,
              "radius": 10,
              "speed": 6,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 15,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 60,
              "speed": 9,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 9,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 3,
              "radius": 3,
              "speed": 9,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 4,
              "radius": 10,
              "speed": 9,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "removal",
          "width": 160,
          "x": 3040,
          "y": 0
        }
      ]
    }
  ]
}
var humongousHollow = {
  "name": "Humongous Hollow",
  "properties": {
    "friction": 0.75,
    "background_color": [
      155,
      88,
      0,
      75
    ]
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": -1120
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 416,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 1120
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 64,
          "width": 320,
          "height": 352,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 4,
              "radius": 30,
              "speed": 1.5,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 40,
              "speed": 2,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 20,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 40,
              "speed": 2,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 80,
              "speed": 1,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 2,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 30,
              "speed": 0.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 60,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 2,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 20,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 25,
              "speed": 1.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 2,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 13,
              "radius": 35,
              "speed": 1.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 80,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 25,
              "speed": 1.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 2,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 20,
              "speed": 1.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 9,
              "radius": 60,
              "speed": 2,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 25,
              "speed": 7,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 2,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 20,
              "speed": 3.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 40,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 25,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 2,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 10,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 25,
              "speed": 1,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 25,
              "speed": 1,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 2,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 24,
              "radius": 25,
              "speed": 1,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 100,
              "speed": 1,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 50,
              "speed": 2,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 90,
              "speed": 1.25,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 2,
              "radius": 30,
              "speed": 0.7,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 40,
              "speed": 0.4,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 3.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 20,
              "speed": 0.9,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 60,
              "speed": 0.7,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 3.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 30,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 60,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 0.7,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 2,
              "radius": 60,
              "speed": 1.1,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 3.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 50,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 16,
              "radius": 20,
              "speed": 0.7,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 3.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 70,
              "speed": 1,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 2,
              "radius": 25,
              "speed": 5,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 3.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 16,
              "radius": 20,
              "speed": 2,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 40,
              "speed": 0.9,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 3,
              "radius": 25,
              "speed": 5,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 3.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 30,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 80,
              "speed": 1.1,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 25,
              "speed": 10,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 3.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 16,
              "radius": 15,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 95,
              "speed": 0.3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 12,
              "radius": 15,
              "speed": 0.7,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 25,
              "speed": 1,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 3.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 50,
              "speed": 1.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 50,
              "speed": 0.3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 25,
              "speed": 4,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 3.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 16,
              "radius": 25,
              "speed": 0.8,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 2,
              "radius": 100,
              "speed": 0.8,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 12,
              "radius": 50,
              "speed": 2,
              "types": [
                "draining"
              ]
            },
            {
              "count": 6,
              "radius": 90,
              "speed": 1.75,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 30,
              "speed": 3,
              "types": [
                "turning"
              ]
            },
            {
              "count": 3,
              "radius": 60,
              "speed": 2,
              "types": [
                "turning"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 50,
              "speed": 2.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 3,
              "radius": 40,
              "speed": 3,
              "types": [
                "turning"
              ]
            },
            {
              "count": 3,
              "radius": 30,
              "speed": 3.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 3,
              "radius": 20,
              "speed": 4,
              "types": [
                "turning"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 2,
              "radius": 25,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 50,
              "speed": 3.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 25,
              "speed": 5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 2,
              "radius": 50,
              "speed": 4,
              "types": [
                "turning"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 15,
              "speed": 2,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 80,
              "speed": 2,
              "types": [
                "turning"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 32,
              "radius": 15,
              "speed": 1.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 4,
              "radius": 25,
              "speed": 1,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 25,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 25,
              "speed": 3.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 8,
              "radius": 25,
              "speed": 2,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 50,
              "speed": 1.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 7,
              "radius": 25,
              "speed": 3,
              "types": [
                "turning"
              ]
            },
            {
              "count": 5,
              "radius": 15,
              "speed": 3,
              "types": [
                "turning"
              ]
            },
            {
              "count": 7,
              "radius": 25,
              "speed": 2.5,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 2,
              "radius": 95,
              "speed": 1,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 50,
              "speed": 5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 10,
              "radius": 25,
              "speed": 0.5,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 60,
              "speed": 1.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 60,
              "speed": 1.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 18,
              "radius": 25,
              "speed": 0.5,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 16,
              "radius": 25,
              "speed": 2.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 2,
              "radius": 100,
              "speed": 2.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 12,
              "radius": 50,
              "speed": 1.5,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 6,
              "radius": 90,
              "speed": 2.25,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 50,
              "speed": 25.6,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 90,
              "speed": 48,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 50,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 50,
              "speed": 112,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 80,
              "speed": 5.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 24,
              "radius": 15,
              "speed": 32,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 11,
              "radius": 40,
              "speed": 51.2,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 3,
              "radius": 25,
              "speed": 7,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 15,
              "speed": 1.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 80,
              "speed": 44.8,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 2,
              "radius": 60,
              "speed": 44.8,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 3,
              "radius": 40,
              "speed": 44.8,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 4,
              "radius": 20,
              "speed": 44.8,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 4,
              "radius": 25,
              "speed": 7.5,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 35,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 30,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 25,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 20,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 35,
              "speed": 57.6,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 3,
              "radius": 30,
              "speed": 57.6,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 3,
              "radius": 25,
              "speed": 57.6,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 3,
              "radius": 20,
              "speed": 57.6,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 25,
              "speed": 6.5,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 80,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 40,
              "speed": 48,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 25,
              "speed": 2,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 80,
              "speed": 1.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 80,
              "speed": 64,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 8,
              "radius": 25,
              "speed": 2.5,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 16,
              "radius": 25,
              "speed": 64,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 2,
              "radius": 100,
              "speed": 64,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 16,
              "radius": 50,
              "speed": 2,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 6,
              "radius": 90,
              "speed": 2.75,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "exit",
          "width": 160,
          "translate": {
            "x": 160,
            "y": 0
          },
          "x": 3040,
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 60,
              "speed": 4,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 40,
              "speed": 4.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 100,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 17,
              "radius": 50,
              "speed": 2.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 7,
              "radius": 80,
              "speed": 4.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 22,
              "radius": 40,
              "speed": 4.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 45,
              "speed": 3.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 55,
              "speed": 3.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 100,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 45,
              "speed": 3.5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 40,
              "speed": 3.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 11,
              "radius": 80,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 45,
              "speed": 9,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 40,
              "speed": 5.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 60,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 80,
              "speed": 6.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 45,
              "speed": 7,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 22,
              "radius": 20,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 35,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 35,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 70,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 26,
              "radius": 35,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 110,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 14,
              "radius": 60,
              "speed": 4,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 100,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 50,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 6,
              "radius": 60,
              "speed": 1.5,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 40,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 6,
              "radius": 80,
              "speed": 1.7,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 50,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 80,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 50,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 80,
              "speed": 3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 70,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 18,
              "radius": 40,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 90,
              "speed": 3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 45,
              "speed": 6,
              "types": [
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 20,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 40,
              "speed": 3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 5,
              "radius": 25,
              "speed": 7,
              "types": [
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 30,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 80,
              "speed": 3.1,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 3,
              "radius": 25,
              "speed": 12,
              "types": [
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 15,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 95,
              "speed": 3.3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 14,
              "radius": 15,
              "speed": 3.7,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 25,
              "speed": 1,
              "types": [
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 50,
              "speed": 3.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 50,
              "speed": 3.3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 6,
              "radius": 25,
              "speed": 6,
              "types": [
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 25,
              "speed": 3.8,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 100,
              "speed": 3.8,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 14,
              "radius": 50,
              "speed": 4,
              "types": [
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 90,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 30,
              "speed": 5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 5,
              "radius": 60,
              "speed": 4,
              "types": [
                "turning"
              ]
            },
            {
              "count": 8,
              "radius": 70,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 50,
              "speed": 4.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 5,
              "radius": 40,
              "speed": 5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 5.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 5,
              "radius": 20,
              "speed": 6,
              "types": [
                "turning"
              ]
            },
            {
              "count": 8,
              "radius": 70,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 25,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 50,
              "speed": 5.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 25,
              "speed": 7,
              "types": [
                "turning"
              ]
            },
            {
              "count": 4,
              "radius": 50,
              "speed": 6,
              "types": [
                "turning"
              ]
            },
            {
              "count": 8,
              "radius": 65,
              "speed": 6.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 22,
              "radius": 25,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 4,
              "types": [
                "turning"
              ]
            },
            {
              "count": 8,
              "radius": 65,
              "speed": 6.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 34,
              "radius": 25,
              "speed": 3.5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 6,
              "radius": 35,
              "speed": 3,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 8,
              "radius": 60,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 25,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 25,
              "speed": 5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 10,
              "radius": 25,
              "speed": 4,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 8,
              "radius": 50,
              "speed": 7.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 50,
              "speed": 1.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 9,
              "radius": 25,
              "speed": 5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 7,
              "radius": 10,
              "speed": 5,
              "types": [
                "turning"
              ]
            },
            {
              "count": 9,
              "radius": 25,
              "speed": 4,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 8,
              "radius": 50,
              "speed": 7.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 90,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 50,
              "speed": 7,
              "types": [
                "turning"
              ]
            },
            {
              "count": 12,
              "radius": 25,
              "speed": 2.5,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 8,
              "radius": 50,
              "speed": 7.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 60,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 7,
              "radius": 60,
              "speed": 3,
              "types": [
                "turning"
              ]
            },
            {
              "count": 20,
              "radius": 25,
              "speed": 3,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 8,
              "radius": 50,
              "speed": 7.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 25,
              "speed": 4,
              "types": [
                "turning"
              ]
            },
            {
              "count": 4,
              "radius": 100,
              "speed": 4,
              "types": [
                "turning"
              ]
            },
            {
              "count": 14,
              "radius": 50,
              "speed": 3,
              "types": [
                "freezing"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 50,
              "speed": 27,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 90,
              "speed": 50,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 50,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 6,
              "radius": 50,
              "speed": 114,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 80,
              "speed": 7.5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 26,
              "radius": 15,
              "speed": 34,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 13,
              "radius": 40,
              "speed": 54,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 25,
              "speed": 9,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 15,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 80,
              "speed": 46,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 4,
              "radius": 60,
              "speed": 46,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 40,
              "speed": 46,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 20,
              "speed": 46,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 25,
              "speed": 9,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 35,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 30,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 25,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 20,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 35,
              "speed": 59,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 59,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 25,
              "speed": 59,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 20,
              "speed": 59,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 25,
              "speed": 8,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 80,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 40,
              "speed": 50,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 8,
              "radius": 25,
              "speed": 4,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 80,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 66,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 10,
              "radius": 25,
              "speed": 4,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 25,
              "speed": 66,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 4,
              "radius": 100,
              "speed": 66,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 18,
              "radius": 50,
              "speed": 4,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 80,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "removal",
          "width": 160,
          "x": 3040,
          "y": 0
        }
      ]
    }
  ]
}
var eliteExpanse = {
  "name": "Elite Expanse",
  "properties": {
    "background_color": [
      55,
      75,
      115,
      100
    ],
    "friction": 0.75
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": -1120
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 416,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 1120
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 64,
          "width": 320,
          "height": 352,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 4,
              "radius": 20,
              "speed": 21,
              "types": [
                "teleporting"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 20,
              "speed": 21,
              "types": [
                "teleporting"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 20,
              "speed": 42,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 20,
              "speed": 42,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 35,
              "speed": 42,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 35,
              "speed": 42,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 12,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 4,
              "radius": 20,
              "speed": 42,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 4,
              "radius": 35,
              "speed": 21,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 12,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 20,
              "speed": 42,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 35,
              "speed": 21,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 13,
              "radius": 35,
              "speed": 74,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 21,
              "radius": 25,
              "speed": 42,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 2,
              "radius": 90,
              "speed": 21,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 5,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 5,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 7,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 42,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 7,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 42,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 3,
              "radius": 35,
              "speed": 7,
              "types": [
                "homing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 30,
              "speed": 11,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 9,
              "types": [
                "homing"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 30,
              "speed": 5,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 7,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 74,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 3,
              "radius": 30,
              "speed": 7,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 11,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 7,
              "types": [
                "homing"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 74,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 16,
              "radius": 18,
              "speed": 5,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 7,
              "radius": 12,
              "speed": 84,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 18,
              "speed": 53,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 8,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 3,
              "radius": 70,
              "speed": 8,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 7,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 13,
              "radius": 18,
              "speed": 7,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 7,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "homing"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 5,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 5,
              "types": [
                "homing"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 3,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 7,
              "types": [
                "homing"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 5,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 14,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 5,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 18,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 7,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 7,
              "radius": 12,
              "speed": 7,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 7,
              "radius": 12,
              "speed": 7,
              "types": [
                "draining"
              ]
            },
            {
              "count": 7,
              "radius": 20,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 6,
              "radius": 12,
              "speed": 9,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 12,
              "speed": 9,
              "types": [
                "draining"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 11,
              "radius": 18,
              "speed": 11,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 3,
              "radius": 70,
              "speed": 11,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 12,
              "speed": 5,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 5,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 12,
              "speed": 5,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 7,
              "radius": 12,
              "speed": 5,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 7,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 7,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 7,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 7,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 7,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 7,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 7,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 7,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 5,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 9,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 13,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 63,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 9,
              "types": [
                "draining"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 11,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 11,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 5,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 74,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 11,
              "types": [
                "draining"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 60,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 7,
              "radius": 60,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 14,
              "radius": 14,
              "speed": 84,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 7,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 3040,
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 20,
              "speed": 30,
              "types": [
                "teleporting"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 20,
              "speed": 60,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 20,
              "speed": 60,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 35,
              "speed": 60,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 35,
              "speed": 60,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 12,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 20,
              "speed": 60,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 5,
              "radius": 35,
              "speed": 30,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 12,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 8,
              "radius": 20,
              "speed": 60,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 8,
              "radius": 35,
              "speed": 30,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 35,
              "speed": 105,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 30,
              "radius": 25,
              "speed": 60,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 2,
              "radius": 90,
              "speed": 30,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 6,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 6,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 6,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 60,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 9,
              "radius": 18,
              "speed": 60,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 12,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 35,
              "speed": 9,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 30,
              "speed": 15,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 12,
              "types": [
                "homing"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 30,
              "speed": 6,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 12,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 105,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 30,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 12,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 15,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 9,
              "types": [
                "homing"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 105,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 22,
              "radius": 18,
              "speed": 7,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 10,
              "radius": 12,
              "speed": 120,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 25,
              "radius": 18,
              "speed": 75,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 11,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 70,
              "speed": 11,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 3,
              "types": [
                "homing"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 6,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 6,
              "types": [
                "homing"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 3,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 9,
              "types": [
                "homing"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 6,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 20,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 6,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 6,
              "radius": 12,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 25,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 10,
              "radius": 12,
              "speed": 9,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 10,
              "radius": 12,
              "speed": 9,
              "types": [
                "draining"
              ]
            },
            {
              "count": 9,
              "radius": 20,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 12,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 8,
              "radius": 12,
              "speed": 12,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 12,
              "speed": 12,
              "types": [
                "draining"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 15,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 4,
              "radius": 70,
              "speed": 15,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 12,
              "speed": 6,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 6,
              "radius": 12,
              "speed": 6,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 12,
              "speed": 6,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 9,
              "radius": 12,
              "speed": 6,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 9,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 14,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 12,
              "speed": 3,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 13,
              "radius": 18,
              "speed": 9,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 13,
              "radius": 18,
              "speed": 9,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 12,
              "speed": 6,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 11,
              "radius": 18,
              "speed": 12,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 11,
              "radius": 18,
              "speed": 12,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 12,
              "speed": 12,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 18,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 11,
              "radius": 18,
              "speed": 12,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 11,
              "radius": 18,
              "speed": 12,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 90,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 6,
              "radius": 12,
              "speed": 12,
              "types": [
                "draining"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 15,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 15,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 6,
              "types": [
                "sniper"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 105,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 15,
              "types": [
                "draining"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 15,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 60,
              "speed": 12,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 9,
              "radius": 60,
              "speed": 12,
              "types": [
                "repelling"
              ]
            },
            {
              "count": 20,
              "radius": 14,
              "speed": 120,
              "types": [
                "teleporting"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "removal",
          "width": 160,
          "x": 3040,
          "y": 0
        }
      ]
    }
  ]
}
var centralCoreHard = {
  "name": "Central Core Hard",
  "properties": {
    "friction": 0.75
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": -1120
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 416,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 1120
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 64,
          "width": 320,
          "height": 352,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 23,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 30,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 8,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 30,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 12,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 8,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 10,
              "radius": 24,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 12,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 24,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 19,
              "radius": 18,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 50,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 120,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 15,
              "radius": 12,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 18,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 15,
              "radius": 12,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 15,
              "radius": 24,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 8,
              "types": [
                "normal",
                "slowing"
              ]
            },
            {
              "count": 12,
              "radius": 18,
              "speed": 17,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 24,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 14,
              "radius": 18,
              "speed": 17,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 12,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 8,
              "types": [
                "normal",
                "slowing"
              ]
            },
            {
              "count": 15,
              "radius": 18,
              "speed": 17,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 23,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 23,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 23,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 23,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 32,
              "radius": 18,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 8,
              "types": [
                "normal",
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 28,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 15,
              "radius": 18,
              "speed": 17,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 3,
              "radius": 120,
              "speed": 17,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 19,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 18,
              "speed": 8,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 24,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 17,
              "radius": 18,
              "speed": 8,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 30,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 14,
              "radius": 18,
              "speed": 8,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 13,
              "radius": 18,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 11,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 18,
              "radius": 18,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 11,
              "types": [
                "homing"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 8,
              "types": [
                "slowing",
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 18,
              "speed": 11,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 12,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 18,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 24,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 8,
              "types": [
                "homing"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 8,
              "types": [
                "slowing",
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 29,
              "radius": 18,
              "speed": 11,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 13,
              "radius": 32,
              "speed": 11,
              "types": [
                "homing"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 8,
              "types": [
                "slowing",
                "draining"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 25,
              "radius": 18,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 13,
              "radius": 18,
              "speed": 8,
              "types": [
                "homing"
              ]
            },
            {
              "count": 3,
              "radius": 120,
              "speed": 8,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 25,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 25,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 25,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 25,
              "radius": 12,
              "speed": 1,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 50,
              "radius": 12,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 22,
              "radius": 12,
              "speed": 1,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 18,
              "radius": 18,
              "speed": 8,
              "types": [
                "homing"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 22,
              "radius": 12,
              "speed": 1,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 70,
              "radius": 18,
              "speed": 8,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 12,
              "speed": 1,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 25,
              "radius": 12,
              "speed": 1,
              "types": [
                "draining"
              ]
            },
            {
              "count": 44,
              "radius": 18,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 22,
              "radius": 12,
              "speed": 1,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 23,
              "radius": 12,
              "speed": 1,
              "types": [
                "draining"
              ]
            },
            {
              "count": 48,
              "radius": 12,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 22,
              "radius": 12,
              "speed": 1,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 23,
              "radius": 12,
              "speed": 1,
              "types": [
                "draining"
              ]
            },
            {
              "count": 48,
              "radius": 30,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 23,
              "radius": 12,
              "speed": 1,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 19,
              "radius": 12,
              "speed": 1,
              "types": [
                "draining"
              ]
            },
            {
              "count": 25,
              "radius": 60,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 23,
              "radius": 12,
              "speed": 15,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 25,
              "radius": 18,
              "speed": 15,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "removal",
          "width": 160,
          "x": 3040,
          "y": 0
        }
      ]
    }
  ]
}
var dangerousDistrict = {
  "name": "Dangerous District",
  "properties": {
    "background_color": [
      255,
      0,
      0,
      40
    ],
    "friction": 0.75
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": -1120
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 416,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 1120
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 64,
          "width": 320,
          "height": 352,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "height": 480,
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 1,
              "radius": 12,
              "speed": 7,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 7,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 1,
              "radius": 12,
              "speed": 7,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 28,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 1,
              "radius": 12,
              "speed": 7,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 1,
              "radius": 100,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 5,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 5,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 5,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 5,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 5,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 2,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 5,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 5,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 24,
              "speed": 5,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 1,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 9,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 7,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 7,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 7,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 18,
              "speed": 7,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 7,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 2,
              "radius": 18,
              "speed": 7,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 7,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 7,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 7,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 24,
              "speed": 7,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 1,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 11,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 5,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 24,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 12,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 12,
              "speed": 1,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 5,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 5,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 7,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 7,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 7,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 7,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 32,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 12,
              "speed": 1,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 15,
              "radius": 30,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 40,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 12,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 12,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 5,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 3,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 3,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 1,
              "radius": 75,
              "speed": 2,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 1,
              "radius": 75,
              "speed": 2,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 8,
              "radius": 30,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "exit",
          "width": 160,
          "translate": {
            "x": 160,
            "y": 0
          },
          "x": 3040,
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 1,
              "radius": 12,
              "speed": 9,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 9,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 1,
              "radius": 12,
              "speed": 9,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 28,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 28,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 1,
              "radius": 12,
              "speed": 9,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 1,
              "radius": 100,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 3.3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 6,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 6,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 6,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 6,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 6,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 2,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 6,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 6,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 24,
              "speed": 6,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 9,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 1,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 12,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 18,
              "speed": 9,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 2,
              "radius": 18,
              "speed": 9,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 12,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 9,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 24,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 12,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 2,
              "radius": 24,
              "speed": 9,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 12,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 1,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 6,
              "radius": 18,
              "speed": 15,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 3,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 24,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 10,
              "radius": 12,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 15,
              "radius": 12,
              "speed": 1,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 6,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 6,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 18,
              "speed": 9,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 9,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 18,
              "speed": 9,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 9,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 40,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 15,
              "radius": 12,
              "speed": 1,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 18,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 50,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 15,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 15,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 15,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 3,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 3,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 3,
              "types": [
                "speed_sniper"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 3,
              "types": [
                "regen_sniper"
              ]
            },
            {
              "count": 1,
              "radius": 75,
              "speed": 2,
              "types": [
                "disabling"
              ]
            },
            {
              "count": 1,
              "radius": 75,
              "speed": 2,
              "types": [
                "radiating_bullets"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "removal",
          "width": 160,
          "x": 3040,
          "y": 0
        }
      ]
    }
  ]
}
var quietQuarry = {
  "name": "Quiet Quarry",
  "properties": {
    "friction": 0.75,
    "background_color": [
      50,
      50,
      50,
      50
    ]
  },
  "areas": [
    {
      "x": "var x",
      "y": "var y",
      "zones": [
        {
          "type": "teleport",
          "x": 0,
          "y": 0,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": -1120
          }
        },
        {
          "type": "teleport",
          "x": 0,
          "y": 416,
          "width": 320,
          "height": 64,
          "translate": {
            "x": 0,
            "y": 1120
          }
        },
        {
          "type": "safe",
          "x": 0,
          "y": 64,
          "width": 320,
          "height": 352,
          "properties": {
            "minimum_speed": 10
          }
        },
        {
          "type": "active",
          "x": "last_right",
          "y": 0,
          "width": 2560,
          "height": 480,
          "spawner": [
            {
              "count": 2,
              "radius": 165,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ]
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 150,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 135,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 120,
              "speed": 7.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 140,
              "speed": 8.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 12,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 120,
              "speed": 9,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 120,
              "speed": 13,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 12,
              "speed": 2,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 135,
              "speed": 9.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 12,
              "speed": 1,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 150,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 120,
              "speed": 2,
              "types": [
                "wall"
              ]
            },
            {
              "count": 6,
              "radius": 160,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 0.6,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 6,
              "radius": 36,
              "speed": 3,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 0.6,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 0.8,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 6,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 0.8,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 4,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 7,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 24,
              "speed": 6,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 1.2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 9,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 1.3,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 11,
              "radius": 18,
              "speed": 1.2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 1.5,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 7,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 4,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 1.5,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 1.5,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 1.5,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 12,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 0.7,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 10,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 13,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 24,
              "speed": 0.9,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 14,
              "radius": 24,
              "speed": 8,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 20,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 200,
              "speed": 0.5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 200,
              "speed": 3,
              "types": [
                "wall"
              ]
            },
            {
              "count": 6,
              "radius": 20,
              "speed": 5,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 0.5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 200,
              "speed": 3,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 3,
              "radius": 40,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 6,
              "types": [
                "switch"
              ]
            },
            {
              "count": 8,
              "radius": 36,
              "speed": 4,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 0.5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 200,
              "speed": 3,
              "types": [
                "wall"
              ]
            },
            {
              "count": 6,
              "radius": 20,
              "speed": 5,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 6,
              "types": [
                "switch"
              ]
            },
            {
              "count": 11,
              "radius": 50,
              "speed": 3,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 0.5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 200,
              "speed": 3,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 3,
              "radius": 40,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 12,
              "speed": 4,
              "types": [
                "switch"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 4,
              "types": [
                "slowing",
                "draining"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 0.5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 3,
              "types": [
                "wall"
              ]
            },
            {
              "count": 5,
              "radius": 20,
              "speed": 4,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 16,
              "speed": 3,
              "types": [
                "slowing",
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 0.5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 3,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 5,
              "radius": 40,
              "speed": 4.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 22,
              "speed": 6,
              "types": [
                "slowing",
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 0.5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 3,
              "types": [
                "wall"
              ]
            },
            {
              "count": 4,
              "radius": 60,
              "speed": 5,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 12,
              "speed": 4,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 0.5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 3,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 3,
              "radius": 80,
              "speed": 5.5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 36,
              "speed": 3,
              "types": [
                "slowing",
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 0.5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 3,
              "types": [
                "wall"
              ]
            },
            {
              "count": 2,
              "radius": 100,
              "speed": 6,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 36,
              "speed": 3,
              "types": [
                "switch"
              ]
            },
            {
              "count": 6,
              "radius": 120,
              "speed": 1.5,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 4,
              "radius": 120,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 12,
              "speed": 3.3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 4,
              "radius": 120,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 12,
              "speed": 3.3,
              "types": [
                "draining"
              ]
            },
            {
              "count": 5,
              "radius": 120,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 12,
              "speed": 3.3,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 6,
              "radius": 120,
              "speed": 10,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 12,
              "speed": 2.3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 10,
              "radius": 36,
              "speed": 1.2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 12,
              "types": [
                "wall"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 12,
              "speed": 2.3,
              "types": [
                "draining"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 1,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 8,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 14,
              "types": [
                "wall"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 12,
              "speed": 2.3,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 13,
              "radius": 24,
              "speed": 1.1,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 12,
              "types": [
                "wall"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 3,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 19,
              "radius": 12,
              "speed": 1.3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 10,
              "radius": 33,
              "speed": 5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 70,
              "speed": 1,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 2,
              "radius": 160,
              "speed": 2,
              "types": [
                "wall"
              ]
            },
            {
              "count": 4,
              "radius": 90,
              "speed": 4,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 19,
              "radius": 12,
              "speed": 1.3,
              "types": [
                "draining"
              ]
            },
            {
              "count": 7,
              "radius": 65,
              "speed": 4,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 70,
              "speed": 1,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 2,
              "radius": 160,
              "speed": 2,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 4,
              "radius": 90,
              "speed": 4,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 12,
              "speed": 1.3,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 90,
              "speed": 3,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 70,
              "speed": 1,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 2,
              "radius": 160,
              "speed": 2,
              "types": [
                "wall"
              ]
            },
            {
              "count": 4,
              "radius": 90,
              "speed": 4,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 12,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 7,
              "radius": 12,
              "speed": 3,
              "types": [
                "draining"
              ]
            },
            {
              "count": 7,
              "radius": 12,
              "speed": 3,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 8,
              "types": [
                "ice_sniper"
              ]
            },
            {
              "count": 6,
              "radius": 120,
              "speed": 3,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 8,
              "radius": 60,
              "speed": 1,
              "types": [
                "wall"
              ]
            },
            {
              "count": 32,
              "radius": 15,
              "speed": 2,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "victory",
          "width": 2976,
          "x": 64,
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 160,
          "x": 3040,
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 150,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 135,
              "speed": 9,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 120,
              "speed": 12,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 140,
              "speed": 13,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 120,
              "speed": 14,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 120,
              "speed": 20,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 12,
              "speed": 3,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 6,
              "radius": 135,
              "speed": 15,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 12,
              "speed": 2,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 5,
              "radius": 150,
              "speed": 15,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 120,
              "speed": 3,
              "types": [
                "wall"
              ]
            },
            {
              "count": 6,
              "radius": 160,
              "speed": 9,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 1,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 6,
              "radius": 36,
              "speed": 5,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 1,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 9,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 9,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 11,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 6,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 11,
              "types": [
                "normal"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 12,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 24,
              "speed": 9,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 14,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 6,
              "radius": 18,
              "speed": 5,
              "types": [
                "normal"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 8,
              "types": [
                "normal"
              ]
            },
            {
              "count": 3,
              "radius": 24,
              "speed": 2,
              "types": [
                "normal"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 11,
              "radius": 18,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 15,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 8,
              "radius": 18,
              "speed": 3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 11,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 17,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 4,
              "radius": 18,
              "speed": 6,
              "types": [
                "normal"
              ]
            },
            {
              "count": 4,
              "radius": 12,
              "speed": 3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 18,
              "speed": 3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 4,
              "radius": 24,
              "speed": 3,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 18,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 18,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 5,
              "radius": 12,
              "speed": 15,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 20,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 24,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 14,
              "radius": 24,
              "speed": 12,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 30,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 1,
              "radius": 200,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 200,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 6,
              "radius": 20,
              "speed": 8,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 18,
              "speed": 8,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 200,
              "speed": 5,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 3,
              "radius": 40,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 18,
              "speed": 9,
              "types": [
                "switch"
              ]
            },
            {
              "count": 8,
              "radius": 36,
              "speed": 6,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 200,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 6,
              "radius": 20,
              "speed": 8,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 18,
              "speed": 9,
              "types": [
                "switch"
              ]
            },
            {
              "count": 11,
              "radius": 50,
              "speed": 5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 200,
              "speed": 5,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 3,
              "radius": 40,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 12,
              "speed": 6,
              "types": [
                "switch"
              ]
            },
            {
              "count": 10,
              "radius": 18,
              "speed": 2,
              "types": [
                "switch"
              ]
            },
            {
              "count": 2,
              "radius": 12,
              "speed": 6,
              "types": [
                "slowing",
                "draining"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 5,
              "radius": 20,
              "speed": 6,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 16,
              "speed": 5,
              "types": [
                "slowing",
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 5,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 5,
              "radius": 40,
              "speed": 7,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 7,
              "radius": 22,
              "speed": 9,
              "types": [
                "slowing",
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 4,
              "radius": 60,
              "speed": 8,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 12,
              "speed": 6,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 5,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 3,
              "radius": 80,
              "speed": 9,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 12,
              "radius": 36,
              "speed": 5,
              "types": [
                "slowing",
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 200,
              "speed": 1,
              "types": [
                "switch"
              ]
            },
            {
              "count": 4,
              "radius": 140,
              "speed": 5,
              "types": [
                "wall"
              ]
            },
            {
              "count": 2,
              "radius": 100,
              "speed": 9,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 20,
              "radius": 36,
              "speed": 5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 6,
              "radius": 120,
              "speed": 3,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 4,
              "radius": 120,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 12,
              "speed": 5,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 4,
              "radius": 120,
              "speed": 8,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 15,
              "radius": 12,
              "speed": 5,
              "types": [
                "draining"
              ]
            },
            {
              "count": 5,
              "radius": 120,
              "speed": 15,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 8,
              "radius": 12,
              "speed": 5,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 6,
              "radius": 120,
              "speed": 15,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 12,
              "speed": 4,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 10,
              "radius": 36,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 18,
              "types": [
                "wall"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 14,
              "radius": 12,
              "speed": 4,
              "types": [
                "draining"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 7,
              "radius": 18,
              "speed": 12,
              "types": [
                "dasher"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 21,
              "types": [
                "wall"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 9,
              "radius": 12,
              "speed": 4,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 13,
              "radius": 24,
              "speed": 2,
              "types": [
                "liquid"
              ]
            },
            {
              "count": 1,
              "radius": 180,
              "speed": 18,
              "types": [
                "wall"
              ]
            },
            {
              "count": 9,
              "radius": 30,
              "speed": 5,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 19,
              "radius": 12,
              "speed": 2,
              "types": [
                "slowing"
              ]
            },
            {
              "count": 10,
              "radius": 33,
              "speed": 8,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 70,
              "speed": 2,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 2,
              "radius": 160,
              "speed": 3,
              "types": [
                "wall"
              ]
            },
            {
              "count": 4,
              "radius": 90,
              "speed": 6,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 19,
              "radius": 12,
              "speed": 2,
              "types": [
                "draining"
              ]
            },
            {
              "count": 7,
              "radius": 65,
              "speed": 6,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 70,
              "speed": 2,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 2,
              "radius": 160,
              "speed": 3,
              "move_clockwise": false,
              "types": [
                "wall"
              ]
            },
            {
              "count": 4,
              "radius": 90,
              "speed": 6,
              "types": [
                "wall"
              ]
            }
          ],
          "type": "active",
          "width": 2560,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "translate": {
            "x": 160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": "last_right",
          "y": 0
        }
      ]
    },
    {
      "x": "last_right",
      "y": "last_y",
      "zones": [
        {
          "height": 480,
          "translate": {
            "x": -160,
            "y": 0
          },
          "type": "exit",
          "width": 64,
          "x": 0,
          "y": 0
        },
        {
          "height": "last_height",
          "type": "safe",
          "width": 256,
          "x": "last_right",
          "y": 0
        },
        {
          "height": "last_height",
          "spawner": [
            {
              "count": 10,
              "radius": 12,
              "speed": 2,
              "types": [
                "gravity"
              ]
            },
            {
              "count": 4,
              "radius": 90,
              "speed": 5,
              "types": [
                "switch"
              ]
            },
            {
              "count": 1,
              "radius": 70,
              "speed": 2,
              "types": [
                "sizing"
              ]
            },
            {
              "count": 2,
              "radius": 160,
              ]