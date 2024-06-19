const clientes =[
    'Juan', 'Maria','Pedro'
]
const empleados=[
    'Jose','Joselo','Juana'
]
let nuevocliente = 'adrian';
clientes.push(nuevocliente);//push de un nuevo cliente
console.log(clientes);
const contactoConcat=clientes.concat(empleados);
console.log(contactoConcat); //concat

const nuevoJoin=clientes.join(empleados);//join
console.log(nuevoJoin);

clientes.splice(1,1,'josefo');
console.log(empleados)//splice



//ejercicio 2
var numbers=[5,32,43,4];
let resul = numbers.filter(function(n){return n % 2 !== 0;});

console.log(resul);

//EJERCICIO 3

var people=[{
    id:1,
    name:'john',
    age:28
},{
    id: 3,
    name:'Peter',
    age: 55
}];

let menor= people.filter(function(people){return people.age < 35;});
console.log(menor);

//ejercicio 4

let personas=[
    {name:'bob',id:1},
    {name:'john',id:2},
    {name:'alex', id:3},
    {name:'john',id:4}
];
function vecesnombres (personas){
    return personas.reduce((contador,persona)=>{
        let nombre= persona.name;
        contador[nombre]=(contador[nombre]|| 0)+1;
        return contador;
    },{});
}
console.log(vecesnombres(personas));

//EJERCICIO 5

var myArray=[1,2,3,4];

function numMaxMin(arr){
    console.log('maximo', Math.max(...arr));
    console.log('minimo', Math.min(...arr));

}
numMaxMin(myArray);

//EJERCICIO 6
var object = {
    key1:10,
    key2:3,
    key3:40,
    key4:20
};
function ordenarValor(obj){
    return Object.keys(obj).sort((a,b)=>obj[a] - obj[b]);
}
console.log(ordenarValor(object));


