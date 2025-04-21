/*Voy al supermercado GreenCenter para hacer mis compras habituales y planeo comprar manzanas y naranjas.
Cuando estoy alli, veo que no hay platanos ni uvas, asi que cambio un poco mi lista.
Veo que 3 cajeros estan trabajando, asi que me preparo para pagar.
Mis cosas cuestan $100 en total.
Entrego $150 en efectivo y recibo $50 de cambio*/

const supermarketName = 'GreenCenter'
const product1 = 'Apples'
const product2 = 'Oranges'
const workingCashiers = 3 
const totalCost = 100
const currency = '$'
const exchange = 50 

console.log (`
  Supermarket name: ${supermarketName}
  Fruit1: ${product1}
  Fruit2: ${product2}
  Cashiers Opened: ${workingCashiers}
  Total spent: ${totalCost}${currency}
  Exchange:  ${exchange}${currency}
    `)