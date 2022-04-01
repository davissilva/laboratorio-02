package com.LabDS02.model;

public class Automovel {
    private int matricula;
    private int ano;
    private String marca;
    private String modelo;
    private String placa;


    public Automovel(int matricula, int ano, String marca, String modelo, String placa) {
        this.matricula = matricula;
        this.ano = ano;
        this.marca = marca;
        this.modelo = modelo;
        this.placa = placa;
    }


    public int getMatricula() {
        return this.matricula;
    }

    public void setMatricula(int matricula) {
        this.matricula = matricula;
    }

    public int getAno() {
        return this.ano;
    }

    public void setAno(int ano) {
        this.ano = ano;
    }

    public String getMarca() {
        return this.marca;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

    public String getModelo() {
        return this.modelo;
    }

    public void setModelo(String modelo) {
        this.modelo = modelo;
    }

    public String getPlaca() {
        return this.placa;
    }

    public void setPlaca(String placa) {
        this.placa = placa;
    }

    public String toString(){
        return "Informações do Automóvel \n" + 
        "Matrícula: " + this.getMatricula() + " \n " +
        "Ano: " + this.getAno() + " \n " +
        "Marca: " + this.getMarca() + " \n " + 
        "Modelo: " + this.getModelo() + " \n " +
        "Placa: " + this.getPlaca(); 
    }
    
}
