package br.com.dbzpowsystem.ws.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import br.com.dbzpowsystem.ws.model.Personagem;

@Repository
public interface PersonagemRepository extends JpaRepository<Personagem, Integer> {
	
}
