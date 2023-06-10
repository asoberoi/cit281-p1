function getRandomString() {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    const minLength = 5;
    const maxLength = 26;
    const length = Math.floor(Math.random() * (maxLength - minLength + 1)) + minLength;
    let result = '';
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * alphabet.length);
      result += alphabet.charAt(randomIndex);
    }
    return result;
  }
  
  console.log(getRandomString());
  