import Menu from './menu'
import styled from 'styled-components'
import {useState} from 'react' 

const Wrapper = styled.div`
    h1{
        text-align: center;
        padding: 8px;
    }
`


const PedidoDeAluguel = () => {
    const [ano, setAno] = useState(2020)
    const [placa, setPlaca] = useState('')
    const [modelo, setModelo] = useState('')
    const [marca, setMarca] = useState('')
    const [matricula, setMatricula] = useState('')

    return <Wrapper>
        <Menu />
        <h1>Pedido de Aluguel</h1>
        <h2>Dados do automóvel</h2>
        <input type="number" onChange={e => setAno(e.target.value)} placeHolder="Ano" />
        <input type="text" onChange={e => setPlaca(e.target.value)} placeHolder="Placa" />
        <input type="text" onChange={e => setModelo(e.target.value)} placeHolder="Modelo" />
        <input type="text" onChange={e => setMarca(e.target.value)} placeHolder="Marca"/>
        <input type="text" onChange={e => setMatricula(e.target.value)} placeHolder="Matricula" />
        <button>Salvar Pedido</button>
    </Wrapper>
}

export default PedidoDeAluguel