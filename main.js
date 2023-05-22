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
