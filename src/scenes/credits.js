import Phaser from 'phaser';

class CreditsScene extends Phaser.Scene {
  create() {
    // Box
    this.add.rectangle(640, 360, 1240, 680, 0x000000, 0).setStrokeStyle(3, 0x6d3e4b);

    // Back
    this.add.sprite(65, 60, 'ui', 'wings').setScale(0.4);
    this.add.text(95, 45, 'Back', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      align: 'left',
      fixedWidth: 200,
      color: '#6d3e4b',
    });

    // Play Button
    const playBtn = this.add.rectangle(130, 60, 200, 50, 0xff0000, 0);
    playBtn.setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        this.sound.add('nav', { volume: 0.4 });
        this.scene.start('menu');
      });

    // Logo
    this.add.sprite(640, 170, 'ui', 'logo').setScale(0.45);

    // Credits
    this.add.text(340, 280, 'CREDITS', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 60,
      align: 'center',
      fixedWidth: 600,
      color: '#6d3e4b',
    });

    // Description
    this.add.rectangle(980, 520, 500, 280, 0x000000, 0).setStrokeStyle(2, 0x6d3e4b);
    this.add.text(750, 405, `
      Birds Banking Frenzy!! is a game produced in Enna's Angelic Teahouse.
      It is a typing game about Enna Alouette receiving red packets from her senpais.
      We hope you enjoy the short project. Happy Lunar New Year!
    `.replaceAll(/\n/gi, ''), {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 29,
      align: 'center',
      fixedWidth: 460,
      color: '#6d3e4b',
      wordWrap: { width: 460, useAdvancedWrap: true },
      lineSpacing: 10,
    });

    // Contributors
    this.add.sprite(150, 400, 'ui', 'frame').setScale(0.66);
    this.add.sprite(150, 400, 'ui', 'av_hazel').setScale(0.4);
    this.add.text(220, 370, 'Hazel @HazelSokolov', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      color: '#6d3e4b',
    });
    this.add.text(220, 400, 'Illustration', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 26,
      color: '#6d3e4b',
    });

    this.add.sprite(150, 510, 'ui', 'frame').setScale(0.66);
    this.add.sprite(150, 510, 'ui', 'av_jetrico').setScale(0.4);
    this.add.text(220, 480, 'jetrico @jetri_co', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      color: '#6d3e4b',
    });
    this.add.text(220, 510, 'Programming', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 26,
      color: '#6d3e4b',
    });

    this.add.sprite(150, 620, 'ui', 'frame').setScale(0.66);
    this.add.sprite(150, 620, 'ui', 'av_mata').setScale(0.4);
    this.add.text(220, 590, 'Matahari @mataharigoreng', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      color: '#6d3e4b',
    });
    this.add.text(220, 620, 'Illustration', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 26,
      color: '#6d3e4b',
    });
  }
}

export default CreditsScene;
