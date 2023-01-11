import Phaser from 'phaser';
import PHRASES from '../data/phrases';
import SENPAIS from '../data/senpais';

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

    // Main Text
    this.mainText = this.add.text(90, 200, '', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 80,
      color: '#6d3e4b',
      align: 'center',
      fixedWidth: 800,
      wordWrap: { width: 800, useAdvancedWrap: true },
    });

    // Couch
    this.add.sprite(220, 575, 'ui', 'couch').setScale(0.8);

    // Enna
    this.anims.create({
      key: 'idle',
      frames: this.anims.generateFrameNumbers('enna', { start: 0, end: 1 }),
      frameRate: 2,
      repeat: -1,
    });
    this.add.sprite(480, 520, 'enna').setScale(0.7).play('idle');
    this.add.sprite(680, 400, 'ui', 'bubble1').setScale(0.5);

    // Current Text
    this.sayText = this.add.text(540, 360, '', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 24,
      color: '#6d3e4b',
      align: 'left',
      fixedWidth: 270,
      wordWrap: { width: 270, useAdvancedWrap: true },
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
    this.timeTxt = this.add.text(1090, 180, '', {
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
    this.senpaiTxt = this.add.text(1090, 290, '1', {
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
    this.add.sprite(1020, 430, 'ui', 'coin').setScale(0.5);
    this.coinTxt = this.add.text(1060, 400, '0', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 54,
      color: '#6d3e4b',
    });

    // Box: Try Again
    this.add.graphics({ x: 970, y: 550 })
      .fillStyle(0x6fbd6aa)
      .fillRoundedRect(0, 0, 280, 80, 20)
      .lineStyle(3, 0x6d3e4b)
      .strokeRoundedRect(0, 0, 280, 80, 20);
    this.add.text(970, 570, 'Try Again?', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 40,
      color: '#6d3e4b',
      align: 'center',
      fixedWidth: 280,
    });
    this.add.rectangle(970, 550, 280, 80, 0x000000, 0)
      .setOrigin(0, 0)
      .setInteractive({ useHandCursor: true })
      .once('pointerdown', () => {
        this.scene.restart();
      });

    // Start game proper
    this.startGame();
  }

  startGame() {
    this.timeLeft = 60;
    this.coin = 100;
    this.difficulty = 'easy';
    this.diffMult = { easy: 1, intermediate: 1.5, hard: 2 };
    // this.diffTime = { easy: 50, intermediate: 45, hard: 40 };
    this.diffTime = { easy: 60, intermediate: 60, hard: 60 };
    this.senpai = 0;
    this.senpaiPhrase = 0;
    this.currentPhrase = '';
    this.targetPhrase = '';
    this.timer = null;
    this.timeTxt.setText(String(this.timeLeft));
    this.coinTxt.setText(String(this.coin));

    this.input.keyboard.on('keydown', (e) => {
      if (!this.targetPhrase) return;
      if (['alt', 'shift', 'control', 'tab', 'enter', 'escape'].indexOf(e.key.toLowerCase()) > -1) return;
      this.currentPhrase += e.key;
      const targetPhrase = this.targetPhrase.toLowerCase();
      const currentPhrase = this.currentPhrase.toLowerCase();
      if (targetPhrase === currentPhrase) {
        // Completed phrase
        this.completePhrase();
      } else if (targetPhrase.indexOf(currentPhrase) !== 0) {
        // Wrong input
        this.wrongInput();
      } else {
        // Correct ongoing input
        this.sayText.setText(this.currentPhrase);
        // Start timer only on their first key
        if (!this.timer) {
          this.timer = this.time.addEvent({
            delay: 1000,
            callback: this.tick,
            callbackScope: this,
            loop: true,
          });
        } else if (this.timer.paused) {
          this.timer.paused = false;
        }
      }
    });

    // Transition first senpai
    this.senpaiArt = this.add.sprite(820, 520, 'enna').setScale(-0.7, 0.7).play('idle');
    this.tweens.add({
      targets: [this.senpaiArt],
      x: { from: this.senpaiArt.x, to: this.senpaiArt.x - 40 },
      alpha: { from: 0, to: 1 },
      duration: 2000,
      onComplete: () => {
        this.newPhrase();
      },
    });
  }

  tick() {
    this.timeLeft -= 1;
    this.timeTxt.setText(String(this.timeLeft));

    // No time remaining
    if (this.timeLeft < 1) this.senpaiChange(); // this.endGame();
  }

  endGame() {
    // Stop timer
    if (this.timer) this.timer.remove();
    // Remove key handler
    this.input.keyboard.off('keydown');
    // Show score
    this.mainText.setText(`Complete! You earned $${this.coin}!`);
    this.sayText.setText(`What? Only $${this.coin}?!`);
  }

  newPhrase() {
    const phrasePool = PHRASES[this.difficulty];
    this.targetPhrase = phrasePool[Math.floor(Math.random() * phrasePool.length)];
    this.mainText.setText(this.targetPhrase);
    this.mainText.y = 200 - (this.mainText.displayHeight / 2);
  }

  wrongInput() {
    // Grace if first letter mistake
    if (this.currentPhrase.length < 2) {
      this.currentPhrase = '';
      this.sayText.setText('');
      return;
    }
    // Actual mistake
    this.coin -= 100;
    this.coinTxt.setText(String(this.coin));

    // Deduct animation
    const coinDeduct = this.add.text(1140, 400, '-100', {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 54,
      color: '#6d3e4b',
    });
    this.tweens.add({
      targets: [coinDeduct],
      y: { from: coinDeduct.y, to: coinDeduct.y + 100 },
      alpha: { from: 1, to: 0 },
      duration: 3000,
      onComplete: () => { coinDeduct.destroy(); },
    });

    this.cameras.main.shake(200);

    this.currentPhrase = '';
    this.sayText.setText('');

    // End game if no coins left
    if (this.coin < 0) {
      this.coin = 0;
      this.coinTxt.setText(String(this.coin));
      this.endGame();
    }
  }

  senpaiChange() {
    this.targetPhrase = '';
    this.currentPhrase = '';

    // Pause during senpai change
    if (this.timer) this.timer.paused = true;

    if (this.senpai === 10) {
      this.endGame();
      return;
    }

    // Next senpai
    this.senpai += 1;
    this.senpaiTxt.setText(String(this.senpai + 1));

    // Notice
    this.mainText.setText(`Senpai: ${SENPAIS[this.senpai].name}`);
    this.sayText.setText(`Hi ${SENPAIS[this.senpai].name}!`);

    // Change difficulty based on senpai
    if (this.senpai < 3) {
      // 0 1 2
      this.difficulty = 'easy';
    } else if (this.senpai < 7) {
      // 3 4 5 6
      this.difficulty = 'intermediate';
    } else {
      // 7 8 9 10
      this.difficulty = 'hard';
    }

    // Change difficulty time
    this.timeLeft = this.diffTime[this.difficulty];
    this.timeTxt.setText(String(this.timeLeft));

    // Change senpai art
    if (this.senpaiArt) {
      this.tweens.add({
        targets: [this.senpaiArt],
        x: { from: this.senpaiArt.x, to: this.senpaiArt.x + 40 },
        alpha: { from: 1, to: 0 },
        duration: 2000,
        onComplete: () => {
          this.senpaiArt.destroy();
          // SENPAIS[this.senpai].key
          this.senpaiArt = this.add.sprite(820, 520, 'enna').setScale(-0.7, 0.7).setAlpha(0).play('idle');
          this.tweens.add({
            targets: [this.senpaiArt],
            x: { from: this.senpaiArt.x, to: this.senpaiArt.x - 40 },
            alpha: { from: 0, to: 1 },
            duration: 2000,
            onComplete: () => {
              this.newPhrase();
            },
          });
        },
      });
    }
  }

  completePhrase() {
    // Resets
    this.currentPhrase = '';
    this.sayText.setText('');

    // Give coins
    // const reward = this.targetPhrase.length * this.diffMult[this.difficulty] * 10;
    const reward = 200;
    this.coin += reward;
    this.coinTxt.setText(String(this.coin));

    // Reward animation
    const coinReward = this.add.text(1140, 400, `+${reward}`, {
      fontFamily: 'VT323, Arial, Helvetica, sans-serif',
      fontSize: 54,
      color: '#6d3e4b',
    });
    this.tweens.add({
      targets: [coinReward],
      y: { from: coinReward.y, to: coinReward.y - 100 },
      alpha: { from: 1, to: 0 },
      duration: 3000,
      onComplete: () => { coinReward.destroy(); },
    });

    // Senpai cange
    if (this.coin >= (this.senpai + 1) * 1000) {
      this.senpaiChange();
    } else {
      this.newPhrase();
    }
  }
}

export default PlayScene;
