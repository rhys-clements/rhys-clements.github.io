var characters = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
                  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
                  'z', 'x', 'c', 'v', 'b', 'n', 'm'];

class Scrambled{
  constructor(element){
    this.element = element;
    //this.delay = delay;
    this.text = element.innerText;
    this.encrypted = this.encrypt(this.text);
    this.timer = setInterval(this.update.bind(this),50);
  }

  encrypt(text){
    text = text.split('');
    for(var i = 0; i < text.length; i++){
      if(characters.includes(text[i])){
        text[i] = characters[Math.floor(Math.random() * characters.length)];
      }
    }
    text = text.join('');
    return text
  }

  decrypt(original, encrypted){
    original = original.split('');
    encrypted = encrypted.split('');
    for(var i = 0; i < original.length; i++){
      if(encrypted[i] != original[i]) {
        encrypted[i] = characters[Math.floor(Math.random() * characters.length)];
      }
    }
    original = original.join('');
    encrypted = encrypted.join('');

    return encrypted
  }

  update(){
    this.encrypted = this.decrypt(this.text,this.encrypted);
    this.element.innerText = this.encrypted;

    if(this.encrypted == this.text){
      clearInterval(this.timer);
    }
  }

}

var elements = document.getElementsByClassName('scramble');
for (var i = 0; i < elements.length; i++) {
  let e = new Scrambled(elements[i]);
}
