/***********************************************************************
 * Objetivo: Realizar a integração com uma API de livros 
 * para carregar os dados na tela
 * Data: 09/04/2025
 * Autor: Marcel
 * Versão: 1.0
***********************************************************************/

const getCarregarLivros = function(livros){

     
    //Recebendo a div principal para criar os CARDS
    let div_cardProdutos = document.getElementById('cardProdutos')

    //***** Cria elementos no HTML

    //livros[0].books.forEach(function(item){
    livros.books.forEach(function(item){
      
        //Criar uma div (elemento novo) no projeto HTML
        let div_caixa_produto   = document.createElement('div')
        let h2_caixa_titulo     = document.createElement('h2')
        let figure_caixa_imagem = document.createElement('figure')
        let img                 = document.createElement('img')
        let div_caixa_texto     = document.createElement('div')


    //**** Cria atributos na tag no HTML
        //Adiciona o atributo class com o valor caixa_produto na DIV
        //setAttribute() -> adiciona um atributo na tag e coloca um valor
        //getAttribute() -> pega o valor de um atributo na tag
        div_caixa_produto.setAttribute('class', 'caixa_produto')
        h2_caixa_titulo.setAttribute('class', 'caixa_titulo')
        figure_caixa_imagem.setAttribute('class', 'caixa_imagem')
        img.setAttribute('src', item.image)
        img.setAttribute('alt', item.title)
        img.setAttribute('title', item.title)
        div_caixa_texto.setAttribute('class', 'caixa_texto')


    /**** Adiciona um elemento HTML dentro de outros elementos */
        //Adicionando o elemento (tag nova que foi criada) dentro do elemento pai
        div_cardProdutos.appendChild(div_caixa_produto)
        div_caixa_produto.appendChild(h2_caixa_titulo)
        div_caixa_produto.appendChild(figure_caixa_imagem)
        figure_caixa_imagem.appendChild(img)
        div_caixa_produto.appendChild(div_caixa_texto)

    /**** Adicionando texto aos elementos */
        h2_caixa_titulo.innerText = item.title
        div_caixa_texto.innerText = item.subtitle


    })

}

const getLivrosAPI = async function(){

    //URL da API de livros
    let url = 'https://projeto-livraria-latx.onrender.com/v2/livraria/livro/'

    //Executa o fetch na URL
    let response = await fetch(url)

    //Recebe somente os dados do corpo da resposta em formato JSON
    let dados = await response.json()

    return dados
}


window.addEventListener('load', async function(){
   //Chama a função para realizar o fetch na API
   let dadosLivros = await getLivrosAPI()

   //Encaminha os dados da API para a função carregar no HTML
    getCarregarLivros(dadosLivros)

   //Chama a função para carregar os livros com o array local
   //getCarregarLivros(livros[0])
})