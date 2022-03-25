# Laboratório 02

- [Definições](#definições)

- [Diagrama de Caso De Uso](#diagrama-de-caso-de-uso)

- [Histórias do Usuário](#histórias-do-usuário)

- [Diagrama de Classes e Pacotes](#diagrama_de_classes_e_pacotes)

- [Diagrama de Componentes](#diagrama_de_componentes)

- [Instruções para execução do programa](#intruções_para_execução_do_programa) 

## Definições

Sistema de Aluguel de Carros.

## Diagrama de Caso de Uso

![Diagrama_CasoDeUso](./projeto/Print%20-%20Diagrama%20de%20Caso%20de%20Uso.png)

## Histórias do Usuário

* US01 - Como cliente, eu quero introduzir pedido de aluguel, para alugar um carro.
* US02 - Como cliente, eu quero cancelar o pedido de aluguel, para tirar o pedido do sistema.
* US03 - Como cliente, eu quero consultar o pedido de aluguel, para saber a situação do pedido.
* US04 - Como cliente, eu quero modificar o pedido de aluguel, para fazer alterações no pedido.
* US05 - Como cliente, eu quero ser informado quando o meu contrato de locação for executado, para estar ciente da situação do contrato.
* US06 - Como cliente, eu quero ser informado quando o meu pedido de locação for alterado, para estar ciente das alterações no pedido de locação.
* US07 - Como usuário, eu quero logar no sistema, para ter acesso a aplicação.
* US08 - Como Agente, eu quero analisar o pedido, para autorizar ou negar a solicitação de um cliente.
* US09 - Como agente, eu quero ser informado quando houver um novo pedido de locação, para preparar a análise.
* US10 - Como agente, eu quero ser informado quando um pedido for cancelado, para dimensionar melhor o meu trabalho.
* US11 - Como agente, eu quero ser informado quando um pedido for modificado, para alterar a preparação da análise.


## Diagrama de classe e pacotes

![Diagrama_de_classe_e_Pacotes](./projeto/Print%20-%20Diagrama%20de%20Classes%20e%20Pacotes.png)

## Diagrama de Componentes

![Diagrama_de_componentes](./projeto/Diagrama%20de%20Classe%20de%20Componentes.png)

## Instruções para execução do programa

### Backend

```
cd Implementacao 
mvn spring-boot:run
```

### Frontend

http://localhost:3030

```
cd Implementacao/frontend
npm start
```
