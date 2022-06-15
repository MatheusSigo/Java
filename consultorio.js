//criar referencia aos elementos html
const frm = document.querySelector("form");
const respNome = document.querySelector("span")
const respLista = document.querySelector("pre")

const pacientes = []; //declara o vetor global

frm.addEventListener("submit", (e) => {
    e.preventDefault()//para o formulario nao enviar dados
    const nome = frm.inPaciente.value;//obtem o nome do paciente
    pacientes.push(nome);//adiciona elemento no final do vetor
    console.log(pacientes);
    let lista = ""//string para concatenar pacientes
    for (let i = 0; i < pacientes.length; i++){
        lista += `${i + 1}.${i + pacientes[i]}\n`
    } 
    respLista.innerText = lista//exibe a lista de pacientes
    frm.inPaciente.value = "";//limpa o conteudo do campo
    frm.inPaciente.focus();//posicionar o cursor no campo 
});

frm.btnUrgencia.addEventListener("click", () =>{
    //verifica a vaslidacao 
    if(!frm.checkValidity()){
        alert("Informe o nome do paciente a ser atendido em caracter de urgencia");
        frm.inPaciente.focus();
        return //retorna as form
    }
    const nome = frm.inPaciente.value;//obtem o nome do paciente
    pacientes.unshift(nome);//adiciona elemento no final do vetor
    let lista = ""//string para concatenar pacientes
    pacientes.forEach((paciente,i)=>(lista +=`${i + 1}.${i + pacientes[i]}\n`));// forEach aplicado no vetor de pacientes
    respLista.innerText = lista//exibe a lista de pacientes
    frm.inPaciente.value = "";//limpa o conteudo do campo
    frm.inPaciente.focus();//posicionar o cursor no campo 
})

