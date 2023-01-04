import Phaser from 'phaser';

const INTRO_DIALOG = [
  'I have no money...',
  'Birds Banking Frenzy!! is a game produced in Enna\'s Angelic Teahouse.',
  'It is a typing game about Enna Alouette receiving red packets from her senpais.',
  'We hope you enjoy the short project.',
  'Happy Lunar New Year!',
];

class IntroScene extends Phaser.Scene {
  create() {
    // Box
    this.add.rectangle(640, 360, 1240, 680, 0x000000, 0).setStrokeStyle(3, 0x6d3e4b);

    // Enna
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('enna', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: -1,
    });
    this.add.sprite(300, 360, 'enna').setScale(1.4).play('idle');

    // Dialog Text
    this.dialogTxt = this.add.text(600, 300, '', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 40,
      align: 'left',
      fixedWidth: 700,
      color: '#6d3e4b',
      wordWrap: { width: 500, useAdvancedWrap: true },
      lineSpacing: 10,
    });

    // Start game on touch
    this.displayOngoing = false;
    this.currentLine = -1;
    this.nextLine();
    this.input.on('pointerdown', () => {
      this.nextLine();
    });
  }

  nextLine() {
    if (this.currentLine > INTRO_DIALOG.length - 1) {
      if (this.displayTimer) this.displayTimer.destroy();
      this.scene.start('play');
      return;
    }

    if (this.displayTimer) this.displayTimer.destroy();

    if (this.displayOngoing) {
      // If still animating, just display full text
      this.dialogTxt.setText(INTRO_DIALOG[this.currentLine]);
      this.displayOngoing = false;
    } else {
      // No animation ongoing, proceed to next
      this.displayOngoing = true;
      this.currentLine += 1;
      const targetLine = INTRO_DIALOG[this.currentLine];
      // Text display
      if (targetLine) {
        let displayChars = 0;
        this.displayTimer = this.time.addEvent({
          delay: 20,
          callback: () => {
            displayChars += 1;
            this.dialogTxt.setText(targetLine.substring(0, displayChars));
            if (displayChars >= targetLine.length) this.displayOngoing = false;
          },
          callbackScope: this,
          repeat: targetLine.length - 1,
        });
      } else {
        this.scene.start('play');
      }
    }
  }
}

export default IntroScene;
