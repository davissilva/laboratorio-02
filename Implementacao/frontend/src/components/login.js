import Menu from './menu'
import styled from 'styled-components'
import { useState, useContext } from 'react'
import { ThemeContext } from '../App'
import { Redirect } from 'react-router-dom';


const Wrapper = styled.div`
    h1{
        text-align: center;
        padding: 8px;
    }
    div{
        text-align: center;
    }
`

const Login = () => {
    const [login, setLogin] = useState('')
    const [senha, setSenha] = useState('')
    const { setIsLogged, isLogged, usuario, setUsuario } = useContext(ThemeContext)

    const logarUsuario = () => {
        if (login === '' || senha === '') return alert('É necessário preencher login e senha para realizar o login')
        return fetch('usuarios/logarUsuario', {
            headers: new Headers({
                'Authorization': 'Basic ' + btoa(login + ':' + senha),
                'Content-Type': 'application/x--www--form--urlenconded'
            })
        }).then(res => {
            if (res.status === 200) {
                setUsuario({ login: login })
                setIsLogged(true)
                setLogin('')
                setSenha('')
            }
        })
    }

    return (<Wrapper>
        <Menu />
        <h1>Login</h1>
        <div>
            <input placeholder="Login" type="text" value={login} onChange={e => setLogin(e.target.value)} />
            <input placeholder="Senha" type="password" value={senha} onChange={e => setSenha(e.target.value)} />
            <button onClick={() => logarUsuario()}>Login</button>
        </div>
        {isLogged && <Redirect to="/" />}
    </Wrapper>)
}

export default Login