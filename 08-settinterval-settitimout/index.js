// setTimeout(() => {
//     alert("ola mundo")
// });

// setTimeout(() => {
//     console.log("console dentro do setTimout")
// }, 4000);

// setTimeout(() => {
//     console.log("Executando a cada 2 segundos")
// }, 2000);

// console.log("console depois do setTimout")

const idDoIntervalo = setInterval(() => {
                        console.log("Executando a cada 2 segundos")
                    }, 2000);

console.log(idDoIntervalo)
clearInterval(idDoIntervalo)
clearTimeout() 