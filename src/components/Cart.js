import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';
import {removeItem, addQuantity, subtractQuantity} from './actions/cartActions';
import Recipe from './Recipe';

class Cart extends Component {

    //to remove the item completely
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {
        let addedItems = this.props.items.length
            ? (this.props.items.map(item => {
                return (

                    <li className="collection-item avatar" key={item.id}>
                        <div className="item-img">
                            <img src={item.img} alt={item.img} className=""/>
                        </div>

                        <div className="item-desc">
                            <span className="title">{item.title}</span>
                            <p>{item.desc}</p>
                            <p>
                                <b>Price: Rp. {item.price}K</b>
                            </p>
                            <p>
                                <b>Quantity: {item.quantity}</b>
                            </p>
                            <div className="add-remove">
                                <Link to="/cart">
                                    <i
                                        className="material-icons"
                                        onClick={() => {
                                        this.handleAddQuantity(item.id)
                                    }}>add_circle</i>
                                </Link>
                                <Link to="/cart">
                                    <i
                                        className="material-icons"
                                        onClick={() => {
                                        this.handleSubtractQuantity(item.id)
                                    }}>do_not_disturb_on</i>
                                </Link>
                            </div>
                            <button
                                className="waves-effect waves-light btn pink remove"
                                onClick={() => {
                                this.handleRemove(item.id)
                            }}>Remove</button>
                        </div>

                    </li>

                )
            }))
            : (
                <p className="item-empty">No Items you ordered !</p>
            )
        return (
            <div className="container">
                <div className="cart">
                    <h5>You have ordered:</h5>
                    <ul className="collection">
                        {addedItems}
                        <Recipe/>
                    </ul>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        items: state.addedItems,
        //addedItems: state.addedItems
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => {
            dispatch(removeItem(id))
        },
        addQuantity: (id) => {
            dispatch(addQuantity(id))
        },
        subtractQuantity: (id) => {
            dispatch(subtractQuantity(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)