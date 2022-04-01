package com.LabDS02.model;

public class Profissao {
    
    private String profissao;
    private String salario;

    public Profissao(String profissao, String salario) {
        this.profissao = profissao;
        this.salario = salario;
    }

    public String getProfissao() {
        return this.profissao;
    }

    public void setProfissao(String profissao) {
        this.profissao = profissao;
    }

    public String getSalario() {
        return this.salario;
    }

    public void setSalario(String salario) {
        this.salario = salario;
    }

}
