<?php 
/*************************************************************************
    Objetivo: Inserir e Listar dados de Livros no Banco de Dados
    Data: 14/07/2025
    Autor: Marcel
*************************************************************************/

//Import do arquivo de conexão com o BD


function inserir ($arrayCliente)
{
    $sql = "insert into tbl_livro
                (
                    title,
                    subtitle,
                    isbn,
                    price,
                    image
                )
                values
                (
                    '". $arrayCliente['title'] ."',
                    '". $arrayCliente['subtitle'] ."',
                    '". $arrayCliente['isbn'] ."',
                    '". $arrayCliente['price'] ."',
                    '". $arrayCliente['image'] ."'
               )
            ";

        //Chamando a função que estabelçece a conexão com o BD 
        $conexao = conexaoMysql();
        //Envia o script SQL para o BD
        if (mysqli_query($conexao, $sql))
            return true; //Retorna verdadeiro se o registro for inserido no BD
        else
            return false; //Retorna falso se houver algum problema
}

//retorna todos os registros existentes no banco
function listar ()
{
    $sql = "select * from tbl_livro";
    
       
    //Abre a conexão com o BD
    $conexao = conexaoMysql();
    
    //Solicita aoBD a execução do script SQL
    $rsLivros = mysqli_query($conexao, $sql);

    while ($livros=mysqli_fetch_assoc($rsLivros)){
        $arrayLivros[] = $livros;
    }
    
    $livros = '{"livros": '.json_encode($arrayLivros).'}';

    return $livros;
   
}


//****** Testando o INSERT  de um livro ******************
// echo('************************ INSERINDO UM LIVRO ****************************** <br>');
//     //Array para cadastrar um livro qualquer no banco de dados
//     $livro = array (
//                 "title"         => "Learn Enough JavaScript to Be Dangerous",
//                 "subtitle"      => "Livro de PHP 8",
//                 "isbn"          => "123456789",
//                 "price"         => "20",
//                 "image"         => "http://teste.jpg"
//             );



    //Função para inserir o livro e encaminhar o array de livro
    // $status = inserir($livro);

    // //Validação para saber se o livro foi cadastrado ou não
    // if($status)
    //     echo("O livro foi inserido com sucesso! <br><br>");
    // else
    //     echo("Erro ao inserir o livro! <br><br>");


/********* Testando o SELECT de livros ********************/
// echo('************************ LISTAGEM DE LIVROS ******************************<br>');
// $dadosLivros = listar(); 

// while ($livros=mysqli_fetch_assoc($dadosLivros)){
//     echo('Nome do Livro: '. $livros['title'] . " - Preço: " . $livros['price'] . "<br><br>");
// }
?>