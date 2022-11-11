const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
<<<<<<< HEAD
  letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  constructor(mode) {
    this.mode = mode || mode === undefined
  }

  encrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    message = message.toUpperCase().split('');
    key = key.toUpperCase();

    let newArr = []
=======
  constructor(mode) {
    this.mode = mode || mode === false;
    this.abc = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  }


  encrypt(message, key) {

    if (!message || !key) throw new Error('Incorrect arguments!');

    let messageNum = [];

    message.toUpperCase().split('').forEach(el => {
      if (this.abc.includes(el)) {
        messageNum.push(this.abc.indexOf(el))
      }
    });

    let keyArr = key.toUpperCase().split('');

    while (keyArr.length < messageNum.length) {
      key.toUpperCase().split('').forEach(el => {
        keyArr.push(el);
      })
    }

    keyArr = keyArr.slice(0, messageNum.length);

    let keyNum = [];

    keyArr.forEach(el => {
      if (this.abc.includes(el)) {
        keyNum.push(this.abc.indexOf(el))
      }
    });

    let resultNum = [];

    for (let i = 0; i < messageNum.length; i++) {
      resultNum.push(((messageNum[i] + keyNum[i]) % 26));
    }

    let result = [];

    resultNum.forEach(el => {
      result.push(this.abc[el])
    });

    let resultMessage = [];

    message.toUpperCase().split('').forEach(el => {
      if (!this.abc.includes(el)) {
        resultMessage.push(el);
      } else {
        resultMessage.push(result.splice(0, 1));
      }
    })

    if (this.mode) {
      return resultMessage.reverse().join('');
    } else {
      return resultMessage.join('');
    }
  }


  decrypt(encryptedMessage, key) {

    if (!encryptedMessage || !key) throw new Error('Incorrect arguments!');

    let encryptedmessageNum = [];

    encryptedMessage.split('').forEach(el => {
      if (this.abc.includes(el)) {
        encryptedmessageNum.push(this.abc.indexOf(el))
      }
    });

    let keyArr = key.toUpperCase().split('');

    while (keyArr.length < encryptedmessageNum.length) {
      key.toUpperCase().split('').forEach(el => {
        keyArr.push(el);
      })
    }

    keyArr = keyArr.slice(0, encryptedmessageNum.length);

    let keyNum = [];

    keyArr.forEach(el => {
      if (this.abc.includes(el)) {
        keyNum.push(this.abc.indexOf(el))
      }
    });

    let resultNum = [];

    for (let i = 0; i < encryptedmessageNum.length; i++) {
      let min = ((encryptedmessageNum[i] - keyNum[i]) % 26);
      if (min < 0) {
        resultNum.push(min + 26);
      } else {
        resultNum.push(min);
      }
    }

    let result = [];

    resultNum.forEach(el => {
      result.push(this.abc[el])
    });


    let resultMessage = [];

    encryptedMessage.toUpperCase().split('').forEach(el => {
      if (!this.abc.includes(el)) {
        resultMessage.push(el);
      } else {
        resultMessage.push(result.splice(0, 1));
      }
    })

    if (this.mode) {
      return resultMessage.reverse().join('');
    } else {
      return resultMessage.join('');
    }
>>>>>>> baa5e3beb10d3503891eb9d1269b00d66176878b
  }
  decrypt(message, key) {
    if (!message || !key) throw Error('Incorrect arguments!');
    message = message.toUpperCase().split('');
    key = key.toUpperCase();
  }

}

module.exports = {
  VigenereCipheringMachine
};
