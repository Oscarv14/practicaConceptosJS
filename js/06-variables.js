const numero1 = parseInt(prompt("Escriba un número"))
const numero2 = parseInt(prompt("Escriba otro número"))
if(numero1>numero2) {
document.write(`El ${numero1} es el número más grande`);
} else if (numero2>numero1){
    document.write(`El ${numero2} es el número más grande`);
}else{
    document.write(`Los núneros son iguales`);
}
