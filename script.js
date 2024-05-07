let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let num3 = parseFloat(prompt("Introduce el tercer número:"));

if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.getElementById("resultadoMayorMenor").textContent = "Por favor, introduce solo números válidos.";
    document.getElementById("resultadoMenorMayor").textContent = "";
    console.log("Por favor, introduce solo números válidos.");
} else {
    
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    let mid = (num1 + num2 + num3) - max - min;

   
    if (num1 === num2 && num2 === num3) {
        let igualMensaje = "Los números son iguales: " + num1 + ", " + num2 + ", " + num3;
        document.getElementById("resultadoMayorMenor").textContent = igualMensaje;
        document.getElementById("resultadoMenorMayor").textContent = igualMensaje;
        console.log(igualMensaje);
    } else {
        
        let mayorMenorMensaje = "Orden de mayor a menor: " + max + ", " + mid + ", " + min;
        document.getElementById("resultadoMayorMenor").textContent = mayorMenorMensaje;
        console.log(mayorMenorMensaje);

        
        let menorMayorMensaje = "Orden de menor a mayor: " + min + ", " + mid + ", " + max;
        document.getElementById("resultadoMenorMayor").textContent = menorMayorMensaje;
        console.log(menorMayorMensaje);
    }
}