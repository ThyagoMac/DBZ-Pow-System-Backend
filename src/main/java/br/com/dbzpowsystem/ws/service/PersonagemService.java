package br.com.dbzpowsystem.ws.service;

import java.util.Collection;
import java.util.HashMap;
import java.util.Map;

import org.springframework.stereotype.Service;

import br.com.dbzpowsystem.ws.model.Personagem;

@Service
public class PersonagemService {
	
	private Map<Integer, Personagem> personagens = new HashMap<>();
	private Integer proximoId=1;
	
	//negocios
	public Personagem cadastrar(Personagem personagem) {
		
		//seta o id do obj
		personagem.setId(proximoId);
		proximoId++;
		
		//put(key, obj) put id no personagem
		personagens.put(personagem.getId(), personagem);
		
		return personagem;
	}
	
	public Collection<Personagem> buscarTodos(){
		//map ja tem a funcao values que retorna tdos os obj do array.
		return personagens.values();
	}
	
	public void excluir (Personagem personagem) {
		personagens.remove(personagem.getId());
	}
	
	public Personagem buscarPorId(Integer id) {
		return personagens.get(id);
	}
	
	public Personagem alterar(Personagem personagem) {
		personagens.put(personagem.getId(), personagem);
		return personagem;
	}
	
}
