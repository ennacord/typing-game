import Phaser from 'phaser';

class CreditsScene extends Phaser.Scene {
  create() {
    // Box
    this.add.rectangle(640, 360, 1240, 680, 0x000000, 0).setStrokeStyle(3, 0x6d3e4b);

    // Back
    this.add.circle(60, 60, 20, 0xffffff);
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
        this.scene.start('menu');
      });

    // Logo
    this.add.text(340, 250, 'Bird Banking Frenzy!!', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      align: 'center',
      fixedWidth: 600,
      color: '#6d3e4b',
    });

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
    this.add.circle(150, 400, 48, 0x000000, 0).setStrokeStyle(1, 0x6d3e4b);
    this.add.circle(150, 400, 40, 0x6d3e4b, 1);
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

    this.add.circle(150, 510, 48, 0x000000, 0).setStrokeStyle(1, 0x6d3e4b);
    this.add.circle(150, 510, 40, 0x6d3e4b, 1);
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

    this.add.circle(150, 620, 48, 0x000000, 0).setStrokeStyle(1, 0x6d3e4b);
    this.add.circle(150, 620, 40, 0x6d3e4b, 1);
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
