/*Crea un programa en javascript que calcule la factura total de una persona en un hotel, 
donde cada habitacion tiene un precio de $100 por noche, 
aprovechando una oferta promocional que incluye un descuento del 5%.
El programa debe solicitar al husped el numero de noches que paso en el hotel para calcular la factura final.
Si el usuario ingresa que se quedo 5 noches, la salida sera: $475*/


const prompt = require('prompt-sync')()


const Price_Per_Day = 100 

const promoDiscount = 0.05

const days = parseInt(prompt('how many nights will you stay? --> '))

const subtotal = Price_Per_Day * days
const discount = subtotal * promoDiscount
const total = subtotal - discount


console.log (`
    ----------------
    Hotel receipt
    ----------------
   |Number of nights ${days} 
   | Payment =>
   | Subtotal: $${subtotal}
   | Discount: $${discount}
   | Total:    $${total}
    `)
