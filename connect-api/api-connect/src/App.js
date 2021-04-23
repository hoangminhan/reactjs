import './App.css';
import Menu from './components/Menu/Menu';
import routes from './routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="App">

        <Menu />

        <div className="container">

          <Switch>
            {
              routes && routes.length ? routes.map((route, index) => {
                return (<Route key={index} path={route.path} component={route.content} exact={route.exact} />)
              }) : null
            }
          </Switch>
        </div>


      </div>
    </Router>
  );
}

export default App;
