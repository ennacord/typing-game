import Phaser from 'phaser';

import MenuScene from './menu';
import CreditsScene from './credits';
import IntroScene from './intro';
import PlayScene from './play';

import CharactersPng from '../assets/chars.png';
import CloudsPng from '../assets/clouds.png';
import EnnaPng from '../assets/enna.png';
import LanternPng from '../assets/lantern.png';
import UIpng from '../assets/ui.png';
import UIjson from '../assets/ui.json';

import bgmMp3 from '../assets/audio/bgm.mp3';
import correctMp3 from '../assets/audio/correct.mp3';
import mistakeMp3 from '../assets/audio/mistake.mp3';
import navMp3 from '../assets/audio/nav.mp3';
import touchMp3 from '../assets/audio/touch.mp3';

import SENPAIS from '../data/senpais';

class IndexScene extends Phaser.Scene {
  preload() {
    // Google Fonts
    this.load.rexWebFont({
      google: { families: ['Zen Maru Gothic', 'VT323'] },
      testString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 !@#$%^&*()-_=+[{]}\\|;:\'",<.>/?',
    });

    // Assets
    this.load.spritesheet('chars', CharactersPng, { frameWidth: 300, frameHeight: 300 });
    this.load.spritesheet('clouds', CloudsPng, {
      frameWidth: 550, frameHeight: 360, margin: 2, spacing: 4,
    });
    this.load.spritesheet('enna', EnnaPng, {
      frameWidth: 380, frameHeight: 300, margin: 2, spacing: 4,
    });
    this.load.spritesheet('lantern', LanternPng, {
      frameWidth: 590, frameHeight: 360, margin: 2, spacing: 4,
    });
    this.load.atlas('ui', UIpng, UIjson);

    // Audio
    this.load.audio('bgm', bgmMp3);
    this.load.audio('correct', correctMp3);
    this.load.audio('mistake', mistakeMp3);
    this.load.audio('nav', navMp3);
    this.load.audio('touch', touchMp3);

    // Scenes
    this.scene.add('menu', MenuScene);
    this.scene.add('credits', CreditsScene);
    this.scene.add('intro', IntroScene);
    this.scene.add('play', PlayScene);
  }

  setupAnimation(key, start, end) {
    // console.log('setupAnimation()', key, start, end);
    this.anims.create({
      key,
      frames: this.anims.generateFrameNumbers('chars', { start, end }),
      frameRate: 2,
      repeat: -1,
    });
  }

  create() {
    // Animations
    this.setupAnimation('enna', 0, 1);
    SENPAIS.forEach((senpai, index) => {
      this.setupAnimation(senpai.key, (index + 1) * 2, ((index + 1) * 2) + 1);
    });

    // Extra Animations
    this.anims.create({
      key: 'clouds',
      frames: this.anims.generateFrameNumbers('clouds', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: 'ennahome',
      frames: this.anims.generateFrameNumbers('enna', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: -1,
    });
    this.anims.create({
      key: 'lantern',
      frames: this.anims.generateFrameNumbers('lantern', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: -1,
    });

    // Box
    this.add.rectangle(640, 360, 1240, 680, 0x000000, 0).setStrokeStyle(3, 0x6d3e4b);

    // Label touch to start
    const touchText = this.add.text(340, 450, 'TOUCH TO START', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontStyle: 'bold',
      fontSize: 50,
      align: 'center',
      fixedWidth: 600,
      color: '#6d3e4b',
    });

    // Animate
    this.add.tween({
      targets: [touchText],
      alpha: { from: 1, to: 0.1 },
      duration: 500,
      yoyo: true,
      loop: -1,
    });

    // Start game on touch
    this.input.once('pointerdown', () => {
      this.sound.add('touch')
        .once('complete', () => {
          this.sound.add('bgm', { loop: true }).play();
        })
        .play();
      this.scene.start('menu');
    });
  }
}

export default IndexScene;
