// Percorre os atributos de determinada estrutura (objetos e array)
// Essa estrutura fornece e percorre os índices do array e não pelo conteúdo dele

const notas = [6.7, 7.4, 9.8, 8.1, 7.7]
for(let i in notas){
    console.log(i, notas[i]);
}

const pessoa = {
    nome: 'Jonas',
    sobrenome: 'Cesconetto',
    idade: 26,
    peso: 80
}
for(let atributo in pessoa){
    console.log(atributo, pessoa[atributo]);
}