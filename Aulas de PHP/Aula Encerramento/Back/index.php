<?php 
    require __DIR__ . '/vendor/autoload.php';
    require __DIR__ . '/model/bd/conexaoMYSQL.php';
    require __DIR__ . '/model/cursos.php';
    
    use Psr\Http\Message\ResponseInterface as Response;
    use Psr\Http\Message\ServerRequestInterface as Request;
    use Slim\Factory\AppFactory;
    


    $app = AppFactory::create();

    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST, PUT, DELETE, OPTIONS');
    header('Access-Control-Allow-Header: Content-Type');
    header('Content-Type: application/json');
   

    $app->get('/', function(Request $request, Response $response, $args){
        $dados = '{"Erro" : "Acesso Negado"}';
        
        $response->getBody()->write($dados);

        return $response->withHeader('Content-Type', 'application/json')->withStatus(401);
    });

    $app->get('/curso', function(Request $request, Response $response, $args){
        $dados = listar();


        $response->getBody()->write($dados);

        return $response->withStatus(200);
    });

    $app->post('/curso', function(Request $request, Response $response, $args){
        //Recebe o conteudo do enviado no body da mensagem
        $dadosBodyJSON = $request->getBody()->getContents();
        $dadosBodyJSON = json_decode($dadosBodyJSON, true);
        $dados = inserir($dadosBodyJSON);
        
        $response->getBody()->write('{"message":"Item criado com sucesso"}');
        return $response->withStatus(201);

    });

     $app->run();
?>