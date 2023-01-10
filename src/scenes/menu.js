import Phaser from 'phaser';

class MenuScene extends Phaser.Scene {
  create() {
    // Box
    this.add.rectangle(200, 580, 300, 150, 0x000000, 0).setStrokeStyle(4, 0x6d3e4b);
    this.add.rectangle(200, 580, 292, 142, 0xfd897b, 1);

    // Logo
    this.add.sprite(1000, 550, 'ui', 'logo').setScale(0.5);

    // Wings menu pointer
    const wings = this.add.sprite(300, -100, 'ui', 'wings').setScale(0.4);

    // Play
    this.add.text(50, 530, 'Play', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 40,
      align: 'center',
      fixedWidth: 300,
      color: '#6d3e4b',
    });

    // Buttons
    const playBtn = this.add.rectangle(200, 550, 292, 50, 0xffffff, 0);
    const creditsBtn = this.add.rectangle(200, 605, 292, 50, 0xffffff, 0);

    // Play Button
    playBtn.setInteractive({ useHandCursor: true })
      .on('pointerover', () => {
        wings.x = 260;
        wings.y = 550;
      })
      .on('pointerout', () => {
        wings.y = -100;
      })
      .once('pointerdown', () => {
        playBtn.destroy();
        creditsBtn.destroy();
        this.scene.start('intro');
      });

    // Credits
    this.add.text(50, 585, 'Credits', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 40,
      align: 'center',
      fixedWidth: 300,
      color: '#6d3e4b',
    });

    // Credits Button
    creditsBtn.setInteractive({ useHandCursor: true })
      .on('pointerover', () => {
        wings.x = 290;
        wings.y = 605;
      })
      .on('pointerout', () => {
        wings.y = -100;
      })
      .once('pointerdown', () => {
        playBtn.destroy();
        creditsBtn.destroy();
        this.scene.start('credits');
      });
  }
}

export default MenuScene;
