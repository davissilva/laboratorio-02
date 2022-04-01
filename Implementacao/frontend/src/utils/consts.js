import CrudUsuario from '../components/crudUsuarios'
import Home from '../components/home'
import PedidoDeAluguel from '../components/pedidoDeAluguel'
import Login from '../components/login'
import Logout from '../components/logout'

export const pages = [{
    label: "Página inicial",
    path: '/',
    component: Home
}, {
    label: 'Crud Usuário',
    path: '/crudUsuario',
    component: CrudUsuario
}, {
    label: 'Pedido de Aluguel',
    path: '/pedidoDeAluguel',
    component: PedidoDeAluguel
}, {
    label: 'Login',
    path: '/login',
    component: Login
}, {
    label: 'Logout',
    path: '/logout',
    component: Logout
}]

export const ClientData = [{
    label: 'RG',
    type: 'text',
    prop: 'RG'
}, {
    label: 'CPF',
    type: 'text',
    prop: ' CPF'
}, {
    label: 'Nome',
    type: 'text',
    prop: 'nome'
}, {
    label: 'Entidade Empregadora',
    type: 'text',
    prop: 'entidadeEmpregadora'
}, {
    label: 'Rendimentos',
    type: 'number',
    prop: 'rendimentos'
}]