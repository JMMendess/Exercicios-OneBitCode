let nameSpaceship = prompt ('Qual o nome da espaçonave?')

let reverseSpaceship = ''

let newNameSpaceship = ''

for (let i = nameSpaceship.length -1; i>=0; i--) {
   if (nameSpaceship[i] == 'e') {
       break
   }
   reverseSpaceship += nameSpaceship[i]
}

alert ('nome original da nave: ' + nameSpaceship + '\nNome após ocultação: ' + reverseSpaceship)
