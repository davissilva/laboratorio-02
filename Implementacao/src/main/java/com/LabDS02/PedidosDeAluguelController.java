package com.LabDS02;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/pedidosDeAluguel")
public class PedidosDeAluguelController {

    private final PedidosDeAluguelRepository PedidoDeAluguelRepository;

    public PedidosDeAluguelController(PedidosDeAluguelRepository pedidoDeAluguelRepository){
        this.PedidoDeAluguelRepository = pedidoDeAluguelRepository;
    }

    @GetMapping
    public List<PedidoDeAluguel> getPedidosDeAluguel(){
        return PedidoDeAluguelRepository.findAll();
    }

    @GetMapping("/{id}")
    public PedidoDeAluguel getPedidoDeAluguel(@PathVariable Long id){
        return PedidoDeAluguelRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createPedidoDeAluguel(@RequestBody PedidoDeAluguel pedidoDeAluguel) throws URISyntaxException {
        PedidoDeAluguel savedPedido = PedidoDeAluguelRepository.save(pedidoDeAluguel);
        return ResponseEntity.created(new URI("/pedidosDeAluguel/" + savedPedido.getId())).body(savedPedido);
    }
}
