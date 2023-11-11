//Dealing with loops in JS 

let cores = ['preto', 'branco', 'verde', 'roxo'];

cores.sort(); //ordena - ordem alfabetica 
cores.reverse(); //reverte - ordem decrescente

for (let i = 0; i < cores.length; i++) { 
    console.log(cores[i]);
}
//simplifed for 
for (let i in cores) { 
    console.log(cores[i]);
    //if it was an object, we could access it with 
    //cores[i].nome, for example 
}
//or this way, which return the value itself, not the index
for (let cor of cores) {
    console.log(cor);
}

//another list functions 

let cars = [
    {brande: 'Fiat', year: 2003}, 
    {brand: 'Ferrari', yea: 2000}, 
]
cars.sort((a, b) => {
    if (a.year > b.year) { 
        return 1; 
    } else if (a.year < b.year) {
        return -1; 
    } else {
        return 0;
    }
});
console.log(cars);

let fruits = ['banana', 'apple', 'pear', 'watermelon'];

let bigFruits = fruits.filter((value) => {
    return value.length >= 4; //filter receives a function 
})
