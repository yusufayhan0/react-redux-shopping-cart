
import { connect } from "react-redux"
import { data } from "../data"
import { Link } from "react-router-dom";
import React, { Component } from 'react'
import {sepeteEkle } from "../redux/actions/actions"
import { bindActionCreators } from "redux";

class Product extends Component {
    render() {
        return (
            <div>
                <h2>
                    <span>Kitap Listesi</span><br/>
                    <Link to="/cart">Sepetim</Link>
                    
                </h2>
                {this.props.bookList.map(a=>
                    <div className="book" key={a.id}>
                    <img
                        src={a.image}
                        alt="Simyaci"
                    />
                    <div>
                        <h4>{a.name}</h4>
                        <p>Yazar: {a.author}</p>
                        <p>Fiyat: &#8378; {a.price}</p>
                        <button onClick={()=>this.props.sepeteEkle(a)}>Sepete Ekle</button>
                    </div>
                </div>
                )}
                {console.log(this.props.cart)}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        bookList: state.bookList,
        cart: state.cart
    }
}

// const mapActionsToProps=()=>({
//    sepeteEkle:bindActionCreators(sepeteEkle,dispatch)
// })

// const mapActionsToProps=({sepeteEkle})
// export default connect(mapStateToProps,mapActionsToProps)(Product);


export default connect(mapStateToProps,{sepeteEkle})(Product);