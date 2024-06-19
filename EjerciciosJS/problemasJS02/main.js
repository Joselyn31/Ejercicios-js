//ejercicio 1

var personArr=[{
    'personaId':123,
    'name':'john',
    'city':' Melbourne',
    'phoneNo': '1234567890'
},
{
    'personaId':124,
    'name':'Amelia',
    'city':'Sydney',
    'phoneNo': '1234567890'

},
{
    'personaId':125,
    'name':'Emily',
    'city':' Perth',
    'phoneNo': '1234567890'
},{
    'personaId':126,
    'name':'Abraham',
    'city':' Perth',
    'phoneNo': '1234567890'
}

];

function generatabla(personas){
    let tabla= document.getElementById('tablaBody');
    personas.forEach(persona =>{
        let fila =`<tr>
            <td>${persona.personaId}</td>
            <td>${persona.name}</td>
            <td>${persona.city}</td>
            <td>${persona.phoneNo}</td>
        </tr>`;
        tabla.innerHTML += fila;
    });
}
generatabla(personArr);