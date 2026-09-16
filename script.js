const forms = document.getElementById('forms');
const nome = document.getElementById('nome');
const qteqd = document.getElementById('qteqd');
const lista = document.getElementById('lista');
const msg = document.getElementById('msg');
const listaRes = document.getElementById('listaRes');

let array = []; //lista la

const salvar = () => { //funcao la q faz o bagulho de salvar la e seta a lista array no localstorage
    localStorage.setItem("array", JSON.stringify(array)); //stringfy coloca os bagulho tudo em string grande tudo dentro sabe
}

const adicionarNaTela = (conteudo) => { //funcao la q faz o tiricoteco do bagulho pra add na tela, criando um elemento na const iem, 
    const item = document.createElement("li");
    item.textContent = conteudo;
    lista.appendChild(item); //coloca algo dentro da lista por exemplo
}

const some = () => {
    nome.value = "";
    qteqd.value = "";
}

msg.style.display = "none";
listaRes.style.display = "none";

forms.addEventListener('submit', (event) => {
    event.preventDefault(); //cncela o evento padrao do navegador quando reinicia a pafgina

    if(nome.value.trim() != "" && qteqd.value.trim() != "") { //trim() tira os espacos e enters na direita e esquerda da string, deixando apenas texto
        adicionarNaTela(`Nome: ${nome.value.trim()}\nEmail: ${qteqd.value.trim()}\nTelefone: ${nome}\n${nome} pessoas vão no dia ${nome}\nPreferência de contato: ${nome}`); // \n quebra linha la nos baguho la
        array.push({nome: `${nome.value.trim()}`, qteqd: `${qteqd.value.trim()}`}); //coloca um indice a mais no final da lista e coloca o parametro como esse indice
        salvar();
        some();
        msg.style.display = "none";
        listaRes.style.display = "block";
    } else {
        some();
        msg.style.display = "block";
    }
});

const carregar = () => {
    const salvo = localStorage.getItem("array");
    if (salvo !== null) {
        array = JSON.parse(salvo); //transforma string la pra bagulho sem string coisado la
        listaRes.style.display = "block";
        array.map((i) => {adicionarNaTela(i)})
    }
}

carregar();

//comentarios apenas para me ajudar na apresentacao do trabalho no aprender e crescer