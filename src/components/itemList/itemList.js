import './itemList.css'
import {Item} from '../item/item'
import {Fragment} from 'react'

export const ItemList = ({items})=>{
    return(
        <Fragment>
            {items.map((itemIndiv)=> <Item item ={itemIndiv} key ={itemIndiv.id} />)}
        </Fragment>
    )
}