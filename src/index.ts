import { Sprite, Playable } from "./sprites";
import { mapSetup } from "./render/canvas";
import { configureKeyPress } from "./events/keys";
import { animationBuilder } from "./render/animation";
import {
  MAP_WIDTH,
  MAP_HEIGHT,
  MAP_X_OFFSET,
  MAP_Y_OFFSET,
  CHAR_X_OFFSET,
  CHAR_Y_OFFSET,
  ENEMY_X_OFFSET,
  ENEMY_Y_OFFSET,
} from "./constants";
import { State } from "./state";
import { ToxicDrain } from "./attacks/attackList/toxicDrain";
import { SoftGrass } from "./attacks/attackList/softGrass";
import { CitricHealing } from "./attacks/attackList/citricHealing";

import "./css/style.css";
import BackgroundSprite from "./img/november.png";
import ForegroundSprite from "./img/november_foreground.png";
import PlayerSprite from "./img/main_char_sprite.png";
import EnemySprite from "./img/mushroom_boss.png";

const loadImage = (image: HTMLImageElement): Promise<HTMLImageElement> => {
  return new Promise((resolve, reject) => {
    image.onload = () => {
      resolve(image);
    }
    image.onerror = e => {
      reject(e)
    }
  })
};

const main = async () => {
  const playerImg = new Image();
  const bgImg = new Image();
  const fgImg = new Image();
  const enemyImg = new Image();
  const images = [playerImg, bgImg, fgImg, enemyImg];
  
  bgImg.src = BackgroundSprite;
  playerImg.src = PlayerSprite;
  fgImg.src = ForegroundSprite;
  enemyImg.src = EnemySprite;
  await Promise.all(images.map(loadImage));

  const playerFrames = 16;



  const bg = new Sprite({
    position: {
      x: MAP_X_OFFSET,
      y: MAP_Y_OFFSET,
    },
    image: bgImg,
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    directions: {
      down: 0,
      up: 0,
      left: 0,
      right: 0,
    },
  });
  const fg = new Sprite({
    position: {
      x: MAP_X_OFFSET,
      y: MAP_Y_OFFSET,
    },
    image: fgImg,
    width: MAP_WIDTH,
    height: MAP_HEIGHT,
    directions: {
      down: 0,
      up: 0,
      left: 0,
      right: 0,
    },
  });
  const player = new Playable(
    {
      position: {
        x: CHAR_X_OFFSET,
        y: CHAR_Y_OFFSET,
      },
      image: playerImg,
      width: playerImg.width / playerFrames,
      height: playerImg.height,
      zoom: 4,
      frames: playerFrames,
      directions: {
        down: 0,
        up: 4,
        left: 8,
        right: 12,
      },
    },
    {
      hp: 100,
      hpRegen: 1e-4,
      mana: 1000,
      manaRegen: 0.001,
      muscle: 30,
      magik: 30,
      armour: 30,
      immunity: 30,
      attacks: [new SoftGrass(), new CitricHealing()],
    }
  );
  const enemyCoords = [{ x: 265, y: 20 }] //, { x: 1500, y: 550 }, { x: 500, y: 500 }];

  const enemies = enemyCoords.map(enemyCoords => {
    const enemy = new Playable({
        position: enemyCoords,
        image: enemyImg,
        width: enemyImg.width,
        height: enemyImg.height,
        zoom: 4,
        directions: {
          down: 0,
          up: 0,
          left: 0,
          right: 0,
        },
      },
      {
        hp: 100,
        hpRegen: 1e-4,
        mana: 1000,
        manaRegen: 0.001,
        muscle: 10,
        magik: 30,
        armour: 10,
        immunity: 30,
        attacks: [new ToxicDrain()],
      }
    )
    return enemy;
  });

  const state = new State({
    controller: {
      up: "w",
      down: "s",
      left: "a",
      right: "d",
      attacks: ["y", "u", "i", "o"],
    },
  });
  const canvas = mapSetup(MAP_WIDTH, MAP_HEIGHT);
  configureKeyPress(state.controller);
  animationBuilder({ bg, player, state, canvas, fg, enemies });
};

main();
