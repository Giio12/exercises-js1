function resta(año,edad){
    return año - edad ;
} 
function calculo(año, edad,nombre){
    return "Mi nombre es"+nombre +" mi edad es " + edad + " y el año que nací es "+ resta(año,edad);
    
}
console.log(calculo(2021,29,"Giomar"));

