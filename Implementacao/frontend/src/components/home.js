import Menu from './menu'
import styled from 'styled-components'

const StyledHome = styled.div`
    h1{
        text-align: center;
        padding: 8px;
    }
`

const Home = () => <StyledHome>
    <Menu />
    <h1>Alugel de automóveis LabDS</h1>
</StyledHome>

export default Home