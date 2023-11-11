//Understanding arrays (and objects :))
let colors = ['red', 'blue', 'green'];

console.log(colors[0]);

//Basic array operations

let ingredientes = ['agua', 'ovo', 'farinha', 'sal', 'acucar'];

ingredientes.push('cebola');
ingredientes.shift(); //remove first 
ingredientes.pop(); //remove last
//or 
ingredientes[5] = 'azeite'; 

console.log(`Total de ingredientes: ${ingredientes.length}`)

//Objects in JS 
let personagem = {
    nome: 'Gabriel',
    pais: 'Brasil',
    idade: 20, 
    corDosOlhos: ['preto', 'azul'],
    caracteristicas: {
        forca: 25, 
        stamina: 30, 
        velocidade: 27 
    },
    carros: [
        {modelo: 'Ferrari', cor: 'vermelho'},
        {modelo: 'Fiat', cor: 'preta'}
    ]
}

//acessing values
console.log(personagem.idade);
//acessing values in a list 
console.log(personagem.corDosOlhos[0]);
//acessing values of a list of objects 
console.log(personagem.carros[1].modelo);
//acessing values in a nested object
console.log(personagem.caracteristicas.forca);

//Functions and objects 
let pessoa = { 
    nome: 'Gabriel',
    sobrenome: 'Thiessen',
    idade: 20, 
    nomeCompleto: function() { //if we set the function as an arrow function, it is an anonymous function. So, it does not have access to this
        return this.nome + ' ' + this.sobrenome; 
    }
}

console.log(pessoa.nome + ' ' + pessoa.sobrenome);
//to call the function, we need to call it with the parenthesis
console.log(pessoa.nomeCompleto());