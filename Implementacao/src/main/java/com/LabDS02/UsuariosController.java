package com.LabDS02;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.List;

@RestController
@RequestMapping("/usuarios")
public class UsuariosController {

    private final UsuariosRepository UsuarioRepository;

    public UsuariosController(UsuariosRepository usuarioRepository) {
        this.UsuarioRepository = usuarioRepository;
    }

    @GetMapping
    public List<Usuario> getUsuarios() {
        return UsuarioRepository.findAll();
    }

    @GetMapping("/{id}")
    public Usuario getUsuario(@PathVariable Long id) {
        return UsuarioRepository.findById(id).orElseThrow(RuntimeException::new);
    }

    @PostMapping
    public ResponseEntity createUsuario(@RequestBody Usuario usuario) throws URISyntaxException {
        Usuario savedUsuario = UsuarioRepository.save(usuario);
        return ResponseEntity.created(new URI("/usuarios/" + savedUsuario.getId())).body(savedUsuario);
    }

    @PutMapping("/{id}")
    public ResponseEntity updateUsuario(@PathVariable Long id, @RequestBody Usuario usuario) {
        Usuario currentUsuario = UsuarioRepository.findById(id).orElseThrow(RuntimeException::new);
        currentUsuario.setLogin(usuario.getLogin());
        currentUsuario.setSenha(usuario.getSenha());
        currentUsuario = UsuarioRepository.save(usuario);
        UsuarioRepository.deleteById(currentUsuario.getId());

        return ResponseEntity.ok(currentUsuario);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity deleteUsuario(@PathVariable Long id) {
        UsuarioRepository.deleteById(id);
        return ResponseEntity.ok().build();
    }
}