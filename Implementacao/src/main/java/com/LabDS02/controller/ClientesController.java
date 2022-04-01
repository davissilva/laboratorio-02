package com.LabDS02.controller;

import com.LabDS02.model.Cliente;
import com.LabDS02.model.ClientesRepository;
import com.LabDS02.model.Usuario;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/clientes")
public class ClientesController {

    private final ClientesRepository ClienteRepository;

    public ClientesController(ClientesRepository clienteRepository) {this.ClienteRepository = clienteRepository;}

    @GetMapping
    public List<Cliente> getUsuarios() {
        return ClienteRepository.findAll();
    }

    @PostMapping
    public ResponseEntity createUsuario(@RequestBody Cliente cliente) throws URISyntaxException {
        Cliente savedUsuario = ClienteRepository.save(cliente);
        return ResponseEntity.created(new URI("/clientes/" + savedUsuario.getId())).body(savedUsuario);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateUsuario(@PathVariable Long id, @RequestBody Cliente cliente) {
        Cliente currentCliente = ClienteRepository.findById(id).orElseThrow(RuntimeException::new);
        currentCliente.setLogin(cliente.getLogin());
        currentCliente.setSenha(cliente.getSenha());
        currentCliente = ClienteRepository.save(cliente);
        ClienteRepository.deleteById(currentCliente.getId());

        return ResponseEntity.ok(currentCliente);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUsuario(@PathVariable Long id) {
        ClienteRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}
