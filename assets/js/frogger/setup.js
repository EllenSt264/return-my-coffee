const gameboard = document.querySelector(".frogger-board");

// Canvas 

const canvas = document.getElementById("canvas1");
const ctx1 = canvas.getContext("2d");
canvas.width = 600;
canvas.height = 600;

const canvas2 = document.getElementById("canvas2");
const ctx2 = canvas2.getContext("2d");
canvas2.width = 600;
canvas2.height = 600;

const canvas3 = document.getElementById("canvas3");
const ctx3 = canvas3.getContext("2d");
canvas3.width = 600;
canvas3.height = 600;

const canvas4 = document.getElementById("canvas4");
const ctx4 = canvas4.getContext("2d");
canvas4.width = 600;
canvas4.height = 600;

const canvas5 = document.getElementById("canvas5");
const ctx5 = canvas5.getContext("2d");
canvas5.width = 600;
canvas5.height = 600;

// Global game variables

const scoreBoard = document.querySelector(".score span");
const collisionBoard = document.querySelector(".collisions span");

const grid = 80;
let keys = [];
let score= 0;
let collisionCount = 0;
let frame = 0;
let gamespeed = 1;

const dustArray = [];
const maxDust = 300;
const ripplesArray = [];
const carsArray = [];
const logsArray = [];

// Images

const background_lvl2 = new Image();
background_lvl2.src = "./assets/img/frogger/background_lvl2.png";

const grass = new Image();
grass.src = "./assets/img/frogger/grass.png";

const collisions = new Image();
collisions.src = "./assets/img/frogger/collisions.png";

const turtle = new Image();
turtle.src = "./assets/img/frogger/turtles.png";

const log = new Image();
log.src = "./assets/img/frogger/log.png";