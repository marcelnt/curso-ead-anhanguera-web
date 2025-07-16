<?php 
/*************************************************************************
    Objetivo: Arquivo para configurar a conexão com o Banco de Dados MySQL 
    Data: 11/07/2025
    Autor: Marcel
*************************************************************************/

//Abre a conexão com a base de dados MySQL
function conexaoMysql()
{
    
    //Declaração de Variaveis para conexão com BD
    $server     = (string) "localhost";
    $user       = (string) "seu usuário";
    $password   = (string) "sua senha";
    $database   = (string) "db_livraria_cogna";
    
    
    /*
        Formas de criar a conexão com BD
        
            mysql_connect();
            mysqli_connect();
            PDO();
    */
    
    if($conexao = mysqli_connect($server, $user, $password, $database))
        return $conexao;
    else
    {
        echo("ERRO_CONEXAO_BD");
        return false;
    }
    
}


//var_dump(conexaoMysql());
?>