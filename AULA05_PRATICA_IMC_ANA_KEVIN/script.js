var peso;
var altura;
var IMC;
var resultado;

//1 recebendo o event
function calcular(event){
    //refresh dos inputs

    //event.preventDefault();
    //alert('Teste');

    //recebendo os dados digitados pelo usúario
    peso = document.getElementById('peso').value;
    altura = document.getElementById('altura').value;

    //calculo imc
    imc = peso/(altura*altura);

    //testando a recepsao dos valores peso e altura
    //e testando o calculo imc
    console.log(peso);
    console.log(altura);
    console.log(imc);
    

}