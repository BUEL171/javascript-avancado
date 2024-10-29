/*
        Pendente
        Realizada Resolve
        Recusado Reject
        Estabelecida
*/

// new Promise((resolve, reject) => {
    
// })

let ferverAgua = (chaleiraEstaNoFogo, fogaoEstaLigado) => {
    return new Promise((resolve, reject) => {
        if (chaleiraEstaNoFogo && fogaoEstaLigado) {
            console.log('começando o processo de ferver água') 
            resolve()
        }else {
            console.log("é necessário ligar o fogão e colocar a chaleira no fogão para ferver a água")
            reject()
        }
    })
}


let chaleiraEstaNoFogo = true
let fogaoEstaLigado = true
ferverAgua(chaleiraEstaNoFogo, fogaoEstaLigado)
console.log("fazendo café")