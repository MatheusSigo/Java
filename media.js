function calcularMedia(){
    //criar referencia aos elementos da página
    let inNome = document.getElementById("inNome")
    let inNota1 = document.getElementById("inNota1")
    let inNota2 = document.getElementById("inNota2")
    let outNome = document. getElementById("outNome")
    let outMedia = document. getElementById("outMedia")
    let outSituaçao = document. getElementById("outSituaçao")

    //obtem os valores dos campos de edicao da pagina
    let nome = inNome.value;
    let nota1 = Number(inNota1.value);
    let nota2 = Number(inNota2.value);

    //calcular media das notas
    let media = (nota1 + nota2) / 2;

    //cria a estrutura condicional para verificar situacao do aluno
    if(media >= 7){
        //apresenta os dados na tela
        outNome.textContent = "Ola..: "+ nome;
        outMedia.textContent = "A média é..: "+media.toFixed(2);
        outSituaçao.textContent = "Parabens voce vai sair do IF"
        outSituaçao.style.color ="green"
    }else if (media >= 4){
        outNome.textContent = "Ola..: "+ nome;
        outMedia.textContent = "A média é..: "+media.toFixed(2);
        outSituaçao.textContent = "Voce esta de exame, Pode nao sair do IF"
        outSituaçao.style.color ="orange"
    }else{
        outNome.textContent = "Ola..: "+ nome;
        outMedia.textContent = "A média é..: "+media.toFixed(2);
        outSituaçao.textContent = "Deu ruim, voce ira ou nao continuar no IF"
        outSituaçao.style.color ="red" 
    }
}

//criar referencia ao elemento btncalcular
let btResultado = document.getElementById("btnCalcular");

//registrar um evento de click a funcao calcularMedia
btResultado.addEventListener("click", calcularMedia)