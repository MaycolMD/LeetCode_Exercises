class Solution:
    def isValid(self, s: str) -> bool:
        pairs = {'(': ')', '[': ']', '{': '}'}
        
        for index in range(0, len(s), 2):
            if pairs[s[index]] != s[index + 1]:
                return False
                
        return True
