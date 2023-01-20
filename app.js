

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

            const opcion1 ={nombre: "Mortal Kombat", precio: 100, tipo: "lucha", plataforma: "ps4"};
            const opcion2 ={nombre: "Mario kart", precio: 80, tipo: "aventura", plataforma: "nintendo"};
            const opcion3 ={nombre: "Call of duty", precio: 120, tipo: "disparos", plataforma: "pc"}
            const juegos = [ opcion1, opcion2, opcion3 ]
            

while (nroEntrada <= 15) {
    
    let edad = prompt ("Debe ser mayor de 18 años para ver el menu \n Ingrese su edad :")
    edad = parseInt(edad)
    
    if (edad >= 18){
        let opcion = prompt("Ingrese una opción \n 1 - Mortal Kombat \n 2 - Mario Kart \n 3 - Call of Duty \n 4 - Volver")
        
        opcion = parseInt(opcion);
        console.log(opcion)

        switch (opcion) {
            case 1:
                alert("Usted ha ingresado opcion " + juegos[0].nombre )                
                break;
            
            case 2:
                alert("Usted ha ingresado opcion " + juegos[1].nombre)
                break;

            case 3:
                alert("Usted ha ingresado opcion " + juegos[2].nombre)
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
    
    let buscar = prompt("Quieres buscar algun otro juego? \n  SI: INGRESA ALGUNO DE LOS PARAMETROS DE BUSQUEDA  \n - nombre: - Mortal Kombat - Mario kart - Call of duty \n - precio: - 100 - 80 - 120 \n - tipo: - lucha - aventura - disparos\n - plataforma: - ps4 - nintendo - pc\n NO: INGRESA \n - salir")
    alert(buscar)
    const busqueda = juegos.find((juego) => juegos[0].nombre === buscar);
    console.log(busqueda);

}



