<?php 
    require __DIR__ . '/vendor/autoload.php';
    require __DIR__ . '/bd/conexaoMYSQL.php';
    require __DIR__ . '/model/livros.php';
    
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Slim\Factory\AppFactory;

    //$app = new \Slim\App();

    $app = AppFactory::create();

    $app->get('/', function(Request $request, Response $response, $args){
        $dados = '{"nome" : "sdf sdf sf"}';
        $response->getBody()->write($dados);

        return $response;
    });

    $app->get('/livros', function(Request $request, Response $response, $args){
    
        $dados = '{"nome" : "sdfsdf sdf sdf sdf sd"}';

        $dados2 = listar();
        
        //json_encode($dadosUsuario);

        $response->getBody()->write(json_encode($dados2));

        return $response;
    });

     $app->run();
?>