import Menu from './menu'
import styled from 'styled-components'

const Wrapper = styled.div`
    h1{
        text-align: center;
        padding: 8px;
    }
`


const PedidoDeAluguel = () => <Wrapper>
    <Menu />
    <h1>Pedido de Aluguel</h1>
</Wrapper>

export default PedidoDeAluguel