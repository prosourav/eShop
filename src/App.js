import Header from "./containers/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductListing from "./containers/ProductListing";
import ProductDetail from "./containers/ProductDetail";
function App() {
  return (
    <Router>
      <div className="App">
        <div style={{ margin: "70px 0px" }}>
          <Header></Header>
        </div>

        <Switch>
          <Route path="/" exact component={ProductListing} />
          <Route path="/home" component={ProductListing} />
          <Route path="/product/:productId" component={ProductDetail} />
          <Route path="*">404 NOT FOUND</Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
