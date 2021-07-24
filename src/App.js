import {ItemListContainer} from "./pages/itemListContainer/ItemListContainer";
import {NavBar} from "./components/navBar/NavBar";
import {ItemDetailContainer} from './pages/itemDetailContainer/itemDetailContainer';
import {Cart} from './pages/Cart/cart'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'


export const App = () => {
  return(
    <Router>
      <NavBar/>
      <Switch>
        <Route exact path='/'>
          <ItemListContainer/>
        </Route>
        <Route exact path='/category/:id'>
          <ItemListContainer/>
        </Route>
        <Route exact path='/item/:id'>
          <ItemDetailContainer/>
        </Route>
        <Route exact path='/cart'>
          <Cart/>
        </Route>
      </Switch>
    </Router>
  )
}

