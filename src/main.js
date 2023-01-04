import './style.css';
import Phaser from 'phaser';

// Phaser Game Instance
// eslint-disable-next-line no-new
new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  banner: false,
  disableContextMenu: true,
  backgroundColor: Phaser.Display.Color.HexStringToColor('#d0d0d0').color,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  scene: {
    create() {
      // eslint-disable-next-line no-console
      console.log('game start!');
    },
  },
});