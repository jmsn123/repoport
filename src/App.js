import {NavBar}from './components';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Global from "./Global"
import Home from "./pages/Home/Home" 
import Footer from './components/Footer/Footer';
import Contact from "./pages/Contact/Contact"
function App() {
  return (
<Router>
    <Global/>
  <NavBar/>
  <Switch>
    <Route path="/" exact component={Home}/>
    <Route path="/Contact" component={Contact}/>
  </Switch>
  <Footer/>
</Router>     
  );
}

export default App;
