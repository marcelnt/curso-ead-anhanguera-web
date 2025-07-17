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
    $user       = (string) "root";
    $password   = (string) "bcd127";
    $database   = (string) "db_universidade_cogna";
    
    
    if($conexao = mysqli_connect($server, $user, $password, $database))
        return $conexao;
    else
    {
        echo("ERRO_CONEXAO_BD");
        return false;
    }
    
}

?>