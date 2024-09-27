class Alumno{
    constructor(nombre, calificaciones) {
        this.nombre = nombre;
        this.calificaciones = calificaciones;
    }
    obtenerPromedio(){
        let suma = 0;
        for (let i  = 0; i   < this.calificaciones.length; i++) {
             suma += this.calificaciones[i];
            
        }
        return suma / this.calificaciones.length;
    }
}

class Salon{
    constructor(alumnos) {
        this.alumnos = alumnos;
    }
    ordenarPorPromedio(){
        this.alumnos.sort((a,b) => b.obtenerPromedio() - a.obtenerPromedio());
    }
}

const alumno1 = new Alumno('Sergio', [90, 85, 87, 95, 92]);
const alumno2 = new Alumno('Ana', [78, 82, 80, 79, 81]);
const alumno3 = new Alumno('Luis', [95, 94, 96, 93, 92]);

const salon = new Salon([alumno1, alumno2, alumno3]);
salon.ordenarPorPromedio();
salon.alumnos.forEach((alumno) => {
    if (alumno.obtenerPromedio() >= 90) {
        console.log(`El alumno ${alumno.nombre} le corresponde el salon A`);
    } else {
        console.log(`El alumno ${alumno.nombre} le corresponde el salon B`);
    }
  
  
});


