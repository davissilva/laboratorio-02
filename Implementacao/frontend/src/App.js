import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useState, useEffect, createContext } from 'react'
import './App.css';
import { pages } from './utils/consts.js'


export const ThemeContext = createContext({
  isLogged: false,
  setIsLogged: () => { },
  usuario: {}
});

const App = () => {
  const [isLogged, setIsLogged] = useState(false)
  const [usuario, setUsuario] = useState({})

  return (
    <ThemeContext.Provider value={{
      isLogged: isLogged,
      setIsLogged: setIsLogged,
      usuario: usuario,
      setUsuario: setUsuario
    }}>
      <Router>
        <Switch>
          {pages.map((page, i) => <Route key={i}
            path={page.path} exact={true}
            component={page.component} />)}
        </Switch>
      </Router>
    </ThemeContext.Provider>
  );
}

export default App
