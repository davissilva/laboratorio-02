import { pages } from '../utils/consts'
import styled from 'styled-components'
import { useContext } from 'react'
import { ThemeContext } from '../App'

const StyledMenu = styled.div`
display: flex;
flex-flow: row;
justify-content: space-evenly;
`

const Menu = () => {
    const { isLogged, usuario } = useContext(ThemeContext)

    return (<StyledMenu>
        {pages.filter(page => {
            if (page.label === 'Login' && isLogged) return false
            if (page.label === 'Logout' && !isLogged) return false
            return true
        }).map((page, i) => <a key={i} href={page.path}>{page.label}</a>)}
        {isLogged && <>
            <span>Usuario: {usuario ? usuario.login : null}</span>
            <a href="/logout" >Logout</a></>}
    </StyledMenu>)
}


export default Menu