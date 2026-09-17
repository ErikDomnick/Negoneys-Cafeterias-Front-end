const forms = document.getElementById('forms');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const telef = document.getElementById('telef');
const radioEmail = document.getElementById('radioEmail');
const qt = document.getElementById('qt');
const qdd = document.getElementById('qdd');
const qdt = document.getElementById('qdt');
const lista = document.getElementById('lista');
const msgErro = document.getElementById('msgErro');
const listaRes = document.getElementById('listaRes');

let array = []; //lista la

const salvar = () => { //funcao la q faz o bagulho de salvar la e seta a lista array no localstorage
    localStorage.setItem("array", JSON.stringify(array)); //stringfy coloca os bagulho tudo em string grande tudo dentro sabe
}

const adicionarNaTela = (conteudo) => { //funcao la q faz o tiricoteco do bagulho pra add na tela, criando um elemento na const iem, 
    const item = document.createElement("li");
    item.innerHTML = conteudo;
    lista.appendChild(item); //coloca algo dentro da lista por exemplo
}

const some = () => {
    nome.value = "";
    email.value = "";
    telef.value = "";
    qt.value = "";
    qdd.value = "";
    qdt.value = "";
}

msgErro.style.display = "none";
listaRes.style.display = "none";

forms.addEventListener('submit', (event) => {
    event.preventDefault(); //cncela o evento padrao do navegador quando reinicia a pafgina

    if(nome.value.trim() != "" && email.value.trim() != "" && telef.value.trim() != "" && qt.value.trim() != "" && qdd.value.trim() != "" && qdt.value.trim() != "") { //trim() tira os espacos e enters na direita e esquerda da string, deixando apenas texto
        const pref = radioEmail === true ? "Email" : "Telefone";
        adicionarNaTela(`<strong>Número da reserva: ${array.length + 1}</strong><br><strong>Nome:</strong> ${nome.value.trim()}<br><strong>Email:</strong> ${email.value.trim()}<br><strong>Telefone:</strong> ${telef.value.trim()}<br><strong>${qt.value.trim()} pessoas</strong> vão no dia <strong>${qdd.value.trim()} as ${qdt.value.trim()}</strong><br><strong>Preferência de contato:</strong> ${pref}`);
        array.push({nome: nome.value.trim(), email: email.value.trim(), telef: telef.value.trim(), qt: qt.value.trim(), qdd: qdd.value.trim(), qdt: qdt.value.trim(), pref: pref}); //coloca um indice a mais no final da lista e coloca o parametro como esse indice
        salvar();
        some();
        msgErro.style.display = "none";
        listaRes.style.display = "block";
    } else {
        some();
        msgErro.style.display = "block";
    }
});

const carregar = () => {
    const salvo = localStorage.getItem("array");
    if (salvo !== null) {
        array = JSON.parse(salvo); //transforma string la pra bagulho sem string coisado la
        listaRes.style.display = "block";
        array.map((i, index) => {adicionarNaTela(`<strong>Número da reserva: ${index + 1}</strong><br><strong>Nome:</strong> ${i.nome}<br><strong>Email:</strong> ${i.email}<br><strong>Telefone:</strong> ${i.telef}<br><strong>${i.qt} pessoas</strong> vão no dia <strong>${i.qdd} as ${i.qdt}</strong><br><strong>Preferência de contato:</strong> ${i.pref}`)}); //map faz o mesmo negocio la do for do bagulho la mas é melhor e mais facil de entender na minha opiniao
    }
}

carregar();

//comentarios apenas para me ajudar na apresentacao do trabalho no aprender e crescer