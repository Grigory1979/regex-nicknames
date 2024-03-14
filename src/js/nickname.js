export default class Validator {
    static validateUsername(name) {
      if (/^[a-z][\w-]*[a-z]$/i.test(name) && name.search(/[\d]{4}/) === -1) {
        return true;
      }
  
      throw new Error(
        'Только латинские буквы! Имя не должно начинаться и заканчиваться цифрами, символами подчёркивания _ или тире -.',
      );
    }
  }