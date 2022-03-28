import { pages } from '../utils/consts'
import styled from 'styled-components'

const StyledMenu = styled.div`
display: flex;
flex-flow: row;
justify-content: space-evenly;
`

const Menu = () => {
    return (<StyledMenu>
        {pages.map(page => <a href={page.path}>{page.label}</a>)}
    </StyledMenu>)
}

export default Menu