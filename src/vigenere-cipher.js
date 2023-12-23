// const { NotImplementedError } = require('../extensions/index.js');

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

constructor(toRight = true) {
    this.toRight = toRight;
    this.alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }

  encrypt(message, key) {
    if (!message || !key) {
      throw new Error("Incorrect arguments!");
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encryptedMessage = "";
    let keyIndex = 0;

    for (let i = 0; i < message.length; i++) {
      if (this.alphabet.includes(message[i])) {
        let move = (this.alphabet.indexOf(message[i]) + this.alphabet.indexOf(key[keyIndex])) % this.alphabet.length;
        encryptedMessage += this.alphabet[move]; // add encrypted char
        keyIndex++;
        keyIndex = keyIndex % key.length;
      }
      else {
        encryptedMessage += message[i]; // if alphabet doesn't have such char, just get it
      }
    }

    return this.toRight ? encryptedMessage : encryptedMessage.split("").reverse().join("");
  }


  decrypt(encryptedMessage, key) {
    if (!encryptedMessage || !key) {
      throw new Error("Incorrect arguments!");
    }

    encryptedMessage = encryptedMessage.toUpperCase();
    key = key.toUpperCase();

    let decryptedMessage = "";
    let keyIndex = 0;

    for (let i = 0; i < encryptedMessage.length; i++) {
      if (this.alphabet.includes(encryptedMessage[i])) {
        let move = (this.alphabet.indexOf(encryptedMessage[i]) + this.alphabet.length - this.alphabet.indexOf(key[keyIndex])) % this.alphabet.length;
        decryptedMessage += this.alphabet[move];
        keyIndex++;
        keyIndex = keyIndex % key.length;
      }
      else {
        decryptedMessage += encryptedMessage[i];
      }
    }

    return this.toRight ? decryptedMessage : decryptedMessage.split("").reverse().join("");
  }
}

module.exports = {
  VigenereCipheringMachine
};
