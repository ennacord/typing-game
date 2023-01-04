import './style.css';
import Phaser from 'phaser';
import scene from './scenes';
import plugins from './plugins';

// Phaser Game Instance
// eslint-disable-next-line no-new
new Phaser.Game({
  type: Phaser.AUTO,
  parent: 'game',
  banner: false,
  disableContextMenu: true,
  backgroundColor: Phaser.Display.Color.HexStringToColor('#fbd6aa').color,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: 1280,
    height: 720,
  },
  plugins,
  scene,
});

// Colors
// fbd6aa
// fd897b
// 6d3e4b
