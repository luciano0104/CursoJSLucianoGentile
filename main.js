Swal.fire({
    title: "¿Eres mayor de edad?",
    showConfirmButton: true,
    confirmButtonText: 'Soy Mayor',
    showCancelButton: true,
    cancelButtonText: 'No soy mayor',
    footer: '<span>Información Importante</span>',
})
let miFormulario = document.getElementById("formulario");
miFormulario.addEventListener("submit", validarFormulario);
function validarFormulario(e) {
    e.preventDefault ()
    let formulario = e.target
    console.log(formulario.nombre.value);
    let nombre = (formulario.nombre.value);
    let pais = (formulario.pais.value);
        if (pais == ""){
         console.log("No ingresaste dato")
    } else{ console.log ("Bienvenido " + nombre)};
    let edad = (formulario.edad.value);
    const EDAD_MINIMA = 18;
    while(edad < EDAD_MINIMA){
    alert("Es menor de" + " " + EDAD_MINIMA);
    edad = Number (prompt("Ingrese su edad"));
}
    let monto = (formulario.monto.value);
    let cuotas = (formulario.cuotas.value);
    function interes (primerNumero, segundoNumero, tercerNumero ){
    return (primerNumero * segundoNumero * tercerNumero)
} 
    let interesAcumulado = interes(cuotas, 0.06, 100)
    console.log (interesAcumulado)

    const persona = {nombre,pais,edad}
    console.log (persona)
    const consulta = [nombre, pais, edad, monto]
    localStorage.setItem("consulta1", consulta);
    localStorage.setItem("consulta1", JSON.stringify(consulta));
    let personaGuardada = JSON.stringify(localStorage.getItem(consulta))
    consulta.push (cuotas, interesAcumulado)
    consulta.splice(1, 1)
    console.log(consulta)

    const valorCuota = (precio) => ((monto * precio / 100) + monto) / cuotas

    console.log ("El valor de su cuota es: " + (valorCuota(interesAcumulado)))
}
const urlUsuarios = "https://jsonplaceholder.typicode.com/users";
const listaUsuarios = document.querySelector('#lista-usuarios')
fetch(urlUsuarios)
    .then((response) => response.json())
    .then((data) => {
        data.forEach((usuario) => {
            const li = document.createElement('li');
            li.textContent = usuario.name + " Web: " + usuario.website;
            listaUsuarios.appendChild(li);
        })      
        });
const nombre = ['Roman', 'Jose', 'Pedro', 'Nacho', 'Luana', 'Silvia', 'Paula']
const cuotas = ['6 cuotas', '9 cuotas', '12 cuotas', '18 cuotas', '24 cuotas']

setInterval(() => {
    Toastify({
        text: `${nombre[Math.floor((Math.random()*7))]} consulto en ${cuotas[Math.floor((Math.random()*5))]}`,
        gravity: 'bottom',
        duration: 2000
    }).showToast();
}, 2000)
    
