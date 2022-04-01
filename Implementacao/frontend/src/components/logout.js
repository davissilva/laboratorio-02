import { Redirect } from 'react-router-dom';
import { useEffect, useContext } from 'react';
import { ThemeContext } from '../App'

const Logout = () => {
    const { isLogged, setIsLogged, setUsuario } = useContext(ThemeContext)

    useEffect(() => {
        setIsLogged(false)
        setUsuario({})
    }, [isLogged])

    return (<Redirect to="/" />)
}

export default Logout