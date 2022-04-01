package com.LabDS02;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.xml.bind.DatatypeConverter;
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

    @GetMapping("/logarUsuario")
    public ResponseEntity logarUsuario(HttpServletRequest req) {
        String authorization = req.getHeader("Authorization");
        if (authorization != null && authorization.startsWith("Basic")) {
            String credentials = authorization.substring("Basic".length()).trim();
            byte[] decoded = DatatypeConverter.parseBase64Binary(credentials);
            String decodedString = new String(decoded);
            String[] actualCredentials = decodedString.split(":");
            String login = actualCredentials[0];
            String senha = actualCredentials[1];
            List<Usuario> usuarios = findByLogin(login);
            if (usuarios.isEmpty()) return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Login não encontrado");
            else {
                Usuario usuario = usuarios.get(0);
                if (usuario.getSenha().equals(senha)) return ResponseEntity.ok(usuario);
                else return ResponseEntity.status(401).body("Password não validado");

            }
        } else return ResponseEntity.status(401).body("Não foi possível realizar o login");
    }

//    public Usuario getUsuarioByRequest(HttpServletRequest req){}

    public List<Usuario> findByLogin(String login) {
        return UsuarioRepository.findByLogin(login);
    }
}