<?php 
/*************************************************************************
    Objetivo: Inserir e Listar dados de Cursos no Banco de Dados
    Data: 14/07/2025
    Autor: Marcel
*************************************************************************/

//Import do arquivo de conexão com o BD


function inserir ($arrayCurso)
{
    $sql = "insert into tbl_curso
                (
                    title,
                    price,
                    image
                )
                values
                (
                    '". $arrayCurso['title'] ."',
                    '". $arrayCurso['price'] ."',
                    '". $arrayCurso['image'] ."'
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
    $sql = "select * from tbl_curso";
    
       
    //Abre a conexão com o BD
    $conexao = conexaoMysql();
    
    //Solicita aoBD a execução do script SQL
    $rsCursos = mysqli_query($conexao, $sql);

    while ($curso=mysqli_fetch_assoc($rsCursos)){
        $arrayCursos[] = $curso;
    }
    
    $cursos = '{"cursos": '.json_encode($arrayCursos).'}';

    return $cursos;
   
}



?>