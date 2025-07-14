<?php


function calcularMedia ($nota1, $nota2, $nota3, $nota4) {

    $status = null;
    //Tratatamento para caixa vazia
    if ($nota1 == "" || $nota2 == "" || $nota3 == "" || $nota4 == "" ){
        $status = false;
    }
    else
    {
        //Tratamento para valores númericos
        if(is_numeric($nota1) && is_numeric($nota2) && is_numeric($nota3) && is_numeric($nota4) ) 
        {
            $media = ($nota1 + $nota2 + $nota3 + $nota4) / 4;
            $status = true;
        }else{
            $status = false;
        }
    }

    if($status)
        return $media;
    else
        return false;
}




?>

