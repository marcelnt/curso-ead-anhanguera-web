/*************************************************************************
 * Objetivo: Arquivo responsável por validar e buscar CEP local e via API
 * Data: 29/05/2025
 * Autor: Marcel
 * Versão: 1.0
 ************************************************************************/
//Recebe o botão de pesquisar do HTML
const botaoPesquisar = document.getElementById('pesquisar')

//Recebe os dados do formulário para buscar o CEP
function getValidarDados () {
    //Recebe o cep informado no formulário
    let cep = document.getElementById('input-cep')

    //Validação para restringir a qtde de digitos do CEP
    if(cep.value == '' || cep.value.length != 8)
        alert('O CEP informado precisa ter 9 digitos para ser válido!!!')
    else
        //getBuscarCep(cep.value)
        getBuscarCepAPI(cep.value)
}

//Função que busca o CEP na API do via cep
const getBuscarCepAPI = async function(cep){
    //Cria variavel para concatenar o CEP na url do via cep
    let url = `https://viacep.com.br/ws/${cep}/json/`
    
    //Executa a url no site do via cep e recebe os dados do cep
    let response = await fetch(url)

    let item = await response.json()
    
    setDadosForm(item)
}

//Função para printar os dados no form, após a busca do CEP
const setDadosForm = function(dadosCep){

    //Coloca os dados do CEP nas caixas de texto do formulário
    document.getElementById('logradouro').value = dadosCep.logradouro
    document.getElementById('bairro').value     = dadosCep.bairro
    document.getElementById('cidade').value     = dadosCep.localidade
    document.getElementById('estado').value     = dadosCep.uf
}

//Função de Call Back para o JS escutar o evento click do botão no HTML
botaoPesquisar.addEventListener('click',function(){
    getValidarDados()
})
