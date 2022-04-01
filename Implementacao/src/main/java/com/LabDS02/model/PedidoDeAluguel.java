package com.LabDS02.model;

import javax.persistence.*;

@Entity
@Table(name = "pedidosDeAluguel")
public class PedidoDeAluguel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    public Long getId() {
        return id;
    }
    
}
