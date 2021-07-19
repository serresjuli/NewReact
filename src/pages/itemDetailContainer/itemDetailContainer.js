import './itemDetailContainer.css'
import {ItemDetail} from '../../components/itemDetail/itemDetail'
import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'


export const ItemDetailContainer = ()=>{
    const {id} = useParams ()
    const [item, setItems] = useState([])
    console.log(id)

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
