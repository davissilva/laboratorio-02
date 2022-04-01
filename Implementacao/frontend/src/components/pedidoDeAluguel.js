import Menu from './menu'
import styled from 'styled-components'
import { useState, useEffect } from 'react'
import { HEADERS } from './crudUsuarios'

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
    const [pedidosDeAluguel, setPedidosDeAluguel] = useState([])
    const [update, setUpdate] = useState(false)


    useEffect(() => fetch('pedidosDeAluguel').then(res => res.json())
        .then(res => {
            setPedidosDeAluguel(res)
        })
        , [update])

    const salvarPedidoDeAluguel = () => fetch('pedidosDeAluguel', {
        method: 'POST',
        headers: HEADERS,
        body: JSON.stringify({
            ano: ano,
            placa: placa,
            modelo: modelo,
            marca: marca,
            matricula: matricula
        })
    }).then(() => setUpdate(!update))

    return <Wrapper>
        <Menu />
        <h1>Pedido de Aluguel</h1>
        <h2>Dados do automóvel</h2>
        <input type="number" onChange={e => setAno(e.target.value)} placeholder="Ano" />
        <input type="text" onChange={e => setPlaca(e.target.value)} placeholder="Placa" />
        <input type="text" onChange={e => setModelo(e.target.value)} placeholder="Modelo" />
        <input type="text" onChange={e => setMarca(e.target.value)} placeholder="Marca" />
        <input type="text" onChange={e => setMatricula(e.target.value)} placeholder="Matricula" />
        <button onClick={() => salvarPedidoDeAluguel()}>Salvar Pedido</button>
        {pedidosDeAluguel.length > 0 && <><h1>Pedidos De Aluguel</h1>
            {pedidosDeAluguel.map((pedidoDeAluguel, i) => <p key={i}>{JSON.stringify(pedidoDeAluguel)}</p>)}
        </>}
    </Wrapper>
}

export default PedidoDeAluguel