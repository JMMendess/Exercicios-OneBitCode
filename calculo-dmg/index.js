let namePerson1 = prompt ('Qual o nome do seu personagem?')
let powerPerson1 = prompt ('Qual o poder de atack do personagem?')

let namePerson2 = prompt ('Qual o nome do seu personagem?')
let lifePerson2 = prompt ('Quanto de HP tem seu personagem?')
let defensePerson2 = prompt ('Qual o poder de defesa do personagem?')
let shieldPerson2 = prompt ('Seu personagem possui escudo? (sim/não)')

let dmgPersons = 0

if (powerPerson1 > defensePerson2 && shieldPerson2 === 'não') {
    dmgPersons = powerPerson1 - defensePerson2
} else if (powerPerson1 > defensePerson2 && shieldPerson2 === 'sim'){
    dmgPersons = (powerPerson1 - defensePerson2) /2
}

lifePerson2 -= dmgPersons

alert (namePerson1 + ' causou ' + dmgPersons + ' pontos de dano em ' + namePerson2)

alert (namePerson1 + '\nPoder de ataque: ' + powerPerson1 + '\n\n' + namePerson2 + '\nPontos de vida: ' + lifePerson2 + '\nPoder defesa: ' + defensePerson2 + '\nPossui escudo: ' + shieldPerson2)