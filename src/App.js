import { NavBar } from "./components";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Global from "./Global";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/Contact/Contact";
import Blog from "./pages/Blog/";
import Portfolio from "./pages/Portfolio";
function App() {
  return (
    <Router>
      <Global />
      <NavBar bg={false} />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Blog" component={Blog} />
        <Route path="/Services" component={Portfolio} />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
