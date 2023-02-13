let spaceship = prompt ('Qual o nome da sua espaçonave?')

let swap = prompt ('Qual caractere deseja subistituir?')

let latter = prompt ('Por qual caracter você deseja realizar a substituição?')

let newSpaceship = ''


for (let i = 0; i< spaceship.length; i++) {
    if (spaceship[i] == swap) {
        newSpaceship += latter
    } else {newSpaceship += spaceship[i]}
}

alert ('O novo nome da nave é: '+ newSpaceship);

/* 
nome da nave = Elemental
trocar 'e' por 'h'

i=0  E e nome da nave = E
i=1  L e nome da nave = El
i=2  e e nome da nave = Elh
...

i=8 L  e  nome da nave = Elhmhntal*/