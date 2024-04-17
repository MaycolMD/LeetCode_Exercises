class Solution:
    def longestPalindrome(self, s: str) -> str:
        def funcionExpansion(izq, der, word):
            while (izq >= 0 and der < len(s) and s[izq] == s[der]):
                
                palindrome = s[izq:der+1]

                if (len(palindrome) > len(word)):
                    word = palindrome
                izq-=1
                der+=1

            return word

        word = ''
        for i in range (len(s)):
            word = funcionExpansion(i, i, word)

            word = funcionExpansion(i, i + 1, word)

        return word
    