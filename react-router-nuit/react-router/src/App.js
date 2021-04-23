// import './App.css';
// import About from './Components/About';
// import Home from './Components/Home';
// import { BrowserRouter, Route, Switch } from 'react-router-dom'
// import Contact from './Components/Contact';
// import NotFound from './Components/NotFound';
// import Menu from './Components/Menu';
// import Routes from './Routes'
// import Item from './Components/Item';

// function App() {
//   return (
//     <BrowserRouter>
//       <div className="App">
//         {/* < About />
//       <Home /> */}
//         <Menu />
//         <Switch>
//           {Routes && Routes.length ? Routes.map((route, index) => {
//             return (<Route key={index}
//               path={route.path}
//               exact={route.exact}
//               component={route.main}
//             />)
//           }) : null}
//         </Switch>
//       </div>
//     </BrowserRouter>
//   );
// }

// export default App;



import React from 'react';
import { BrowserRouter as Router, Link, NavLink, Route, Switch } from 'react-router-dom'
import Menu from './Pages/Menu';
import Routers from './Routes'


function App() {
  return (
    < Router >

      <div>

        <Menu />
        <Switch>
          {

            Routers && Routers.length ? Routers.map((route, index) => {
              return (<Route key={index}
                path={route.path}
                exact={route.exact}
                component={route.content}
              />
              )
            }) : null
          }
        </Switch>

      </div>
    </Router >
  );
}

export default App;
