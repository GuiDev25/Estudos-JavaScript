//Mini-Projeto 1 --> troca de variável usando aux
let a = "vermelho";
let b = "azul";
let aux;

//console.log(a);
//console.log(b);

aux = a;
a = b;
b = aux;

//console.log(a);
//console.log(b);

//Mini-Projeto 2 --> funcao q compara 2 numeros e retorna o maior
let num1,num2;
//num1 = prompt("digite o numero 1");
//num2 = prompt("digite o numero 2");

function maiorDeles(n1,n2){
    if(n1>n2){
        return console.log(n1);
    }else if(n2>n1){
        return console.log(n2);
    }else{
        return console.log("Seus números são iguais");
    }
}

//maiorDeles(num1,num2);


//Mini-Projeto 3 --> FizzBuzz
    //Divisivel por 3 - Fizz
    //Divisivel por 5  - Buzz
    //Divisivel por 3 e por 5 - FizzBuzz
    //Não é divisível por nenhum - Entrada
    //NaN - NaN

const resultado = fizzBuzz(11);

//console.log(resultado);
function fizzBuzz(entrada){
    if(typeof entrada !== "number"){
        return "NaN";
    }else if(entrada%3 === 0 && entrada%5 === 0){
        return "FizzBuzz";
    }else if(entrada%3 === 0){
        return "Fizz";
    }else if(entrada%5 === 0){
        return "Buzz";
    }else{
        return entrada;
    }
}

//Mini-Projeto 4 --> Medidor de velocidade
    //Vel max - 70 km/h;
    //A cada 5km acima de 70 -> 1 ponto
    //se a pontuação>12 -> carteira suspensa

let velocidade = verificarVelocidade(75);
console.log(velocidade);

function verificarVelocidade(vel) {
    const velMax = 70;
    let pont;
    if(vel<=velMax){
        return "Ok";
    }else{
        let vAcima = vel-velMax;
        let pont = Math.floor(vAcima/5);
        if(pont>=12){
            return "Carteira suspensa";
        }else{
            return "Você tem "+pont+" pontos";
        }
    }
}