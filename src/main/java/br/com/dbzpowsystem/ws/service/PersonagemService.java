package br.com.dbzpowsystem.ws.service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import br.com.dbzpowsystem.ws.model.Personagem;
import br.com.dbzpowsystem.ws.repository.PersonagemRepository;

@Service
public class PersonagemService {
	
	@Autowired
	PersonagemRepository personagemRepository;
	
	private Map<Integer, Personagem> personagens = new HashMap<>();
	private Integer proximoId=1;
	
	//negocios
	public Personagem cadastrar(Personagem personagem) {
		//seta o id do obj
		return personagemRepository.save(personagem);
	}
	
	public Collection<Personagem> buscarTodos(){
		//map ja tem a funcao values que retorna tdos os obj do array.
		return personagemRepository.findAll();
	}
	
	public void excluir(Personagem personagem) {
		personagemRepository.delete(personagem);
	}
	
	public Personagem buscarPorId(Integer id) {
		return personagemRepository.getOne(id);//Verificar dps findOne findById
	}
	
	public Personagem alterar(Personagem personagem) {
		return personagemRepository.save(personagem);
	}
	
}
