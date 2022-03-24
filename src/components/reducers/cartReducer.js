import ItemImages from './productImages';
import {ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY, ADD_QUANTITY, ADD_SHIPPING, SUB_SHIPPING} from '../actions/action-types/cart-actions';

const initState = {
    items: [
        {
            id: 1,
            title: 'Arcaffe Mokacrema',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 100,
            img: ItemImages[0]
        }, {
            id: 2,
            title: 'Colombia Cauca Julian Palomino',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 80,
            img: ItemImages[1]
        }, {
            id: 3,
            title: 'Hard Beans - Guatemala',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 120,
            img: ItemImages[2]
        }, {
            id: 4,
            title: 'johan & Nystrom - Brazil Fortaleza',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 260,
            img: ItemImages[3]
        }, {
            id: 5,
            title: 'johan & Nystrom - Ekspresso 5 Estate',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 160,
            img: ItemImages[4]
        }, {
            id: 6,
            title: 'johan & Nystrom - Ekspresso Isola',
            desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, ex.",
            price: 90,
            img: ItemImages[5]
        }
    ],
    addedItems: [],
    total: 0
}

const cartReducer = (state = initState, action) => {

    if (action.type === ADD_TO_CART) {
        let addedItem = state
            .items
            .find(item => item.id === action.id)
        let existed_item = state
            .addedItems
            .find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price
            }
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price

            return {
                ...state,
                addedItems: [
                    ...state.addedItems,
                    addedItem
                ],
                total: newTotal
            }

        }
    }

    if (action.type === REMOVE_ITEM) {
        let itemToRemove = state
            .addedItems
            .find(item => action.id === item.id)
        let new_items = state
            .addedItems
            .filter(item => action.id !== item.id)

        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        console.log(itemToRemove)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if (action.type === ADD_QUANTITY) {
        let addedItem = state
            .items
            .find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal
        }
    }

    if (action.type === SUB_QUANTITY) {
        let addedItem = state
            .items
            .find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state
                .addedItems
                .filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal
            }
        }

    }

    if (action.type === ADD_SHIPPING) {
        return {
            ...state,
            total: state.total + 5
        }
    }

    if (action.type === SUB_SHIPPING) {
        return {
            ...state,
            total: state.total - 5
        }
    } else {
        return state
    }

}

export default cartReducer
