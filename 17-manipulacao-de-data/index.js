const dataAtual = new Date();

// console.log(dataAtual)

//               Dias

// const umDiaDepois = new Date(dataAtual);

// umDiaDepois.setDate(dataAtual.getDate() + 1)

// console.log(umDiaDepois)

//               Mês

// const umMesAtras = new Date(dataAtual);

// umMesAtras.setMonth(umMesAtras.getMonth() - 1);

// console.log(umMesAtras)

//               Formatada

// const opcoes = {
//     year: 'numeric',
//     month:'long',
//     day: 'numeric'
// }

// const dataFormatada = dataAtual.toLocaleDateString('pt-br', opcoes);

// console.log(dataFormatada)

//               Formatada 2

const opcoes = {
    weekday: 'long',
    year: 'numeric',
    month:'long',
    day: 'numeric'
}

const Formatador = new Intl.DateTimeFormat('pt-br', opcoes)

const dataFormatada = Formatador.format(dataAtual)

console.log(dataFormatada)