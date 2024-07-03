const numero1 = parseInt(prompt("Escriba un número"))
if(numero1%2==0 || numero1%3 == 0 || numero1%5==0 || numero1%7==0) {
    if (numero1 % 2 == 0){
    document.write(`El ${numero1} es divisible por 2`);
}else if(numero1 % 3 == 0) {
    document.write(`El ${numero1} es divisible por 3`);
}else if(numero1 % 5 == 0) {
    document.write(`El ${numero1} es divisible por 5`);
}else{  
    document.write(`El ${numero1} es divisible por 7`);
}
}else{
    document.write(`El ${numero1} no es divisible por 2, ni por 3, ni por 5, ni por 7`);
}