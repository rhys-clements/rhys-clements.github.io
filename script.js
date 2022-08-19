var original;
var encrypted;
var characters = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0',
                  'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p',
                  'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l',
                  'z', 'x', 'c', 'v', 'b', 'n', 'm',
                  '!', '£', '$', '%'];

original = document.getElementById("encrypt").innerHTML;
document.getElementById("encrypt").innerHTML = encrypt(original);

function encrypt(text){
  console.log(text)
  text = text.split('');
  for(var i = 0; i < text.length; i++){
    if(characters.includes(text[i])){
      text[i] = characters[Math.floor(Math.random() * characters.length)];
    }
  }
  text = text.join('');
  console.log(text)
  return text
}

function decrypt(original, encrypted){
  original = original.split('');
  encrypted = encrypted.split('');
  for(var i = 0; i < original.length; i++){
    if(encrypted[i] != original[i]){
      encrypted[i] = characters[Math.floor(Math.random() * characters.length)];
    }
  }
  original = original.join('');
  encrypted = encrypted.join('');
  return encrypted;

}

function iterate(original, encrypted){
  var timer = setInterval(
    function(){
      encrypted = decrypt(original, encrypted);
      document.getElementById("encrypt").innerHTML = encrypted;

      if(encrypted == original){
        clearInterval(timer);
      }
    }, 50);
}

iterate(original, document.getElementById("encrypt").innerHTML);
