console.warn('Ejercicio C')

var cantidadDeGatos = 10
var cantidadDePasos = 4

for (var i = 1; i <= cantidadDeGatos; i++) {
    var emoji = ''

    switch (i % 2) {
        case 0:
            emoji = '🐈'
            break
        case 1:
            emoji = '🐈🐈‍⬛'
            break
    }
    for (var p = 1; p <= cantidadDePasos; p++) {
        emoji += "🐾"
    }

    console.log('Gato #' + i + ': ' + emoji)
}