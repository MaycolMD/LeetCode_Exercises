from typing import List

class Solution:
    def trap(self, height: List[int]) -> int:
        agua = 0
        mayorIzq = 0
        
        for index in range(len(height) - 1):

            if height[index] > mayorIzq:
                mayorIzq = height[index]

            mayorDer = max(height[index+1:]) 

            if (mayorIzq > height[index] and mayorDer > height[index]):

                menor = min(mayorIzq, mayorDer)

                agua += menor - height[index]
      
        return agua
