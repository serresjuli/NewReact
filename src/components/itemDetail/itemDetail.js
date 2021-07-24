import './itemDetail.css'
import {ItemCount} from '../itemCount/itemCount'
import {Link} from 'react-router-dom'

const onAdd = (quantitiToAdd) =>{
    
    document.getElementsByClassName('btnSumarCarrito').style.visibility="hidden"
    
}

export const ItemDetail = ({item})=>{
    return(
        <div className='ConstructorProductoDetail'>
            <img className='img img__box' src={item.pictureUrl} alt='productodetail'></img>
            <h2 className='title__box'>{item.title}</h2>
            <span className='detail__box'>{item.detalle}</span>
            <p className='p__box'>${item.price}</p>
            <ItemCount onAdd={onAdd} stock={5} initial={1}/>
            <Link to={'/cart'}>
                <button className='btnTerminarCompra'>Terminar compra </button> 
            </Link>
        </div>
    )
}