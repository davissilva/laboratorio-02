import { useState, useEffect } from 'react'
import Menu from './menu'
import styled from 'styled-components'

const HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
}

const Wrapper = styled.div`
    text-align: center;
    .cadastro{
      display: flex;
      flex-flow: column;
      text-align: center;
      input, button{
        margin: 4px auto;
        max-width: 300px;
      }
      label{
        padding: 0px 4px;
      }
    }
`

const CrudUsuario = () => {
  const [usuarios, setUsuarios] = useState([])
  const [login, setLogin] = useState('')
  const [senha, setSenha] = useState('')
  const [id, setId] = useState(null)
  const [update, setUpdate] = useState(false)
  const [isClient, setIsClient] = useState(true)

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
    <Wrapper>
      <Menu />
      <h1>Usuários</h1>
      <div className="cadastro">
        <h2>{id ? "Editar usuário " + id : "Adicionar usuário"}</h2>
        <input placeholder="Login" type="text" value={login} onChange={e => setLogin(e.target.value)} />
        <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
        <div>
          <input type="radio" id="cliente" label="Cliente" checked={isClient} onChange={() => setIsClient(true)} />
          <label for="cliente">Cliente</label>
          <input type="radio" id="agente" label="Agente" checked={!isClient} onChange={() => setIsClient(false)} />
          <label for="agente">Agente</label>
        </div>
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
    </Wrapper>
  );
}

export default CrudUsuario
