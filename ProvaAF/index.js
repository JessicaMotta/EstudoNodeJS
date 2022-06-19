// 1 - Faça uma função Nodejs que receba como parâmetro na URL 
// o ano de nascimento, o ano atual e apresente o seu nome e idade.

// npm install express

let express = require("express");
const { maxHeaderSize, request } = require("http");
let app = express();
const port = 1656; // Inicia um servidor na porta 1656

//iniciando a rota inicial localhost:1656
app.get('/', function(require,response){
    response.send('Rota Inicial')
});

app.get('/ex1', function (require,response){
    let param1 = require.query.Nome;
    let param2 = parseInt(require.query.Ano_nascimento);
    let param3 = parseInt(require.query.Ano_atual);
    response.send ("Olá " +param1+ " a sua idade é: "+ (param3 - param2))
});

// 2 - Faça uma função Nodejs que receba como parâmetro na URL um número inteiro e apresente seu Fatorial.

app.get('/ex2', function (require,response){
    let param1 = (require.query.n1);
    let resultado = param1;
        for ( var i = 1; i <param1; i++){
            resultado *= i;
        }
        response.send("O fatorial do número digitado é: "+resultado);
});
// 3 - aumento de salary 
app.get ('/ex3', function (require,response){
    let salary = parseInt(require.query.salary);
    if  (salary <= 250){
        var aumento = 20;
        var valaumento = parseInt((salary/100) * 20 );
        var newsalary = valaumento + salary;
    }
    if  (salary > 250 && salary < 600){
        var aumento = 15;
        var valaumento = ((salary/100) * 15);
        var newsalary = valaumento + salary;
    }
    if  (salary > 600 && salary <1500){
        var aumento = 10;
        var valaumento = ((salary/100) * 10);
        var newsalary = valaumento + salary;
    }
    if  (salary >= 1500){
        var aumento = 5;
        var valaumento = ((salary/100) * 5);
        var newsalary = valaumento + salary;
    }
    response.send("Seu salário atual é " +salary+ 
    ". Com isso, o seu aumento é de %" +aumento+ 
    " R$"+valaumento+ 
    " Seu salario com o reajuste será de R$"+newsalary);
});

// 4 - Faça uma função Nodejs que receba como parâmetro na URL um número inteiro n 
//e mostre todos os impares, de 1 até n.

app.get('/ex4', function (require, response) {
    let param1 = parseInt(require.query.number);
        for (var i =0; i < param1; i++){
            if (i%2 == 1){
                response.send("Números ímpares: "+ i);
            }
        }
})

// 5 - [0.5] Faça uma função Nodejs que receba como parâmetro na URL um número inteiro n e imprima:
// 1
// 2 2
// 3 3 3
// .....
// n n n n n n ... n
// Até o número informado.

app.get('/ex5', function (req, res) {
    let number = parseInt(req.query.number); // Inicializa uma variável chamada "number", com o valor enviado no campo "Insira um número".
    var n = []; // Inicializa um vetor chamado "n".
    for (let i = 1; i <= number; i++) { // Cria uma estrutura de repetição for, definindo o valor de i como 1 no inicialiador, definindo a condição como o valor de i ser menor ou igual ao de number e incrementando +1 na variável i.
        for (let j = 0; j < i; j++) { // Cria uma estrutura de repetição for, dentro da outra, definindo o valor de j como 0 no inicializador, definindo a condição como j sendo menor que i e incrementando +1 na variável j.
            add = n.push(i); // Adiciona o valor de i no vetor n, dentro da estrutura de repetição.
        }
        var add = n.push("\n"); // Adiciona "\n" para no vetor, para facilitar a formatação.
    }
    var formattedVector = new String(n); // Converte um vetor em String.
    formattedVector = formattedVector.replace(/,/g, ' '); // Formata a String, substituindo todas as ocorrências de "," por " ".
    res.send(formattedVector.substring(0[formattedVector.length])); // Exibe o valor de todas as posições do vetor n.
});

// 6 - horas min e segundos 
app.get('/ex6', function (require,response){
    let hour = parseInt(require.query.number1);
    let min = parseInt(require.query.number2);
    let hora_min = hour*60;
    let total_min = min + hora_min;
    let total_segundos = total_min*60;

    response.send("Hora em minutos: "+hora_min+" | Total em minutos: "+total_min+
    " | Total de minutos convertidos sem segundos: "+total_segundos);
});


// 7 - Faça uma função Nodejs que receba como parâmetro na URL um número inteiro n,
// calcule e mostre sua tabuada.
app.get('/ex7', function (req, res) {
    let number = parseInt(req.query.number); // Inicializa uma variável chamada "number", com o valor enviado no campo "Insira um número"
    var currentMultiplication = []; // Inicializa um vetor chamado "currentMultiplication".
    for (let i = 0; i < 11; i++) { // Cria uma estrutura de repetição for, definindo o valor de i como 0 no inicializador, definindo a condição como i ser menor que 11 e incrementando +1 no valor de i.
        let result = number * i; // Cria uma variável chamada "result", definindo o valor dela como o valor de number multiplicado por i. 
        multiplication = `${number} * ${i} = ${result}`; // Cria uma string concatenando os valores de number, i e result.
        var add = currentMultiplication.push(multiplication); // Adiciona a string para uma posição do vetor currentMultiplication.
    };
    var formattedMultiplication = new String(currentMultiplication); // Convertendo o vetor em String
    formattedMultiplication = formattedMultiplication.replace(/,/g, ' | '); // Formatando a String, substituindo todas as ocorrências de "," por " | ".
    res.send(formattedMultiplication.substring(0[formattedMultiplication.length])); // Formata a String, removendo o primeiro e último caráctere.
});


app.listen(1656, function () { 
    console.log("A aplicação está rodando na porta 1656")
});
