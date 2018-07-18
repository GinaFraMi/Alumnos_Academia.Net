
'use strict';
(() => { 

    const bAppend = appendLI('becados');
    const aAppend = appendLI('asesorias');
    const rAppend = appendLI('reprobados');


    const alumnosState = alumnosService({ alumnos: [] });

    /* fetch regresa una promesa */
    fetch('/alumnos').then((res) => {
        return res.json()
    }).then((alumnos) => {


        Imprimir(alumnos);
        // const nombre = alumnos.map((alumno)=>{
        //     return {name: alumno.nombre}
        // });
        // console.log(nombre);

        
    });
    function Imprimir(alumnos){

        // alumnos.forEach((alumno)=>{
        //     if(alumno.promedio < 60)
        //     {
        //         rAppend(alumno.nombre);
        //     }
        //     else{
        //         if(alumno.promedio < 80)
        //         {
        //             aAppend(alumno.nombre);
        //         }
        //         if(alumno.promedio >= 80 || (alumno.promedio > 60 && alumno.destacado))
        //         {
        //             bAppend(alumno.nombre);
        //         }
        //     }
        // });

        const Reprobados = alumnos.filter(alumno => alumno.promedio < 60);
        const Asesorias = alumnos.filter(alumno => alumno.promedio < 80 && alumno.promedio > 60);
        const Becados = alumnos.filter(alumno => alumno.promedio >= 80 || (alumno.promedio > 60 && alumno.destacado));
        let promedioRep = Reprobados.reduce((suma, alumno)=>{
            return suma = suma + alumno.promedio;
        }, 0)
        const promedioFinal_reprobados = promedioRep / Reprobados.length;
        console.log('promedio de reprobados : ' + promedioFinal_reprobados);
        
        let promedioAs = Asesorias.reduce((suma, alumno)=>{
            return suma = suma + alumno.promedio;
        }, 0)
        const promedioFinal_asesorias = promedioAs / Asesorias.length;
        console.log('promedio de reprobados : ' + promedioFinal_asesorias);


        let promedioBecados = Becados.reduce((suma, alumno)=>{
            return suma = suma + alumno.promedio;
        }, 0)
        const promedioFinal_becados = promedioBecados / Becados.length;
        console.log('promedio de reprobados : ' + promedioFinal_becados);

    
        Reprobados.forEach((rAlumno) => {
            rAppend(rAlumno.nombre);
        })
        Asesorias.forEach((aAlumno) => {
            aAppend(aAlumno.nombre);
        });
        Becados.forEach((bAlumno => {
            bAppend(bAlumno.nombre);
        }));
        
        // for(let i = 0; i<alumnos.length; i++)
        // {  
        //       if(alumnos[i].promedio < 60)
        //     {
        //         rAppend(alumnos[i].nombre);
        //     }
        //     else{
        //         if(alumnos[i].promedio < 80)
        //         {
        //             aAppend(alumnos[i].nombre);
        //         }
        //         if(alumnos[i].promedio >= 80 || (alumnos[i].promedio > 60 && alumnos[i].destacado))
        //         {
        //             bAppend(alumnos[i].nombre);
        //         }
        //     }
        // }
    }

    function appendLI(id) {
        const list = document.getElementById(id);
        return (text) => {
            const listItem = document.createElement('li');
            listItem.appendChild(document.createTextNode(text));
            list.appendChild(listItem);
        }
    }
})();
