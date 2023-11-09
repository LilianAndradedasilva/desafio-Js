alert("Olá, que bom ter você por aqui!!")
const pergunta = prompt (`Qual seu objetivo? Digite 1 para Front-End ou 2 para Back-End`);
let objetivo;

if (pergunta === '1'){
    objetivo = 'Front-End';
    linguagem = prompt ("Dentro do Front-End, qual linguagem você quer aprender? Digite 1 para React ou 2 para Vue?");

}

else if (pergunta === '2'){
    objetivo = 'Back-End';
    linguagem = prompt("Em Back-End, qual linguagem você quer aprender? Digite 1 para C# ou 2 para Java")
}

else {
alert("Você não inseriu uma área válida!");
}


    let msg = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite '1' em caso positivo.");
    while (msg === "1"){
        let novaTecnologia = prompt("Qual?");
        alert(`${novaTecnologia} é realmente uma tecnologia muito legal!`)

        msg = prompt("Tem mais alguma outra tecnologia que você gostaria de aprender? Digite '1' em caso positivo.");
    }