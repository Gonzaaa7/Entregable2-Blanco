// arrays y variables Globales
let num = 1
const inventario = ["Palo de madera","lanza"]
let arma = ""

// Funciones del menu
function imprimirInventario(){
    inventario.forEach(function(arma,i){
        console.log(`Slot ${i}: ${arma}`)
    })
    alert("Se informo en la consola")
    console.log(" ");console.log(" ----------------------------------------------------- ")
}
function tirarArma(){
        console.log(" ")
    if (inventario.length > 0) {
        let armaTirada = inventario.pop()
        console.log("Se tiro el arma : "+armaTirada)
        alert("Arma tirada.")
    } else alert("Inventario vacio")
}
function cantInvenario(){
    console.log(" ")
    console.log("Canidad de armas en el inventario: "+inventario.length)
    alert("Se informo en la consola.")
}

function agregarArma(){
    arma = prompt("Nombre de Arma a utilizar")
    inventario.push(arma)
    alert("Arma Agregada")
    console.log("---------------------------------------")
    console.log(inventario)
}

// menu con loop
while (num !== "0"){
    num = prompt("                         Selecionar Opcion del Menu \n 0(Salir);1(Ver Inventario);2(Tirar ultima Arma);3(Ver Cant de armas); 4(Agregar Arma)")
    switch (num){
        case "0" : 
            let ok = confirm("Seguro quiere cerrar el menu?")
            if (ok) {alert("Saliendo del Menu")} else num = 99
            break
        case "1" : 
            imprimirInventario()
            break
        case "2" :
            tirarArma()
            break
        case "3" :
            cantInvenario()
            break
        case "4" :
            agregarArma()
            break
        default : alert("Selecion erronea")
    }
}
