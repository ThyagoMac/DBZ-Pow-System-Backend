package br.com.dbzpowsystem.ws.controller;

import java.util.Collection;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import br.com.dbzpowsystem.ws.model.Personagem;
import br.com.dbzpowsystem.ws.service.PersonagemService;

@RestController
public class PersonagemController {
	
	@Autowired
	PersonagemService personagemService; 
	
	//vindo um request get(http consulta - padrao do load da pag) quando a pagina for /personagens
	//vindo um request de POST (semelhante ao set) quando a pagina for /personagens
	//mediatype recebe json recebido em Personagem e posto em personagem.
	@RequestMapping(method=RequestMethod.POST, value="/personagens" , consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Personagem> cadastrarPersonagem(@RequestBody Personagem personagem) {
		
		Personagem personagemCadastrado = personagemService.cadastrar(personagem);
		
		return new ResponseEntity<>(personagemCadastrado, HttpStatus.CREATED);
	}
	
	//vindo um request de GET quando a pagina for /personagens
	@RequestMapping(method=RequestMethod.GET, value="/personagens" , produces=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Collection<Personagem>> buscarTodosPersonagens() {
		
		Collection<Personagem> personagensBuscados = personagemService.buscarTodos();
		
		return new ResponseEntity<>(personagensBuscados, HttpStatus.OK);
	}
	
	@RequestMapping(method=RequestMethod.DELETE, value="/personagens/{id}")
	public ResponseEntity<Personagem> excluirPersonagem(@PathVariable Integer id) {
		
		Personagem personagemEncontrado = personagemService.buscarPorId(id);
		
		if (personagemEncontrado == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		
		personagemService.excluir(personagemEncontrado);
		return new ResponseEntity<>(HttpStatus.OK);		
	}
	
	@RequestMapping(method=RequestMethod.PUT, value="/personagens" , consumes=MediaType.APPLICATION_JSON_VALUE)
	public ResponseEntity<Personagem> alterarPersonagem(@RequestBody Personagem personagem) {
		
		Personagem personagemAlterado = personagemService.alterar(personagem);
		
		return new ResponseEntity<>(personagemAlterado, HttpStatus.OK);
	}

}
