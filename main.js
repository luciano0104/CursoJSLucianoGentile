let nombre = prompt("Ingrese su nombre");
let pais = prompt("Ingrese su pais de residencia");
if (pais == ""){
    alert("No ingresaste dato")
} else{ alert ("Bienvenido " + nombre)};
let edad = Number (prompt("Ingrese su edad"));
const EDAD_MINIMA = 18;
while(edad < EDAD_MINIMA){
    alert("Es menor de" + " " + EDAD_MINIMA);
    edad = Number (prompt("Ingrese su edad"));
}

let monto = Number (prompt("Ingrese el monto que desea"));
let cuotas = Number (prompt("Ingrese la cantidad de meses"));

function interes (primerNumero, segundoNumero, tercerNumero ){
    return (primerNumero * segundoNumero * tercerNumero)
} 
let interesAcumulado = interes(cuotas, 0.06, 100)
console.log (interesAcumulado)

const persona = {
    nombre: (nombre),
    pais: (pais),
    edad: (edad),
}
console.log (persona)
const consulta = [nombre, pais, edad, monto]
consulta.push (cuotas, interesAcumulado)
consulta.splice(1, 1)
console.log(consulta)

const valorCuota = (precio) => ((monto * precio / 100) + monto) / cuotas

alert("El valor de su cuota es: " + (valorCuota(interesAcumulado)))