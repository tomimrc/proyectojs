

// let ingresado = prompt("1- Calculadora \n 2- Salir")




// while (precio > 0 || cambio > 0) {

//     let resultado = (precio * cambio)
   

//     alert ("el precio final del " + juego +" es " + resultado)
     

    
// }

// if (precio > 0 & cambio > 0) {
//     let resultado = (precio * cambio)
//     alert ("el precio final del " + juego + " es " + resultado)
    
// }
// else{
//     alert("los datos ingresados no son validos")}


let nroEntrada = prompt("1- Ingresar su numero de entrada \n Máxima capacidad 15 personas:")

    if (nroEntrada <= 15) {
        alert("ingresando al menu")
        
    }
    else{
        alert("Capacidad máxima superada")
    }

while (nroEntrada <= 15) {
    
    let edad = prompt ("Debe ser mayor de 18 años para ver el menu\n Ingrese su edad :")
    edad = parseInt(edad)
    
    if (edad >= 18){

        let juego = prompt ("Ingrese el juego que desea \n 1 - Mortal Kombat \n 2 - Mario Kart \n 3 - God Of War \n 4 - Volver ")
        juego = parseInt(juego)

        switch (juego) {
            case 1:
                alert("Usted ha ingresado opcion " + juego + (" Mortal Kombat") )                
                break;
            
            case 2:
                alert("Usted ha ingresado opcion " + juego + (" Mortal Kombat"))
                break;

            case 3:
                alert("Usted ha ingresado opcion " + juego + (" Mortal Kombat"))
                break;
            
            case 4:
                alert("Volviendo")
                break;
        
            default:
                alert("Opcion invalida")
                break;
        }

        
        
    } else {
        alert("No tienes edad suficiente para jugar")
        break
        
    }
    
}

