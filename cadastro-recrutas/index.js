let name = prompt ('Qual o seu primeiro nome?')

let sobrenome = prompt ('Qual o seu sobrenome?')

let campoEstudo= prompt ('Qual o campo de estudo?')

let anoNascimento= prompt ('Qual o ano em que você nasceu?')

alert(
    "Recruta cadastrado com sucesso!\n" +
    "\nNome completo: " + name + " " + sobrenome +
    "\nCampo de estudo: " + campoEstudo +
    "\nIdade: " + (2022 - anoNascimento)
  )