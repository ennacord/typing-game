import Phaser from 'phaser';

class MenuScene extends Phaser.Scene {
  create() {
    // Box
    this.add.rectangle(640, 360, 1240, 680, 0x000000, 0).setStrokeStyle(3, 0x6d3e4b);

    // Label touch to start
    this.add.text(340, 360, 'ok', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontStyle: 'bold',
      fontSize: 50,
      align: 'center',
      fixedWidth: 600,
      color: '#ffffff',
      stroke: '#6d3e4b',
      strokeThickness: 3,
    });
  }
}

export default MenuScene;
