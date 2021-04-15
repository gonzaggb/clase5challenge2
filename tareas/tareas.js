const fs = require('fs')
//guardo la ruta del archivo a leer
const ruta = "d:/Programacion full stack/node/ejercitacionClase5bis/notas.json"
//leo el arachivo desde la ruta indicada


function leerJson(){
    return JSON.parse(fs.readFileSync(ruta, 'utf-8'))
}
//recibe un objeto con notas y lo recorre imprimiento su titulo y estado
function listar(objetoJson){
        objetoJson.forEach(function(elemento, index){
        console.log(`---Nota ${index+1}---
        Titulo: ${elemento.titulo} Estado: ${elemento.estado}`)

    })
}
//guarda en el archivo de la ruta indicada un listado de tareas
function escribirJson(listaTareas){
    fs.writeFileSync(ruta, JSON.stringify(listaTareas))
}
//recibe por parametro una nueva tarea, la suma a la lista original y posteriormente lo guarda en el archivo de tareas con la funcion escribirJson.
function guardarTarea (nuevaTarea){
    let aux = leerJson(ruta)
    aux.notas.push(nuevaTarea)
    console.log(aux)
    escribirJson(aux)   
}
//recibe por parametro un estado, recorre el objeto obtenido del archivo tareas.json y filtra el resultado en base al estado recibido
function filtrar(estado){
    let aux = leerJson(ruta)
    return leerJson(ruta).notas.filter(function(elementos){
        return elementos.estado === estado

    })
 
}
module.exports = {
    listar,
    leerJson,
    guardarTarea,
    filtrar,
}