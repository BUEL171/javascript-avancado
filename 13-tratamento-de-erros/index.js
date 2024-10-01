let ferverAgua = (chaleiraEstaNoFogao, fogaoEstaLigado) => {
  return new Promise((resolve, reject) => {

    if(typeof chaleiraEstaNoFogao != "boolean") throw " somente o tipo booleano e aceito"

    if (chaleiraEstaNoFogao && fogaoEstaLigado) {
        console.log("Começando o processo de ferver a água");
        resolve();
    } else {
        const mensagemDeErro = "É necessário ligar o fogão e colocar a chaleira no fogão para ferver a água"
        reject(mensagemDeErro);
    }
  });
};

let passarCafe = (aguaFervida) => {
  return new Promise(function (resolve) {
    console.log("Passando o café");
    resolve();
  });
};

let tomarCafe = (cafePassado) => {
  return new Promise(function (resolve) {
    console.log("Tomando o café");
    resolve();
  });
};

let lavarXicara = (cafeTomado) => {
  return new Promise(function (resolve) {
    console.log("Lavando a xícara");
    resolve();
  });
};

let chaleiraEstaNoFogao = "teste";
let fogaoEstaLigado = true;

async function fazerCafe() {
    try {
        const aguaFervida = await ferverAgua(chaleiraEstaNoFogao, fogaoEstaLigado);
        const cafePassado = await passarCafe(aguaFervida);
        const cafeTomado = await tomarCafe(cafePassado);
        const xicaraLavada = await lavarXicara(cafeTomado);

        
    }catch(err){
        console.log(err)
    }finally{
        console.log("Finalizado o ritual de tomar o café, bora trabalhar")
    }
}

fazerCafe();
