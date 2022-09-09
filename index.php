<!DOCTYPE html>
<html lang="PT-br">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>LGTBQIA+</title>

    <!-- CSS only -->
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-gH2yIJqKdNHPEq0n4Mqa/HGKIhSkIHeL5AyhkYV8i59U5AR6csBvApHHNl/vI1Bx" crossorigin="anonymous">
    <!-- JavaScript Bundle with Popper -->

    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-A3rJD856KowSb7dwlZdYEkO39Gagi7vIsF0jrRAoQmDKKtQBHUuLZ9AsSv4jD4Xa" crossorigin="anonymous"></script>
    <!-- css-->
    <link href="style.css" type="text/css" rel="stylesheet">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Orbitron&family=Silkscreen&display=swap" rel="stylesheet">
</head>
<body >
    <div class="container text-center">

        <div class="mx-auto" style="width: 30vw;">
            <img class="card-img-top" src="bandeira.gif" alt="bandeira">
    
        </div>
        <a  id ="comecar"class="d-block text-decoration-none text-white" data-bs-toggle="modal" data-bs-target="#iniciar">Começar</a>
    
        <a  class="d-block text-decoration-none text-white  " data-bs-toggle="modal" data-bs-target="#creditos">  Creditos</a>
        <!-- Modal credits-->
        <div class="modal fade" id="creditos" tabindex="-1" aria-labelledby="creditoslabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="creditoslabel">Creditos</h5>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body ">
                <p>Programador: Robson Charles Salviano de Lima</P>
                <p>Ideias: lidia, robert</p>
            </div>
            </div>
        </div>
        </div>
    </div>


        
        


 


        


    <div class="modal fade text-center" id="iniciar" tabindex="-1" aria-labelledby="iniciarlabel"  aria-hidden="true">
        <div  class="modal-dialog modal-fullscreen ">
            <article class="questoes">
                <div id="modal-iniciar" class="modal-content">
                <div class="modal-header " >

                    <header class="questao">
                        <h2 id="pergunta" class="text-white d-block "> </h2>
                        <span class="text-white" id="numQuestao"></span>
                    </header>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body ">
                    <ol type="A" id="alternativas">
                        <li style="list-style: none" id="a" value="1A" class="respostas text-white" onClick="verificarSeAcertou(this, this)"></li> 
                        <li style="list-style: none" id="b" value="1B" class="respostas text-white" onClick="verificarSeAcertou(this, this)"></li> 
                        <li style="list-style: none" id="c" value="1C" class="respostas text-white" onClick="verificarSeAcertou(this, this)"></li>     
                    </ol>
                    
                </div>

            </article>
            

        </div>
    </div>
    <script src="script.js"></script>
</body>

</html>