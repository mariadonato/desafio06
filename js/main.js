console.warn('Ejercicio A')

var cantidadDeGatos = 10

for (var i = 1; i<=cantidadDeGatos; i++) {
  var emoji = ''
  
  switch (i%3) {
    case 0:
      emoji = '😺'
      break
    case 1:
      emoji = '😸'
      break
    case 2:
      emoji = '😹'
      break
  }
  
  console.log('Gato #' + i + ': ' + emoji)
}
