console.error('Ejercicio B')

var cantidadDeGatos = 5
var cantidadDePasos = 3

for (var i=1; i<=cantidadDeGatos; i++) {
    var emoji = '🐈'

    for (var n = 1; n<=cantidadDePasos; n++) {
        emoji += '🐾'
        
    }

    console.log('Gato #' + i + ': ' + emoji)
    
}


