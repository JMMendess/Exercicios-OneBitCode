const number = prompt ('Qual o numero de 1-20 você deseja multiplicar?')
let result = ''

for (let fator = 1; fator <=20; fator++){
    result+= '->' + number + ' * ' + fator + ' = ' + (number*fator) + '\n'
}
alert ('Resultado da tabuada de '+ number + ':\n\n' + result)