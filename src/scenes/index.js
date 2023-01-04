import Phaser from 'phaser';

class IndexScene extends Phaser.Scene {
  loadingText = null;

  preload() {
    // Background
    const background = this.add.graphics();
    background.fillStyle(0xfbd6aa);
    background.fillRect(0, 0, 1280, 720);

    // Loading text
    this.loadingText = this.add.text(540, 350, 'Loading...', {
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: 24,
      align: 'center',
      fixedWidth: 200,
      color: '#6d3e4b',
    });

    // Google Fonts
    this.load.rexWebFont({
      google: { families: ['Zen Maru Gothic', 'VT323'] },
      testString: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 1234567890 !@#$%^&*()-_=+[{]}\\|;:\'",<.>/?',
    });
  }

  create() {
    // Remove Loading... text
    this.loadingText.destroy();

    // Label touch to start
    const touchText = this.add.text(340, 450, 'TOUCH TO START', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontStyle: 'bold',
      fontSize: 50,
      align: 'center',
      fixedWidth: 600,
      color: '#ffffff',
      stroke: '#6d3e4b',
      strokeThickness: 3,
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
      // this.scene.start('menu');
    });
  }
}

export default IndexScene;
