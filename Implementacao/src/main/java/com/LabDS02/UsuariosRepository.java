package com.LabDS02;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface UsuariosRepository extends JpaRepository<Usuario, Long> {
    List<Usuario> findByLogin(String login);
}