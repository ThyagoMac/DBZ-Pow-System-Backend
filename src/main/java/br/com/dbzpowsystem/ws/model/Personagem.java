package br.com.dbzpowsystem.ws.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;

@Entity
public class Personagem {
	
	@Id
	@GeneratedValue
	private Integer id;
	private String nome;
	private String sobreNome;
	private String classe;
	private String raca;
	private String sexo;
	private String auraKi;
	private Integer idade;
	private Integer poderDeLuta;
	private Integer poderDeLutaAtual;
	private Integer poderDeLutaInimigo;
	private Integer transform;
	private Integer myHp;
	private Integer hp;
	private Integer ki;
	private Integer ataque;
	private Integer defesa;
	private Integer danoF;
	private Integer danoM;
	private Integer bonusF;
	private Integer bonusM;
	private String url;
	
	
	public String getSobreNome() {
		return sobreNome;
	}
	public void setSobreNome(String sobreNome) {
		this.sobreNome = sobreNome;
	}
	public String getClasse() {
		return classe;
	}
	public void setClasse(String classe) {
		this.classe = classe;
	}
	public String getRaca() {
		return raca;
	}
	public void setRaca(String raca) {
		this.raca = raca;
	}
	public String getSexo() {
		return sexo;
	}
	public void setSexo(String sexo) {
		this.sexo = sexo;
	}
	public String getAuraKi() {
		return auraKi;
	}
	public void setAuraKi(String auraKi) {
		this.auraKi = auraKi;
	}
	public Integer getIdade() {
		return idade;
	}
	public void setIdade(Integer idade) {
		this.idade = idade;
	}
	public Integer getPoderDeLuta() {
		return poderDeLuta;
	}
	public void setPoderDeLuta(Integer poderDeLuta) {
		this.poderDeLuta = poderDeLuta;
	}
	public Integer getPoderDeLutaAtual() {
		return poderDeLutaAtual;
	}
	public void setPoderDeLutaAtual(Integer poderDeLutaAtual) {
		this.poderDeLutaAtual = poderDeLutaAtual;
	}
	public Integer getPoderDeLutaInimigo() {
		return poderDeLutaInimigo;
	}
	public void setPoderDeLutaInimigo(Integer poderDeLutaInimigo) {
		this.poderDeLutaInimigo = poderDeLutaInimigo;
	}
	public Integer getTransform() {
		return transform;
	}
	public void setTransform(Integer transform) {
		this.transform = transform;
	}
	public Integer getMyHp() {
		return myHp;
	}
	public void setMyHp(Integer myHp) {
		this.myHp = myHp;
	}
	public Integer getHp() {
		return hp;
	}
	public void setHp(Integer hp) {
		this.hp = hp;
	}
	public Integer getKi() {
		return ki;
	}
	public void setKi(Integer ki) {
		this.ki = ki;
	}
	public Integer getAtaque() {
		return ataque;
	}
	public void setAtaque(Integer ataque) {
		this.ataque = ataque;
	}
	public Integer getDefesa() {
		return defesa;
	}
	public void setDefesa(Integer defesa) {
		this.defesa = defesa;
	}
	public Integer getDanoF() {
		return danoF;
	}
	public void setDanoF(Integer danoF) {
		this.danoF = danoF;
	}
	public Integer getDanoM() {
		return danoM;
	}
	public void setDanoM(Integer danoM) {
		this.danoM = danoM;
	}
	public Integer getBonusF() {
		return bonusF;
	}
	public void setBonusF(Integer bonusF) {
		this.bonusF = bonusF;
	}
	public Integer getBonusM() {
		return bonusM;
	}
	public void setBonusM(Integer bonusM) {
		this.bonusM = bonusM;
	}
	public String getUrl() {
		return url;
	}
	public void setUrl(String url) {
		this.url = url;
	}
	public Integer getId() {
		return id;
	}
	public void setId(Integer id) {
		this.id = id;
	}
	public String getNome() {
		return nome;
	}
	public void setNome(String nome) {
		this.nome = nome;
	}
}
