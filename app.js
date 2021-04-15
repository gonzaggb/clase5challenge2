const yargs = require('yargs')
const fs = require('fs')
const tareas = require('./tareas/tareas.js')
let titulo = yargs.argv.titulo
let estado = yargs.argv.estado
let comando = yargs.argv.comando

switch(comando){
    case 'listar':
//llamo a la funcion listar que recibe como parametro un array, este es llamado por la funcion leerJson que tiene el array del archivo notas.json
        tareas.listar(tareas.leerJson().notas)
        break;
    case 'crear':
//define una nuva tarea, el estado siempre es pendiente
        let nuevaTarea = {
            titulo: titulo,
            estado: 'pendiente',
        }
//guarda la tarea en el archivo original
        tareas.guardarTarea(nuevaTarea)
        break;
    case 'filtrar':
//lista las tareas resultantes de filtrar en base a un estado
        tareas.listar(tareas.filtrar(estado))  //para utilizar esta funcion se debe ejecutar como  node app --comando 'filtrar' --estado 'pendiente'     
        break;
    default:
        'La opcion elegida es invalida'        

}