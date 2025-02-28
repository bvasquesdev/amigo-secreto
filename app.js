let amigos = [];
let sorteio = {};

function adicionarAmigo(){
    let input = document.getElementById("amigo");
    let nome = input.value.trim();

    if (nome === "" || amigos.includes(nome)){
        alert("Nome inválido ou já adicionado!");
        return;
    }
    amigos.push(nome);
    atualizarLista();
    input.value = "";
}

function atualizarLista (){
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    amigos.forEach(nome => {
        let li = document.createElement("li");
        li.textContent = nome;
        lista.appendChild (li);
    })
}

function embaralharArray(array){
    for (let i = array.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i+1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function sortearAmigo(){
    if (amigos.length < 2){
        alert("Adicione pelo menos 2 amigos!");
        return;
    }

let sorteados;
    do{
        sorteados = [...amigos];
        embaralharArray(sorteados);
    } while (sorteados.some((p,i) => p === amigos[i]));

    sorteio = {};
    amigos.forEach((p,i) => {
        sorteio[p] = sorteados[i];
    });

    exibirBotoesDeResultado();
}

    function exibirBotoesDeResultado(){
        let resultadoLista = document.getElementById("resultado");
        resultadoLista.innerHTML = "";
    
    
  