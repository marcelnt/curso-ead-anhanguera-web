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
    
    $livros = '{"books": '.json_encode($arrayLivros).'}';

    return $livros;
   
}



?>