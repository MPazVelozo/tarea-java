let num1 = parseFloat(prompt("Introduce el primer número:"));
let num2 = parseFloat(prompt("Introduce el segundo número:"));
let num3 = parseFloat(prompt("Introduce el tercer número:"));


if (isNaN(num1) || isNaN(num2) || isNaN(num3)) {
    document.getElementById("resultadoMayorMenor").textContent = "Por favor, introduce solo números válidos.";
    document.getElementById("resultadoMenorMayor").textContent = "";
} else {
    
    let max = Math.max(num1, num2, num3);
    let min = Math.min(num1, num2, num3);
    let mid = (num1 + num2 + num3) - max - min;

    
    if (num1 === num2 && num2 === num3) {
        document.getElementById("resultadoMayorMenor").textContent = "Los números son iguales: " + num1 + ", " + num2 + ", " + num3;
        document.getElementById("resultadoMenorMayor").textContent = "";
    } else {
        
        document.getElementById("resultadoMayorMenor").textContent = "Orden de mayor a menor: " + max + ", " + mid + ", " + min;
        
        document.getElementById("resultadoMenorMayor").textContent = "Orden de menor a mayor: " + min + ", " + mid + ", " + max;
    }
}