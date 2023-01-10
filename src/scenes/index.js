import Phaser from 'phaser';

import MenuScene from './menu';
import CreditsScene from './credits';
import IntroScene from './intro';
import PlayScene from './play';

import EnnaSprite from '../assets/enna-sprite.png';
import UIpng from '../assets/ui.png';
import UIjson from '../assets/ui.json';

class IndexScene extends Phaser.Scene {
  preload() {
    // Google Fonts
    this.load.rexWebFont({
      google: { families: ['Zen Maru Gothic', 'VT323'] },
      testString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 !@#$%^&*()-_=+[{]}\\|;:\'",<.>/?',
    });

    // Assets
    this.load.spritesheet('enna', EnnaSprite, { frameWidth: 300, frameHeight: 300 });
    this.load.atlas('ui', UIpng, UIjson);

    // Scenes
    this.scene.add('menu', MenuScene);
    this.scene.add('credits', CreditsScene);
    this.scene.add('intro', IntroScene);
    this.scene.add('play', PlayScene);
  }

  create() {
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
