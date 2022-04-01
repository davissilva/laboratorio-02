package com.LabDS02.controller;

import com.LabDS02.model.Automovel;
import com.LabDS02.model.Cliente;
import com.LabDS02.model.PedidoDeAluguel;
import com.LabDS02.model.PedidosDeAluguelRepository;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/pedidosDeAluguel")
public class PedidosDeAluguelController {

    private final PedidosDeAluguelRepository PedidoDeAluguelRepository;

    public PedidosDeAluguelController(PedidosDeAluguelRepository pedidoDeAluguelRepository) {
        this.PedidoDeAluguelRepository = pedidoDeAluguelRepository;
    }

    @GetMapping
    public List<PedidoDeAluguel> getPedidosDeAluguel(){ return PedidoDeAluguelRepository.findAll();}

    @PostMapping
    public ResponseEntity createPedidoDeAluguel(@RequestBody PedidoDeAluguel pedido) throws URISyntaxException {
        PedidoDeAluguel savedPedido = PedidoDeAluguelRepository.save(pedido);
        return ResponseEntity.created(new URI("/pedidosDeAluguel/" + savedPedido.getId())).body(savedPedido);
    }

}
