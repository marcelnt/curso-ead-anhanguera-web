/*********************************************************************************************
 * Objetivo: Implementar o CRUD de dados de livros em uma API (GET, POST, PUT, DELETE)
 * Data: 30/04/2025
 * Autor: Marcel
 * Versão: 1.0
 *********************************************************************************************/

//Recebe o botão de salvar para fazer o POST ou PUT
const botaoSalvar   = document.getElementById('salvar')
const url           = 'https://projeto-livraria-latx.onrender.com/v2/livraria/livro/'

//Esta variável será utilizada apenas no EDITAR do livro, para guardar o ID e utilizarmos
// no PUT (update) do livro
var idLivro = 0

//Função para inserir novos livros
const inserirLivro = async function(livro){
    
    //Encaminha os dados do livro para a API inserir o livro (POST)
    let response = await fetch(url, {
        method:     'POST',
        mode:       'cors',
        headers:    {'content-type': 'application/json'},
        body:       JSON.stringify(livro)   
    })

    if(response.status == 201){
        alert('Registro inserido com sucesso!')

        //Recarrega a lista de livros para visualizar o novo livro
        listarLivros(await getDadosLivrosAPI())
    }else
        alert('Não foi possível inserir os dados !!!')
}

//Função para atualizar livros
const atualizarLivro = async function(livro, id){

    //Concatena o ID do livro na URL da requisição
    let urlEditar = url + id

    //Encaminha os dados do livro para a API inserir o livro (POST)
    let response = await fetch(urlEditar, {
        method:     'PUT',
        mode:       'cors',
        headers:    {'content-type': 'application/json'},
        body:       JSON.stringify(livro)   
    })

    if(response.status == 200){
        alert('Registro atualizado com sucesso!')

        //Recarrega a lista de livros para visualizar o novo livro
        listarLivros(await getDadosLivrosAPI())
    }else
        alert('Não foi possível atualizar os dados !!!')
}

//Função para excluir livros
const excluirLivro = async function(id){

    //Mensagem de confirmação para verificar se realmente é para excluir o livro
    let msgConfirm = confirm('Deseja realmente excluir este livro?')
    //Se a confirmação for verdadeira então realiza a requisição encaminhando o ID 
    //para a API excluir
    
    if(msgConfirm){ 
        //Concatena o ID do livro na url da API
        let urlExcluir = url + id
        //Realiza a requisição do tipo DELETE para excluir o livro
        let response = await fetch(urlExcluir, {
            method: 'DELETE'
        })

        //tratamento para mostrar uma mensagem para o usuário
        if(response.status == 200){
            alert('Registro excluído com sucesso!')

            //Recarrega a lista de livros para retirar o livro excluído
            listarLivros(await getDadosLivrosAPI())
        }else
            alert('Não foi possível realizar a exclusão devido a um problema na requisição!')
    }
}

//Função para retornar todos os livros da API
const listarLivros = function(livros){

    //Recebe o elemento da DIV para criar a lista de livros
    let div_listDados = document.querySelector('#listDados')

    //Limpar a div para carregar a lista do livros, pois senão fizer
    //no delete ao recarregar a lista vai duplicar os dados
    div_listDados.innerHTML = ''

    livros.books.forEach(function(item){

        //Criar o elementos da lista de livros
        let div_dados       = document.createElement('div')
        let div_title       = document.createElement('div')
        let div_subtitle    = document.createElement('div')
        let div_price       = document.createElement('div')
        let div_options     = document.createElement('div')
        let span_editar     = document.createElement('span')
        let span_excluir    = document.createElement('span')
        let img_editar      = document.createElement('img')
        let img_excluir     = document.createElement('img')

        //Adicionado atributos nos elementos HTML
        div_dados.setAttribute('id', 'dados')
        div_dados.setAttribute('class', 'linha dados')
        img_editar.setAttribute('src', 'icones/editar.png')
        img_excluir.setAttribute('src', 'icones/excluir.png')

        //Atribuindo dados da API de livros nos elementos HTML
        div_title.innerText     = item.title
        div_subtitle.innerText  = item.subtitle
        div_price.innerText     = item.price

        //Associando os elementos do HTML
        div_listDados.appendChild(div_dados)
        div_dados.appendChild(div_title)
        div_dados.appendChild(div_subtitle)
        div_dados.appendChild(div_price)
        div_dados.appendChild(div_options)
        div_options.appendChild(span_editar)
        div_options.appendChild(span_excluir)
        span_editar.appendChild(img_editar)
        span_excluir.appendChild(img_excluir)


        //Criar um função de evento de click para o botão de excluir
        img_excluir.addEventListener('click', function(){
            excluirLivro(item.id)
        })

        //Criar uma função de evento click para o botão de editar
        img_editar.addEventListener('click', async function(){
            setDadosForm(await getBuscarLivroAPI(item.id))
        })

    })
}


//Função para receber os dados da API de livros
const getDadosLivrosAPI = async function(){

    //Realiza a requisição na API de livros
    let response = await fetch(url)

    //Recebe os dados dos livros em JSON
    let dados = await response.json()

    //if(response.status == 200)
    if(dados.status_code == 200)
        return dados
    else
        return false
}

//Função para retornar um livro pelo ID
const getBuscarLivroAPI = async function(id){

    //Concatena o ID do livro com a URL da API
    let urlEditar = url + id

    let response = await fetch(urlEditar)
    let dados = await response.json()

    if(response.status == 200)
        return dados
    else
        return false
}

//Função para receber os dados do formulário e validar os dados
const validarDadosForm = function(){
    
    //Cria um objeto do tipo JSON para colocar os dados do livro
    let dadosLivro = {}

    //Variavel booleana para gerenciar o return da função
    let status = false

    //Recebe os elementos do formulário no JS 
    // (usamos o querySelector, que faz a mesma coisa do getElementById)
    let nome        = document.querySelector('#title')
    let descricao   = document.querySelector('#subtitle')
    let foto        = document.querySelector('#image')
    let valor       = document.querySelector('#price')

    //Validação para caixa sem preenchimento
    if(nome.value == '' || descricao.value == '' || foto.value == '' || valor.value == ''){
        alert('Não foi possível realizar a requisição pois existem campos sem preenchimento!!!')
    }else{
        //Criando um objeto do tipo JSON contendo os atributos e os valores que foram digitados
        //no formulário de cadastro
        dadosLivro.title    = nome.value
        dadosLivro.subtitle = descricao.value
        dadosLivro.image    = foto.value
        dadosLivro.price    = valor.value
        status = true //Deu certo
    }

    if(status)
        return dadosLivro
    else
        return false
}

//Função para carregar os dados do livro no formulário
const setDadosForm = async function(livro){

  


    document.getElementById('title').value      = livro.books[0].title
    document.getElementById('subtitle').value   = livro.books[0].subtitle
    document.getElementById('price').value      = livro.books[0].price
    document.getElementById('image').value      = livro.books[0].image

    //Alterando o texto do botão salvar para atualizar
    document.getElementById('salvar').innerText = 'Atualizar'

    //Esta variável esta sendo atribuida o ID do livro para ser encaminhada no click do 
    //botão Atualizar
    idLivro = await livro.books[0].id

    

}

//Evento de click no botão Salvar
botaoSalvar.addEventListener('click', function(){
    //Recebe o texto que está no botão (Salvar ou Atualizar)
    let botaoTexto = document.getElementById('salvar').innerText

    console.log(idLivro)
    //Chama a função para receber os dados do form e validar, 
    // guarda na variavel livro o return da função
    let livro = validarDadosForm()

    //Se o return for verdadeiro chama a função para inserir o livro
    if(livro){
        //Validação para definir qual a ação do click do botao, se é para Salvar (novo) 
        //ou Atualizar (editar)
        //Obs: o texto do botão esta sendo alterado na função setDadosForm()
        if(botaoTexto == 'Salvar')
            inserirLivro(livro)
        else if(botaoTexto == 'Atualizar')
            atualizarLivro(livro, idLivro)
    }
})

//Evento ao abrir a janela do navegador
window.addEventListener('load', async function(){
    
    //Chama a função para fazer a requisição na API
    let livros = await getDadosLivrosAPI()

    //Se a função não retornar false
    if(livros)
        //Chama a função para carregar os livros no navegador
        listarLivros(livros)
})