alert("Olá, que bom ter você por aqui!!")

const nome = prompt ("Qual seu nome?");
const idade = prompt ("Quantos anos você tem?");
const linguagem = prompt ("Qual linguagem de programação você está estudando?");

const msg = `"Olá ${nome}, você tem ${idade} anos e já está aprendendo ${linguagem}!!`;

alert (msg)

const pergunta = prompt (`você gosta de estudar ${linguagem}? Responda 1- Sim e 2 - Não`);

if(pergunta ==1){
  alert ("Muito bom! Constinue estudando e você terá muito sucesso.");
}

if (pergunta==2){
   alert ("Poxa que pena, já tentou outras linguagens?")
}