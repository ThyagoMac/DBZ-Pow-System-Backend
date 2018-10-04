angular.module('dbzmod').controller('PersonagensController', function ($scope, $http) {

    var vm = this;
    vm.auraKi = null;
    vm.personagens = [];
    vm.personagem = {};

    /*
    vm.personagens = [
    {
        id:1,
        nome: "Ada",
        sobreNome: "Majin",
        classe: "Especialista",
        raca: "Majin",
        sexo: "Fem",
        auraKi: "off",
        idade: 18,
        poderDeLuta: 8023,
        poderDeLutaAtual: 8023,
        poderDeLutaInimigo: 8100,
        transform:0,
        myHp: 100,
        hp: 200,
        ki: 100,
        ataque: 50,
        defesa: 50,
        danoF: 10,
        bonusF: 2,
        danoM: 10,
        bonusM: 1,  
        url: 'https://i.imgur.com/MStrWbZ.png'
    },
    {
        id:2,
        nome: "Firzen",
        sobreNome: "",
        classe: "Tanque",
        raca: "Changeling",
        sexo: "Masc",
        auraKi: "off",
        idade: 13,
        poderDeLuta: 8746,
        poderDeLutaAtual: 8746,
        poderDeLutaInimigo: 8800,
        transform:0,
        myHp: 100,
        hp: 200,
        ki: 100,
        ataque: 50,
        defesa: 50,
        danoF: 10,
        bonusF: 2,
        danoM: 10,
        bonusM: 1,  
        url: 'https://pm1.narvii.com/6450/aa95c48ae99a3d2382bb28f26d13eb3918a42548_hq.jpg'
    },
    {
        id:3,
        nome: "Pickles",
        sobreNome: "Sr",
        classe: "Assassino",
        raca: "Namek",
        sexo: "Masc",
        auraKi: "off",
        idade: 108,
        poderDeLuta: 1000,
        poderDeLutaAtual: 1000,
        poderDeLutaInimigo: 1000,
        transform:0,
        myHp: 100,
        hp: 200,
        ki: 100,
        ataque: 50,
        defesa: 50,
        danoF: 10,
        bonusF: 2,
        danoM: 10,
        bonusM: 1,  
        url: 'http://images.uncyc.org/pt/thumb/b/b9/Picc-kid.jpg/250px-Picc-kid.jpg'
    }];
    
*/

    vm.pesquisa = '';
    
    
    vm.carregarPersonagens = function(){
    	$http({method:'GET', url:'http://localhost:8000/personagens'})
		.then(function(response){
			vm.personagens = response.data;
			console.log("Carregou personagens pelo db...");
		}, function(response){
			console.log(response.status);
			console.log("Deu ruim o carregamento db.");
		});
    }
    
    vm.carregarPersonagensLocal = function(){
        vm.personagens = JSON.parse(localStorage.getItem("personagens"));
        console.log("Carregou personagens local...");
    }

    vm.alterarPersonagens = function(personagem){
    	
    	vm.personagem = personagem;
    	
    	$http({method:'PUT', url:'http://localhost:8000/personagens'})
		.then(function(response){
			vm.personagens.push(response.data);
			console.log("Salvou personagens pelo db...");
		}, function(response){
			console.log(response);
			console.log("Deu ruim o salvamento db.");
		});
    }
    
    vm.alterarPersonagensLocal = function(personagens){
        localStorage.setItem("personagens", JSON.stringify(personagens));
        console.log("salvando localhost...");
    }

    vm.pasarInteiro = function(retornoInteiro){
        retornoInteiro = parseInt(retornoInteiro, 10);
    }
    
    vm.excluir = function(personagem){
    	vm.excluirLocal(personagem);
    	$http({method:'DELETE', url:'http://localhost:8000/personagens/' + personagem.id})
		.then(function(response){
			//vm.carregarPersonagens();
			console.log("Excluiu personagens pelo db...");
		}, function(response){
			console.log(response);
			console.log("Deu ruim a remoção pelo db.");
		});
    }
    vm.excluirLocal = function(personagem){
        
        vm.personagens = vm.personagens.filter(function(item){
            return item.id != personagem.id;
        });

        vm.alterarPersonagensLocal(vm.personagens);
        console.log("personagem excluido local");
    }

    vm.powChange = function(personagem) {
        
        personagem.myHp = ((personagem.hp * 100)/200);
        
        //personagem.myKy = personagem.ky + "%";
        personagem.transform = parseInt(personagem.transform, 10);
        personagem.poderDeLutaAtual = parseInt(personagem.poderDeLutaAtual, 10);
        personagem.poderDeLuta = parseInt(personagem.poderDeLuta, 10);
        personagem.kaioken = parseInt(personagem.kaioken, 10);

        var tranformacaoCalc = ((personagem.poderDeLuta/2) * personagem.transform);
        var kiCalc = (personagem.poderDeLuta * 1.1);
        var kaiokenCalc = ((personagem.poderDeLuta * 0.05)*(personagem.kaioken));


        if (personagem.auraKi == "on"){

            personagem.poderDeLutaAtual = tranformacaoCalc + kiCalc;            
            personagem.poderDeLutaAtual = Math.round(personagem.poderDeLutaAtual);

        } else if (personagem.auraKi == "kaioken") {

            personagem.poderDeLutaAtual = tranformacaoCalc + kaiokenCalc + kiCalc;
            personagem.poderDeLutaAtual = Math.round(personagem.poderDeLutaAtual);

        } else {
            
            personagem.poderDeLutaAtual = tranformacaoCalc + personagem.poderDeLuta;
            personagem.poderDeLutaAtual = Math.round(personagem.poderDeLutaAtual);

        }

        var diferencaPercent = (personagem.poderDeLutaAtual*100)/personagem.poderDeLutaInimigo;

        if (personagem.classe == "Tanque"){

            personagem.ataque = diferencaPercent*0.5;
            personagem.ataque = Math.round(personagem.ataque);
            personagem.defesa = (diferencaPercent*0.5)+5;
            personagem.defesa = Math.round(personagem.defesa);
            personagem.danoF = (diferencaPercent*0.03);
            personagem.danoF = Math.round(personagem.danoF);
            personagem.danoM = (diferencaPercent*0.1);
            personagem.danoM = Math.round(personagem.danoM);
            personagem.bonusF = (diferencaPercent*0.1);
            personagem.bonusF = Math.round(personagem.bonusF);
            personagem.bonusM = (diferencaPercent*0.05);
            personagem.bonusM = Math.round(personagem.bonusM);
            

        } else if (personagem.classe == "Assassino"){

            personagem.ataque = diferencaPercent*0.5;
            personagem.ataque = Math.round(personagem.ataque);
            personagem.defesa = diferencaPercent*0.5;
            personagem.defesa = Math.round(personagem.defesa);
            personagem.danoF = (diferencaPercent*0.03);
            personagem.danoF = Math.round(personagem.danoF);
            personagem.danoM = (diferencaPercent*0.1)+2;
            personagem.danoM = Math.round(personagem.danoM);
            personagem.bonusF = (diferencaPercent*0.1)+2;
            personagem.bonusF = Math.round(personagem.bonusF);
            personagem.bonusM = (diferencaPercent*0.05)+2;
            personagem.bonusM = Math.round(personagem.bonusM);
            

        } else if (personagem.classe == "Especialista"){

            personagem.ataque = (diferencaPercent*0.5)+10;
            personagem.ataque = Math.round(personagem.ataque);
            personagem.defesa = (diferencaPercent*0.5)+10;
            personagem.defesa = Math.round(personagem.defesa);
            personagem.danoF = (diferencaPercent*0.03);
            personagem.danoF = Math.round(personagem.danoF);
            personagem.danoM = (diferencaPercent*0.1);
            personagem.danoM = Math.round(personagem.danoM);
            personagem.bonusF = (diferencaPercent*0.1);
            personagem.bonusF = Math.round(personagem.bonusF);
            personagem.bonusM = (diferencaPercent*0.05);
            personagem.bonusM = Math.round(personagem.bonusM);
            

        } else if (personagem.classe == "Balanceado"){
            personagem.ataque = diferencaPercent*0.5;
            personagem.ataque = Math.round(personagem.ataque);
            personagem.defesa = diferencaPercent*0.5;
            personagem.defesa = Math.round(personagem.defesa);
            personagem.danoF = (diferencaPercent*0.03);
            personagem.danoF = Math.round(personagem.danoF);
            personagem.danoM = (diferencaPercent*0.1);
            personagem.danoM = Math.round(personagem.danoM);
            personagem.bonusF = (diferencaPercent*0.1);
            personagem.bonusF = Math.round(personagem.bonusF);
            personagem.bonusM = (diferencaPercent*0.05);
            personagem.bonusM = Math.round(personagem.bonusM);
            

        }

        vm.alterarPersonagensLocal(vm.personagens);
        
    };
    
    /*
    vm.excluir = function(personagem){
        var i = 0;
        for (i=0; vm.personagens.length > i; i++){
            
            if(vm.personagens[i].id == personagem.id){
                vm.personagens.splice(i, 1);
            }
        }
        vm.alterarPersonagens(vm.personagens);
    }
    */

    

    vm.carregarPersonagens();
    
});
