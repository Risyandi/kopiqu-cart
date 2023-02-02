import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addToCart } from './actions/cartActions';

class Home extends Component{
    handleClick = (id) => {
        this.props.addToCart(id);
    }

    render(){
        let itemList = this.props.items.map(item => {
            return(
                <div className="card pink lighten-5 hoverable" key={item.id}>
                        <div className="card-image">
                            <img src={item.img} alt={item.title}/>
                            <span to="/" className="btn-floating halfway-fab waves-effect waves-light red pulse" onClick={()=>{this.handleClick(item.id)}}><i className="material-icons">add</i></span>
                        </div>
                        <div className="card-content">
                                <span className="card-title">
                                    <strong>
                                    {item.title}
                                    </strong>
                                </span>
                            <p>{item.desc}</p>
                        </div>
                        <div className="card-content">
                            <p><b>Price: Rp. {item.price}K</b></p>
                        </div>
                 </div>
            )
        });

        return(
            <div className="container">
                <h3 className="center">Our Coffe</h3>
                <div className="box">
                    {itemList}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.items
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => {
            dispatch(addToCart(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)