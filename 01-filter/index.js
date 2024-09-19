let pessoas = [
    { nome: "Roberto", idade: 33},
    { nome: "Ricardo", idade: 33},
    { nome: "Raphael", idade: 27}
]

// let pessoasComIdadeDe33anos = []
// for (let i = 0; i < pessoas.length; i++) {
//     if(pessoas[i].idade === 33){
//         pessoasComIdadeDe33anos.push(pessoas[i])
//     }
// }

let pessoasComIdadeDe33anos = pessoas.filter((pessoa) => pessoa.idade === 33)

console.log(pessoasComIdadeDe33anos)