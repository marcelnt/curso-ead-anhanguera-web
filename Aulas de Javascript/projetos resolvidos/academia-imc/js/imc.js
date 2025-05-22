//Recebe o botão calcular no JS
const botaoCalcular = document.getElementById('calcular')

//Função para calcular o IMC
function calcularIMC (peso, altura) {  

    let valor_imc = peso / (altura * altura)  
    return Number(valor_imc).toFixed(2) //Padroniza apenas 2 casas decimais após a virgula
}  

//Função para calcular o status do IMC
function validarStatusIMC (valorIMC){ 

    let status_imc

    //Validação para o status do IMC conforme tabela
    if(valorIMC < 18.5) 
        status_imc = 'Magreza'
    else if(valorIMC >= 18.5 && valorIMC <= 24.9)
        status_imc = 'Normal'
    else if(valorIMC >= 25 && valorIMC <= 29.9)
        status_imc = 'Sobrepeso	'
    else if(valorIMC >= 30 && valorIMC <= 39.9)
        status_imc = 'Obesidade'

    return status_imc 

} 

//Evento click do botão calcular
botaoCalcular.addEventListener('click', function(){
    //Recebe os valores informados pelo usuário
    let peso    = document.getElementById('peso').value
    let altura  = document.getElementById('altura').value

    //Funções para calcular e validar o status
    let resultado_IMC = calcularIMC(peso, altura)
    let resultado_status_imc = validarStatusIMC(resultado_IMC)

    //Coloca no HTML os valores do IMC e do Status
    document.getElementById('resultado_valor_imc').innerText    = resultado_IMC
    document.getElementById('resultado_status_imc').innerText   = resultado_status_imc

})