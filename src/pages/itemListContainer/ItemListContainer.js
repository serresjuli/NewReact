import './itemListContainer.css'
import {ItemList} from '../../components/itemList/itemList'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'
import ITEMS from '../../data/items.json'


export const ItemListContainer = ()=>{
    const {id} = useParams ()
    const [items, setItems] = useState([])
    

    useEffect(()=> {
        const getItems = () => {
            return id ? ITEMS.filter((item) => item.categoryId === id) : ITEMS  
        } 
        const items = getItems()
        setItems(items)
    },[id])

    return(
        <div>
            <ItemList items={items}/>
        </div>
    )
}