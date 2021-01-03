/*

*/

let list = ["FFA", "2 Teams", "4 Teams", "Open 2 Teams", "Open 4 Teams", "Maze", "Maze 4 Teams"];
let config = {
  "FFA": {
    WIDTH: 3250,
    HEIGHT: 3250,
    X_GRID: 9,
    Y_GRID: 9,
    BOTS: 5,
    MAX_FOOD: 100,
    ROOM_SETUP: [
      ["roid", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "roid"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm"],
      ["roid", "norm", "norm", "nest", "roid", "nest", "norm", "norm", "roid"],
      ["norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["roid", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "roid"],
    ]
  },
  "2 Teams": {
    WIDTH: 4000,
    HEIGHT: 4000,
    X_GRID: 9,
    Y_GRID: 9,
    BOTS: 6,
    MAX_FOOD: 75,
    TEAMS: 2,
    ROOM_SETUP: [
      ["bas1", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "bas2"],
      ["bas1", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "bas2"],
      ["bas1", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "bas2"],
      ["bas1", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "bas2"],
      ["bas1", "norm", "norm", "nest", "roid", "nest", "norm", "norm", "bas2"],
      ["bas1", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "bas2"],
      ["bas1", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "bas2"],
      ["bas1", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "bas2"],
      ["bas1", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "bas2"],
    ]
  },
  "4 Teams": {
    WIDTH: 4000,
    HEIGHT: 4000,
    X_GRID: 9,
    Y_GRID: 9,
    BOTS: 8,
    MAX_FOOD: 50,
    TEAMS: 4,
    ROOM_SETUP: [
      ["bas1", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "bas2"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm"],
      ["roid", "norm", "norm", "nest", "roid", "nest", "norm", "norm", "roid"],
      ["norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["bas3", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "bas4"],
    ]
  },
  "Open 2 Teams": {
    WIDTH: 3250,
    HEIGHT: 3250,
    X_GRID: 9,
    Y_GRID: 9,
    BOTS: 6,
    MAX_FOOD: 75,
    TEAMS: 2,
    ROOM_SETUP: [
      ["roid", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "roid"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm"],
      ["roid", "norm", "norm", "nest", "roid", "nest", "norm", "norm", "roid"],
      ["norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["roid", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "roid"],
    ]
  },
  "Open 4 Teams": {
    WIDTH: 3250,
    HEIGHT: 3250,
    X_GRID: 9,
    Y_GRID: 9,
    BOTS: 8,
    MAX_FOOD: 75,
    TEAMS: 4,
    ROOM_SETUP: [
      ["roid", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "roid"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm"],
      ["roid", "norm", "norm", "nest", "roid", "nest", "norm", "norm", "roid"],
      ["norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["roid", "norm", "norm", "norm", "roid", "norm", "norm", "norm", "roid"],
    ]
  },
  "Maze": {
    WIDTH: 3250,
    HEIGHT: 3250,
    X_GRID: 9,
    Y_GRID: 9,
    BOTS: 5,
    MAX_FOOD: 50,
    MAZE: 16,
    ROOM_SETUP: [
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "nest", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ]
  },
  "Maze 4 Teams": {
    WIDTH: 3250,
    HEIGHT: 3250,
    X_GRID: 9,
    Y_GRID: 9,
    BOTS: 8,
    MAX_FOOD: 50,
    MAZE: 16,
    TEAMS: 4,
    ROOM_SETUP: [
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "nest", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
      ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ]
  }
};

let mode = list[Math.floor(Math.random() * list.length)];
if (!config[mode]) throw new Error("That gamemode does not exist!");

exports.output = {
  "host": "0.0.0.0",
  "servesStatic": true,
  "port": 3000,
  "logpath": "logger.php",
  "networkUpdateFactor": 24,
  "socketWarningLimit": 5,
  "networkFrontlog": 1,
  "networkFallbackTime": 150,
  "visibleListInterval": 1000,
  "gameSpeed": 1,
  "runSpeed": 1.5,
  "maxHeartbeatInterval": 30000,
  "sqlinfo":{
    "connectionLimit": 50,
    "host": "DEFAULT",
    "user": "root",
    "password": "DEFAULT",
    "database": "DEFAULT",
    "debug": false
  },
  "verbose": true,
  "WIDTH": 3250,
  "HEIGHT": 3250,
  "MODE": "ffa",
  "RANDOM_COLORS": false,
  "TEAMS": 0,
  "BANNED_CHARACTER_REGEX": "/[\uFDFD\u200E\u0000]/gi",
  "ROOM_SETUP": [
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "nest", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "nest", "nest", "norm", "nest", "nest", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "nest", "nest", "nest", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "nest", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"],
    ["norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm", "norm"]
  ],
  "X_GRID": 9,
  "Y_GRID": 9,
  "DAMAGE_CONSTANT": 0.6,
  "KNOCKBACK_CONSTANT": 1,
  "ROOM_BOUND_FORCE": 0.01,
  "TEAMS": 0,
  "MAZE": false,
  "FOOD": [
    0,
    0.75,
    0.22,
    0.1,
    0.005,
    0,
    0
  ],
  "FOOD_NEST": [
    0,
    0.0,
    0.0,
    0.75,
    0.23,
    0.02,
    0
  ],
  "MAX_SKILL": 9,
  "SOFT_MAX_SKILL": 0.59,
  "TIER_1": 15,
  "TIER_2": 30,
  "TIER_3": 45,
  "SKILL_CAP": 45,
  "SKILL_SOFT_CAP": 0,
  "SKILL_CHEAT_CAP": 45,
  "SKILL_LEAK": 0,
  "STEALTH": 4,
  "MIN_SPEED": 0.001,
  "FOOD_AMOUNT": 0.01,
  "SKILL_BOOST": 5,
  "BOTS": 10,
  "GLASS_HEALTH_FACTOR": 2,
  "TOKEN_REQUIRED": false
};

for (let key in config[mode]) exports.output[key] = config[mode][key];
if (config[mode].TEAMS) exports.output.MODE = "tdm";
console.log(mode);
