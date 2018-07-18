/*creamos la promesa */
const promise = new Promise((res, rej)=>{
    // /* codigo *
    setTimeout(()=> res('acaboo timeout'),5000);
    
});

/* consumes la promesa */
promise.then((res)=> console.log(res));
console.log("Hola :3 ");