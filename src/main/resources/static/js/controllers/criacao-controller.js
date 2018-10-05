appDbz.controller('CriacaoController', function($scope, $http, $timeout){

    var vm = this;
    vm.personagem = {};
    var urlDataBase = "http://localhost:8080";
    


    //recupera personagens ou cria vazio
    vm.recuperarPersonagens = function(){
        var personagens = JSON.parse(localStorage.getItem("personagens"));
        if(!personagens){
            return [];
        } else {
            return personagens;
        }
    }

    vm.gerarIdentificador = function(){
        var idSalvo = localStorage.getItem("sequencePersonagem");
        var idRetorno;
        if(!idSalvo){
            idRetorno = 1;
        } else {
            idRetorno = ++idSalvo;
        }

        localStorage.setItem("sequencePersonagem", idRetorno);

        return idRetorno;
    }

    //semi construtor
    vm.configurarValoresPadrao = function(personagem){
        personagem.poderDeLutaInimigo = 3000;
        personagem.poderDeLutaAtual = 0;
        personagem.auraKi = "";
        personagem.transform = 0;
        personagem.myHp = 100;
        personagem.hp = 200;
        personagem.ki = 100;
        personagem.ataque = 50;
        personagem.defesa = 50;
        personagem.danoF = 10;
        personagem.bonusF = 2;
        personagem.danoM = 10;
        personagem.bonusM = 1;
        personagem.kaioken = 1;
        
      //Todo cancelar a $$hashKey gerada pelo angular.
        //vm.personagens[0]['$$hashKey'] = "fsagg";
        //vm.personagens[1]['$$hashKey'] = "fsas";
        //vm.personagens[2]['$$hashKey'] = "fsgfdsg";
    }

    vm.validationPersonagem = function(personagem){

        var formularioValido = true;

        if (!personagem.nome){
            alert("Insira nome");
            formularioValido = false;
        }

        if(personagem.idade < 4){
            alert("Idade minima necessaria");
            formularioValido = false;
        }

        if (!personagem.poderDeLuta){
            alert("Insira Poder de Luta Inicial");
            formularioValido = false;
        }

        if(personagem.poderDeLuta < 1){
            alert("Poder de Luta Inicial Não Pode Ser Menor Que 1");
            formularioValido = false;
        }

        /*{
            mensagem = "Nome está com algum problema";
            validacao = false;
        }*/

        return formularioValido;
    }

    vm.salvarPersonagem = function(personagem){
    	$http({
    		method:'POST',
    		url: urlDataBase +'/personagens',
    		data: personagem })
		.then(function(response){
			//vm.personagens.push(response.data);
			console.log("Salvou personagens pelo db...");
		}, function(response){
			console.log(response);
			console.log("Deu ruim o salvamento db.");
		});
    }
    
    vm.salvarPersonagemLocal = function(personagem){
        var personagens = vm.recuperarPersonagens(); //getPersonagens
        personagens.push(personagem) //insere personagem > personagem
        localStorage.setItem("personagens", JSON.stringify(personagens));
    }
    
    vm.limparForm = function(){
    	vm.personagem = {};
    }

    vm.submeter = function() {

        if(!vm.validationPersonagem(vm.personagem)){
            return; //return interrompe o fuxo do codigo.
        }
        //gera obj id e joga p/ personagem
        //vm.personagem.id = vm.gerarIdentificador();
        vm.configurarValoresPadrao(vm.personagem); //constructor valores padroes
        vm.salvarPersonagem(vm.personagem);
        //Esvazia personagem q está na tela
        vm.limparForm();
        
    }
    
});

