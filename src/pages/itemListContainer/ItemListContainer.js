import './itemListContainer.css'
import {ItemList} from '../../components/itemList/itemList'
import {useEffect, useState} from 'react'


export const ItemListContainer = ()=>{

    const [items, setItems] = useState([])

    useEffect(()=> {

        const getItems = () => {
            return [
                {
                id: 1,
                title: 'CONJUNTO',
                price: 1950,
                pictureUrl: '',
                detalle: 'Conjunto de saquito mas pantalon lana',
                cantidad: 5,
                categoryId: 'conjuntos'
                },
                {
                id: 2,
                title: 'CHALECO',
                price: 890,
                pictureUrl: '',
                detalle: 'Chaleco individual escote en V en lana',
                cantidad: 3,
                categoryId: 'saquitos'
                },
                {
                id: 3,
                title: 'RANITA',
                price: 1050,
                pictureUrl: '',
                detalle: 'Ranita con cordon regulable en lana',
                cantidad: 0,
                categoryId: 'pantalones'
                }
            ]
        } 
        const items = getItems()
        setItems(items)
    },[])

    return(
        <div>
            <ItemList items={items}/>
        </div>
    )
}