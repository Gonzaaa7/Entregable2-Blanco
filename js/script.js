// arrays y variables Globales
let num = 1
const armas = {
    paloDeMadera : { nombre :"Palo de Madera", daño : 15, alcance : 30,velocidad: 80, defensivo: false},
    escudoDeMadera : { nombre :"Escudo de Madera", defensa : 40, duracion : 30, defensivo: true},
    lanza : {nombre :"Lanza Comun", daño : 40, alcance : 100,velocidad: 55, defensivo: false},
    lanzadeGuerra : {nombre :"Lanza De Guerra", daño : 60, alcance : 90,velocidad: 50, defensivo: false},
    mazo : {nombre :"Mazo", daño : 100, alcance : 30, velocidad: 20, defensivo: false},
    scimitarra : {nombre :"Scimitarra", daño : 80, alcance : 70, velocidad: 90, defensivo: false},
    escudoNordico : { nombre :"Escudo Nordico", defensa : 80, duracion : 90, defensivo: true},
}
const selec = document.querySelector('#boton1')
const tirar = document.querySelector('#boton2')
const cambiar = document.querySelector('#boton3')
const crear = document.querySelector('#boton4')

 const slots = document.querySelectorAll('.cajita');
 let i = 0;
 let actualCajita= slots[i];
 actualCajita.style.backgroundColor = 'grey';
//iniciar Inventario
const slot1 = document.querySelector('#Espacio1')
const slot2 = document.querySelector('#Espacio2')
const slot3 = document.querySelector('#Espacio3')
const slot4 = document.querySelector('#Espacio4')
slot1.innerText = armas.paloDeMadera.nombre;
slot2.innerText= armas.escudoDeMadera.nombre;
// Funciones de botonera

selec.addEventListener('click', function() {
    actualCajita.style.backgroundColor = 'white';
    if (i == 3){
        i=0;
    } else i++;
    actualCajita = slots[i];
    actualCajita.style.backgroundColor = 'grey';
  });

  tirar.addEventListener('click', function(){
    if (actualCajita.textContent == 'Slot vacio') {
        alert("")
    }
    actualCajita.innerText = 'Slot vacio';
  });

/*function imprimirInventario(){
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
*/