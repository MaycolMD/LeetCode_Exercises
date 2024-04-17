var longestPalindrome = function (s) {
  var word = '';

  const funcionExpansion = (izq, der) => {
      while (izq >= 0 && der < s.length && s[izq] === s[der]) {

          const palindrome = s.substring(izq, der + 1);

          if (palindrome.length > word.length) {
              word = palindrome;
          }

          izq--;
          der++;

      }
  };

  for (let i = 0; i < s.length; i++) {
      funcionExpansion(i, i); // Impares

      funcionExpansion(i, i + 1); // Pares
  }

  return word
};

module.exports = { longestPalindrome };
