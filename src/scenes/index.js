import Phaser from 'phaser';

import MenuScene from './menu';
import CreditsScene from './credits';
import IntroScene from './intro';
import PlayScene from './play';

import CharactersPng from '../assets/chars.png';
import UIpng from '../assets/ui.png';
import UIjson from '../assets/ui.json';

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
    this.load.atlas('ui', UIpng, UIjson);

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
      this.scene.start('menu');
    });
  }
}

export default IndexScene;
