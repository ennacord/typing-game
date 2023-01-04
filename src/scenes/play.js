import Phaser from 'phaser';

class PlayScene extends Phaser.Scene {
  create() {
    // Background
    this.add.graphics().fillStyle(0xfd897b).fillRect(0, 0, 1280, 720);

    // Box: Main
    this.add.graphics({ x: 40, y: 40 })
      .fillStyle(0x6fbd6aa)
      .fillRoundedRect(0, 0, 900, 640, 20)
      .lineStyle(3, 0x6d3e4b)
      .strokeRoundedRect(0, 0, 900, 640, 20);

    // Level
    this.add.graphics({ x: 970, y: 60 })
      .fillStyle(0x6fbd6aa)
      .fillRoundedRect(0, 0, 280, 80, 20)
      .lineStyle(3, 0x6d3e4b)
      .strokeRoundedRect(0, 0, 280, 80, 20);
    this.add.text(1000, 78, 'LEVEL', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 40,
      color: '#6d3e4b',
    });
    this.levelTxt = this.add.text(1090, 70, '05', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 54,
      align: 'center',
      fixedWidth: 140,
      color: '#6d3e4b',
    });

    // Box: Time
    this.add.graphics({ x: 970, y: 170 })
      .fillStyle(0x6fbd6aa)
      .fillRoundedRect(0, 0, 280, 80, 20)
      .lineStyle(3, 0x6d3e4b)
      .strokeRoundedRect(0, 0, 280, 80, 20);
    this.add.text(1000, 188, 'TIME', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 40,
      color: '#6d3e4b',
    });
    this.timeTxt = this.add.text(1090, 180, '50', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 54,
      align: 'center',
      fixedWidth: 140,
      color: '#6d3e4b',
    });

    // Box: Senpai Left
    this.add.graphics({ x: 970, y: 280 })
      .fillStyle(0x6fbd6aa)
      .fillRoundedRect(0, 0, 280, 80, 20)
      .lineStyle(3, 0x6d3e4b)
      .strokeRoundedRect(0, 0, 280, 80, 20);
    this.add.text(1000, 298, 'SENPAI', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 40,
      color: '#6d3e4b',
    });
    this.senpaiTxt = this.add.text(1090, 290, '05', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 54,
      align: 'center',
      fixedWidth: 140,
      color: '#6d3e4b',
    });

    // Box: Coins
    this.add.graphics({ x: 970, y: 390 })
      .fillStyle(0x6fbd6aa)
      .fillRoundedRect(0, 0, 280, 80, 20)
      .lineStyle(3, 0x6d3e4b)
      .strokeRoundedRect(0, 0, 280, 80, 20);
    this.add.circle(1020, 430, 24, 0x6d3e4b);
    this.coinTxt = this.add.text(1060, 400, '999,999', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 54,
      color: '#6d3e4b',
    });

    // Box: Power Up
    this.add.graphics({ x: 970, y: 500 })
      .fillStyle(0x6fbd6aa)
      .fillRoundedRect(0, 0, 280, 150, 20)
      .lineStyle(3, 0x6d3e4b)
      .strokeRoundedRect(0, 0, 280, 150, 20);
    this.add.text(970, 510, 'POWER UP', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 34,
      color: '#6d3e4b',
      align: 'center',
      fixedWidth: 280,
    });
  }
}

export default PlayScene;
