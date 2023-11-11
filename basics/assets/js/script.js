//Functions 

console.log("Hello world!");


function gravity() { 
    console.log("A gravidade do planeta e:  ")
    console.log(9.8);
}
gravity();


function nomeCompleto(nome, sobrebone) {
    return `${nome} ${sobrebone}`;
}

function somar(x, y) {
    return x + y; 

}
//using arrow functions. Important to notice that it looks like a variable  
const somar2 = (x, y) => {
    return x + y; 
}
//you can also use arrow functions this way
const multiplicar = (x, y) => x*y;

//or in this way 
const nomeSobrenome = sob => "Gabriel"

//nested functions 

function someSquares(x ,y) { 
    const squares = (x) => x*x;

    return squares(x) + squares(y);
}

console.log(somar(5,4));

