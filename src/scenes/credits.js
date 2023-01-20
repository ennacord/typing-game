import Phaser from 'phaser';

class CreditsScene extends Phaser.Scene {
  create() {
    // Box
    this.add.rectangle(640, 360, 1240, 680, 0x000000, 0).setStrokeStyle(3, 0x6d3e4b);

    // Back
    this.add.sprite(65, 65, 'ui', 'wings').setScale(0.4);
    this.add.text(95, 50, 'Back', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      align: 'left',
      fixedWidth: 200,
      color: '#6d3e4b',
    });

    // Play Button
    const playBtn = this.add.rectangle(130, 65, 200, 50, 0xff0000, 0);
    playBtn.setInteractive({ useHandCursor: true })
      .on('pointerdown', () => {
        this.sound.add('nav', { volume: 0.4 }).play();
        this.scene.start('menu');
      });

    // Logo
    this.add.sprite(930, 190, 'ui', 'logo').setScale(0.5);

    // Credits
    this.add.text(220, 40, 'CREDITS', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 50,
      align: 'left',
      fixedWidth: 600,
      color: '#6d3e4b',
    });

    // Description
    this.add.rectangle(930, 490, 500, 280, 0x000000, 0).setStrokeStyle(2, 0x6d3e4b);
    this.add.text(720, 375, `
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
    this.add.sprite(150, 170, 'ui', 'frame').setScale(0.66);
    this.add.sprite(150, 170, 'ui', 'av_hazel').setScale(0.4);
    this.add.text(220, 140, 'Hazel @HazelSokolov', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      color: '#6d3e4b',
    });
    this.add.text(220, 170, 'Illustration', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 26,
      color: '#6d3e4b',
    });

    this.add.sprite(150, 280, 'ui', 'frame').setScale(0.66);
    this.add.sprite(150, 280, 'ui', 'av_jetrico').setScale(0.4);
    this.add.text(220, 250, 'jetrico @jetri_co', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      color: '#6d3e4b',
    });
    this.add.text(220, 280, 'Programming', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 26,
      color: '#6d3e4b',
    });

    this.add.sprite(150, 390, 'ui', 'frame').setScale(0.66);
    this.add.sprite(150, 390, 'ui', 'av_mata').setScale(0.4);
    this.add.text(220, 360, 'Matahari @mataharigoreng', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      color: '#6d3e4b',
    });
    this.add.text(220, 390, 'Illustration', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 26,
      color: '#6d3e4b',
    });

    this.add.sprite(150, 500, 'ui', 'frame').setScale(0.66);
    this.add.sprite(150, 500, 'ui', 'av_heko').setScale(0.4);
    this.add.text(220, 470, 'heko @hekontent', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      color: '#6d3e4b',
    });
    this.add.text(220, 500, 'Background Music and Sound Effects', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 26,
      color: '#6d3e4b',
    });

    this.add.sprite(150, 610, 'ui', 'frame').setScale(0.66);
    this.add.sprite(150, 610, 'ui', 'av_elodie').setScale(0.4);
    this.add.text(220, 580, 'Elodie @ElodieFollows', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 30,
      color: '#6d3e4b',
    });
    this.add.text(220, 610, 'Sound Effects', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 26,
      color: '#6d3e4b',
    });
  }
}

export default CreditsScene;
