import CrudUsuario from '../components/crudUsuarios'
import Home from '../components/home'
import PedidoDeAluguel from '../components/pedidoDeAluguel'

export const pages = [{
    label: "Página inicial",
    path: '/',
    component: Home
}, {
    label: 'Crud Usuário',
    path: '/crudUsuario',
    component: CrudUsuario
},{
    label: 'Pedido de Aluguel',
    path: '/pedidoDeAluguel',
    component: PedidoDeAluguel
}]