// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];
let nombre = "";
let lista = [];
let amigoElegido = "";

//funcion para agregar texto 
function agregarAmigo() {
  //Llamo el nombre y agrego toLowerCase para que asi este en mayuscula o minuscula pueda verificar si es el mismo texto
  let nombre =  document.getElementById("amigo").value.toLowerCase(); 
    //Condiciono para que puedan colocar los nombres
    if (nombre === "")  {
    alert("Escriba un nombre por favor");
    //condicion para que no haya nombres duplicados. 
    }else if (amigos.includes(nombre)) {
      alert(`${nombre} ya esta incluido, por favor ingrese otro nombre`); 
      //si esta duplicado verifico que el cuadro de texto quede vacio nuevamente para intentarlo. 
      document.getElementById("amigo").value="";    
    }else{
        //Agrego el nombre en la lista
        amigos.push(nombre);
        //Agrego el nombre en la lista que se ve en la página web
        listaDeAmigos();
        //Limpio el cuadro de texto
        document.getElementById("amigo").value="";
        
}
//Funcion para crear la lista en la página web
function listaDeAmigos() {
  //Declaro la lista que será visible, indicó que usaré el ID del <li>
  let lista = document.getElementById("listaAmigos");
    //Para evitar que haya duplicados, limpio la lista
      lista.innerHTML="";
      //Recorre la lista 
      amigos.forEach(nombre => {  
        //Agrega el nombre en la lista visible    
      lista.innerHTML += `<li>${nombre}</li>`;
          
        });
  
}


}
//Funcion de Sorteo de Amigo
function sortearAmigo() {
  //declaro nuevamente la lista para evitar confusiones
  let lista = document.getElementById("listaAmigos");
  //Coloco un alerta para evitar que no haya un sorteo sin nombres
  if (amigos.length == 0){
  alert("Debes colocar al menos un nombre por favor");
     }else{
      //Si ya estan lo nombres saco el indice con floor y random y lo multiplico por el tamaño de la lista 
      lista.innerHTML="";
      let numeroDeAmigo = Math.floor(Math.random()*amigos.length);
      //llamo el indice para poder mostrarlo. 
      let amigoElegido= amigos[numeroDeAmigo];
      lista.innerHTML += `<li>El amigo elegido es ${amigoElegido}</li>`;
    
    


     }
  
}

