import "../style.css"
import {connect} from "react-redux"
import {data} from "../data"
import { Link, Route } from "react-router-dom";
import Product from "./Product"
import Cart from "./Cart"


function App(props) {
  return (
    <div>
      
      
      <Route exact path="/" component={Product} />
      <Route path="/cart" component={Cart} />
    </div>
  );
}


export default App
