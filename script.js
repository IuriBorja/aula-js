/* var a = 10;
var b = 15;

var c = a + b;

console.log(c);


var d = 10;
var e = 25;

var f = d * e;

console.log(f);


var g = 30;

var h = g++;

console.log(h);
console.log(g);


var carro = "ligado";
var rua = "aberta";


if (carro === "ligado") {
    console.log(carro)
} else {
    console.log(rua)
}


var i = 17;

i = i % 2;


console.log(i);


var a = 4;
var b = 4;

console.log( a != b ); */




/*var idade = 29;

var maior20 = idade >= 20;
var menor30 = idade <= 30;


var entre = maior20 && menor30;

console.log("Idade", idade);

console.log("Maior que vinte", maior20);

console.log("Menor que trinta", menor30);

console.log("Entre 20 e 30", entre);*/


/*var idade = 8;

var maior20 = idade >= 20;
var menor20 = !maior20;

console.log("Maior que vinte", maior20);

console.log("Menor que vinte", menor20);*/


/*var numero = parseInt(prompt("Digite um número"));



alert("A raiz quadrada de  " + numero + " é " + numero ** 2);


/*alert("vamos calcular a formula de baskhara para você")

var a = prompt("digite o valor de A")
var b = prompt("digite o valor de B")
var c = prompt("digite o valor de C")

var delta = (b*b) - (4*a*c)
var bask1 = (-b+Math.sqrt(delta))/2*a
var bask2 = (-b-Math.sqrt(delta))/2*a

alert("seu delta é: "+ delta)
alert("X1(+) é: "+bask1)
alert("X2(-) é: "+ bask2)*/



/*var nome = prompt("Qual o seu nome?")
var idade = prompt("Qual sua idade?")
var cidade = prompt("Qual sua cidade?")
var estado = prompt("Qual o seu Estado?")
var numero = prompt("Escolha um Número")
var ano = 2021 - idade
var dobro = parseInt(numero) + parseInt(numero)


alert("Agora vou repassa-los")
alert("Olá, " + nome + "!")
alert("Sua idade é " + idade)
alert("Sua cidade é " + cidade)
alert("Seu estado é " + estado)
alert("O número que você escolheu foi " + numero) 
alert("E o Dobro dele é " + dobro)
alert("E o ano que você nasceu é " + ano)
prompt("Tudo certo? \n Digite Sim")
alert("Tchau, Brigado !")*/


/*let idade = prompt("Qual sua idade?");

if (idade >= 75) {
  alert("bem vindo senhor");
  alert("Recomendamos beber com moderação");
  alert("em que posso te ajudar?");
} else if (idade >= 18) {
  alert("bem vindo a loja");
  alert("em que posso te ajudar?");
} else if (idade < 18) {
  alert("você nao tem idade pra acessar nossa loja");
  alert("ficaremos felizes em te atender quando você for maior de idade");
} else alert("o campo nao foi preenchido corretamente");
*/


/*var idade = 26;

/*idade >= 18 ? console.log("pode") : console.log("nao pode");*/


/*var pode = idade >= 18 ? false : true;

console.log(pode);*/



/*var nota1 = 5.0;
var nota2 = 8.0;

var media = (nota1 + nota2) / 2;


var conceito = ""

if (media >= 8) {


  conceito = "Ótimo";
}
else if (media >= 6.5) {

  conceito = "Bom";

} else {

  conceito = "Regular";

}



console.log(media);
console.log(conceito);


switch (conceito) {

  case "Ótimo":
      console.log("Parabéns, você é um ótimo estudante!")
      break;

  case "Bom":
      console.log("Você está quase perfeito!")
      break;
  case "Regular":
      console.log("Estude mais um pouco...")
      break;
  default:
      console.log("Houve algum erro!")
      break;        

}*/



/*console.log("===============");
console.log("Sorteio Loteria");
console.log("===============");

var num = 1;
var qtNumSortear = 6;
var resultado = "Números sorteados:\n| ";
var numSorteado = 0;

while (num <= qtNumSortear) {
    numSorteado = parseInt(Math.random() * 100);

    if (numSorteado <= 60) {
        console.log(numSorteado);
        resultado = resultado + numSorteado + " | ";
        num++;
    }

}

console.log("===============");
console.log(resultado);*/












