package com.LabDS02.model;

import java.util.ArrayList;
import java.util.List;

import com.LabDS02.Usuario;

public class Cliente extends Usuario{

    private String RG;
    private String CPF;
    private String nome;
    private String endereco;
    private List<Profissao> profissoes;
    private String entidadeEmpregadora;
    private double rendimentos;

    public Cliente(String RG, String CPF, String nome, String endereco, String entidadeEmpregadora, double rendimentos) {
        this.RG = RG;
        this.CPF = CPF;
        this.nome = nome;
        this.endereco = endereco;
        this.profissoes = new ArrayList<>(3);
        this.rendimentos = rendimentos;
        this.entidadeEmpregadora = entidadeEmpregadora;
    }

    public String getRG() {
        return this.RG;
    }

    public void setRG(String RG) {
        this.RG = RG;
    }

    public String getCPF() {
        return this.CPF;
    }

    public void setCPF(String CPF) {
        this.CPF = CPF;
    }

    public String getNome() {
        return this.nome;
    }

    public void setNome(String nome) {
        this.nome = nome;
    }

    public String getEndereco() {
        return this.endereco;
    }

    public void setEndereco(String endereco) {
        this.endereco = endereco;
    }

    public void addProfissoes(Profissao profissao) {
        profissoes.add(profissao);
    }

    public List<Profissao> getProfissoes() {
        return this.profissoes;
    }
    
    public String getEntidadeEmpregadora() {
        return this.entidadeEmpregadora;
    }

    public void setEntidadeEmpregadora(String entidadeEmpregadora) {
        this.entidadeEmpregadora = entidadeEmpregadora;
    }

    public double getRendimentos() {
        return this.rendimentos;
    }

    public void setRendimentos(double rendimentos) {
        this.rendimentos = rendimentos;
    }

}
