package br.com.dbzpowsystem.ws.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class indexController {
	
	@RequestMapping("/personagenspainel")
	public String irParaIndex() {
		return "index";
	}
}
