// function(a, b, ...args) {
//     //
// }

function incentivarQuester(mensagem, ...nomesQuesters) {
    nomesQuesters.map(nomeQuester => console.log(`${mensagem} ${nomeQuester}`))
}

incentivarQuester("Parabens por ter chegado ao modulo de javascript avançado,", "buel", "beua", "bdww")