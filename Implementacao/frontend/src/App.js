import { useState, useEffect } from 'react'
import './App.css';

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const App = () => {
  const [usuarios, setUsuarios] = useState([])
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [id, setId] = useState(null)
  const [update, setUpdate] = useState(false)

  useEffect(() => fetch('usuarios').then(res => res.json())
    .then(res => {
      setSenha('')
      setLogin('')
      setId(null)
      setUsuarios(res)
    })
    , [update])

  const salvarUsuario = () => fetch('usuarios', {
    method: 'POST',
    headers: HEADERS,
    body: JSON.stringify({ login: login, senha: senha })
  }).then(() => setUpdate(!update))

  const editarUsuario = () => fetch('usuarios/' + id, {
    method: 'PUT',
    headers: HEADERS,
    body: JSON.stringify({ login: login, senha: senha })
  }).then(() => setUpdate(!update))

  const removeUsuario = (id) => fetch('usuarios/' + id, {
    method: "DELETE",
    headers: HEADERS,
  }).then(() => setUpdate(!update))


  return (
    <div className="App">
      <div>
        <h2>{id ? "Editar usuário " + id : "Adicionar usuário"}</h2>
        <input placeholder="Login" type="text" value={login} onChange={e => setLogin(e.target.value)} />
        <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
        <button type="button" onClick={() => id ? editarUsuario() : salvarUsuario()}>Salvar usuário</button>
      </div>
      <h2>Usuários cadastrados</h2>
      {usuarios.map((usuario, i) =>
        <p key={i}>{usuario.id + ' - ' + usuario.login + ' - ' + usuario.senha + '   '}
          <button onClick={() => {
            setId(usuario.id)
            setLogin(usuario.login)
            setSenha(usuario.senha)
          }}>Editar</button>
          <button onClick={() => removeUsuario(usuario.id)}>Excluir</button>
        </p>)}
    </div>
  );
}

export default App
