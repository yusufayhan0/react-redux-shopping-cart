import React, { Component } from 'react'

import { connect } from "react-redux"
import { data } from "../data"
import { Link } from "react-router-dom";
import {sepettenCikar } from "../redux/actions/actions"
import { bindActionCreators } from "redux";

class Cart extends Component {
    render() {
        const totalPrice=this.props.cart.reduce((total,item)=>total+=item.price,0)
        return (            
            <div>
                <div>
                <h2>
                    <span>Sepet Listesi</span>
                    <Link to="/">Kitap Listesi</Link><hr/>
                    
                    
                    <strong>Toplam sepet tutarı : {totalPrice.toFixed(2)}</strong>
                </h2>
                {this.props.cart.map(a=>
                    <div className="book" key={a.id}>
                    <img
                        src={a.image}
                        alt="Simyaci"
                    />
                    <div>
                        <h4>{a.name}</h4>
                        <p>Yazar: {a.author}</p>
                        <p>Fiyat: &#8378; {a.price}</p>
                        <button onClick={()=>this.props.sepettenCikar(a)}>Sepeten Çıkar</button>
                    </div>
                </div>
                )}
                {console.log(this.props.cart)}
            </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}


export default connect(mapStateToProps,{sepettenCikar})(Cart)