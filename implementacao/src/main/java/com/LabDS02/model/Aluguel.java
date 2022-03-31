package com.LabDS02.model;

import java.util.Date;

public class Aluguel {
    
    private Automovel automovel;
    private Date dataDeDevolucao;
    private double preco;


    public Aluguel(Automovel automovel, Date dataDeDevolucao, double preco) {
        this.automovel = automovel;
        this.dataDeDevolucao = dataDeDevolucao;
        this.preco = preco;
    }

    public Automovel getAutomovel() {
        return this.automovel;
    }

    public void setAutomovel(Automovel automovel) {
        this.automovel = automovel;
    }

    public Date getDataDeDevolucao() {
        return this.dataDeDevolucao;
    }

    public void setDataDeDevolucao(Date dataDeDevolucao) {
        this.dataDeDevolucao = dataDeDevolucao;
    }

    public double getPreco() {
        return this.preco;
    }

    public void setPreco(double preco) {
        this.preco = preco;
    }

    
}
