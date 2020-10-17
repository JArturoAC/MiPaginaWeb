//alert('hola mundo');

var nombre = "Arturo";
var altura = 181;
/*
var concatenacion = nombre + " " + altura;

//document.write(concatenacion);

var datos = document.getElementById("datos");
datos.innerHTML = `

    <br>Soy la caja de datos
    <br>Mi nombre es: ${nombre}
    <br>Mido: ${altura}cm
`;

if(altura >= 181){
    datos.innerHTML +=   '<h1>Eres una persona alta</h1>';
}else{
    datos.innerHTML +=   '<h1>Eres una persona baja</h1>';
}

for (var i = 2000; i<=2020; i++){
    //bloque de instrucciones
    datos.innerHTML += "<br>Estamos en el año: "+i;

}
*/
function MuestraMiNombre(nombre, altura){
    var datos = document.getElementById("datos");
    var misDatos = `

    <br>Soy la caja de datos
    <br>Mi nombre es: ${nombre}
    <br>Mido: ${altura}cm 
`;

return misDatos;

}

function imprimir(){
    var datos = document.getElementById("datos");
    datos.innerHTML = MuestraMiNombre("Arturo", 181);
}

imprimir();

var nombres = ['Arturo', 'Manolito', 'José Luis']
/*
document.write('<h1>Listado de nombres<h1/>');
for(i = 0; i < nombres.length; i++ ){
    document.write(nombres[i] + '<br/>');
}
*/
nombres.forEach((nombre)=>{
    document.write(nombre  + '<br/>');
})