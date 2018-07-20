const colors = require('colors')
const read = require('readline-sync')
const moment = require('moment')

let listaAlumnos = []

class alumno {
  constructor () {
    this.matricula = 0
    this.curp = ''
    this.nombre = ''
    this.apellidoPaterno = ''
    this.apellidoMaterno = ''
    this.genero = ''
    this.fechaNacimiento = ''
  }
  getNombreCompleto () {
    console.log('Matricula:' + alumno.matricula)

    console.log('Curp:' + alumno.curp)

    console.log('Nombre(s):' + alumno.nombre)

    console.log('Apellido Paterno:' + alumno.apellidoPaterno)

    console.log('Apellido Materno:' + alumno.apellidoMaterno)
  }
  getEdad () {
    let nacimiento = moment(alumno.fechaNacimiento, 'DD MM YYYY').format('YYYY-MM-DD')
    let hoy = moment('today')
    let anios = hoy.diff(nacimiento, 'years')
    return (anios)
  }
  getDatos () {
    alumno.matricula = read.question('Matricula: ')
    alumno.curp = read.question('CURP: ')
    alumno.nombre = read.question('Nombre: ')
    alumno.apellidoPaterno = read.question('Apellido Paterno: ')
    alumno.apellidoMaterno = read.question('Apellido Materno: ')
    alumno.genero = read.question('Genero: ')
    alumno.fechaNacimiento = read.question('Fecha de Nacimiento: ')
  }

  consultar () {
    console.log(`Accediste al Metodo ${colors.yellow.bold('Consultar')}`)
    this.getEdad()
    console.log(` ${colors.yellow.bold('Consulta de la Matrícula')}  ${alumno.matricula}\n ${colors.yellow.bold('Curp: ')}  ${alumno.curp}\n ${colors.yellow.bold('Nombre completo: ')}  ${alumno.nombre} ${alumno.apellidoPaterno} ${alumno.apellidoMaterno}\n ${colors.yellow.bold('Edad: ')} ${this.anios}`)
  }

  modificar () {
    console.log(`${colors.yellow.bold('Matricula:')} ${colors.white(alumno.matricula)}`)
    console.log(`${colors.yellow.bold('Curp:')} ${colors.white(alumno.curp)}`)
    console.log(`${colors.yellow.bold('Nombre Completo:')} ${colors.white(alumno.nombre)} ${colors.white(alumno.apellidoPaterno)}\n ${colors.white(alumno.apellidoMaterno)}\n`)


    console.log('Ingrese los nuevos datos:\n')
    alumno.matricula = read.question(`${colors.blue('Matricula:')}`)
    alumno.curp = read.question(`${colors.blue('Curp:')}`)
    alumno.nombre = read.question(`${colors.blue('Nombre:')}`)
    alumno.apellidoPaterno = read.question(`${colors.blue('Apellido Paterno:')}`)
    alumno.apellidoMaterno = read.question(`${colors.blue('Apellido Materno:')}`)

    let SiNo
    console.log(`${colors.yellow.bold('¿Guardas los cambios?')}`)
    SiNo = read.question(`[${colors.green('S')} / ${colors.red('N')}]`)
    if (SiNo.toUpperCase(alumno) == 'S') {
      listaAlumnos.push(alumno)
      console.log(`${colors.green('Cambios guardados exitosamente')}`)
    } else { console.log(`${colors.red('No se guardaron los cambios')}`) }
  }
  agregar () {
    console.log(`Accediste al Metodo ${colors.yellow.bold('Agregar')}`)
    let yesNot = read.question(`¿ Esta seguro de ${colors.green.bold('Guardar los datos')} capturados [${colors.green.bold('Y')}/${colors.red.bold('N')}]?`)
    if (yesNot.toUpperCase(alumno) === 'Y') {
      // alumno.getDatos()
      listaAlumnos.push(alumno)
      console.log(`Los datos se han ${colors.green.bold('Guardado Correctamente !!!')}`)
    } else {
      console.log(`Se ha ${colors.red.bold('Cancelado')} la captura del ${colors.yellow.bold('Alumno')}`)
    }
    read.question(`${colors.yellow.bold('Presiona cualquier tecla para regresar al Menu Principal !!!')}`)
  }
}

module.exports = alumno
