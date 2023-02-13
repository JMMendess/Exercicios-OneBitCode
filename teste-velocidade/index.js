let car1 = prompt ('Qual o nome do seu carro?')

let velocityCar1 = prompt ('Qual a velocidade de seu veiculo?')

let car2 = prompt ('Qual o nome do seu carro?')

let velocityCar2 = prompt ('Qual a velocidade de seu veiculo?')

if (velocityCar1 > velocityCar2) {
    alert ('O ' + car1 + ' é o mais veloz')
} else if (velocityCar1 < velocityCar2) {
    alert ('O ' + car2 + ' é o mais veloz')
}else if (velocityCar1 === velocityCar2) {
    alert ('O ' + car1 + ' e o ' + car2 +' estao na mesma velocidade')
}
