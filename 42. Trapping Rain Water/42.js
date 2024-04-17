function waterTrap(height) {
  agua = 0

  for (let index = 0; index < height.length; index++) {

      let mayorIzq = Math.max(...height.slice(0, index));
      let mayorDer = Math.max(...height.slice(index + 1));

      if (mayorIzq > height[index] && mayorDer > height[index]) {

          menor = Math.min(mayorIzq, mayorDer)

          agua += menor - height[index]
      }
  }

  return agua;
};


module.exports = { waterTrap };
