'use strict';
(function(global){
    const stateGenerator = (initialState)=>{
        const state = initialState;
        return {
            getState: () =>({...state}),
            agregarAlumno:(alumno) => {state.alumnos.push(alumno)}
        }
    }
    global.stateGenerator = stateGenerator;
})(window);
/*es la forma mas sencilla de encapsular objetos */
