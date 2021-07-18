import './itemDetailContainer.css'
import {ItemDetail} from '../../components/itemDetail/itemDetail'
import {useEffect, useState} from 'react'


export const ItemDetailContainer = ()=>{

    const [item, setItems] = useState([])

    useEffect(()=> {

        const getItems = () => {
            return( 
                {
                id: 1,
                title: 'CONJUNTO',
                price: '1950',
                pictureUrl: '',
                detalle: 'Conjunto de saquito mas pantalon lana',
                cantidad: 5,
                categoryId: 'conjuntos'
                }    
            )
        } 
        const item = getItems()
        setItems(item)
    },[])

    return(
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}
