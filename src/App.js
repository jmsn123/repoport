import {NavBar}from './components';
import {BrowserRouter as Router ,Switch,Route} from "react-router-dom"
import Global from "./Global"
import Home from "./pages/Home/Home" 
import Footer from './components/Footer/Footer';
function App() {
  return (
<Router>
    <Global/>
  <NavBar/>
  <Switch>
    <Route path="/" exact component={Home}/>
  </Switch>
  <Footer/>
</Router>     
  );
}

export default App;
